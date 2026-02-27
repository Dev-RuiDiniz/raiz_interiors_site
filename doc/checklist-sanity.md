# Checklist de sanity inicial (Sprint 1)

## Site público
- [ ] Home carrega sem erro
- [ ] `/projects` lista projetos
- [ ] `/services` lista serviços
- [ ] `/about` e `/contact` renderizam

## Autenticação/Admin
- [ ] `/login` abre normalmente
- [ ] Login admin funciona com credenciais válidas
- [ ] `/admin` e subpáginas carregam sem erro 500

## APIs
- [ ] `GET /api/instagram/posts` responde (200 com lista ou lista vazia)
- [ ] `POST /api/instagram/sync`:
  - [ ] com `APIFY_API_TOKEN` configurado: sincroniza
  - [ ] sem `APIFY_API_TOKEN`: retorna 503 com mensagem amigável

## Pipeline PR
- [ ] CI dispara no pull request
- [ ] Etapa `Prisma generate` executa
- [ ] Etapas `lint`, `typecheck`, `build` executam
- [ ] Resultado pass/fail visível no PR

## Baseline de bugs conhecidos (Sprint 1)
- [ ] Dívida de lint legada mapeada (aspas em JSX, `any`, `setState` em effect)
- [ ] Backlog técnico aberto para endurecer regras e zerar warnings
