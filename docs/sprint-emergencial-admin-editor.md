# Sprint Emergencial - Editor Admin com Upload e Publicação

Data: 27/02/2026
Status: Concluído

## Contexto
Foi necessário acelerar a capacidade de edição no painel admin para permitir:
- upload de imagens direto pelo editor
- ajuste de imagens de fundo e cores por página
- fluxo de rascunho e publicação permanente

## Objetivo
Habilitar operação de conteúdo sem dependência de código para as páginas institucionais prioritárias:
- `/admin/pages/home`
- `/admin/pages/projects`
- `/admin/pages/services`
- `/admin/pages/about`
- `/admin/pages/privacy`

## Implementações

### 1) Estrutura de editores por página
- Criadas rotas dedicadas para edição de cada página em `/admin/pages/*`.
- Ajustada listagem principal em `/admin/pages` para refletir apenas páginas com editor ativo.
- Criado componente reutilizável de editor para manter padrão visual e comportamento consistente.

### 2) Configuração dinâmica de campos
- Criado arquivo de configuração central com seções e campos por página.
- Novos tipos de campo suportados:
  - `text`
  - `textarea`
  - `url`
  - `image`
  - `color`
- Campos de imagem e paleta adicionados para todas as páginas do escopo emergencial.

### 3) Upload de imagem no admin
- Criado endpoint `POST /api/admin/upload`.
- Regras:
  - aceita apenas `image/*`
  - limite de 10MB
  - normalização de nome de arquivo
- Arquivos salvos em:
  - `public/uploads/admin/YYYY-MM/`
- URL pública retornada automaticamente e aplicada no campo de imagem do editor.

### 4) Persistência de conteúdo (draft + publicado)
- Criado endpoint `GET|PUT|POST /api/admin/page-settings`.
- Armazenamento em arquivo local:
  - `data/admin-page-settings.json`
- Modelo de versão:
  - `draft`: versão de trabalho
  - `published`: versão permanente
  - `updatedAt`: timestamp do rascunho
  - `publishedAt`: timestamp da publicação

### 5) Ações do editor
- `Guardar rascunho`: grava em `draft`.
- `Publicar alterações`: promove `draft` para `published`.
- Exibição de status e timestamps no próprio editor.

## Qualidade e validação
Comandos executados com sucesso:
- `npm run typecheck`
- `npm run build`

As rotas abaixo foram validadas em build:
- `/admin/pages/about`
- `/admin/pages/home`
- `/admin/pages/privacy`
- `/admin/pages/projects`
- `/admin/pages/services`
- `/api/admin/upload`
- `/api/admin/page-settings`

## Arquivos impactados
- `next.config.ts`
- `src/app/admin/pages/page.tsx`
- `src/app/admin/pages/about/page.tsx`
- `src/app/admin/pages/home/page.tsx`
- `src/app/admin/pages/privacy/page.tsx`
- `src/app/admin/pages/projects/page.tsx`
- `src/app/admin/pages/services/page.tsx`
- `src/components/admin/page-editor.tsx`
- `src/lib/admin-page-configs.ts`
- `src/app/api/admin/upload/route.ts`
- `src/app/api/admin/page-settings/route.ts`

## Resultado
O admin agora consegue:
- subir imagens pelo painel
- trocar imagens de fundo via editor
- ajustar cores via picker + hexadecimal
- salvar rascunho
- publicar alterações permanentes

## Pendência planejada
- Aplicar leitura de `published` no frontend público para refletir automaticamente as alterações nas páginas públicas sem edição de código.
