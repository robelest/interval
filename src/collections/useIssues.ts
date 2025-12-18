import { createCollection, type Collection } from '@tanstack/react-db';
import {
  convexCollectionOptions,
  indexeddbPersistence,
  type EditorBinding,
} from '@trestleinc/replicate/client';
import { api } from '../../convex/_generated/api';
import { convexClient } from '../router';
import type { Issue } from '../types/issue';

// Collection with utils.prose() for editor bindings
type IssuesCollection = Collection<Issue> & {
  utils: {
    prose(documentId: string, field: 'description'): Promise<EditorBinding>;
  };
  singleResult?: never; // Explicitly satisfy NonSingleResult discriminator for TanStack DB
};

let issuesCollection: IssuesCollection | null = null;

/**
 * Get the issues collection singleton.
 * The collection is created once and reused across all components.
 */
export function useIssues(): IssuesCollection {
  if (!issuesCollection) {
    // Cast through unknown due to TanStack DB's complex generic type inference
    // The type is correct at runtime, but TypeScript can't verify the deep sync callback types
    issuesCollection = createCollection(
      convexCollectionOptions<Issue>({
        convexClient,
        api: api.issues,
        collection: 'issues',
        getKey: (issue: Issue) => issue.id,
        prose: ['description'],
        persistence: indexeddbPersistence(),
      })
    ) as unknown as IssuesCollection;
  }
  return issuesCollection;
}

// Re-export for convenience
export type { Issue } from '../types/issue';
