'use client'

import { motion } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-6">
      <span className="font-semibold tracking-tight">
        PK
      </span>

      <ul className="flex gap-8">
        {navItems.map((item) => (
          <li key={item.label} className="relative">
            <a
              href={item.href}
              className="text-sm text-gray-300 hover:text-white transition"
            >
              {item.label}
            </a>

            <motion.span
              layoutId="nav-underline"
              className="absolute left-0 -bottom-1 h-[2px] w-full bg-white origin-left scale-x-0 hover:scale-x-100 transition-transform"
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}
