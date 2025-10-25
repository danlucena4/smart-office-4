import { NextResponse } from "next/server";

function mockR2(prompt: string): string {
  const lower = prompt.toLowerCase();
  if (lower.includes("engaj") || lower.includes("dau") || lower.includes("wau") || lower.includes("mau"))
    return "R2 (Engajamento): DAU/MAU simulado ~0,21. Maior recorrência: quartas e sábados. Dica: push semanal com lista de animais recém-chegados.";
  if (lower.includes("sla") || lower.includes("suporte") || lower.includes("chamado"))
    return "R2 (Operações): SLA médio 7,2h (mock). Picos de espera: domingos 18–22h. Ações: plantão leve aos domingos.";
  return "R2: tendência positiva nos principais indicadores (mock). Posso gerar um plano de testes A/B para telas de busca?";
}

export async function POST(req: Request) {
  const { messages } = await req.json();
  const last = Array.isArray(messages) && messages.length ? messages[messages.length - 1].content : "";
  const reply = mockR2(String(last ?? ""));
  return NextResponse.json({ role: "ai", content: reply });
}
