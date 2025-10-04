"use client";
import { useEffect, useRef, useState } from "react";
import { Send, Bot, User } from "lucide-react";

type Msg = { id: string; role: "user" | "ai"; content: string; ts: number };

export default function ChatBox({ endpoint, title }: { endpoint: string; title: string }) {
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: crypto.randomUUID(),
      role: "ai",
      content: `Olá! Sou a IA (${title}). Pergunte sobre métricas do app de adoção.`,
      ts: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;
    const myMsg: Msg = { id: crypto.randomUUID(), role: "user", content: text, ts: Date.now() };
    setMessages((m) => [...m, myMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, myMsg] }),
      });
      const data = await res.json();
      const aiMsg: Msg = { id: crypto.randomUUID(), role: "ai", content: data.content ?? "Sem resposta.", ts: Date.now() };
      setMessages((m) => [...m, aiMsg]);
    } catch (e) {
      const aiMsg: Msg = { id: crypto.randomUUID(), role: "ai", content: "Erro ao chamar IA (mock).", ts: Date.now() };
      setMessages((m) => [...m, aiMsg]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="rounded-lg border border-base card p-0 overflow-hidden">
      <div className="border-b border-base px-4 py-2 text-sm font-medium">{title}</div>
      <div ref={listRef} className="h-[50vh] overflow-y-auto p-4 space-y-3">
        {messages.map((m) => (
          <div key={m.id} className={`flex items-start gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            {m.role === "ai" && (
              <div className="mt-1 shrink-0 rounded-md border border-base p-1">
                <Bot size={16} />
              </div>
            )}
            <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-sm
              ${m.role === "user"
                ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                : "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"}`}
            >
              {m.content}
            </div>
            {m.role === "user" && (
              <div className="mt-1 shrink-0 rounded-md border border-base p-1">
                <User size={16} />
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <div className="animate-pulse">Digitando…</div>
          </div>
        )}
      </div>
      <div className="border-t border-base p-3 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Escreva sua pergunta…"
            className="min-h-[44px] max-h-40 flex-1 resize-y rounded-md border border-base bg-white p-2 text-sm outline-none focus:ring-2 focus:ring-neutral-300 dark:bg-neutral-900 dark:text-neutral-100 dark:focus:ring-neutral-700"
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            className="inline-flex items-center gap-2 rounded-md border border-base px-3 py-2 text-sm font-medium
              bg-neutral-900 text-white hover:bg-neutral-800 disabled:opacity-60
              dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
          >
            Enviar
          </button>
        </div>
        <p className="mt-2 text-[11px] text-neutral-500 dark:text-neutral-400">Enter para enviar • Shift+Enter para nova linha</p>
      </div>
    </div>
  );
}
