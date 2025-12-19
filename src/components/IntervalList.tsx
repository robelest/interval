import { useState, useMemo } from 'react';
import { Plus } from 'lucide-react';
import { useIntervalsContext } from '../contexts/IntervalsContext';
import { useCreateInterval } from '../hooks/useCreateInterval';
import { IntervalRow } from './IntervalRow';
import { TopFilter } from './TopFilter';
import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';
import type { StatusValue, PriorityValue } from '../types/interval';

export function IntervalList() {
  const { intervals, isLoading } = useIntervalsContext();
  const createInterval = useCreateInterval();

  const [statusFilter, setStatusFilter] = useState<StatusValue | null>(null);
  const [priorityFilter, setPriorityFilter] = useState<PriorityValue | null>(null);

  // Filter and sort intervals
  const filteredIntervals = useMemo(() => {
    let result = [...intervals];

    if (statusFilter) {
      result = result.filter((interval) => interval.status === statusFilter);
    }

    if (priorityFilter) {
      result = result.filter((interval) => interval.priority === priorityFilter);
    }

    // Sort by updatedAt descending
    result.sort((a, b) => b.updatedAt - a.updatedAt);

    return result;
  }, [intervals, statusFilter, priorityFilter]);

  if (isLoading) {
    return (
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h1 className="font-display text-xl font-normal">Intervals</h1>
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
        <h1 className="font-display text-xl font-normal">Intervals</h1>
        <Button size="sm" onClick={() => createInterval()}>
          <Plus size={16} />
          New Interval
        </Button>
      </div>

      <TopFilter
        statusFilter={statusFilter}
        priorityFilter={priorityFilter}
        onStatusChange={setStatusFilter}
        onPriorityChange={setPriorityFilter}
      />

      <div className="flex-1 overflow-auto">
        {filteredIntervals.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-muted-foreground text-center">
            {intervals.length === 0 ? (
              <>
                <p className="m-0">No intervals yet</p>
                <p className="text-xs opacity-60 mt-1">
                  Press{' '}
                  <kbd className="inline-block px-1.5 py-0.5 mx-0.5 font-mono text-[0.6875rem] bg-background border border-border rounded-sm">
                    ⌥
                  </kbd>{' '}
                  <kbd className="inline-block px-1.5 py-0.5 mx-0.5 font-mono text-[0.6875rem] bg-background border border-border rounded-sm">
                    N
                  </kbd>{' '}
                  to create your first interval
                </p>
              </>
            ) : (
              <p className="m-0">No intervals match your filters</p>
            )}
          </div>
        ) : (
          <div className="flex flex-col">
            {filteredIntervals.map((interval) => (
              <IntervalRow key={interval.id} interval={interval} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
