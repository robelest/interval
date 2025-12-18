import { Priority, PriorityLabels, type PriorityValue } from '../types/issue';

const priorityColors: Record<PriorityValue, string> = {
  [Priority.NONE]: '#9ca3af', // gray-400
  [Priority.LOW]: '#6b7280', // gray-500
  [Priority.MEDIUM]: '#f59e0b', // amber-500
  [Priority.HIGH]: '#f97316', // orange-500
  [Priority.URGENT]: '#ef4444', // red-500
};

interface PriorityIconProps {
  priority: PriorityValue;
  size?: number;
  className?: string;
}

export function PriorityIcon({ priority, size = 14, className = '' }: PriorityIconProps) {
  const color = priorityColors[priority];
  const label = PriorityLabels[priority];

  // Number of filled bars based on priority
  const filledBars =
    priority === Priority.URGENT
      ? 4
      : priority === Priority.HIGH
        ? 3
        : priority === Priority.MEDIUM
          ? 2
          : priority === Priority.LOW
            ? 1
            : 0;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      role="img"
      aria-label={label}
    >
      <title>{label}</title>
      {/* 4 vertical bars */}
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={1 + i * 4}
          y={12 - (i + 1) * 2.5}
          width={3}
          height={(i + 1) * 2.5}
          rx={0.5}
          fill={i < filledBars ? color : '#e5e7eb'}
        />
      ))}
    </svg>
  );
}
