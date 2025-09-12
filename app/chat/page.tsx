"use client";

import FirstVisitNote from "@/components/app/FirstVisit";
import AiInput from "@/components/ui/ai-input";
import { ThemeToggleButton } from "@/components/ui/theme-toggle-button";
import { useLocalStorage } from "@/lib/useLocalStorage";
import { useEffect, useState } from "react";

export default function ChatPage() {
  const [isHydrated, setIsHydrated] = useState(false);

  const [firstNoteDismissed, setFirstNoteDismissed] = useLocalStorage<boolean>(
    "assignmate:fvn-dismissed",
    false
  );

  useEffect(() => {
    setIsHydrated(true);
    const t = setTimeout(() => setIsHydrated(false), 350);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {isHydrated && (
        <FirstVisitNote
          open={!firstNoteDismissed}
          onClose={() => setFirstNoteDismissed(true)}
        />
      )}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggleButton variant="circle-blur" start="top-right" />
      </div>
      <div className="bg-background min-h-screen flex flex-col justify-end">
        <AiInput />
      </div>
    </>
  );
}
