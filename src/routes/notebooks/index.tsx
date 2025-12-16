import { createFileRoute, ClientOnly } from '@tanstack/react-router';
import { motion } from 'motion/react';
import { StarCanvas } from '../../components/StarScene';

export const Route = createFileRoute('/notebooks/')({
  component: NotebooksIndexComponent,
});

function NotebooksIndexComponent() {
  return (
    <ClientOnly fallback={<WelcomePageFallback />}>
      <LiveWelcomePage />
    </ClientOnly>
  );
}

function WelcomePageFallback() {
  return (
    <motion.div
      className="welcome-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="welcome-flourish">
        <StarCanvas />
      </div>
    </motion.div>
  );
}

function LiveWelcomePage() {
  return (
    <motion.div
      className="welcome-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="welcome-content">
        <div className="welcome-flourish">
          <StarCanvas />
        </div>
        <p className="welcome-subtitle">Your thoughts deserve a beautiful home.</p>

        <p className="welcome-hint">
          Press <kbd>⌥</kbd> <kbd>N</kbd> to create a new page
        </p>
      </div>
    </motion.div>
  );
}
