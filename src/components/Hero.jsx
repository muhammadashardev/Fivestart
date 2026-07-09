import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay },
  }),
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-20">
      {/* Premium Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#0082f0]/6 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-[#0082f0]/8 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* New Season Arrivals Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ebf3fe] text-[#0066cc] font-semibold text-[13px] tracking-wide mb-6"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              <span className="w-2 h-2 rounded-full bg-[#0066cc]"></span>
              NEW SEASON ARRIVALS
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.08] font-extrabold tracking-tight text-gray-900 mb-6 font-sans"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
            >
              <span className="block">Safer Kitchens.</span>
              <span className="block text-brand-blue">Cleaner Systems.</span>
              <span className="block">Full Performance.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-[17px] md:text-[19px] text-gray-500 leading-relaxed max-w-xl mb-8"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.35}
            >
              Professional commercial kitchen exhaust cleaning designed to improve fire safety
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.45}
            >
              <motion.a
                href="#quote"
                className="inline-flex items-center justify-center px-9 py-4.5 text-[15px] font-bold text-white bg-brand-dark-blue rounded-full shadow-md"
                whileHover={{ y: -3, scale: 1.03, boxShadow: '0 12px 32px rgba(0,59,176,0.35)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                Request a Quote
              </motion.a>
              <motion.a
                href="#process"
                className="inline-flex items-center justify-center px-9 py-4.5 text-[15px] font-bold text-gray-950 bg-white border-2 border-gray-950 rounded-full"
                whileHover={{ y: -3, scale: 1.03, backgroundColor: '#f9fafb' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                View Our Process
              </motion.a>
            </motion.div>

            {/* Trust Indicators / Badges */}
            <motion.div
              className="flex flex-wrap items-center gap-x-8 gap-y-4 text-gray-500 text-[14px] font-semibold"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.55}
            >
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ x: 3, color: '#003bb0' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <svg
                  className="w-5 h-5 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.5"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3"
                  />
                </svg>
                <span>24/7 Emergency Support</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ x: 3, color: '#003bb0' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <svg
                  className="w-5 h-5 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <span>Certified Technicians</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ x: 3, color: '#003bb0' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <svg
                  className="w-5 h-5 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Inspection Reports</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Hero Image */}
          <motion.div
            className="lg:col-span-5 relative w-full flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="relative w-full max-w-[550px] lg:max-w-none overflow-hidden aspect-[780/830]">
              <img
                src="/HERORIGHT.png"
                alt="Safer Kitchens exhaust cleaning illustration"
                className="absolute top-0 right-0 h-full w-[123%] max-w-none object-cover object-right select-none pointer-events-none z-0"
              />
              {/* Premium radial/linear gradient blend overlay on the left to fade the cut edge smoothly */}
              <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
