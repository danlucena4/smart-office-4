import SimpleBarChart from "@/components/charts/SimpleBarChart";
import SimplePieChart from "@/components/charts/SimplePieChart";
import { acquisitionSources, acquisitionCosts } from "@/data/acquisition";

export default function AcquisitionPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Aquisição & Tráfego</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card rounded-lg p-4">
          <h3 className="mb-2 font-medium">Origem dos usuários</h3>
          <SimplePieChart data={acquisitionSources} />
        </div>
        <div className="card rounded-lg p-4">
          <h3 className="mb-2 font-medium">Investimento por canal</h3>
          <SimpleBarChart data={acquisitionCosts} />
        </div>
      </div>
    </div>
  );
}
