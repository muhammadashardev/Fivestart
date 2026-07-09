import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function CtaBanner() {
  const badges = [
    { icon: '✓', label: 'NFPA 96 Certified' },
    { icon: '✓', label: 'Insured & Bonded' },
    { icon: '✓', label: '24/7 Available' },
    { icon: '✓', label: '1,500+ Kitchens' },
  ]

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0a1a4e_0%,#0d2266_40%,#0a1a4e_100%)]">

      {/* Glow blob — left */}
      <div className="absolute -top-[20%] -left-[10%] w-[55%] h-[140%] bg-[radial-gradient(ellipse,rgba(0,130,240,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* Glow blob — right */}
      <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[140%] bg-[radial-gradient(ellipse,rgba(0,82,200,0.14)_0%,transparent_70%)] pointer-events-none" />

      {/* Content container */}
      <motion.div
        className="relative z-10 max-w-[1200px] mx-auto px-6 py-18 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >

        {/* GET STARTED pill */}
        <motion.div
          className="inline-flex items-center gap-2 px-[18px] py-[6px] rounded-full border border-white/25 text-white/85 text-[11px] font-bold tracking-[1.8px] uppercase mb-7"
          variants={itemVariants}
        >
          GET STARTED
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="text-[clamp(28px,5vw,52px)] font-extrabold text-white leading-[1.12] tracking-tight max-w-[780px] mb-5"
          variants={itemVariants}
        >
          Keep Your Commercial Kitchen
          <br />
          Safe, Clean &amp; Inspection Ready
        </motion.h2>

        {/* Sub-description */}
        <motion.p
          className="text-[clamp(14px,2vw,17px)] text-white/65 leading-[1.7] max-w-[600px] mb-10"
          variants={itemVariants}
        >
          Partner with Five Star Hood &amp; Detail for reliable hood cleaning, exhaust maintenance, and
          commercial kitchen detailing services you can trust.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-3.5 justify-center mb-11"
          variants={itemVariants}
        >
          {/* Primary button */}
          <motion.a
            href="#schedule"
            className="inline-flex items-center gap-1.5 px-7 py-3.5 bg-[#0052cc] text-white font-bold text-[15px] rounded-full border-2 border-transparent no-underline"
            style={{ boxShadow: '0 4px 20px rgba(0,82,204,0.45)' }}
            whileHover={{
              y: -3,
              scale: 1.04,
              boxShadow: '0 12px 36px rgba(0,82,204,0.6)',
              backgroundColor: '#0047b8',
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            Schedule Your Service
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>

          {/* Outline button */}
          <motion.a
            href="#quote"
            className="inline-flex items-center px-7 py-3.5 bg-transparent text-white font-bold text-[15px] rounded-full border-2 border-white/55 no-underline"
            whileHover={{
              y: -3,
              scale: 1.04,
              backgroundColor: 'rgba(255,255,255,0.12)',
              borderColor: 'rgba(255,255,255,0.9)',
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            Request a Free Quote
          </motion.a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-x-8 gap-y-3 max-w-max lg:max-w-none mx-auto text-left"
          variants={itemVariants}
        >
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              className="flex items-center gap-2 text-white/75 text-[13px] font-semibold tracking-wide"
              whileHover={{ x: 3, color: 'rgba(255,255,255,1)' }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[rgba(0,130,240,0.3)] text-[#60c0ff] text-[11px] font-extrabold shrink-0">
                {badge.icon}
              </span>
              {badge.label}
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  )
}
