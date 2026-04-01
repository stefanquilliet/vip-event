import { useEffect } from 'react'

export default function WelcomeGuest2() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className="page-container"
      style={{ height: '100dvh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
    >
      <img
        src="/rolex/assets/logo-3d.png"
        alt="Rolex"
        style={{ width: 37, height: 40, objectFit: 'contain' }}
      />
      <div style={{ marginTop: 24, width: '100%', padding: '0 32px' }}>
        <p
          className="font-kingdom"
          style={{ fontSize: 28, lineHeight: '35px', color: '#111111', textAlign: 'center' }}
        >
          Monsieur Romain Grossier, bienvenu
        </p>
        <p
          style={{
            marginTop: 12,
            fontSize: 18,
            lineHeight: '27px',
            color: '#111111',
            textAlign: 'center',
            fontFamily: 'Helvetica Neue, Helvetica, sans-serif',
          }}
        >
          C'est un plaisir de vous compter parmi nous aujourd'hui.
        </p>
      </div>
    </div>
  )
}
