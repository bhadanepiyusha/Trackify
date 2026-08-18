import { useState } from 'react'

const PENDING = [
  { name: 'Lena Park', email: 'lena@school.edu', date: 'Aug 16, 2026', avatar: '👩' },
  { name: 'Marcus Rivera', email: 'marcus@school.edu', date: 'Aug 17, 2026', avatar: '🧑' },
]

const MEMBERS = [
  { name: 'Sarah Kim', role: 'Team Leader', tasks: 8, contribution: 32, progress: 88, avatar: '👩‍💼' },
  { name: 'Alex Chen', role: 'Developer', tasks: 6, contribution: 24, progress: 72, avatar: '👨‍💻' },
  { name: 'Jordan Lee', role: 'Designer', tasks: 5, contribution: 20, progress: 65, avatar: '🧑‍🎨' },
  { name: 'Priya Nair', role: 'Analyst', tasks: 4, contribution: 16, progress: 55, avatar: '👩‍🔬' },
  { name: 'Kai Torres', role: 'DevOps', tasks: 3, contribution: 8, progress: 40, avatar: '👨‍🚀' },
]

interface Props {
  team: { name: string; code: string; progress: number; status: string }
  onBack: () => void
}

export default function TeamManagementScreen({ team, onBack }: Props) {
  const [leader, setLeader] = useState('Sarah Kim')
  const [pending, setPending] = useState(PENDING)

  const approve = (name: string) => setPending(p => p.filter(s => s.name !== name))
  const reject = (name: string) => setPending(p => p.filter(s => s.name !== name))

  return (
    <main style={{ flex: 1, overflowY: 'auto', padding: '2rem' }} className="bg-cosmic fade-in">
      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <button onClick={onBack} style={{
          background: 'none', border: 'none', color: '#A8A0B8', cursor: 'pointer',
          fontSize: '0.82rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: 6,
          fontFamily: 'Inter',
        }}>
          ← Back to Dashboard
        </button>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>{team.name}</h1>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', alignItems: 'center' }}>
              <span style={{ fontFamily: 'monospace', fontSize: '0.8rem', background: 'rgba(0,255,255,0.08)', color: '#00FFFF', padding: '0.2rem 0.6rem', borderRadius: 6, border: '1px solid rgba(0,255,255,0.2)' }}>{team.code}</span>
              <span style={{ fontSize: '0.8rem', color: '#A8A0B8' }}>Smart Campus App</span>
              <span className="badge badge-active">Active</span>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.75rem', color: '#A8A0B8', marginBottom: 4 }}>Overall Progress</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div className="progress-bar" style={{ width: 120 }}>
                <div className="progress-fill" style={{ width: `${team.progress}%` }} />
              </div>
              <span style={{ fontSize: '1rem', fontWeight: 700, color: '#00FFFF' }}>{team.progress}%</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '1.25rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Pending Approval */}
          <div className="glass" style={{ borderRadius: 16, padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 700 }}>Pending Approval</h3>
              <span className="badge badge-pending">{pending.length} waiting</span>
            </div>

            {pending.length === 0 ? (
              <p style={{ color: '#A8A0B8', fontSize: '0.82rem', padding: '1rem 0' }}>No pending requests.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {pending.map((s) => (
                  <div key={s.name} style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: '0.875rem',
                    border: '1px solid rgba(123,31,162,0.15)',
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%', fontSize: 20,
                      background: 'rgba(123,31,162,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>{s.avatar}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{s.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#A8A0B8' }}>{s.email} · Requested {s.date}</div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="btn-primary" style={{ padding: '0.35rem 0.75rem', fontSize: '0.72rem', borderRadius: 8 }} onClick={() => approve(s.name)}>
                        Approve
                      </button>
                      <button className="btn-secondary" style={{ padding: '0.35rem 0.75rem', fontSize: '0.72rem', borderRadius: 8, color: '#ff6b6b', borderColor: 'rgba(255,107,107,0.3)' }} onClick={() => reject(s.name)}>
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Team Members */}
          <div className="glass" style={{ borderRadius: 16, padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 700 }}>Team Members</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#A8A0B8' }}>Team Leader:</span>
                <select
                  value={leader}
                  onChange={e => setLeader(e.target.value)}
                  style={{
                    background: 'rgba(0,255,255,0.08)',
                    border: '1px solid rgba(0,255,255,0.3)',
                    borderRadius: 8, color: '#00FFFF',
                    fontSize: '0.78rem', padding: '0.25rem 0.5rem',
                    outline: 'none', cursor: 'pointer', fontFamily: 'Inter',
                  }}
                >
                  {MEMBERS.map(m => <option key={m.name} value={m.name} style={{ background: '#1a0533', color: '#F2F2F2' }}>{m.name}</option>)}
                </select>
              </div>
            </div>

            <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(123,31,162,0.2)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'rgba(123,31,162,0.12)', borderBottom: '1px solid rgba(123,31,162,0.2)' }}>
                    {['Student', 'Role', 'Tasks Done', 'Contribution', 'Progress', 'Actions'].map(col => (
                      <th key={col} style={{ padding: '0.625rem 0.875rem', textAlign: 'left', fontSize: '0.68rem', fontWeight: 600, color: '#A8A0B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MEMBERS.map((m) => (
                    <tr key={m.name} className="table-row" style={{ borderBottom: '1px solid rgba(123,31,162,0.1)' }}>
                      <td style={{ padding: '0.75rem 0.875rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(123,31,162,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>{m.avatar}</div>
                          <div>
                            <div style={{ fontWeight: 600, fontSize: '0.825rem' }}>{m.name}</div>
                            {m.name === leader && <span style={{ fontSize: '0.65rem', color: '#00FFFF', fontWeight: 600 }}>★ Leader</span>}
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '0.75rem 0.875rem', fontSize: '0.78rem', color: '#A8A0B8' }}>{m.role}</td>
                      <td style={{ padding: '0.75rem 0.875rem', fontSize: '0.85rem', fontWeight: 600 }}>{m.tasks}</td>
                      <td style={{ padding: '0.75rem 0.875rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <div className="progress-bar" style={{ width: 60 }}>
                            <div className="progress-fill" style={{ width: `${m.contribution}%` }} />
                          </div>
                          <span style={{ fontSize: '0.75rem', color: '#A8A0B8' }}>{m.contribution}%</span>
                        </div>
                      </td>
                      <td style={{ padding: '0.75rem 0.875rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <div className="progress-bar" style={{ width: 60 }}>
                            <div className="progress-fill" style={{ width: `${m.progress}%` }} />
                          </div>
                          <span style={{ fontSize: '0.75rem', color: '#A8A0B8' }}>{m.progress}%</span>
                        </div>
                      </td>
                      <td style={{ padding: '0.75rem 0.875rem' }}>
                        <button className="btn-secondary" style={{ padding: '0.25rem 0.625rem', fontSize: '0.7rem', borderRadius: 7 }}>View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Member Contribution sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="glass" style={{ borderRadius: 16, padding: '1.5rem' }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '1.25rem' }}>Member Contribution</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {MEMBERS.map((m) => (
                <div key={m.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: 14 }}>{m.avatar}</span>
                      <span style={{ fontSize: '0.78rem', fontWeight: 500 }}>{m.name.split(' ')[0]}</span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#00FFFF', fontWeight: 600 }}>{m.contribution}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${m.contribution}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass" style={{ borderRadius: 16, padding: '1.5rem' }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '1rem' }}>Task Summary</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {[
                { label: 'Completed', val: 26, color: '#00FFFF' },
                { label: 'Pending', val: 9, color: '#FFD54F' },
                { label: 'In Review', val: 4, color: '#CE93D8' },
                { label: 'Overdue', val: 2, color: '#ff6b6b' },
              ].map(({ label, val, color }) => (
                <div key={label} style={{
                  background: `${color}0D`,
                  border: `1px solid ${color}30`,
                  borderRadius: 12, padding: '0.875rem', textAlign: 'center',
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color }}>{val}</div>
                  <div style={{ fontSize: '0.7rem', color: '#A8A0B8', marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
