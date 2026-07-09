import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ScanEye, Settings, ArrowRight } from 'lucide-react'

export default function About() {
  const containerRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    
    // Normalized coordinates from -0.5 to 0.5
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    
    containerRef.current.style.setProperty('--x', x.toString())
    containerRef.current.style.setProperty('--y', y.toString())
  }

  const handleMouseLeave = () => {
    if (!containerRef.current) return
    containerRef.current.style.setProperty('--x', '0')
    containerRef.current.style.setProperty('--y', '0')
  }

  // Animation variants for staggered load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 15 },
    },
  }

  const collageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="about" className="relative overflow-hidden bg-white py-16 lg:py-28 border-t border-slate-50">
      {/* Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#0082f0]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-[#003bb0]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive 3D Parallax Collage */}
          <motion.div 
            className="lg:col-span-6 order-2 lg:order-1 flex justify-center items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={collageVariants}
          >
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[540px] aspect-[1.1] sm:aspect-[1.15] lg:aspect-[1.1] perspective-1000 preserve-3d cursor-pointer select-none"
            >
              {/* Outer 3D Rotatable Wrapper */}
              <div
                className="w-full h-full relative preserve-3d"
                style={{
                  transform: 'rotateX(calc(var(--y, 0) * -15deg)) rotateY(calc(var(--x, 0) * 15deg))',
                  transition: 'transform 0.25s cubic-bezier(0.1, 1, 0.1, 1)',
                }}
              >
                {/* 1. Top-Left Image (topcard.png) */}
                <div
                  className="absolute top-[4%] left-[4%] w-[58%] h-[68%] rounded-[2.25rem] overflow-hidden shadow-2xl border border-slate-100/50 group"
                  style={{
                    transform: 'translateZ(20px)',
                    transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateZ(20px) translateY(-8px) scale(1.03)'
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,59,176,0.18), 0 8px 20px rgba(0,0,0,0.12)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateZ(20px)'
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  <img
                    src="/topcard.png"
                    alt="Kitchen cleaner cleaning kitchen exhaust hood"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay shimmer on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#003bb0]/0 via-white/0 to-white/0 group-hover:from-[#003bb0]/10 group-hover:via-white/5 group-hover:to-white/0 transition-all duration-500 pointer-events-none" />
                </div>

                {/* 2. Bottom-Right Image (bottomcard.png) */}
                <div
                  className="absolute bottom-[4%] right-[4%] w-[58%] h-[58%] rounded-[2.25rem] overflow-hidden shadow-2xl border-[6px] border-white z-10 group"
                  style={{
                    transform: 'translateZ(45px)',
                    transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateZ(45px) translateY(-8px) scale(1.03)'
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,59,176,0.18), 0 8px 20px rgba(0,0,0,0.12)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateZ(45px)'
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  <img
                    src="/bottomcard.png"
                    alt="Two kitchen cleaners cleaning hood"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay shimmer on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tl from-[#003bb0]/0 via-white/0 to-white/0 group-hover:from-[#003bb0]/10 group-hover:via-white/5 group-hover:to-white/0 transition-all duration-500 pointer-events-none" />
                </div>

                {/* 3. Floating Stats Card 1: 1,500+ Kitchens Cleaned */}
                <div
                  className="absolute top-[18%] right-[2%] w-[38%] bg-white/95 backdrop-blur-sm rounded-[1.75rem] p-4 sm:p-5 border border-slate-100/60 z-20 text-center animate-float-slow cursor-pointer"
                  style={{
                    transform: 'translateZ(80px)',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.08)',
                    transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateZ(80px) translateY(-10px) scale(1.08)'
                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,59,176,0.2), 0 6px 16px rgba(0,0,0,0.1)'
                    e.currentTarget.style.borderColor = 'rgba(0,75,202,0.3)'
                    e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 60%, #eef4ff)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateZ(80px)'
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.08)'
                    e.currentTarget.style.borderColor = ''
                    e.currentTarget.style.background = ''
                  }}
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#003bb0] tracking-tight">
                    1,500+
                  </div>
                  <div className="text-[11px] sm:text-[13px] font-bold text-slate-500 mt-1 leading-tight">
                    Kitchens Cleaned
                  </div>
                </div>

                {/* 4. Floating Stats Card 2: 98% Satisfaction Rate */}
                <div
                  className="absolute bottom-[10%] left-[2%] w-[38%] bg-[#003bb0] rounded-[1.75rem] p-2.5 sm:p-3 z-20 animate-float-delayed cursor-pointer"
                  style={{
                    transform: 'translateZ(65px)',
                    boxShadow: '0 15px 30px rgba(0,59,176,0.2)',
                    transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateZ(65px) translateY(-10px) scale(1.08)'
                    e.currentTarget.style.boxShadow = '0 28px 55px rgba(0,59,176,0.38), 0 6px 18px rgba(0,0,0,0.15)'
                    e.currentTarget.style.background = 'linear-gradient(135deg, #0052e0, #003bb0)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateZ(65px)'
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,59,176,0.2)'
                    e.currentTarget.style.background = ''
                  }}
                >
                  <div className="bg-[#1e5dc2]/80 backdrop-blur-sm rounded-[1.25rem] p-3 sm:p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      98%
                    </div>
                    <div className="text-[11px] sm:text-[13px] font-bold text-blue-100 mt-1 leading-tight">
                      Satisfaction Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copywriting & Informational Cards */}
          <motion.div
            className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            {/* Title */}
            <motion.h1
              className="text-[36px] sm:text-[48px] lg:text-[52px] leading-[1.1] font-extrabold tracking-tight text-slate-900 mb-6 font-sans"
              variants={itemVariants}
            >
              Commercial Kitchen <br className="hidden sm:inline" />
              Cleaning Experts You Can 
              Trust
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-[15px] sm:text-[16px] text-slate-500 leading-relaxed mb-8 max-w-xl"
              variants={itemVariants}
            >
              At Five Star Hood & Detail, we specialize in professional hood cleaning,
              exhaust cleaning, grease removal, kitchen equipment detailing, and preventive
              maintenance for commercial kitchens of every size.
            </motion.p>

            {/* Two Cards: Expertise & Our Vision */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8"
              variants={itemVariants}
            >
              {/* Expertise Card */}
              <motion.div
                className="bg-white border border-slate-100 rounded-3xl p-6 shadow-md shadow-slate-100/50 flex flex-col items-start hover:shadow-lg transition-shadow duration-300 cursor-default"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#004bca] flex items-center justify-center text-white mb-5 shadow-md shadow-blue-500/20">
                  <ScanEye className="w-6 h-6" />
                </div>
                <h3 className="text-[18px] font-bold text-slate-900 mb-2">
                  Expertise
                </h3>
                <p className="text-[14px] text-slate-500 leading-relaxed">
                  With experienced technicians, advanced equipment, and industry-certified cleaning methods
                </p>
              </motion.div>

              {/* Our Vision Card */}
              <motion.div
                className="bg-white border border-slate-100 rounded-3xl p-6 shadow-md shadow-slate-100/50 flex flex-col items-start hover:shadow-lg transition-shadow duration-300 cursor-default"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#004bca] flex items-center justify-center text-white mb-5 shadow-md shadow-blue-500/20">
                  <Settings className="w-6 h-6 animate-spin-slow" />
                </div>
                <h3 className="text-[18px] font-bold text-slate-900 mb-2">
                  Our Vision
                </h3>
                <p className="text-[14px] text-slate-500 leading-relaxed">
                  we help businesses reduce fire risks, improve ventilation, extend equipment life, and maintain health and safety compliance.
                </p>
              </motion.div>
            </motion.div>

            {/* Explore Button */}
            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-[15px] font-bold text-white bg-[#003bb0] rounded-full shadow-lg shadow-blue-900/10 hover:bg-[#003bb0]/95 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 group"
              >
                Explore More About Us
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
