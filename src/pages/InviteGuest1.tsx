import { useNavigate } from 'react-router-dom'

const STORAGE_KEY = 'rsvp-guest-1'

export default function InviteGuest1() {
  const navigate = useNavigate()

  function handleConfirm() {
    localStorage.setItem(STORAGE_KEY, 'true')
    navigate('/invite-guest-1/confirmed')
  }

  return (
    <div className="page-container">
      <div className="flex flex-col px-8 pb-8" style={{ gap: 24 }}>
        {/* Logo */}
        <div className="flex justify-center items-center" style={{ height: 140 }}>
          <img src="/logo.png" alt="Rolex" style={{ width: 37, height: 40, objectFit: 'contain' }} />
        </div>

        {/* Guest name */}
        <p
          className="font-kingdom text-center"
          style={{ fontSize: 28, lineHeight: '35px', color: '#111111', marginTop: -24 }}
        >
          Monsieur<br />Adrien Van Delft
        </p>

        {/* Invitation card */}
        <div
          className="flex flex-col bg-white"
          style={{
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

        {/* CTA */}
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
