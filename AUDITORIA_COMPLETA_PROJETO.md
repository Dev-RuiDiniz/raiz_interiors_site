# Auditoria Completa do Projeto - RAIZ Interiors

Data da auditoria: 2026-02-26
Repositório: `raiz-interiors`

## 1. Resumo Executivo

Este repositório é um site institucional/portfólio para o estúdio **RAIZ Interiors**, construído com **Next.js (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, com base preparada para **Prisma + PostgreSQL** e **NextAuth**.

O projeto está dividido em:

- Site público (`/(site)`): páginas de portfólio, serviços, sobre e contato.
- Área de autenticação (`/(auth)`): login admin.
- Área administrativa (`/admin`): dashboard e telas de gestão (majoritariamente mockadas, sem persistência real).
- APIs (`/api`): autenticação NextAuth e integração Instagram (Apify + banco).
- Assets visuais pesados em `public/2026` com fotos reais de projetos.

## 2. Stack e Dependências

### Stack principal

- `next@16.0.7` (App Router)
- `react@19.2.0` / `react-dom@19.2.0`
- `typescript@^5`
- `tailwindcss@^4` + `@tailwindcss/postcss`
- `framer-motion`
- `next-auth` (credenciais)
- `prisma` + `@prisma/client`
- `zod`, `react-hook-form`, `@hookform/resolvers`
- `next-themes`
- `lucide-react`, `react-icons`
- Componentes estilo shadcn/Radix (`@radix-ui/*`, `class-variance-authority`, `clsx`, `tailwind-merge`)

### Scripts (`package.json`)

- `pnpm dev` -> desenvolvimento
- `pnpm build` -> `prisma generate && next build`
- `pnpm start` -> produção
- `pnpm lint` -> ESLint
- `postinstall` -> `prisma generate`

Observação: no ambiente desta auditoria o comando `pnpm` não está disponível, então não foi possível executar lint/build.

## 3. Estrutura Geral do Repositório

### Raiz

- `.env` (arquivo local presente; ignorado por `.gitignore`)
- `.gitignore`
- `README.md`
- `package.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `next.config.ts`
- `prisma.config.ts`
- `tsconfig.json`
- `eslint.config.mjs`
- `postcss.config.mjs`
- `components.json`
- `prisma/`
- `public/`
- `src/`
- `.next/` (build local, gerado)

### `src/` (inventário resumido)

- `src/app/` -> rotas/páginas/layouts/APIs (27 arquivos)
- `src/components/` -> componentes reutilizáveis (28 arquivos)
- `src/lib/` -> utilitários, auth, prisma, integração Apify (6 arquivos)
- `src/types/` -> tipos TypeScript centrais (1 arquivo)

Contagem por extensão em `src/`:

- `.tsx`: 49
- `.ts`: 9
- `.css`: 1
- `.ico`: 1

## 4. Estrutura de Pastas e Arquivos (Mapa Funcional)

### `src/app` (rotas App Router)

- `src/app/layout.tsx` -> layout raiz + metadata global + providers (`SessionProvider`, `ThemeProvider`)
- `src/app/globals.css` -> Tailwind v4 + tokens de tema + classes de fontes
- `src/app/(site)/layout.tsx` -> `Header`, `Footer`, `GDPRBanner`
- `src/app/(site)/page.tsx` -> Home
- `src/app/(site)/about/page.tsx` -> About
- `src/app/(site)/contact/page.tsx` -> Contact
- `src/app/(site)/projects/page.tsx` -> lista de projetos
- `src/app/(site)/projects/[slug]/page.tsx` -> detalhe de projeto (dados hardcoded)
- `src/app/(site)/services/page.tsx` -> lista de serviços
- `src/app/(site)/services/[slug]/page.tsx` -> detalhe de serviço (dados hardcoded)
- `src/app/(auth)/layout.tsx` -> layout auth simples
- `src/app/(auth)/login/page.tsx` -> login admin
- `src/app/admin/layout.tsx` -> layout protegido por sessão (`useSession`) + sidebar/topbar
- `src/app/admin/page.tsx` -> dashboard admin (mock)
- `src/app/admin/contacts/page.tsx` -> gestão de contatos (mock)
- `src/app/admin/media/page.tsx` -> biblioteca de mídia (mock)
- `src/app/admin/newsletter/page.tsx` -> newsletter (mock)
- `src/app/admin/notifications/page.tsx` -> notificações (mock)
- `src/app/admin/pages/page.tsx` -> páginas do site (mock)
- `src/app/admin/projects/page.tsx` -> projetos no admin (mock)
- `src/app/admin/services/page.tsx` -> serviços no admin (mock)
- `src/app/admin/settings/page.tsx` -> configurações (mock/parcial)
- `src/app/api/auth/[...nextauth]/route.ts` -> endpoint NextAuth
- `src/app/api/instagram/posts/route.ts` -> busca posts do Instagram no DB
- `src/app/api/instagram/sync/route.ts` -> sincroniza posts via Apify para DB

### `src/components` (por domínio)

#### `src/components/layout`

- `header.tsx` -> header com menu desktop/mobile, troca de logo conforme scroll/hero
- `footer.tsx` -> rodapé com links, contato e redes sociais

#### `src/components/sections` (home/about etc.)

- `hero.tsx` -> hero com slideshow de 6 slides + overlay + CTA por slide
- `intro.tsx` -> texto institucional da home
- `featured-projects.tsx` -> grade de projetos em destaque
- `services-preview.tsx` -> teaser de serviços (lista textual)
- `about-preview.tsx` -> teaser da página About
- `instagram-feed.tsx` -> carrossel auto-scroll, usa `/api/instagram/posts` com fallback
- `home-gallery.tsx` -> galeria local (aparenta não estar usada na Home atual)

#### `src/components/admin`

- `sidebar.tsx` -> menu lateral admin com colapso e logout
- `topbar.tsx` -> topo admin com busca mock, idioma, tema, notificações mock, perfil

#### `src/components/providers`

- `session-provider.tsx` -> wrapper do `next-auth/react`
- `theme-provider.tsx` -> wrapper do `next-themes`

#### `src/components/ui`

- Base UI (shadcn/radix): `button`, `input`, `textarea`, `card`, `dialog`, `sheet`, `form`, `label`, `badge`, `separator`, `scroll-area`, `aspect-ratio`
- Customizados do projeto:
  - `artistic-text.tsx` (highlight/reveal/split text)
  - `gdpr-banner.tsx` (consentimento cookies via `localStorage`)
  - `floating-chat.tsx` (widget WhatsApp; componente existe, mas não está montado no layout)

### `src/lib`

- `auth.ts` -> configuração `next-auth` com `CredentialsProvider` (admin temporário hardcoded)
- `prisma.ts` -> inicialização do Prisma condicionada a `DATABASE_URL`
- `apify.ts` -> integração com Apify Instagram Scraper
- `fonts.ts` -> fontes Google (`Cormorant`, `Inter`, `Playfair`)
- `utils.ts` -> `cn()` (clsx + tailwind-merge)

### `src/types`

- `src/types/index.ts` -> tipos de `Project`, `Service`, `Contact`, `SiteSettings`, enums e `ApiResponse`

### `prisma`

- `prisma/schema.prisma` -> schema completo (auth, projetos, serviços, contatos, newsletter, Instagram, settings)

## 5. Banco de Dados (Prisma) - O que está modelado

O schema está bem estruturado e pronto para evolução, com modelos para:

- **Autenticação**: `User`, `Account`, `Session`, `VerificationToken`, enum `Role`
- **Portfólio**: `Project`, `ProjectImage`, enums `ProjectCategory`, `ProjectStatus`
- **Serviços**: `Service`
- **Leads**: `Contact` + enum `ContactStatus`
- **Newsletter**: `Newsletter`
- **Instagram**: `InstagramPost`
- **Configurações do site**: `SiteSettings`

Importante: embora o schema exista, boa parte do front público/admin ainda usa **dados hardcoded** em arrays locais e não consulta Prisma.

## 6. Mapa Completo de Páginas e Rotas

### Site público

#### `/` (Home)
Composição:

- Hero com slideshow (6 imagens)
- Intro institucional
- Selected Projects (4 cards)
- Services Preview
- About Preview

Dados de projetos em destaque são hardcoded em `src/app/(site)/page.tsx`.

#### `/projects`

- Grid de 10 projetos (hardcoded)
- Estados de status: `PUBLISHED`, `WORK_IN_PROGRESS`, `COMING_SOON`
- Projetos `COMING_SOON` apontam para `#` (não navegam)

Projetos listados:

1. Summer House in Comporta
2. Contemporary City House
3. Elegant & Timeless Duplex
4. Beach House in Troia
5. Pombaline Restoration in Príncipe Real
6. Rural Retreat
7. Curated Objects & Restauration Atelier
8. Beach House in Troia II (coming soon)
9. Weekend Family House (coming soon)
10. Young Soul City Apartment (coming soon)

#### `/projects/[slug]`

Página de detalhe com grande volume de conteúdo hardcoded (`projectsData` em arquivo único), incluindo:

- metadados do projeto
- descrição longa
- galeria de imagens por projeto
- navegação prev/next
- detalhes finais (location/year/category/type/credits/photography)

Slugs suportados (10):

- `summer-house-comporta`
- `contemporary-city-house`
- `elegant-timeless-duplex`
- `beach-house-troia`
- `pombaline-restoration-principe-real`
- `rural-retreat`
- `store-restauration-atelier`
- `beach-house-troia-ii`
- `weekend-family-house`
- `young-soul-city-apartment`

Observação: vários projetos estão como “coming soon” e têm `images: []`.

#### `/services`

- Grid de 6 serviços (hardcoded)
- Seção de processo com 5 etapas
- CTA para contato

Serviços listados:

- Architecture
- Interior Design
- Decoration
- Bespoke Furniture
- Consultancy
- Styling & Staging

#### `/services/[slug]`

Detalhe de serviço (hardcoded `servicesData`) com:

- subtítulo
- descrição longa
- lista de features
- 2 imagens
- CTA para contato

Slugs suportados:

- `architecture`
- `interior-design`
- `decoration`
- `bespoke-furniture`
- `consultancy`
- `styling-staging`
- `staging` (alias duplicado para Styling & Staging)

#### `/about`

- Hero + texto institucional
- Values (4 valores)
- Founder section
- `InstagramFeed` (API + fallback)
- CTA final

#### `/contact`

- Informações de contato + links sociais
- Form com `react-hook-form` + `zod`
- Estado de envio/sucesso visual

Importante: **não envia para backend**. O submit apenas simula delay (`setTimeout`) e faz `console.log`.

### Autenticação

#### `/login`

- Login visual completo para admin
- Usa `signIn('credentials')` do NextAuth
- Redireciona para `/admin` ao sucesso
- Mostra credenciais demo na UI (`admin@raiz-interiors.com / admin123`)

### Área admin (`/admin`)

Layout protegido por sessão client-side com `useSession`; se não autenticado, redireciona para `/login`.

#### Páginas existentes

- `/admin` -> Dashboard (cards, tabelas, atividade; mock)
- `/admin/projects` -> CRUD visual de projetos (mock, sem persistência)
- `/admin/services` -> CRUD visual de serviços (mock, sem persistência)
- `/admin/media` -> biblioteca de mídia (mock, sem upload real)
- `/admin/contacts` -> lista e leitura de mensagens (mock)
- `/admin/newsletter` -> assinantes/estatísticas (mock)
- `/admin/pages` -> catálogo de páginas e seções (mock)
- `/admin/notifications` -> notificações com marcar como lida (estado local)
- `/admin/settings` -> abas de settings/tema/perfil (mock/parcial)

#### Rotas admin mencionadas na UI, mas não implementadas

A interface aponta para páginas que **não existem** no `src/app` atual:

- `/admin/projects/new`
- `/admin/projects/[id]` (ex.: links de editar)
- `/admin/services/new`
- `/admin/services/[id]`
- `/admin/pages/[id]`

## 7. APIs Existentes

### `GET/POST /api/auth/[...nextauth]`

- Handler NextAuth padrão com `authOptions` de `src/lib/auth.ts`.

### `GET /api/instagram/posts`

- Lê posts de `instagramPost` via Prisma
- Aceita `?limit=` (default 12)
- Em caso de erro/tabela ausente/DB indisponível, retorna `[]`

### `POST /api/instagram/sync`

- Busca posts via Apify (`src/lib/apify.ts`)
- Cria/atualiza `InstagramPost` no banco
- Retorna estatísticas (`created`, `updated`, `skipped`)

## 8. Integrações e Configurações

### NextAuth (`src/lib/auth.ts`)

Situação atual:

- `CredentialsProvider` com admin hardcoded
- Login aceita explicitamente a senha literal `admin123`
- Prisma Adapter **não está sendo usado**, apesar da dependência existir
- `bcryptjs` está importado mas não é utilizado na validação atual

Impacto: bom para protótipo/demonstração, inadequado para produção sem migração para usuários no banco.

### Prisma (`src/lib/prisma.ts` e `prisma.config.ts`)

- `prisma.ts` evita inicializar cliente se `DATABASE_URL` não estiver definida (bom para builds locais sem DB)
- `prisma.config.ts` define URL placeholder para permitir build/migrations config sem env real

### Apify (`src/lib/apify.ts`)

- Integração implementada para:
  - buscar último run
  - ler dataset
  - iniciar scrape
  - consultar status
- Variável necessária: `APIFY_API_TOKEN`

### Next.js config (`next.config.ts`)

- `reactCompiler: true`
- `images.remotePatterns` libera:
  - `images.unsplash.com`
  - `res.cloudinary.com`

## 9. Assets e Conteúdo em `public/`

### Arquivos de branding/gerais (raiz de `public`)

- logos (`raizlogo-white.png`, `raizlogo-preta.png`)
- imagens de capa antigas/legado (`beach-house-troia.jpg`, `comporta-summer-house.jpg`, etc.)
- svgs padrão (`next.svg`, `vercel.svg`, etc.)

### Pasta principal de conteúdo real: `public/2026`

Contém material organizado por seções do site e projetos, com imagens reais e alguns arquivos `.docx`/`.zip` de referência.

#### Contagem por subpasta (arquivos)

- `public/2026/ABOUT US` -> 3
- `public/2026/HOME` -> 3
- `public/2026/HOME/GALERIA INICIAL` -> 6
- `public/2026/HOME/SELECTED PROJECTS` -> 4
- `public/2026/PROJECTS` -> 1 (`Work.docx`)
- `public/2026/PROJECTS/_fotos capa menu projectos` -> 10
- `public/2026/PROJECTS/BEACH HOUSE TROIA` -> 9
- `public/2026/PROJECTS/CONTEMPORARY CITY HOUSE` -> 18
- `public/2026/PROJECTS/ELEGANT & TIMELESS DUPLEX` -> 16
- `public/2026/PROJECTS/PRÍNCIPE REAL POMBALINE RESTORATION` -> 14
- `public/2026/PROJECTS/RURAL RETREAT` -> 4
- `public/2026/PROJECTS/STORE & RESTAURATION ATELIER` -> 11
- `public/2026/PROJECTS/SUMMER HOUSE COMPORTA` -> 35
- `public/2026/SERVICES` -> 8

### Outros conteúdos legados/duplicados em `public/`

Há também pastas antigas/duplicadas fora de `public/2026`, por exemplo:

- `public/galeriaInicial`
- `public/selectProjects`

Isso indica possível legado de uma versão anterior do site (algumas imagens parecem repetidas em `public/2026`).

## 10. Explicação de Funcionamento do Projeto (Arquitetura)

### Fluxo do site público

1. `src/app/layout.tsx` aplica metadata, fontes e providers globais.
2. `src/app/(site)/layout.tsx` injeta `Header`, `Footer` e banner GDPR.
3. Cada página pública renderiza seções altamente customizadas com animações (`framer-motion`).
4. Conteúdo principal (projetos/serviços) vem de arrays hardcoded em `page.tsx`.
5. `InstagramFeed` tenta buscar posts reais em `/api/instagram/posts`; se falhar, usa imagens fallback.

### Fluxo de autenticação/admin

1. Usuário acessa `/login`.
2. `signIn('credentials')` chama NextAuth (`/api/auth/[...nextauth]`).
3. `src/lib/auth.ts` valida credenciais demo.
4. Com sessão criada, `/admin/layout.tsx` permite renderizar área admin.
5. As páginas admin manipulam apenas **estado local do React** (sem salvar no banco/API).

### Fluxo Instagram (opcional)

1. `POST /api/instagram/sync` busca dados no Apify.
2. API grava/atualiza `InstagramPost` via Prisma.
3. `InstagramFeed` consome `GET /api/instagram/posts`.
4. Sem DB/config, feed continua funcional usando fallback local.

## 11. O que está pronto vs. o que está em mock/protótipo

### Pronto / funcional (frontend)

- Navegação pública completa
- Páginas públicas com design e animações
- Detalhes de projetos e serviços com conteúdo visual extenso
- Login visual com NextAuth credentials demo
- Layout admin completo (sidebar/topbar)
- Feed Instagram com fallback resiliente
- Banner GDPR visual e persistência local

### Parcial / mockado

- Formulário de contato (sem API real)
- Dashboard admin (dados mock)
- CRUDs admin (projects/services/media/contacts/newsletter/pages/settings/notifications) sem persistência
- Upload de mídia (UI apenas)
- Edição de páginas/serviços/projetos (links existem, rotas não)

### Preparado para futura integração

- Prisma schema completo
- Prisma client condicional
- Tipos TypeScript alinhados com modelos
- APIs de Instagram persistindo no banco

## 12. Pontos de Atenção (Auditoria Técnica)

### Funcionais / rotas

- `Footer` e `GDPRBanner` apontam para `/privacy` e `Footer` também para `/terms`, mas essas rotas **não existem** no App Router atual.
- Vários links do admin apontam para rotas inexistentes (`/admin/.../new`, `/admin/.../[id]`).
- `Contact` exibe UX de envio bem acabada, mas **não persiste** nem envia e-mail/API.

### Segurança / produção

- Autenticação admin usa credencial demo hardcoded (`admin123`) em `src/lib/auth.ts`.
- `bcryptjs` importado mas não utilizado; hash no arquivo não é usado na validação real.
- Proteção da área admin é client-side no layout (`useSession` + redirect). Ideal reforçar em server layer/middleware para hardening.

### Dados / arquitetura

- Conteúdo de projetos e serviços está duplicado em vários pontos (home, listagens, detalhes, admin mock), aumentando custo de manutenção.
- Prisma schema está muito mais avançado que a integração atual do frontend/admin.
- Existem assets duplicados/legados em `public/` (ex.: `galeriaInicial`, `selectProjects`) possivelmente não usados.

### DX / ambiente

- `pnpm` indisponível no ambiente desta auditoria, então sem validação de lint/build.
- `.next/` presente na pasta local (gerado, normal para ambiente de desenvolvimento).

## 13. Arquivos-Chave para Entender e Evoluir o Projeto

Se você quiser começar a evoluir o projeto, estes são os arquivos mais importantes:

- `src/app/(site)/projects/[slug]/page.tsx` -> catálogo detalhado de projetos (conteúdo principal)
- `src/app/(site)/services/[slug]/page.tsx` -> catálogo detalhado de serviços
- `src/app/(site)/projects/page.tsx` e `src/app/(site)/services/page.tsx` -> listagens principais
- `src/lib/auth.ts` -> autenticação atual (precisa endurecimento)
- `src/lib/prisma.ts` + `prisma/schema.prisma` -> base de dados
- `src/app/api/instagram/*` + `src/lib/apify.ts` -> integração externa existente
- `src/app/admin/*` -> UI administrativa pronta para conectar no backend

## 14. Recomendações de Próximos Passos (prioridade sugerida)

1. Implementar rotas faltantes (`/privacy`, `/terms`) para remover links quebrados.
2. Criar API real para `/contact` (persistir `Contact` no Prisma + envio de e-mail opcional).
3. Migrar catálogo hardcoded (projects/services) para Prisma, começando por listagens públicas.
4. Substituir auth demo por autenticação real com `User` no banco (Prisma + hash bcrypt).
5. Conectar páginas admin a APIs reais (projects/services/contacts/newsletter).
6. Limpar assets duplicados/legados de `public/` após mapear uso real.

---

## Anexo A - Arquivos de rota identificados (`src/app`)

- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/app/(auth)/layout.tsx`
- `src/app/(auth)/login/page.tsx`
- `src/app/(site)/layout.tsx`
- `src/app/(site)/page.tsx`
- `src/app/(site)/about/page.tsx`
- `src/app/(site)/contact/page.tsx`
- `src/app/(site)/projects/page.tsx`
- `src/app/(site)/projects/[slug]/page.tsx`
- `src/app/(site)/services/page.tsx`
- `src/app/(site)/services/[slug]/page.tsx`
- `src/app/admin/layout.tsx`
- `src/app/admin/page.tsx`
- `src/app/admin/contacts/page.tsx`
- `src/app/admin/media/page.tsx`
- `src/app/admin/newsletter/page.tsx`
- `src/app/admin/notifications/page.tsx`
- `src/app/admin/pages/page.tsx`
- `src/app/admin/projects/page.tsx`
- `src/app/admin/services/page.tsx`
- `src/app/admin/settings/page.tsx`
- `src/app/api/auth/[...nextauth]/route.ts`
- `src/app/api/instagram/posts/route.ts`
- `src/app/api/instagram/sync/route.ts`

## Anexo B - Observações de versionamento local

- `.env` está presente na raiz, mas a regra `.env*` existe no `.gitignore`.
- `git ls-files .env` não retornou resultado na auditoria (indicando que o `.env` local não está rastreado pelo Git neste estado).
