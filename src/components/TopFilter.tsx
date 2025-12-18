import {
  Status,
  Priority,
  StatusLabels,
  PriorityLabels,
  type StatusValue,
  type PriorityValue,
} from '../types/issue';
import { StatusIcon } from './StatusIcon';
import { PriorityIcon } from './PriorityIcon';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from './ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface TopFilterProps {
  statusFilter: StatusValue | null;
  priorityFilter: PriorityValue | null;
  onStatusChange: (status: StatusValue | null) => void;
  onPriorityChange: (priority: PriorityValue | null) => void;
}

export function TopFilter({
  statusFilter,
  priorityFilter,
  onStatusChange,
  onPriorityChange,
}: TopFilterProps) {
  const statusOptions = Object.values(Status) as StatusValue[];
  const priorityOptions = Object.values(Priority) as PriorityValue[];

  return (
    <div className="flex items-center gap-2 px-6 py-2 border-b border-border">
      {/* Status filter */}
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            'inline-flex items-center justify-center gap-1.5 rounded-sm px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
            statusFilter && 'bg-primary/10 text-primary'
          )}
        >
          {statusFilter ? (
            <>
              <StatusIcon status={statusFilter} size={12} />
              <span>{StatusLabels[statusFilter]}</span>
            </>
          ) : (
            <span>Status</span>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup
            value={statusFilter ?? ''}
            onValueChange={(v) => onStatusChange((v || null) as StatusValue | null)}
          >
            <DropdownMenuRadioItem value="">All statuses</DropdownMenuRadioItem>
            <DropdownMenuSeparator />
            {statusOptions.map((status) => (
              <DropdownMenuRadioItem key={status} value={status}>
                <StatusIcon status={status} size={12} />
                {StatusLabels[status]}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Priority filter */}
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            'inline-flex items-center justify-center gap-1.5 rounded-sm px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
            priorityFilter && 'bg-primary/10 text-primary'
          )}
        >
          {priorityFilter ? (
            <>
              <PriorityIcon priority={priorityFilter} size={12} />
              <span>{PriorityLabels[priorityFilter]}</span>
            </>
          ) : (
            <span>Priority</span>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup
            value={priorityFilter ?? ''}
            onValueChange={(v) => onPriorityChange((v || null) as PriorityValue | null)}
          >
            <DropdownMenuRadioItem value="">All priorities</DropdownMenuRadioItem>
            <DropdownMenuSeparator />
            {priorityOptions.map((priority) => (
              <DropdownMenuRadioItem key={priority} value={priority}>
                <PriorityIcon priority={priority} size={12} />
                {PriorityLabels[priority]}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Clear filters */}
      {(statusFilter || priorityFilter) && (
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground"
          onClick={() => {
            onStatusChange(null);
            onPriorityChange(null);
          }}
        >
          Clear filters
        </Button>
      )}
    </div>
  );
}
