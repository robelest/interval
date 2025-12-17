import { Link, useNavigate, useParams, ClientOnly } from '@tanstack/react-router';
import { Plus, Search, FileText, Trash2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useNotebooksContext } from '../contexts/NotebooksContext';
import { useCreateNotebook } from '../hooks/useCreateNotebook';
import { StarIcon } from './StarIcon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import type { Notebook } from '../collections/useNotebooks';

interface SidebarProps {
  onSearchOpen: () => void;
}

export function Sidebar({ onSearchOpen }: SidebarProps) {
  // Server-render the sidebar shell, client-only for notebooks list
  return (
    <aside className="w-[var(--sidebar-width)] min-w-[var(--sidebar-width)] h-screen sticky top-0 flex flex-col bg-sidebar overflow-hidden">
      {/* Header - server-rendered */}
      <div className="flex items-center justify-between px-3 py-3 border-b border-sidebar-border">
        <Link
          to="/notebooks"
          className="flex items-center gap-2 font-display text-base font-normal text-sidebar-foreground no-underline"
        >
          <StarIcon size={18} />
          <span>Notebook</span>
        </Link>
        <Button variant="ghost" size="icon-sm" onClick={onSearchOpen} aria-label="Search notebooks">
          <Search className="w-4 h-4" />
        </Button>
      </div>

      {/* New Page Button - server-rendered shell, client for action */}
      <div className="p-2">
        <ClientOnly fallback={<NewPageButtonFallback />}>
          <NewPageButton />
        </ClientOnly>
      </div>

      {/* Navigation - client-only (needs real-time data) */}
      <ScrollArea className="flex-1">
        <nav className="p-1">
          <ClientOnly fallback={<SidebarSkeleton />}>
            <SidebarNotebooksList />
          </ClientOnly>
        </nav>
      </ScrollArea>
    </aside>
  );
}

function NewPageButtonFallback() {
  return (
    <Button variant="outline" className="w-full justify-start gap-2" disabled>
      <Plus className="w-4 h-4" />
      <span>New Page</span>
    </Button>
  );
}

function NewPageButton() {
  const createNotebook = useCreateNotebook();

  return (
    <Button variant="outline" className="w-full justify-start gap-2" onClick={createNotebook}>
      <Plus className="w-4 h-4" />
      <span>New Page</span>
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

function SidebarNotebooksList() {
  const { collection, notebooks, isLoading } = useNotebooksContext();
  const navigate = useNavigate();
  const params = useParams({ strict: false });
  const activeId = (params as { notebookId?: string }).notebookId;

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const editInputRef = useRef<HTMLInputElement>(null);

  // Filter out items without valid ids and sort by updatedAt descending
  const sortedNotebooks = [...(notebooks as Notebook[])]
    .filter((n): n is Notebook => typeof n.id === 'string' && n.id.length > 0)
    .sort((a, b) => b.updatedAt - a.updatedAt);

  const handleStartRename = (id: string) => {
    const notebook = notebooks.find((n) => n.id === id);
    if (notebook) {
      setEditingId(id);
      setEditTitle(notebook.title);
    }
  };

  const handleSaveRename = (id: string) => {
    if (editTitle.trim()) {
      collection.update(id, (draft: Notebook) => {
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
      const remaining = notebooks.filter((n) => n.id !== id);
      if (remaining.length > 0) {
        navigate({ to: '/notebooks/$notebookId', params: { notebookId: remaining[0].id } });
      } else {
        navigate({ to: '/notebooks' });
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

  if (sortedNotebooks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 px-3 text-muted-foreground text-center text-sm">
        <FileText className="w-8 h-8 mb-2 opacity-30" />
        <p className="m-0">No pages yet</p>
        <p className="m-0 text-xs opacity-60">Create your first page</p>
      </div>
    );
  }

  return (
    <ul className="list-none m-0 p-0 flex flex-col">
      {sortedNotebooks.map((notebook) => (
        <li key={notebook.id}>
          {editingId === notebook.id ? (
            <div className="flex items-center gap-2 px-3 py-2 bg-muted">
              <FileText className="w-4 h-4 shrink-0 text-muted-foreground" />
              <Input
                ref={editInputRef}
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                onBlur={() => handleSaveRename(notebook.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSaveRename(notebook.id);
                  if (e.key === 'Escape') setEditingId(null);
                }}
                className="flex-1 h-6 text-sm p-1"
              />
            </div>
          ) : (
            <Link
              to="/notebooks/$notebookId"
              params={{ notebookId: notebook.id }}
              className={cn(
                'group flex items-center gap-2 px-3 py-2 text-sm no-underline transition-colors',
                activeId === notebook.id
                  ? 'bg-muted text-foreground border-l-2 border-sidebar-accent'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground border-l-2 border-transparent'
              )}
            >
              <FileText className="w-4 h-4 shrink-0" />
              <button
                type="button"
                className="flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-left bg-transparent border-none p-0 font-inherit text-inherit cursor-pointer"
                onDoubleClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleStartRename(notebook.id);
                }}
              >
                {notebook.title || 'Untitled'}
              </button>
              <Button
                variant="ghost"
                size="icon-xs"
                onClick={(e) => handleDelete(e, notebook.id)}
                className="text-muted-foreground/40 hover:text-destructive hover:bg-destructive/10 transition-all"
                aria-label="Delete notebook"
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
