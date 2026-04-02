import { Routes, Route } from 'react-router-dom'
import InviteGuest1 from './pages/InviteGuest1'
import InviteGuest1Confirmed from './pages/InviteGuest1Confirmed'
import InviteGuest2 from './pages/InviteGuest2'
import InviteGuest2Confirmed from './pages/InviteGuest2Confirmed'
import CheckinGuest1 from './pages/CheckinGuest1'
import CheckinGuest2 from './pages/CheckinGuest2'
import WelcomeGuest1 from './pages/WelcomeGuest1'
import WelcomeGuest2 from './pages/WelcomeGuest2'

export default function App() {
  return (
    <Routes>
      <Route path="/invite-adrien" element={<InviteGuest1 />} />
      <Route path="/invite-adrien/confirmed" element={<InviteGuest1Confirmed />} />
      <Route path="/invite-romain" element={<InviteGuest2 />} />
      <Route path="/invite-romain/confirmed" element={<InviteGuest2Confirmed />} />
      <Route path="/checkin-adrien" element={<CheckinGuest1 />} />
      <Route path="/checkin-romain" element={<CheckinGuest2 />} />
      <Route path="/welcome-adrien" element={<WelcomeGuest1 />} />
      <Route path="/welcome-romain" element={<WelcomeGuest2 />} />
      <Route
        path="*"
        element={
          <div className="flex items-center justify-center min-h-screen text-gray-500">
            Page not found
          </div>
        }
      />
    </Routes>
  )
}
