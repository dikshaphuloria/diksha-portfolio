'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import PageWrapper from '@/components/PageWrapper'
import { info } from '@/data/info'

export default function Home() {
  return (
    <PageWrapper>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '2rem 4rem',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--background)',
      }}>

        {/* Background blobs */}
        <div style={{
          position: 'absolute', top: '5rem', right: '5rem',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'var(--accent-light)', opacity: 0.4,
          filter: 'blur(80px)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '3rem', left: '3rem',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'var(--accent-light)', opacity: 0.25,
          filter: 'blur(80px)', pointerEvents: 'none',
        }} />

        <div className="home-container" style={{
          maxWidth: '1100px', margin: '0 auto', width: '100%',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: '4rem',
          position: 'relative', zIndex: 1,
        }}>

          {/* LEFT */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em',
                textTransform: 'uppercase', marginBottom: '1rem',
                padding: '0.25rem 0.85rem', borderRadius: '999px',
                background: 'var(--accent-light)', color: 'var(--accent)',
              }}
            >
              Analyze, Predict and Learn With Me 
            </motion.span>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="home-name"
              style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: '3.8rem', lineHeight: 1.1,
                color: 'var(--foreground)', marginBottom: '1.2rem',
              }}
            >
              {info.name}
            </motion.h1>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '1rem', lineHeight: 1.8,
                color: 'var(--muted)', maxWidth: '480px',
                marginBottom: '2.5rem',
              }}
            >
              I grew up solving puzzles — first on paper, then on a computer, now in data.
              From undergrad IT to Accenture to a Master's in Data Science at Rutgers,
              the question has always been the same:{' '}
              <em>what's really happening under the hood?</em>{' '}
              I bring deep curiosity, real-world experience, and a genuine belief that
              the best problems are solved by learning from the people around you.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <Link href="/academic" style={{
                padding: '0.85rem 1.8rem', borderRadius: '14px',
                fontSize: '0.875rem', fontWeight: 500,
                color: '#FFFFFF', background: 'var(--accent)',
                textDecoration: 'none', transition: 'all 0.2s ease',
                boxShadow: '0 4px 14px rgba(92,122,95,0.3)',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--accent-hover)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--accent)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                }}
              >
                Academic & Experience →
              </Link>

              <Link href="/about" style={{
                padding: '0.85rem 1.8rem', borderRadius: '14px',
                fontSize: '0.875rem', fontWeight: 500,
                color: 'var(--accent)', background: 'transparent',
                border: '2px solid var(--accent)',
                textDecoration: 'none', transition: 'all 0.2s ease',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--accent-light)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                }}
              >
                Know More About Me ✦
              </Link>
              
              <Link href="/resume.pdf" target="_blank" style={{
                padding: '0.85rem 1.8rem', borderRadius: '14px',
                fontSize: '0.875rem', fontWeight: 500,
                color: 'var(--muted)', background: 'transparent',
                border: '2px solid var(--border)',
                textDecoration: 'none', transition: 'all 0.2s ease',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--accent)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--muted)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                }}
              >
                View Resume ↗
              </Link>
            </motion.div>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--accent)' }}
            >
              📍 New Jersey, USA
            </motion.p>
          </div>

          {/* RIGHT — photo */}
          <motion.div
            className="home-photo"
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ flexShrink: 0, position: 'relative' }}
          >
            {/* Glow ring */}
            <div style={{
              position: 'absolute', inset: '-12px', borderRadius: '28px',
              background: 'var(--accent-light)',
              opacity: 0.6, filter: 'blur(8px)',
            }} />

            {/* Photo frame */}
            <div style={{
              position: 'relative', width: '400px', height: '550px',
              borderRadius: '24px', overflow: 'hidden',
              border: '4px solid var(--accent-light)',
              boxShadow: '0 20px 60px rgba(92,122,95,0.2)',
            }}>
              <Image
                src={info.photo}
                alt={info.name}
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                priority
              />
            </div>

            {/* Floating badge */}
            <div style={{
              position: 'absolute', bottom: '-16px', left: '-16px',
              padding: '0.5rem 1rem', borderRadius: '14px',
              background: 'var(--card)', color: 'var(--accent)',
              fontSize: '0.75rem', fontWeight: 500,
              border: '1px solid var(--border)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              whiteSpace: 'nowrap',
            }}>
              ✦ MS Data Science @ Rutgers
            </div>
          </motion.div>

        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .home-container {
            flex-direction: column-reverse !important;
            align-items: center !important;
            padding: 2rem 0 !important;
            gap: 2rem !important;
          }
          .home-photo {
            width: 220px !important;
          }
          .home-photo > div:nth-child(2) {
            width: 220px !important;
            height: 270px !important;
          }
          .home-name {
            font-size: 2.6rem !important;
          }
        }
        @media (max-width: 480px) {
          .home-name {
            font-size: 2.2rem !important;
          }
        }
      `}</style>
    </PageWrapper>
  )
}