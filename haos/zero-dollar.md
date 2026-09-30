# Zero-dollar stack

PDF pitch: sell Gemma+OpenClaw for $3K-$5K. House use: **run it for yourself** so Dual Desk has a local brain with no tokens.

```bash
curl -fsSL https://ollama.com/install.sh | sh
# laptop:  e4b    workstation: 26b/31b if RAM allows
ollama pull gemma4:e4b
ollama run gemma4:e4b "ok"
```

Point OpenClaw / Hermes / OmniRoute at `http://localhost:11434/v1` model `gemma4:e4b`.
Fallback order becomes:
OmniRoute → OpenRouter :free → Cloudflare → **Ollama Gemma** → Claude CLI last.

Five automations are already in `haos/automations-36k.md`. Do not duplicate them.
Do not promise clients SaaS-replacement savings you have not measured.
