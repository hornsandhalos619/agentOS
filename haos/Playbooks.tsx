"use client";

import { useState } from "react";

const BOOKS = [
  {
    id: "employee",
    title: "Digital employee",
    pipe: "omniroute",
    prompt:
      "Research 10 local San Diego service businesses. For each: site, offer, customer, main channel. One line each. Save as prospect_research.md. Do not open banking or password apps.",
  },
  {
    id: "briefing",
    title: "Morning briefing",
    pipe: "omniroute",
    prompt:
      "From the vault journal only: 5 next actions for Horns & Halos today. One sentence each. No extra commentary.",
  },
  {
    id: "sprint",
    title: "Content sprint",
    pipe: "openrouter-free",
    prompt:
      "Write one 400-word merch post and 5 short social lines for Horns & Halos. Direct tone. No fluff.",
  },
  {
    id: "loop",
    title: "Cheap loop",
    pipe: "cloudflare",
    prompt:
      "List 3 affiliate products already on the SiXXX shop and one sentence why each converts. Stop.",
  },
  {
    id: "chrome",
    title: "Watchlist",
    pipe: "omniroute",
    prompt:
      "Given a URL I paste next, return title, price if visible, and one affiliate angle. 80 words max.",
  },
];

export default function Playbooks() {
  const [open, setOpen] = useState(BOOKS[0].id);
  const active = BOOKS.find((b) => b.id === open) ?? BOOKS[0];
  return (
    <section className="space-y-4">
      <p className="eyebrow">IV. Playbooks</p>
      <h1 className="display text-3xl">10-minute desk — free pipes</h1>
      <p style={{ color: "var(--cream-dim)" }}>
        Five AIPB systems, rewritten to stay off paid Claude. Run through OmniRoute,
        OpenRouter :free, then Cloudflare Workers AI.
      </p>
      <div className="grid gap-3 md:grid-cols-2">
        {BOOKS.map((b) => (
          <button
            key={b.id}
            type="button"
            onClick={() => setOpen(b.id)}
            style={{
              textAlign: "left",
              padding: 14,
              border: `1px solid ${open === b.id ? "var(--gold)" : "var(--line-soft)"}`,
              background: "var(--panel)",
            }}
          >
            <strong>{b.title}</strong>
            <div style={{ color: "var(--cream-mute)", fontSize: 12 }}>{b.pipe}</div>
          </button>
        ))}
      </div>
      <pre style={{ whiteSpace: "pre-wrap", color: "var(--cream-soft)", background: "var(--bg-card)", padding: 16 }}>
        {active.prompt}
      </pre>
      <p style={{ color: "var(--cream-mute)", fontSize: 13 }}>
        Copy into Dual Desk or `omniroute launch --profile auto-coding-free`. See haos/free-pipes.md.
      </p>
    </section>
  );
}
