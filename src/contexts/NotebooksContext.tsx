import { createContext, useContext, type ReactNode } from 'react';
import { useLiveQuery } from '@tanstack/react-db';
import { useNotebooks, type Notebook } from '../collections/useNotebooks';

interface NotebooksContextValue {
  collection: ReturnType<typeof useNotebooks>;
  notebooks: Notebook[];
  isLoading: boolean;
}

const NotebooksContext = createContext<NotebooksContextValue | null>(null);

export function NotebooksProvider({ children }: { children: ReactNode }) {
  const collection = useNotebooks();
  const { data: notebooks = [], isLoading } = useLiveQuery(collection);

  return (
    <NotebooksContext.Provider
      value={{
        collection,
        notebooks: notebooks as Notebook[],
        isLoading,
      }}
    >
      {children}
    </NotebooksContext.Provider>
  );
}

export function useNotebooksContext() {
  const ctx = useContext(NotebooksContext);
  if (!ctx) {
    throw new Error('useNotebooksContext must be used within NotebooksProvider');
  }
  return ctx;
}
