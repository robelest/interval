import { useState, useEffect, useRef } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useQuery } from 'convex/react';
import { Search, FileText, X } from 'lucide-react';
import { api } from '../../convex/_generated/api';

interface SearchPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchPanel({ isOpen, onClose }: SearchPanelProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const results = useQuery(api.notebooks.search, { query }) || [];

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Reset selection when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

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
    <div className="search-backdrop" onClick={handleBackdropClick}>
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
                      {notebook.plainText && (
                        <span className="search-item-preview">
                          {truncate(notebook.plainText, 80)}
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
    </div>
  );
}

function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}
