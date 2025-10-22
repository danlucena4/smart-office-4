import AdvancedBarChart from "@/components/charts/AdvancedBarChart";
import AdvancedLineChart from "@/components/charts/AdvancedLineChart";
import RealTimeChart from "@/components/charts/RealTimeChart";

const ticketsByType = [
  { name: "Dúvidas sobre Adoção", value: 245, color: "#a78bfa" },
  { name: "Suporte Pós-Adoção", value: 189, color: "#f472b6" },
  { name: "Informações sobre Animais", value: 156, color: "#10b981" },
  { name: "Documentação", value: 134, color: "#fb923c" },
  { name: "Outros", value: 89, color: "#38bdf8" }
];

const responseTimeData = [
  { name: "00:00", value: 2.3 },
  { name: "04:00", value: 1.8 },
  { name: "08:00", value: 4.2 },
  { name: "12:00", value: 3.1 },
  { name: "16:00", value: 2.8 },
  { name: "20:00", value: 1.9 }
];

export default function OperationsPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">Operações</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <AdvancedBarChart 
          data={ticketsByType}
          title="Chamados por Tipo"
          height={400}
          showGradient={true}
          valueLabel="Chamados"
        />
        <AdvancedLineChart 
          data={responseTimeData}
          title="Tempo de Resposta (horas)"
          color="#a78bfa"
          showTrend={true}
          height={400}
          valueLabel="Tempo (horas)"
        />
      </div>

      <div className="mt-6 sm:mt-8">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-neutral-900 dark:text-neutral-100">Atividade de Suporte em Tempo Real</h3>
        <RealTimeChart 
          title="Chamados por Hora"
          color="#a78bfa"
          height={350}
          updateInterval={3000}
          valueLabel="Chamados"
        />
      </div>
    </div>
  );
}
