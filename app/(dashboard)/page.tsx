import KpiCard from "@/components/charts/KpiCard";
import SimpleLineChart from "@/components/charts/SimpleLineChart";
import { overviewKpis, overviewTrend } from "@/data/overview";

export default function OverviewPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-xl font-semibold mb-3">Visão Geral</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {overviewKpis.map((k) => (
            <KpiCard key={k.label} kpi={k} />
          ))}
        </div>
      </section>
      <section>
        <h3 className="text-lg font-medium mb-3">Usuários/mês (últimos 12 meses)</h3>
        <SimpleLineChart data={overviewTrend} />
      </section>
    </div>
  );
}
