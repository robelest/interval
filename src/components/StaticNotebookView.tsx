import type { Notebook } from '../types/notebook';
import { ContentRenderer } from './ContentRenderer';

interface StaticNotebookViewProps {
  notebook: Notebook;
}

/**
 * Server-side rendered view of a notebook.
 * Provides instant content display before BlockNote hydrates.
 */
export function StaticNotebookView({ notebook }: StaticNotebookViewProps) {
  return (
    <div className="editor-container static-view">
      <div className="editor-header">
        <h1 className="editor-title">{notebook.title || 'Untitled'}</h1>
        <p className="editor-meta">
          Last edited {formatRelativeTime(notebook.updatedAt)}
        </p>
      </div>

      <div className="editor-content">
        <div className="static-content-overlay">
          <div className="static-loading-indicator">
            <div className="loading-dot" />
            <div className="loading-dot" />
            <div className="loading-dot" />
          </div>
        </div>
        <ContentRenderer content={notebook.content} />
      </div>
    </div>
  );
}

function formatRelativeTime(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;

  return new Date(timestamp).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}
