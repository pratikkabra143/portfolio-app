'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const name =
    process.env.NEXT_PUBLIC_SITE_NAME || 'Pratik Kabra'

  const tagline =
    process.env.NEXT_PUBLIC_SITE_TAGLINE ||
    'AI & Data Science Engineer'

  return (
    <section className="flex flex-col items-center justify-center text-center gap-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-5xl md:text-6xl font-extrabold tracking-tight
                  bg-gradient-to-r from-white via-gray-200 to-gray-400
                  bg-clip-text text-transparent
                  drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
      >
        {name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        className="text-lg md:text-xl text-gray-400 max-w-2xl"
      >
        {tagline}
      </motion.p>
    </section>
  )
}
