import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Free Inspection',
    description:
      'We evaluate your kitchen exhaust system and identify cleaning requirements.',
  },
  {
    number: '02',
    title: 'Customized Quote',
    description:
      'Receive a transparent estimate tailored to your facility.',
  },
  {
    number: '03',
    title: 'Professional Cleaning',
    description:
      'Our technicians perform a complete deep cleaning using NFPA methods.',
  },
  {
    number: '04',
    title: 'Final Inspection',
    description:
      'We ensure every component is cleaned properly and ready for inspection.',
  },
]

// Dotted line connector SVG between steps
function DottedConnector() {
  return (
    <div className="process-connector" aria-hidden="true">
      <svg
        width="80"
        height="2"
        viewBox="0 0 80 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="1"
          x2="80"
          y2="1"
          stroke="#b0c4de"
          strokeWidth="2"
          strokeDasharray="5 5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const lineVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="process"
      style={{
        background: '#f0f4f8',
        padding: '72px 0 80px',
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* Top label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: 'center',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#1a56db',
            marginBottom: '14px',
          }}
        >
          Our Process
        </motion.p>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08 }}
          style={{
            textAlign: 'center',
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 800,
            color: '#0f172a',
            lineHeight: 1.15,
            margin: '0 0 16px',
            letterSpacing: '-0.5px',
          }}
        >
          Our Simple 4-Step Process
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.14 }}
          style={{
            textAlign: 'center',
            fontSize: '15px',
            color: '#4b5563',
            maxWidth: '480px',
            margin: '0 auto 64px',
            lineHeight: 1.65,
          }}
        >
          From first contact to final inspection, we make professional kitchen
          cleaning effortless.
        </motion.p>

        {/* Steps row */}
        <div ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-0 max-w-md lg:max-w-none mx-auto"
          >
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex flex-col sm:flex-row lg:flex-row items-center sm:items-start lg:items-start w-full lg:w-auto lg:flex-1 last:lg:flex-none gap-4 sm:gap-6 lg:gap-0"
              >
                {/* Step card */}
                <motion.div
                  variants={stepVariants}
                  whileHover={{ y: -6, scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="flex flex-col items-center text-center sm:items-start sm:text-left lg:items-start lg:text-left w-full sm:w-auto shrink-0 lg:min-w-[160px] lg:max-w-[200px] cursor-default"
                >
                  {/* Circle */}
                  <div
                    className="w-[68px] h-[68px] rounded-full bg-gradient-to-br from-[#1a56db] to-[#003bb0] flex items-center justify-center mb-[22px] shadow-[0_4px_18px_0_rgba(26,86,219,0.22)] shrink-0"
                  >
                    <span
                      style={{
                        color: '#fff',
                        fontWeight: 800,
                        fontSize: '20px',
                        letterSpacing: '0.5px',
                        lineHeight: 1,
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base font-bold text-[#0f172a] m-0 mb-2 tracking-tight"
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[13.5px] text-[#64748b] leading-relaxed m-0 max-w-[200px] sm:max-w-[280px] lg:max-w-[175px]"
                  >
                    {step.description}
                  </p>
                </motion.div>

                {/* Dotted connector — only between steps, aligned to circle center */}
                {index < steps.length - 1 && (
                  <motion.div
                    variants={lineVariants}
                    className="hidden lg:flex flex-1 items-start pt-[33px] min-w-[40px] origin-left"
                  >
                    <svg
                      width="100%"
                      height="2"
                      viewBox="0 0 100 2"
                      preserveAspectRatio="none"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ display: 'block' }}
                    >
                      <line
                        x1="0"
                        y1="1"
                        x2="100"
                        y2="1"
                        stroke="#9eb3cc"
                        strokeWidth="2"
                        strokeDasharray="6 6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
