# Sprint 1 - Fundação de Produção (Infra + Base de Qualidade)

Data de execução: 27/02/2026
Status: Concluída com pendências mapeadas

## Objetivo da sprint
Preparar ambiente e pipeline para desenvolvimento seguro e previsível.

## Escopo executado

### Frontend
- Execução local validada com:
  - `npm run lint` (passou com warnings)
  - `npm run typecheck` (passou)
  - `npm run build` (passou)
- Setup documentado em `doc/setup-staging.md`
- Dependências de env mapeadas:
  - `NEXTAUTH_URL` (URL base para auth/session)
  - `NEXTAUTH_SECRET` (segredo da sessão)
  - `DATABASE_URL` (rotas com Prisma)
  - `APIFY_API_TOKEN` (sincronização Instagram)
- Erros amigáveis para envs críticas:
  - `POST /api/instagram/sync` retorna `503` com mensagem clara quando `APIFY_API_TOKEN` não está configurada
  - `src/lib/auth.ts` emite aviso quando `NEXTAUTH_SECRET` está ausente

### Backend
- Criado `.env.example` com variáveis mínimas
- CI configurada em `.github/workflows/ci.yml` com etapas:
  - `prisma:generate`
  - `lint`
  - `typecheck`
  - `build`
- Script `typecheck` e `prisma:generate` adicionados no `package.json`
- Estratégia de env para staging/produção documentada em `doc/setup-staging.md`

### QA
- Checklist de sanity criado em `doc/checklist-sanity.md`
- Pipeline PR preparada para pass/fail (GitHub Actions)
- Baseline de bugs conhecidos registrada abaixo

### Design/Conteúdo
- Fonte oficial consolidada (estado atual):
  - `public/2026/HOME/HOME.docx`
  - `public/2026/PROJECTS/Work.docx`
  - `public/2026/SERVICES/WhatWeDo.docx`
  - `public/2026/ABOUT US/About US.docx`
- Validação de naming/organização:
  - assets têm padrões mistos (maiúsculas, espaços duplos, acentos, extensões variadas)
  - recomendação: padronizar para `kebab-case`, sem espaços duplicados e extensão consistente (`.jpg` ou `.png`)

## Entregáveis concluídos
- [x] `.env.example`
- [x] CI mínima funcionando (configurada)
- [x] documentação de setup/staging
- [x] checklist de sanity

## Critérios de aceite
- [x] CI configurada para rodar `lint/typecheck/build`
- [ ] staging sobe com envs corretas (depende validação em ambiente remoto)
- [x] equipe consegue subir projeto local seguindo documentação

## Baseline de bugs conhecidos (início da Sprint 1)
1. Lint com 46 warnings (sem erros bloqueantes):
   - `react/no-unescaped-entities`
   - `@typescript-eslint/no-unused-vars`
   - `@typescript-eslint/no-explicit-any`
   - `react-hooks/set-state-in-effect`
2. `baseline-browser-mapping` desatualizado (warning no lint/build)
3. Dependência de `APIFY_API_TOKEN` para sincronização Instagram (agora com fallback e mensagem amigável)

## Evidências de verificação
- `npm run prisma:generate` -> sucesso
- `npm run lint` -> sucesso com warnings
- `npm run typecheck` -> sucesso
- `npm run build` -> sucesso

## Arquivos alterados na sprint
- `.env.example`
- `.github/workflows/ci.yml`
- `package.json`
- `eslint.config.mjs`
- `src/lib/auth.ts`
- `src/lib/apify.ts`
- `src/app/api/instagram/sync/route.ts`
- `doc/setup-staging.md`
- `doc/checklist-sanity.md`
- `doc/sprint-01-fundacao-producao.md`
