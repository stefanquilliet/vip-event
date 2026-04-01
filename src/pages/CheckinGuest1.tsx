import { useEffect } from 'react'

const STORAGE_KEY = 'checkin-guest-1'

export default function CheckinGuest1() {
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, 'true')
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">An Evening to Remember</p>
      <h1 className="text-3xl font-semibold mb-4">Welcome, Alice.</h1>
      <p className="text-gray-600 max-w-sm">
        Your arrival has been recorded. Please proceed to the reception — we are delighted to have you with us tonight.
      </p>
    </div>
  )
}
