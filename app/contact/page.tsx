'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PageWrapper from '@/components/PageWrapper'
import { info } from '@/data/info'
import { Mail, ArrowUpRight } from 'lucide-react'

const GithubIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="black">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
  
  const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: info.email,
    href: `mailto:${info.email}`,
    description: 'Best way to reach me - I usually reply within a day.',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'dikshaphuloria',
    href: info.github,
    description: 'All my projects, research code, and experiments live here.',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'dikshaphuloria',
    href: info.LinkedIn,
    description: 'Let\'s connect professionally - open to opportunities.',
  },
]

export default function Contact() {
  return (
    <PageWrapper>
      <div style={{
        minHeight: '100vh',
        background: 'var(--background)',
        padding: '4rem 2rem',
        display: 'flex', alignItems: 'center',
      }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', width: '100%' }}>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '3.5rem', textAlign: 'center' }}
          >
            <span style={{
              fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em',
              textTransform: 'uppercase', padding: '0.25rem 0.85rem',
              borderRadius: '999px', background: 'var(--accent-light)',
              color: 'var(--accent)',
            }}>
              Get In Touch
            </span>
            <h1 style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: '3rem', color: 'var(--foreground)',
              marginTop: '0.75rem', marginBottom: '0.75rem',
            }}>
              Say Hello 👋
            </h1>
            <p style={{
              color: 'var(--muted)', fontSize: '1rem',
              maxWidth: '460px', margin: '0 auto', lineHeight: 1.8,
            }}>
              Whether it's about a project, an opportunity, or just a good data conversation,
              I'd love to hear from you.
            </p>
          </motion.div>

          {/* Contact cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {contacts.map((contact, i) => {
              const Icon = contact.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                >
                  <Link
                    href={contact.href}
                    target={contact.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
                      ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(92,122,95,0.15)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                      ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                    }}
                  >
                    <div style={{
                      background: 'var(--card)',
                      borderRadius: '18px', padding: '1.5rem',
                      border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center',
                      gap: '1.25rem', transition: 'all 0.2s ease',
                    }}>
                      {/* Icon */}
                      <div style={{
                        width: '48px', height: '48px', borderRadius: '14px',
                        background: 'var(--accent-light)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <Icon size={22} color="var(--accent)" />
                      </div>

                      {/* Text */}
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: '0.7rem', fontWeight: 600,
                          textTransform: 'uppercase', letterSpacing: '0.1em',
                          color: 'var(--accent)', marginBottom: '0.2rem',
                        }}>
                          {contact.label}
                        </div>
                        <div style={{
                          fontSize: '0.95rem', fontWeight: 500,
                          color: 'var(--foreground)', marginBottom: '0.25rem',
                        }}>
                          {contact.value}
                        </div>
                        <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                          {contact.description}
                        </div>
                      </div>

                      {/* Arrow */}
                      <ArrowUpRight size={18} color="var(--muted)" style={{ flexShrink: 0 }} />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{
              textAlign: 'center', marginTop: '3rem',
              fontSize: '0.8rem', color: 'var(--muted)',
            }}
          >
            Based in New Jersey, USA · Open to remote opportunities worldwide 🌍
          </motion.p>

        </div>
      </div>
    </PageWrapper>
  )
}