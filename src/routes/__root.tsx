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
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useHotkeys } from 'react-hotkeys-hook';
import { ConvexRxErrorBoundary } from '../components/ErrorBoundary';
import { Sidebar } from '../components/Sidebar';
import { SearchPanel } from '../components/SearchPanel';
import { NotebooksProvider, useNotebooksContext } from '../contexts/NotebooksContext';
import type { Notebook } from '../collections/useNotebooks';

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
      // Load distinctive fonts
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap',
      },
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
          {convexReactClient ? (
            <ConvexProvider client={convexReactClient}>{children}</ConvexProvider>
          ) : (
            children
          )}
          <TanStackDevtools
            config={{ position: 'bottom-right' }}
            plugins={[{ name: 'Tanstack Router', render: <TanStackRouterDevtoolsPanel /> }]}
          />
        </ConvexRxErrorBoundary>
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

  return (
    <ClientOnly
      fallback={
        <div className="app-layout">
          <aside className="sidebar sidebar-loading-state">
            <div className="sidebar-header">
              <h1 className="sidebar-title">Notebook</h1>
            </div>
          </aside>
          <main className="main-content">
            <Outlet />
          </main>
        </div>
      }
    >
      <LiveAppLayout
        isSearchOpen={isSearchOpen}
        onSearchOpen={() => setIsSearchOpen(true)}
        onSearchClose={() => setIsSearchOpen(false)}
      />
    </ClientOnly>
  );
}

interface LiveAppLayoutProps {
  isSearchOpen: boolean;
  onSearchOpen: () => void;
  onSearchClose: () => void;
}

function LiveAppLayout({ isSearchOpen, onSearchOpen, onSearchClose }: LiveAppLayoutProps) {
  return (
    <NotebooksProvider>
      <AppContent
        isSearchOpen={isSearchOpen}
        onSearchOpen={onSearchOpen}
        onSearchClose={onSearchClose}
      />
    </NotebooksProvider>
  );
}

function AppContent({ isSearchOpen, onSearchOpen, onSearchClose }: LiveAppLayoutProps) {
  const { collection } = useNotebooksContext();
  const navigate = useNavigate();

  const createNewNotebook = useCallback(async () => {
    const id = crypto.randomUUID();
    const now = Date.now();

    await collection.insert({
      id,
      title: 'Untitled',
      content: {
        type: 'doc',
        content: [{ type: 'paragraph' }],
      },
      createdAt: now,
      updatedAt: now,
    } as Notebook);

    navigate({ to: '/notebooks/$notebookId', params: { notebookId: id } });
  }, [collection, navigate]);

  // Global Alt+N to create new notebook
  useHotkeys(
    'alt+n',
    () => {
      createNewNotebook();
    },
    { preventDefault: true },
    [createNewNotebook]
  );

  return (
    <div className="app-layout">
      <Sidebar onSearchOpen={onSearchOpen} />
      <main className="main-content">
        <Outlet />
      </main>
      <SearchPanel isOpen={isSearchOpen} onClose={onSearchClose} />
    </div>
  );
}
