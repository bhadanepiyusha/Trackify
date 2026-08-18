import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ProgressScreen from './ProgressScreen'
import AchievementsScreen from './AchievementsScreen'

const TASKS = [
  { name: 'Design System Setup', status: 'Legendary Victory', progress: 100, priority: 'High', difficulty: 'Medium', deadline: 'Aug 10', upload: true },
  { name: 'API Integration', status: 'Near Victory', progress: 85, priority: 'High', difficulty: 'Hard', deadline: 'Aug 20', upload: false },
  { name: 'Database Schema', status: 'Powering Through', progress: 60, priority: 'Medium', difficulty: 'Hard', deadline: 'Aug 22', upload: false },
  { name: 'User Auth Flow', status: 'Powering Through', progress: 48, priority: 'High', difficulty: 'Medium', deadline: 'Aug 24', upload: false },
  { name: 'Dashboard UI', status: 'Quest Accepted', progress: 15, priority: 'Medium', difficulty: 'Easy', deadline: 'Aug 30', upload: false },
  { name: 'Testing Suite', status: 'Quest Accepted', progress: 5, priority: 'Low', difficulty: 'Medium', deadline: 'Sep 2', upload: false },
]

const statusClass: Record<string, string> = {
  'Legendary Victory': 'badge-legendary',
  'Near Victory': 'badge-near',
  'Powering Through': 'badge-powering',
  'Quest Accepted': 'badge-quest',
}

const priorityColor: Record<string, string> = {
  'High': '#ff6b6b',
  'Medium': '#FFD54F',
  'Low': '#81C784',
}

const difficultyColor: Record<string, string> = {
  'Easy': '#81C784',
  'Medium': '#FFD54F',
  'Hard': '#ff6b6b',
}

interface Props { onLogout: () => void }

export default function StudentDashboard({ onLogout }: Props) {
  const [screen, setScreen] = useState('dashboard')
  const [showAddTask, setShowAddTask] = useState(false)

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening'

  if (screen === 'progress') {
    return (
      <div style={{ display: 'flex', height: '100vh', background: '#0D0221' }}>
        <Sidebar role="student" active="progress" onNavigate={setScreen} onLogout={onLogout} />
        <ProgressScreen />
      </div>
    )
  }

  if (screen === 'achievements' || screen === 'rewards') {
    return (
      <div style={{ display: 'flex', height: '100vh', background: '#0D0221' }}>
        <Sidebar role="student" active={screen} onNavigate={setScreen} onLogout={onLogout} />
        <AchievementsScreen />
      </div>
    )
  }

  return (
    <div className="bg-cosmic" style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar role="student" active={screen} onNavigate={setScreen} onLogout={onLogout} />

      <main style={{ flex: 1, overflowY: 'auto', padding: '2rem', position: 'relative' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 4 }}>
              {greeting}, <span style={{ color: '#00FFFF' }}>Alex</span> 👋
            </h1>
            <p style={{ color: '#A8A0B8', fontSize: '0.85rem' }}>Alpha Squad · Smart Campus App</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="glass" style={{ padding: '0.4rem 0.875rem', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ color: '#00FFFF', fontSize: '0.8rem' }}>⚡</span>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#00FFFF' }}>Level 5</span>
              <span style={{ fontSize: '0.75rem', color: '#A8A0B8' }}>· 2,840 XP</span>
            </div>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'linear-gradient(135deg, #00BCD4, #7B1FA2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
            }}>🧑‍💻</div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { label: 'Overall Progress', val: '77%', icon: '📈', color: '#00FFFF', sub: 'Team avg: 68%' },
            { label: 'Tasks Completed', val: '8', icon: '✅', color: '#81C784', sub: '+3 this week' },
            { label: 'Tasks Remaining', val: '4', icon: '⏳', color: '#FFD54F', sub: '2 due soon' },
            { label: 'Upcoming Deadline', val: 'Aug 20', icon: '📅', color: '#CE93D8', sub: 'API Integration' },
          ].map(({ label, val, icon, color, sub }) => (
            <div key={label} className="glass stat-card" style={{ borderRadius: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
                <span style={{ fontSize: '0.72rem', color: '#A8A0B8', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</span>
                <span style={{ fontSize: 18 }}>{icon}</span>
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color, lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: '0.7rem', color: '#A8A0B8', marginTop: '0.5rem' }}>{sub}</div>
            </div>
          ))}
        </div>

        {/* Tasks table */}
        <div className="glass" style={{ borderRadius: 16, padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h2 style={{ fontSize: '1rem', fontWeight: 700 }}>My Tasks</h2>
              <p style={{ fontSize: '0.78rem', color: '#A8A0B8', marginTop: 2 }}>Track your assigned work and submissions</p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <select style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(123,31,162,0.35)',
                borderRadius: 8, color: '#A8A0B8', fontSize: '0.78rem', padding: '0.4rem 0.75rem',
                outline: 'none', cursor: 'pointer', fontFamily: 'Inter',
              }}>
                <option style={{ background: '#1a0533' }}>All Status</option>
                <option style={{ background: '#1a0533' }}>Quest Accepted</option>
                <option style={{ background: '#1a0533' }}>Powering Through</option>
                <option style={{ background: '#1a0533' }}>Near Victory</option>
                <option style={{ background: '#1a0533' }}>Legendary Victory</option>
              </select>
            </div>
          </div>

          <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(123,31,162,0.2)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'rgba(123,31,162,0.12)', borderBottom: '1px solid rgba(123,31,162,0.2)' }}>
                  {['Task Name', 'Status', 'Progress', 'Priority', 'Difficulty', 'Upload', 'Deadline'].map(col => (
                    <th key={col} style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.68rem', fontWeight: 600, color: '#A8A0B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TASKS.map((task) => (
                  <tr key={task.name} className="table-row" style={{ borderBottom: '1px solid rgba(123,31,162,0.1)' }}>
                    <td style={{ padding: '0.875rem 1rem', fontWeight: 600, fontSize: '0.875rem' }}>{task.name}</td>
                    <td style={{ padding: '0.875rem 1rem' }}>
                      <span className={`badge ${statusClass[task.status]}`}>{task.status}</span>
                    </td>
                    <td style={{ padding: '0.875rem 1rem', minWidth: 120 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div className="progress-bar" style={{ flex: 1 }}>
                          <div className="progress-fill" style={{ width: `${task.progress}%` }} />
                        </div>
                        <span style={{ fontSize: '0.72rem', color: '#A8A0B8', minWidth: 28 }}>{task.progress}%</span>
                      </div>
                    </td>
                    <td style={{ padding: '0.875rem 1rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: priorityColor[task.priority] }}>● {task.priority}</span>
                    </td>
                    <td style={{ padding: '0.875rem 1rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: difficultyColor[task.difficulty] }}>{task.difficulty}</span>
                    </td>
                    <td style={{ padding: '0.875rem 1rem' }}>
                      {task.upload ? (
                        <span style={{ fontSize: '0.72rem', color: '#81C784' }}>✓ Submitted</span>
                      ) : (
                        <button className="btn-secondary" style={{ padding: '0.25rem 0.6rem', fontSize: '0.7rem', borderRadius: 7 }}>
                          ↑ Upload
                        </button>
                      )}
                    </td>
                    <td style={{ padding: '0.875rem 1rem', fontSize: '0.78rem', color: '#A8A0B8' }}>
                      {task.deadline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAB */}
        <button
          onClick={() => setShowAddTask(true)}
          style={{
            position: 'fixed', bottom: 28, right: 28,
            width: 52, height: 52, borderRadius: '50%',
            background: 'linear-gradient(135deg, #7B1FA2, #00FFFF)',
            border: 'none', cursor: 'pointer', fontSize: '1.4rem',
            boxShadow: '0 4px 24px rgba(123,31,162,0.5), 0 0 32px rgba(0,255,255,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'transform 0.2s',
            color: '#fff',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        >+</button>
      </main>

      {showAddTask && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(13,2,33,0.88)', backdropFilter: 'blur(10px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200,
        }} onClick={() => setShowAddTask(false)}>
          <div className="glass glow-violet fade-in" style={{ width: 420, borderRadius: 20, padding: '2rem' }} onClick={e => e.stopPropagation()}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Add New Task</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '1.25rem' }}>
              <input className="input-field" placeholder="Task name" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <select className="input-field" style={{ cursor: 'pointer' }}>
                  <option style={{ background: '#1a0533' }}>Priority: High</option>
                  <option style={{ background: '#1a0533' }}>Priority: Medium</option>
                  <option style={{ background: '#1a0533' }}>Priority: Low</option>
                </select>
                <input className="input-field" type="date" style={{ colorScheme: 'dark' }} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button className="btn-secondary" style={{ flex: 1 }} onClick={() => setShowAddTask(false)}>Cancel</button>
              <button className="btn-primary" style={{ flex: 2 }} onClick={() => setShowAddTask(false)}>Add Task</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
