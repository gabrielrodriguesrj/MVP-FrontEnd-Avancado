# Catálogo de Serviços MVP

Um aplicativo web moderno desenvolvido com **React 19**, **Vite** e **TypeScript** que demonstra os princípios de componentização, roteamento e usabilidade em uma aplicação front-end.

## 📋 Descrição do Projeto

Este MVP apresenta um catálogo de serviços profissionais com as seguintes funcionalidades:

- **Página Inicial**: Apresentação da aplicação com call-to-action
- **Listagem de Serviços**: Visualização de todos os serviços disponíveis com busca e filtros
- **Detalhes do Serviço**: Página dinâmica com informações completas de cada serviço
- **Página 404**: Tratamento elegante de rotas inválidas
- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e celular

## 🎯 Requisitos Atendidos

### Componentização
- ✅ Divisão da aplicação em 3 páginas com componentes reutilizáveis
- ✅ 4+ componentes reutilizáveis:
  - `Header` - Navegação principal com menu responsivo
  - `ServiceCard` - Card de serviço com imagem, preço e avaliação
  - `LoadingSpinner` - Indicador de carregamento
  - `AlertMessage` - Mensagens de feedback (sucesso, erro, aviso, info)
- ✅ Dados simulados com JSON (sem requisições reais)

### React e Roteamento
- ✅ Uso correto de `useState`, `useEffect` e hooks customizados
- ✅ Roteamento com **Wouter** (alternativa ao React Router)
- ✅ 3+ hooks de navegação:
  - `useParams` - Captura de parâmetros da URL (`:id`)
  - `useLocation` - Leitura da URL atual
  - `useRouter` - Navegação programática
- ✅ Página 404 para URLs inválidas

### Usabilidade 
- ✅ Feedback visual:
  - Loaders durante carregamento
  - Mensagens de sucesso/erro
  - Estados vazios com mensagens contextuais
- ✅ Tooltips explicativos em elementos interativos
- ✅ Layout responsivo (mobile-first, tablet e desktop)

### Organização e Documentação 
- ✅ Projeto hospedado no GitHub (público)
- ✅ README.md com instruções claras
- ✅ Estrutura de pastas bem organizada
- ✅ Convenções de nomenclatura e boas práticas

## 📁 Estrutura do Projeto

```
mvp-catalogo-servicos/
├── client/
│   ├── public/
│   │   ├── data/
│   │   │   └── services.json          # Dados simulados dos serviços
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx             # Navegação principal
│   │   │   ├── ServiceCard.tsx        # Card reutilizável
│   │   │   ├── LoadingSpinner.tsx     # Indicador de carregamento
│   │   │   ├── AlertMessage.tsx       # Mensagens de feedback
│   │   │   └── ErrorBoundary.tsx      # Tratamento de erros
│   │   ├── pages/
│   │   │   ├── Home.tsx               # Página inicial
│   │   │   ├── Services.tsx           # Listagem de serviços
│   │   │   ├── ServiceDetail.tsx      # Detalhes do serviço
│   │   │   └── NotFound.tsx           # Página 404
│   │   ├── hooks/
│   │   │   └── useServices.ts         # Hook customizado
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx       # Contexto de tema
│   │   ├── lib/
│   │   │   └── utils.ts               # Utilitários
│   │   ├── App.tsx                    # Componente raiz com rotas
│   │   ├── main.tsx                   # Entry point
│   │   └── index.css                  # Estilos globais
│   └── package.json
├── server/
│   └── index.ts                       # Servidor Express (compatibilidade)
├── .gitignore
├── .eslintrc.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Como Instalar e Executar

### Pré-requisitos

Antes de começar, certifique-se de ter instalado em seu computador:

1. **Node.js** (versão 18 ou superior)
   - Download: https://nodejs.org/
   - Verifique a instalação: `node --version` e `npm --version`

2. **Git** (para clonar o repositório)
   - Download: https://git-scm.com/
   - Verifique a instalação: `git --version`

3. **Editor de Código** (recomendado: Visual Studio Code)
   - Download: https://code.visualstudio.com/

### Passo a Passo de Instalação

#### 1. Clonar o Repositório

```bash
# Abra o terminal/prompt de comando e execute:
git clone https://github.com/seu-usuario/mvp-catalogo-servicos.git
cd mvp-catalogo-servicos
```

#### 2. Instalar Dependências

```bash
# Com npm
npm install

# Ou com pnpm (mais rápido)
pnpm install

# Ou com yarn
yarn install
```

#### 3. Iniciar o Servidor de Desenvolvimento

```bash
# Com npm
npm run dev

# Com pnpm
pnpm dev

# Com yarn
yarn dev
```

#### 4. Acessar a Aplicação

Após executar o comando acima, você verá uma mensagem como:

```
➜  Local:   http://localhost:3000/
```

Abra seu navegador e acesse: **http://localhost:3000/**

### Comandos Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Compilar para produção
npm run build

# Visualizar build de produção localmente
npm run preview

# Verificar erros de TypeScript
npm run check

# Formatar código
npm run format
```

## 🎨 Funcionalidades Principais

### 1. Página Inicial (Home)
- Apresentação do catálogo
- Call-to-action para explorar serviços
- Seção de benefícios com 3 cards informativos
- CTA secundária para conversão

### 2. Listagem de Serviços
- **Busca**: Procure serviços por nome ou descrição
- **Filtros**: Filtre por categoria de serviço
- **Cards Responsivos**: Exibição em grid adaptável
- **Feedback Visual**: Mensagens quando nenhum resultado é encontrado
- **Loading State**: Indicador de carregamento durante busca

### 3. Detalhes do Serviço
- Informações completas do serviço
- Imagem em alta resolução
- Preço, duração e avaliação
- Lista de funcionalidades incluídas
- Botão para contratar serviço
- Navegação de volta com histórico

### 4. Navegação
- Header sticky com logo e menu
- Menu responsivo para mobile
- Indicador de página ativa
- Links de navegação em todas as páginas

## 🔧 Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| React | 19.0.0 | Framework UI |
| TypeScript | 5.6.3 | Type safety |
| Vite | 7.1.7 | Build tool |
| Wouter | 3.3.5 | Roteamento |
| Tailwind CSS | 4.1.14 | Estilização |
| shadcn/ui | Latest | Componentes UI |
| Lucide React | 0.453.0 | Ícones |
| Framer Motion | 12.23.22 | Animações |

## 📱 Responsividade

A aplicação foi desenvolvida com **mobile-first approach** e é totalmente responsiva:

- **Mobile**: Até 640px (menu hamburger, layout empilhado)
- **Tablet**: 641px a 1024px (layout intermediário)
- **Desktop**: Acima de 1024px (layout completo)

## 🎯 Hooks Utilizados

### React Hooks
- `useState` - Gerenciamento de estado local
- `useEffect` - Efeitos colaterais e ciclo de vida
- `useMemo` - Otimização de cálculos

### Wouter Hooks
- `useParams` - Captura parâmetros da URL (ex: `/servico/:id`)
- `useLocation` - Obtém informação da rota atual
- `useRouter` - Navegação programática

### Hooks Customizados
- `useServices` - Carrega e gerencia dados de serviços

## 📊 Dados de Exemplo

O arquivo `client/public/data/services.json` contém 6 serviços de exemplo:

1. **Consultoria Estratégica** - R$ 250.00
2. **Desenvolvimento Web** - R$ 150.00
3. **Design Gráfico** - R$ 100.00
4. **Marketing Digital** - R$ 200.00
5. **Suporte Técnico 24/7** - R$ 50.00
6. **Treinamento e Capacitação** - R$ 120.00

Cada serviço contém: nome, categoria, preço, duração, descrição, imagem, funcionalidades, avaliação e número de reviews.

## 🎨 Design e Estilo

- **Tema**: Light mode (personalizável para dark mode)
- **Paleta de Cores**: Azul primário com tons neutros
- **Tipografia**: Fonte sans-serif padrão com hierarquia clara
- **Componentes**: Baseados em shadcn/ui com customizações Tailwind
- **Animações**: Transições suaves com Framer Motion

## 🔍 Boas Práticas Implementadas

✅ **Componentização**: Componentes pequenos e reutilizáveis
✅ **Type Safety**: TypeScript em todo o código
✅ **Performance**: Memoização e lazy loading onde apropriado
✅ **Acessibilidade**: ARIA labels, keyboard navigation
✅ **Responsividade**: Mobile-first design
✅ **Organização**: Estrutura clara de pastas
✅ **Documentação**: Comentários em componentes importantes
✅ **Error Handling**: Tratamento de erros com ErrorBoundary
✅ **Loading States**: Feedback visual durante operações assíncronas

## 🐛 Solução de Problemas

### Porta 3000 já está em uso
```bash
# Encontre o processo usando a porta
lsof -i :3000

# Ou use uma porta diferente
npm run dev -- --port 3001
```

### Erro ao instalar dependências
```bash
# Limpe o cache e tente novamente
npm cache clean --force
npm install
```

### Erro de TypeScript
```bash
# Verifique erros de tipo
npm run check

# Limpe cache do TypeScript
rm -rf node_modules/.vite
npm install
```
