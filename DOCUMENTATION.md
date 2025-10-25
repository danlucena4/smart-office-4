# 📋 Documentação - Smart Office Dashboard

> Dashboard profissional de adoção de animais desenvolvido com Next.js 14, React 18, TypeScript e Tailwind CSS.

**Versão:** 1.2  
**Data:** 25/10/2025  
**Status:** Em produção 🚀

---

## 📌 Visão Geral

Sistema completo de dashboards para monitoramento de métricas de adoção de animais, com gráficos interativos em tempo real, tema dark/light e design totalmente responsivo.

---

## ✨ Features Principais

### 🎨 **Design & UX**
- ✅ Tema **Dark/Light** com persistência no localStorage
- ✅ **100% Responsivo** - otimizado para mobile, tablet e desktop
- ✅ Cor principal: **#a78bfa** (roxo)
- ✅ Interface limpa e moderna
- ✅ Animações suaves

### 📊 **Visualizações de Dados**
- ✅ Gráficos de linha com área preenchida
- ✅ Gráficos de barra coloridos
- ✅ Gráficos de pizza interativos
- ✅ **Gráficos em tempo real** com atualização automática
- ✅ Cards KPI com indicadores de tendência
- ✅ Tooltips profissionais com formatação brasileira
- ✅ **Exportação para Excel** - Botão individual em cada gráfico

### 🎯 **8 Dashboards Especializados**
1. **Visão Geral** - KPIs principais e evolução de visitantes
2. **Aquisição & Tráfego** - Origem de usuários e investimentos
3. **Adoções** - Métricas de adoções e reprovações
4. **Engajamento** - Usuários ativos e eventos-chave
5. **Onboarding** - NPS e funil de cadastro
6. **Operações** - Chamados de suporte
7. **Inventário** - Categorização e tempo de adoção
8. **IA (Relatórios)** - Chat com inteligência artificial

### 💎 **Profissionalismo**
- ✅ README.md completo com badges
- ✅ Meta tags para SEO e redes sociais
- ✅ Footer com copyright e branding
- ✅ Página 404 customizada
- ✅ Loading skeletons animados
- ✅ Estados vazios elegantes
- ✅ Documentação detalhada

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **Next.js** | 14.2.5 | Framework React |
| **React** | 18.3.1 | Biblioteca UI |
| **TypeScript** | 5.5.4 | Tipagem estática |
| **Tailwind CSS** | 3.4.10 | Estilização |
| **Recharts** | 2.12.7 | Gráficos |
| **Lucide React** | 0.460.0 | Ícones |
| **XLSX (SheetJS)** | Latest | Exportação Excel |

---

## 🚀 Como Rodar

### **Instalação**
```bash
# Clonar repositório
git clone [seu-repo]

# Instalar dependências
npm install
```

### **Desenvolvimento**
```bash
npm run dev
# Abrir http://localhost:3000
```

### **Build para Produção**
```bash
npm run build
npm start
```

---

## 📁 Estrutura do Projeto

```
smart-office-4/
├── app/
│   ├── (dashboard)/              # Páginas do dashboard
│   │   ├── page.tsx             # Visão Geral
│   │   ├── acquisition/         # Aquisição
│   │   ├── adoptions/           # Adoções
│   │   ├── engagement/          # Engajamento
│   │   ├── onboarding/          # Onboarding
│   │   ├── operations/          # Operações
│   │   ├── inventory/           # Inventário
│   │   ├── ai-reports/          # IA
│   │   └── layout.tsx           # Layout do dashboard
│   ├── api/                     # API Routes
│   ├── globals.css              # Estilos globais
│   ├── layout.tsx               # Layout raiz
│   ├── not-found.tsx            # Página 404
│   └── favicon.ico              # Ícone do site
├── components/
│   ├── ai/                      # Componentes de IA
│   ├── charts/                  # Gráficos
│   │   ├── AdvancedLineChart.tsx
│   │   ├── AdvancedBarChart.tsx
│   │   ├── AdvancedPieChart.tsx
│   │   ├── RealTimeChart.tsx
│   │   └── AdvancedKpiCard.tsx
│   ├── layout/                  # Layout
│   │   ├── Sidebar.tsx
│   │   ├── Topbar.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── Footer.tsx
│   └── ui/                      # Componentes UI
│       ├── Card.tsx
│       ├── Badge.tsx
│       ├── ChartSkeleton.tsx
│       ├── EmptyState.tsx
│       ├── ExportButton.tsx
│       ├── ExportChartButton.tsx
│       └── ExportKpisButton.tsx
├── data/                        # Dados mock
│   ├── advanced-overview.ts
│   ├── advanced-acquisition.ts
│   ├── advanced-adoptions.ts
│   └── advanced-engagement.ts
├── lib/                         # Utilitários
│   ├── colors.ts
│   ├── types.ts
│   └── export-excel.ts          # Funções de exportação
└── public/                      # Arquivos estáticos
```

---

## 🎨 Componentes Principais

### **1. AdvancedLineChart**
Gráfico de linha com área preenchida e gradientes.

**Props:**
- `data` - Array de dados
- `title` - Título do gráfico
- `color` - Cor principal
- `valueLabel` - Label do tooltip (ex: "Visitantes")
- `showTrend` - Mostrar indicador de tendência
- `height` - Altura do gráfico

### **2. AdvancedBarChart**
Gráfico de barras colorido com legendas.

**Props:**
- `data` - Array de dados
- `title` - Título
- `valueLabel` - Label do tooltip (ex: "Chamados")
- `height` - Altura

### **3. AdvancedPieChart**
Gráfico de pizza com labels responsivos.

**Props:**
- `data` - Array de dados
- `title` - Título
- `valueLabel` - Label do tooltip (ex: "Usuários")
- `showLegend` - Mostrar legenda

### **4. RealTimeChart**
Gráfico que simula dados em tempo real.

**Props:**
- `title` - Título
- `color` - Cor
- `valueLabel` - Label do tooltip
- `updateInterval` - Intervalo de atualização (ms)

### **5. AdvancedKpiCard**
Card de KPI com ícone e tendência.

**Props:**
- `kpi` - Objeto com label, valor, change, icon, etc.

### **6. ChartSkeleton**
Loading skeleton para gráficos.

**Props:**
- `height` - Altura do skeleton

### **7. EmptyState**
Estado vazio elegante.

**Props:**
- `title` - Título
- `message` - Mensagem
- `icon` - Tipo de ícone

### **8. ExportChartButton**
Botão de exportação para Excel em cada gráfico.

**Props:**
- `onExport` - Função de callback
- `tooltip` - Texto do tooltip
- `size` - Tamanho do botão ('sm' | 'md')

---

## 📥 Sistema de Exportação para Excel

### **Visão Geral**
Cada gráfico possui seu próprio botão de exportação no canto superior direito, permitindo que o usuário exporte os dados específicos daquele dashboard para Excel (.xlsx).

### **Características**
- ✅ **Botão individual** em cada gráfico
- ✅ **Exportação granular** - usuário escolhe o que exportar
- ✅ **Formato Excel nativo** (.xlsx)
- ✅ **Nome de arquivo inteligente** com data/hora
- ✅ **Sanitização automática** de caracteres especiais
- ✅ **Colunas calculadas** (percentuais, totais, médias)
- ✅ **Validação de dados** antes da exportação
- ✅ **Feedback visual** durante o processo

### **Gráficos com Exportação (17 no total)**

#### **Visão Geral (3)**
1. Evolução Mensal de Visitantes
2. Visualizações de Perfis por Minuto

#### **Aquisição & Tráfego (2)**
1. Origem dos Usuários
2. Investimento por Canal

#### **Engajamento (2)**
1. Usuários Ativos Mensais (MAU)
2. Eventos-Chave

#### **Adoções (2)**
1. Adoções por Semana
2. Motivos de Reprovação

#### **Inventário (2)**
1. Animais por Categoria
2. Tempo até Adoção

#### **Onboarding (1)**
1. Evolução do NPS

#### **Operações (3)**
1. Chamados por Tipo
2. Tempo de Resposta
3. Atividade em Tempo Real

### **Formato dos Arquivos Exportados**

**Nomenclatura:**
```
[nome-do-grafico]_YYYY-MM-DD_HH-MM-SS.xlsx
```

**Exemplo:**
```
origem-dos-usuarios_2025-10-25_14-30-15.xlsx
```

**Conteúdo:**
- Cada arquivo contém **1 aba** com os dados do gráfico
- Colunas formatadas em português
- Totais e percentuais calculados automaticamente
- Largura das colunas ajustada automaticamente

### **Dados Enriquecidos**

Além dos dados brutos, cada exportação inclui:

- **Gráficos de Pizza/Barra:**
  - Percentual do total
  - Linha de TOTAL
  
- **Gráficos de Linha:**
  - Metas (quando aplicável)
  - Diferenças calculadas
  - Atingimento percentual

- **Gráficos em Tempo Real:**
  - Status (Online/Offline)
  - Timestamp exato

### **Funções de Exportação**

**`lib/export-excel.ts`** contém:

```typescript
// Exportação genérica
exportToExcel(options: ExportOptions)

// Exportação de KPIs
exportKpisToExcel(kpis: KpiData[], fileName: string)

// Exportação de gráficos
exportChartToExcel(chartData: ChartData[], fileName: string, sheetName: string)

// Exportação de dashboard completo (múltiplas abas)
exportDashboardToExcel(sections: Section[], fileName: string)

// Geração de nome com data
getFileNameWithDate(baseName: string): string
```

### **Tratamento de Erros**

- ✅ Validação de dados antes da exportação
- ✅ Sanitização de nomes de arquivo e abas
- ✅ Mensagens de erro específicas
- ✅ Logs detalhados no console para debug
- ✅ Feedback visual para o usuário

---

## 🌈 Sistema de Cores

| Nome | Hex | Uso |
|------|-----|-----|
| Primária (Roxo) | `#a78bfa` | Cor principal |
| Secundária (Rosa) | `#f472b6` | Destaques |
| Verde | `#10b981` | Positivo |
| Laranja | `#fb923c` | Alertas |
| Azul | `#38bdf8` | Informações |

---

## 📱 Otimizações Mobile (Fase 6)

### **Ajustes de Padding**
- Container principal: `px-2` (8px) em mobile
- Cards de gráficos: `p-3` (12px) em mobile
- Desktop mantém `p-6` (24px)

### **Dimensões Responsivas**
- Altura dos gráficos: 250px → **280px** em mobile
- Raio dos gráficos de pizza: 60px → **80px** em mobile
- Margens internas otimizadas

### **Resultado**
- ✅ Gráficos ocupam **93%** da largura em mobile (vs 85% antes)
- ✅ Ganho de **~28px de largura**
- ✅ Melhor legibilidade e proporção

---

## 🎯 Tooltips Profissionais

Todos os gráficos têm tooltips com labels descritivos:

| Dashboard | Label |
|-----------|-------|
| Visão Geral | "Visitantes", "Visualizações" |
| Aquisição | "Usuários", "Investimento (R$)" |
| Adoções | "Adoções", "Casos" |
| Engajamento | "Usuários Ativos", "Eventos" |
| Onboarding | "Score NPS" |
| Operações | "Chamados", "Tempo (horas)" |
| Inventário | "Animais (%)", "Dias" |

---

## 🌓 Sistema de Tema Dark/Light

### **Como Funciona**
- Toggle no Topbar
- Persistência no `localStorage`
- Classes CSS adaptativas (`dark:`)
- Suporte completo em todos componentes

### **Classes Importantes**
```css
/* Light */
bg-white, text-neutral-900, border-neutral-200

/* Dark */
dark:bg-neutral-800, dark:text-neutral-100, dark:border-neutral-700
```

---

## 💡 Features Profissionais (Recentes)

### ✅ **README.md**
- Badges de tecnologias
- Documentação completa
- Instruções de instalação

### ✅ **Meta Tags (SEO)**
- OpenGraph para redes sociais
- Twitter Cards
- Keywords otimizadas

### ✅ **Footer**
- Copyright com ano e mês dinâmico
- Tech stack badges
- Informações de versão

### ✅ **Página 404**
- Design moderno
- Botões de navegação
- Links úteis

### ✅ **Loading States**
- Skeleton animado
- Efeito shimmer
- Suporte dark/light

### ✅ **Estados Vazios**
- Design elegante
- Ícones customizáveis
- Mensagens personalizáveis

---

## 📊 Dados Mock

Todos os dados são **simulados** mas seguem padrões realistas:
- Volume de visitantes: 1.000 - 3.000/mês
- Taxa de adoção: 60-80%
- NPS Score: 8.0 - 9.5
- Tempo de resposta: 1-4 horas

**Arquivos:**
- `data/advanced-overview.ts`
- `data/advanced-acquisition.ts`
- `data/advanced-adoptions.ts`
- `data/advanced-engagement.ts`

---

## 🔄 Histórico de Versões

### **Versão 1.2 (25/10/2025)** - Atual
- ✅ **Sistema de exportação para Excel** completo
- ✅ Botão individual em cada gráfico (17 botões)
- ✅ Biblioteca XLSX (SheetJS) integrada
- ✅ Sanitização automática de nomes e caracteres especiais
- ✅ Dados enriquecidos com totais, percentuais e médias
- ✅ Validação robusta e tratamento de erros
- ✅ Logs detalhados para debugging
- ✅ Nomenclatura inteligente com data/hora

### **Versão 1.1 (22/10/2025)**
- ✅ Otimizações mobile completas
- ✅ Tooltips profissionais
- ✅ Padding padronizado
- ✅ README.md profissional
- ✅ Meta tags SEO
- ✅ Footer com copyright
- ✅ Página 404 customizada
- ✅ Loading skeletons
- ✅ Estados vazios

### **Versão 1.0 (Anterior)**
- Gráficos com Recharts
- Tema dark/light
- 8 dashboards
- Layout responsivo
- Dados mock realistas

---

## 🎓 Para Apresentação

### **Destaques para Mostrar:**
1. **Exportação para Excel** - Clicar botão em qualquer gráfico 📊⬇️
2. **Tema Dark/Light** - Toggle suave
3. **Responsividade** - Testar em mobile
4. **Gráficos em Tempo Real** - Auto-atualização
5. **Tooltips** - Passar mouse nos gráficos
6. **Página 404** - Digite URL inválida
7. **Footer** - Role até o final
8. **Loading States** - Recarregar página

### **Pontos Técnicos:**
- Next.js 14 com App Router
- TypeScript para type safety
- Tailwind CSS para design system
- Recharts para visualizações
- 100% componentizado

---

## 🐛 Troubleshooting

### **Favicon não aparece:**
1. Limpar cache: `Ctrl + Shift + R`
2. Reiniciar servidor: `npm run dev`
3. Testar em aba anônima

### **Tema não muda:**
1. Verificar localStorage no DevTools
2. Limpar cache do navegador
3. Reiniciar servidor

### **Gráficos não carregam:**
1. Verificar console (F12)
2. Checar se dados existem
3. Verificar imports

### **Exportação para Excel falha:**
1. Abrir console do navegador (F12)
2. Verificar logs detalhados da exportação
3. Checar se há dados no gráfico
4. Aguardar alguns segundos para gráficos em tempo real
5. Verificar se biblioteca `xlsx` está instalada: `npm install xlsx`

---

## 📝 TODO Futuro (Opcional)

- [x] ✅ Exportação para Excel (Concluído v1.2)
- [ ] Exportação para PDF com gráficos
- [ ] Exportação de múltiplos dashboards de uma vez
- [ ] Agendamento de relatórios automáticos
- [ ] Backend real com API REST em Python
- [ ] Deploy na Vercel

---

## 👨‍💻 Desenvolvimento

### **Branches**
```bash
main - produção
develop - desenvolvimento


## 🙏 Créditos

- **Next.js** - Framework
- **Recharts** - Gráficos
- **Tailwind CSS** - Estilização
- **Lucide** - Ícones
- **SheetJS (XLSX)** - Exportação para Excel

---

## 📄 Licença

Este é um projeto acadêmico desenvolvido para fins educacionais.

---

**✨ Desenvolvido com ❤️ e ☕**
