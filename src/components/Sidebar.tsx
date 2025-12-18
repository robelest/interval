import { Link, useNavigate, useParams, ClientOnly } from '@tanstack/react-router';
import { Plus, Search, Trash2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useIssuesContext } from '../contexts/IssuesContext';
import { useCreateIssue } from '../hooks/useCreateIssue';
import { StarIcon } from './StarIcon';
import { StatusIcon } from './StatusIcon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import type { Issue } from '../types/issue';

interface SidebarProps {
  onSearchOpen: () => void;
}

export function Sidebar({ onSearchOpen }: SidebarProps) {
  // Server-render the sidebar shell, client-only for issues list
  return (
    <aside className="w-[var(--sidebar-width)] min-w-[var(--sidebar-width)] h-screen sticky top-0 flex flex-col bg-sidebar overflow-hidden">
      {/* Header - server-rendered */}
      <div className="flex items-center justify-between px-3 py-3 border-b border-sidebar-border">
        <Link
          to="/issues"
          className="flex items-center gap-2 font-display text-base font-normal text-sidebar-foreground no-underline"
        >
          <StarIcon size={18} />
          <span>Interval</span>
        </Link>
        <Button variant="ghost" size="icon-sm" onClick={onSearchOpen} aria-label="Search issues">
          <Search className="w-4 h-4" />
        </Button>
      </div>

      {/* New Issue Button - server-rendered shell, client for action */}
      <div className="p-2">
        <ClientOnly fallback={<NewIssueButtonFallback />}>
          <NewIssueButton />
        </ClientOnly>
      </div>

      {/* Navigation - client-only (needs real-time data) */}
      <ScrollArea className="flex-1">
        <nav className="p-1">
          <ClientOnly fallback={<SidebarSkeleton />}>
            <SidebarIssuesList />
          </ClientOnly>
        </nav>
      </ScrollArea>
    </aside>
  );
}

function NewIssueButtonFallback() {
  return (
    <Button variant="outline" className="w-full justify-start gap-2" disabled>
      <Plus className="w-4 h-4" />
      <span>New Issue</span>
    </Button>
  );
}

function NewIssueButton() {
  const createIssue = useCreateIssue();

  return (
    <Button variant="outline" className="w-full justify-start gap-2" onClick={createIssue}>
      <Plus className="w-4 h-4" />
      <span>New Issue</span>
    </Button>
  );
}

function SidebarSkeleton() {
  return (
    <div className="space-y-2 p-2">
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-8 w-4/5" />
    </div>
  );
}

function SidebarIssuesList() {
  const { collection, issues, isLoading } = useIssuesContext();
  const navigate = useNavigate();
  const params = useParams({ strict: false });
  const activeId = (params as { issueId?: string }).issueId;

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const editInputRef = useRef<HTMLInputElement>(null);

  // Filter out items without valid ids and sort by updatedAt descending
  const sortedIssues = [...(issues as Issue[])]
    .filter((i): i is Issue => typeof i.id === 'string' && i.id.length > 0)
    .sort((a, b) => b.updatedAt - a.updatedAt);

  const handleStartRename = (id: string) => {
    const issue = issues.find((i) => i.id === id);
    if (issue) {
      setEditingId(id);
      setEditTitle(issue.title);
    }
  };

  const handleSaveRename = (id: string) => {
    if (editTitle.trim()) {
      collection.update(id, (draft: Issue) => {
        draft.title = editTitle.trim();
        draft.updatedAt = Date.now();
      });
    }
    setEditingId(null);
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    collection.delete(id);
    if (activeId === id) {
      const remaining = issues.filter((i) => i.id !== id);
      if (remaining.length > 0) {
        navigate({ to: '/issues/$issueId', params: { issueId: remaining[0].id } });
      } else {
        navigate({ to: '/issues' });
      }
    }
  };

  // Focus edit input when editing
  useEffect(() => {
    if (editingId && editInputRef.current) {
      editInputRef.current.focus();
      editInputRef.current.select();
    }
  }, [editingId]);

  if (isLoading) {
    return <SidebarSkeleton />;
  }

  if (sortedIssues.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 px-3 text-muted-foreground text-center text-sm">
        <StatusIcon status="backlog" size={24} className="mb-2 opacity-30" />
        <p className="m-0">No issues yet</p>
        <p className="m-0 text-xs opacity-60">Create your first issue</p>
      </div>
    );
  }

  return (
    <ul className="list-none m-0 p-0 flex flex-col">
      {sortedIssues.map((issue) => (
        <li key={issue.id}>
          {editingId === issue.id ? (
            <div className="flex items-center gap-2 px-3 py-2 bg-muted">
              <StatusIcon status={issue.status} size={14} className="shrink-0" />
              <Input
                ref={editInputRef}
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                onBlur={() => handleSaveRename(issue.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSaveRename(issue.id);
                  if (e.key === 'Escape') setEditingId(null);
                }}
                className="flex-1 h-6 text-sm p-1"
              />
            </div>
          ) : (
            <Link
              to="/issues/$issueId"
              params={{ issueId: issue.id }}
              className={cn(
                'group flex items-center gap-2 px-3 py-2 text-sm no-underline transition-colors',
                activeId === issue.id
                  ? 'bg-muted text-foreground border-l-2 border-sidebar-accent'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground border-l-2 border-transparent'
              )}
            >
              <StatusIcon status={issue.status} size={14} className="shrink-0" />
              <button
                type="button"
                className="flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-left bg-transparent border-none p-0 font-inherit text-inherit cursor-pointer"
                onDoubleClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleStartRename(issue.id);
                }}
              >
                {issue.title || 'Untitled'}
              </button>
              <Button
                variant="ghost"
                size="icon-xs"
                onClick={(e) => handleDelete(e, issue.id)}
                className="text-muted-foreground/40 hover:text-destructive hover:bg-destructive/10 transition-all"
                aria-label="Delete issue"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </Button>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
