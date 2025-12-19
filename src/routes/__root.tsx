/// <reference types="vite/client" />
import { TanStackDevtools } from '@tanstack/react-devtools';
import type { QueryClient } from '@tanstack/react-query';
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
  ClientOnly,
} from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { configure, getConsoleSink, type LogRecord } from '@logtape/logtape';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { useState, useEffect } from 'react';
import { ConvexRxErrorBoundary } from '../components/ErrorBoundary';
import { ReloadPrompt } from '../components/ReloadPrompt';
import { Sidebar } from '../components/Sidebar';
import { SearchPanel } from '../components/SearchPanel';
import { IntervalsProvider } from '../contexts/IntervalsContext';
import { useCreateInterval } from '../hooks/useCreateInterval';

import appCss from '../styles.css?url';

try {
  await configure({
    sinks: {
      console: getConsoleSink({
        formatter(record: LogRecord): readonly unknown[] {
          let msg = '';
          const values: unknown[] = [];
          for (let i = 0; i < record.message.length; i++) {
            if (i % 2 === 0) msg += record.message[i];
            else {
              msg += '%o';
              values.push(record.message[i]);
            }
          }

          const hasProperties = Object.keys(record.properties).length > 0;
          const propsMsg = hasProperties ? ' | Props: %o' : '';

          return [
            `${record.level.toUpperCase()} %c${record.category.join('·')}%c ${msg}${propsMsg}`,
            'color: gray;',
            'color: default;',
            ...values,
            ...(hasProperties ? [record.properties] : []),
          ];
        },
      }),
    },
    loggers: [{ category: ['convex-replicate'], lowestLevel: 'debug', sinks: ['console'] }],
  });
} catch {
  // LogTape already configured during HMR - this is expected
}

// Create Convex client for React context
const convexUrl = import.meta.env.VITE_CONVEX_URL;
const convexReactClient = convexUrl ? new ConvexReactClient(convexUrl) : null;

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Interval' },
    ],
    links: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'stylesheet', href: appCss },
    ],
  }),

  component: AppLayout,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ConvexRxErrorBoundary>
          <ClientOnly
            fallback={
              convexReactClient ? (
                <ConvexProvider client={convexReactClient}>{children}</ConvexProvider>
              ) : (
                children
              )
            }
          >
            {convexReactClient ? (
              <ConvexProvider client={convexReactClient}>
                <IntervalsProvider>{children}</IntervalsProvider>
              </ConvexProvider>
            ) : (
              children
            )}
          </ClientOnly>
          <TanStackDevtools
            config={{ position: 'bottom-right' }}
            plugins={[{ name: 'Tanstack Router', render: <TanStackRouterDevtoolsPanel /> }]}
          />
        </ConvexRxErrorBoundary>
        <ReloadPrompt />
        <Scripts />
      </body>
    </html>
  );
}

function AppLayout() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Server-render the full layout structure
  // IntervalsProvider is in RootDocument, wrapping this on client
  return (
    <div className="app-layout">
      <Sidebar onSearchOpen={() => setIsSearchOpen(true)} />
      <main className="main-content">
        <Outlet />
      </main>
      <ClientOnly fallback={null}>
        <KeyboardShortcuts onSearchOpen={() => setIsSearchOpen(true)} />
        <SearchPanel isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </ClientOnly>
    </div>
  );
}

/**
 * Client-only keyboard shortcuts component.
 * Must be inside IntervalsProvider (via ClientOnly in RootDocument).
 */
function KeyboardShortcuts({ onSearchOpen }: { onSearchOpen: () => void }) {
  const createInterval = useCreateInterval();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts when typing in inputs/textareas
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      }

      // Cmd+K or Ctrl+K: Open search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onSearchOpen();
      }

      // Option+N (Alt+N): Create new interval
      // Use e.code for Mac compatibility (Option key produces special chars like ñ)
      if (e.altKey && e.code === 'KeyN') {
        e.preventDefault();
        createInterval();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onSearchOpen, createInterval]);

  return null;
}
