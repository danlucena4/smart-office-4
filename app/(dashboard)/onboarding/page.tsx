import SimpleBarChart from "@/components/charts/SimpleBarChart";
import SimpleLineChart from "@/components/charts/SimpleLineChart";
import { onboardingFunnel } from "@/data/onboarding";

export default function OnboardingPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Onboarding</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card rounded-lg p-4">
          <h3 className="mb-2 font-medium">Funil de cadastro (usuários por etapa)</h3>
          <SimpleBarChart data={onboardingFunnel} xKey="etapa" yKey="usuarios" />
        </div>
        <div className="card rounded-lg p-4">
          <h3 className="mb-2 font-medium">Tempo médio por etapa (min)</h3>
          <SimpleLineChart data={onboardingFunnel.map(x => ({ date: x.etapa, value: x.tempoMedioMin }))} />
        </div>
      </div>
    </div>
  );
}
