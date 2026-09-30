"use client";
import { useMemo, useState } from "react";

/** All 105 titles. band decided for SiXXX this week. */
const ITEMS: { id: string; title: string; cat: string; band: "now" | "later" | "skip"; why: string }[] = [
  { id: "001", title: "Authority Blog Post Generator", cat: "Content", band: "now", why: "One SEO post beating empty pages." },
  { id: "002", title: "Newsletter That Gets Replies", cat: "Content", band: "now", why: "Email if any list exists." },
  { id: "007", title: "Product Description Triple Test", cat: "Content", band: "now", why: "Merch listings need three variants." },
  { id: "012", title: "Ad Copy Split Test Pack", cat: "Content", band: "now", why: "Affiliate + merch ads." },
  { id: "015", title: "3-Length Bio Generator", cat: "Content", band: "now", why: "Shop, X, GitHub bios." },
  { id: "016", title: "Brand Positioning Framework", cat: "Marketing", band: "now", why: "Public copy is still fuzzy." },
  { id: "017", title: "Deep Customer Avatar", cat: "Marketing", band: "now", why: "Need a real buyer before more SKUs." },
  { id: "018", title: "90-Day Content Strategy", cat: "Marketing", band: "now", why: "Stops random posting." },
  { id: "019", title: "Competitive Intelligence Report", cat: "Marketing", band: "now", why: "Occult/fantasy merch comps." },
  { id: "025", title: "Social Proof Campaign", cat: "Marketing", band: "now", why: "Shop has no proof block." },
  { id: "029", title: "Pricing Strategy Optimizer", cat: "Marketing", band: "now", why: "Merch and leftover-asset prices." },
  { id: "030", title: "Marketing Audit Checklist", cat: "Marketing", band: "now", why: "Audit the live SiXXX site." },
  { id: "036", title: "AI Content Assembly Line", cat: "Automation", band: "now", why: "Feed Dual Desk + Hermes." },
  { id: "074", title: "Revenue Growth Audit", cat: "Strategy", band: "now", why: "Money already in shop/affiliates." },
  { id: "076", title: "LinkedIn Hook Generator", cat: "Social", band: "now", why: "Hooks for the brand." },
  { id: "077", title: "Twitter/X Thread Builder", cat: "Social", band: "now", why: "Native to the X handle." },
  { id: "078", title: "Instagram Carousel Script", cat: "Social", band: "now", why: "Product carousels." },
  { id: "079", title: "Short-Form Video Script", cat: "Social", band: "now", why: "Listing videos." },
  { id: "081", title: "30-Day Content Calendar", cat: "Social", band: "now", why: "One calendar." },
  { id: "084", title: "Hashtag Research System", cat: "Social", band: "now", why: "Discovery." },
  { id: "085", title: "Social Proof Content System", cat: "Social", band: "now", why: "Reviews and user photos." },
  { id: "086", title: "Short-Form Video Idea Machine", cat: "Social", band: "now", why: "Empty-week ideas." },
  { id: "087", title: "Profile Optimization Suite", cat: "Social", band: "now", why: "Unfinished profiles." },
  { id: "088", title: "Trend Adaptation Playbook", cat: "Social", band: "now", why: "Trends without new SKUs." },
  { id: "089", title: "Engagement Post Templates", cat: "Social", band: "now", why: "Low-effort posts." },
  { id: "091", title: "Daily Operating System", cat: "Productivity", band: "now", why: "Broke-week operator OS." },
  { id: "098", title: "Time Reclamation Audit", cat: "Productivity", band: "now", why: "Cut work that does not sell." },
  { id: "102", title: "Side Hustle Launch Plan", cat: "Productivity", band: "now", why: "Merch is the hustle." },
  { id: "105", title: "Personal Brand Blueprint", cat: "Productivity", band: "now", why: "Brand is the storefront." },
  { id: "014", title: "Grant Proposal Framework", cat: "Content", band: "skip", why: "No grant target." },
  { id: "047", title: "Literature Review Writer", cat: "Research", band: "skip", why: "Academic, not merch." },
  { id: "050", title: "Survey and Interview Designer", cat: "Research", band: "skip", why: "No survey panel." },
  { id: "052", title: "Research Paper Translator", cat: "Research", band: "skip", why: "Not publishing papers." },
  { id: "057", title: "Patent Landscape Scout", cat: "Research", band: "skip", why: "No patent fight." },
  { id: "059", title: "Historical Context Builder", cat: "Research", band: "skip", why: "Not writing speeches." },
  { id: "066", title: "Magnetic Job Description", cat: "Strategy", band: "skip", why: "Not hiring." },
  { id: "069", title: "Performance Review System", cat: "Strategy", band: "skip", why: "No staff." },
  { id: "070", title: "Crisis Communication Playbook", cat: "Strategy", band: "skip", why: "No crisis desk." },
  { id: "075", title: "Exit Strategy Planner", cat: "Strategy", band: "skip", why: "No exit." },
  { id: "090", title: "Live Stream Playbook", cat: "Social", band: "skip", why: "Later." },
  { id: "100", title: "Speaking Prep System", cat: "Productivity", band: "skip", why: "No speaking circuit." },
];

const LATER_TITLES: [string, string][] = [
  ["003","High-Converting Sales Page"],["004","YouTube Script That Retains"],["005","Cold Email Sequence That Books Calls"],
  ["006","LinkedIn Authority Article"],["008","Results-Driven Case Study"],["009","Podcast Show Notes Engine"],
  ["010","Press Release Builder"],["011","eBook Chapter Writer"],["013","Welcome Sequence That Sells"],
  ["020","Lead Magnet System"],["021","Webinar Conversion System"],["022","Google Ads Campaign Blueprint"],
  ["023","Referral Growth Engine"],["024","14-Day Product Launch"],["026","Revenue Maximizer Scripts"],
  ["027","Influencer Partnership Kit"],["028","Win-Back Campaign"],["031","AI Automation Audit"],
  ["032","Claude Cowork Task Builder"],["033","AI Agent Business Model"],["034","OpenClaw Agent Architect"],
  ["035","No-Code Automation Stack"],["037","Client Reporting Automator"],["038","AI-Powered Lead Scoring"],
  ["039","SOPs to AI Agents Converter"],["040","Claude Chrome Scraper Setup"],["041","AI Meeting Assistant System"],
  ["042","AI Email Triage System"],["043","AI Sales Follow-Up Engine"],["044","AI Proposal Generator"],
  ["045","AI Automation ROI Calculator"],["046","Deep Research Report"],["048","Data Analysis Interpreter"],
  ["049","Market Research Synthesizer"],["051","Claim Verification Framework"],["053","Strategic SWOT Analysis"],
  ["054","Industry Trend Forecaster"],["055","Source and Citation Guide"],["056","Argument Analyzer"],
  ["058","Media Coverage Analyzer"],["060","Research Question Refiner"],["061","Business Plan Generator"],
  ["062","OKR Framework Builder"],["063","Financial Model Framework"],["064","Pitch Deck Architect"],
  ["065","SOP Creator"],["067","Winning Client Proposal"],["068","Meeting System Designer"],
  ["071","Partnership Agreement Outline"],["072","Customer Onboarding System"],["073","Negotiation Prep Guide"],
  ["080","YouTube Title and Thumbnail System"],["082","Community Growth Strategy"],["083","DM Outreach Scripts"],
  ["092","Goal Architecture System"],["093","Accelerated Learning Plan"],["094","Decision Framework"],
  ["095","Career Development Roadmap"],["096","Habit Engineering System"],["097","Strategic Networking Plan"],
  ["099","Personal Finance Framework"],["101","30-Day Journaling System"],["103","Knowledge Management System"],
  ["104","Burnout Recovery Plan"],
];

const ALL = [
  ...ITEMS,
  ...LATER_TITLES.map(([id, title]) => ({ id, title, cat: "later", band: "later" as const, why: "After shop + Dual Desk stabilize." })),
];

export default function AgencyPrompts() {
  const [band, setBand] = useState<"now" | "later" | "skip">("now");
  const rows = useMemo(() => ALL.filter((p) => p.band === band).sort((a, b) => a.id.localeCompare(b.id)), [band]);
  return (
    <section className="space-y-4">
      <p className="eyebrow">XI. Agency prompts</p>
      <h1 className="display text-3xl">105 Agency-Level Money-Making Prompts</h1>
      <p style={{ color: "var(--cream-dim)" }}>All 105 kept. Ranked for SiXXX this week. Full bodies remain in the PDF.</p>
      <div className="flex gap-2">
        {(["now", "later", "skip"] as const).map((b) => (
          <button key={b} type="button" onClick={() => setBand(b)}
            style={{ padding: "8px 12px", border: `1px solid ${band === b ? "var(--gold)" : "var(--line-soft)"}`, background: "var(--panel)" }}>
            {b} ({ALL.filter((p) => p.band === b).length})
          </button>
        ))}
      </div>
      <ol>
        {rows.map((p) => (
          <li key={p.id} style={{ padding: "8px 0", borderBottom: "1px solid var(--line-deep)" }}>
            <strong>#{p.id} {p.title}</strong>
            <div style={{ color: "var(--cream-dim)" }}>{p.why}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}
