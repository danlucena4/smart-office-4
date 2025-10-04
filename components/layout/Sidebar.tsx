"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PawPrint, Home, BarChart3, Filter, Package, Users, Heart, Wrench } from "lucide-react";

const links = [
  { href: "/", label: "Visão Geral", icon: Home },
  { href: "/acquisition", label: "Aquisição", icon: BarChart3 },
  { href: "/onboarding", label: "Onboarding", icon: Filter },
  { href: "/inventory", label: "Inventário", icon: Package },
  { href: "/engagement", label: "Engajamento", icon: Users },
  { href: "/adoptions", label: "Adoções", icon: Heart },
  { href: "/operations", label: "Operações", icon: Wrench },
  { href: "/ai-reports", label: "IA (Chats)", icon: PawPrint }
];

export default function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <nav className="h-dvh p-4 sidebar-bg border-r border-base w-[min(85vw,var(--sidebar-w))]">
      <div className="mb-6 flex items-center gap-2">
        <PawPrint />
        <span className="font-semibold">Smart Office 4.0</span>
      </div>
      <ul className="space-y-1">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                onClick={onNavigate}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-colors
                  ${active
                    ? "bg-neutral-200/70 dark:bg-neutral-800/70"
                    : "hover:bg-neutral-100/80 dark:hover:bg-neutral-800/70"}`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
