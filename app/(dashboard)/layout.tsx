"use client";
import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import Footer from "@/components/layout/Footer";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh grid lg:grid-cols-[var(--sidebar-w)_1fr]">
      {/* Desktop sidebar */}
      <aside className="hidden lg:block">
        <div className="h-dvh sticky top-0">
          <Sidebar />
        </div>
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={`lg:hidden fixed z-50 inset-y-0 left-0 transition-transform duration-200 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}`}
        aria-hidden={!open}
        aria-label="Menu lateral"
      >
        <Sidebar onNavigate={() => setOpen(false)} />
      </div>

      {/* Main */}
      <main className="flex flex-col min-h-screen">
        <Topbar onMenuClick={() => setOpen(true)} />
        <div className="flex-1 px-2 py-3 sm:p-4 md:p-6">{children}</div>
        <Footer />
      </main>
    </div>
  );
}
