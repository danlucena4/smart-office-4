import type { KPI, TimePoint } from "@/lib/types";

export const overviewKpis: KPI[] = [
  { label: "Usuários/mês", value: 18420, delta: 12 },
  { label: "Adoções", value: 638, delta: 8 },
  { label: "Chamados", value: 92, delta: -5 },
  { label: "Índice de Satisfação (NPS)", value: 62 }
];

export const overviewTrend: TimePoint[] = Array.from({ length: 12 }, (_, i) => ({
  date: `2025-${String(i + 1).padStart(2, "0")}-01`,
  value: Math.round(12000 + Math.random() * 8000)
}));
