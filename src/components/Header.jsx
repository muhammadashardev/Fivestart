import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Compliance Certification', href: '#compliance' },
  { name: 'Resources', href: '#resources' },
  { name: 'Contact us', href: '#contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 w-full bg-white border-b border-gray-100/80 backdrop-blur-md bg-white/95"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <motion.a
                href="#"
                className="flex items-center"
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <img
                  src="/LOGO.png"
                  alt="FIVESTAR HOOD & DETAIL INC."
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </motion.a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-[15px] font-semibold text-gray-800 hover:text-brand-blue transition-colors duration-200 relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: 'easeOut' }}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2.5 text-[14px] font-semibold text-white bg-brand-blue rounded-full shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4, ease: 'easeOut' }}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(0,82,240,0.35)', y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                Get A Free Quote
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-brand-blue hover:bg-gray-50 focus:outline-none transition-colors"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              className="fixed inset-0 z-[998] bg-black/50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Side Drawer - slides from right, half width */}
            <motion.div
              id="mobile-menu"
              className="fixed top-0 right-0 z-[999] h-full w-1/1.9 bg-white shadow-2xl lg:hidden flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
                <img
                  src="/LOGO.png"
                  alt="FIVESTAR"
                  className="h-8 w-auto object-contain"
                />
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-3 py-3 rounded-lg text-[15px] font-medium text-gray-800 hover:text-brand-blue hover:bg-blue-50 transition-all duration-150"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.3 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue opacity-60" />
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              {/* CTA Button at bottom */}
              <div className="px-4 pb-8 pt-4 border-t border-gray-100">
                <motion.a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center block px-4 py-3 text-[14px] font-semibold text-white bg-brand-blue rounded-full shadow-md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  whileHover={{ scale: 1.02, boxShadow: '0 6px 20px rgba(0,82,240,0.3)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get A Free Quote
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
