"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';
import ExportChartButton from '@/components/ui/ExportChartButton';
import { exportChartToExcel, getFileNameWithDate } from '@/lib/export-excel';

interface DataPoint {
  name: string;
  value: number;
  previousValue?: number;
  target?: number;
}

interface AdvancedLineChartProps {
  data: DataPoint[];
  title: string;
  color?: string;
  showTrend?: boolean;
  showTarget?: boolean;
  height?: number;
  valueLabel?: string;
}

export default function AdvancedLineChart({ 
  data, 
  title, 
  color = "#3b82f6", 
  showTrend = true,
  showTarget = false,
  height = 300,
  valueLabel = "Valor"
}: AdvancedLineChartProps) {
  const latestValue = data[data.length - 1]?.value || 0;
  const previousValue = data[data.length - 2]?.value || 0;
  const trend = latestValue > previousValue ? 'up' : 'down';
  const changePercent = previousValue ? ((latestValue - previousValue) / previousValue * 100) : 0;

  // Altura responsiva
  const responsiveHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? Math.min(height, 280) : height;

  const handleExport = () => {
    const fileName = getFileNameWithDate(title.toLowerCase().replace(/\s+/g, '-'));
    const exportData = data.map(item => {
      const row: any = {
        [data[0]?.name ? 'Período' : 'Item']: item.name,
        [valueLabel]: item.value,
      };
      if (item.target !== undefined) row['Meta'] = item.target;
      if (item.previousValue !== undefined) row['Valor Anterior'] = item.previousValue;
      return row;
    });
    exportChartToExcel(exportData, fileName, title);
  };

  return (
    <div 
      className="card rounded-xl p-3 sm:p-6 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 border-0 shadow-lg"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-neutral-800 dark:text-neutral-200">{title}</h3>
        <div className="flex items-center gap-2">
          {showTrend && (
            <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
              trend === 'up' 
                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' 
                : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
            }`}>
              {trend === 'up' ? <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" /> : <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" />}
              {Math.abs(changePercent).toFixed(1)}%
            </div>
          )}
          <ExportChartButton onExport={handleExport} />
        </div>
      </div>

      <div className="relative">
        <ResponsiveContainer width="100%" height={responsiveHeight}>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={color} stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-neutral-700" />
            <XAxis 
              dataKey="name" 
              stroke="#6b7280" 
              className="dark:fill-neutral-400"
              fontSize={10}
              angle={-45}
              textAnchor="end"
              height={60}
              interval="preserveStartEnd"
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
              formatter={(value: number) => [value.toLocaleString('pt-BR'), valueLabel]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={3}
              fill={`url(#gradient-${color})`}
              dot={{ fill: color, strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: color, strokeWidth: 2 }}
            />
            {showTarget && (
              <Line
                type="monotone"
                dataKey="target"
                stroke="#f59e0b"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
