"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { CHART_PRIMARY } from "@/lib/colors";

export default function SimpleBarChart({ data, xKey = "name", yKey = "value" }:
  { data: any[]; xKey?: string; yKey?: string; }) {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Bar dataKey={yKey} radius={4} fill={CHART_PRIMARY} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
