"use client";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useState, useEffect } from 'react';

interface DataPoint {
  name: string;
  value: number;
  color?: string;
}

interface AdvancedPieChartProps {
  data: DataPoint[];
  title: string;
  height?: number;
  showLegend?: boolean;
}

const defaultColors = [
  '#3b82f6', '#ef4444', '#10b981', '#f59e0b', 
  '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'
];

export default function AdvancedPieChart({ 
  data, 
  title, 
  height = 300,
  showLegend = true 
}: AdvancedPieChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Altura e raio responsivos
  const responsiveHeight = isMobile ? Math.min(height, 280) : height;
  const outerRadius = isMobile ? 80 : 90;
  
  // Função para renderizar labels - simplificada em mobile
  const renderLabel = ({ name, percent }: any) => {
    if (isMobile) {
      // Em mobile, mostrar só porcentagem
      return `${(percent * 100).toFixed(0)}%`;
    }
    // Em desktop, mostrar nome + porcentagem
    return `${name} ${(percent * 100).toFixed(0)}%`;
  };

  return (
    <div 
      className="card rounded-xl p-3 sm:p-6 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 border-0 shadow-lg"
    >
      <h3 className="text-base sm:text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4 sm:mb-6">{title}</h3>
      
      {/* Legenda customizada para mobile */}
      {showLegend && isMobile && (
        <div className="flex flex-wrap gap-2 mb-4">
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center gap-1.5">
              <div 
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: entry.color || defaultColors[index % defaultColors.length] }}
              />
              <span className="text-[10px] text-neutral-600 dark:text-neutral-400 whitespace-nowrap">
                {entry.name}
              </span>
            </div>
          ))}
        </div>
      )}
      
      <div className="relative">
        <ResponsiveContainer width="100%" height={responsiveHeight}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={!isMobile}
              label={renderLabel}
              outerRadius={outerRadius}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color || defaultColors[index % defaultColors.length]}
                />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                color: '#374151',
                fontSize: '12px'
              }}
              formatter={(value: number) => [value, 'Valor']}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
