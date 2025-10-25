import * as XLSX from 'xlsx';

interface KpiData {
  label: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease';
}

interface ChartData {
  name: string;
  value: number;
  target?: number;
  previousValue?: number;
  [key: string]: any;
}

interface ExportOptions {
  fileName: string;
  sheetName: string;
  data: any[];
  headers?: string[];
}

/**
 * Exporta dados para Excel (.xlsx)
 */
export const exportToExcel = (options: ExportOptions) => {
  const { fileName, sheetName, data, headers } = options;

  try {
    // Validar dados
    if (!data || data.length === 0) {
      throw new Error('Nenhum dado para exportar');
    }

    // Sanitizar nome da aba (máximo 31 caracteres, sem caracteres especiais)
    const cleanSheetName = sheetName
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[:\\/\?\*\[\]]/g, '') // Remove caracteres inválidos para Excel
      .substring(0, 31); // Limite do Excel

    // Criar workbook
    const wb = XLSX.utils.book_new();

    // Converter dados para worksheet
    const ws = headers
      ? XLSX.utils.json_to_sheet(data, { header: headers })
      : XLSX.utils.json_to_sheet(data);

    // Ajustar largura das colunas automaticamente
    const maxWidth = 30;
    const colWidths = Object.keys(data[0] || {}).map((key) => ({
      wch: Math.min(
        Math.max(
          key.length,
          ...data.map((row) =>
            String(row[key] || '').length
          )
        ),
        maxWidth
      ),
    }));
    ws['!cols'] = colWidths;

    // Adicionar worksheet ao workbook
    XLSX.utils.book_append_sheet(wb, ws, cleanSheetName);

    // Gerar arquivo e fazer download
    XLSX.writeFile(wb, `${fileName}.xlsx`);
    
    console.log('✅ Arquivo Excel gerado com sucesso:', `${fileName}.xlsx`);
  } catch (error) {
    console.error('❌ Erro em exportToExcel:', error);
    throw error; // Re-throw para ser capturado no componente
  }
};

/**
 * Exporta KPIs para Excel
 */
export const exportKpisToExcel = (kpis: KpiData[], fileName: string = 'kpis') => {
  const data = kpis.map((kpi) => ({
    'Indicador': kpi.label,
    'Valor': kpi.value,
    'Variação (%)': `${kpi.changeType === 'increase' ? '+' : ''}${kpi.change}%`,
    'Tendência': kpi.changeType === 'increase' ? 'Crescimento' : 'Queda',
  }));

  exportToExcel({
    fileName,
    sheetName: 'KPIs',
    data,
  });
};

/**
 * Exporta dados de gráfico para Excel
 */
export const exportChartToExcel = (
  chartData: ChartData[],
  fileName: string = 'grafico',
  sheetName: string = 'Dados'
) => {
  exportToExcel({
    fileName,
    sheetName,
    data: chartData,
  });
};

/**
 * Exporta dashboard completo (múltiplas abas)
 */
export const exportDashboardToExcel = (
  sections: { name: string; data: any[] }[],
  fileName: string = 'dashboard'
) => {
  // Criar workbook
  const wb = XLSX.utils.book_new();

  sections.forEach((section) => {
    // Converter dados para worksheet
    const ws = XLSX.utils.json_to_sheet(section.data);

    // Ajustar largura das colunas
    const maxWidth = 30;
    const colWidths = Object.keys(section.data[0] || {}).map((key) => ({
      wch: Math.min(
        Math.max(
          key.length,
          ...section.data.map((row) =>
            String(row[key] || '').length
          )
        ),
        maxWidth
      ),
    }));
    ws['!cols'] = colWidths;

    // Adicionar worksheet ao workbook
    XLSX.utils.book_append_sheet(wb, ws, section.name);
  });

  // Gerar arquivo e fazer download
  XLSX.writeFile(wb, `${fileName}.xlsx`);
};

/**
 * Formata data para nome de arquivo
 */
export const getFileNameWithDate = (baseName: string): string => {
  const now = new Date();
  const date = now.toISOString().split('T')[0]; // YYYY-MM-DD
  const time = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
  return `${baseName}_${date}_${time}`;
};

