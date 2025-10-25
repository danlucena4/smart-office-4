"use client";
import { Download } from 'lucide-react';
import { useState } from 'react';

interface ExportChartButtonProps {
  onExport: () => void;
  tooltip?: string;
  size?: 'sm' | 'md';
  className?: string;
}

export default function ExportChartButton({
  onExport,
  tooltip = 'Exportar para Excel',
  size = 'sm',
  className = '',
}: ExportChartButtonProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    try {
      await onExport();
    } catch (error) {
      console.error('Erro ao exportar:', error);
    } finally {
      setTimeout(() => setIsExporting(false), 800);
    }
  };

  const sizeStyles = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
  };

  return (
    <button
      onClick={handleExport}
      disabled={isExporting}
      title={tooltip}
      className={`
        inline-flex items-center justify-center
        rounded-lg
        bg-white dark:bg-neutral-700
        border border-neutral-200 dark:border-neutral-600
        text-neutral-600 dark:text-neutral-300
        hover:bg-[#a78bfa] hover:text-white hover:border-[#a78bfa]
        dark:hover:bg-[#a78bfa] dark:hover:border-[#a78bfa]
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        shadow-sm hover:shadow-md
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {isExporting ? (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <Download className="w-4 h-4" />
      )}
    </button>
  );
}

