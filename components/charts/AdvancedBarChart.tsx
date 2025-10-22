"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface DataPoint {
  name: string;
  value: number;
  color?: string;
}

interface AdvancedBarChartProps {
  data: DataPoint[];
  title: string;
  height?: number;
  showGradient?: boolean;
}

const defaultColors = [
  '#3b82f6', '#ef4444', '#10b981', '#f59e0b', 
  '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'
];

export default function AdvancedBarChart({ 
  data, 
  title, 
  height = 300,
  showGradient = true 
}: AdvancedBarChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));
  
  // Altura responsiva
  const responsiveHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? Math.min(height, 280) : height;
  
  return (
    <div 
      className="card rounded-xl p-3 sm:p-6 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 border-0 shadow-lg"
    >
      <h3 className="text-base sm:text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4 sm:mb-6">{title}</h3>
      
      {/* Legenda customizada */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
        {data.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center gap-1.5 sm:gap-2">
            <div 
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: entry.color || defaultColors[index % defaultColors.length] }}
            />
            <span className="text-[10px] sm:text-xs text-neutral-600 dark:text-neutral-400 whitespace-nowrap">
              {entry.name}
            </span>
          </div>
        ))}
      </div>
      
      <div className="relative">
        <ResponsiveContainer width="100%" height={responsiveHeight}>
          <BarChart data={data} margin={{ top: 20, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-neutral-700" />
            <XAxis 
              dataKey="name" 
              stroke="#6b7280" 
              className="dark:fill-neutral-400"
              fontSize={12}
              hide
            />
            <YAxis 
              stroke="#6b7280" 
              className="dark:fill-neutral-400"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                color: '#374151'
              }}
              labelStyle={{ color: '#6b7280', fontSize: '14px' }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color || defaultColors[index % defaultColors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
