# 📋 Documentação - Smart Office Dashboard

> Dashboard profissional de adoção de animais desenvolvido com Next.js 14, React 18, TypeScript e Tailwind CSS.

**Versão:** 1.1  
**Data:** 22/10/2025  
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
│       └── EmptyState.tsx
├── data/                        # Dados mock
│   ├── advanced-overview.ts
│   ├── advanced-acquisition.ts
│   ├── advanced-adoptions.ts
│   └── advanced-engagement.ts
├── lib/                         # Utilitários
│   ├── colors.ts
│   └── types.ts
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

### **Versão 1.1 (22/10/2025)** - Atual
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
1. **Tema Dark/Light** - Toggle suave
2. **Responsividade** - Testar em mobile
3. **Gráficos em Tempo Real** - Auto-atualização
4. **Tooltips** - Passar mouse nos gráficos
5. **Página 404** - Digite URL inválida
6. **Footer** - Role até o final
7. **Loading States** - Recarregar página

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

---

## 📝 TODO Futuro (Opcional)

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

---

## 📄 Licença

Este é um projeto acadêmico desenvolvido para fins educacionais.

---

**✨ Desenvolvido com ❤️ e ☕**
