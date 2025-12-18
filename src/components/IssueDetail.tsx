import { ArrowLeft, Trash2 } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { IssueEditor } from './IssueEditor';
import { IssueProperties } from './IssueProperties';
import { CommentList } from './CommentList';
import { Button } from './ui/button';
import type { Issue } from '../types/issue';
import type { useIssues } from '../collections/useIssues';

interface IssueDetailProps {
  issueId: string;
  collection: ReturnType<typeof useIssues>;
  issue: Issue;
}

export function IssueDetail({ issueId, collection, issue }: IssueDetailProps) {
  const navigate = useNavigate();

  const handlePropertyUpdate = (updates: Partial<Pick<Issue, 'status' | 'priority'>>) => {
    collection.update(issueId, (draft: Issue) => {
      if (updates.status !== undefined) draft.status = updates.status;
      if (updates.priority !== undefined) draft.priority = updates.priority;
      draft.updatedAt = Date.now();
    });
  };

  const handleDelete = () => {
    collection.delete(issueId);
    navigate({ to: '/issues' });
  };

  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background">
        <Button variant="ghost" size="sm" onClick={() => navigate({ to: '/issues' })}>
          <ArrowLeft size={16} />
          Back
        </Button>
        <Button variant="ghost" size="sm" className="text-destructive" onClick={handleDelete}>
          <Trash2 size={16} />
          Delete
        </Button>
      </div>

      {/* Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Main content */}
        <div className="flex-1 overflow-auto">
          <IssueEditor issueId={issueId} collection={collection} issue={issue} />
          <CommentList issueId={issueId} />
        </div>

        {/* Sidebar */}
        <aside className="w-64 shrink-0 border-l border-border overflow-auto bg-card">
          <IssueProperties issue={issue} onUpdate={handlePropertyUpdate} />
        </aside>
      </div>
    </div>
  );
}
