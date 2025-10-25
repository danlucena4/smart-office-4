import AdvancedPieChart from "@/components/charts/AdvancedPieChart";
import AdvancedLineChart from "@/components/charts/AdvancedLineChart";
import AdvancedKpiCard from "@/components/charts/AdvancedKpiCard";

const animalsByCategory = [
  { name: "Cães", value: 45, color: "#a78bfa" },
  { name: "Gatos", value: 38, color: "#f472b6" },
  { name: "Pássaros", value: 12, color: "#fb923c" },
  { name: "Outros", value: 5, color: "#38bdf8" }
];

const adoptionTimeData = [
  { name: "Pequeno", value: 15 },
  { name: "Médio", value: 22 },
  { name: "Grande", value: 35 },
  { name: "Gigante", value: 28 }
];

const inventoryKpis = [
  {
    label: "Tempo Médio de Espera",
    value: "18 dias",
    change: -15.2,
    changeType: "decrease" as const,
    icon: "activity" as const,
    color: "from-purple-400 to-purple-500"
  },
  {
    label: "Animais Adotados (mês)",
    value: "156",
    change: 12.3,
    changeType: "increase" as const,
    icon: "home" as const,
    color: "from-pink-400 to-pink-500"
  }
];

export default function InventoryPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">Inventário</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
        {inventoryKpis.map((kpi, index) => (
          <AdvancedKpiCard key={kpi.label} kpi={kpi} index={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <AdvancedPieChart 
          data={animalsByCategory}
          title="Animais por Categoria"
          height={400}
          showLegend={true}
          valueLabel="Animais (%)"
        />
        <AdvancedLineChart 
          data={adoptionTimeData}
          title="Tempo Médio até Adoção (dias)"
          color="#a78bfa"
          showTrend={true}
          height={400}
          valueLabel="Dias"
        />
      </div>
    </div>
  );
}
