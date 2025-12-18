import { createFileRoute, ClientOnly } from '@tanstack/react-router';
import { ConvexHttpClient } from 'convex/browser';
import { api } from '../../../convex/_generated/api';
import { useIssuesContext } from '../../contexts/IssuesContext';
import { IssueDetail } from '../../components/IssueDetail';
import type { Issue } from '../../types/issue';

export const Route = createFileRoute('/issues/$issueId')({
  loader: async ({ params }) => {
    const convexUrl = import.meta.env.VITE_CONVEX_URL;
    if (!convexUrl) return { issue: null };

    const httpClient = new ConvexHttpClient(convexUrl);
    try {
      const issue = await httpClient.query(api.issues.get, { id: params.issueId });
      return { issue };
    } catch {
      return { issue: null };
    }
  },
  component: IssuePageComponent,
});

function IssuePageComponent() {
  const { issueId } = Route.useParams();
  const { issue: ssrIssue } = Route.useLoaderData();

  return (
    <ClientOnly
      fallback={ssrIssue ? <StaticIssueView issue={ssrIssue as Issue} /> : <IssueLoading />}
    >
      <LiveIssueView issueId={issueId} />
    </ClientOnly>
  );
}

function LiveIssueView({ issueId }: { issueId: string }) {
  const { collection, issues, isLoading } = useIssuesContext();
  const issue = issues.find((i) => i.id === issueId);

  if (isLoading) {
    return <IssueLoading />;
  }

  if (!issue) {
    return <IssueNotFound />;
  }

  return <IssueDetail issueId={issueId} collection={collection} issue={issue} />;
}

function StaticIssueView({ issue }: { issue: Issue }) {
  return (
    <div className="issue-detail">
      <div className="issue-detail-header">
        <h1 className="issue-title">{issue.title || 'Untitled'}</h1>
      </div>
      <div className="issue-detail-body">
        <div className="issue-description-placeholder">Loading editor...</div>
      </div>
    </div>
  );
}

function IssueLoading() {
  return (
    <div className="issue-loading">
      <div className="issue-loading-pulse" />
    </div>
  );
}

function IssueNotFound() {
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
        <h2>Issue not found</h2>
        <p>This issue doesn't exist or was deleted.</p>
        <a href="/issues" className="error-state-link">
          Go back to issues
        </a>
      </div>
    </div>
  );
}
