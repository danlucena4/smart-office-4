"use client";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { CHART_PRIMARY, CHART_CONTRAST } from "@/lib/colors";

export default function SimplePieChart({ data, dataKey = "value" }: { data: any[]; dataKey?: string }) {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey={dataKey} outerRadius={96} stroke={CHART_CONTRAST} strokeWidth={2}>
            {data.map((_: any, idx: number) => (
              <Cell key={idx} fill={CHART_PRIMARY} opacity={0.55 + (idx % 3) * 0.15} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
