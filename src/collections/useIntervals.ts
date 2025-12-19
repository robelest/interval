import { createCollection, type Collection } from '@tanstack/react-db';
import { convexCollectionOptions, type EditorBinding } from '@trestleinc/replicate/client';
import { api } from '../../convex/_generated/api';
import { convexClient } from '../router';
import { getSharedPersistence } from '@/lib/persistence';
import type { Interval } from '../types/interval';

// Collection with utils.prose() for editor bindings
type IntervalsCollection = Collection<Interval> & {
  utils: {
    prose(documentId: string, field: 'description'): Promise<EditorBinding>;
  };
  singleResult?: never; // Explicitly satisfy NonSingleResult discriminator for TanStack DB
};

let intervalsCollection: IntervalsCollection | null = null;

/**
 * Get the intervals collection singleton.
 * The collection is created once and reused across all components.
 */
export function useIntervals(): IntervalsCollection {
  if (!intervalsCollection) {
    // Cast through unknown due to TanStack DB's complex generic type inference
    // The type is correct at runtime, but TypeScript can't verify the deep sync callback types
    intervalsCollection = createCollection(
      convexCollectionOptions<Interval>({
        convexClient,
        api: api.intervals,
        collection: 'intervals',
        getKey: (interval: Interval) => interval.id,
        prose: ['description'],
        persistence: getSharedPersistence(),
      })
    ) as unknown as IntervalsCollection;
  }
  return intervalsCollection;
}

// Re-export for convenience
export type { Interval } from '../types/interval';
