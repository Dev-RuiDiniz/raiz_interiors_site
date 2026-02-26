# Plano de Sprints para Finalização em Produção - RAIZ Interiors

Data: 2026-02-26
Baseado em: `AUDITORIA_COMPLETA_PROJETO.md`
Versão: Atualizada com separação por perfil (`frontend/backend/QA/design`)

## Objetivo

Levar o projeto `raiz-interiors` para produção com:

- autenticação admin segura
- conteúdo dinâmico via banco (Prisma/PostgreSQL)
- admin operacional para manutenção diária
- captação de leads funcional (contato/newsletter)
- QA técnico e funcional
- deploy com observabilidade mínima

## Premissas

- 1 sprint = 1 semana (5 dias úteis)
- Time base: 1 full-stack (ou 1 FE + 1 BE), 1 QA parcial, 1 design/conteúdo parcial
- Ambientes: `local`, `staging`, `production`
- Banco PostgreSQL disponível em staging/produção

## Perfis considerados

- `Frontend`: interface, integração client/server, UX, estados, formulários
- `Backend`: Prisma, APIs/Server Actions, auth, validação server, integrações
- `QA`: testes funcionais, regressão, validação de aceite, smoke test
- `Design/Conteúdo`: textos, assets, revisão visual, conteúdo legal/editorial

---

## Sprint 1 - Fundação de Produção (Infra + Base de Qualidade)

### Objetivo

Preparar ambiente e pipeline para desenvolvimento seguro e previsível.

### Frontend

- Validar execução local do projeto e documentar setup
- Mapear dependências de env no frontend (`NEXTAUTH_URL`, APIs, etc.)
- Ajustar mensagens de erro amigáveis para ausência de envs críticas (quando aplicável)

### Backend

- Criar `.env.example` com variáveis mínimas
- Configurar CI para `lint`, `typecheck`, `build`
- Validar `prisma generate` em CI
- Revisar estratégia de envs para staging/produção

### QA

- Criar checklist de sanity inicial (site público, login, admin, APIs)
- Validar pipeline em PR (pass/fail)
- Registrar baseline de bugs conhecidos

### Design/Conteúdo

- Consolidar fonte oficial de conteúdo (docx/imagens/ordem de projetos)
- Validar naming/organização de assets finais prioritários

### Entregáveis

- `.env.example`
- CI mínima funcionando
- documentação de setup/staging
- checklist de sanity

### Critérios de aceite

- CI roda `lint/typecheck/build` com sucesso
- staging sobe com envs corretas
- equipe consegue subir projeto local seguindo documentação

---

## Sprint 2 - Autenticação Admin Segura (NextAuth + Prisma)

### Objetivo

Remover autenticação demo e colocar auth real para produção.

### Frontend

- Ajustar `/login` para mensagens de erro reais do backend
- Remover referências de credenciais demo da UI
- Ajustar estados de loading/erro/sucesso no login
- Garantir redirect consistente pós-login e logout

### Backend

- Migrar `src/lib/auth.ts` para autenticação via tabela `User` (Prisma)
- Validar senha com `bcryptjs`
- Criar script/seed de criação de admin inicial
- Incluir `role` na sessão/JWT
- Proteger `/admin` com middleware/server guard (além do client-side)

### QA

- Testar login válido/inválido
- Testar sessão expirada e acesso não autorizado ao admin
- Testar logout e redirecionamento

### Design/Conteúdo

- Revisar UX da página de login (mensagens, microcopy, consistência visual)

### Entregáveis

- auth admin real com Prisma
- seed/admin bootstrap
- proteção efetiva de rotas admin

### Critérios de aceite

- sem senha hardcoded no código
- login usa usuário do banco
- `/admin` bloqueado sem sessão
- logout encerra sessão corretamente

---

## Sprint 3 - APIs Base de Conteúdo (Projects/Services/SiteSettings)

### Objetivo

Criar camada de dados reutilizável para substituir hardcoded no site.

### Frontend

- Preparar camada de consumo (fetch/server actions) para projetos/serviços/settings
- Definir estados de loading/empty/error reutilizáveis nas páginas públicas
- Ajustar tipos no frontend para alinhar com payloads reais

### Backend

- Criar endpoints/server actions para:
  - `Project` listagem e detalhe por slug
  - `Service` listagem e detalhe por slug
  - `SiteSettings` leitura
- Criar schemas Zod de validação
- Padronizar tratamento de erro
- Criar seeds iniciais de `Project`, `ProjectImage`, `Service`, `SiteSettings`

### QA

- Testar retorno de APIs com banco populado e vazio
- Testar erros (slug inexistente, DB indisponível em staging)
- Validar contrato de resposta

### Design/Conteúdo

- Revisar e aprovar estrutura de campos por projeto/serviço (títulos, subtítulos, créditos, status)
- Validar conteúdo inicial para seed

### Entregáveis

- APIs/Server Actions base
- seeds de conteúdo inicial
- contratos de dados validados

### Critérios de aceite

- APIs retornam dados consistentes do Prisma
- seed popula staging com catálogo mínimo
- frontend consegue consumir contratos sem `any`

---

## Sprint 4 - Migração do Site Público para Conteúdo Dinâmico

### Objetivo

Substituir dados hardcoded nas páginas de projetos/serviços por dados do banco.

### Frontend

- Migrar `/projects` para dados reais
- Migrar `/projects/[slug]` para dados reais + galeria
- Migrar `/services` e `/services/[slug]` para dados reais
- Preservar layout/UX/animações atuais
- Implementar estados vazios e fallback visual (`COMING_SOON`, sem imagens)
- Ajustar metadata/SEO por página (título/descrição básicos)

### Backend

- Ajustar queries Prisma para ordenação, filtro por status e relações (`ProjectImage`)
- Otimizar payloads de listagem vs detalhe
- Garantir slugs únicos/consistentes na seed

### QA

- Validar navegação de listagem -> detalhe -> próximo/anterior
- Validar status badges e comportamento de `COMING_SOON`
- Testar páginas com ausência parcial de dados (sem `credits`, sem `images`)

### Design/Conteúdo

- Revisar ordenação final de projetos e serviços
- Validar textos/capitalização dos títulos e localizações

### Entregáveis

- páginas públicas de projetos/serviços 100% dinâmicas

### Critérios de aceite

- sem arrays hardcoded nas páginas migradas
- navegação e visual mantidos
- sem erro em cenários de dados incompletos

---

## Sprint 5 - Site Settings + Páginas Legais + Links Quebrados

### Objetivo

Centralizar conteúdo global e fechar pendências públicas de produção.

### Frontend

- Integrar `SiteSettings` em header/footer/contact/about (dados globais)
- Criar páginas `/privacy` e `/terms`
- Ajustar links do footer e banner GDPR
- Exibir estados adequados se settings não estiverem preenchidos

### Backend

- Expor leitura/escrita (mínimo leitura nesta sprint) de `SiteSettings`
- Definir estrutura para conteúdo legal (hardcoded inicial ou tabela simples)
- Validar schema de settings e defaults

### QA

- Validar links `/privacy` e `/terms`
- Testar header/footer com settings preenchido e sem preenchimento completo
- Validar links sociais/e-mail/telefone

### Design/Conteúdo

- Entregar versão inicial de `Privacy Policy` e `Terms`
- Revisar copy de footer/GDPR/contact info

### Entregáveis

- páginas legais publicadas
- links quebrados corrigidos
- conteúdo global centralizado via settings (ao menos leitura)

### Critérios de aceite

- `/privacy` e `/terms` existem e são acessíveis
- footer/GDPR sem links quebrados
- conteúdo global não depende de hardcode espalhado

---

## Sprint 6 - Leads Reais (Contato + Newsletter)

### Objetivo

Transformar captura de leads em fluxo real com persistência e validação.

### Frontend

- Integrar formulário `/contact` com endpoint real
- Ajustar UX de erro/sucesso com mensagens server-side
- Implementar formulário/CTA de newsletter (se for habilitado no layout/footer ou página dedicada)
- Melhorar feedback de loading/retry

### Backend

- Criar endpoint/Server Action de `Contact`
- Persistir `Contact` com validação Zod
- Criar endpoint/Server Action de `Newsletter`
- Impedir duplicidade por email (`unique` + tratamento amigável)
- Implementar antispam básico (honeypot/rate limit/cooldown)
- Logging seguro de erros

### QA

- Testar submit válido/inválido no contato
- Testar duplicidade de newsletter
- Testar antispam/cooldown básico
- Verificar persistência no banco

### Design/Conteúdo

- Revisar mensagens de sucesso/erro do contato/newsletter
- Validar tom de voz e CTA

### Entregáveis

- contato e newsletter persistindo no banco

### Critérios de aceite

- `Contact` criado com payload válido
- newsletter não duplica assinante ativo
- frontend mostra mensagens coerentes para cada caso

---

## Sprint 7 - Admin Operacional I (Projects + Services CRUD)

### Objetivo

Conectar admin aos dados reais para manutenção de catálogo.

### Frontend

- Conectar `/admin/projects` à listagem real
- Criar telas `/admin/projects/new` e `/admin/projects/[id]`
- Conectar `/admin/services` à listagem real
- Criar telas `/admin/services/new` e `/admin/services/[id]`
- Formularios com validação de UI (campos, erros, loading)
- Gestão básica de `ProjectImage` (adicionar/remover/reordenar mínimo viável)

### Backend

- Criar CRUD de `Project` + `ProjectImage`
- Criar CRUD de `Service`
- Validar payloads com Zod
- Aplicar autorização por sessão/role nas operações de escrita
- Garantir consistência de `slug`, `order`, `status`

### QA

- Testar criar/editar/excluir projeto
- Testar criar/editar/excluir serviço
- Testar impacto no site público após alterações
- Testar permissões (usuário sem sessão / role inadequado)

### Design/Conteúdo

- Validar usabilidade dos formulários admin
- Revisar labels/ordem dos campos para operação real

### Entregáveis

- CRUD funcional de projetos e serviços
- rotas admin inexistentes implementadas

### Critérios de aceite

- alterações no admin refletem no site público
- dados persistem após reload
- validação bloqueia registros inválidos

---

## Sprint 8 - Admin Operacional II (Contacts, Newsletter, Settings, Pages)

### Objetivo

Fechar operação diária de leads e configurações no admin.

### Frontend

- Conectar `/admin/contacts` a dados reais + mudança de status
- Conectar `/admin/newsletter` a dados reais + ações (ativar/desativar/exportar)
- Conectar `/admin/settings` a `SiteSettings` real (load/save)
- Ajustar `/admin/pages` para refletir páginas reais (ao menos leitura/status/links)
- Melhorar feedbacks (toast/loading/error)

### Backend

- Endpoints/Server Actions para `Contact` list/update status
- Endpoints/Server Actions para `Newsletter` list/update/export CSV
- Endpoints/Server Actions para `SiteSettings` update
- Regras de autorização para operações admin

### QA

- Testar workflow de atendimento de contato (`NEW -> READ -> REPLIED`)
- Testar export CSV de newsletter
- Testar salvar settings e refletir no site público
- Testar estados vazios nas telas admin

### Design/Conteúdo

- Revisar textos e labels da área admin (settings, contatos, newsletter)
- Definir campos obrigatórios de settings para publicação

### Entregáveis

- admin funcional para leads + settings

### Critérios de aceite

- contatos/newsletter/settings usam DB real
- export CSV funciona
- alterações de settings aparecem no site

---

## Sprint 9 - Mídia Real + Performance + Conteúdo Final

### Objetivo

Fechar pipeline de mídia e otimizar o site para lançamento.

### Frontend

- Integrar upload de imagens no admin (UI + preview + erro)
- Ajustar componentes para URLs do provider escolhido (Cloudinary/S3/Vercel Blob)
- Revisar carregamento de imagens, placeholders e fallbacks
- Ajustes de performance de rendering e imagens críticas (home/projects)
- Revisão básica de acessibilidade (alt, foco, labels, contraste)

### Backend

- Implementar upload/assinatura/token conforme provider de mídia
- Persistir referências de mídia (URLs/metadados) no banco
- Atualizar `next.config.ts` (domínios remotos)
- Rotina de limpeza/regras de mídia órfã (mínimo viável)

### QA

- Testar upload/substituição/remoção de imagem no admin
- Testar imagens em staging sem 404
- Testar regressão visual nas páginas principais
- Testar performance básica (LCP visualmente aceitável em staging)

### Design/Conteúdo

- Revisão final de conteúdo (textos, créditos, slugs, descrições SEO)
- Aprovação final de assets usados em produção
- Identificação de assets legados para limpeza

### Entregáveis

- fluxo de mídia real (ou faseado com integração mínima documentada)
- conteúdo final aprovado
- assets organizados

### Critérios de aceite

- uploads funcionam em staging
- sem placeholders indevidos no site
- sem imagens críticas quebradas
- conteúdo final aprovado pelo responsável

---

## Sprint 10 - QA Final, Observabilidade e Go-Live

### Objetivo

Executar validação final, publicar produção e estabilizar pós-lançamento.

### Frontend

- Hardening de estados de erro/empty/loading remanescentes
- Ajustes finais de UX após QA/regressão
- Smoke fixes pós-deploy (se necessário)

### Backend

- Configurar observabilidade mínima (ex.: Sentry/log provider)
- Revisar logs sensíveis/erros e respostas HTTP
- Preparar checklist de release e rollback
- Validar envs e segredos de produção

### QA

- Executar QA funcional completo (site + admin + APIs)
- Executar regressão dos fluxos críticos:
  - login admin
  - CRUD projetos/serviços
  - contato
  - newsletter
  - settings
  - feed Instagram (DB e fallback)
- Smoke test em produção pós-deploy
- Registrar bugs de pós-lançamento

### Design/Conteúdo

- Aprovação visual final em produção
- Validação editorial final (textos, capitalização, créditos)
- Checklist de consistência de marca (logo, tipografia, links sociais)

### Entregáveis

- produção publicada
- checklist de release e smoke test concluídos
- backlog pós-lançamento priorizado

### Critérios de aceite

- fluxos críticos funcionando em produção
- sem credenciais demo no código
- sem links quebrados conhecidos
- erros monitoráveis em produção

---

## Backlog Transversal por Perfil (ao longo dos sprints)

### Frontend

- Reduzir duplicação de componentes/estruturas de formulário
- Melhorar consistência de estados de loading/erro
- Revisar acessibilidade em componentes reutilizáveis

### Backend

- Padronizar respostas/erros das APIs
- Melhorar autorização por role (`ADMIN`/`EDITOR`)
- Seeds versionadas e reexecutáveis

### QA

- Construir suíte de regressão dos fluxos críticos
- Automatizar smoke checks básicos (quando viável)
- Manter matriz de casos por página/fluxo

### Design/Conteúdo

- Revisão contínua de textos EN/PT (se multilíngue virar escopo)
- Curadoria de ordem editorial de projetos/serviços
- Governança de assets (nomes, versões, aprovações)

---

## Dependências e Riscos

### Dependências externas

- PostgreSQL (staging/prod)
- Provedor de mídia (se upload real incluído)
- Apify (se feed automático mantido)
- Aprovação de conteúdo legal e editorial

### Riscos

- Escopo do admin crescer antes do core público estar estável
- Migração de hardcoded para DB sem seed completa
- Atraso de conteúdo final (textos/imagens)
- Falta de observabilidade no go-live

### Mitigação

- Priorizar por impacto público (site + leads + auth)
- Seeds desde Sprint 3
- Aprovação de conteúdo por lotes (não deixar tudo para Sprint 9)
- Staging obrigatório a cada sprint

---

## Definição de Pronto (Produção)

- Auth admin segura com Prisma (sem demo creds)
- Site público consumindo DB para conteúdo principal
- Contato/newsletter persistindo e operáveis no admin
- Admin funcional para projetos, serviços, contatos e settings
- Páginas legais ativas (`/privacy`, `/terms`)
- CI com `lint/typecheck/build`
- Smoke test aprovado em produção
- Observabilidade mínima ativa

---

## Cronograma Sugerido (10 semanas)

1. Semana 1 -> Sprint 1
2. Semana 2 -> Sprint 2
3. Semana 3 -> Sprint 3
4. Semana 4 -> Sprint 4
5. Semana 5 -> Sprint 5
6. Semana 6 -> Sprint 6
7. Semana 7 -> Sprint 7
8. Semana 8 -> Sprint 8
9. Semana 9 -> Sprint 9
10. Semana 10 -> Sprint 10

## Observação de Escalonamento

Se o time estiver reduzido, converta para **12 sprints** dividindo:

- Sprint 7 em `7A (Projects)` e `7B (Services)`
- Sprint 8 em `8A (Contacts/Newsletter)` e `8B (Settings/Pages)`
- Sprint 9 em `9A (Mídia)` e `9B (Performance/Conteúdo final)`
