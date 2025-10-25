import { NextResponse } from "next/server";

function mockR1(prompt: string): string {
  const lower = prompt.toLowerCase();
  if (lower.includes("ado")) return "R1 (Adoções): média de 13 por dia (mock), com tempo mediano de 9 dias até conclusão. Sugestão: lembretes automáticos após 48h sem resposta no chat.";
  if (lower.includes("onboard") || lower.includes("funil")) return "R1 (Onboarding): maior queda entre 'Cadastro' e 'Perfil Completo'. Tente reduzir campos obrigatórios ou adicionar salvamento parcial.";
  return "R1: saúde geral estável (mock). Quer ver recomendações para aumentar conversão de favoritos em solicitações?";
}

export async function POST(req: Request) {
  const { messages } = await req.json();
  const last = Array.isArray(messages) && messages.length ? messages[messages.length - 1].content : "";
  const reply = mockR1(String(last ?? ""));
  return NextResponse.json({ role: "ai", content: reply });
}
