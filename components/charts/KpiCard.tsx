import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { KPI } from "@/lib/types";

export default function KpiCard({ kpi }: { kpi: KPI }) {
  const deltaColor = kpi.delta !== undefined && kpi.delta < 0 ? "text-rose-600" : "text-emerald-600";
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm text-neutral-500">{kpi.label}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold">
          {kpi.value.toLocaleString()} {kpi.suffix ?? ""}
        </div>
        {kpi.delta !== undefined && (
          <div className={`text-xs ${deltaColor}`}>{kpi.delta >= 0 ? "+" : ""}{kpi.delta}%</div>
        )}
      </CardContent>
    </Card>
  );
}
