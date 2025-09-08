"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeDebug() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-black/80 text-white p-2 rounded text-xs">
      <div>Theme: {theme}</div>
      <div>Resolved: {resolvedTheme}</div>
      <div>
        HTML has dark:{" "}
        {document.documentElement.classList.contains("dark") ? "YES" : "NO"}
      </div>
    </div>
  );
}
