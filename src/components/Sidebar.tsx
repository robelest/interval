import { Link, useNavigate, useParams } from '@tanstack/react-router';
import { useLiveQuery } from '@tanstack/react-db';
import { Plus, Search, FileText, MoreHorizontal, Trash2, Pencil } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { fragment } from '@trestleinc/replicate/client';
import type { ConvexCollection, Notebook } from '../collections/useNotebooks';

interface SidebarProps {
  collection: ConvexCollection<Notebook>;
  onSearchOpen: () => void;
}

export function Sidebar({ collection, onSearchOpen }: SidebarProps) {
  const { data: notebooks = [], isLoading } = useLiveQuery(collection as any);
  const navigate = useNavigate();
  const params = useParams({ strict: false });
  const activeId = (params as { notebookId?: string }).notebookId;

  const [contextMenu, setContextMenu] = useState<{ id: string; x: number; y: number } | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const editInputRef = useRef<HTMLInputElement>(null);

  // Sort by updatedAt descending
  const sortedNotebooks = [...notebooks].sort((a, b) => b.updatedAt - a.updatedAt);

  const handleCreateNew = async () => {
    const id = crypto.randomUUID();
    const now = Date.now();

    await collection.insert({
      id,
      title: 'Untitled',
      content: fragment({
        type: 'doc',
        content: [{ type: 'paragraph' }],
      }),
      createdAt: now,
      updatedAt: now,
    } as Notebook);

    navigate({ to: '/notebooks/$notebookId', params: { notebookId: id } });
  };

  const handleContextMenu = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setContextMenu({ id, x: e.clientX, y: e.clientY });
  };

  const handleRename = (id: string) => {
    const notebook = notebooks.find((n) => n.id === id);
    if (notebook) {
      setEditingId(id);
      setEditTitle(notebook.title);
      setContextMenu(null);
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

  const handleDelete = (id: string) => {
    collection.delete(id);
    setContextMenu(null);
    if (activeId === id) {
      const remaining = notebooks.filter((n) => n.id !== id);
      if (remaining.length > 0) {
        navigate({ to: '/notebooks/$notebookId', params: { notebookId: remaining[0].id } });
      } else {
        navigate({ to: '/notebooks' });
      }
    }
  };

  // Close context menu on click outside
  useEffect(() => {
    const handleClick = () => setContextMenu(null);
    if (contextMenu) {
      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }
  }, [contextMenu]);

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
        <h1 className="sidebar-title">Notebook</h1>
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
                    onContextMenu={(e) => handleContextMenu(e, notebook.id)}
                  >
                    <FileText className="w-4 h-4 shrink-0" />
                    <span className="sidebar-item-title">{notebook.title || 'Untitled'}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleContextMenu(e, notebook.id);
                      }}
                      className="sidebar-item-menu"
                      aria-label="Notebook options"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Context Menu */}
      {contextMenu && (
        <div
          className="context-menu"
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          <button
            type="button"
            onClick={() => handleRename(contextMenu.id)}
            className="context-menu-item"
          >
            <Pencil className="w-4 h-4" />
            <span>Rename</span>
          </button>
          <button
            type="button"
            onClick={() => handleDelete(contextMenu.id)}
            className="context-menu-item context-menu-item-danger"
          >
            <Trash2 className="w-4 h-4" />
            <span>Delete</span>
          </button>
        </div>
      )}
    </aside>
  );
}
