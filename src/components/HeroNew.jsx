import { motion } from 'framer-motion'

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.55, ease: 'easeOut', delay },
  }),
}

const cardIn = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

// ─── Stats Data ───────────────────────────────────────────────────────────────
const stats = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    value: '10+',
    label: 'Years Experience',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    value: '1,500+',
    label: 'Kitchens Cleaned',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    value: '5,000+',
    label: 'Service Visits',
    highlight: true,
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    value: '98%',
    label: 'Customer Satisfaction',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    value: '24/7',
    label: 'Emergency Response',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────
export default function HeroNew() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#f0f2f5] pb-[320px] md:pb-20"
    >
      {/* ── Hero Image Area ─────────────────────────────────────────── */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(380px, 54vw, 620px)',
          overflow: 'hidden',
          // extend the image below so cards overlap it
          marginBottom: '0',
        }}
      >
        {/* Background Image with animated entrance */}
        <motion.div
          style={{ position: 'absolute', inset: 0 }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/kitchen-hero-bg.png"
            alt="Professional kitchen technician inspecting exhaust hood"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
            draggable={false}
          />
          {/* Dark gradient overlay — heavier at bottom for card overlap area */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.48) 50%, rgba(0,0,0,0.65) 80%, rgba(0,0,0,0.72) 100%)',
            }}
          />
        </motion.div>

        {/* ── Hero Text Content — vertically centered in image area ── */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            // leave bottom 80px for card overlap zone
            height: 'calc(100% - 60px)',
            textAlign: 'center',
            padding: '0 16px',
          }}
        >
          {/* "OUR MOVEMENT" eyebrow */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            custom={0.2}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '18px',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '36px',
                height: '1px',
                background: 'rgba(255,255,255,0.6)',
              }}
            />
            <span
              style={{
                color: 'rgba(255,255,255,0.88)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontFamily: 'inherit',
              }}
            >
              OUR MOVEMENT
            </span>
            <span
              style={{
                display: 'block',
                width: '36px',
                height: '1px',
                background: 'rgba(255,255,255,0.6)',
              }}
            />
          </motion.div>

          {/* Main Heading — 2 line break matching Figma exactly */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.35}
            style={{
              color: '#ffffff',
              fontSize: 'clamp(28px, 4.8vw, 58px)',
              fontWeight: 800,
              lineHeight: 1.13,
              letterSpacing: '-0.025em',
              maxWidth: '700px',
              marginBottom: '30px',
              fontFamily: 'inherit',
              textAlign: 'center',
            }}
          >
            Protect Your Kitchen. Protect
            <br />
            Your Business.
          </motion.h1>

          {/* CTA Row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.5}
            style={{ display: 'flex', alignItems: 'center', gap: '14px' }}
          >
            {/* Primary Button */}
            <motion.a
              href="#quote"
              whileHover={{
                scale: 1.04,
                boxShadow: '0 10px 36px rgba(26,85,214,0.55)',
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '13px 28px',
                background: '#1a55d6',
                color: '#fff',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '14.5px',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                boxShadow: '0 4px 20px rgba(26,85,214,0.42)',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                whiteSpace: 'nowrap',
              }}
            >
              Book a Free Inspection
            </motion.a>

            {/* Play Button */}
            <motion.button
              whileHover={{
                scale: 1.1,
                background: 'rgba(255,255,255,0.22)',
                borderColor: 'rgba(255,255,255,0.85)',
              }}
              whileTap={{ scale: 0.93 }}
              aria-label="Watch video"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(30,30,30,0.72)',
                border: '2px solid rgba(255,255,255,0.6)',
                backdropFilter: 'blur(8px)',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <polygon points="7,4 21,12 7,20" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* ── Stats Cards Row — overlapping the hero image ─────────────── */}
      <div
        className="relative z-20 max-w-[1100px] mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 -mt-16 md:-mt-20"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={cardIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={0.15 + i * 0.08}
            whileHover={{
              y: -4,
              boxShadow: '0 12px 40px rgba(0,0,0,0.14)',
            }}
            className={`flex flex-col items-center justify-center p-6 sm:p-5 md:py-6 md:px-3 bg-white rounded-2xl cursor-default transition-[box-shadow] duration-300 ${
              i === 4 ? 'col-span-2 md:col-span-1' : ''
            }`}
            style={{
              boxShadow: '0 4px 24px rgba(0,0,0,0.09)',
            }}
          >
            {/* Icon */}
            <div
              style={{
                color: '#94a3b8',
                marginBottom: '10px',
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {stat.icon}
            </div>

            {/* Value */}
            <span
              style={{
                fontSize: 'clamp(20px, 2.8vw, 30px)',
                fontWeight: 800,
                color: stat.highlight ? '#0082f0' : '#0f1e4a',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                fontFamily: 'inherit',
                marginBottom: '5px',
                display: 'block',
              }}
            >
              {stat.value}
            </span>

            {/* Label */}
            <span
              style={{
                fontSize: '11.5px',
                fontWeight: 500,
                color: '#94a3b8',
                textAlign: 'center',
                letterSpacing: '0.01em',
                fontFamily: 'inherit',
                lineHeight: 1.4,
              }}
            >
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
