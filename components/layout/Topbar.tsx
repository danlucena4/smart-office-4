"use client";
import { Badge } from "@/components/ui/Badge";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { Menu } from "lucide-react";

export default function Topbar({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="sticky top-0 z-10 header-blur border-b border-base p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="inline-flex items-center justify-center rounded-md border border-base p-2 lg:hidden hover:bg-neutral-100 dark:hover:bg-neutral-800"
          aria-label="Abrir menu"
        >
          <Menu size={18} />
        </button>
        <div>
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">App de Adoção — Monitoramento</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
      </div>
    </header>
  );
}
