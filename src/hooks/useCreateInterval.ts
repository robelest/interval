import { useCallback } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useIntervalsContext } from '../contexts/IntervalsContext';
import { Status, Priority, type Interval } from '../types/interval';

/**
 * Hook for creating a new interval.
 * Shared between keyboard shortcut (Option+N) and New Interval button.
 */
export function useCreateInterval() {
  const { collection } = useIntervalsContext();
  const navigate = useNavigate();

  return useCallback(async () => {
    const id = crypto.randomUUID();
    const now = Date.now();

    collection.insert({
      id,
      title: 'Untitled',
      description: {
        type: 'doc',
        content: [{ type: 'paragraph' }],
      },
      status: Status.BACKLOG,
      priority: Priority.NONE,
      createdAt: now,
      updatedAt: now,
    } as Interval);

    // Small delay to ensure the interval is inserted before navigating
    await new Promise((r) => setTimeout(r, 100));
    navigate({ to: '/intervals/$intervalId', params: { intervalId: id } });
  }, [collection, navigate]);
}
