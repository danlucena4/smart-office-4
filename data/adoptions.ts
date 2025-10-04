export const adoptionsByWeek = Array.from({ length: 12 }, (_, i) => ({
  semana: `Sem ${i + 1}`,
  adotados: Math.round(40 + Math.random() * 20),
}));

export const rejectionReasons = [
  { name: "Perfil Inadequado", value: 26 },
  { name: "Documentação", value: 14 },
  { name: "Retirada Não Realizada", value: 11 },
  { name: "Outros", value: 7 }
];
