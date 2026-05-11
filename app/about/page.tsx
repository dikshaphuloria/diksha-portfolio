'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import PageWrapper from '@/components/PageWrapper'
import { info } from '@/data/info'
import { ExternalLink } from 'lucide-react'

export default function About() {
  return (
    <PageWrapper>
      <div style={{
        minHeight: '100vh',
        background: 'var(--background)',
        padding: '4rem 2rem',
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>

          {/* Page heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '3.5rem' }}
          >
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem',
            }}>
              {/* Left — text */}
              <div>
                <span style={{
                  fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em',
                  textTransform: 'uppercase', padding: '0.25rem 0.85rem',
                  borderRadius: '999px', background: 'var(--accent-light)',
                  color: 'var(--accent)',
                }}>
                  The Person Behind the Data
                </span>
                <h1 style={{
                  fontFamily: 'DM Serif Display, serif',
                  fontSize: '3rem', color: 'var(--foreground)',
                  marginTop: '0.75rem', marginBottom: '0.5rem',
                }}>
                  Know More About Me
                </h1>
                <p style={{ color: 'var(--muted)', fontSize: '1rem' }}>
                  Beyond the resume 
                </p>
              </div>

              {/* Right — circular photo */}
              <div style={{
                position: 'relative', flexShrink: 0,
              }}>
                {/* Decorative ring */}
                <div style={{
                  position: 'absolute', inset: '-6px', borderRadius: '50%',
                  background: 'var(--accent-light)', opacity: 0.7,
                  filter: 'blur(6px)',
                }} />
                <div style={{
                  position: 'relative', width: '300px', height: '300px',
                  borderRadius: '50%', overflow: 'hidden',
                  border: '3px solid var(--accent-light)',
                  boxShadow: '0 8px 24px rgba(92,122,95,0.2)',
                }}>
                  <Image
                    src="/me.jpeg"
                    alt="Diksha"
                    width={250}
                    height={250}
                    style={{ objectFit: 'cover', objectPosition: 'top', width: '100%', height: '100%' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* STORY */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ marginBottom: '3rem' }}
          >
            <h2 style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: '1.6rem', color: 'var(--foreground)',
              marginBottom: '1.25rem', paddingBottom: '0.5rem',
              borderBottom: '1px solid var(--border)',
            }}>
              My Journey
            </h2>

            <div style={{
              background: 'var(--card)', borderRadius: '16px',
              padding: '2rem', border: '1px solid var(--border)',
            }}>
              {info.about.story.split('\n').filter(p => p.trim()).map((para, i) => (
                <p key={i} style={{
                  lineHeight: 1.9, color: 'black',
                  fontSize: '0.95rem', marginBottom: '1.2rem',
                  textAlign: 'justify',
                }}>
                  {para.trim()}
                </p>
              ))}
            </div>
          </motion.section>

          {/* INTERESTS */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ marginBottom: '3rem' }}
          >
            <h2 style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: '1.6rem', color: 'var(--foreground)',
              marginBottom: '1.25rem', paddingBottom: '0.5rem',
              borderBottom: '1px solid var(--border)',
            }}>
              What I'm Into
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
              gap: '1rem',
            }}>
              {info.about.interests.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.25 + i * 0.07 }}
                  style={{
                    background: 'var(--card)', borderRadius: '16px',
                    padding: '1.25rem', border: '1px solid var(--border)',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: '0.5rem', textAlign: 'center',
                  }}
                >
                  <span style={{ fontSize: '2rem' }}>{item.emoji}</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--foreground)' }}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* FUN FACTS */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ marginBottom: '3rem' }}
          >
            <h2 style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: '1.6rem', color: 'var(--foreground)',
              marginBottom: '1.25rem', paddingBottom: '0.5rem',
              borderBottom: '1px solid var(--border)',
            }}>
              Fun Facts
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {info.about.funFacts.map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
                  style={{
                    background: 'var(--card)', borderRadius: '14px',
                    padding: '1rem 1.25rem', border: '1px solid var(--border)',
                    borderLeft: '4px solid var(--accent)',
                    color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7,
                  }}
                >
                  {fact}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CERTIFICATIONS */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: '1.6rem', color: 'var(--foreground)',
              marginBottom: '1.25rem', paddingBottom: '0.5rem',
              borderBottom: '1px solid var(--border)',
            }}>
              Certifications
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {info.certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 + i * 0.1 }}
                >
                  <Link
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                      ;(e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(92,122,95,0.12)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                      ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                    }}
                  >
                    <div style={{
                      background: 'var(--card)', borderRadius: '14px',
                      padding: '1rem 1.25rem', border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center',
                      justifyContent: 'space-between', gap: '0.75rem',
                      transition: 'all 0.2s ease',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontSize: '1.2rem' }}>🏅</span>
                        <span style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>{cert.name}</span>
                      </div>
                      <ExternalLink size={15} color="var(--accent)" style={{ flexShrink: 0 }} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

        </div>
      </div>
    </PageWrapper>
  )
}