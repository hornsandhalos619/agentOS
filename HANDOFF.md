# HA.OS handoff log

Read this first. Do not re-download the 17MB pack unless you need source internals.
Repo: `hornsandhalos619/agentOS`  
Source of truth for chrome: `haos/`  
Unpack target: `agent-os-pack-2026-08-16.zip` → `agent-os/source`

Owner wants token conservation. Prefer overlay files. Do not rewrite the whole Next app.

## Mission

Rebuild Agent OS as **HA.OS** (Horns & Halos / Project SiXXX).  
Process: AIPB launch-kit list in Google Doc `15istWZcSARcNKCkmpyxWt55fgZmNXjlOnLCVNlB9UIk`.  
One kit at a time. Summarize → wait yes/no → implement → audit → update this log → next kit.

## Done

### 2026-09-29 — Kit 1 Agent OS shell (YES)
- Overlay: `haos/house.css`, `haos/layout.tsx`, `haos/HOUSE.md`
- Skin: obsidian / brass / cordovan. Title HA.OS — Project SiXXX.
- Functions kept: roster, CLI chat, voice, goals, journal, `~/.agentic-os/config.json`, localhost :3737
- Not done: pixel-perfect restyle of every studio panel

### 2026-09-29 — Kit 2 Hermes + Claude Dual Desk (YES) + Claude backup
- Spec + UI stub: `haos/DualDesk.tsx`, `haos/desk-page.tsx`
- Claude fallback order (cheap first):
  1. OmniRoute local free pool (existing `/omniroute`)
  2. OpenRouter free models (`OPENROUTER_API_KEY`, model ids ending `:free`)
  3. Claude Code CLI last (paid)
- Token rules: no full history dump; last 8 turns max; system prompt under 400 chars; default model `openrouter/auto` or `:free`
- Wire-up still needed inside unpacked source:
  - copy DualDesk into `src/components/DualDesk.tsx`
  - add `src/app/desk/page.tsx` from `haos/desk-page.tsx`
  - Sidebar nav item `{ href: "/desk", label: "Dual Desk" }`
  - TopBar title for `/desk`

## Next (paused for owner yes/no unless they already said continue)

Kit 3: **AI Avatar launch kit**  
Drive file `1TXtFOzb198zyQJl4QMbrtC0y1BrdIAag`  
Do not implement until owner says yes.

## Env (do not commit secrets)

```
OPENROUTER_API_KEY=
HAOS_CLAUDE_FALLBACK=omniroute,openrouter-free,claude-cli
HAOS_MAX_TURNS=8
```

## Rules for the next agent

1. Update this file after every completed step.
2. Prefer new files under `haos/` over editing the zip.
3. Do not push the 17MB zip again.
4. Do not invent paid APIs as default.
5. Project SiXXX site (`projectsixxx-next`) is separate; HA.OS is the local operator shell.
