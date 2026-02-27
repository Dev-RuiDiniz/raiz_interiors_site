# Setup local e estratégia de env (staging/produção)

## Setup local
1. Instalar dependências:
   - `pnpm install` (ou `npm install` quando `pnpm` não estiver disponível localmente)
2. Criar arquivo de ambiente local:
   - copiar `.env.example` para `.env.local`
3. Preencher mínimo obrigatório:
   - `DATABASE_URL`
   - `NEXTAUTH_URL` (local: `http://localhost:3000`)
   - `NEXTAUTH_SECRET`
4. Rodar projeto:
   - `pnpm dev`
5. Validação de qualidade:
   - `pnpm lint`
   - `pnpm typecheck`
   - `pnpm build`

## Estratégia de envs

### Desenvolvimento
- Arquivo: `.env.local` (não versionado)
- Pode operar sem `APIFY_API_TOKEN` (endpoint de sync retorna erro amigável `503` com instrução)
- `NEXTAUTH_SECRET` ausente usa fallback apenas em `NODE_ENV !== production`

### Staging
- Definir no provedor de deploy (Vercel/Render/etc.) as mesmas chaves de produção, com credenciais de staging:
  - `DATABASE_URL`
  - `NEXTAUTH_URL` (URL pública de staging)
  - `NEXTAUTH_SECRET`
  - `APIFY_API_TOKEN` (se o sync do Instagram estiver habilitado)
- Validar após deploy:
  - login em `/login`
  - dashboard em `/admin`
  - `GET /api/instagram/posts`
  - `POST /api/instagram/sync`

### Produção
- Nunca usar fallback de `NEXTAUTH_SECRET`
- Segredos via secret manager do provedor
- Rotacionar `NEXTAUTH_SECRET` e `APIFY_API_TOKEN` em incidente
- `DATABASE_URL` dedicada de produção com backup e retenção configurados
