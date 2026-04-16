# Task Plan: Restyle Semea Code + Agente

## Goal

Modificar o site para o novo padrao estetico Semea Code (fonts, paleta e identidade visual) e criar/utilizar um agente para guiar as mudancas.

## Current Phase

Phase 5

## Phases

### Phase 1: Requirements & Discovery

- [x] Entender o novo pedido de restyle completo
- [x] Ler referencias visuais (tipografia, paleta, logo)
- [x] Mapear arquivos de layout/CSS/componentes afetados
- **Status:** complete

### Phase 2: Planning & Structure

- [x] Criar agente de estilo no repositorio
- [x] Usar subagente para checklist de aplicacao
- [x] Definir ordem de edicao para reduzir regressao
- **Status:** complete

### Phase 3: Implementation

- [x] Atualizar fontes globais (Montserrat/Poppins)
- [x] Aplicar nova paleta no CSS global
- [x] Ajustar branding no header/hero/contato
- [x] Adicionar marca visual reutilizavel em `public/`
- **Status:** complete

### Phase 4: Testing & Verification

- [x] Rodar lint/build para validar sem regressao
- [x] Conferir responsividade desktop/mobile
- **Status:** complete

### Phase 5: Delivery

- [x] Entregar resumo das mudancas + arquivos alterados
- [x] Sugerir proximos ajustes finos visuais
- **Status:** complete

## Key Questions

1. Quais arquivos concentram o visual global? (`layout.tsx` e `globals.css`)
2. Como representar o logo sem perder legibilidade em mobile?

## Decisions Made

| Decision                                       | Rationale                                                        |
| ---------------------------------------------- | ---------------------------------------------------------------- |
| Criar `.github/agents/semea-estetica.agent.md` | Atender ao pedido de criar um agente dedicado ao padrao visual   |
| Usar subagente `Explore` para checklist        | Validar ordem de alteracoes e riscos mobile antes de editar      |
| Priorizar alteracao global por CSS vars        | Garantir consistencia visual com menor risco de quebra funcional |

## Errors Encountered

| Error                | Attempt | Resolution |
| -------------------- | ------- | ---------- |
| Nenhum ate o momento | 1       | N/A        |

## Notes

- Agente criado: `.github/agents/semea-estetica.agent.md`.
- Proximo passo: aplicar restyle completo e validar via lint/build.
