import { motion } from 'framer-motion'
import React from 'react'

const blogPosts = [
  {
    id: 1,
    date: '23',
    month: 'Dec',
    image: '/blog1.png',
    author: 'Admin',
    comments: '08',
    title: 'Technology solutions for and brighter future',
    href: '#',
  },
  {
    id: 2,
    date: '23',
    month: 'Dec',
    image: '/blog2.png',
    author: 'Admin',
    comments: '05',
    title: 'Technology solutions for and brighter future',
    href: '#',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function BlogNews() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-[1140px] mx-auto px-6 font-sans" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {/* Header Row */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
        >
          <motion.div variants={headerVariants}>
            <span className="inline-block text-[11px] font-bold tracking-widest text-[#0082f0] uppercase mb-2">
              BLOG &amp; NEWS
            </span>
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-[#0d1b3e] leading-tight m-0">
              Latest Trends in<br className="hidden sm:block" />Tech Explored
            </h2>
          </motion.div>
          <motion.div className="pb-1" variants={headerVariants}>
            <motion.a
              href="#"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full border-[1.5px] border-[#0d1b3e] text-[#0d1b3e] text-sm font-semibold whitespace-nowrap"
              whileHover={{ backgroundColor: '#0d1b3e', color: '#ffffff', scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ textDecoration: 'none' }}
            >
              View All &nbsp;&rsaquo;
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Cards Row */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={containerVariants}
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={cardVariants}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function BlogCard({ post }) {
  return (
    <motion.div
      className="flex flex-col sm:flex-row rounded-2xl overflow-hidden bg-white border border-[#efefef] cursor-pointer"
      whileHover={{
        y: -6,
        boxShadow: '0 16px 40px rgba(0,0,0,0.13)',
      }}
      initial={{ boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
    >
      {/* LEFT: Image + Date Badge */}
      <div className="relative shrink-0 w-full sm:w-[200px] h-[200px] sm:h-auto sm:min-h-[180px] overflow-hidden">
        <motion.img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover block"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Date badge */}
        <div className="absolute top-0 left-0 bg-[#0082f0] text-white flex flex-col items-center justify-center py-2 px-3 rounded-br-lg min-w-[46px]">
          <span className="text-2xl font-extrabold leading-none">{post.date}</span>
          <span className="text-[10px] font-semibold tracking-wider uppercase mt-0.5">{post.month}</span>
        </div>
      </div>

      {/* RIGHT: Card Body */}
      <div className="p-5 sm:p-[20px_18px] flex flex-col justify-center gap-3.5 flex-1">
        {/* Meta */}
        <div className="flex items-center gap-2 flex-wrap text-gray-400 text-xs">
          <span className="inline-flex items-center gap-1">
            <svg className="w-[13px] h-[13px] shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4.418 0-8 1.791-8 4v1h16v-1c0-2.209-3.582-4-8-4z" fill="#aaa"/>
            </svg>
            By {post.author}
          </span>
          <span className="text-gray-200">|</span>
          <span className="inline-flex items-center gap-1">
            <svg className="w-[13px] h-[13px] shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6l-4 3V4z" fill="#aaa"/>
            </svg>
            Comment ({post.comments})
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[15px] sm:text-base font-bold text-[#0d1b3e] m-0 leading-snug">
          {post.title}
        </h3>

        {/* Read More */}
        <div className="mt-1">
          <motion.a
            href={post.href}
            className="inline-flex items-center text-sm font-bold text-[#0d1b3e]"
            whileHover={{ color: '#0082f0', x: 4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{ textDecoration: 'none' }}
          >
            Read More &nbsp;
            <span className="text-lg leading-none font-normal">&rsaquo;</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
