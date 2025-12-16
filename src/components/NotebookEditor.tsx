import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';

import { BlockNoteView } from '@blocknote/mantine';
import { useCreateBlockNote } from '@blocknote/react';
import { useEffect, useState, useRef } from 'react';
import type { EditorBinding } from '@trestleinc/replicate/client';

import type { Notebook } from '../collections/useNotebooks';
import { formatRelativeTime } from '../lib/date-utils';

interface NotebookEditorProps {
  notebookId: string;
  collection: {
    utils: {
      prose(documentId: string, field: 'content'): Promise<EditorBinding>;
    };
    update(id: string, updater: (draft: Notebook) => void): void;
  };
  notebook: Notebook;
}

export function NotebookEditor({ notebookId, collection, notebook }: NotebookEditorProps) {
  const [binding, setBinding] = useState<EditorBinding | null>(null);
  const [error, setError] = useState<Error | null>(null);

  // Get editor binding - waits for Y.Doc to be ready
  useEffect(() => {
    let cancelled = false;

    collection.utils
      .prose(notebookId, 'content')
      .then((result) => {
        if (!cancelled) setBinding(result);
      })
      .catch((err) => {
        if (!cancelled) setError(err);
      });

    return () => {
      cancelled = true;
      setBinding(null);
      setError(null);
    };
  }, [collection, notebookId]);

  if (error) {
    return (
      <div className="editor-loading" aria-live="polite">
        <p className="text-error">Failed to load editor: {error.message}</p>
      </div>
    );
  }

  if (!binding) {
    return (
      <div className="editor-loading" aria-live="polite" aria-busy="true">
        <div className="editor-loading-spinner" />
        <p>Loading editor...</p>
      </div>
    );
  }

  // Render editor only when binding is ready
  // key={notebookId} forces complete remount when switching notebooks
  return (
    <NotebookEditorView
      key={notebookId}
      binding={binding}
      notebook={notebook}
      collection={collection}
      notebookId={notebookId}
    />
  );
}

// Separate component to prevent editor recreation on parent re-renders
interface NotebookEditorViewProps {
  binding: EditorBinding;
  notebook: Notebook;
  collection: {
    update(id: string, updater: (draft: Notebook) => void): void;
  };
  notebookId: string;
}

function NotebookEditorView({
  binding,
  notebook,
  collection,
  notebookId,
}: NotebookEditorViewProps) {
  const [title, setTitle] = useState(notebook.title);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [pending, setPending] = useState(binding.pending);
  const inputRef = useRef<HTMLInputElement>(null);

  // Subscribe to pending state changes
  useEffect(() => {
    return binding.onPendingChange(setPending);
  }, [binding]);

  // Create editor ONCE with empty deps - never recreate
  const editor = useCreateBlockNote(
    {
      collaboration: {
        provider: binding.provider,
        fragment: binding.fragment,
        user: {
          name: 'User',
          color: '#d7827e', // Rose Pine rose
        },
      },
    },
    []
  );

  // Sync title from external changes (collaborative edits, other tabs)
  useEffect(() => {
    if (!isEditingTitle) {
      setTitle(notebook.title);
    }
  }, [notebook.title, isEditingTitle]);

  // Focus input when entering edit mode
  useEffect(() => {
    if (isEditingTitle) {
      inputRef.current?.focus();
    }
  }, [isEditingTitle]);

  // Handle title changes
  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleTitleBlur = () => {
    setIsEditingTitle(false);
    if (title.trim() !== notebook.title) {
      collection.update(notebookId, (draft: Notebook) => {
        draft.title = title.trim() || 'Untitled';
        draft.updatedAt = Date.now();
      });
    }
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      (e.target as HTMLInputElement).blur();
    }
  };

  return (
    <div className="editor-container">
      <div className="editor-header">
        <div className="editor-header-top">
          {isEditingTitle ? (
            <input
              ref={inputRef}
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              onBlur={handleTitleBlur}
              onKeyDown={handleTitleKeyDown}
              className="editor-title-input"
            />
          ) : (
            <button type="button" className="editor-title" onClick={() => setIsEditingTitle(true)}>
              {title || 'Untitled'}
            </button>
          )}
        </div>
        <p className="editor-meta">
          {pending ? 'Saving...' : `Last edited ${formatRelativeTime(notebook.updatedAt)}`}
        </p>
      </div>

      <div className="editor-content">
        <BlockNoteView editor={editor} theme="light" data-theming-css-variables-demo />
      </div>
    </div>
  );
}
