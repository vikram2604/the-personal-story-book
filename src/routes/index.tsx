import { createFileRoute } from "@tanstack/react-router";
import signal from "@/assets/signal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vikas N Javali — Founder-led B2B Growth & Pipeline Conversion" },
      {
        name: "description",
        content:
          "Zero-template, trigger-led outreach that turns cold enterprise accounts into C-suite conversations. 39.5% positive response rate. Bengaluru, India.",
      },
      { property: "og:title", content: "Vikas N Javali — B2B Growth & Pipeline Partner" },
      {
        property: "og:description",
        content: "Research-backed 1-on-1 outreach that gets CEOs and CHROs to reply. From qualified leads to closed deals.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "Vikasnjavali26@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/vikas-javali-marketing-expert";

const stats = [
  { n: "39.5%", l: "Positive enterprise response rate" },
  { n: "15 / 38", l: "Interested leads from targeted reachouts" },
  { n: "48 hrs", l: "To understand your product & ICP" },
  { n: "500+", l: "Business leaders in my network" },
];

const usps = [
  {
    k: "01",
    t: "Zero-template, trigger-led reachouts",
    d: "Every prospect gets a message built on a verified, real-time trigger — a recent post, a published book, an award, regulatory data. No copy-paste. No filler.",
  },
  {
    k: "02",
    t: "End-to-end scope ownership",
    d: "From warm, qualified decision-makers handed to your team — to running discovery, presales demos, custom B2B requirements and closing the deal myself.",
  },
  {
    k: "03",
    t: "Multi-product speed",
    d: "Proven outbound and presales execution across AI video analytics, HR tech, workforce monitoring and CRM products — I ramp on a new product in two days.",
  },
];

const cases = [
  {
    sector: "Enterprise Manufacturing & Retail",
    who: "Anupam Bansal",
    role: "Executive Director · Liberty Shoes Ltd",
    msg: "Thanks for reaching out. I'd like to learn more.",
    outcome: "InMail accepted within 48 hours → corporate office invitation and executive-assistant handoff.",
  },
  {
    sector: "Cybersecurity & Global Talent",
    who: "Abantika Dutta",
    role: "CHRO · Ampcus Cyber",
    msg: "I really appreciate the research you have done before the pitch! I would definitely have a look at your product!",
    outcome: "Research-led pitch with a low-friction ask: “Can I send you a one-pager?”",
  },
  {
    sector: "Enterprise Human Capital & ESG",
    who: "Sanjeeb Lahiri",
    role: "CHRO & Business Transformation Leader",
    msg: "Pls send the one pager to [email]. Appreciate your research 🥰",
    outcome: "Bypassed gatekeepers — the CHRO proactively shared his direct corporate email.",
  },
  {
    sector: "Consumer Manufacturing",
    who: "Sanjeev Jain",
    role: "Founder & CEO · Supra Pens",
    msg: "Pls connect with Pritha.",
    outcome: "“You'll lose 3 minutes max if it's not for you” → CEO delegated to his team within 2 minutes.",
  },
];

const experience = [
  {
    co: "Globussoft Technology",
    role: "Growth Marketing Manager",
    when: "May 2026 — Oct 2026",
    d: "LinkedIn marketing & B2B outreach to Founders and CEOs. ICP research, personalized connection & follow-up sequences, Sales Navigator + CRM, and lead handoff to sales.",
  },
  {
    co: "EmpCloud · VideoralQ · EmpMonitor",
    role: "Growth Lead",
    when: "May 2026 — Oct 2026",
    d: "Drove growth for an HR-ops suite, an AI video analytics platform turning CCTV into intelligent monitoring, and an AI-powered workforce productivity platform.",
  },
  {
    co: "Core 8 Media",
    role: "Social Media & Digital Marketer",
    when: "Dec 2025 — Feb 2026",
    d: "Content calendars, organic growth strategy and campaigns across Instagram and Facebook for agency clients.",
  },
  {
    co: "Conversionz Digital Marketing",
    role: "SEO Specialist",
    when: "2025 — Dec 2025",
    d: "Backlinking, local citations, on-page audits, keyword research and technical SEO for client websites.",
  },
];

const products = ["InfAlra", "VideoralQ", "EmpMonitor", "EmpCloud", "GPT CRM", "Globus CRM", "Enterprise B2B"];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{children}</p>
  );
}

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-2xl">
            Vikas<span className="text-primary">.</span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#proof" className="hover:text-foreground">Proof</a>
            <a href="#approach" className="hover:text-foreground">Approach</a>
            <a href="#experience" className="hover:text-foreground">Experience</a>
            <a href="#engage" className="hover:text-foreground">Engage</a>
          </nav>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Let's talk
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen pt-28">
        <div className="glow-bg absolute inset-0" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-20 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div className="rise">
            <Label>Founder-led B2B Growth · Bengaluru, India</Label>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] md:text-8xl">
              I get C-suite<br />
              <em className="text-primary">to reply.</em>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I'm <span className="text-foreground">Vikas N Javali</span> — a B2B lead generation and pipeline conversion partner.
              I turn cold enterprise accounts into real sales conversations with research-backed, one-to-one outreach that
              decision-makers actually read.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#proof" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90">
                See the replies
              </a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="rounded-full border border-border px-6 py-3 font-semibold transition hover:border-primary hover:text-primary">
                LinkedIn ↗
              </a>
            </div>
          </div>
          <div className="relative rise [animation-delay:200ms]">
            <img src={signal} alt="A beam of light connecting a network of glowing points" width={1280} height={1600} className="aspect-[4/5] w-full rounded-2xl object-cover" />
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-card p-5 shadow-2xl">
              <p className="font-display text-5xl text-primary">39.5%</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">positive response rate</p>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative border-y border-border bg-card/50 py-5">
          <div className="flex w-max marquee gap-12 whitespace-nowrap font-display text-3xl text-muted-foreground">
            {[...products, ...products, ...products, ...products].map((p, i) => (
              <span key={i}>{p} <span className="text-primary">✦</span></span>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <Label>The problem</Label>
        <p className="mt-6 max-w-4xl font-display text-4xl leading-tight md:text-5xl">
          Most lead-gen services burn your brand with high-volume templates that executives ignore.{" "}
          <span className="text-muted-foreground">I do the opposite — fewer messages, deeper research, real conversations.</span>
        </p>
        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="bg-background p-8">
              <p className="font-display text-5xl">{s.n}</p>
              <p className="mt-3 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proof */}
      <section id="proof" className="border-t border-border bg-card/40 py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Label>Verified proof of work</Label>
          <h2 className="mt-6 font-display text-5xl md:text-6xl">Real replies from real decision-makers.</h2>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {cases.map((c, i) => (
              <article key={c.who} className="group flex flex-col rounded-2xl border border-border bg-background p-8 transition hover:border-primary">
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  <span>Case {String(i + 1).padStart(2, "0")}</span>
                  <span>{c.sector}</span>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent font-display text-xl text-primary">
                    {c.who.split(" ").map((w) => w[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold">{c.who}</p>
                    <p className="text-sm text-muted-foreground">{c.role}</p>
                  </div>
                </div>
                <blockquote className="mt-6 rounded-xl rounded-tl-none bg-secondary p-5 text-lg leading-relaxed">
                  “{c.msg}”
                </blockquote>
                <p className="mt-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  <span className="text-primary">→ </span>{c.outcome}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center font-mono text-xs text-muted-foreground">
            From LinkedIn conversations. Private contact details redacted.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="mx-auto max-w-6xl px-6 py-28">
        <Label>Why companies partner with me</Label>
        <h2 className="mt-6 max-w-3xl font-display text-5xl md:text-6xl">Precision over volume.</h2>
        <div className="mt-16 divide-y divide-border border-y border-border">
          {usps.map((u) => (
            <div key={u.k} className="grid gap-4 py-10 md:grid-cols-[120px_1fr_1.4fr] md:items-baseline">
              <span className="font-mono text-primary">{u.k}</span>
              <h3 className="font-display text-3xl">{u.t}</h3>
              <p className="leading-relaxed text-muted-foreground">{u.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-4">
          {[
            ["Understand", "Your product, ICP and value story — in 48 hours."],
            ["Research", "Find the exact decision-maker and a live, verified trigger."],
            ["Reach out", "One-to-one message with a low-friction, respectful ask."],
            ["Convert", "Warm handoff — or I run discovery, presales and closing."],
          ].map(([t, d], i) => (
            <div key={t} className="rounded-2xl border border-border p-6">
              <p className="font-mono text-xs text-muted-foreground">STEP {i + 1}</p>
              <p className="mt-4 font-display text-3xl text-primary">{t}</p>
              <p className="mt-3 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-border bg-card/40 py-28">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1fr_2fr]">
          <div>
            <Label>Experience</Label>
            <h2 className="mt-6 font-display text-5xl">Built in the trenches of SaaS growth.</h2>
            <div className="mt-10 space-y-6 text-sm">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Top skills</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Outbound Marketing", "LinkedIn Sales Navigator", "Corporate Communications", "Lead Research", "Presales", "SEO", "CRM"].map((s) => (
                    <span key={s} className="rounded-full border border-border px-3 py-1">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Certifications</p>
                <p className="mt-3">Claude 101 — Certificate of completion</p>
                <p>Semrush SEO Crash Course with Brian Dean</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Education</p>
                <p className="mt-3">B.E. Computer Science — Acharya (2023 — 2026)</p>
              </div>
            </div>
          </div>
          <ol className="relative border-l border-border">
            {experience.map((e) => (
              <li key={e.co} className="relative pb-12 pl-10 last:pb-0">
                <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-primary" />
                <p className="font-mono text-xs text-muted-foreground">{e.when}</p>
                <h3 className="mt-2 font-display text-3xl">{e.role}</h3>
                <p className="text-primary">{e.co}</p>
                <p className="mt-3 leading-relaxed text-muted-foreground">{e.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Engage */}
      <section id="engage" className="mx-auto max-w-6xl px-6 py-28">
        <Label>Flexible engagement</Label>
        <h2 className="mt-6 font-display text-5xl md:text-6xl">Built around your requirement.</h2>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border p-10">
            <p className="font-mono text-xs text-muted-foreground">OPTION A</p>
            <h3 className="mt-4 font-display text-4xl">Qualified Lead & Pipeline Delivery</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Targeted prospect research, custom one-to-one outreach, and a warm handoff of interested decision-makers to your team.
            </p>
          </div>
          <div className="rounded-2xl border border-primary bg-accent p-10">
            <p className="font-mono text-xs text-primary">OPTION B</p>
            <h3 className="mt-4 font-display text-4xl">Full-Scale Sales & Conversion Ownership</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Complete ownership — from first reachout through discovery, presales, custom B2B requirement fulfillment and deal conversion.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="glow-bg absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 py-32 text-center">
          <h2 className="font-display text-6xl leading-none md:text-8xl">
            Your next enterprise deal<br /><em className="text-primary">starts with one message.</em>
          </h2>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${EMAIL}`} className="rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition hover:opacity-90">
              {EMAIL}
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="rounded-full border border-border px-8 py-4 font-semibold transition hover:border-primary hover:text-primary">
              Connect on LinkedIn ↗
            </a>
          </div>
        </div>
        <footer className="relative border-t border-border py-6 text-center font-mono text-xs text-muted-foreground">
          © 2026 Vikas N Javali · Bengaluru, India
        </footer>
      </section>
    </main>
  );
}
