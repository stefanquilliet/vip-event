import { useEffect, useRef } from 'react'

export default function InviteGuest1Confirmed() {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      const gamma = e.gamma ?? 0
      const beta = e.beta ?? 45

      const tiltX = Math.max(-45, Math.min(45, gamma)) / 45
      const tiltY = Math.max(-45, Math.min(45, beta - 45)) / 45

      // Base angle 45deg = #B9966F at bottom-left, #FCF6E9 at top-right
      const angle = 45 + tiltX * 25 + tiltY * 15

      const shadowX = -4 + tiltX * 10
      const shadowY = 4 - tiltY * 10
      const shadowBlur = 24 + Math.abs(tiltX) * 16

      const moveX = tiltX * 6
      const moveY = tiltY * 6

      if (cardRef.current) {
        cardRef.current.style.background = `linear-gradient(${angle}deg, #B9966F, #FCF6E9)`
        cardRef.current.style.boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, 0.12)`
        cardRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`
      }
    }

    const DOE = DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }
    if (typeof DOE.requestPermission === 'function') {
      // iOS 13+: must be triggered by a user gesture — click only, once
      const requestAndListen = async () => {
        try {
          const permission = await DOE.requestPermission!()
          if (permission === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation)
          }
        } catch { /* permission denied */ }
      }
      document.addEventListener('click', requestAndListen, { once: true })
      return () => {
        document.removeEventListener('click', requestAndListen)
        window.removeEventListener('deviceorientation', handleOrientation)
      }
    } else {
      // Android / desktop — no permission needed
      window.addEventListener('deviceorientation', handleOrientation)
      return () => window.removeEventListener('deviceorientation', handleOrientation)
    }
  }, [])

  return (
    <div className="page-container" style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      {/* Top content */}
      <div className="flex flex-col px-8" style={{ paddingTop: 48 }}>
        {/* Logo */}
        <div className="flex justify-center">
          <img src="/rolex/assets/logo-3d.png" alt="Rolex" style={{ width: 37, height: 40, objectFit: 'contain' }} />
        </div>

        {/* Confirmed heading */}
        <p
          className="font-kingdom text-center"
          style={{ fontSize: 28, lineHeight: '35px', color: '#111111', marginTop: 48 }}
        >
          Confirmé
        </p>

        {/* Body text */}
        <div className="flex flex-col" style={{ gap: 12, marginTop: 12 }}>
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
          ref={cardRef}
          style={{
            width: 265,
            height: 396,
            borderRadius: 32,
            background: 'linear-gradient(45deg, #B9966F, #FCF6E9)',
            boxShadow: '-4px 4px 32px rgba(0, 0, 0, 0.12)',
            transition: 'transform 0.15s ease-out, box-shadow 0.15s ease-out',
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
