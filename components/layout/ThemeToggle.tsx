"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      aria-label="Alternar tema"
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-md border border-base px-3 py-1.5 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
      <span>{dark ? "Claro" : "Escuro"}</span>
    </button>
  );
}
