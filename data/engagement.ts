export const dauWauMau = Array.from({ length: 12 }, (_, i) => ({
  mes: `2025-${String(i + 1).padStart(2, "0")}`,
  DAU: Math.round(2000 + Math.random() * 1000),
  WAU: Math.round(6000 + Math.random() * 1500),
  MAU: Math.round(18000 + Math.random() * 3000),
}));

export const keyEvents = [
  { name: "Favoritar", value: 5200 },
  { name: "Iniciar Adoção", value: 1800 },
  { name: "Mensagem", value: 2400 },
  { name: "Compartilhar", value: 1200 }
];
