import { createFileRoute, redirect, useNavigate, ClientOnly } from '@tanstack/react-router';
import { ConvexHttpClient } from 'convex/browser';
import { Plus } from 'lucide-react';
import { api } from '../../../convex/_generated/api';
import { useNotebooks, type Notebook } from '../../collections/useNotebooks';
import { fragment } from '@trestleinc/replicate/client';

const httpClient = new ConvexHttpClient((import.meta as any).env.VITE_CONVEX_URL!);

export const Route = createFileRoute('/notebooks/')({
  loader: async () => {
    // Get list of notebooks to redirect to the most recent one
    const notebooks = await httpClient.query(api.notebooks.list);

    if (notebooks.length > 0) {
      // Redirect to the most recently updated notebook
      throw redirect({
        to: '/notebooks/$notebookId',
        params: { notebookId: notebooks[0].id },
      });
    }

    // No notebooks exist, will show empty state
    return { hasNotebooks: false };
  },
  component: NotebooksIndexComponent,
});

function NotebooksIndexComponent() {
  return (
    <ClientOnly fallback={<WelcomePageFallback />}>
      <LiveWelcomePage />
    </ClientOnly>
  );
}

function WelcomePageFallback() {
  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <div className="welcome-flourish">
          <svg
            viewBox="0 0 120 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          >
            <path d="M60 4 L64 12 L60 20 L56 12 Z" />
            <path d="M52 12 Q40 12 30 8" />
            <path d="M52 12 Q40 12 30 16" />
            <path d="M28 8 Q20 6 10 12" />
            <path d="M28 16 Q20 18 10 12" />
            <circle cx="8" cy="12" r="2" />
            <path d="M68 12 Q80 12 90 8" />
            <path d="M68 12 Q80 12 90 16" />
            <path d="M92 8 Q100 6 110 12" />
            <path d="M92 16 Q100 18 110 12" />
            <circle cx="112" cy="12" r="2" />
          </svg>
        </div>
        <h1 className="welcome-title">Start Writing</h1>
        <p className="welcome-subtitle">
          Your thoughts deserve a beautiful home.
          <br />
          Create your first page and let the words flow.
        </p>
        <button type="button" disabled className="welcome-cta">
          <Plus className="w-5 h-5" />
          <span>Loading...</span>
        </button>
      </div>
    </div>
  );
}

function LiveWelcomePage() {
  const navigate = useNavigate();
  const collection = useNotebooks();

  const handleCreateFirst = async () => {
    const id = crypto.randomUUID();
    const now = Date.now();

    await collection.insert({
      id,
      title: 'Untitled',
      content: fragment({
        type: 'doc',
        content: [{ type: 'paragraph' }],
      }),
      createdAt: now,
      updatedAt: now,
    } as Notebook);

    navigate({ to: '/notebooks/$notebookId', params: { notebookId: id } });
  };

  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <div className="welcome-flourish">
          <svg
            viewBox="0 0 120 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          >
            <path d="M60 4 L64 12 L60 20 L56 12 Z" />
            <path d="M52 12 Q40 12 30 8" />
            <path d="M52 12 Q40 12 30 16" />
            <path d="M28 8 Q20 6 10 12" />
            <path d="M28 16 Q20 18 10 12" />
            <circle cx="8" cy="12" r="2" />
            <path d="M68 12 Q80 12 90 8" />
            <path d="M68 12 Q80 12 90 16" />
            <path d="M92 8 Q100 6 110 12" />
            <path d="M92 16 Q100 18 110 12" />
            <circle cx="112" cy="12" r="2" />
          </svg>
        </div>

        <h1 className="welcome-title">Start Writing</h1>
        <p className="welcome-subtitle">
          Your thoughts deserve a beautiful home.
          <br />
          Create your first page and let the words flow.
        </p>

        <button type="button" onClick={handleCreateFirst} className="welcome-cta">
          <Plus className="w-5 h-5" />
          <span>Create Your First Page</span>
        </button>

        <p className="welcome-hint">
          or press <kbd>⌘</kbd> <kbd>N</kbd> anytime
        </p>
      </div>
    </div>
  );
}
