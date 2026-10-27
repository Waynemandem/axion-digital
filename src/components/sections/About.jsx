// src/components/sections/About.jsx
import { useEffect, useRef } from 'react'

const VALUES = [
  { title: 'We ship fast',        desc: 'Most projects delivered in 1–3 weeks.' },
  { title: 'No outsourcing',      desc: 'Every line of code written in-house.' },
  { title: 'Results focused',     desc: 'We measure success by your revenue, not our code.' },
  { title: 'Full stack',          desc: 'Design, dev, and deployment under one roof.' },
  { title: 'Africa-native',       desc: 'Paystack, Flutterwave, and local context built in.' },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.fade-up').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100)
          })
        }
      })
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} style={{ padding: '120px 0', borderTop: '1px solid rgba(255,255,255,0.06)', position: 'relative' }}>

      <div style={{ position: 'absolute', top: '30%', right: 0, width: 400, height: 400, background: 'radial-gradient(circle, rgba(255,77,0,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

        {/* Left */}
        <div className="fade-up">
          <p style={{ fontSize: 11, fontWeight: 600, color: '#FF4D00', letterSpacing: '.2em', textTransform: 'uppercase', marginBottom: 20 }}>
            About Axion
          </p>
          <h2 style={{ fontSize: 'clamp(36px, 4.5vw, 60px)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.05, marginBottom: 28 }}>
            Built in{' '}
            <em style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', color: '#FF4D00', fontWeight: 700 }}>
              Lagos.
            </em>
            <br />Built for growth.
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(240,237,232,0.5)', lineHeight: 1.9, marginBottom: 20 }}>
            Axion Digital is a software agency based in Lagos, Nigeria. We build digital products that help businesses grow — from simple websites to complex Web3 platforms.
          </p>
          <p style={{ fontSize: 16, color: 'rgba(240,237,232,0.5)', lineHeight: 1.9, marginBottom: 40 }}>
            Every project gets the same attention. We don't outsource. We don't cut corners. We ship things that work.
          </p>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'transparent', color: '#F0EDE8',
            textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 100, padding: '13px 28px', fontSize: 14, fontWeight: 500,
            transition: 'all .2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#FF4D00'; e.currentTarget.style.borderColor = '#FF4D00' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
          >
            Work with us ↗
          </a>
        </div>

        {/* Right — values */}
        <div className="fade-up" style={{ display: 'flex', flexDirection: 'column', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden' }}>
          {VALUES.map((item, i, arr) => (
            <div key={item.title}
              style={{ padding: '22px 28px', borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', display: 'flex', alignItems: 'flex-start', gap: 16, background: '#060606', transition: 'background .2s, padding-left .2s', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0f0f0f'; e.currentTarget.style.paddingLeft = '36px' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#060606'; e.currentTarget.style.paddingLeft = '28px' }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF4D00', marginTop: 7, flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#F0EDE8', marginBottom: 3, fontFamily: 'Space Grotesk, sans-serif' }}>{item.title}</p>
                <p style={{ fontSize: 13, color: 'rgba(240,237,232,0.4)' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}