import { Link } from '@tanstack/react-router';
import { extract } from '@trestleinc/replicate/client';
import { StatusIcon } from './StatusIcon';
import { PriorityIcon } from './PriorityIcon';
import type { Interval } from '../types/interval';

interface IntervalRowProps {
  interval: Interval;
}

export function IntervalRow({ interval }: IntervalRowProps) {
  const description = extract(interval.description);
  const preview = description.slice(0, 100) + (description.length > 100 ? '...' : '');

  return (
    <Link
      to="/intervals/$intervalId"
      params={{ intervalId: interval.id }}
      className="flex items-center gap-3 px-6 py-3 border-b border-border no-underline text-foreground transition-colors hover:bg-muted"
    >
      <div className="shrink-0">
        <StatusIcon status={interval.status} />
      </div>
      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
        <span className="text-sm font-medium truncate">{interval.title || 'Untitled'}</span>
        {preview && <span className="text-xs text-muted-foreground truncate">{preview}</span>}
      </div>
      <div className="shrink-0 flex items-center gap-2">
        <PriorityIcon priority={interval.priority} />
      </div>
    </Link>
  );
}
