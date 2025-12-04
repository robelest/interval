import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';

import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import { useEffect, useState } from 'react';
import { ReplicateProvider } from '../lib/replicate-provider';
import type { ConvexCollection, Notebook } from '../collections/useNotebooks';

interface NotebookEditorProps {
  notebookId: string;
  collection: ConvexCollection<Notebook>;
  notebook: Notebook;
}

export function NotebookEditor({ notebookId, collection, notebook }: NotebookEditorProps) {
  const [title, setTitle] = useState(notebook.title);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [fragment, setFragment] = useState(() => collection.fragment(notebookId, 'content'));

  // Poll for fragment availability (Y.Doc initialization is async)
  useEffect(() => {
    // Reset fragment when notebookId changes
    setFragment(null);

    const checkFragment = () => {
      const frag = collection.fragment(notebookId, 'content');
      if (frag) {
        setFragment(frag);
        return true;
      }
      return false;
    };

    // Try immediately
    if (checkFragment()) return;

    // Poll until available (Y.Doc may still be initializing)
    const interval = setInterval(() => {
      if (checkFragment()) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [collection, notebookId]);

  // Create BlockNote editor - if we have a fragment, use collaboration mode
  const editor = useCreateBlockNote(
    fragment
      ? {
          collaboration: {
            provider: new ReplicateProvider(collection, notebookId) as any,
            fragment: fragment,
            user: {
              name: 'User',
              color: '#d7827e', // Rose Pine rose
            },
          },
        }
      : {},
    [fragment]
  );

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

  // Update plain text for search on content change
  useEffect(() => {
    if (!editor) return;

    const updatePlainText = () => {
      const blocks = editor.document;
      const plainText = blocks
        .map((block) => {
          if (block.content && Array.isArray(block.content)) {
            return block.content
              .map((inline: any) => (typeof inline === 'string' ? inline : inline.text || ''))
              .join('');
          }
          return '';
        })
        .join('\n');

      collection.update(notebookId, (draft: Notebook) => {
        draft.plainText = plainText;
        draft.updatedAt = Date.now();
      });
    };

    // Debounce updates
    let timeout: ReturnType<typeof setTimeout>;
    const handleChange = () => {
      clearTimeout(timeout);
      timeout = setTimeout(updatePlainText, 1000);
    };

    editor.onEditorContentChange(handleChange);

    return () => {
      clearTimeout(timeout);
    };
  }, [editor, notebookId, collection]);

  if (!fragment) {
    return (
      <div className="editor-loading">
        <div className="editor-loading-spinner" />
        <p>Loading editor...</p>
      </div>
    );
  }

  return (
    <div className="editor-container">
      <div className="editor-header">
        {isEditingTitle ? (
          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            onBlur={handleTitleBlur}
            onKeyDown={handleTitleKeyDown}
            className="editor-title-input"
            autoFocus
          />
        ) : (
          <h1
            className="editor-title"
            onClick={() => setIsEditingTitle(true)}
            onKeyDown={(e) => e.key === 'Enter' && setIsEditingTitle(true)}
            role="button"
            tabIndex={0}
          >
            {title || 'Untitled'}
          </h1>
        )}
        <p className="editor-meta">
          Last edited {formatRelativeTime(notebook.updatedAt)}
        </p>
      </div>

      <div className="editor-content">
        <BlockNoteView
          editor={editor}
          theme="light"
          data-theming-css-variables-demo
        />
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
