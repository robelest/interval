import { createFileRoute, ClientOnly } from '@tanstack/react-router';
import { ConvexHttpClient } from 'convex/browser';
import { api } from '../../../convex/_generated/api';
import { useNotebooksContext } from '../../contexts/NotebooksContext';
import { NotebookEditor } from '../../components/NotebookEditor';
import { StaticNotebookView } from '../../components/StaticNotebookView';
import type { Notebook } from '../../types/notebook';

export const Route = createFileRoute('/notebooks/$notebookId')({
  loader: async ({ params }) => {
    const convexUrl = import.meta.env.VITE_CONVEX_URL;
    if (!convexUrl) return { notebook: null };

    const httpClient = new ConvexHttpClient(convexUrl);
    try {
      const notebook = await httpClient.query(api.notebooks.get, { id: params.notebookId });
      return { notebook };
    } catch {
      return { notebook: null };
    }
  },
  component: NotebookPageComponent,
});

function NotebookPageComponent() {
  const { notebookId } = Route.useParams();
  const { notebook: ssrNotebook } = Route.useLoaderData();

  return (
    <ClientOnly
      fallback={
        ssrNotebook ? (
          <StaticNotebookView notebook={ssrNotebook as Notebook} />
        ) : (
          <NotebookLoading />
        )
      }
    >
      <LiveNotebookView notebookId={notebookId} />
    </ClientOnly>
  );
}

function LiveNotebookView({ notebookId }: { notebookId: string }) {
  const { collection, notebooks, isLoading } = useNotebooksContext();
  const notebook = notebooks.find((n) => n.id === notebookId);

  if (isLoading) {
    return <NotebookLoading />;
  }

  if (!notebook) {
    return <NotebookNotFound />;
  }

  return <NotebookEditor notebookId={notebookId} collection={collection} notebook={notebook} />;
}

function NotebookLoading() {
  return (
    <div className="notebook-loading">
      <div className="notebook-loading-pulse" />
    </div>
  );
}

function NotebookNotFound() {
  return (
    <div className="error-state">
      <div className="error-state-content">
        <div className="error-state-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-labelledby="error-icon-title"
            role="img"
          >
            <title id="error-icon-title">Error icon</title>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h2>Notebook not found</h2>
        <p>This notebook doesn't exist or was deleted.</p>
        <a href="/notebooks" className="error-state-link">
          Go back to notebooks
        </a>
      </div>
    </div>
  );
}
