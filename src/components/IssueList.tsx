import { useState, useMemo } from 'react';
import { Plus } from 'lucide-react';
import { useIssuesContext } from '../contexts/IssuesContext';
import { useCreateIssue } from '../hooks/useCreateIssue';
import { IssueRow } from './IssueRow';
import { TopFilter } from './TopFilter';
import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';
import type { StatusValue, PriorityValue } from '../types/issue';

export function IssueList() {
  const { issues, isLoading } = useIssuesContext();
  const createIssue = useCreateIssue();

  const [statusFilter, setStatusFilter] = useState<StatusValue | null>(null);
  const [priorityFilter, setPriorityFilter] = useState<PriorityValue | null>(null);

  // Filter and sort issues
  const filteredIssues = useMemo(() => {
    let result = [...issues];

    if (statusFilter) {
      result = result.filter((issue) => issue.status === statusFilter);
    }

    if (priorityFilter) {
      result = result.filter((issue) => issue.priority === priorityFilter);
    }

    // Sort by updatedAt descending
    result.sort((a, b) => b.updatedAt - a.updatedAt);

    return result;
  }, [issues, statusFilter, priorityFilter]);

  if (isLoading) {
    return (
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h1 className="font-display text-xl font-normal">Issues</h1>
        </div>
        <div className="flex flex-col">
          {Array.from({ length: 5 }).map((_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static skeleton list
            <div key={i} className="flex items-center gap-3 px-6 py-3">
              <Skeleton className="w-5 h-5 rounded-full" />
              <Skeleton className="h-4 flex-1" />
              <Skeleton className="h-4 w-16" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col min-h-0">
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <h1 className="font-display text-xl font-normal">Issues</h1>
        <Button size="sm" onClick={() => createIssue()}>
          <Plus size={16} />
          New Issue
        </Button>
      </div>

      <TopFilter
        statusFilter={statusFilter}
        priorityFilter={priorityFilter}
        onStatusChange={setStatusFilter}
        onPriorityChange={setPriorityFilter}
      />

      <div className="flex-1 overflow-auto">
        {filteredIssues.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-muted-foreground text-center">
            {issues.length === 0 ? (
              <>
                <p className="m-0">No issues yet</p>
                <p className="text-xs opacity-60 mt-1">
                  Press{' '}
                  <kbd className="inline-block px-1.5 py-0.5 mx-0.5 font-mono text-[0.6875rem] bg-background border border-border rounded-sm">
                    ⌥
                  </kbd>{' '}
                  <kbd className="inline-block px-1.5 py-0.5 mx-0.5 font-mono text-[0.6875rem] bg-background border border-border rounded-sm">
                    N
                  </kbd>{' '}
                  to create your first issue
                </p>
              </>
            ) : (
              <p className="m-0">No issues match your filters</p>
            )}
          </div>
        ) : (
          <div className="flex flex-col">
            {filteredIssues.map((issue) => (
              <IssueRow key={issue.id} issue={issue} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
