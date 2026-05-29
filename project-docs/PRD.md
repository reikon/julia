# Julia: Product Requirements Document

**Codename:** julia
**Working title:** A trusted intelligence network for peptide therapies (a "Wikipedia for peptides")
**Phase:** V1, Lean Startup Validation Phase
**Status:** Draft
**Date:** 2026-05-29
**Strategy author:** Julia Kadar (Business Model Canvas, May 2026)

> Scope note: this PRD synthesizes the project strategy inputs (`project-docs/BMC.pdf`, `project-docs/torefine.md`) with the technical and architectural decisions in `CLAUDE.md`. Where the two touch (stack, repo layout, routing, design tokens), `CLAUDE.md` is the source of truth and this document only summarizes it.
>
> Compliance note: every part of this product is educational and informational. Nothing here is medical advice, a prescription, or human dosing guidance. See section 11.

---

## 1. Overview and vision

Julia is a trusted, structured, evidence-tiered reference for peptides. Today, someone trying to understand a peptide (what it is, what the research actually says, where credible providers are) has to wade through vendor blogspam, Reddit threads, and bro-science, then try to reconcile all of that against fragmented and hard-to-read clinical literature. Julia collapses that landscape into one organized, well-cited, neutral reference where clinical evidence, preclinical work, mechanistic theory, and anecdotal reports are clearly labeled and kept separate, and where users can discover information by symptom or goal rather than only by peptide name.

The strategic thesis is explicit: the marketplace is not the moat.

- **Trust is the moat.** Neutrality, citations, and clear separation of evidence quality are the brand.
- **Structured data is the moat.** A clean, queryable model of peptides, evidence, goals, and references is hard to copy and compounds over time.
- **Verification is the moat.** A rigorous, transparent process for vetting providers and vendors is defensible reputation, not a feature.
- **Network effects are the moat.** Consumers, providers, and vendors each make the platform more valuable to the others.

The difference being built here is the difference between a temporary affiliate website and a category-defining healthcare intelligence company.

---

## 2. Problem statement

The peptide and longevity space is growing fast, and its information layer is broken.

- **Vendor blogspam dominates search.** Searching a peptide name mostly returns blog posts written by vendors trying to sell that peptide. The incentive is conversion, not accuracy.
- **Community knowledge is high-signal but unstructured.** Reddit and forums contain real lived experience, but it is buried in rabbit holes, unverified, and impossible to weigh against actual evidence.
- **Bro-science fills the vacuum.** Confident, oversimplified claims spread faster than careful summaries of the literature.
- **Clinical data is fragmented and inaccessible.** Trial results, preclinical studies, and mechanism-of-action work are scattered across publications and written for specialists, not for the people making decisions.
- **There is no neutral aggregator.** No centralized, trustworthy place organizes clinical trial data, research papers, mechanisms, benefits and risks, and anecdotal experience side by side, filtered by what the user is actually trying to achieve.

The result: consumers, patients, and even clinicians cannot easily tell what is established, what is promising but preliminary, what is purely theoretical, and what is just someone's story.

---

## 3. Goals and non-goals

### Goals (validation phase)

1. Establish Julia as a credible, neutral, well-cited reference for peptides.
2. Ship a structured peptide research database and educational article set.
3. Enable symptom-based and goal-based discovery, not just name lookup.
4. Stand up a provider directory and a transparent verification framework.
5. Validate demand, SEO traction, user behavior, provider interest, and trust positioning before building heavier systems.
6. Build the structured-data and trust foundations that later phases (community, personalization, monetization) depend on.

### Non-goals (explicit, for MVP)

- **No prescriptions.** Julia does not prescribe, recommend a course of treatment, or facilitate prescribing.
- **No direct peptide sales.** Julia does not sell peptides.
- **No shipping, inventory, or fulfillment.** Julia holds no product and ships nothing.
- **No human dosing instructions.** Articles describe what the literature reports; they do not instruct people how to dose for human use.
- **No medical advice.** Content is educational only and is never framed as individualized clinical guidance.

These exclusions are deliberate. Prescriptions, sales, shipping, inventory, and fulfillment create massive legal, operational, and compliance complexity immediately and are not needed to validate the core hypotheses.

### Out of scope for now (deferred, not rejected)

Clinician-only forum, personalized dashboards and tracking, AI research assistant, premium memberships, and paid B2B listings. These are real parts of the long-term vision (section 6) but are not part of the validation MVP.

---

## 4. Target users and personas

### Primary

**1. The health-conscious consumer / biohacker**
Interested in longevity, recovery, cognition, fat loss, performance, sleep, and inflammation.
- Goals: understand which peptides relate to a goal, see what the evidence actually says, avoid getting scammed or misled.
- Pains: vendor-skewed search results, conflicting forum claims, no way to gauge evidence quality.

**2. The patient exploring peptide therapy**
Actively considering peptide therapy and looking for guidance, safety information, sourcing transparency, and credible providers.
- Goals: find trustworthy summaries, and find legitimate, verified providers and pharmacies.
- Pains: gray-market risk, fear of unsafe sources, difficulty separating hype from evidence.

**3. The clinician / longevity practitioner**
Functional medicine doctors, integrative physicians, hormone and longevity clinics, nurse practitioners, telehealth providers.
- Goals: stay current on emerging peptide research, be discoverable by high-intent patients, eventually collaborate with peers.
- Pains: literature is time-consuming to track; no professional, credible channel to be found or to discuss peptides seriously.

### Secondary

**4. The compounding pharmacy**
- Goals: visibility and trust positioning in a fast-growing market.
- Pains: hard to differentiate from questionable operators.

**5. The peptide vendor / manufacturer (compliance-focused)**
- Goals: credibility, reputation differentiation, and reaching a targeted high-intent audience.
- Pains: the category is full of bad actors, so legitimate operators are tarred by association.

**6. The researcher / medical professional**
- Goals: follow emerging studies, therapeutic innovation, and clinical discussion.
- Pains: fragmented literature; no shared neutral hub.

---

## 5. Value propositions per segment

### For consumers and patients
- Centralized, evidence-backed peptide education instead of fragmented Reddit and forum research.
- Transparent provider and vendor verification that reduces gray-market risk.
- Symptom-based and goal-based discovery that turns complex science into actionable understanding (without becoming advice).
- Clear, honest separation of clinical evidence, preclinical work, theoretical mechanisms, and anecdotal reports.

### For providers and practitioners
- A patient acquisition channel for peptide and longevity clinics, driven by high-intent search traffic.
- A credible place to be discoverable, with a verified badge and an optimized profile.
- (Later) clinician-only discussion and peer collaboration, plus research briefings.

### For vendors and pharmacies
- Increased trust and visibility through rigorous, transparent verification standards.
- Exposure to a targeted, high-intent audience.
- Reputation differentiation in a market full of questionable operators.

---

## 6. Scope: MVP vs later phases

### MVP (validation phase)

Per the lean recommendation, the MVP is the smallest set that validates demand, SEO traction, user behavior, provider interest, and trust positioning.

| Capability | MVP inclusion |
| --- | --- |
| Research database (structured peptide content) | Yes |
| Search and discovery engine (peptide, symptom, goal) | Yes |
| Provider directory | Yes |
| Verification system (providers and vendors) | Yes, framework plus initial manual process |
| Educational content (peptide articles, references) | Yes |
| Landing page and waitlist capture | Yes |
| Evidence-tiering model applied across content | Yes |

### Later phases

| Capability | Phase |
| --- | --- |
| Clinician-only discussion forum (verified access) | Later |
| Personalized dashboards, saved collections, symptom/goal tracking | Later |
| AI research assistant and AI study summarization/tagging | Later |
| Premium consumer memberships | Later |
| Paid B2B listings, featured placements, vendor verification subscriptions | Later |
| Newsletters, webinars, certification/course partnerships | Later |
| Affiliate/referral revenue with compliant telehealth and pharmacies | Later |

---

## 7. Key features (MVP detail)

### 7.1 Evidence-tiering model

Every claim and every reference is labeled by evidence quality, and tiers are kept visually and structurally separate. This is the heart of the trust moat.

| Tier | What it means | How it is shown |
| --- | --- | --- |
| Clinical | Human clinical studies and trials | Top tier; explicitly labeled, cited |
| Preclinical | Animal and in vitro studies | Clearly marked as not human evidence |
| Mechanistic / theoretical | Proposed mechanism of action, hypotheses | Marked as theory, not outcome evidence |
| Anecdotal | Community and self-reported experience (for example, Reddit sentiment) | Clearly fenced off as anecdote, never mixed with clinical claims |

Rules:
- Anecdotal content is never presented as, or adjacent to, clinical fact.
- Every tier carries citations or a clear source label.
- Absence of evidence is stated plainly rather than implied away.

### 7.2 Symptom-based and goal-based discovery

Users can start from what they are trying to understand, not only from a peptide name.
- Browse and filter by goal or symptom area (for example: recovery, cognition, fat loss, sleep, longevity, inflammation, mood, performance).
- Each goal surfaces the relevant peptides and, for each, the evidence by tier.
- Discovery presents information and links; it does not recommend a treatment or imply individualized suitability.

### 7.3 The peptide article template

Every peptide article follows one consistent, structured template so the content is queryable and comparable.

1. **Overview**: what the peptide is, classification, research status at a glance.
2. **Mechanism of action**: how it is proposed to work, labeled as mechanistic or theoretical where appropriate.
3. **Evidence by goal**: organized by goal or symptom, with each entry tagged by evidence tier (clinical, preclinical, mechanistic, anecdotal) and cited.
4. **Safety and considerations**: reported risks, side effects, and unknowns from the literature, framed informationally (not as dosing or advice).
5. **References**: full citations and links (clinical trial databases, research papers, scientific publishers).

Articles live as MDX in the Docusaurus wiki (section 8). Consistent frontmatter (peptide name, aliases, goals and tags, evidence tiers present, last reviewed date) makes the wiki queryable and feeds future search.

### 7.4 Provider and vendor verification framework

A transparent, documented process for vetting and badging providers, pharmacies, and vendors. Because reputation is the moat, the standard and its rationale are published, and the process is conservative by design.

- **Providers and clinicians:** identity and license verification (via third-party verification services in later phases), profile review.
- **Vendors and pharmacies:** compliance posture, transparency of sourcing, and (where applicable) third-party testing as criteria.
- **Output:** a clear verified badge plus an optimized public profile in the directory.
- **Transparency:** the criteria are visible to users so the badge means something. Verification status is auditable and revocable.
- MVP runs this as a documented manual process; automation and integrations come later.

### 7.5 Search

- Search across the peptide database by peptide name and aliases, by symptom, and by goal.
- Filter results by evidence tier so users can see, for example, only peptides with human clinical evidence for a given goal.
- Search is SEO-aware: content is structured and indexed so that high-intent queries (for example "BPC-157 studies", "peptides for brain fog", "best peptides for recovery") land on neutral, well-cited Julia pages rather than vendor blogs.
- MVP search can be served largely by the static wiki plus a lightweight index; semantic and AI search are later enhancements.

---

## 8. Information architecture and content model

Per `CLAUDE.md`, the product is two cooperating apps sharing one design language, served under a single origin.

- **The Docusaurus MDX wiki (`apps/docs`, served at `/doc`) is the core content product.** Peptide articles, goal and symptom landing pages, and category indexes live here as structured MDX. This is what carries the trust and SEO value, and it is where the evidence-tiered article template (7.3) is authored.
- **The Next.js + MUI app (`apps/web`) is the landing page and the home for future dynamic features.** In the MVP it is the marketing front door and waitlist capture. It is also where dynamic capabilities (richer search UI, accounts, tracking dashboards, tools) will live in later phases.

### How the content maps

| Concept | Where it lives | Notes |
| --- | --- | --- |
| Peptide article | `apps/docs` MDX, one file per peptide | Follows the article template; frontmatter carries name, aliases, goals, tiers, last reviewed |
| Goal / symptom page | `apps/docs` MDX index pages | Aggregates peptides relevant to a goal, grouped by evidence tier |
| Category / class index | `apps/docs` sidebar plus index pages | Browsable taxonomy of peptides |
| Provider directory | starts in `apps/docs` content or a simple `apps/web` view | Directory entries plus verification status; migrates to a dynamic `apps/web` feature as it grows |
| Search | static index over the wiki; richer UI in `apps/web` later | SEO-first in MVP |
| Landing and waitlist | `apps/web` | Marketing and demand validation |
| Disclaimers | shared pattern across both apps | Consistent educational and disclaimer posture everywhere (section 11) |

The structured frontmatter on wiki articles is the seed of the "structured data is the moat" thesis: it lets goal pages, filtering, and later dynamic search and an AI assistant all read from one clean model.

---

## 9. Tech architecture (summary)

Source of truth is `CLAUDE.md`. Summary only:

- **Monorepo:** Bun (1.3.x) workspaces orchestrated by Turborepo.
- **Web app (`apps/web`):** Next.js 16 (App Router) plus React 19 plus MUI 9, with `@mui/material-nextjs` for SSR and emotion integration. Landing page and future dynamic features.
- **Wiki (`apps/docs`):** Docusaurus 3.10, MDX peptide articles. The core content product.
- **Design tokens (`packages/tokens`):** the single cross-framework primitive. Emits `token.css` (CSS custom properties) plus typed TS objects. MUI maps tokens into its theme; Docusaurus overrides Infima variables with the same tokens. Never hardcode color or spacing in an app. This keeps the landing page and wiki visually identical.
- **Routing:** one origin. `apps/web` on `:3000` is the only door; `apps/docs` runs on `:3001` with `baseUrl: '/doc/'`; Next.js rewrites `/doc/:path*` to it. Dev mirrors production.
- **Quality gates:** TypeScript strict everywhere, Vitest, ESLint (flat config) plus Prettier, Husky plus lint-staged, commitlint (Conventional Commits). Non-negotiable and enforced automatically.
- **Hosting:** Vercel, deferred. Local dev first.

---

## 10. Success metrics (validation phase)

The MVP exists to validate demand, SEO traction, user behavior, provider interest, and trust positioning. Suggested measures:

| Area | Metric |
| --- | --- |
| SEO traction | Indexed pages, organic impressions and clicks, rankings for target queries (for example "BPC-157 studies", "peptides for brain fog"), referring domains |
| Demand | Waitlist signups and signup rate; growth rate week over week |
| Engagement | Pages per session, time on article, goal-page to article click-through, returning visitors, newsletter opt-in rate |
| Discovery usage | Share of sessions that use symptom or goal discovery or search; filter-by-evidence-tier usage |
| Provider interest | Inbound provider and clinic inquiries; applications to be listed or verified |
| Vendor and pharmacy interest | Inbound verification inquiries |
| Trust signals | Qualitative feedback, citations of Julia by third parties, low rate of content complaints and corrections |

Targets are to be set by the team at phase kickoff; the validation bar is "clear, repeatable signal across SEO, waitlist, and provider interest" rather than a fixed number.

---

## 11. Risks and compliance

This is the highest-sensitivity area of the project. Compliance is a first-class product requirement, not an afterthought.

### Posture (non-negotiable)

- **All content is educational and informational.** It describes what the research literature reports.
- **Nothing is medical advice.** No individualized clinical guidance.
- **No human dosing instructions.** Articles may report what studies used, clearly attributed to the source, but never as instructions for human use.
- **No prescriptions, no sales, no fulfillment** (see section 3).
- **A clear, consistent disclaimer pattern** appears on clinical content across both apps: content is for informational purposes only, is not medical advice, and readers should consult a qualified professional.

### Key risks

| Risk | Description | Mitigation |
| --- | --- | --- |
| FDA and regulatory exposure | Regulatory crackdowns on peptide-related businesses | Stay strictly informational; no sales, prescriptions, or dosing; legal and regulatory review as a key activity |
| Medical-claims liability | Legal exposure from claims that read as medical advice or efficacy guarantees | Evidence-tiering; cautious language; disclaimers; legal counsel review of content patterns |
| Misinformation risk | Inaccurate or overstated content harming users or the brand | Citation requirement, evidence tiers, scientific reviewers and medical advisors, correction process, misinformation monitoring |
| Anecdote-as-fact | Community sentiment being read as clinical evidence | Strict structural and visual separation of the anecdotal tier |
| Verification reputation risk | A low-quality vendor or provider slipping through verification damages the core trust asset | Conservative, transparent, auditable, revocable verification; published criteria; manual review in MVP |
| Scientific credibility | Failure to earn trust of clinicians and researchers | Medical advisors and reviewers; rigorous citation; neutral tone |
| Curation and moderation effort | High ongoing effort to keep data accurate | Structured templates and tooling; staged rollout of content; later AI-assisted summarization with human review |
| Commoditization | Competitors copying surface-level directory features | Compete on the moats (trust, structured data, verification, network effects), not on the directory veneer |

---

## 12. Roadmap and phases

### Phase 0: Validation foundations
- Figma wireframes for landing, wiki, discovery, and directory.
- Initial educational content set and the evidence-tiered article template, authored as MDX.
- Landing page with waitlist capture.
- SEO foundations: structured content, target-query pages, indexing.
- Social and content presence to drive early traffic.

### Phase 1: MVP
- Structured research database across an expanded peptide set.
- Search and symptom or goal discovery.
- Provider directory with the verification framework and an initial manual verification process.
- Consistent disclaimer and compliance pattern across both apps.
- Vercel deployment wiring (per `CLAUDE.md`, deferred until this point).

### Phase 2 and beyond: community, personalization, monetization
- Clinician-only forum with verified access.
- Personalized dashboards, saved collections, symptom and goal tracking, newsletters.
- AI research assistant and AI study summarization and tagging (with human review).
- Premium consumer memberships and professional clinician subscriptions.
- B2B revenue: paid provider listings, featured placements, vendor and pharmacy verification subscriptions.
- Compliant affiliate and referral partnerships; webinars and certification or course partnerships.
- Verification automation and identity or license verification integrations.

---

## 13. Open questions

1. **Verification standard:** what exactly are the published criteria for provider, pharmacy, and vendor verification, and who signs off? What triggers revocation?
2. **Medical and scientific review:** who are the medical advisors and reviewers, and what is the review workflow before an article is published or marked "reviewed"?
3. **Content sourcing and pace:** how is the initial peptide set chosen and prioritized, and what is the sustainable content cadence? How much, if any, AI assistance in summarization (with human review) is acceptable in early phases?
4. **Anecdotal data sourcing:** how is community and Reddit sentiment collected, attributed, and kept clearly fenced from clinical claims, including any licensing or attribution constraints?
5. **Legal review cadence:** who is the healthcare legal counsel, and what content patterns and disclaimers must be reviewed and locked before launch?
6. **Provider directory data model:** does the directory start as wiki content or as a dynamic `apps/web` feature, and what is the migration trigger?
7. **Geographic and regulatory scope:** which jurisdictions does the validation phase target, given differing peptide regulations?
8. **Monetization timing:** when do B2B listings and memberships turn on without compromising the neutrality that is the brand?
9. **Waitlist-to-product conversion:** what is the plan to convert waitlist interest into active, retained users at MVP launch?
10. **Team:** solo build versus co-founder, and what roles (medical advisor, engineer, compliance) are needed first?
