"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleButtonProps {
  showLabel?: boolean;
  variant?: "circle" | "rounded" | "square";
  start?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}

export default function ThemeToggleButton({
  showLabel = false,
  variant = "circle",
  start = "top-right",
  className = "",
}: ThemeToggleButtonProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemPreference;

    setTheme(initialTheme);

    // Apply theme to html element
    const htmlElement = document.documentElement;
    if (initialTheme === "dark") {
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light");
    } else {
      htmlElement.classList.add("light");
      htmlElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Update html element classes
    const htmlElement = document.documentElement;
    if (newTheme === "dark") {
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light");
    } else {
      htmlElement.classList.add("light");
      htmlElement.classList.remove("dark");
    }
  }; // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  const getVariantClasses = () => {
    switch (variant) {
      case "circle":
        return "rounded-full";
      case "rounded":
        return "rounded-lg";
      case "square":
        return "rounded-none";
      default:
        return "rounded-full";
    }
  };

  const getPositionClasses = () => {
    switch (start) {
      case "top-left":
        return "fixed top-4 left-4 z-50";
      case "top-right":
        return "fixed top-4 right-4 z-50";
      case "bottom-left":
        return "fixed bottom-4 left-4 z-50";
      case "bottom-right":
        return "fixed bottom-4 right-4 z-50";
      default:
        return "fixed top-4 right-4 z-50";
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        ${getPositionClasses()}
        ${getVariantClasses()}
        ${className}
        bg-white/80 dark:bg-slate-800/80 
        backdrop-blur-md 
        border border-slate-200/50 dark:border-slate-700/50
        p-3 
        hover:bg-white dark:hover:bg-slate-800
        transition-all duration-300
        shadow-lg hover:shadow-xl
        group
        ${showLabel ? "flex items-center space-x-2 px-4" : ""}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5 text-slate-600 group-hover:text-[#2196F3] transition-colors" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-500 group-hover:text-[#FFEB3B] transition-colors" />
          )}
        </motion.div>
      </AnimatePresence>

      {showLabel && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </motion.span>
      )}
    </motion.button>
  );
}
