import { useState } from 'react'
import AuthScreen from './screens/AuthScreen'
import TeacherDashboard from './screens/TeacherDashboard'
import StudentDashboard from './screens/StudentDashboard'

type Session = {
  role: 'teacher' | 'student'
} | null

export default function App() {
  const [session, setSession] = useState<Session>(null)

  if (!session) {
    return (
      <AuthScreen
        onLogin={(role) => setSession({ role })}
      />
    )
  }

  if (session.role === 'teacher') {
    return <TeacherDashboard onLogout={() => setSession(null)} />
  }

  return <StudentDashboard onLogout={() => setSession(null)} />
}