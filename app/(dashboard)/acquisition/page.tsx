import AdvancedPieChart from "@/components/charts/AdvancedPieChart";
import AdvancedBarChart from "@/components/charts/AdvancedBarChart";
import { acquisitionSources, acquisitionCosts } from "@/data/advanced-acquisition";

export default function AcquisitionPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">Aquisição & Tráfego</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <AdvancedPieChart 
          data={acquisitionSources}
          title="Origem dos Usuários"
          height={400}
          showLegend={true}
          valueLabel="Usuários"
        />
        <AdvancedBarChart 
          data={acquisitionCosts}
          title="Investimento por Canal (R$)"
          height={400}
          showGradient={true}
          valueLabel="Investimento (R$)"
        />
      </div>
    </div>
  );
}
