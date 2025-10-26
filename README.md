# Company Management Frontend

Sistema de gerenciamento de empresas desenvolvido com Next.js 15, oferecendo uma interface moderna e responsiva para cadastro, listagem, edição e exclusão de empresas.

## Screenshots

<div style="overflow-x: auto;">
    <table style="width: 100%;">
        <tr>
            <td style="width: 50%;"><img src="./public/screenshots/home.png" alt="home do site" style="width: 100%; height: auto; object-fit: cover;" /></td>
            <td style="width: 50%;"><img src="./public/screenshots/sidebar.png" alt="sidebar menu" style="width: 100%; height: auto; object-fit: cover;" /></td>
        </tr>
        <tr>
            <td style="width: 50%;"><img src="./public/screenshots/register.png" alt="register form" style="width: 100%; height: auto; object-fit: cover;" /></td>
            <td style="width: 50%;"><img src="./public/screenshots/login.png" alt="login form" style="width: 100%; height: auto; object-fit: cover;" /></td>
        </tr>
    </table>
</div>

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **TanStack Query** - Gerenciamento de estado servidor
- **Better Auth** - Sistema de autenticação
- **Drizzle ORM** - ORM para PostgreSQL
- **Lucide React** - Ícones

## 📋 Pré-requisitos

- Node.js 18+
- npm, yarn, pnpm ou bun
- PostgreSQL (local ou remoto)
- Backend da aplicação rodando na porta 8080

## 🛠️ Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/ENDERSON-MARIN/COMPANY-MANAGEMENT-FRONTEND.git
cd company-management-front
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Database
DATABASE_URL="postgresql://usuario:senha@host:porta/database?sslmode=require"

# Google OAuth (opcional)
GOOGLE_CLIENT_ID="seu-google-client-id"
GOOGLE_CLIENT_SECRET="seu-google-client-secret"

# Better Auth
BETTER_AUTH_SECRET="sua-chave-secreta-aleatoria"
BETTER_AUTH_URL="http://localhost:3000"

# API Backend
NEXT_PUBLIC_API_URL="http://localhost:8080/api"
```

### 4. Configure o banco de dados (opcional - para autenticação local)

Se você quiser usar autenticação local, inicie o PostgreSQL com Docker:

```bash
docker-compose up -d
```

Execute as migrações do banco:

```bash
npx drizzle-kit push
```

### 5. Execute a aplicação

#### Desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

#### Produção

```bash
npm run build
npm start
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

## 📡 Endpoints da API

A aplicação consome os seguintes endpoints do backend:

### Empresas

- **GET** `/api/companies` - Lista todas as empresas
- **GET** `/api/companies/:id` - Busca empresa por ID
- **POST** `/api/companies` - Cria nova empresa
- **PUT** `/api/companies/:id` - Atualiza empresa existente
- **DELETE** `/api/companies/:id` - Remove empresa

### Autenticação (Better Auth)

- **POST** `/api/auth/sign-in` - Login com email/senha
- **POST** `/api/auth/sign-up` - Registro de usuário
- **GET** `/api/auth/session` - Verifica sessão atual
- **POST** `/api/auth/sign-out` - Logout
- **GET** `/api/auth/callback/google` - Callback OAuth Google

### Estrutura de Dados - Company

```typescript
interface Company {
  id: string;
  name: string; // Mínimo 3 caracteres
  cnpj: string; // Exatamente 14 dígitos
  email: string; // Formato de email válido
  phone?: string; // Opcional
  address?: string; // Opcional
  createdAt: string;
  updatedAt: string;
}
```

## 🏗️ Arquitetura e Decisões Técnicas

### Estrutura de Pastas

```
src/
├── _components/     # Componentes reutilizáveis
├── _db/            # Configuração do banco (Drizzle)
├── _errors/        # Classes de erro customizadas
├── _hooks/         # Hooks customizados
├── _lib/           # Utilitários e configurações
├── _providers/     # Providers React (Query, Theme, etc.)
├── _schemas/       # Schemas de validação (Zod)
├── _services/      # Camada de serviços/API
├── _types/         # Definições de tipos TypeScript
└── app/            # Rotas Next.js (App Router)
```

### Principais Decisões Técnicas

#### 1. **Next.js 15 com App Router**

- Escolhido pela performance superior e recursos modernos
- Server Components para melhor SEO e carregamento inicial
- Roteamento baseado em arquivos para organização clara

#### 2. **Better Auth para Autenticação**

- Solução moderna e flexível para autenticação
- Suporte nativo a OAuth (Google) e email/senha
- Integração direta com Drizzle ORM

#### 3. **TanStack Query para Estado do Servidor**

- Cache inteligente e sincronização automática
- Otimistic updates para melhor UX
- Gerenciamento de loading e error states

#### 4. **Drizzle ORM**

- Type-safe queries com excelente DX
- Migrações automáticas e schema evolution
- Performance superior comparado a ORMs tradicionais

#### 5. **Radix UI + Tailwind CSS**

- Componentes acessíveis por padrão (WCAG)
- Design system consistente e customizável
- Excelente performance e bundle size

#### 6. **Validação com Zod**

- Type-safe validation em runtime
- Integração perfeita com React Hook Form
- Mensagens de erro customizáveis

#### 7. **Arquitetura em Camadas**

- **Services**: Abstração da comunicação com API
- **Schemas**: Validação centralizada de dados
- **Types**: Tipagem consistente em toda aplicação
- **Components**: Reutilização e manutenibilidade

### Padrões de Código

#### Error Handling

```typescript
// Classe customizada para erros da API
export class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
  ) {
    super(message);
  }
}
```

#### API Client

```typescript
// Cliente HTTP centralizado com tratamento de erros
export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  // Implementação com tratamento de erros padronizado
}
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa linting do código
- `npm run prepare` - Configura Husky (Git hooks)

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório no Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Docker

```bash
# Build da imagem
docker build -t company-management-front .

# Executar container
docker run -p 3000:3000 company-management-front
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Convenções

- **Commits**: Seguimos [Conventional Commits](https://www.conventionalcommits.org/)
- **Code Style**: ESLint + Prettier configurados
- **Git Hooks**: Husky para validação pré-commit
- **Lint Staged**: Formatação automática de arquivos modificados

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
