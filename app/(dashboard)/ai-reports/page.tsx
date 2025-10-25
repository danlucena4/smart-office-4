"use client";
import ChatBox from "@/components/ai/ChatBox";

export default function AIReportsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Chat de Relatórios — AdotAI</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        <ChatBox endpoint="/api/ai-chat/r1" title="AdotAI — Relatório 1" />
        <ChatBox endpoint="/api/ai-chat/r2" title="AdotAI — Relatório 2" />
      </div>
      <div className="text-xs text-neutral-500 dark:text-neutral-400">* Os chats usam rotas de API mock (<code>/api/ai-chat/r1</code> e <code>/api/ai-chat/r2</code>). Troque por backend Python quando disponível.</div>
    </div>
  );
}
