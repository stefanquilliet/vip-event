export default function InviteGuest1Confirmed() {
  return (
    <div className="page-container">
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
    </div>
  )
}
