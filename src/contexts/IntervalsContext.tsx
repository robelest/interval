import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useLiveQuery } from '@tanstack/react-db';
import { useIntervals, initIntervalsPersistence, type Interval } from '../collections/useIntervals';
import { initCommentsPersistence } from '../collections/useComments';

interface IntervalsContextValue {
  collection: ReturnType<typeof useIntervals>;
  intervals: Interval[];
  isLoading: boolean;
}

const IntervalsContext = createContext<IntervalsContextValue | null>(null);

let persistenceInitialized = false;

/**
 * Wrapper that initializes SQLite persistence for all collections before rendering.
 */
function PersistenceGate({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(persistenceInitialized);

  useEffect(() => {
    if (!ready) {
      Promise.all([initIntervalsPersistence(), initCommentsPersistence()]).then(() => {
        persistenceInitialized = true;
        setReady(true);
      });
    }
  }, [ready]);

  if (!ready) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return <>{children}</>;
}

function IntervalsProviderInner({ children }: { children: ReactNode }) {
  const collection = useIntervals();
  const { data: intervals = [], isLoading } = useLiveQuery(collection);

  return (
    <IntervalsContext.Provider
      value={{
        collection,
        intervals: intervals as Interval[],
        isLoading,
      }}
    >
      {children}
    </IntervalsContext.Provider>
  );
}

export function IntervalsProvider({ children }: { children: ReactNode }) {
  return (
    <PersistenceGate>
      <IntervalsProviderInner>{children}</IntervalsProviderInner>
    </PersistenceGate>
  );
}

export function useIntervalsContext() {
  const ctx = useContext(IntervalsContext);
  if (!ctx) {
    throw new Error('useIntervalsContext must be used within IntervalsProvider');
  }
  return ctx;
}
