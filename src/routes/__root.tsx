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
import { NotebooksProvider } from '../contexts/NotebooksContext';

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
      { title: 'Notebook' },
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
                <NotebooksProvider>{children}</NotebooksProvider>
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

  // Keyboard shortcut for search (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Server-render the full layout structure
  // NotebooksProvider is in RootDocument, wrapping this on client
  return (
    <div className="app-layout">
      <Sidebar onSearchOpen={() => setIsSearchOpen(true)} />
      <main className="main-content">
        <Outlet />
      </main>
      <ClientOnly fallback={null}>
        <SearchPanel isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </ClientOnly>
    </div>
  );
}
