import { createCollection, type Collection } from '@tanstack/react-db';
import {
  convexCollectionOptions,
  indexeddbPersistence,
  type EditorBinding,
} from '@trestleinc/replicate/client';
import { api } from '../../convex/_generated/api';
import { convexClient } from '../router';
import type { Notebook } from '../types/notebook';

// Collection with utils.prose() for editor bindings
type NotebooksCollection = Collection<Notebook> & {
  utils: {
    prose(documentId: string, field: 'content'): Promise<EditorBinding>;
  };
  singleResult?: never; // Explicitly satisfy NonSingleResult discriminator for TanStack DB
};

let notebooksCollection: NotebooksCollection | null = null;

/**
 * Get the notebooks collection singleton.
 * The collection is created once and reused across all components.
 */
export function useNotebooks(): NotebooksCollection {
  if (!notebooksCollection) {
    // Cast through unknown due to TanStack DB's complex generic type inference
    // The type is correct at runtime, but TypeScript can't verify the deep sync callback types
    notebooksCollection = createCollection(
      convexCollectionOptions<Notebook>({
        convexClient,
        api: api.notebooks,
        collection: 'notebooks',
        getKey: (notebook: Notebook) => notebook.id,
        prose: ['content'],
        persistence: indexeddbPersistence(),
      })
    ) as unknown as NotebooksCollection;
  }
  return notebooksCollection;
}

// Re-export for convenience
export type { Notebook } from '../types/notebook';
