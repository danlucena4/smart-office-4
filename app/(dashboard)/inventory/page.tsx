import SimpleBarChart from "@/components/charts/SimpleBarChart";
import SimpleLineChart from "@/components/charts/SimpleLineChart";
import { animalsByCategory, timeToAdoptBySize } from "@/data/inventory";

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Inventário</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card rounded-lg p-4">
          <h3 className="mb-2 font-medium">Animais por categoria</h3>
          <SimpleBarChart data={animalsByCategory} />
        </div>
        <div className="card rounded-lg p-4">
          <h3 className="mb-2 font-medium">Tempo médio até adoção (por porte)</h3>
          <SimpleLineChart data={timeToAdoptBySize.map(x => ({ date: x.porte, value: x.dias }))} />
        </div>
      </div>
    </div>
  );
}
