import { createFileRoute, ClientOnly } from '@tanstack/react-router';
import { ConvexHttpClient } from 'convex/browser';
import { api } from '../../../convex/_generated/api';
import { useNotebooks } from '../../collections/useNotebooks';
import { NotebookEditor } from '../../components/NotebookEditor';
import { StaticNotebookView } from '../../components/StaticNotebookView';
import type { Notebook } from '../../types/notebook';
import type { Materialized } from '@trestleinc/replicate/client';

const httpClient = new ConvexHttpClient((import.meta as any).env.VITE_CONVEX_URL!);

export const Route = createFileRoute('/notebooks/$notebookId')({
  loader: async ({ params }) => {
    // Fetch both the specific notebook and material for SSR
    const [notebook, material] = await Promise.all([
      httpClient.query(api.notebooks.get, { id: params.notebookId }),
      httpClient.query(api.notebooks.material),
    ]);

    if (!notebook) {
      throw new Error('Notebook not found');
    }

    return { notebook, material };
  },
  component: NotebookPageComponent,
  errorComponent: NotebookErrorComponent,
});

function NotebookPageComponent() {
  const { notebook, material } = Route.useLoaderData();
  const { notebookId } = Route.useParams();

  return (
    <ClientOnly
      fallback={<StaticNotebookView notebook={notebook as Notebook} />}
    >
      <LiveNotebookView
        notebookId={notebookId}
        initialNotebook={notebook as Notebook}
        material={material as Materialized<Notebook>}
      />
    </ClientOnly>
  );
}

interface LiveNotebookViewProps {
  notebookId: string;
  initialNotebook: Notebook;
  material: Materialized<Notebook>;
}

function LiveNotebookView({ notebookId, initialNotebook, material }: LiveNotebookViewProps) {
  const collection = useNotebooks(material);

  return (
    <NotebookEditor
      notebookId={notebookId}
      collection={collection}
      notebook={initialNotebook}
    />
  );
}

function NotebookErrorComponent({ error }: { error: Error }) {
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
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h2>Notebook not found</h2>
        <p>{error.message}</p>
        <a href="/notebooks" className="error-state-link">
          Go back to notebooks
        </a>
      </div>
    </div>
  );
}
