import { createCollection, type Collection } from '@tanstack/react-db';
import {
  convexCollectionOptions,
  persistence,
  type EditorBinding,
  type Persistence,
} from '@trestleinc/replicate/client';
import { api } from '../../convex/_generated/api';
import { convexClient } from '../router';
import type { Comment } from '../types/interval';
import initSqlJs from 'sql.js';

// Collection with utils.prose() for editor bindings
type CommentsCollection = Collection<Comment> & {
  utils: {
    prose(documentId: string, field: 'body'): Promise<EditorBinding>;
  };
  singleResult?: never; // Explicitly satisfy NonSingleResult discriminator for TanStack DB
};

let commentsCollection: CommentsCollection | null = null;
let commentsPersistence: Persistence | null = null;

/**
 * Initialize comments persistence (call before useComments).
 */
export async function initCommentsPersistence(): Promise<Persistence> {
  if (commentsPersistence) return commentsPersistence;

  const SQL = await initSqlJs({
    locateFile: (file: string) => `https://sql.js.org/dist/${file}`,
  });
  commentsPersistence = await persistence.sqlite.browser(SQL, 'comments');
  return commentsPersistence;
}

/**
 * Get the comments collection singleton.
 * Must call initCommentsPersistence() first.
 */
export function useComments(): CommentsCollection {
  if (!commentsPersistence) {
    throw new Error('Call initCommentsPersistence() before useComments()');
  }
  if (!commentsCollection) {
    commentsCollection = createCollection(
      convexCollectionOptions<Comment>({
        convexClient,
        api: api.comments,
        collection: 'comments',
        getKey: (comment: Comment) => comment.id,
        prose: ['body'],
        persistence: commentsPersistence,
      })
    ) as unknown as CommentsCollection;
  }
  return commentsCollection;
}

// Re-export for convenience
export type { Comment } from '../types/interval';
