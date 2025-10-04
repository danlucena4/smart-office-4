import SimpleBarChart from "@/components/charts/SimpleBarChart";
import SimpleLineChart from "@/components/charts/SimpleLineChart";
import { ticketsByType, slaTrend } from "@/data/operations";

export default function OperationsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Operações</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card rounded-lg p-4">
          <h3 className="mb-2 font-medium">Chamados por tipo</h3>
          <SimpleBarChart data={ticketsByType} />
        </div>
        <div className="card rounded-lg p-4">
          <h3 className="mb-2 font-medium">Tempo de atendimento (horas) — tendência</h3>
          <SimpleLineChart data={slaTrend.map(x => ({ date: x.mes, value: x.horas }))} />
        </div>
      </div>
    </div>
  );
}
