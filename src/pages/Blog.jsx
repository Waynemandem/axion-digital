import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function Blog() {
  return (
    <div style={{ background: '#060606', color: '#F0EDE8', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '160px 40px 100px', textAlign: 'center' }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: '#FF4D00', letterSpacing: '.2em', textTransform: 'uppercase', marginBottom: 20 }}>
          Coming Soon
        </p>
        <h1 style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, letterSpacing: '-.04em', marginBottom: 20 }}>
          The{' '}
          <em style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', color: '#FF4D00', fontWeight: 700 }}>
            Axion
          </em>{' '}
          Blog
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(240,237,232,0.45)', maxWidth: 480, margin: '0 auto' }}>
          Guides on business growth, web development, crypto, and building products in Africa. Coming soon.
        </p>
      </div>
      <Footer />
    </div>
  )
}