import type { Notebook } from '../types/notebook';
import { formatRelativeTime } from '../lib/date-utils';
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
        <p className="editor-meta">Last edited {formatRelativeTime(notebook.updatedAt)}</p>
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
