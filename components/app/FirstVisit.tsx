"use client";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function FirstVisitNote({ open, onClose }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative mx-3 w-full max-w-md sm:max-w-lg rounded-2xl border border-border bg-card/95 backdrop-blur-sm p-5 shadow-2xl">
        <div className="flex items-start gap-3 mb-2">
          <h3 className="text-base font-semibold tracking-wide text-card-foreground">
            Access pro models
          </h3>
        </div>
        <div className="text-sm text-muted-foreground space-y-2">
          <p>
            We include in‑house API keys for many pro models so you can try them
            instantly. You can also bring your own keys at any time.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Manage keys per provider in Settings.</li>
            <li>
              Your keys and preferences are stored locally in your browser
              (localStorage).
            </li>
            <li>No keys are uploaded to our servers.</li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 justify-end mt-4">
          <button
            onClick={() => {
              window.dispatchEvent(new Event("open-settings"));
              onClose();
            }}
            className="cursor-pointer text-sm px-3 py-2 rounded-lg bg-primary text-primary-foreground border border-border hover:bg-primary/90 transition-colors"
          >
            Manage keys
          </button>
          <button
            onClick={onClose}
            className="cursor-pointer text-sm px-3 py-2 rounded-lg bg-secondary text-secondary-foreground border border-border hover:bg-secondary/90 transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
