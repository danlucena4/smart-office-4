"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./useTheme";

export default function ThemeToggle() {
  const [theme, toggle] = useTheme();
  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
      aria-label="Alternar tema"
      title="Alternar tema"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      <span>{theme === "dark" ? "Claro" : "Escuro"}</span>
    </button>
  );
}
