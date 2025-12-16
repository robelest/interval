import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Search, FileText, X } from 'lucide-react';
import { extract } from '@trestleinc/replicate/client';
import { useNotebooksContext } from '../contexts/NotebooksContext';
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

  // Use context instead of direct useLiveQuery - single subscription at root
  const { notebooks } = useNotebooksContext();

  // Debounce search query to avoid expensive fragmentToText calls on every keystroke
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, SEARCH_DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [query]);

  // Memoize text extraction per notebook to avoid repeated parsing
  const notebooksWithText = useMemo(
    () =>
      (notebooks as Notebook[]).map((n) => ({
        ...n,
        textContent: extract(n.content).toLowerCase(),
      })),
    [notebooks]
  );

  // Filter locally - search both title and content (uses debounced query)
  const results = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    const q = debouncedQuery.toLowerCase();
    return notebooksWithText
      .filter((n) => n.title?.toLowerCase().includes(q) || n.textContent.includes(q))
      .slice(0, 20);
  }, [notebooksWithText, debouncedQuery]);

  // Focus input and reset state when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setQuery('');
      setDebouncedQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Reset selection when results change - ensure index is valid
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
      case 'Escape':
        e.preventDefault();
        onClose();
        break;
    }
  };

  const handleSelect = (id: string) => {
    navigate({ to: '/notebooks/$notebookId', params: { notebookId: id } });
    onClose();
  };

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <dialog
      className="search-backdrop"
      open
      onClick={handleBackdropClick}
      onKeyDown={(e) => e.key === 'Escape' && onClose()}
    >
      <div className="search-panel">
        <div className="search-input-wrapper">
          <Search className="search-icon" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search notebooks..."
            className="search-input"
          />
          <button type="button" onClick={onClose} className="search-close">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="search-results">
          {query.trim() === '' ? (
            <div className="search-empty">
              <p>Type to search your notebooks</p>
              <kbd>↑↓</kbd> to navigate <kbd>↵</kbd> to select <kbd>esc</kbd> to close
            </div>
          ) : results.length === 0 ? (
            <div className="search-no-results">
              <p>No notebooks found for "{query}"</p>
            </div>
          ) : (
            <ul className="search-list">
              {results.map((notebook, index) => (
                <li key={notebook.id}>
                  <button
                    type="button"
                    onClick={() => handleSelect(notebook.id)}
                    className={`search-item ${index === selectedIndex ? 'search-item-selected' : ''}`}
                  >
                    <FileText className="w-4 h-4 shrink-0" />
                    <div className="search-item-content">
                      <span className="search-item-title">{notebook.title || 'Untitled'}</span>
                      {notebook.textContent && (
                        <span className="search-item-preview">
                          {truncate(notebook.textContent, 80)}
                        </span>
                      )}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </dialog>
  );
}

function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return `${str.slice(0, length)}...`;
}
