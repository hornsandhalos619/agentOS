# HA.OS — Horns & Halos Agent OS shell

Kit 1 from the AIPB launch list. Same Agent OS functions. House chrome.

## Overlay onto the unpacked pack

```bash
unzip agent-os-pack-2026-08-16.zip
cp haos/house.css agent-os/source/src/app/house.css
cp haos/layout.tsx agent-os/source/src/app/layout.tsx
# optional one-line label swaps:
# Sidebar Mission Control → HA.OS
# TopBar sub: Horns & Halos. Every agent, every memory, every signal — counted and cut.
cd agent-os/source
npm install
PORT=3737 npm run dev
```

Open http://localhost:3737

Functions kept: agent roster, CLI bridge, chat, voice, goals, journal, vault config.
