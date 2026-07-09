import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 15 },
  },
}

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-white py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* ── LEFT: Heading block (sticky) ── */}
          <motion.div
            className="lg:col-span-4 flex flex-col justify-start pt-2 lg:sticky lg:top-24 lg:self-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-[38px] sm:text-[44px] lg:text-[48px] leading-[1.1] font-extrabold tracking-tight text-slate-900 mb-5 font-sans"
            >
              Why<br />Choose This<br />
              <span className="text-slate-900">FIVESTAR</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-[15px] sm:text-[16px] text-slate-500 leading-relaxed font-medium max-w-xs"
            >
              Trusted Commercial Kitchen Cleaning Experts
            </motion.p>
          </motion.div>

          {/* ── RIGHT: 2x2 Card Grid (scrollable) ── */}
          <motion.div
            className="lg:col-span-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

              {/* Card 1 – NFPA (top-left, tall) */}
              <motion.div
                variants={itemVariants}
                className="relative rounded-[1.75rem] overflow-hidden aspect-[4/5] group cursor-default"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <img
                  src="/nfpa_card.png"
                  alt="NFPA Compliant Cleaning"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-white/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
                    INDUSTRY FIRE SAFETY
                  </span>
                </div>

                {/* Bottom Title */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="text-white text-[18px] sm:text-[20px] font-bold leading-tight">
                    NFPA Compliant<br />Cleaning
                  </h3>
                </div>
              </motion.div>

              {/* Card 2 – Certified Technicians (top-right) */}
              <motion.div
                variants={itemVariants}
                className="relative rounded-[1.75rem] overflow-hidden aspect-[4/5] group cursor-default"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <img
                  src="/certified_tech_card.png"
                  alt="Certified & Experienced Technicians"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 to-black/50" />

                {/* Top Title */}
                <div className="absolute top-0 left-0 right-0 p-5 z-10">
                  <h3 className="text-white text-[18px] sm:text-[20px] font-bold leading-tight">
                    Certified &<br />Experienced<br />Technicians
                  </h3>
                </div>

                {/* Bottom Description */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <p className="text-white/85 text-[12px] sm:text-[13px] font-medium leading-snug">
                    Our skilled technicians use professional equipment
                  </p>
                </div>
              </motion.div>

              {/* Card 3 – Fire Risk Prevention (bottom-left, wider aspect) */}
              <motion.div
                variants={itemVariants}
                className="relative rounded-[1.75rem] overflow-hidden aspect-[4/3] group cursor-default"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <img
                  src="/fire_risk_card.png"
                  alt="Fire Risk Prevention"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-white/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block" />
                    FIRE RISK PREVENTION
                  </span>
                </div>

                {/* Bottom Title */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="text-white text-[16px] sm:text-[18px] font-bold leading-snug">
                    Reduce the risk of grease fires and improve kitchen safety
                  </h3>
                </div>
              </motion.div>

              {/* Card 4 – Detailed Inspection Reports (bottom-right) */}
              <motion.div
                variants={itemVariants}
                className="relative rounded-[1.75rem] overflow-hidden aspect-[4/3] group cursor-default"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <img
                  src="/inspection_report_card.png"
                  alt="Gives Detailed Inspection Reports"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/60" />

                {/* Top Title */}
                <div className="absolute top-0 left-0 right-0 p-5 z-10">
                  <h3 className="text-white text-[16px] sm:text-[18px] font-bold leading-snug">
                    Gives Detailed<br />Inspection Reports
                  </h3>
                </div>

                {/* Bottom Description */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <p className="text-white/80 text-[11px] sm:text-[12px] font-medium leading-snug">
                    Receive before-and-after photos, service documentation, and maintenance...
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
