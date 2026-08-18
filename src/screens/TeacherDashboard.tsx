import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import NewTeamModal from '../components/modals/NewTeamModal'
import JoinTeamModal from '../components/modals/JoinTeamModal'
import DuplicateTeamModal from '../components/modals/DuplicateTeamModal'
import TeamManagementScreen from './TeamManagement'
import ProgressScreen from './ProgressScreen'

const TEAMS = [
  { name: 'Alpha Squad', code: 'TRK-4821', members: 5, progress: 78, status: 'Active', created: 'Aug 1, 2026' },
  { name: 'Beta Force', code: 'TRK-2934', members: 4, progress: 45, status: 'Active', created: 'Aug 3, 2026' },
  { name: 'Gamma Crew', code: 'TRK-7723', members: 6, progress: 92, status: 'Near Victory', created: 'Jul 28, 2026' },
  { name: 'Delta Team', code: 'TRK-1155', members: 3, progress: 18, status: 'Quest Accepted', created: 'Aug 10, 2026' },
  { name: 'Omega Unit', code: 'TRK-9901', members: 5, progress: 60, status: 'Powering Through', created: 'Jul 20, 2026' },
]

interface Props {
  onLogout: () => void
}

export default function TeacherDashboard({ onLogout }: Props) {
  const [screen, setScreen] = useState('dashboard')
  const [modal, setModal] = useState<'new' | 'join' | 'duplicate' | null>(null)
  const [selectedTeam, setSelectedTeam] = useState<typeof TEAMS[0] | null>(null)
  const [managingTeam, setManagingTeam] = useState<typeof TEAMS[0] | null>(null)

  const handleNavigate = (id: string) => {
    setScreen(id)
    setManagingTeam(null)
  }

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening'

  const statusBadge = (status: string) => {
    const map: Record<string, string> = {
      'Active': 'badge-active',
      'Near Victory': 'badge-near',
      'Quest Accepted': 'badge-quest',
      'Powering Through': 'badge-powering',
      'Legendary Victory': 'badge-legendary',
    }
    return <span className={`badge ${map[status] || 'badge-quest'}`}>{status}</span>
  }

  if (managingTeam) {
    return (
      <div style={{ display: 'flex', height: '100vh', background: '#0D0221' }}>
        <Sidebar role="teacher" active="classrooms" onNavigate={handleNavigate} onLogout={onLogout} />
        <TeamManagementScreen team={managingTeam} onBack={() => setManagingTeam(null)} />
      </div>
    )
  }

  if (screen === 'progress') {
    return (
      <div style={{ display: 'flex', height: '100vh', background: '#0D0221' }}>
        <Sidebar role="teacher" active="progress" onNavigate={handleNavigate} onLogout={onLogout} />
        <ProgressScreen />
      </div>
    )
  }

  return (
    <div className="bg-cosmic" style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar role="teacher" active={screen} onNavigate={handleNavigate} onLogout={onLogout} />

      <main style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 4 }}>
              {greeting}, <span style={{ color: '#00FFFF' }}>Professor Chen</span> 👋
            </h1>
            <p style={{ color: '#A8A0B8', fontSize: '0.85rem' }}>Here's what's happening with your classrooms today.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="glass" style={{ padding: '0.5rem 1rem', borderRadius: 10, fontSize: '0.8rem', color: '#A8A0B8' }}>
              📅 Aug 18, 2026
            </div>
            <div className="pulse-cyan" style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'linear-gradient(135deg, #7B1FA2, #00FFFF)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
            }}>👩‍🏫</div>
          </div>
        </div>

        {/* Stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { label: 'Total Teams', val: '5', icon: '🏛', delta: '+1 this week', color: '#7B1FA2' },
            { label: 'Total Students', val: '23', icon: '👥', delta: '+3 new', color: '#00BCD4' },
            { label: 'Active Projects', val: '5', icon: '📋', delta: 'All on track', color: '#9C27B0' },
            { label: 'Pending Approvals', val: '7', icon: '⏳', delta: 'Needs review', color: '#FF9800' },
          ].map(({ label, val, icon, delta, color }) => (
            <div key={label} className="glass stat-card" style={{ borderRadius: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#A8A0B8', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</span>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: `${color}22`, border: `1px solid ${color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                }}>{icon}</div>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#F2F2F2', lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: '0.72rem', color: color, marginTop: '0.5rem', fontWeight: 500 }}>{delta}</div>
            </div>
          ))}
        </div>

        {/* Manage Classrooms */}
        <div className="glass" style={{ borderRadius: 16, padding: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h2 style={{ fontSize: '1rem', fontWeight: 700 }}>Manage Classrooms</h2>
              <p style={{ fontSize: '0.78rem', color: '#A8A0B8', marginTop: 2 }}>Create, join, or duplicate your project teams</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              {
                id: 'new', icon: '+', label: 'New Team',
                desc: 'Create a new classroom / project team',
                color: '#7B1FA2', border: 'rgba(123,31,162,0.5)',
              },
              {
                id: 'join', icon: '#', label: 'Join Team',
                desc: 'Claim an existing team using a Team Code',
                color: '#00BCD4', border: 'rgba(0,188,212,0.4)',
              },
              {
                id: 'duplicate', icon: '⧉', label: 'Duplicate',
                desc: 'Duplicate a team with the same student roster',
                color: '#9C27B0', border: 'rgba(156,39,176,0.4)',
              },
            ].map(({ id, icon, label, desc, color, border }) => (
              <button
                key={id}
                onClick={() => setModal(id as 'new' | 'join' | 'duplicate')}
                style={{
                  background: `${color}12`,
                  border: `1px solid ${border}`,
                  borderRadius: 14,
                  padding: '1.25rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                  color: '#F2F2F2',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = `${color}20`; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = `${color}12`; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: 12,
                  background: `${color}25`, border: `1px solid ${border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem', fontWeight: 800, color,
                  marginBottom: '0.875rem', fontFamily: 'Inter',
                }}>{icon}</div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.3rem', color }}>{label}</div>
                <div style={{ fontSize: '0.75rem', color: '#A8A0B8', lineHeight: 1.4 }}>{desc}</div>
              </button>
            ))}
          </div>

          {/* Teams table */}
          <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(123,31,162,0.2)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'rgba(123,31,162,0.12)', borderBottom: '1px solid rgba(123,31,162,0.2)' }}>
                  {['Team Name', 'Team Code', 'Members', 'Progress', 'Status', 'Created', 'Actions'].map(col => (
                    <th key={col} style={{
                      padding: '0.75rem 1rem', textAlign: 'left',
                      fontSize: '0.7rem', fontWeight: 600, color: '#A8A0B8',
                      textTransform: 'uppercase', letterSpacing: '0.06em',
                    }}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TEAMS.map((team, i) => (
                  <tr key={i} className="table-row" style={{ borderBottom: '1px solid rgba(123,31,162,0.1)' }}>
                    <td style={{ padding: '0.875rem 1rem' }}>
                      <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{team.name}</div>
                    </td>
                    <td style={{ padding: '0.875rem 1rem' }}>
                      <span style={{
                        fontFamily: 'monospace', fontSize: '0.78rem',
                        background: 'rgba(0,255,255,0.08)', color: '#00FFFF',
                        padding: '0.2rem 0.5rem', borderRadius: 6,
                        border: '1px solid rgba(0,255,255,0.2)',
                      }}>{team.code}</span>
                    </td>
                    <td style={{ padding: '0.875rem 1rem', fontSize: '0.85rem', color: '#A8A0B8' }}>
                      {team.members} students
                    </td>
                    <td style={{ padding: '0.875rem 1rem', minWidth: 120 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div className="progress-bar" style={{ flex: 1 }}>
                          <div className="progress-fill" style={{ width: `${team.progress}%` }} />
                        </div>
                        <span style={{ fontSize: '0.75rem', color: '#A8A0B8', minWidth: 28 }}>{team.progress}%</span>
                      </div>
                    </td>
                    <td style={{ padding: '0.875rem 1rem' }}>{statusBadge(team.status)}</td>
                    <td style={{ padding: '0.875rem 1rem', fontSize: '0.78rem', color: '#A8A0B8' }}>{team.created}</td>
                    <td style={{ padding: '0.875rem 1rem' }}>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <button className="btn-secondary" style={{ padding: '0.3rem 0.6rem', fontSize: '0.72rem', borderRadius: 7 }}>
                          View
                        </button>
                        <button className="btn-secondary" style={{ padding: '0.3rem 0.6rem', fontSize: '0.72rem', borderRadius: 7 }}
                          onClick={() => { setSelectedTeam(team); setModal('duplicate') }}>
                          Duplicate
                        </button>
                        <button className="btn-cyan" style={{ padding: '0.3rem 0.6rem', fontSize: '0.72rem', borderRadius: 7 }}
                          onClick={() => setManagingTeam(team)}>
                          Manage
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {modal === 'new' && <NewTeamModal onClose={() => setModal(null)} />}
      {modal === 'join' && <JoinTeamModal onClose={() => setModal(null)} />}
      {modal === 'duplicate' && <DuplicateTeamModal team={selectedTeam} onClose={() => { setModal(null); setSelectedTeam(null) }} />}
    </div>
  )
}
