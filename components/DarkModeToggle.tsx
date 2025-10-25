"use client";

import { useEffect, useState } from "react";
import { IconMoonStars, IconSun } from "@tabler/icons-react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Defer state update to avoid synchronous setState warning
    const applyTheme = () => {
      if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
      }
    };

    requestAnimationFrame(applyTheme);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 h-12 w-12 rounded-full bg-white dark:bg-neutral-900 shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <IconSun className="h-6 w-6 text-yellow-400" />
      ) : (
        <IconMoonStars className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
      )}
    </button>
  );
}
