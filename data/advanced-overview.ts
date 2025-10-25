export const overviewKpis = [
  {
    label: "Animais Disponíveis",
    value: "847",
    change: 12.5,
    changeType: "increase" as const,
    icon: "users" as const,
    color: "from-purple-400 to-purple-500"
  },
  {
    label: "Total de Adoções",
    value: "2,431",
    change: 8.3,
    changeType: "increase" as const,
    icon: "check" as const,
    color: "from-emerald-500 to-emerald-600"
  },
  {
    label: "Taxa de Adoção",
    value: "73.2%",
    change: 5.1,
    changeType: "increase" as const,
    icon: "paw" as const,
    color: "from-pink-400 to-pink-500"
  },
  {
    label: "Visitas ao App",
    value: "45,231",
    change: 15.7,
    changeType: "increase" as const,
    icon: "smartphone" as const,
    color: "from-blue-400 to-blue-500"
  }
];

export const overviewTrend = [
  { name: "Jan", value: 8500, target: 9000 },
  { name: "Fev", value: 9200, target: 9500 },
  { name: "Mar", value: 8800, target: 10000 },
  { name: "Abr", value: 10500, target: 10500 },
  { name: "Mai", value: 11200, target: 11000 },
  { name: "Jun", value: 10800, target: 11500 },
  { name: "Jul", value: 12500, target: 12000 },
  { name: "Ago", value: 13200, target: 12500 },
  { name: "Set", value: 12800, target: 13000 },
  { name: "Out", value: 14100, target: 13500 },
  { name: "Nov", value: 13800, target: 14000 },
  { name: "Dez", value: 12847, target: 14500 }
];
