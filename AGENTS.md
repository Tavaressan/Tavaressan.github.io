<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- vetor:capabilities:start -->
## Vetor (plugin instalado)

Automação de ciclo de desenvolvimento (issues → worktrees → fix loop → PR). Skills e agentes:

- `/vetor` — inicializa/atualiza a configuração do Vetor neste projeto.
- `/vetor:spec` (`spec`) — descobre contexto do projeto e rascunha uma Spec a partir de um tema.
- `/vetor:backlog` (`backlog`) — propõe issues a partir de gaps do código/docs.
- `/vetor:coordinator` (`coordinator`) — orquestra workers para issues do backlog.
- `/vetor:worktree-create` (`worktree-create`) — cria um worktree isolado para uma issue.
- `/vetor:fix` (`fix`) — itera build/test até verde num worktree existente.
- `/vetor:ship` (`ship`) — abre PR a partir de um worktree em estado verde.
- `/vetor:guardian` (`guardian`) — auditoria de banco de dados por stack (condicional).
- `/vetor:retro` (`retro`) — retrospectiva do ciclo de trabalho.
- Agentes `code-review` e `issue-worker` — usados internamente pelos comandos acima.

Detalhes de cada skill: `skills/<nome>/SKILL.md` no plugin.
<!-- vetor:capabilities:end -->
