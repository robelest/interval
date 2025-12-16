import { Link, useNavigate, useParams } from '@tanstack/react-router';
import { Plus, Search, FileText, Trash2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useNotebooksContext } from '../contexts/NotebooksContext';
import type { Notebook } from '../collections/useNotebooks';

interface SidebarProps {
  onSearchOpen: () => void;
}

export function Sidebar({ onSearchOpen }: SidebarProps) {
  const { collection, notebooks, isLoading } = useNotebooksContext();
  const navigate = useNavigate();
  const params = useParams({ strict: false });
  const activeId = (params as { notebookId?: string }).notebookId;

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const editInputRef = useRef<HTMLInputElement>(null);

  // Filter out items without valid ids (can occur during sync) and sort by updatedAt descending
  const sortedNotebooks = [...(notebooks as Notebook[])]
    .filter((n): n is Notebook => typeof n.id === 'string' && n.id.length > 0)
    .sort((a, b) => b.updatedAt - a.updatedAt);

  const handleCreateNew = async () => {
    const id = crypto.randomUUID();
    const now = Date.now();

    console.log('[NOTEBOOK] Creating notebook:', id);

    const result = collection.insert({
      id,
      title: 'Untitled',
      content: {
        type: 'doc',
        content: [{ type: 'paragraph' }],
      },
      createdAt: now,
      updatedAt: now,
    } as Notebook);

    console.log('[NOTEBOOK] Insert returned:', result);

    // Wait for optimistic update to propagate
    await new Promise((r) => setTimeout(r, 100));

    navigate({ to: '/notebooks/$notebookId', params: { notebookId: id } });
  };

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

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Link to="/notebooks" className="sidebar-title">
          Notebook
        </Link>
        <button
          type="button"
          onClick={onSearchOpen}
          className="sidebar-icon-btn"
          aria-label="Search notebooks"
        >
          <Search className="w-4 h-4" />
        </button>
      </div>

      <button type="button" onClick={handleCreateNew} className="sidebar-new-btn">
        <Plus className="w-4 h-4" />
        <span>New Page</span>
      </button>

      <nav className="sidebar-nav">
        {isLoading ? (
          <div className="sidebar-loading">
            <div className="sidebar-loading-pulse" />
            <div className="sidebar-loading-pulse" style={{ width: '60%' }} />
            <div className="sidebar-loading-pulse" style={{ width: '80%' }} />
          </div>
        ) : sortedNotebooks.length === 0 ? (
          <div className="sidebar-empty">
            <FileText className="w-8 h-8 opacity-30" />
            <p>No pages yet</p>
            <p className="text-sm opacity-60">Create your first page</p>
          </div>
        ) : (
          <ul className="sidebar-list">
            {sortedNotebooks.map((notebook) => (
              <li key={notebook.id}>
                {editingId === notebook.id ? (
                  <div className="sidebar-item sidebar-item-editing">
                    <FileText className="w-4 h-4 shrink-0" />
                    <input
                      ref={editInputRef}
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      onBlur={() => handleSaveRename(notebook.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSaveRename(notebook.id);
                        if (e.key === 'Escape') setEditingId(null);
                      }}
                      className="sidebar-edit-input"
                    />
                  </div>
                ) : (
                  <Link
                    to="/notebooks/$notebookId"
                    params={{ notebookId: notebook.id }}
                    className={`sidebar-item ${activeId === notebook.id ? 'sidebar-item-active' : ''}`}
                  >
                    <FileText className="w-4 h-4 shrink-0" />
                    <button
                      type="button"
                      className="sidebar-item-title"
                      onDoubleClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleStartRename(notebook.id);
                      }}
                    >
                      {notebook.title || 'Untitled'}
                    </button>
                    <button
                      type="button"
                      onClick={(e) => handleDelete(e, notebook.id)}
                      className="sidebar-item-delete"
                      aria-label="Delete notebook"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </aside>
  );
}
