import AdvancedLineChart from "@/components/charts/AdvancedLineChart";
import AdvancedBarChart from "@/components/charts/AdvancedBarChart";
import { adoptionsByWeek, rejectionReasons } from "@/data/advanced-adoptions";

export default function AdoptionsPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">Adoções</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <AdvancedLineChart 
          data={adoptionsByWeek.map(item => ({ name: item.semana, value: item.adotados }))}
          title="Adoções por Semana"
          color="#a78bfa"
          showTrend={true}
          height={400}
        />
        <AdvancedBarChart 
          data={rejectionReasons}
          title="Motivos de Reprovação"
          height={400}
          showGradient={true}
        />
      </div>
    </div>
  );
}
