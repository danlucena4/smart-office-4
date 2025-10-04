import AreaStackedChart from "@/components/charts/AreaStackedChart";
import SimplePieChart from "@/components/charts/SimplePieChart";
import { dauWauMau, keyEvents } from "@/data/engagement";

export default function EngagementPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Engajamento</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card rounded-lg p-4">
          <h3 className="mb-2 font-medium">Usuários ativos (dia/semana/mês)</h3>
          <AreaStackedChart
            data={dauWauMau}
            xKey="mes"
            series={[
              { key: "DAU", name: "Usuários/dia" },
              { key: "WAU", name: "Usuários/semana" },
              { key: "MAU", name: "Usuários/mês" }
            ]}
          />
        </div>
        <div className="card rounded-lg p-4">
          <h3 className="mb-2 font-medium">Eventos-chave (último mês)</h3>
          <SimplePieChart data={keyEvents} />
        </div>
      </div>
    </div>
  );
}
