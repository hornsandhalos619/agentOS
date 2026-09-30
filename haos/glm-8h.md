# 8-hour GLM playbook — house cut

Pack already has `/glm` and `/glm-code`.
GLM-5.1 weights are huge (PDF: 754B). Laptop cannot host it.
Access is Z.AI API ($1/$3.20 per M) or `ollama run glm-5.1:cloud` — **not $0**.

Do not set max iterations to 1000. That is how you wake up with a bill.
Keep HAOS_MAX_TURNS=8 on Dual Desk.

Optional pipe only after Gemma local and OpenRouter :free fail:
`http://localhost:11434/v1` model `glm-5.1:cloud` if you accept cloud cost.

Sell-$5K-dev-stack is later. Not now.
