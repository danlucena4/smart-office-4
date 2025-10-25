"use client";
import { Download, FileSpreadsheet } from 'lucide-react';
import { useState } from 'react';

interface ExportButtonProps {
  onExport: () => void;
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export default function ExportButton({
  onExport,
  label = 'Exportar Excel',
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
}: ExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    try {
      await onExport();
    } catch (error) {
      console.error('Erro ao exportar:', error);
    } finally {
      setTimeout(() => setIsExporting(false), 1000);
    }
  };

  const variantStyles = {
    primary: 'bg-[#a78bfa] hover:bg-[#9370db] text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl',
    outline: 'bg-white dark:bg-neutral-800 border-2 border-[#a78bfa] text-[#a78bfa] hover:bg-[#a78bfa] hover:text-white dark:border-[#a78bfa] dark:text-[#a78bfa]',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2',
  };

  return (
    <button
      onClick={handleExport}
      disabled={disabled || isExporting}
      className={`
        inline-flex items-center justify-center
        font-medium rounded-lg
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {isExporting ? (
        <>
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          <span>Exportando...</span>
        </>
      ) : (
        <>
          <FileSpreadsheet className="w-4 h-4" />
          <span className="hidden sm:inline">{label}</span>
          <Download className="w-3 h-3 sm:w-4 sm:h-4" />
        </>
      )}
    </button>
  );
}

