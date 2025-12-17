import { useCallback } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useNotebooksContext } from '../contexts/NotebooksContext';
import type { Notebook } from '../collections/useNotebooks';

/**
 * Hook for creating a new notebook.
 * Shared between keyboard shortcut (Option+N) and New Page button.
 */
export function useCreateNotebook() {
  const { collection } = useNotebooksContext();
  const navigate = useNavigate();

  return useCallback(async () => {
    const id = crypto.randomUUID();
    const now = Date.now();

    collection.insert({
      id,
      title: 'Untitled',
      content: {
        type: 'doc',
        content: [{ type: 'paragraph' }],
      },
      createdAt: now,
      updatedAt: now,
    } as Notebook);

    // Small delay to ensure the notebook is inserted before navigating
    await new Promise((r) => setTimeout(r, 100));
    navigate({ to: '/notebooks/$notebookId', params: { notebookId: id } });
  }, [collection, navigate]);
}
