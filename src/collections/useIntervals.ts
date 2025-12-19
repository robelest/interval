import { createCollection, type Collection } from '@tanstack/react-db';
import {
  convexCollectionOptions,
  persistence,
  type EditorBinding,
  type Persistence,
} from '@trestleinc/replicate/client';
import { api } from '../../convex/_generated/api';
import { convexClient } from '../router';
import type { Interval } from '../types/interval';
import initSqlJs from 'sql.js';

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

  const SQL = await initSqlJs({
    locateFile: (file: string) => `https://sql.js.org/dist/${file}`,
  });
  intervalsPersistence = await persistence.sqlite.browser(SQL, 'intervals');
  return intervalsPersistence;
}

/**
 * Get the intervals collection singleton.
 * Must call initIntervalsPersistence() first.
 */
export function useIntervals(): IntervalsCollection {
  if (!intervalsPersistence) {
    throw new Error('Call initIntervalsPersistence() before useIntervals()');
  }
  if (!intervalsCollection) {
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
export type { Interval } from '../types/interval';
