"use client";
import { useMemo, useState } from "react";
import { PROMPTS } from "./prompts105";

const BANDS = ["now", "later", "skip"] as const;

export default function AgencyPrompts() {
  const [band, setBand] = useState<(typeof BANDS)[number]>("now");
  const rows = useMemo(() => PROMPTS.filter((p) => p.band === band), [band]);
  return (
    <section className="space-y-4">
      <p className="eyebrow">XI. Agency prompts</p>
      <h1 className="display text-3xl">105 Agency-Level Money-Making Prompts</h1>
      <p style={{ color: "var(--cream-dim)" }}>
        Own tab. All 105 kept. Sorted by whether they help Horns & Halos / SiXXX this week.
        Full copy-paste bodies stay in the source PDF. Run now-band through Dual Desk free pipes.
      </p>
      <div className="flex gap-2 flex-wrap">
        {BANDS.map((b) => (
          <button key={b} type="button" onClick={() => setBand(b)}
            style={{ padding: "8px 12px", border: `1px solid ${band === b ? "var(--gold)" : "var(--line-soft)"}`, background: "var(--panel)" }}>
            {b} ({PROMPTS.filter((p) => p.band === b).length})
          </button>
        ))}
      </div>
      <ol>
        {rows.map((p) => (
          <li key={p.id} style={{ padding: "8px 0", borderBottom: "1px solid var(--line-deep)" }}>
            <strong>#{p.id} {p.title}</strong>
            <div style={{ color: "var(--cream-mute)", fontSize: 12 }}>{p.cat}</div>
            <div style={{ color: "var(--cream-dim)" }}>{p.why}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}
