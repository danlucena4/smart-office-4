import SimpleLineChart from "@/components/charts/SimpleLineChart";
import SimpleBarChart from "@/components/charts/SimpleBarChart";
import { adoptionsByWeek, rejectionReasons } from "@/data/adoptions";

export default function AdoptionsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Adoções</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card rounded-lg p-4">
          <h3 className="mb-2 font-medium">Adoções por semana</h3>
          <SimpleLineChart data={adoptionsByWeek.map(x => ({ date: x.semana, value: x.adotados }))} />
        </div>
        <div className="card rounded-lg p-4">
          <h3 className="mb-2 font-medium">Motivos de reprovação</h3>
          <SimpleBarChart data={rejectionReasons} />
        </div>
      </div>
    </div>
  );
}
