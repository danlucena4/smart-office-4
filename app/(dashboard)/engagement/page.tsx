import AdvancedLineChart from "@/components/charts/AdvancedLineChart";
import AdvancedPieChart from "@/components/charts/AdvancedPieChart";
import { dauWauMau, keyEvents } from "@/data/advanced-engagement";

export default function EngagementPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">Engajamento</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <AdvancedLineChart 
          data={dauWauMau.map(item => ({ 
            name: item.mes, 
            value: item.MAU,
            previousValue: item.WAU 
          }))}
          title="Usuários Ativos Mensais (MAU)"
          color="#a78bfa"
          showTrend={true}
          height={400}
        />
        <AdvancedPieChart 
          data={keyEvents}
          title="Eventos-Chave (Último Mês)"
          height={400}
          showLegend={true}
        />
      </div>
    </div>
  );
}
