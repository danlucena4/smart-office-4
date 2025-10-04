"use client";
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { CHART_PRIMARY } from "@/lib/colors";

type SeriesItem = { key: string; name?: string };
type Props = { data: any[]; xKey?: string; series: SeriesItem[] };

export default function AreaStackedChart({ data, xKey = "name", series }: Props) {
  const opacities = [0.6, 0.4, 0.25, 0.15];
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          {series.map((s, i) => (
            <Area
              key={s.key}
              type="monotone"
              dataKey={s.key}
              name={s.name ?? s.key}
              stackId="1"
              strokeWidth={2}
              stroke={CHART_PRIMARY}
              fill={CHART_PRIMARY}
              fillOpacity={opacities[i % opacities.length]}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
