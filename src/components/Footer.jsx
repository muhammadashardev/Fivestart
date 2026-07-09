import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const colVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const socialLinks = [
  { href: '#', label: 'Facebook', Icon: FaFacebookF },
  { href: '#', label: 'Instagram', Icon: FaInstagram },
  { href: '#', label: 'LinkedIn', Icon: FaLinkedinIn },
  { href: '#', label: 'X / Twitter', Icon: FaXTwitter },
]

const Footer = () => {
  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Main Footer Content */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 - Brand */}
          <motion.div className="flex flex-col gap-4" variants={colVariants}>
            <motion.img
              src="/footer.png"
              alt="Five Star Hood & Detail Inc."
              className="h-14 w-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium, certified commercial kitchen exhaust system maintenance and deep detailing. Safe, pristine, compliant.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded text-gray-400"
                  whileHover={{
                    scale: 1.15,
                    color: '#ffffff',
                    borderColor: '#ffffff',
                    y: -3,
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <Icon size={13} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Our Services */}
          <motion.div className="lg:ms-8" variants={colVariants}>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                'Hood Cleaning',
                'Exhaust Cleaning',
                'Fan Cleaning',
                'Equipment Detailing',
                'Pressure Washing',
                'Preventive Maintenance',
              ].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="text-gray-400 text-sm"
                    whileHover={{ x: 5, color: '#ffffff' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    style={{ textDecoration: 'none', display: 'inline-block' }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Company */}
          <motion.div variants={colVariants}>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                'About Us',
                'Service Areas',
                'Industries',
                'FAQ',
                'Testimonials',
                'Contact',
              ].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="text-gray-400 text-sm"
                    whileHover={{ x: 5, color: '#ffffff' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    style={{ textDecoration: 'none', display: 'inline-block' }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Emergency Contact */}
          <motion.div variants={colVariants}>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Emergency Contact
            </h3>
            <motion.a
              href="tel:5615550199"
              className="text-white text-2xl sm:text-3xl font-bold leading-tight block mb-2"
              whileHover={{ color: '#60a5fa', x: 3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ textDecoration: 'none' }}
            >
              (561) 555-0199
            </motion.a>
            <motion.a
              href="mailto:support@fivestarhood.com"
              className="text-gray-400 text-sm block mb-1"
              whileHover={{ color: '#ffffff', x: 2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ textDecoration: 'none' }}
            >
              support@fivestarhood.com
            </motion.a>
            <p className="text-white text-sm font-semibold mb-5">
              Available 24/7 for Emergency Service
            </p>
            <motion.a
              href="#"
              className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded"
              whileHover={{ backgroundColor: '#1d4ed8', scale: 1.04, y: -2, boxShadow: '0 6px 20px rgba(37,99,235,0.4)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ textDecoration: 'none' }}
            >
              Get Free Estimate
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Copyright */}
          <p className="text-gray-500 text-xs order-2 sm:order-1">
            © 2024 Five Star Hood &amp; Detail. All rights reserved.
          </p>

          {/* Codesinc Branding */}
          <div className="flex items-center gap-2 order-1 sm:order-2">
            <img
              src="/codesinc.png"
              alt="Codesinc"
              className="h-10 w-auto object-contain"
            />
            <span className="text-gray-400 text-xs">
              Designed and hosted by{' '}
              <span className="text-white font-bold">Codesinc.</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 order-3">
            <motion.a
              href="#"
              className="text-gray-400 text-xs"
              whileHover={{ color: '#ffffff' }}
              transition={{ duration: 0.2 }}
              style={{ textDecoration: 'none' }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 text-xs"
              whileHover={{ color: '#ffffff' }}
              transition={{ duration: 0.2 }}
              style={{ textDecoration: 'none' }}
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
