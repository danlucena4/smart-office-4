import AdvancedKpiCard from "@/components/charts/AdvancedKpiCard";
import AdvancedLineChart from "@/components/charts/AdvancedLineChart";
import RealTimeChart from "@/components/charts/RealTimeChart";
import { overviewKpis, overviewTrend } from "@/data/advanced-overview";

export default function OverviewPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <section>
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-neutral-900 dark:text-neutral-100">Visão Geral</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {overviewKpis.map((kpi, index) => (
            <AdvancedKpiCard key={kpi.label} kpi={kpi} index={index} />
          ))}
        </div>
      </section>
      
      <section>
        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-neutral-900 dark:text-neutral-100">Crescimento de Visitantes (Últimos 12 Meses)</h3>
        <AdvancedLineChart 
          data={overviewTrend}
          title="Evolução Mensal de Visitantes"
          color="#a78bfa"
          showTrend={true}
          showTarget={true}
          height={400}
          valueLabel="Visitantes"
        />
      </section>

      <section>
        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-neutral-900 dark:text-neutral-100">Atividade em Tempo Real</h3>
        <RealTimeChart 
          title="Visualizações de Perfis por Minuto"
          color="#a78bfa"
          height={350}
          updateInterval={1500}
          valueLabel="Visualizações"
        />
      </section>
    </div>
  );
}
