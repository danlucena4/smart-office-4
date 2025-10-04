"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TimePoint } from "@/lib/types";
import { CHART_PRIMARY } from "@/lib/colors";

export default function SimpleLineChart({ data }: { data: TimePoint[] }) {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line type="monotone" dataKey="value" dot={false} strokeWidth={2} stroke={CHART_PRIMARY} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
