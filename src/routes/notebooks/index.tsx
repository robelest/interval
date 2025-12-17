import { createFileRoute, ClientOnly } from '@tanstack/react-router';
import { StarIcon } from '../../components/StarIcon';

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
    <div className="welcome-page">
      <div className="welcome-flourish">
        <StarIcon size={64} className="welcome-star" animate />
      </div>
    </div>
  );
}

function LiveWelcomePage() {
  return (
    <div className="welcome-page animate-fade-in">
      <div className="welcome-content">
        <div className="welcome-flourish">
          <StarIcon size={64} className="welcome-star" animate />
        </div>
        <p className="welcome-subtitle">Your thoughts deserve a beautiful home.</p>

        <p className="welcome-hint">
          Press <kbd>⌥</kbd> <kbd>N</kbd> to create a new page
        </p>
      </div>
    </div>
  );
}
