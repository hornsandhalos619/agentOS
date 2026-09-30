"use client";

const LAYERS = [
  {
    id: "brain",
    title: "Brain",
    body: "Default: Nous Portal / OmniRoute free. Local Ollama if the machine can hold it. No Sonnet unless you flip paid.",
  },
  {
    id: "channels",
    title: "Channels",
    body: "One gateway. Telegram first. Same memory as HA.OS vault. Do not expose client DMs to auto-send.",
  },
  {
    id: "skills",
    title: "Skills",
    body: "Lead sheet, merch caption, outreach draft, morning brief, Friday status. Drafts land in the vault.",
  },
  {
    id: "cron",
    title: "Scheduler",
    body: "Brief once a day. Lead sweep once a day. Nothing that spends money or posts live.",
  },
];

export default function HermesMachine() {
  return (
    <section className="space-y-4">
      <p className="eyebrow">VII. Hermes stack</p>
      <h1 className="display text-3xl">Money machine — four layers</h1>
      <p style={{ color: "var(--cream-dim)" }}>
        Nous Hermes agent. Reuse /hermes. Install stays on the owner's box:
        curl install.sh then hermes setup. Point model at OmniRoute.
      </p>
      <div className="grid gap-3 md:grid-cols-2">
        {LAYERS.map((l) => (
          <article key={l.id} style={{ padding: 16, border: "1px solid var(--line-soft)", background: "var(--panel)" }}>
            <strong>{l.title}</strong>
            <p style={{ color: "var(--cream-dim)", marginTop: 8 }}>{l.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
