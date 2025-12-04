import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  loader: async () => {
    // Redirect root to notebooks
    throw redirect({
      to: '/notebooks',
    });
  },
  component: () => null,
});
