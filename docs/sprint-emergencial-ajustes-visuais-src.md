# Sprint Emergencial - Ajustes Visuais (src padrão)

Data: 27/02/2026
Status: Concluído

## Objetivo
Sincronizar apenas mudanças visuais de paleta/cor da pasta `src - MOD` para o `src` padrão, sem alterar lógica de negócio, rotas, APIs ou fluxo funcional.

## Escopo aplicado

### Páginas públicas
- `src/app/(site)/page.tsx`
  - Fundo geral da home ajustado para `#e3dfdc`.

- `src/app/(site)/about/page.tsx`
  - Seção de valores: `#CFCAC7` -> `#E3DFDD`.
  - CTA final: `#B4ADA8` -> `#d1c9c7`.

- `src/app/(site)/services/page.tsx`
  - Seção de processo: `#d1c9c7` -> `#e3dfdc`.
  - Linha conectora: `stone-500/40` -> `stone-500/30`.
  - Bolha de número do processo: `#d1c9c7` -> `#f4efec`.
  - Borda da bolha: `stone-500/40` -> `stone-500/30`.
  - Número do processo: `stone-700` -> `stone-600`.
  - Título do passo: `stone-800` -> `stone-900`.
  - CTA final: `#b5adaa` -> `#d1c9c7`.

- `src/app/(site)/services/[slug]/page.tsx`
  - CTA final: `#B4ADA8` -> `#d1c9c7`.

- `src/app/(site)/projects/[slug]/page.tsx`
  - Fundo da seção de descrição passou a ser visualmente dinâmico:
    - `summer-house-comporta` / `contemporary-city-house` => `#CFCAC7`
    - demais => `#E3DFDD`

### Componentes de seção
- `src/components/sections/about-preview.tsx`
  - Fundo da seção: `#d1c9c7` -> `#e3dfdc`.

- `src/components/sections/instagram-feed.tsx`
  - Fundo da seção: `#d1c9c7` -> `#E3DFDD`.
  - Gradientes laterais ajustados para origem `#E3DFDD`.

- `src/components/sections/services-preview.tsx`
  - Fundo principal: `#1b1815` -> `#e3dfdc`.
  - Tipografia e contrastes migrados de branco para escala `stone`:
    - labels/links: `white/*` -> `stone-*`
    - títulos: `white` -> `stone-900`
    - linhas divisórias: `white/*` -> `stone-400/40` e `stone-500/60`
    - ícones/setas com estados hover coerentes com a nova paleta clara.

## Restrições respeitadas
- Não foram alteradas regras de autenticação, APIs, modelos de dados ou lógica de formulários.
- Não foram aplicadas mudanças estruturais irrelevantes (ex.: ajustes de aspect-ratio fora de cor).
- Ajustes focados em cor, contraste e atmosfera visual.

## Validação
- `npm run typecheck` ✅
- `npm run build` ✅

## Arquivos alterados
- `src/app/(site)/about/page.tsx`
- `src/app/(site)/page.tsx`
- `src/app/(site)/projects/[slug]/page.tsx`
- `src/app/(site)/services/[slug]/page.tsx`
- `src/app/(site)/services/page.tsx`
- `src/components/sections/about-preview.tsx`
- `src/components/sections/instagram-feed.tsx`
- `src/components/sections/services-preview.tsx`
