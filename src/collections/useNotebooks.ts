import { createCollection } from '@tanstack/react-db';
import {
  convexCollectionOptions,
  handleReconnect,
  type ConvexCollection,
  type Materialized,
} from '@trestleinc/replicate/client';
import { api } from '../../convex/_generated/api';
import { convexClient } from '../router';
import { useMemo } from 'react';
import type { Notebook } from '../types/notebook';

let notebooksCollection: ConvexCollection<Notebook> | null = null;

export function useNotebooks(material?: Materialized<Notebook>) {
  return useMemo(() => {
    if (!notebooksCollection) {
      notebooksCollection = handleReconnect(
        createCollection(
          convexCollectionOptions<Notebook>({
            convexClient,
            api: api.notebooks,
            collection: 'notebooks',
            getKey: (notebook: Notebook) => notebook.id,
            material,
          })
        )
      );
    }
    return notebooksCollection;
  }, [material]);
}

// Re-export for convenience
export type { Notebook } from '../types/notebook';
export type { ConvexCollection, Materialized };
