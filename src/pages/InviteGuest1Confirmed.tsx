import { useEffect } from 'react'

export default function InviteGuest1Confirmed() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div className="page-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top content */}
      <div className="flex flex-col px-8" style={{ gap: 24 }}>
        {/* Logo */}
        <div className="flex justify-center items-center" style={{ height: 140 }}>
          <img src="/logo.png" alt="Rolex" style={{ width: 37, height: 40, objectFit: 'contain' }} />
        </div>

        {/* Confirmed heading */}
        <p
          className="font-kingdom text-center"
          style={{ fontSize: 28, lineHeight: '35px', color: '#111111' }}
        >
          Confirmé
        </p>

        {/* Body text */}
        <div className="flex flex-col" style={{ gap: 12 }}>
          <p style={{ fontSize: 18, lineHeight: '26px', color: '#111111', textAlign: 'center', fontFamily: 'Helvetica Neue, Helvetica, sans-serif' }}>
            Notre équipe vous contactera sous 2 jours pour coordonner les détails de votre visite.
          </p>
          <p style={{ fontSize: 18, lineHeight: '26px', color: '#111111', textAlign: 'center', fontFamily: 'Helvetica Neue, Helvetica, sans-serif' }}>
            Dans l'attente de vous accueillir, nous vous invitons à conserver précieusement votre carte : elle facilitera votre accueil.
          </p>
        </div>
      </div>

      {/* Card — 265x396, top 48px below text, extends below fold */}
      <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            width: 265,
            height: 396,
            borderRadius: 32,
            background: 'linear-gradient(to top right, #B9966F, #FCF6E9)',
            boxShadow: '-4px 4px 32px rgba(0, 0, 0, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <img
            src="/rolex/assets/logo-plain.png"
            alt="Rolex"
            style={{ width: 29, height: 32, objectFit: 'contain', opacity: 0.5 }}
          />
        </div>
      </div>
    </div>
  )
}
