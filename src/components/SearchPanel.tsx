import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Search, Plus, Trash2 } from 'lucide-react';
import { extract } from '@trestleinc/replicate/client';
import { useIssuesContext } from '../contexts/IssuesContext';
import { useCreateIssue } from '../hooks/useCreateIssue';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { StatusIcon } from './StatusIcon';
import { cn } from '@/lib/utils';
import type { Issue } from '../types/issue';

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
  const createIssue = useCreateIssue();

  const { collection, issues } = useIssuesContext();

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, SEARCH_DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [query]);

  // Memoize text extraction per issue
  const issuesWithText = useMemo(
    () =>
      (issues as Issue[]).map((i) => ({
        ...i,
        textContent: extract(i.description).toLowerCase(),
      })),
    [issues]
  );

  // Filter locally - show recent issues when empty (Raycast-style)
  const results = useMemo(() => {
    const sorted = [...issuesWithText].sort((a, b) => b.updatedAt - a.updatedAt);

    if (!debouncedQuery.trim()) {
      return sorted.slice(0, 10); // Show recent 10 when empty
    }

    const q = debouncedQuery.toLowerCase();
    return sorted
      .filter((i) => i.title?.toLowerCase().includes(q) || i.textContent.includes(q))
      .slice(0, 20);
  }, [issuesWithText, debouncedQuery]);

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

  // Handle creating new issue
  const handleCreateIssue = () => {
    createIssue();
    onClose();
  };

  // Handle keyboard navigation (index -1 = New Issue action)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex === -1) {
          handleCreateIssue();
        } else if (results[selectedIndex]) {
          handleSelect(results[selectedIndex].id);
        }
        break;
    }
  };

  const handleSelect = (id: string) => {
    navigate({ to: '/issues/$issueId', params: { issueId: id } });
    onClose();
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    collection.delete(id);
    // Navigate away if we deleted the current issue
    navigate({ to: '/issues' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="max-w-full sm:max-w-[520px] h-[100dvh] sm:h-auto sm:max-h-[85vh] p-0 gap-0 rounded-none sm:rounded-lg"
        showCloseButton={false}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Search issues</DialogTitle>
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
            placeholder="Search issues..."
            className="border-0 p-0 h-auto text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          {/* Mobile close button */}
          <button
            type="button"
            onClick={onClose}
            className="sm:hidden text-sm text-muted-foreground hover:text-foreground"
          >
            Cancel
          </button>
        </div>

        {/* Results */}
        <ScrollArea className="flex-1 sm:max-h-[400px]">
          <div className="p-1">
            {/* New Issue action */}
            <Button
              variant="ghost"
              className={cn(
                'w-full justify-start gap-3 h-auto py-2.5 px-3 text-left',
                selectedIndex === -1 && 'bg-accent text-accent-foreground'
              )}
              onClick={handleCreateIssue}
              onMouseEnter={() => setSelectedIndex(-1)}
            >
              <Plus className="w-4 h-4 shrink-0 text-primary" />
              <span className="text-sm font-medium">New Issue</span>
              <span className="ml-auto text-xs text-muted-foreground">⌥N</span>
            </Button>

            {/* Divider */}
            {results.length > 0 && <div className="h-px bg-border my-1" />}

            {/* Issue results */}
            {results.length === 0 && debouncedQuery.trim() ? (
              <div className="py-6 text-center text-muted-foreground text-sm">
                <p>No issues found for "{query}"</p>
              </div>
            ) : (
              results.map((issue, index) => (
                <div
                  key={issue.id}
                  role="option"
                  tabIndex={0}
                  className={cn(
                    'w-full flex items-center gap-3 py-2.5 px-3 text-left group cursor-pointer',
                    'rounded-sm transition-colors hover:bg-accent hover:text-accent-foreground',
                    index === selectedIndex && 'bg-accent text-accent-foreground'
                  )}
                  onClick={() => handleSelect(issue.id)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSelect(issue.id)}
                >
                  <StatusIcon status={issue.status} size={14} className="shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="block text-sm font-medium truncate">
                      {issue.title || 'Untitled'}
                    </span>
                    {issue.textContent && (
                      <span className="block text-xs text-muted-foreground truncate">
                        {truncate(issue.textContent, 80)}
                      </span>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(e, issue.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                    title="Delete issue"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              ))
            )}

            {/* Empty state hint */}
            {results.length === 0 && !debouncedQuery.trim() && (
              <div className="py-6 text-center text-muted-foreground text-sm">
                <p>No issues yet</p>
                <p className="mt-1 text-xs">Create your first issue above</p>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Keyboard hints */}
        <div className="hidden sm:flex items-center justify-center gap-4 px-4 py-2 border-t border-border text-xs text-muted-foreground">
          <span>
            <kbd className="px-1.5 py-0.5 mx-0.5 font-mono text-[0.6875rem] bg-background border border-border rounded-sm">
              ↑↓
            </kbd>{' '}
            navigate
          </span>
          <span>
            <kbd className="px-1.5 py-0.5 mx-0.5 font-mono text-[0.6875rem] bg-background border border-border rounded-sm">
              ↵
            </kbd>{' '}
            select
          </span>
          <span>
            <kbd className="px-1.5 py-0.5 mx-0.5 font-mono text-[0.6875rem] bg-background border border-border rounded-sm">
              esc
            </kbd>{' '}
            close
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return `${str.slice(0, length)}...`;
}
