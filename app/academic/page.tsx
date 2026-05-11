'use client'

import { motion } from 'framer-motion'
import PageWrapper from '@/components/PageWrapper'
import { info } from '@/data/info'
import Link from 'next/link'
import { FaGithub as Github } from 'react-icons/fa'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Academic() {
  return (
    <PageWrapper>
      <div style={{
        minHeight: '100vh',
        background: 'var(--background)',
        padding: '4rem 2rem',
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>

          {/* Page heading */}
          <motion.div {...fadeUp} style={{ marginBottom: '3.5rem' }}>
            <span style={{
              fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em',
              textTransform: 'uppercase', padding: '0.25rem 0.85rem',
              borderRadius: '999px', background: 'var(--accent-light)',
              color: 'var(--accent)',
            }}>
              Background
            </span>
            <h1 style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: '3rem', color: 'var(--foreground)',
              marginTop: '0.75rem', marginBottom: '0.5rem',
            }}>
              Academic & Experience
            </h1>
          </motion.div>

          {/* EDUCATION */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ marginBottom: '3rem' }}
          >
            <h2 style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: '1.6rem', color: 'var(--foreground)',
              marginBottom: '1.25rem',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid var(--border)',
            }}>
              Education
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {info.education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                  style={{
                    background: 'var(--card)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <div>
                    <div style={{
                      fontSize: '0.7rem', fontWeight: 500,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: 'var(--accent)', marginBottom: '0.4rem',
                    }}>
                      {edu.location}
                    </div>
                    <h3 style={{
                      fontFamily: 'DM Serif Display, serif',
                      fontSize: '1.2rem', color: 'var(--foreground)',
                      marginBottom: '0.25rem',
                    }}>
                      {edu.school}
                    </h3>
                    <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                      {edu.degree}
                    </p>
                    <p style={{
                      color: 'var(--accent)', fontSize: '0.8rem',
                      marginTop: '0.4rem', fontWeight: 500,
                    }}>
                      GPA: {edu.gpa}
                    </p>
                  </div>
                  <div style={{
                    fontSize: '0.8rem', color: 'var(--muted)',
                    background: 'var(--accent-light)',
                    padding: '0.3rem 0.8rem', borderRadius: '999px',
                    whiteSpace: 'nowrap', fontWeight: 500,
                  }}>
                    {edu.date}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* WORK EXPERIENCE */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ marginBottom: '3rem' }}
          >
            <h2 style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: '1.6rem', color: 'var(--foreground)',
              marginBottom: '1.25rem',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid var(--border)',
            }}>
              Work Experience
            </h2>

            {info.experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
                style={{
                  background: 'var(--card)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid var(--border)',
                }}
              >
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem',
                  marginBottom: '1rem',
                }}>
                  <div>
                    <div style={{
                      fontSize: '0.7rem', fontWeight: 500,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: 'var(--accent)', marginBottom: '0.4rem',
                    }}>
                      {exp.location}
                    </div>
                    <h3 style={{
                      fontFamily: 'DM Serif Display, serif',
                      fontSize: '1.2rem', color: 'var(--foreground)',
                      marginBottom: '0.2rem',
                    }}>
                      {exp.company}
                    </h3>
                    <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                      {exp.role}
                    </p>
                  </div>
                  <div style={{
                    fontSize: '0.8rem', color: 'var(--muted)',
                    background: 'var(--accent-light)',
                    padding: '0.3rem 0.8rem', borderRadius: '999px',
                    whiteSpace: 'nowrap', fontWeight: 500,
                  }}>
                    {exp.date}
                  </div>
                </div>

                <ul style={{ paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.section>

          {/* SKILLS */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ marginBottom: '3rem' }}
          >
            <h2 style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: '1.6rem', color: 'var(--foreground)',
              marginBottom: '1.25rem',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid var(--border)',
            }}>
              Skills
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {Object.entries(info.skills).map(([category, items], i) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                  style={{
                    background: 'var(--card)',
                    borderRadius: '16px',
                    padding: '1.25rem 1.5rem',
                    border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'flex-start',
                    gap: '1rem', flexWrap: 'wrap',
                  }}
                >
                  <div style={{
                    fontSize: '0.75rem', fontWeight: 600,
                    color: 'var(--accent)', textTransform: 'uppercase',
                    letterSpacing: '0.08em', minWidth: '110px',
                    paddingTop: '0.2rem',
                  }}>
                    {category}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', flex: 1 }}>
                    {items.map((skill) => (
                      <span key={skill} style={{
                        fontSize: '0.8rem', padding: '0.3rem 0.8rem',
                        borderRadius: '999px', fontWeight: 500,
                        background: 'var(--accent-light)',
                        color: 'var(--foreground)',
                        border: '1px solid var(--border)',
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* PROJECTS */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: '1.6rem', color: 'var(--foreground)',
              marginBottom: '1.25rem',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid var(--border)',
            }}>
              Projects
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {info.projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 + i * 0.1 }}
                  style={{
                    background: 'var(--card)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    border: '1px solid var(--border)',
                  }}
                >
                  {/* Project header */}
                  <div style={{ marginBottom: '0.75rem' }}>
                    <div style={{
                      display: 'flex', alignItems: 'flex-start',
                      justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem',
                      marginBottom: '0.15rem',
                    }}>
                      <h3 style={{
                        fontFamily: 'DM Serif Display, serif',
                        fontSize: '1.15rem', color: 'var(--foreground)',
                      }}>
                        {project.title}
                      </h3>
                      {/* Links */}
                      <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                        {project.github && (
                          <Link href={project.github} target="_blank" rel="noopener noreferrer"
                            style={{
                              display: 'flex', alignItems: 'center', gap: '0.3rem',
                              fontSize: '0.75rem', fontWeight: 500,
                              color: 'var(--accent)', textDecoration: 'none',
                              padding: '0.25rem 0.7rem', borderRadius: '999px',
                              border: '1px solid var(--accent)',
                              transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={e => {
                              (e.currentTarget as HTMLElement).style.background = 'var(--accent-light)'
                            }}
                            onMouseLeave={e => {
                              (e.currentTarget as HTMLElement).style.background = 'transparent'
                            }}
                          >
                            <Github size={13} /> GitHub
                          </Link>
                        )}
                      
                      </div>
                    </div>
                    <p style={{
                      fontSize: '0.85rem', color: 'var(--accent)',
                      fontStyle: 'italic', marginBottom: '0.5rem',
                    }}>
                      {project.subtitle}
                    </p>
                    <p style={{
                      fontSize: '0.875rem', color: 'black',
                      lineHeight: 1.7, marginBottom: '0.75rem',
                      padding: '0.6rem 0.9rem',
                      background: 'var(--accent-light)',
                      borderRadius: '10px',
                      borderLeft: '3px solid var(--accent)',
                    }}>
                      {project.summary}
                    </p>
                    <p style={{
                      fontSize: '0.75rem', color: 'var(--muted)',
                      fontFamily: 'monospace',
                    }}>
                      {project.tech}
                    </p>
                  </div>

                  {/* Bullets */}
                  <ul style={{ paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {project.bullets.map((b, j) => (
                      <li key={j} style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

        </div>
      </div>
    </PageWrapper>
  )
}