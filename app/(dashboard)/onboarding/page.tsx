import AdvancedKpiCard from "@/components/charts/AdvancedKpiCard";
import AdvancedLineChart from "@/components/charts/AdvancedLineChart";

const npsData = [
  { name: "Jan", value: 8.2 },
  { name: "Fev", value: 8.5 },
  { name: "Mar", value: 8.1 },
  { name: "Abr", value: 8.8 },
  { name: "Mai", value: 9.1 },
  { name: "Jun", value: 8.9 },
  { name: "Jul", value: 9.2 },
  { name: "Ago", value: 9.0 },
  { name: "Set", value: 8.7 },
  { name: "Out", value: 9.3 },
  { name: "Nov", value: 9.1 },
  { name: "Dez", value: 9.4 }
];

const onboardingKpis = [
  {
    label: "NPS Score",
    value: "9.4",
    change: 3.2,
    changeType: "increase" as const,
    icon: "star" as const,
    color: "from-purple-400 to-purple-500"
  },
  {
    label: "Taxa de Conclusão",
    value: "87%",
    change: 5.1,
    changeType: "increase" as const,
    icon: "clipboard" as const,
    color: "from-pink-400 to-pink-500"
  }
];

export default function OnboardingPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">Onboarding</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
        {onboardingKpis.map((kpi, index) => (
          <AdvancedKpiCard key={kpi.label} kpi={kpi} index={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <AdvancedLineChart 
          data={npsData}
          title="Evolução do NPS"
          color="#a78bfa"
          showTrend={true}
          height={400}
        />
        <div className="card rounded-xl p-3 sm:p-6 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 border-0 shadow-lg">
          <h3 className="text-base sm:text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Funil de Onboarding</h3>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <span className="text-xs sm:text-sm font-medium">Cadastro Iniciado</span>
              <span className="text-base sm:text-lg font-bold text-blue-600">100%</span>
            </div>
            <div className="flex items-center justify-between p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <span className="text-xs sm:text-sm font-medium">Documentos Enviados</span>
              <span className="text-base sm:text-lg font-bold text-green-600">87%</span>
            </div>
            <div className="flex items-center justify-between p-3 sm:p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <span className="text-xs sm:text-sm font-medium">Aprovação Final</span>
              <span className="text-base sm:text-lg font-bold text-purple-600">72%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
