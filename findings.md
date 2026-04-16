# Findings & Decisions

## Requirements

- Restyle completo para novo padrao estetico mostrado nas imagens.
- Tipografia: titulos em Montserrat (bold), corpo em Poppins.
- Paleta principal em azuis, verdes e amarelos fornecida pelo usuario.
- Criar um agente e utiliza-lo para guiar a implementacao.

## Research Findings

- Visual atual esta fortemente baseado em tons verdes e fontes Sora/Manrope.
- O ponto central de identidade visual esta em `src/app/layout.tsx` e `src/app/globals.css`.
- Componentes de marca/texto que exigem ajuste: `src/components/NavBar.tsx`, `src/components/Presentation.tsx`, `src/components/Contact.tsx`.
- Nao havia assets de logo no `public/` alem dos SVGs padrao do template.
- Restyle concluido com nova paleta aplicada globalmente e branding atualizado.
- Validacao tecnica concluida com `npm run lint` (sem warnings) e `npm run build` (sucesso).

## Technical Decisions

| Decision                                       | Rationale                                                     |
| ---------------------------------------------- | ------------------------------------------------------------- |
| Criar `.github/agents/semea-estetica.agent.md` | Atender pedido de criar agente dedicado ao novo padrao visual |
| Usar subagente `Explore` para checklist        | Reduz risco de regressao antes de editar                      |
| Aplicar mudancas por CSS variables             | Uniformidade visual com alteracoes centralizadas              |

## Issues Encountered

| Issue                              | Resolution                                                     |
| ---------------------------------- | -------------------------------------------------------------- |
| Sem arquivo de logo custom no repo | Criar marca vetorial local em `public/` para identidade visual |

## Resources

- `.github/agents/semea-estetica.agent.md`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/components/NavBar.tsx`
- `src/components/Presentation.tsx`
- `src/components/Contact.tsx`
- `public/semea-mark.svg`

## Visual/Browser Findings

- Guia visual do usuario indica contraste azul forte com destaques amarelos e blocos verdes secundarios.
- Tipografia de destaque deve ser Montserrat e corpo Poppins para legibilidade e personalidade da marca.

---

_Atualizar este arquivo sempre que houver descoberta ou decisao importante._
