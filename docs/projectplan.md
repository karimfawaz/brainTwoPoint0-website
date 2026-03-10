# BRAIN 2.0 Website Redesign — Project Plan

## Objective
Consolidate the current multi-page website into a **single-page, Palantir-inspired website** using shadcn/ui components and the `/frontend-design` skill. Each section showcases a BRAIN 2.0 project or capability.

---

## Current State
- 6 pages: Home, About, Freelance, Content, Playback, Software (WIP), Contact
- No UI component library (raw Tailwind)
- Custom AvertaStd fonts + PT Sans Caption
- Color palette: Dark Grey (#231F20), Black (#101010), Teal/Sage (#B8CCB8), Light (#EBF2EB)
- Deployed on Netlify with Netlify Forms for contact

## Target State
- **Single-page website** with smooth scroll navigation
- **shadcn/ui** for reusable, professional components
- **Palantir-style** design: bold hero, dark theme, strong typography, section-based storytelling, cinematic feel
- **Sections** that tell the story of BRAIN 2.0's evolution and showcase each project

---

## Page Sections (Top to Bottom)

### 1. Hero Section
- Bold headline: "DRIVEN BY VALUES, POWERED BY INTELLECT"
- Subtext about BRAIN 2.0 as a multifaceted solutions innovator (est. 2017)
- Smooth scroll CTA to explore sections below
- Dark, cinematic aesthetic (Palantir-style)

### 2. About / Who We Are
- Brief company story: evolved from software firm to solutions innovator
- The "2.0-ing" philosophy — improving every venture
- Core values (Red Car Theory, Speed & Competition, No Selling) — presented as cards or a grid
- Team highlight (Karim Fawaz, Founder & CEO)

### 3. Enterprise & AI Infrastructure
- Headline about enterprise-grade AI and software contracts
- BRAIN 2.0 contracted by Uber AI Solutions; Karim deployed as Tech Lead on enterprise engagements
- Google engagement: assessing AI model output quality against ground truths, evaluating generated code for language best practices across multiple programming languages
- Framing: enterprise clients trust BRAIN 2.0 for high-stakes AI infrastructure work
- Professional, trust-building visual treatment

### 4. Gotcha
- Tagline: "Turn insights into action"
- What it is: developer-first contextual feedback platform
- Key capabilities: embeddable SDK, feedback/voting/polls/NPS, user segmentation, A/B test feedback
- Tech highlights: ~11KB SDK, TypeScript-first, npm package (`gotcha-feedback`)
- Link to gotcha.cx
- Visual: mock of the G button in action or screenshot

### 5. PLAYBACK
- Tagline: "Access the Moment" / "You PLAY, We BACK"
- What it is: sports technology solutions aggregator
- Key capabilities: player profiles, AI analytics, match footage, PLAYScanner, tournament services
- Global reach: 6 countries, expanding to 12+
- Team: Karim Fawaz, Abbas Kazmi, Jeff Barnes
- Link to playbacksports.ai

### 6. CONTENT 2.0
- Tagline: "Innovating Influence, Inspiring Growth"
- What it is: content-as-a-business management
- Live stats pulled from EnsembleData API (TikTok: @dsk95_, @more_dsk; Instagram: @dsk_95_)
- Aggregate metrics: Total Followers, Total Likes, Platforms Managed
- Services list (condensed)

### 7. FREELANCE 2.0
- Tagline: "Redefining Joint Efforts"
- What it is: integrated partnerships beyond traditional freelancing
- Partners: Pikasso, Citronniers, KAP
- Talent pool / services (condensed grid)

### 8. Contact / Get in Touch
- Inline contact form (keep Netlify Forms integration)
- Simplified fields: Name, Email, How can we help? (dropdown: General, Enterprise, Gotcha, PLAYBACK, Content, Freelance), Message
- Social links: Instagram, LinkedIn

---

## Tech Tasks (Step by Step)

### Phase 1: Setup shadcn/ui & Design System
- [x] 1.1 — Install and configure shadcn/ui (init, tailwind config, utils) — Upgraded to Next.js 16, React 19, Tailwind v4, shadcn v4 (base-nova)
- [x] 1.2 — Update Tailwind config with design tokens (colors, fonts, spacing) — CSS-based config with BRAIN 2.0 dark theme
- [x] 1.3 — Install needed shadcn components (Button, Card, Input, Textarea, Badge, Separator, Sheet)
- [x] 1.4 — Invoke `/frontend-design` and establish the visual direction (dark Palantir-style, typography scale, animation approach)
- [ ] 1.5 — Set up EnsembleData API integration for social stats
  - Sign up at ensembledata.com (free, no credit card)
  - Create Next.js API route to fetch stats for @dsk95_, @more_dsk (TikTok) and @dsk_95_ (Instagram)
  - Cache results (fetch on build or once daily) to avoid excessive API calls
  - Aggregate: total followers, total likes, platforms managed

### Phase 2: Layout & Navigation
- [x] 2.1 — Create new single-page layout in `src/app/page.tsx`
- [x] 2.2 — Build sticky navigation bar with smooth-scroll links to each section
- [x] 2.3 — Add mobile navigation (Sheet/drawer for hamburger menu)

### Phase 3: Build Sections (Top to Bottom)
- [x] 3.1 — Hero section
- [x] 3.2 — About / Who We Are section
- [x] 3.3 — Enterprise & AI Infrastructure section
- [x] 3.4 — Gotcha section
- [x] 3.5 — PLAYBACK section
- [x] 3.6 — CONTENT 2.0 section
- [x] 3.7 — FREELANCE 2.0 section
- [x] 3.8 — Contact section (port Netlify Forms integration)

### Phase 4: Polish & Cleanup
- [ ] 4.1 — Add scroll-based animations (Framer Motion intersection observer reveals)
- [ ] 4.2 — Responsive design pass (mobile, tablet, desktop)
- [ ] 4.3 — Remove old page routes (`/about`, `/freelance`, `/content`, `/playback`, `/software`, `/contact`)
- [ ] 4.4 — Clean up unused components and assets
- [ ] 4.5 — Update metadata/SEO for single-page structure
- [ ] 4.6 — Test Netlify Forms integration still works
- [ ] 4.7 — Final visual QA

---

## Design Principles
- **Dark, cinematic aesthetic** — inspired by Palantir's bold, dark-themed design
- **Section-based storytelling** — each section is a full viewport or near-full viewport
- **Strong typography** — leverage AvertaStd fonts (keep existing brand fonts)
- **Minimal but impactful animations** — scroll reveals, subtle parallax
- **Professional and trustworthy** — enterprise-grade feel (especially for the Google/Uber section)
- **Mobile-first** — every section must work beautifully on mobile

## Assets to Keep
- All existing fonts (AvertaStd variants, PLAYBACKFont)
- Team photos (karim, abbas, jeff)
- Partner logos (pikasso, citronniers, KAP)
- Brand logos (B2.0, PLAYBACK, freelance)
- Favicons and manifest

## Assets Needed
- Enterprise section imagery/icons (Google, Uber AI Solutions logos or abstract visuals)
- Gotcha visual (screenshot or illustration of the G button)
- PLAYBACK visual (screenshot of the platform or the globe)
- Section background treatments (gradients, subtle patterns)

## Open Questions for Karim
1. ~~What specific work was done with Google and Uber AI Solutions?~~ — ANSWERED: Contracted by Uber AI Solutions as Tech Lead, deployed on Google engagement assessing AI model code output quality
2. Any preferred screenshots or visuals for Gotcha and PLAYBACK sections?
3. ~~Should the CONTENT 2.0 stats be updated?~~ — DECIDED: Yes, pull live stats via EnsembleData API from @dsk95_, @more_dsk (TikTok) and @dsk_95_ (Instagram)
4. Any new partners to add beyond Pikasso, Citronniers, KAP?
5. ~~Should the contact form keep all current fields or simplify?~~ — DECIDED: Simplified to 4 fields (Name, Email, Dropdown, Message)
6. Any preference on section ordering? (current proposal: Hero → About → Enterprise → Gotcha → PLAYBACK → Content → Freelance → Contact)

---

## Review
_To be filled after implementation._
