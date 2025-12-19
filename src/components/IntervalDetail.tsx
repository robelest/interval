import { ArrowLeft, Trash2 } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { IntervalEditor } from './IntervalEditor';
import { IntervalProperties } from './IntervalProperties';
import { CommentList } from './CommentList';
import { Button } from './ui/button';
import type { Interval } from '../types/interval';
import type { useIntervals } from '../collections/useIntervals';

interface IntervalDetailProps {
  intervalId: string;
  collection: ReturnType<typeof useIntervals>;
  interval: Interval;
}

export function IntervalDetail({ intervalId, collection, interval }: IntervalDetailProps) {
  const navigate = useNavigate();

  const handlePropertyUpdate = (updates: Partial<Pick<Interval, 'status' | 'priority'>>) => {
    collection.update(intervalId, (draft: Interval) => {
      if (updates.status !== undefined) draft.status = updates.status;
      if (updates.priority !== undefined) draft.priority = updates.priority;
      draft.updatedAt = Date.now();
    });
  };

  const handleDelete = () => {
    collection.delete(intervalId);
    navigate({ to: '/intervals' });
  };

  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background">
        <Button variant="ghost" size="sm" onClick={() => navigate({ to: '/intervals' })}>
          <ArrowLeft size={16} />
          Back
        </Button>
        <Button variant="ghost" size="sm" className="text-destructive" onClick={handleDelete}>
          <Trash2 size={16} />
          Delete
        </Button>
      </div>

      {/* Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Main content */}
        <div className="flex-1 overflow-auto">
          <IntervalEditor intervalId={intervalId} collection={collection} interval={interval} />
          <CommentList intervalId={intervalId} />
        </div>

        {/* Sidebar */}
        <aside className="w-64 shrink-0 border-l border-border overflow-auto bg-card">
          <IntervalProperties interval={interval} onUpdate={handlePropertyUpdate} />
        </aside>
      </div>
    </div>
  );
}
