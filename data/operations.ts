export const ticketsByType = [
  { name: "Suporte", value: 42 },
  { name: "Moderação", value: 27 },
  { name: "Pagamento", value: 10 },
  { name: "Parcerias", value: 6 }
];

export const slaTrend = Array.from({ length: 8 }, (_, i) => ({
  mes: `2025-${String(i + 1).padStart(2, "0")}`,
  horas: Math.round(8 + Math.random() * 6),
}));
