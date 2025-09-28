"use client";

import FirstVisitNote from "@/components/app/FirstVisit";
import AiInput from "@/components/ui/ai-input";
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
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
    <SidebarProvider>
      {isHydrated && (
        <FirstVisitNote
          open={!firstNoteDismissed}
          onClose={() => setFirstNoteDismissed(true)}
        />
      )}

      <Sidebar>
        <SidebarContent>
          <div className="p-4">
            <p className="text-sm text-muted-foreground">Chats</p>
          </div>
        </SidebarContent>
      </Sidebar>

      <main className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
          <div className="flex items-center gap-4 px-4 py-3">
            <SidebarTrigger />
            <div className="flex-1">
              <h1 className="font-semibold text-foreground">New Chat</h1>
            </div>
            <ThemeToggleButton variant="circle-blur" start="top-right" />
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col justify-end"></div>

        {/* AI Input - Fixed at bottom */}
        <div className="mt-auto">
          <AiInput />
        </div>
      </main>
    </SidebarProvider>
  );
}
