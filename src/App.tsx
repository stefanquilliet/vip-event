import { Routes, Route } from 'react-router-dom'
import InviteGuest1 from './pages/InviteGuest1'
import InviteGuest2 from './pages/InviteGuest2'
import CheckinGuest1 from './pages/CheckinGuest1'
import CheckinGuest2 from './pages/CheckinGuest2'

export default function App() {
  return (
    <Routes>
      <Route path="/invite-guest-1" element={<InviteGuest1 />} />
      <Route path="/invite-guest-2" element={<InviteGuest2 />} />
      <Route path="/checkin-guest-1" element={<CheckinGuest1 />} />
      <Route path="/checkin-guest-2" element={<CheckinGuest2 />} />
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
