import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Search, FileText } from 'lucide-react';
import { extract } from '@trestleinc/replicate/client';
import { useNotebooksContext } from '../contexts/NotebooksContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import type { Notebook } from '../collections/useNotebooks';

interface SearchPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const SEARCH_DEBOUNCE_MS = 150;

export function SearchPanel({ isOpen, onClose }: SearchPanelProps) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const { notebooks } = useNotebooksContext();

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, SEARCH_DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [query]);

  // Memoize text extraction per notebook
  const notebooksWithText = useMemo(
    () =>
      (notebooks as Notebook[]).map((n) => ({
        ...n,
        textContent: extract(n.content).toLowerCase(),
      })),
    [notebooks]
  );

  // Filter locally
  const results = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    const q = debouncedQuery.toLowerCase();
    return notebooksWithText
      .filter((n) => n.title?.toLowerCase().includes(q) || n.textContent.includes(q))
      .slice(0, 20);
  }, [notebooksWithText, debouncedQuery]);

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setDebouncedQuery('');
      setSelectedIndex(0);
      // Focus input after dialog animation
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Reset selection when results change
  useEffect(() => {
    if (results.length > 0 && selectedIndex >= results.length) {
      setSelectedIndex(0);
    }
  }, [results.length, selectedIndex]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (results[selectedIndex]) {
          handleSelect(results[selectedIndex].id);
        }
        break;
    }
  };

  const handleSelect = (id: string) => {
    navigate({ to: '/notebooks/$notebookId', params: { notebookId: id } });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[520px] p-0 gap-0" showCloseButton={false}>
        <DialogHeader className="sr-only">
          <DialogTitle>Search notebooks</DialogTitle>
        </DialogHeader>

        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search className="w-4 h-4 text-muted-foreground shrink-0" />
          <Input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search notebooks..."
            className="border-0 p-0 h-auto text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        {/* Results */}
        <ScrollArea className="max-h-[300px]">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-muted-foreground text-sm">
              <p>Type to search your notebooks</p>
              <p className="mt-2 text-xs">
                <kbd className="px-1.5 py-0.5 mx-0.5 font-mono text-[0.6875rem] bg-background border border-border rounded-sm">
                  ↑↓
                </kbd>{' '}
                navigate{' '}
                <kbd className="px-1.5 py-0.5 mx-0.5 font-mono text-[0.6875rem] bg-background border border-border rounded-sm">
                  ↵
                </kbd>{' '}
                select{' '}
                <kbd className="px-1.5 py-0.5 mx-0.5 font-mono text-[0.6875rem] bg-background border border-border rounded-sm">
                  esc
                </kbd>{' '}
                close
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-muted-foreground text-sm">
              <p>No notebooks found for "{query}"</p>
            </div>
          ) : (
            <div className="p-1">
              {results.map((notebook, index) => (
                <Button
                  key={notebook.id}
                  variant="ghost"
                  className={cn(
                    'w-full justify-start gap-3 h-auto py-2.5 px-3 text-left',
                    index === selectedIndex && 'bg-accent text-accent-foreground'
                  )}
                  onClick={() => handleSelect(notebook.id)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <FileText className="w-4 h-4 shrink-0 text-muted-foreground" />
                  <div className="flex-1 min-w-0">
                    <span className="block text-sm font-medium truncate">
                      {notebook.title || 'Untitled'}
                    </span>
                    {notebook.textContent && (
                      <span className="block text-xs text-muted-foreground truncate">
                        {truncate(notebook.textContent, 80)}
                      </span>
                    )}
                  </div>
                </Button>
              ))}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return `${str.slice(0, length)}...`;
}
