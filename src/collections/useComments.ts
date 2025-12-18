import { createCollection, type Collection } from '@tanstack/react-db';
import {
  convexCollectionOptions,
  indexeddbPersistence,
  type EditorBinding,
} from '@trestleinc/replicate/client';
import { api } from '../../convex/_generated/api';
import { convexClient } from '../router';
import type { Comment } from '../types/issue';

// Collection with utils.prose() for editor bindings
type CommentsCollection = Collection<Comment> & {
  utils: {
    prose(documentId: string, field: 'body'): Promise<EditorBinding>;
  };
  singleResult?: never; // Explicitly satisfy NonSingleResult discriminator for TanStack DB
};

let commentsCollection: CommentsCollection | null = null;

/**
 * Get the comments collection singleton.
 * The collection is created once and reused across all components.
 */
export function useComments(): CommentsCollection {
  if (!commentsCollection) {
    // Cast through unknown due to TanStack DB's complex generic type inference
    // The type is correct at runtime, but TypeScript can't verify the deep sync callback types
    commentsCollection = createCollection(
      convexCollectionOptions<Comment>({
        convexClient,
        api: api.comments,
        collection: 'comments',
        getKey: (comment: Comment) => comment.id,
        prose: ['body'],
        persistence: indexeddbPersistence(),
      })
    ) as unknown as CommentsCollection;
  }
  return commentsCollection;
}

// Re-export for convenience
export type { Comment } from '../types/issue';
