"use client";

const AGENTS = [
  {
    id: "lead",
    title: "Lead gen",
    job: "Find 10 San Diego / online merch-adjacent shops a day. Name, site, one pain line.",
  },
  {
    id: "content",
    title: "Content",
    job: "One merch caption + 3 X lines in Horns & Halos voice. Drafts only. No auto-post.",
  },
  {
    id: "outreach",
    title: "Outreach",
    job: "80-word note from a lead sheet row. Log it. Do not send until you approve.",
  },
  {
    id: "sales",
    title: "Sales desk",
    job: "If a reply is warm, offer shop or affiliate link. No calendar spam.",
  },
  {
    id: "research",
    title: "Research",
    job: "Three competitor moves + one product to feature. 120 words max.",
  },
];

export default function OpenClawTeam() {
  return (
    <section className="space-y-4">
      <p className="eyebrow">V. OpenClaw crew</p>
      <h1 className="display text-3xl">Five seats, one gateway</h1>
      <p style={{ color: "var(--cream-dim)", maxWidth: 640 }}>
        AIPB 5-agent model mapped onto HA.OS. Runtime is local OpenClaw. Brains stay on
        OmniRoute / OpenRouter free / Cloudflare. Paid Claude API is off unless you flip it.
        Drafts only — no silent DM or email send.
      </p>
      <div className="grid gap-3 md:grid-cols-2">
        {AGENTS.map((a) => (
          <article
            key={a.id}
            style={{ padding: 16, border: "1px solid var(--line-soft)", background: "var(--panel)" }}
          >
            <strong>{a.title}</strong>
            <p style={{ color: "var(--cream-dim)", marginTop: 8 }}>{a.job}</p>
          </article>
        ))}
      </div>
      <p style={{ color: "var(--cream-mute)", fontSize: 13 }}>
        Existing route: /openclaw. Point OpenClaw model base URL at OmniRoute
        http://localhost:20128 — see haos/free-pipes.md.
      </p>
    </section>
  );
}
