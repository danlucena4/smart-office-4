"use client";
import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Wifi, XCircle } from 'lucide-react';
import ExportChartButton from '@/components/ui/ExportChartButton';
import { exportChartToExcel, getFileNameWithDate } from '@/lib/export-excel';

interface RealTimeDataPoint {
  timestamp: string;
  value: number;
  status: 'online' | 'offline';
}

interface RealTimeChartProps {
  title: string;
  color?: string;
  height?: number;
  updateInterval?: number;
  valueLabel?: string;
}

export default function RealTimeChart({ 
  title, 
  color = "#3b82f6", 
  height = 300,
  updateInterval = 2000,
  valueLabel = "Visualizações"
}: RealTimeChartProps) {
  const [data, setData] = useState<RealTimeDataPoint[]>([]);
  const [isOnline, setIsOnline] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [pulse, setPulse] = useState(false);
  
  // Altura responsiva
  const responsiveHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? Math.min(height, 280) : height;

  useEffect(() => {
    // Simula dados em tempo real
    const generateData = () => {
      const now = new Date();
      const newData: RealTimeDataPoint[] = [];
      
      for (let i = 11; i >= 0; i--) {
        const time = new Date(now.getTime() - i * 60000); // 1 minuto atrás
        const baseValue = 80 + Math.sin(time.getTime() / 100000) * 30;
        const trend = Math.cos(time.getTime() / 200000) * 15;
        const randomVariation = (Math.random() - 0.5) * 20;
        const spike = Math.random() > 0.85 ? Math.random() * 40 : 0; // Picos ocasionais
        
        newData.push({
          timestamp: time.toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit' 
          }),
          value: Math.round(Math.max(5, Math.min(150, baseValue + trend + randomVariation + spike))),
          status: Math.random() > 0.1 ? 'online' : 'offline'
        });
      }
      
      return newData;
    };

    // Inicializa com dados
    setData(generateData());

    const interval = setInterval(() => {
      setData(generateData());
      setLastUpdate(new Date());
      setIsOnline(Math.random() > 0.05); // 95% chance de estar online
      setPulse(true);
      setTimeout(() => setPulse(false), 300);
    }, updateInterval);

    return () => clearInterval(interval);
  }, [updateInterval]);

  const latestValue = data[data.length - 1]?.value || 0;
  const isIncreasing = data.length > 1 && latestValue > data[data.length - 2]?.value;

  const handleExport = () => {
    // Verificar se há dados disponíveis
    if (!data || data.length === 0) {
      alert('⏳ Os dados ainda estão sendo carregados. Por favor, aguarde alguns segundos e tente novamente.');
      return;
    }
    
    try {
      console.log('Iniciando exportação...', { dataLength: data.length, title });
      
      // Sanitizar o título removendo caracteres especiais
      const cleanTitle = title
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove acentos
        .replace(/[^\w\s-]/g, '') // Remove caracteres especiais exceto espaços e hífens
        .replace(/\s+/g, '-') // Substitui espaços por hífens
        .toLowerCase();
      
      const fileName = getFileNameWithDate(cleanTitle);
      
      const exportData = data.map(item => ({
        'Horario': item.timestamp,
        'Valor': item.value,
        'Status': item.status === 'online' ? 'Online' : 'Offline',
      }));
      
      console.log('Dados preparados para exportação:', { 
        fileName, 
        dataCount: exportData.length,
        sample: exportData[0] 
      });
      
      exportChartToExcel(exportData, fileName, cleanTitle);
      
      console.log('Exportação concluída com sucesso!');
    } catch (error) {
      console.error('Erro detalhado ao exportar:', error);
      console.error('Stack trace:', (error as Error).stack);
      alert(`❌ Erro ao exportar: ${(error as Error).message}`);
    }
  };

  return (
    <div 
      className="card rounded-xl p-3 sm:p-6 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 border-0 shadow-lg"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-neutral-800 dark:text-neutral-200">{title}</h3>
        <div className="flex items-center gap-2 sm:gap-3">
          <ExportChartButton 
            onExport={handleExport}
            tooltip={data.length === 0 ? 'Aguardando dados...' : 'Exportar para Excel'}
          />
          <div className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
            pulse ? 'scale-110' : 'scale-100'
          } ${
            isOnline 
              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' 
              : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
          }`}>
            {isOnline ? <Wifi className="w-3 h-3 sm:w-4 sm:h-4" /> : <XCircle className="w-3 h-3 sm:w-4 sm:h-4" />}
            <span className="hidden sm:inline">{isOnline ? 'Online' : 'Offline'}</span>
          </div>
          <div className={`text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400 transition-opacity duration-300 ${
            pulse ? 'opacity-100 font-semibold' : 'opacity-70'
          }`}>
            <span className="hidden sm:inline">Atualizado: </span>{lastUpdate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>

      <div className="relative">
        <div>
            <ResponsiveContainer width="100%" height={responsiveHeight}>
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id={`realtime-gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
                    <stop offset="95%" stopColor={color} stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-neutral-700" />
                <XAxis 
                  dataKey="timestamp" 
                  stroke="#6b7280" 
                  className="dark:fill-neutral-400"
                  fontSize={12}
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
                  fill={`url(#realtime-gradient-${color})`}
                  dot={{ fill: color, strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: color, strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
        </div>
        
        {/* Indicador de pulso em tempo real */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <div className="relative">
            <div className={`w-3 h-3 rounded-full ${
              isOnline ? 'bg-emerald-500' : 'bg-red-500'
            }`} />
            {isOnline && (
              <div className={`absolute inset-0 w-3 h-3 rounded-full bg-emerald-500 animate-ping opacity-75 ${
                pulse ? 'scale-150' : 'scale-100'
              }`} />
            )}
          </div>
          {pulse && (
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 animate-pulse">
              Atualizando...
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
