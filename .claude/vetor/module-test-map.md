# Module Test Map — Auto-Gerado

Gerado pela auto-detecção do Vetor (runtime: **node**).
Revise os comandos: eles são executados de forma headless pelo `fix` e pelo `ship`.

---

## Comandos por módulo

| Módulo | Comando headless | Notas |
|--------|------------------|-------|
| `site` | `npm run lint && npm run build` | Sem suíte de testes; lint + build estático (`output: 'export'`) são o critério de verde |

## Detecção de módulo por arquivos alterados

| Prefixo do path | Módulo |
|-----------------|--------|
| `app/` | `site` |
| `components/` | `site` |
| `content/` | `site` |
| `styles/` | `site` |
| `public/` | `site` |

`portfolio_vitor/` está no `.gitignore` e não é módulo do site.

## Regras de execução

### Exclusões obrigatórias
Todo `find`/`grep` executado pelas skills deve excluir:
`.claude/worktrees/*`, `node_modules/`, `target/`, `build/`, `dist/`, `.venv/`, `__pycache__/`.
