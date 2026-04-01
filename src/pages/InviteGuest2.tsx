import { useState, useEffect } from 'react'

const STORAGE_KEY = 'rsvp-guest-2'

export default function InviteGuest2() {
  const [confirmed, setConfirmed] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
      setConfirmed(true)
    }
  }, [])

  function handleConfirm() {
    localStorage.setItem(STORAGE_KEY, 'true')
    setConfirmed(true)
  }

  if (confirmed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">An Evening to Remember</p>
        <h1 className="text-3xl font-semibold mb-4">See you there, Romain.</h1>
        <p className="text-gray-600">Your attendance has been confirmed. We look forward to welcoming you.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">An Evening to Remember</p>
      <h1 className="text-3xl font-semibold mb-2">Dear Romain Grossier,</h1>
      <p className="text-gray-600 mb-8 max-w-sm">
        You are cordially invited to an exclusive private gathering.
      </p>

      <div className="mb-10 space-y-2 text-gray-700">
        <p className="font-medium text-lg">The Grand Maison</p>
        <p>Saturday, May 10, 2025</p>
        <p>8:00 PM — 11:00 PM</p>
        <p>12 Rue de la Paix, Paris</p>
      </div>

      <button
        onClick={handleConfirm}
        className="px-8 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
      >
        Confirm my attendance
      </button>
    </div>
  )
}
