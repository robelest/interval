import { useCallback } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useIssuesContext } from '../contexts/IssuesContext';
import { Status, Priority, type Issue } from '../types/issue';

/**
 * Hook for creating a new issue.
 * Shared between keyboard shortcut (Option+N) and New Issue button.
 */
export function useCreateIssue() {
  const { collection } = useIssuesContext();
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
    } as Issue);

    // Small delay to ensure the issue is inserted before navigating
    await new Promise((r) => setTimeout(r, 100));
    navigate({ to: '/issues/$issueId', params: { issueId: id } });
  }, [collection, navigate]);
}
