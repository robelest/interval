import { browser } from '$app/environment';
import { createCollection, type Collection } from '@tanstack/db';
import {
  convexCollectionOptions,
  persistence,
  type EditorBinding,
  type Persistence,
} from '@trestleinc/replicate/client';
import { api } from '$convex/_generated/api';
import type { Interval } from '$lib/types';
import { getConvexClient } from '$lib/convex';

// Collection with utils.prose() for editor bindings
type IntervalsCollection = Collection<Interval> & {
  utils: {
    prose(documentId: string, field: 'description'): Promise<EditorBinding>;
  };
  singleResult?: never; // Explicitly satisfy NonSingleResult discriminator for TanStack DB
};

let intervalsCollection: IntervalsCollection | null = null;
let intervalsPersistence: Persistence | null = null;

/**
 * Initialize intervals persistence (call before useIntervals).
 */
export async function initIntervalsPersistence(): Promise<Persistence> {
  if (intervalsPersistence) return intervalsPersistence;
  // Use IndexedDB instead of SQLite - no WASM required
  intervalsPersistence = persistence.indexeddb('intervals');
  return intervalsPersistence;
}

/**
 * Get the intervals collection singleton.
 * Must call initIntervalsPersistence() first.
 * Only call in browser context.
 */
export function useIntervals(): IntervalsCollection {
  if (!browser) {
    throw new Error('useIntervals can only be used in browser');
  }
  if (!intervalsPersistence) {
    throw new Error('Call initIntervalsPersistence() before useIntervals()');
  }
  if (!intervalsCollection) {
    const convexClient = getConvexClient();
    intervalsCollection = createCollection(
      convexCollectionOptions<Interval>({
        convexClient,
        api: api.intervals,
        collection: 'intervals',
        getKey: (interval: Interval) => interval.id,
        prose: ['description'],
        persistence: intervalsPersistence,
      })
    ) as unknown as IntervalsCollection;
  }
  return intervalsCollection;
}

// Re-export for convenience
export type { Interval } from '$lib/types';
