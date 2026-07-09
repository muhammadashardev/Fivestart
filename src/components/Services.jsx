import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

/* ─── Icons ──────────────────────────────────────────────────────── */
const IconCircleX = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" className="w-7 h-7">
    <circle cx="12" cy="12" r="9" />
    <path d="M15 9l-6 6M9 9l6 6" strokeLinecap="round" />
  </svg>
)

const IconFan = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" className="w-7 h-7">
    <path d="M12 12c0-2.2 1.8-4 4-4a4 4 0 010 8 4 4 0 01-4-4z" />
    <path d="M12 12c-2.2 0-4-1.8-4-4a4 4 0 018 0 4 4 0 01-4 4z" />
    <path d="M12 12c0 2.2-1.8 4-4 4a4 4 0 010-8 4 4 0 014 4z" />
    <path d="M12 12c2.2 0 4 1.8 4 4a4 4 0 01-8 0 4 4 0 014-4z" />
  </svg>
)

const IconSpray = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" className="w-7 h-7">
    <path d="M12 2v4M8 4l2 2M16 4l-2 2" strokeLinecap="round" />
    <rect x="7" y="8" width="10" height="5" rx="2" />
    <path d="M9 13v5M12 13v5M15 13v5" strokeLinecap="round" />
    <path d="M7 18h10" strokeLinecap="round" />
  </svg>
)

const IconCalendar = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" className="w-7 h-7">
    <rect x="3" y="4" width="18" height="18" rx="3" />
    <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" strokeLinecap="round" strokeWidth="2.5" />
  </svg>
)

function ServiceIcon({ type, color }) {
  if (type === 'fan') return <IconFan color={color} />
  if (type === 'spray') return <IconSpray color={color} />
  if (type === 'calendar') return <IconCalendar color={color} />
  return <IconCircleX color={color} />
}

/* ─── Service Data ────────────────────────────────────────────────── */
const services = [
  {
    id: 'hood-cleaning',
    title: 'Hood Cleaning',
    description:
      'Remove heavy grease buildup from kitchen hoods to improve airflow and reduce fire hazards.',
    featured: true,
    icon: 'circle-x',
  },
  {
    id: 'exhaust-system-cleaning',
    title: 'Exhaust System Cleaning',
    description:
      'Complete cleaning of exhaust ducts and ventilation systems for maximum efficiency.',
    featured: false,
    icon: 'fan',
  },
  {
    id: 'exhaust-fan-cleaning',
    title: 'Exhaust Fan Cleaning',
    description:
      'Maintain proper airflow and extend the life of your rooftop exhaust fans.',
    featured: false,
    icon: 'circle-x',
  },
  {
    id: 'equipment-detailing',
    title: 'Equipment Detailing',
    description:
      'Deep cleaning for grills, fryers, ovens, ranges, and stainless-steel equipment.',
    featured: false,
    icon: 'circle-x',
  },
  {
    id: 'pressure-washing',
    title: 'Pressure Washing',
    description:
      'Professional exterior cleaning for sidewalks, dumpster pads, and loading areas.',
    featured: false,
    icon: 'spray',
  },
  {
    id: 'preventive-maintenance',
    title: 'Preventive Maintenance',
    description:
      'Scheduled maintenance plans that keep your kitchen inspection-ready year-round.',
    featured: false,
    icon: 'calendar',
  },
]

/* ─── Animation Variants ─────────────────────────────────────────── */
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18 },
  },
}

/* ─── Main Section ───────────────────────────────────────────────── */
export default function Services() {
  return (
    <section id="services" className="bg-[#f5f7fb] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={sectionVariants}
        >
          <motion.p
            className="text-[11px] sm:text-[12px] font-bold tracking-[0.18em] text-[#003bb0] uppercase mb-3"
            variants={headerVariants}
          >
            Our Services
          </motion.p>
          <motion.h2
            className="text-[30px] sm:text-[38px] lg:text-[44px] font-extrabold text-slate-900 leading-[1.12] tracking-tight max-w-2xl mx-auto"
            variants={headerVariants}
          >
            Complete Commercial Kitchen
            <br className="hidden sm:inline" /> Cleaning Solutions
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Card ───────────────────────────────────────────────────────── */
function ServiceCard({ service }) {
  const isFeatured = service.featured

  if (isFeatured) {
    return (
      <motion.div
        variants={cardVariants}
        whileHover={{ y: -6, scale: 1.015 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        className="rounded-[1.6rem] p-7 flex flex-col cursor-default select-none bg-[#003bb0] text-white shadow-2xl shadow-blue-900/25"
      >
        {/* Icon bubble */}
        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 shrink-0 bg-white/20">
          <ServiceIcon type={service.icon} color="#ffffff" />
        </div>
        <h3 className="text-[17px] font-bold mb-2.5 leading-snug text-white">
          {service.title}
        </h3>
        <p className="text-[14px] leading-relaxed flex-1 mb-6 text-blue-100/90">
          {service.description}
        </p>
        <a
          href={'#' + service.id}
          className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold group transition-colors duration-200 text-white hover:text-blue-200"
        >
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="rounded-[1.6rem] p-7 flex flex-col cursor-default select-none bg-white border border-slate-100 shadow-md shadow-slate-100/60 relative overflow-hidden group"
    >
      {/* Hover gradient overlay: bottom → top */}
      <div
        className="absolute inset-0 rounded-[1.6rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #003bb0 0%, #0055e0 100%)',
        }}
      />

      {/* Icon bubble */}
      <div className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center mb-5 shrink-0 bg-[#edf2fc] group-hover:bg-white/20 transition-colors duration-500">
        <span className="block group-hover:hidden">
          <ServiceIcon type={service.icon} color="#003bb0" />
        </span>
        <span className="hidden group-hover:block">
          <ServiceIcon type={service.icon} color="#ffffff" />
        </span>
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-[17px] font-bold mb-2.5 leading-snug text-slate-900 group-hover:text-white transition-colors duration-500">
        {service.title}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-[14px] leading-relaxed flex-1 mb-6 text-slate-500 group-hover:text-blue-100/90 transition-colors duration-500">
        {service.description}
      </p>

      {/* Learn More */}
      <a
        href={'#' + service.id}
        className="relative z-10 inline-flex items-center gap-1.5 text-[13.5px] font-semibold group/link transition-colors duration-500 text-[#003bb0] group-hover:text-white"
      >
        Learn More
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
      </a>
    </motion.div>
  )
}

