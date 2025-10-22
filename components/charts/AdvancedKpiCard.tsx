"use client";
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Users, 
  Check, 
  Heart, 
  Eye, 
  Home, 
  MousePointer, 
  Monitor,
  DollarSign,
  Target,
  Star,
  ClipboardCheck
} from 'lucide-react';

interface KpiData {
  label: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: 'activity' | 'users' | 'dollar' | 'target' | 'heart' | 'paw' | 'eye' | 'home' | 'pointer' | 'check' | 'smartphone' | 'star' | 'clipboard';
  color?: string;
}

interface AdvancedKpiCardProps {
  kpi: KpiData;
  index?: number;
}

const iconMap = {
  activity: Activity,
  users: Users,
  dollar: DollarSign,
  target: Target,
  heart: Heart,
  paw: Heart, // Taxa de Adoção
  eye: Eye,
  home: Home,
  pointer: MousePointer,
  check: Check,
  smartphone: Monitor,
  star: Star, // NPS Score
  clipboard: ClipboardCheck // Taxa de Conclusão
};

const colorMap = {
  increase: 'text-emerald-600 dark:text-emerald-400',
  decrease: 'text-red-600 dark:text-red-400'
};

export default function AdvancedKpiCard({ kpi, index = 0 }: AdvancedKpiCardProps) {
  const IconComponent = iconMap[kpi.icon];
  
  return (
    <div
      className="card rounded-xl p-3 sm:p-2 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="p-2 sm:p-3 rounded-xl bg-[#a78bfa] shadow-lg flex items-center justify-center">
          <IconComponent 
            className="w-5 h-5 sm:w-6 sm:h-6 text-white" 
            strokeWidth={2.5}
            fill="none"
          />
        </div>
        <div className={`flex items-center gap-0.5 sm:gap-1 px-2 py-1 rounded-full text-[10px] sm:text-xs font-medium ${
          kpi.changeType === 'increase' 
            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' 
            : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
        }`}>
          {kpi.changeType === 'increase' ? <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : <TrendingDown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
          <span className="hidden xs:inline">{Math.abs(kpi.change)}%</span>
        </div>
      </div>
      
      <div className="space-y-1 sm:space-y-2">
        <h3 className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">{kpi.label}</h3>
        <p className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          {typeof kpi.value === 'number' ? kpi.value.toLocaleString() : kpi.value}
        </p>
      </div>
      
      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-neutral-200 dark:border-neutral-700">
        <div className="flex items-center justify-between text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400">
          <span className="hidden sm:inline">vs. período anterior</span>
          <span className="sm:hidden">vs. anterior</span>
          <span className={`font-medium ${colorMap[kpi.changeType]}`}>
            {kpi.changeType === 'increase' ? '+' : ''}{kpi.change}%
          </span>
        </div>
      </div>
    </div>
  );
}
