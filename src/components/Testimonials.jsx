import { motion } from 'framer-motion'
import mainPersonImg from '../assets/testimonial_main.png'
import janeCooperImg from '../assets/jane_cooper.png'
import emilyRodriguezImg from '../assets/emily_rodriguez.png'

// Google Logo SVG
const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    <path fill="none" d="M0 0h48v48H0z"/>
  </svg>
)

// Star component
const Star = ({ filled = true, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill={filled ? '#FBBC05' : '#D1D5DB'}>
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const Stars = ({ count = 5, size = 16 }) => (
  <div style={{ display: 'flex', gap: '2px' }}>
    {Array.from({ length: 5 }, (_, i) => (
      <Star key={i} filled={i < count} size={size} />
    ))}
  </div>
)

// Framer Motion variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

const imageVariants = {
  hidden: { opacity: 0, x: -40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const testimonials = [
  {
    id: 1,
    stars: 5,
    text: '"The practical tools & mindset shifts I gain during coach helped me become a more effective leader & communicator. I highly recommend this coaching to anyone seeking real growth."',
    avatar: janeCooperImg,
    name: 'Jane Cooper',
    role: 'Founder & Lead Coach',
  },
  {
    id: 2,
    stars: 5,
    text: '"The practical tools & mindset shifts I gain during coach helped me become a more effective leader & communicator. I highly recommend this coaching to anyone seeking real growth."',
    avatar: emilyRodriguezImg,
    name: 'Emily Rodriguez',
    role: 'Career Professional',
  },
]

export default function Testimonials() {
  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: 'clamp(40px, 8vw, 80px) 0 clamp(32px, 6vw, 60px)',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* Top Label */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <motion.p
            variants={fadeUpVariants}
            style={{
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: '#0082f0',
              marginBottom: '16px',
            }}
          >
            TESTIMONIALS
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: '800',
              color: '#0f172a',
              lineHeight: '1.2',
              margin: '0',
            }}
          >
            Real Results for Real
            
            Businesses
          </motion.h2>
        </motion.div>

        {/* Main Content Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ alignItems: 'stretch' }}
        >
          {/* Left: Main Person Image Card */}
          <motion.div
            variants={imageVariants}
            className="md:col-span-2 lg:col-span-1"
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              minHeight: '300px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
            }}
          >
            {/* Person Image */}
            <img
              src={mainPersonImg}
              alt="Happy Customer"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />

            {/* Google Badge Overlay - bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                backgroundColor: 'rgba(255,255,255,0.97)',
                borderRadius: '14px',
                padding: '12px 16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                minWidth: '185px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <GoogleIcon />
                <span
                  style={{
                    fontSize: '17px',
                    fontWeight: '800',
                    color: '#0f172a',
                    lineHeight: 1,
                  }}
                >
                  4.9/5
                </span>
                <Stars count={5} size={14} />
              </div>
              <p
                style={{
                  fontSize: '12px',
                  color: '#475569',
                  margin: '0',
                  fontWeight: '500',
                }}
              >
                Our 120K Happy Customer
              </p>
            </motion.div>
          </motion.div>

          {/* Middle & Right: Testimonial Cards */}
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: '0 16px 48px rgba(0,130,240,0.12)',
                transition: { duration: 0.3 },
              }}
              style={{
                backgroundColor: '#f8fafc',
                borderRadius: '20px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                cursor: 'default',
              }}
            >
              {/* Stars */}
              <div>
                <Stars count={t.stars} size={18} />

                {/* Review Text */}
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: '1.7',
                    color: '#334155',
                    marginTop: '16px',
                    marginBottom: '0',
                    fontWeight: '400',
                  }}
                >
                  {t.text}
                </p>
              </div>

              {/* Reviewer Info */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginTop: '28px',
                }}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    flexShrink: 0,
                    border: '2px solid #e2e8f0',
                  }}
                />
                <div>
                  <p
                    style={{
                      margin: '0',
                      fontSize: '14px',
                      fontWeight: '700',
                      color: '#0f172a',
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      margin: '2px 0 0',
                      fontSize: '12px',
                      color: '#64748b',
                      fontWeight: '400',
                    }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginTop: '36px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            textAlign: 'center',
          }}
        >
          {/* Avatars + View All Reviews */}
          <div
            className="flex flex-wrap items-center justify-center gap-2 px-4"
          >
            {/* Stacked mini avatars */}
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              {[janeCooperImg, emilyRodriguezImg].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #ffffff',
                    marginLeft: i === 0 ? '0' : '-8px',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
                  }}
                />
              ))}
            </div>

            <p
              style={{
                margin: '0',
                fontSize: '13px',
                color: '#475569',
                fontWeight: '400',
                lineHeight: '1.6',
              }}
            >
              Where smart design and clean energy come together powerfully –{' '}
              <a
                href="#"
                style={{
                  color: '#0082f0',
                  fontWeight: '600',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.target.style.textDecoration = 'underline')}
                onMouseLeave={e => (e.target.style.textDecoration = 'none')}
              >
                View All Reviews
              </a>
            </p>
          </div>

          {/* Rating Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{
                fontSize: '14px',
                fontWeight: '700',
                color: '#0f172a',
              }}
            >
              4.9/5
            </span>
            <Stars count={5} size={14} />
            <span
              style={{
                fontSize: '13px',
                color: '#64748b',
                fontWeight: '400',
              }}
            >
              Over 4200 Reviews
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
