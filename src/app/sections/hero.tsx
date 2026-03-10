'use client'

import { motion } from 'framer-motion'

// ── Orchestrated timing constants ───────────────────────────────
const T = {
  gridReveal: 0,
  lineExpand: 0.3,
  labelAppear: 0.6,
  taglineL1: 0.5,
  taglineL2: 0.75,
  descriptor: 1.1,
  metaBar: 1.4,
  scrollCta: 1.7,
  orbPulse: 0.8,
}

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1]

// ── Animated grid background ────────────────────────────────────
function GridField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Horizontal rules */}
      {[20, 40, 60, 80].map((top, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px"
          style={{ top: `${top}%` }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.04 }}
          transition={{
            duration: 2,
            delay: T.gridReveal + i * 0.1,
            ease: EASE_EXPO,
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-b2-teal to-transparent" />
        </motion.div>
      ))}

      {/* Vertical rules */}
      {[25, 50, 75].map((left, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px"
          style={{ left: `${left}%` }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 0.03 }}
          transition={{
            duration: 2.5,
            delay: T.gridReveal + 0.2 + i * 0.15,
            ease: EASE_EXPO,
          }}
        >
          <div className="w-full h-full bg-gradient-to-b from-transparent via-b2-teal to-transparent" />
        </motion.div>
      ))}

      {/* Intersection dots */}
      {[20, 40, 60, 80].flatMap((top) =>
        [25, 50, 75].map((left) => (
          <motion.div
            key={`dot-${top}-${left}`}
            className="absolute w-1 h-1 rounded-full bg-b2-teal"
            style={{ top: `${top}%`, left: `${left}%`, transform: 'translate(-50%, -50%)' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 0.4, delay: T.gridReveal + 1.5 + Math.random() * 0.5 }}
          />
        ))
      )}
    </div>
  )
}

// ── Atmospheric orb ─────────────────────────────────────────────
function AtmosphericOrb() {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        top: '10%',
        right: '-5%',
        width: '60vw',
        height: '60vw',
        maxWidth: '800px',
        maxHeight: '800px',
      }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 3, delay: T.orbPulse, ease: 'easeOut' }}
    >
      {/* Primary glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 40% 40%, rgba(184,204,184,0.07) 0%, rgba(184,204,184,0.03) 30%, rgba(184,204,184,0.01) 50%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      {/* Secondary accent */}
      <div
        className="absolute rounded-full"
        style={{
          top: '20%',
          left: '15%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(184,204,184,0.05) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />
    </motion.div>
  )
}

// ── Right column: section index ──────────────────────────────────
function SectionIndex() {
  const sections = [
    { label: 'Enterprise AI', href: '#enterprise', num: '01' },
    { label: 'Gotcha', href: '#gotcha', num: '02' },
    { label: 'PLAYBACK', href: '#playback', num: '03' },
    { label: 'Content', href: '#content', num: '04' },
    { label: 'CoPilot', href: '#freelance', num: '05' },
  ]

  return (
    <motion.nav
      className="hidden lg:flex flex-col w-full max-w-xs"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: T.descriptor }}
    >
      {sections.map((section, i) => (
        <motion.a
          key={section.label}
          href={section.href}
          className="group flex items-center gap-4 py-3.5 border-b border-white/[0.04] hover:border-b2-teal/15 transition-colors duration-500"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: T.descriptor + 0.2 + i * 0.08,
            ease: EASE_EXPO,
          }}
        >
          <span className="text-xs text-b2-muted/50 tabular-nums font-[family-name:var(--font-b2-regular)]">
            {section.num}
          </span>
          <span className="text-[13px] tracking-[0.08em] uppercase text-b2-light/50 group-hover:text-b2-teal transition-colors duration-500 font-[family-name:var(--font-b2-regular)]">
            {section.label}
          </span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-40 group-hover:translate-x-0 transition-all duration-500"
          >
            <path
              d="M1 6h10M7 2l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-b2-teal"
            />
          </svg>
        </motion.a>
      ))}
    </motion.nav>
  )
}

// ── Scroll indicator ────────────────────────────────────────────
function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      className="group flex flex-col items-center gap-2 text-b2-muted/30 hover:text-b2-teal/60 transition-colors duration-700 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: T.scrollCta }}
    >
      <span className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-b2-regular)]">
        Explore
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="opacity-50 group-hover:opacity-100 transition-opacity duration-500"
        >
          <path
            d="M7 1v12M1 7l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.a>
  )
}

// ── Main Hero ───────────────────────────────────────────────────
export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden bg-b2-black">
      {/* ── Background layers ─────────────────────────────── */}
      <GridField />
      <AtmosphericOrb />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top edge gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(184,204,184,0.08) 20%, rgba(184,204,184,0.12) 50%, rgba(184,204,184,0.08) 80%, transparent 100%)',
        }}
      />

      {/* ── Content ───────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto w-full px-5 sm:px-6 pt-24 sm:pt-28 md:pt-36 pb-8 sm:pb-10 md:pb-16">
        {/* ── Upper zone: Label ──────────────────────────── */}
        <div className="flex-1 flex flex-col justify-center">
          {/* ── Middle zone: Split layout ────────────────── */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-12">
            {/* Left: Tagline + descriptor */}
            <div className="flex-1 max-w-3xl">
              {/* Tagline line 1 */}
              <div className="overflow-hidden">
                <motion.div
                  className="text-[clamp(2rem,7.5vw,6.5rem)] leading-[1.05] tracking-[-0.02em]"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    duration: 1,
                    delay: T.taglineL1,
                    ease: EASE_EXPO,
                  }}
                >
                  <span className="font-[family-name:var(--font-b2-thin)] text-b2-light/30">
                    DRIVEN BY
                  </span>
                  <br />
                  <span className="font-[family-name:var(--font-b2-black)] text-b2-light">
                    VALUES
                  </span>
                </motion.div>
              </div>

              {/* Tagline line 2 */}
              <div className="overflow-hidden mt-3 md:mt-5">
                <motion.div
                  className="text-[clamp(2rem,7.5vw,6.5rem)] leading-[1.05] tracking-[-0.02em]"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    duration: 1,
                    delay: T.taglineL2,
                    ease: EASE_EXPO,
                  }}
                >
                  <span className="font-[family-name:var(--font-b2-thin)] text-b2-light/30">
                    POWERED BY
                  </span>
                  <br />
                  <span className="font-[family-name:var(--font-b2-black)] text-b2-teal">
                    INTELLECT
                  </span>
                </motion.div>
              </div>

              {/* Accent rule under tagline */}
              <motion.div
                className="mt-6 sm:mt-8 md:mt-10 w-full max-w-md"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1.2,
                  delay: T.descriptor - 0.2,
                  ease: EASE_EXPO,
                }}
                style={{ transformOrigin: 'left' }}
              >
                <div className="h-px bg-gradient-to-r from-b2-teal/20 via-b2-teal/8 to-transparent" />
              </motion.div>

              {/* Descriptor text */}
              <motion.p
                className="mt-5 sm:mt-6 md:mt-8 text-[13px] md:text-[15px] leading-[1.7] text-b2-muted/70 max-w-md font-[family-name:var(--font-b2-regular)]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: T.descriptor,
                  ease: EASE_EXPO,
                }}
              >
                A multifaceted solutions innovator engineering enterprise AI infrastructure,
                developer tools, sports technology, and strategic partnerships since 2017.
              </motion.p>
            </div>

            {/* Right: Section index */}
            <SectionIndex />
          </div>
        </div>

        {/* ── Bottom zone: Meta bar ─────────────────────── */}
        <motion.div
          className="mt-auto pt-8 sm:pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: T.metaBar }}
        >
          <div className="h-px bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-transparent mb-5 sm:mb-6" />

          <div className="flex items-end justify-between">
            {/* Meta stats */}
            <div className="flex items-center gap-5 sm:gap-6 md:gap-10">
              {[
                { label: 'Founded', value: '2017' },
                { label: 'Reach', value: 'Global' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col gap-0.5 sm:gap-1"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: T.metaBar + 0.15 + i * 0.1,
                    ease: EASE_EXPO,
                  }}
                >
                  <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-b2-muted/50 font-[family-name:var(--font-b2-regular)]">
                    {stat.label}
                  </span>
                  <span className="text-xs sm:text-sm tracking-[0.1em] text-b2-light/80 font-[family-name:var(--font-b2-semibold)]">
                    {stat.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Scroll CTA */}
            <ScrollIndicator />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
