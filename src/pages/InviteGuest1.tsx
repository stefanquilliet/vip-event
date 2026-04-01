import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const STORAGE_KEY = 'rsvp-guest-1'

export default function InviteGuest1() {
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  function handleConfirm() {
    localStorage.setItem(STORAGE_KEY, 'true')
    navigate('/invite-guest-1/confirmed')
  }

  return (
    <div className="page-container" style={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}>
      {/* Top content */}
      <div className="flex flex-col px-8" style={{ paddingTop: 48 }}>
        {/* Logo */}
        <div className="flex justify-center">
          <img src="/rolex/assets/logo-3d.png" alt="Rolex" style={{ width: 37, height: 40, objectFit: 'contain' }} />
        </div>

        {/* Guest name */}
        <p
          className="font-kingdom text-center"
          style={{ fontSize: 28, lineHeight: '35px', color: '#111111', marginTop: 48 }}
        >
          Monsieur<br />Adrien Van Delft
        </p>

        {/* Invitation card */}
        <div
          className="flex flex-col bg-white"
          style={{
            marginTop: 24,
            borderRadius: 32,
            padding: '12px 12px 24px 12px',
            gap: 16,
            boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
          }}
        >
          {/* Hero image */}
          <img
            src="/rolex/assets/invitation-hero.png"
            alt="Rolex Manufacture"
            style={{
              width: '100%',
              height: 110,
              objectFit: 'cover',
              borderRadius: 16,
              filter: 'brightness(1.1) contrast(0.85) saturate(0.9)',
            }}
          />

          {/* Text */}
          <div className="flex flex-col" style={{ padding: '0 4px', gap: 12 }}>
            <p style={{ fontSize: 22, fontWeight: 700, lineHeight: '28.6px', color: '#111111', fontFamily: 'Helvetica, Arial, sans-serif' }}>
              Nouvelle collection<br />&amp; manufacture
            </p>
            <div className="flex flex-col" style={{ gap: 4 }}>
              <p style={{ fontSize: 18, lineHeight: '25px', color: '#111111', fontFamily: 'Helvetica, Arial, sans-serif' }}>Vendredi 15 Mai, 2026</p>
              <p style={{ fontSize: 18, lineHeight: '25px', color: '#111111', fontFamily: 'Helvetica, Arial, sans-serif' }}>9h00 – 21h00</p>
              <p style={{ fontSize: 18, lineHeight: '25px', color: '#111111', fontFamily: 'Helvetica, Arial, sans-serif' }}>Genève, Suisse</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA — 24px from bottom */}
      <div className="px-8" style={{ marginTop: 'auto', paddingBottom: 24 }}>
        <button
          onClick={handleConfirm}
          className="btn-cta"
          style={{
            width: '100%',
            height: 56,
            color: '#ffffff',
            borderRadius: 100,
            fontSize: 16,
            fontWeight: 700,
            fontFamily: 'Helvetica, Arial, sans-serif',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Je confirme ma venue
        </button>
      </div>
    </div>
  )
}
