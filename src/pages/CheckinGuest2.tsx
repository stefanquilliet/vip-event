import { useEffect, useRef } from 'react'

const STORAGE_KEY = 'checkin-guest-2'

export default function CheckinGuest2() {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, 'true')
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      const gamma = e.gamma ?? 0
      const beta = e.beta ?? 45

      const tiltX = Math.max(-45, Math.min(45, gamma)) / 45
      const tiltY = Math.max(-45, Math.min(45, beta - 45)) / 45

      const angle = 45 + tiltX * 25 + tiltY * 15
      const shadowX = -4 + tiltX * 10
      const shadowY = -4 - tiltY * 10
      const shadowBlur = 32 + Math.abs(tiltX) * 16
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
      window.addEventListener('deviceorientation', handleOrientation)
      return () => window.removeEventListener('deviceorientation', handleOrientation)
    }
  }, [])

  return (
    <div
      className="page-container"
      style={{ height: '100dvh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
    >
      <div
        ref={cardRef}
        style={{
          width: 265,
          height: 396,
          borderRadius: 32,
          background: 'linear-gradient(45deg, #B9966F, #FCF6E9)',
          boxShadow: '-4px -4px 32px rgba(0, 0, 0, 0.12)',
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
      <p
        style={{
          marginTop: 32,
          fontSize: 18,
          lineHeight: '19.8px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          color: '#111111',
          opacity: 0.5,
          textAlign: 'center',
        }}
      >
        Présentez votre carte
      </p>
    </div>
  )
}
