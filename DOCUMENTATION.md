# 📋 Documentação do Projeto Smart Office Dashboard

## 📌 Visão Geral do Projeto

Dashboard de monitoramento de adoção de animais desenvolvido com **Next.js 14.2.5**, **React 18.3.1**, **TypeScript** e **Tailwind CSS**.

---

## 🎯 Objetivos Alcançados

### 1. Integração de Dashboards
- ✅ Substituídos gráficos fictícios por integração com **Looker Studio** (depois revertido)
- ✅ Criado sistema de gráficos profissionais com **Recharts**
- ✅ Implementado tema **dark/light** completo
- ✅ Dados fictícios realistas para demonstração

### 2. Design e UX
- ✅ Gráficos profissionais com gradientes e sombras
- ✅ Animações suaves e transições
- ✅ Cards KPI com métricas em tempo real
- ✅ Layout responsivo para mobile e desktop
- ✅ Cor principal do sistema: **#a78bfa** (roxo)

### 3. Funcionalidades em Tempo Real
- ✅ Gráficos que simulam dados em tempo real
- ✅ Indicadores de status online/offline
- ✅ Timestamps de atualização
- ✅ Pulsos e animações de atualização

---

## 🏗️ Estrutura do Projeto

```
smart-office-4/
├── app/
│   ├── (dashboard)/
│   │   ├── page.tsx                    # Visão Geral
│   │   ├── acquisition/page.tsx        # Aquisição & Tráfego
│   │   ├── adoptions/page.tsx          # Adoções
│   │   ├── engagement/page.tsx         # Engajamento
│   │   ├── onboarding/page.tsx         # Onboarding
│   │   ├── operations/page.tsx         # Operações
│   │   ├── inventory/page.tsx          # Inventário
│   │   ├── ai-reports/page.tsx         # IA (Chats)
│   │   └── layout.tsx                  # Layout do dashboard
│   ├── api/
│   │   └── ai-chat/                    # APIs de chat com IA
│   ├── globals.css                     # Estilos globais
│   └── layout.tsx                      # Layout raiz
├── components/
│   ├── ai/
│   │   └── ChatBox.tsx                 # Componente de chat
│   ├── charts/
│   │   ├── AdvancedKpiCard.tsx         # Cards de KPI
│   │   ├── AdvancedLineChart.tsx       # Gráficos de linha
│   │   ├── AdvancedBarChart.tsx        # Gráficos de barra
│   │   ├── AdvancedPieChart.tsx        # Gráficos de pizza
│   │   └── RealTimeChart.tsx           # Gráficos em tempo real
│   ├── layout/
│   │   ├── Sidebar.tsx                 # Menu lateral
│   │   ├── Topbar.tsx                  # Barra superior
│   │   └── ThemeToggle.tsx             # Botão de tema
│   ├── looker/
│   │   └── LookerStudioEmbed.tsx       # Componente para Looker (não usado)
│   ├── theme/
│   │   ├── ThemeToggle.tsx
│   │   └── useTheme.ts                 # Hook de tema
│   └── ui/
│       ├── Badge.tsx
│       └── Card.tsx
├── data/
│   ├── advanced-overview.ts            # Dados da visão geral
│   ├── advanced-acquisition.ts         # Dados de aquisição
│   ├── advanced-adoptions.ts           # Dados de adoções
│   └── advanced-engagement.ts          # Dados de engajamento
├── lib/
│   ├── colors.ts
│   └── types.ts
├── package.json
└── tailwind.config.ts
```

---

## 📊 Páginas Implementadas

### 1. **Visão Geral** (`/`)
- **4 KPI Cards:**
  - Animais Disponíveis (847) - Ícone: Users
  - Total de Adoções (2,431) - Ícone: CheckCircle
  - Taxa de Adoção (73.2%) - Ícone: PawPrint
  - Visitas ao App (45,231) - Ícone: Smartphone
- **Gráfico de Linha:** Evolução Mensal de Visitantes (12 meses)
- **Gráfico em Tempo Real:** Visualizações de Perfis por Minuto

### 2. **Aquisição & Tráfego** (`/acquisition`)
- **Gráfico de Pizza:** Origem dos usuários
- **Gráfico de Barras:** Investimento por canal (R$)

### 3. **Adoções** (`/adoptions`)
- **Gráfico de Linha:** Adoções por semana
- **Gráfico de Barras:** Motivos de reprovação

### 4. **Engajamento** (`/engagement`)
- **Gráfico de Linha:** Usuários Ativos Mensais (MAU)
- **Gráfico de Pizza:** Eventos-Chave do último mês

### 5. **Onboarding** (`/onboarding`)
- **2 KPI Cards:** NPS Score (9.4), Taxa de Conclusão (87%)
- **Gráfico de Linha:** Evolução do NPS
- **Funil Visual:** Etapas de onboarding

### 6. **Operações** (`/operations`)
- **Gráfico de Barras:** Chamados por tipo
- **Gráfico de Linha:** Tempo de resposta (horas)
- **Gráfico em Tempo Real:** Chamados por hora

### 7. **Inventário** (`/inventory`)
- **2 KPI Cards:** Tempo Médio de Espera (18 dias), Animais Adotados/mês (156)
- **Gráfico de Pizza:** Animais por categoria
- **Gráfico de Linha:** Tempo médio até adoção por porte

### 8. **IA (Relatórios)** (`/ai-reports`)
- **2 ChatBoxes:** Relatórios com IA mock

---

## 🎨 Sistema de Design

### Paleta de Cores Principal
```javascript
Primary: #a78bfa      // Roxo (cor principal do sistema)
Secondary: #f472b6    // Rosa
Tertiary: #10b981     // Verde
Quaternary: #fb923c   // Laranja
Quinary: #38bdf8      // Azul claro
```

### Gradientes KPI
```css
from-purple-400 to-purple-500   // Roxo
from-emerald-500 to-emerald-600 // Verde
from-pink-400 to-pink-500       // Rosa
from-blue-400 to-blue-500       // Azul
```

### Classes CSS Customizadas
```css
/* Tema Light/Dark */
.card - Background com suporte a tema
.dark body - Background escuro
.dark .card - Card no tema escuro

/* Looker Studio (não usado) */
.iframe-position-adjust
.dark-iframe-container
```

---

## 🔧 Tecnologias e Dependências

### Dependências Principais
```json
{
  "next": "14.2.5",
  "react": "18.3.1",
  "react-dom": "18.3.1",
  "recharts": "^2.12.7",
  "react-icons": "^5.3.0",
  "lucide-react": "^0.460.0",
  "tailwindcss": "^3.4.10"
}
```

### Dev Dependencies
```json
{
  "typescript": "^5.5.4",
  "@types/react": "^18.2.66",
  "@types/node": "^20.14.11",
  "eslint": "^8.57.0",
  "eslint-config-next": "14.2.5"
}
```

---

## 🎯 Componentes Principais

### 1. AdvancedKpiCard
**Localização:** `components/charts/AdvancedKpiCard.tsx`

**Funcionalidade:**
- Exibe KPIs com ícone, valor, mudança percentual
- Gradientes customizáveis
- Indicadores de tendência (↗️↘️)
- Suporte completo a tema dark/light

**Props:**
```typescript
interface KpiData {
  label: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: 'activity' | 'users' | 'check' | 'paw' | 'smartphone' | ...;
  color?: string;
}
```

### 2. AdvancedLineChart
**Localização:** `components/charts/AdvancedLineChart.tsx`

**Funcionalidade:**
- Gráfico de linha com área preenchida
- Gradientes dinâmicos
- Linha de meta opcional
- Indicador de tendência

**Props:**
```typescript
{
  data: DataPoint[];
  title: string;
  color?: string;
  showTrend?: boolean;
  showTarget?: boolean;
  height?: number;
}
```

### 3. RealTimeChart
**Localização:** `components/charts/RealTimeChart.tsx`

**Funcionalidade:**
- Simula dados em tempo real
- Atualização automática (configurável)
- Indicador online/offline
- Timestamp de última atualização
- Pulso visual em atualizações

**Props:**
```typescript
{
  title: string;
  color?: string;
  height?: number;
  updateInterval?: number;  // Em milissegundos
}
```

**Como Funciona:**
```javascript
// Gera dados a cada N milissegundos
useEffect(() => {
  const interval = setInterval(() => {
    setData(generateData());
    setLastUpdate(new Date());
    setPulse(true);
  }, updateInterval);
}, [updateInterval]);
```

---

## 🎨 Sistema de Tema Dark/Light

### Hook useTheme
**Localização:** `components/theme/useTheme.ts`

```typescript
export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>("light");
  
  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };
  
  return [theme, toggle];
}
```

### Classes Importantes
```css
/* Light Theme */
bg-white
text-neutral-900
border-neutral-200

/* Dark Theme */
dark:bg-neutral-800
dark:text-neutral-100
dark:border-neutral-700
```

---

## 📱 Otimizações Mobile (Fase 6)

### Sistema de Padding Responsivo

Todos os componentes de gráficos foram otimizados para melhor visualização em dispositivos móveis:

#### **Container Principal**
```typescript
// app/(dashboard)/layout.tsx
<div className="px-2 py-3 sm:p-4 md:p-6">
  {/* Mobile: 8px lateral, 12px vertical */}
  {/* Tablet: 16px todos os lados */}
  {/* Desktop: 24px todos os lados */}
</div>
```

#### **Cards de Gráficos**
```typescript
// Padrão em todos os componentes de gráficos
className="card rounded-xl p-3 sm:p-6 ..."
  {/* Mobile: 12px todos os lados */}
  {/* Desktop: 24px todos os lados */}
```

### Dimensões Responsivas

#### **Altura dos Gráficos**
```typescript
const responsiveHeight = isMobile ? Math.min(height, 280) : height;
  // Mobile: máximo 280px (antes era 250px)
  // Desktop: altura original (geralmente 300-400px)
```

#### **Raio dos Gráficos de Pizza**
```typescript
const outerRadius = isMobile ? 80 : 90;
  // Mobile: 80px (antes era 60px)
  // Desktop: 90px (antes era 80px)
```

### Margens Internas dos Gráficos
```typescript
// Otimizado para melhor uso do espaço
margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
  // Reduz margens laterais para maximizar área do gráfico
```

### Ganhos de Espaço em Mobile

| Otimização | Ganho |
|------------|-------|
| Padding do container (`px-3` → `px-2`) | 8px largura |
| Padding dos cards (`p-4` → `p-3`) | 8px largura |
| Margens internas otimizadas | 12px largura |
| **Total de largura extra** | **~28px** |
| Altura aumentada | **+30px** (250→280) |

### Resultado Visual
- ✅ Gráficos ocupam **93%** da largura da tela (vs ~85% antes)
- ✅ Melhor proporção altura/largura
- ✅ Textos e labels mais legíveis
- ✅ Menos espaço desperdiçado
- ✅ Visual menos "achatado"

---

## ⚠️ Problemas Conhecidos

### 1. **Ícones com Fundo Preto**
**Status:** ❌ NÃO RESOLVIDO

**Descrição:** 
- Ícones dos KPI Cards aparecem com fundo preto no tema light
- Tentativas feitas:
  1. Usar `text-white` no Tailwind
  2. Usar `style={{ color: '#ffffff' }}` inline
  3. Trocar Lucide React por React Icons

**Ícones Afetados:**
- Total de Adoções (CheckCircle)
- Visitas ao App (Smartphone)

**Última Tentativa:**
```typescript
// Tentou usar React Icons ao invés de Lucide
import { HiTrendingUp, HiTrendingDown } from 'react-icons/hi';
import { IoStatsChart, IoPeopleOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { BsPaw } from 'react-icons/bs';
```

**Problema:**
- `react-icons` está no `package.json` mas dá erro: "Module not found: Can't resolve 'react-icons/hi'"
- Instalação em diretório errado (global vs local)

### 2. **React Icons Não Funciona**
**Status:** ❌ NÃO RESOLVIDO

**Erro:**
```
Module not found: Can't resolve 'react-icons/hi'
```

**Tentativas:**
1. `npm install react-icons`
2. `npm uninstall react-icons && npm install react-icons --save`
3. Adicionar manualmente no `package.json`
4. Deletar `node_modules` e reinstalar tudo
5. Limpar cache do Next.js (`.next`)

**Status Atual:**
- `react-icons` aparece no `package.json`
- `node_modules` foi recriado
- Erro persiste

---

## ✅ Soluções que Funcionaram

### 1. **Tema Dark/Light**
- ✅ Sistema de tema totalmente funcional
- ✅ Persistência no localStorage
- ✅ Toggle suave entre temas
- ✅ Classes CSS adaptativas

### 2. **Gráficos com Recharts**
- ✅ Todos os gráficos funcionando perfeitamente
- ✅ Animações suaves
- ✅ Tooltips interativos
- ✅ Cores adaptativas ao tema

### 3. **Dados em Tempo Real**
- ✅ Simulação realista de dados
- ✅ Valores arredondados (inteiros)
- ✅ Variação natural com picos ocasionais
- ✅ Indicadores visuais de atualização

### 4. **Layout Responsivo**
- ✅ Grid adaptativo
- ✅ Mobile-first
- ✅ Sidebar colapsável
- ✅ Cards empilháveis

---

## 🔄 Histórico de Mudanças

### Fase 1: Integração Looker Studio
- Criado componente `LookerStudioEmbed.tsx`
- Integrados 12 dashboards do Looker Studio
- Suporte a tema dark via parâmetros de URL
- Ajustes de posicionamento com CSS

### Fase 2: Reversão para Gráficos Locais
- Removidos iframes do Looker Studio
- Criados componentes avançados com Recharts
- Implementados 4 tipos de gráficos
- Adicionadas animações com Framer Motion (depois removido)

### Fase 3: Otimização e Tema
- Removido Framer Motion (conflito com Next.js 14)
- Substituído por animações CSS nativas
- Ajustada paleta de cores para #a78bfa
- Temas adaptados para adoção de animais

### Fase 4: Correções de UX
- Trocados ícones problemáticos
- Alterado "Visitas ao Site" para "Visitas ao App"
- Removidos dados redundantes (Total de Animais)
- Adicionados KPIs únicos (Tempo Médio de Espera)

### Fase 5: Tentativa de Ícones React Icons
- ❌ Instalação do react-icons
- ❌ Substituição de todos os ícones Lucide
- ❌ Erro de módulo não encontrado

### Fase 6: Otimização Mobile (22/10/2025)
- ✅ **Redução de padding do container principal** (`px-3` → `px-2` em mobile)
- ✅ **Redução de padding dos cards de gráficos** (`p-4` → `p-3` em mobile)
- ✅ **Aumento da altura dos gráficos em mobile** (250px → 280px)
- ✅ **Aumento do raio dos gráficos de pizza** (60px → 80px em mobile, 80px → 90px em desktop)
- ✅ **Otimização de margens internas dos gráficos** para melhor uso do espaço
- ✅ **Padronização de paddings no desktop** (todos os cards agora usam `sm:p-6`)
- ✅ Gráficos ganham **~28px de largura extra** em mobile
- ✅ Melhor proporção e legibilidade em dispositivos móveis

#### Componentes Atualizados:
- `app/(dashboard)/layout.tsx` - Container principal
- `components/charts/AdvancedLineChart.tsx` - Padding e margens
- `components/charts/AdvancedBarChart.tsx` - Padding e margens
- `components/charts/AdvancedPieChart.tsx` - Padding, raio e altura
- `components/charts/RealTimeChart.tsx` - Padding e margens
- `components/charts/AdvancedKpiCard.tsx` - Padding padronizado
- `app/(dashboard)/onboarding/page.tsx` - Padding do Funil

---

## 🚀 Como Rodar o Projeto

### 1. Instalação
```bash
npm install
```

### 2. Desenvolvimento
```bash
npm run dev
```

### 3. Build
```bash
npm run build
npm start
```

### 4. Portas
- Desenvolvimento: `http://localhost:3000`

---

## 🎯 Próximos Passos Sugeridos

### Crítico
1. **Resolver problema dos ícones com fundo preto**
   - Opção A: Usar biblioteca diferente (Material UI Icons, FontAwesome)
   - Opção B: Criar ícones SVG customizados
   - Opção C: Usar imagens PNG com transparência

2. **Corrigir instalação do react-icons**
   - Investigar conflito de instalação
   - Verificar configuração do Next.js
   - Testar em ambiente limpo

### Melhorias
1. **Adicionar testes unitários**
2. **Implementar backend real**
3. **Conectar com banco de dados**
4. **Adicionar autenticação**
5. **Implementar filtros de data**
6. **Adicionar exportação de relatórios**

---

## 📝 Notas Importantes

### Estrutura de Dados
Todos os dados estão em arquivos `.ts` na pasta `data/`:
- `advanced-overview.ts` - KPIs e gráficos da visão geral
- `advanced-acquisition.ts` - Dados de aquisição
- `advanced-adoptions.ts` - Dados de adoções
- `advanced-engagement.ts` - Dados de engajamento

### Gráficos em Tempo Real
O componente `RealTimeChart` simula dados usando:
```javascript
const baseValue = 80 + Math.sin(time.getTime() / 100000) * 30;
const trend = Math.cos(time.getTime() / 200000) * 15;
const randomVariation = (Math.random() - 0.5) * 20;
const spike = Math.random() > 0.85 ? Math.random() * 40 : 0;
```

### CSS Customizado
O arquivo `globals.css` contém estilos personalizados:
- Classes `.card` para cards
- Classes `.dark` para tema escuro
- Ajustes específicos do Looker Studio (não usados)

---

## 🐛 Debugging

### Se os ícones aparecerem pretos:
1. Verificar se `style={{ color: '#ffffff' }}` está no componente
2. Inspecionar elemento no browser (DevTools)
3. Verificar se há CSS sobrescrevendo a cor
4. Tentar forçar `!important` no CSS

### Se react-icons não funcionar:
1. Deletar `node_modules` e `package-lock.json`
2. Rodar `npm install`
3. Verificar se está instalando na pasta correta do projeto
4. Verificar se o `package.json` tem a dependência listada

### Se o tema não mudar:
1. Verificar localStorage no browser
2. Limpar cache do browser
3. Verificar se `document.documentElement.classList` está sendo modificado
4. Reiniciar o servidor de desenvolvimento

---

## 📞 Informações de Contato para Próximo Chat

### Contexto Essencial:
- **Projeto:** Dashboard de adoção de animais
- **Framework:** Next.js 14.2.5
- **Cor Principal:** #a78bfa (roxo)
- **Última Atualização:** Otimização completa para mobile (22/10/2025)
- **Status:** Layout responsivo totalmente funcional

### Arquivos Críticos:
1. `components/charts/*` - Todos os componentes de gráficos
2. `app/(dashboard)/layout.tsx` - Layout principal com padding otimizado
3. `data/advanced-*.ts` - Dados dos gráficos
4. `package.json` - Dependências

### Últimas Ações (Fase 6):
1. ✅ Otimizado padding de todos os componentes para mobile
2. ✅ Aumentada altura dos gráficos em mobile (250px → 280px)
3. ✅ Padronizado padding desktop em todos os cards (`sm:p-6`)
4. ✅ Gráficos ganham 28px de largura extra em mobile
5. ✅ Melhorada legibilidade e proporção em dispositivos móveis

---

**Documentação criada em:** 22/10/2025  
**Última atualização:** 22/10/2025  
**Versão:** 1.1  
**Status do Projeto:** 98% completo (layout responsivo otimizado)

- O dev Dan esteve aqui e conferiu essa documentação toda.
Assinado : Danzin