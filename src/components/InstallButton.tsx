import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface InstallButtonProps {
  className?: string;
}

export const InstallButton = ({ className = '' }: InstallButtonProps) => {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  useEffect(() => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
      || Boolean((navigator as Navigator & { standalone?: boolean }).standalone);

    setIsInstalled(isStandalone);

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setInstallPrompt(null);
      setIsInstalled(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;

    setIsConfirmOpen(false);
    await installPrompt.prompt();
    await installPrompt.userChoice;
    setInstallPrompt(null);
  };

  if (isInstalled || !installPrompt) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsConfirmOpen(true)}
        className={className}
        aria-label="Add Makezy Tech app to home screen"
      >
        <Download className="w-5 h-5" />
        <span>Add To App Screen</span>
      </button>

      {isConfirmOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6"
          role="presentation"
          onClick={() => setIsConfirmOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-xl bg-white p-6 text-gray-900 shadow-2xl dark:bg-gray-800 dark:text-white"
            role="dialog"
            aria-modal="true"
            aria-labelledby="install-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 id="install-dialog-title" className="text-xl font-bold">
              Add Makezy Tech to your app screen?
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
             Click "Continue" to install the app.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsConfirmOpen(false)}
                className="rounded-lg px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleInstall}
                className="rounded-lg bg-primary-yellow px-4 py-2 font-semibold text-primary-blue transition-colors hover:bg-primary-yellow/90"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};