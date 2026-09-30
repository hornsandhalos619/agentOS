# Free Claude / Claude Code pipes

Order (cheap first). Never default to paid Anthropic.

1. OmniRoute local gateway `http://localhost:20128`
2. OpenRouter `:free` models
3. Cloudflare Workers AI (10k neurons/day)
4. Claude Code CLI last

## OmniRoute + free Claude Code

```bash
npm install -g omniroute @anthropic-ai/claude-code
omniroute
# dashboard http://localhost:20128 — add free providers (Pollinations / Kiro / Cloudflare)
omniroute setup-claude
omniroute launch --profile auto-coding-free
```

Manual Claude Code env (no `/v1` suffix on ANTHROPIC_BASE_URL):

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "http://localhost:20128",
    "ANTHROPIC_AUTH_TOKEN": "YOUR_OMNIROUTE_KEY",
    "ANTHROPIC_MODEL": "auto/best-free",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1"
  }
}
```

OmniRoute does not make paid Claude free. It only routes to whatever free upstream you connected.

## OpenRouter free

```
OPENROUTER_API_KEY=
OPENROUTER_MODEL=openrouter/free
```

Prefer `openrouter/free` or ids ending `:free`. Cap 8 turns.

## Cloudflare Workers AI

10,000 neurons/day on the free plan. No card required.

```
CLOUDFLARE_ACCOUNT_ID=
CLOUDFLARE_API_TOKEN=
CLOUDFLARE_MODEL=@cf/meta/llama-3.1-8b-instruct
```

REST:
`POST https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/{MODEL}`
Header: `Authorization: Bearer {TOKEN}`

Use the small instruct models first (`llama-3.1-8b`, `llama-3.2-3b`). Big models burn the daily neuron pool.

## Token rules

- HAOS_MAX_TURNS=8
- system prompt under 400 chars
- no vault dump into context
- disable nonessential Claude Code traffic
