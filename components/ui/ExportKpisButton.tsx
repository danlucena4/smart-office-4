"use client";
import { Download, FileSpreadsheet } from 'lucide-react';
import { useState } from 'react';
import { exportKpisToExcel, getFileNameWithDate } from '@/lib/export-excel';

interface KpiData {
  label: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease';
}

interface ExportKpisButtonProps {
  kpis: KpiData[];
  fileName?: string;
}

export default function ExportKpisButton({
  kpis,
  fileName = 'kpis',
}: ExportKpisButtonProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    try {
      const fileNameWithDate = getFileNameWithDate(fileName);
      await exportKpisToExcel(kpis, fileNameWithDate);
    } catch (error) {
      console.error('Erro ao exportar:', error);
    } finally {
      setTimeout(() => setIsExporting(false), 800);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={isExporting}
      title="Exportar KPIs para Excel"
      className={`
        inline-flex items-center justify-center
        gap-2
        px-3 py-2
        rounded-lg
        bg-white dark:bg-neutral-700
        border border-neutral-200 dark:border-neutral-600
        text-sm text-neutral-600 dark:text-neutral-300
        hover:bg-[#a78bfa] hover:text-white hover:border-[#a78bfa]
        dark:hover:bg-[#a78bfa] dark:hover:border-[#a78bfa]
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        shadow-sm hover:shadow-md
      `}
    >
      {isExporting ? (
        <>
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          <span className="hidden sm:inline">Exportando...</span>
        </>
      ) : (
        <>
          <FileSpreadsheet className="w-4 h-4" />
          <span className="hidden sm:inline">Exportar KPIs</span>
          <Download className="w-3 h-3" />
        </>
      )}
    </button>
  );
}

