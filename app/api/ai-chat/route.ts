import { NextResponse } from "next/server";

function mockInsights(prompt: string): string {
  const lower = prompt.toLowerCase();
  if (lower.includes("ado")) return "Parece que você quer saber sobre adoções: nas últimas 4 semanas, a média diária simulada foi de 12 adoções com pico nas quartas-feiras. Sugestão: notificar usuários que favoritaram animais há >7 dias.";
  if (lower.includes("engaj")) return "Engajamento simulado: DAU/MAU ~ 0,22. Eventos mais frequentes: Favoritar > Mensagem > Iniciar Adoção. Sugestão: badge de “adotável hoje” para aumentar CTR.";
  if (lower.includes("sla") or lower.includes("suporte") or lower.includes("chamado")) return "Tempo de atendimento (mock): 7,8h (↓ 12% vs mês anterior). Maior fila: Moderação nos domingos.";
  return "Resumo (mock): a saúde do app está positiva. Crescimento de usuários/mês e tempo de atendimento em queda. Quer ver ideias para reduzir abandono no Onboarding?";
}

export async function POST(req: Request) {
  const { messages } = await req.json();
  const last = Array.isArray(messages) && messages.length ? messages[messages.length - 1].content : "";
  const reply = mockInsights(String(last ?? ""));
  return NextResponse.json({ role: "ai", content: reply });
}
