function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="max-w-4xl">
      <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-white/70">{text}</p> : null}
    </div>
  );
}

function InfoCard({ title, children, tone = "default" }) {
  const toneClass =
    tone === "accent"
      ? "border-cyan-400/20 bg-cyan-400/5"
      : "border-white/10 bg-white/[0.03]";

  return (
    <div className={`rounded-3xl border p-6 ${toneClass}`}>
      <div className="text-lg font-semibold text-white">{title}</div>
      <div className="mt-4 text-sm leading-7 text-white/70">{children}</div>
    </div>
  );
}

function SimpleTable({ columns, rows }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
      <div
        className="grid border-b border-white/10 bg-black/20 px-6 py-4 text-sm font-medium text-white/70"
        style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
      >
        {columns.map((col) => (
          <div key={col}>{col}</div>
        ))}
      </div>
      {rows.map((row, idx) => (
        <div
          key={idx}
          className="grid gap-4 border-b border-white/10 px-6 py-5 last:border-b-0"
          style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
        >
          {row.map((cell, cellIdx) => (
            <div key={cellIdx} className="text-sm leading-7 text-white/70">
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function JourneyFlow({ title, steps }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="text-lg font-semibold text-white">{title}</div>
      <div className="mt-5 space-y-3">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-xs font-semibold text-cyan-200">
              {idx + 1}
            </div>
            <div className="text-sm leading-7 text-white/75">{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WireframePreview({ title, blocks }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="text-lg font-semibold text-white">{title}</div>
        <div className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/45">
          Page structure
        </div>
      </div>
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-neutral-900">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-white/20" />
          <div className="h-3 w-3 rounded-full bg-white/10" />
          <div className="h-3 w-3 rounded-full bg-white/10" />
          <div className="ml-3 h-8 flex-1 rounded-xl border border-white/10 bg-black/25" />
        </div>
        <div className="space-y-3 p-4">
          {blocks.map((block, idx) => (
            <div
              key={block[0]}
              className={`rounded-2xl border px-4 py-3 ${idx === 0 ? "border-cyan-400/35 bg-cyan-400/8" : "border-white/10 bg-black/20"}`}
            >
              <div className="text-xs uppercase tracking-[0.18em] text-white/45">{block[0]}</div>
              <div className="mt-1 text-sm leading-6 text-white/80">{block[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TrainsitBlueprintWebsite() {
  const nav = [
    { label: "Overview", href: "#overview" },
    { label: "Roles", href: "#roles" },
    { label: "Journeys", href: "#journeys" },
    { label: "Features", href: "#features" },
    { label: "Sitemap", href: "#sitemap" },
    { label: "Wireframes", href: "#wireframes" },
    { label: "Architecture", href: "#architecture" },
    { label: "Estimate", href: "#estimate" },
  ];

  const principles = [
    {
      title: "Dual-purpose website",
      text: "The website must work as both a trust-building marketing layer and a gateway into the freight platform.",
    },
    {
      title: "Platform-first conversion",
      text: "The site explains the product, but the main conversion still happens through app.trainsit.com.",
    },
    {
      title: "Lean website scope",
      text: "The site should handle marketing, SEO, content, contact, and one controlled quote/search entry point — not full product workflows.",
    },
    {
      title: "API-dependent quote experience",
      text: "The only meaningful website-side integration is Get a Quote, which depends on a working API contract from the Trainsit dev team.",
    },
  ];

  const roleRows = [
    [
      "New visitor",
      "First-time user coming from Google, LinkedIn, conference, or direct referral",
      "Understand what Trainsit is, validate value, check route / quote path, then register or continue into platform",
    ],
    [
      "Evaluator",
      "Logistics lead, decision-maker, or enterprise buyer comparing vendors",
      "Check credibility, understand capabilities, see insurance / coverage / operations, then contact sales or continue deeper",
    ],
    [
      "Existing user",
      "User who already has an account on app.trainsit.com",
      "Reach dashboard or existing workflow as quickly as possible",
    ],
  ];

  const journeys = [
    {
      title: "Journey 1 — New visitor → platform registration / quote flow",
      steps: [
        "Homepage: hero, positioning, and value proposition",
        "How it works: 3-step explanation",
        "User clicks Get a Quote",
        "User enters origin, destination, and date",
        "If route exists: show route, ETA, and price → CTA to Book / continue on app.trainsit.com",
        "If no result: show unavailable route state → prompt contact / sales fallback",
        "On app.trainsit.com: unauthenticated user registers, authenticated user continues into dashboard or booking path",
      ],
    },
    {
      title: "Journey 2 — Evaluator → contact / sales conversation",
      steps: [
        "Homepage",
        "Solutions page: capabilities, coverage, insurance, operations",
        "About page: team, story, positioning",
        "FAQ",
        "Contact page or sales handoff",
      ],
    },
    {
      title: "Journey 3 — Existing user → dashboard",
      steps: [
        "User clicks Login in header",
        "User is redirected to app.trainsit.com",
        "App handles auth and dashboard access",
      ],
    },
  ];

  const phaseOneRows = [
    ["1", "Homepage — hero, value proposition, how it works, CTA", "16–20", "Primary marketing page"],
    ["2", "Solutions — platform capabilities, coverage, insurance, operations", "8–12", "Content needed from Trainsit"],
    ["3", "About — mission, team, story, approach", "6–8", ""],
    ["4", "Contact — form with anti-bot protection", "4–6", "Honeypot + reCAPTCHA or equivalent"],
    ["5", "Get a Quote — search form → API request → result state", "15–25", "Requires API contract from Trainsit dev team"],
    ["6", "FAQ — insurance, logistics, pricing, service", "4–6", "Content needed from Trainsit"],
    ["7", "Navigation + responsive behavior", "6–8", "Desktop and mobile"],
    ["8", "Style guide — colors, typography, core UI", "8–12", "Depends on updated logo / brand direction"],
    ["9", "SEO setup — metadata, sitemap, robots.txt", "3–4", ""],
    ["10", "GA4 setup", "2–3", ""],
    ["11", "Login / Dashboard buttons routed to app.trainsit.com", "2–3", ""],
    ["12", "Testing and QA", "6–10", ""],
    ["13", "Content migration / content entry", "4–8", ""],
  ];

  const outOfScopeRows = [
    ["Dashboard / Reports on the website", "Already exists on app.trainsit.com. No value in duplicating it on the website."],
    ["Booking on the website", "Requires auth, payment, and deeper product logic. Better routed into the app."],
    ["Logistics management on the website", "This is product scope, not website scope."],
    ["Registration / login inside Webflow website", "Too heavy and unnecessary if app already handles it correctly."],
  ];

  const sitemapRows = [
    ["/", "Homepage"],
    ["/solutions", "Solutions"],
    ["/about", "About"],
    ["/get-a-quote", "Get a Quote — main API-connected page"],
    ["/contact", "Contact"],
    ["/faq", "FAQ"],
    ["/blog", "Blog — Phase 2, structure only"],
    ["/privacy", "Privacy Policy"],
    ["/terms", "Terms"],
  ];

  const wireframes = [
    {
      title: "Homepage",
      blocks: [
        ["Header", "Logo · Navigation · Get a Quote CTA · Login link to app"],
        ["Hero", "Headline, subheadline, Get a Quote CTA, background visual"],
        ["How it works", "3-step process: Search → Compare → Book"],
        ["Benefits", "3–4 cards: Speed, Savings, Technology, Coverage"],
        ["Social proof", "Client logos or testimonials if available"],
        ["CTA", "Ready to ship? → /get-a-quote"],
        ["Footer", "Navigation, contacts, social, legal"],
      ],
    },
    {
      title: "Get a Quote",
      blocks: [
        ["Header", "Consistent site nav + CTA"],
        ["Intro", "Get a Quote — Find a route and compare pricing"],
        ["Form", "Origin · Destination · Date · Carrier optional · Search Routes"],
        ["States", "Empty / Loading / Result / No result / Error"],
        ["Result card", "Price, transit time, carrier, Book CTA to app"],
        ["Mini FAQ", "How pricing works, what is included"],
      ],
    },
    {
      title: "Solutions",
      blocks: [
        ["Intro", "Platform overview and buyer context"],
        ["Capabilities", "Route search, transparent pricing, booking, logistics, reports"],
        ["Details", "Insurance, carriers, geography, cargo types"],
        ["Comparison", "Before Trainsit vs With Trainsit"],
        ["CTA", "Route user to /get-a-quote"],
      ],
    },
    {
      title: "About / Contact",
      blocks: [
        ["About Hero", "Story, positioning, mission"],
        ["About Body", "Team, technology approach, CTA"],
        ["Contact Form", "Name, email, company, message, anti-bot protection"],
        ["Contact Details", "Direct contact options"],
      ],
    },
  ];

  const architectureLayers = [
    {
      title: "trainsit.com (Website)",
      text: "Webflow-based marketing layer responsible for content, SEO, analytics, contact, and Get a Quote UI.",
    },
    {
      title: "Get a Quote UI",
      text: "A JavaScript-powered form on the website that submits route / quote requests to Trainsit API.",
    },
    {
      title: "API Integration",
      text: "Website sends request to quote / route endpoint and renders success, no-result, and error states based on JSON response.",
    },
    {
      title: "app.trainsit.com",
      text: "React / Next.js application that owns dashboard, reports, booking, logistics management, registration, and login.",
    },
    {
      title: "Routing Outcome",
      text: "Book / Login / Dashboard actions redirect into app.trainsit.com, where auth and product logic continue.",
    },
  ];

  const apiNeedRows = [
    ["Endpoint URL", "Where the website should send the request"],
    ["Method (GET / POST)", "How the request must be sent"],
    ["Request parameters", "Fields, types, required vs optional values"],
    ["Authentication requirement", "API key, token, open access, or other auth mechanism"],
    ["Success response format", "JSON structure and sample response"],
    ["No-result response format", "What returns when no route is found"],
    ["Error response format", "Status codes and message structure"],
    ["CORS", "Allow website domain to call the API"],
    ["Rate limits", "Control request volume and abuse limits"],
  ];

  const decisionRows = [
    ["1", "Confirm website scope: marketing site + Get a Quote integration, with everything else staying in app", "Product Owner", "Before start"],
    ["2", "Confirm Webflow as website platform", "PO + Agency", "Before start"],
    ["3", "Provide API documentation for route / quote search", "Trainsit dev team", "Week 0–1"],
    ["4", "Share timeline for updated logo", "Trainsit", "Week 0"],
    ["5", "Agree feedback turnaround SLA (24–48h)", "All stakeholders", "Kickoff"],
    ["6", "Confirm app redirect behavior: logged in → dashboard, not logged in → registration / login", "Trainsit dev team", "Week 1"],
  ];

  const timeline = [
    "Week 0: decisions, API clarification, brand inputs",
    "Week 1–2: design and content structure",
    "Week 2–3: page build in Webflow",
    "Week 3–4: Get a Quote integration",
    "Week 4–5: testing, QA, launch",
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">Trainsit</div>
            <div className="text-sm text-white/70">Website Blueprint</div>
          </div>
          <nav className="hidden gap-6 md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/70 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="overview" className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-24">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
                Discovery output formatted as a website
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                A clear, validated website blueprint for Trainsit’s next-stage digital presence.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
                This blueprint translates the brief into a delivery-ready website structure: who the site serves,
                what journeys matter, which features belong in Phase 1, how the site should route users into app.trainsit.com,
                what the page structure should be, what API inputs are required, and what effort fits the initial rollout.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#roles" className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:opacity-90">
                  View roles
                </a>
                <a href="#estimate" className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition hover:border-white/30 hover:text-white">
                  Review estimate
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-cyan-950/30">
              <div className="mb-4 text-sm font-medium text-white/80">Confirmed strategic frame</div>
              <div className="space-y-4">
                {principles.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-sm font-medium text-white">{item.title}</div>
                    <div className="mt-2 text-sm leading-6 text-white/65">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="roles" className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <SectionHeader
              eyebrow="1. User Roles"
              title="Who uses the website and what each role needs from it."
            />
            <div className="mt-10">
              <SimpleTable columns={["Role", "Who this is", "What they want on the site"]} rows={roleRows} />
            </div>
          </div>
        </section>

        <section id="journeys" className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <SectionHeader
              eyebrow="2. Key Journeys"
              title="Primary paths through the website."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {journeys.map((item) => (
                <JourneyFlow key={item.title} title={item.title} steps={item.steps} />
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <SectionHeader
              eyebrow="3. Features"
              title="What is included in Phase 1 and what stays out."
            />
            <div className="mt-10 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
              <div>
                <div className="mb-4 text-lg font-semibold text-white">Included in Phase 1</div>
                <SimpleTable columns={["#", "Feature", "Hours", "Notes"]} rows={phaseOneRows} />
                <div className="mt-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-5 py-4 text-sm leading-7 text-white/75">
                  Phase 1 subtotal: <span className="font-semibold text-white">84–125 hours</span>
                </div>
              </div>
              <div>
                <div className="mb-4 text-lg font-semibold text-white">Out of scope for Phase 1</div>
                <SimpleTable columns={["Item", "Why it stays out"]} rows={outOfScopeRows} />
              </div>
            </div>
          </div>
        </section>

        <section id="sitemap" className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <SectionHeader
              eyebrow="4. Sitemap"
              title="Recommended website structure."
            />
            <div className="mt-10 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
              <SimpleTable columns={["Route", "Page"]} rows={sitemapRows} />
              <div className="space-y-6">
                <InfoCard title="Header navigation" tone="accent">
                  Home · Solutions · Get a Quote · About · Contact · Login → app.trainsit.com
                </InfoCard>
                <InfoCard title="Footer navigation">
                  All primary pages + FAQ + Privacy + Terms + social links.
                </InfoCard>
                <InfoCard title="Mobile navigation">
                  Burger menu. Get a Quote and Login should remain highly visible.
                </InfoCard>
              </div>
            </div>
          </div>
        </section>

        <section id="wireframes" className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <SectionHeader
              eyebrow="5. Wireframes"
              title="Core page structure before visual design polish."
              text="These previews show what belongs on each page and in what order."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {wireframes.map((item) => (
                <WireframePreview key={item.title} title={item.title} blocks={item.blocks} />
              ))}
            </div>
          </div>
        </section>

        <section id="architecture" className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <SectionHeader
              eyebrow="6. Technical Architecture"
              title="Website-to-app handoff model."
              text="The website remains a marketing and quote-entry layer. Product workflows stay on app.trainsit.com."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {architectureLayers.map((item) => (
                <InfoCard key={item.title} title={item.title} tone={item.title === "Get a Quote UI" ? "accent" : "default"}>
                  {item.text}
                </InfoCard>
              ))}
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_1fr]">
              <div>
                <div className="mb-4 text-lg font-semibold text-white">What Trainsit dev team must provide for Get a Quote</div>
                <SimpleTable columns={["Need", "Why it matters"]} rows={apiNeedRows} />
              </div>
              <div className="space-y-6">
                <InfoCard title="Recommended website platform" tone="accent">
                  Webflow is the leaner choice for this scope: fast visual build, managed hosting, CMS for FAQ/blog, and sufficient flexibility for one API-driven quote/search integration.
                </InfoCard>
                <InfoCard title="Division of responsibility">
                  trainsit.com owns marketing, content, SEO, analytics, contact, and Get a Quote UI. app.trainsit.com owns dashboard, reports, booking, logistics management, registration, and login.
                </InfoCard>
                <InfoCard title="Routing logic">
                  Quote results can be shown on the website, but booking and authenticated continuation should always route into the app.
                </InfoCard>
              </div>
            </div>
          </div>
        </section>

        <section id="estimate" className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <SectionHeader
              eyebrow="7. What must be decided before start"
              title="Pre-start decisions and rollout frame."
            />
            <div className="mt-10 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
              <SimpleTable columns={["#", "Decision", "Owner", "When"]} rows={decisionRows} />
              <div className="space-y-6">
                <InfoCard title="Estimate" tone="accent">
                  <span className="text-2xl font-semibold text-white">84–125 hours</span>
                </InfoCard>
                <InfoCard title="Timeline">
                  <div className="space-y-2">
                    {timeline.map((item) => (
                      <div key={item}>{item}</div>
                    ))}
                  </div>
                </InfoCard>
                <InfoCard title="Delivery assumption">
                  5 weeks is realistic only if scope stays lean, API clarifications arrive early, and stakeholder response time stays fast.
                </InfoCard>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
