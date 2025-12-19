import { createContext, useContext, type ReactNode } from 'react';
import { useLiveQuery } from '@tanstack/react-db';
import { useIntervals, type Interval } from '../collections/useIntervals';

interface IntervalsContextValue {
  collection: ReturnType<typeof useIntervals>;
  intervals: Interval[];
  isLoading: boolean;
}

const IntervalsContext = createContext<IntervalsContextValue | null>(null);

export function IntervalsProvider({ children }: { children: ReactNode }) {
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

export function useIntervalsContext() {
  const ctx = useContext(IntervalsContext);
  if (!ctx) {
    throw new Error('useIntervalsContext must be used within IntervalsProvider');
  }
  return ctx;
}
