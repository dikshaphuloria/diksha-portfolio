'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from "next/image";

const links = [
  { href: '/', label: 'Home' },
  { href: '/academic', label: 'Academic' },
  { href: '/about', label: 'About Me' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1rem 2rem',
        background: 'rgba(247, 248, 244, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        minHeight: '64px',
      }}>
        {/* Name */}
        <Link href="/" style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: '1.1rem', color: 'var(--foreground)',
          textDecoration: 'none', whiteSpace: 'nowrap',
        }}>
          Diksha Phuloria
        </Link>

        {/* Desktop links */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '2rem',
        }} className="desktop-nav">
          {links.map((link) => (
            <Link key={link.href} href={link.href} style={{
              position: 'relative', fontSize: '0.875rem', fontWeight: 500,
              color: pathname === link.href ? 'var(--accent)' : 'var(--muted)',
              textDecoration: 'none', transition: 'color 0.2s',
              whiteSpace: 'nowrap',
            }}>
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="underline"
                  style={{
                    position: 'absolute', bottom: '-4px', left: 0, right: 0,
                    height: '2px', borderRadius: '2px', background: 'var(--accent)',
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-nav"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'none', flexDirection: 'column', gap: '5px', padding: '4px',
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '2px',
              background: 'var(--foreground)', borderRadius: '2px',
              transition: 'all 0.2s',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                : i === 2 ? 'rotate(-45deg) translate(5px, -5px)'
                : 'scaleX(0)'
                : 'none',
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 49,
            background: 'rgba(247, 248, 244, 0.97)',
            borderBottom: '1px solid var(--border)',
            padding: '1rem 2rem',
            display: 'flex', flexDirection: 'column', gap: '1rem',
          }}
          className="mobile-menu"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '1rem', fontWeight: 500,
                color: pathname === link.href ? 'var(--accent)' : 'var(--muted)',
                textDecoration: 'none', padding: '0.25rem 0',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
        @media (min-width: 641px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  )
}