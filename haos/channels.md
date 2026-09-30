# Channel wiring — drafts first, secrets last

Never commit passwords, app passwords, or session cookies.

## Identities

| Role | Address |
|---|---|
| Grokbot / ops | project6cloud@gmail.com |
| Brand / LinkedIn login email | hornsandhalos619@gmail.com |

## Gmail (ready path)

This Grok session already has a Gmail connector. Confirm it is `project6cloud@gmail.com` after you approve the connect card.
HA.OS policy: **create drafts only**. Send stays a human click (or an explicit "send this draft").

Local OpenClaw/Hermes: use Google OAuth or an app password stored in the OS keychain / `.env` that is gitignored.

```
HAOS_GMAIL_BOT=project6cloud@gmail.com
HAOS_GMAIL_BRAND=hornsandhalos619@gmail.com
HAOS_GMAIL_MODE=drafts-only
```

## LinkedIn

There is no LinkedIn connector on this Grok account and no official "paste password" API.
Do not give HA.OS the LinkedIn password.
Options later:
1. Manual: agent drafts a post/DM, you paste in LinkedIn.
2. Official LinkedIn Marketing/Community APIs if you ever get an app approved.
3. Buffer (available to connect here) as a scheduled-post middleman — still not full inbox.

```
HAOS_LINKEDIN_EMAIL=hornsandhalos619@gmail.com
HAOS_LINKEDIN_MODE=drafts-only
```

## SMS

No free first-party SMS pipe. Needs a paid gateway (Twilio, etc.) and a number.
Until that exists, SMS = "draft text, you send from the phone."
Do not buy a gateway on credit for kit 34.

```
HAOS_SMS_MODE=drafts-only
HAOS_SMS_FROM=
```

## Agent map

- Hermes (hermes-quick): write drafts to `$HERMES_HOME/outreach/` and optionally Gmail drafts via bot address.
- OpenClaw: same, no send.
- This Grok Gmail tool: drafts when you ask; send only on explicit command.
