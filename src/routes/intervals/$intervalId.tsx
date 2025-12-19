import { createFileRoute, ClientOnly } from '@tanstack/react-router';
import { ConvexHttpClient } from 'convex/browser';
import { api } from '../../../convex/_generated/api';
import { useIntervalsContext } from '../../contexts/IntervalsContext';
import { IntervalDetail } from '../../components/IntervalDetail';
import type { Interval } from '../../types/interval';

export const Route = createFileRoute('/intervals/$intervalId')({
  loader: async ({ params }) => {
    const convexUrl = import.meta.env.VITE_CONVEX_URL;
    if (!convexUrl) return { interval: null };

    const httpClient = new ConvexHttpClient(convexUrl);
    try {
      const interval = await httpClient.query(api.intervals.get, { id: params.intervalId });
      return { interval };
    } catch {
      return { interval: null };
    }
  },
  component: IntervalPageComponent,
});

function IntervalPageComponent() {
  const { intervalId } = Route.useParams();
  const { interval: ssrInterval } = Route.useLoaderData();

  return (
    <ClientOnly
      fallback={
        ssrInterval ? (
          <StaticIntervalView interval={ssrInterval as Interval} />
        ) : (
          <IntervalLoading />
        )
      }
    >
      <LiveIntervalView intervalId={intervalId} />
    </ClientOnly>
  );
}

function LiveIntervalView({ intervalId }: { intervalId: string }) {
  const { collection, intervals, isLoading } = useIntervalsContext();
  const interval = intervals.find((i) => i.id === intervalId);

  if (isLoading) {
    return <IntervalLoading />;
  }

  if (!interval) {
    return <IntervalNotFound />;
  }

  return <IntervalDetail intervalId={intervalId} collection={collection} interval={interval} />;
}

function StaticIntervalView({ interval }: { interval: Interval }) {
  return (
    <div className="interval-detail">
      <div className="interval-detail-header">
        <h1 className="interval-title">{interval.title || 'Untitled'}</h1>
      </div>
      <div className="interval-detail-body">
        <div className="interval-description-placeholder">Loading editor...</div>
      </div>
    </div>
  );
}

function IntervalLoading() {
  return (
    <div className="interval-loading">
      <div className="interval-loading-pulse" />
    </div>
  );
}

function IntervalNotFound() {
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
        <h2>Interval not found</h2>
        <p>This interval doesn't exist or was deleted.</p>
        <a href="/intervals" className="error-state-link">
          Go back to intervals
        </a>
      </div>
    </div>
  );
}
