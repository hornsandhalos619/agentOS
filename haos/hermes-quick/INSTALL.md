# Hermes Quick Deploy — separate path

Do not reuse the default `~/.hermes` from kit 7.
This tree uses its own home so Dual Desk / kit-7 machine and this deploy do not clobber each other.

```bash
export HAOS_HOME="$HOME/.haos"
export HERMES_HOME="$HAOS_HOME/hermes-quick"
mkdir -p "$HERMES_HOME"/{leads,content/drafts,reports,skills}

# official installer, then point config at HERMES_HOME
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash

# if hermes honors HERMES_HOME / XDG, keep the export in ~/.bashrc
# otherwise copy or symlink config:
#   ln -sfn "$HERMES_HOME" "$HOME/.hermes-haos-quick"

hermes setup          # pick Nous Portal or OmniRoute, not paid Sonnet
hermes gateway setup  # Telegram first
# hermes gateway install   # only if you want 24/7 on this path
```

Model base: OmniRoute `http://localhost:20128` (see `haos/free-pipes.md`).
Automations: paste from `haos/hermes-quick/automations.md`. Drafts only.
