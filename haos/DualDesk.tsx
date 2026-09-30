"use client";

import { useMemo, useState } from "react";

type Seat = "hermes" | "claude";
type ClaudePipe = "omniroute" | "openrouter-free" | "claude-cli";

const PIPES: { id: ClaudePipe; label: string; cost: string }[] = [
  { id: "omniroute", label: "OmniRoute (local free)", cost: "$0" },
  { id: "openrouter-free", label: "OpenRouter :free", cost: "$0" },
  { id: "claude-cli", label: "Claude CLI (last)", cost: "paid" },
];

export default function DualDesk() {
  const [pipe, setPipe] = useState<ClaudePipe>("omniroute");
  const [focus, setFocus] = useState<Seat>("hermes");
  const hint = useMemo(() => {
    if (pipe === "omniroute") return "Routes to the existing /omniroute free pool. No Claude tokens.";
    if (pipe === "openrouter-free") return "Use OPENROUTER_API_KEY and a :free model. Cap context at 8 turns.";
    return "Claude CLI is the expensive seat. Use only when the free pipes fail.";
  }, [pipe]);

  return (
    <section className="space-y-4">
      <p className="eyebrow">II. Dual Desk</p>
      <h1 className="display text-3xl">Hermes + Claude</h1>
      <p style={{ color: "var(--cream-dim)", maxWidth: 640 }}>
        One vault thread. Two seats. Claude is backed by OmniRoute then OpenRouter free
        so the paid CLI stays dark unless you flip it.
      </p>

      <label className="block" style={{ color: "var(--gold)" }}>
        Claude backup pipe
        <select
          value={pipe}
          onChange={(e) => setPipe(e.target.value as ClaudePipe)}
          className="ml-3 px-3 py-2"
          style={{ background: "var(--bg-card)", color: "var(--cream)", border: "1px solid var(--line)" }}
        >
          {PIPES.map((p) => (
            <option key={p.id} value={p.id}>
              {p.label} · {p.cost}
            </option>
          ))}
        </select>
      </label>
      <p style={{ color: "var(--cream-dim)" }}>{hint}</p>

      <div className="grid gap-4 md:grid-cols-2">
        {(["hermes", "claude"] as Seat[]).map((seat) => (
          <button
            key={seat}
            type="button"
            onClick={() => setFocus(seat)}
            style={{
              textAlign: "left",
              padding: 16,
              border: `1px solid ${focus === seat ? "var(--gold)" : "var(--line-soft)"}`,
              background: "var(--panel)",
            }}
          >
            <strong>{seat === "hermes" ? "Hermes" : "Claude seat"}</strong>
            <div style={{ color: "var(--cream-dim)", marginTop: 8 }}>
              {seat === "hermes"
                ? "Existing /hermes workspace. Keep skills + kanban."
                : pipe === "claude-cli"
                  ? "Paid CLI. Prefer a free pipe."
                  : `Talks through ${pipe}. Open /omniroute for the live router.`}
            </div>
          </button>
        ))}
      </div>

      <p style={{ color: "var(--cream-mute)", fontSize: 13 }}>
        Token cap: 8 turns, short system prompt. Wire live send in the next pass against
        existing OmniRoute + OpenClaw routes — do not add a third backend.
      </p>
    </section>
  );
}
