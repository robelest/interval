import { createContext, useContext, type ReactNode } from 'react';
import { useLiveQuery } from '@tanstack/react-db';
import { useIssues, type Issue } from '../collections/useIssues';

interface IssuesContextValue {
  collection: ReturnType<typeof useIssues>;
  issues: Issue[];
  isLoading: boolean;
}

const IssuesContext = createContext<IssuesContextValue | null>(null);

export function IssuesProvider({ children }: { children: ReactNode }) {
  const collection = useIssues();
  const { data: issues = [], isLoading } = useLiveQuery(collection);

  return (
    <IssuesContext.Provider
      value={{
        collection,
        issues: issues as Issue[],
        isLoading,
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
}

export function useIssuesContext() {
  const ctx = useContext(IssuesContext);
  if (!ctx) {
    throw new Error('useIssuesContext must be used within IssuesProvider');
  }
  return ctx;
}
