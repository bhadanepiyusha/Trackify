import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ProgressScreen from './ProgressScreen'
import AchievementsScreen from './AchievementsScreen'

const TASKS = [
  {
    name: 'Design System Setup',
    status: 'Legendary Victory',
    progress: 100,
    priority: 'High',
    difficulty: 'Medium',
    deadline: 'Aug 10',
    upload: true,
  },
  {
    name: 'API Integration',
    status: 'Near Victory',
    progress: 85,
    priority: 'High',
    difficulty: 'Hard',
    deadline: 'Aug 20',
    upload: false,
  },
  {
    name: 'Database Schema',
    status: 'Powering Through',
    progress: 60,
    priority: 'Medium',
    difficulty: 'Hard',
    deadline: 'Aug 22',
    upload: false,
  },
  {
    name: 'User Auth Flow',
    status: 'Powering Through',
    progress: 48,
    priority: 'High',
    difficulty: 'Medium',
    deadline: 'Aug 24',
    upload: false,
  },
  {
    name: 'Dashboard UI',
    status: 'Quest Accepted',
    progress: 15,
    priority: 'Medium',
    difficulty: 'Easy',
    deadline: 'Aug 30',
    upload: false,
  },
  {
    name: 'Testing Suite',
    status: 'Quest Accepted',
    progress: 5,
    priority: 'Low',
    difficulty: 'Medium',
    deadline: 'Sep 2',
    upload: false,
  },
]

const statusClass: Record<string, string> = {
  'Legendary Victory': 'badge-legendary',
  'Near Victory': 'badge-near',
  'Powering Through': 'badge-powering',
  'Quest Accepted': 'badge-quest',
}

const priorityColor: Record<string, string> = {
  High: '#ff6b6b',
  Medium: '#FFD54F',
  Low: '#81C784',
}

const difficultyColor: Record<string, string> = {
  Easy: '#81C784',
  Medium: '#FFD54F',
  Hard: '#ff6b6b',
}

interface Props {
  onLogout: () => void
}

type Screen =
  | 'dashboard'
  | 'tasks'
  | 'project'
  | 'chat'
  | 'progress'
  | 'achievements'
  | 'rewards'
  | 'profile'
  | 'settings'

export default function StudentDashboard({ onLogout }: Props) {
  const [screen, setScreen] = useState<Screen>('dashboard')
  const [showAddTask, setShowAddTask] = useState(false)

  const [messages, setMessages] = useState([
    { id: 1, sender: 'Sarah Kim', text: 'Hey team! I finished the API planning.', time: '10:42 AM', own: false },
    { id: 2, sender: 'You', text: 'Nice! I will work on the dashboard UI today.', time: '10:45 AM', own: true },
    { id: 3, sender: 'Rohan Shah', text: 'I have pushed the database changes.', time: '11:03 AM', own: false },
  ])
  const [newMessage, setNewMessage] = useState('')
  const [profileEditing, setProfileEditing] = useState(false)
  const [profileName, setProfileName] = useState('Alex')
  const [profileEmail, setProfileEmail] = useState('alex@student.edu')
  const [notifications, setNotifications] = useState(true)
  const [emailUpdates, setEmailUpdates] = useState(true)
  const [savedSettings, setSavedSettings] = useState(false)

  const sendMessage = () => {
    const message = newMessage.trim()
    if (!message) return

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: 'You',
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        own: true,
      },
    ])
    setNewMessage('')
  }

  const hour = new Date().getHours()
  const greeting =
    hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening'

  /* ---------------- PROGRESS ---------------- */

  if (screen === 'progress') {
    return (
      <div
        style={{
          display: 'flex',
          height: '100vh',
          background: '#0D0221',
        }}
      >
        <Sidebar
          role="student"
          active="progress"
          onNavigate={(id) => setScreen(id as Screen)}
          onLogout={onLogout}
        />

        <ProgressScreen />
      </div>
    )
  }

  /* ---------------- ACHIEVEMENTS / REWARDS ---------------- */

  if (screen === 'achievements' || screen === 'rewards') {
    return (
      <div
        style={{
          display: 'flex',
          height: '100vh',
          background: '#0D0221',
        }}
      >
        <Sidebar
          role="student"
          active={screen}
          onNavigate={(id) => setScreen(id as Screen)}
          onLogout={onLogout}
        />

        <AchievementsScreen />
      </div>
    )
  }

  /* ---------------- TASKS ---------------- */

  if (screen === 'tasks') {
    return (
      <div
        style={{
          display: 'flex',
          height: '100vh',
          background: '#0D0221',
        }}
      >
        <Sidebar
          role="student"
          active="tasks"
          onNavigate={(id) => setScreen(id as Screen)}
          onLogout={onLogout}
        />

        <main
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '2rem',
          }}
        >
          <h1
            style={{
              fontSize: '1.6rem',
              fontWeight: 800,
            }}
          >
            Assigned Tasks
          </h1>

          <p
            style={{
              color: '#A8A0B8',
              marginTop: 6,
            }}
          >
            View and manage your assigned project tasks.
          </p>

          <div
            className="glass"
            style={{
              marginTop: '2rem',
              padding: '1.5rem',
              borderRadius: 16,
            }}
          >
            <h2
              style={{
                fontSize: '1rem',
                marginBottom: '1rem',
              }}
            >
              Your Tasks
            </h2>

            {TASKS.map((task) => (
              <div
                key={task.name}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem 0',
                  borderBottom: '1px solid rgba(123,31,162,0.2)',
                }}
              >
                <div>
                  <div style={{ fontWeight: 600 }}>
                    {task.name}
                  </div>

                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: '#A8A0B8',
                      marginTop: 4,
                    }}
                  >
                    Deadline: {task.deadline}
                  </div>
                </div>

                <span
                  className={`badge ${statusClass[task.status]}`}
                >
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </main>
      </div>
    )
  }

  /* ---------------- PROJECT ---------------- */

  if (screen === 'project') {
    return (
      <div
        style={{
          display: 'flex',
          height: '100vh',
          background: '#0D0221',
        }}
      >
        <Sidebar
          role="student"
          active="project"
          onNavigate={(id) => setScreen(id as Screen)}
          onLogout={onLogout}
        />

        <main
          style={{
            flex: 1,
            padding: '2rem',
            overflowY: 'auto',
          }}
        >
          <h1
            style={{
              fontSize: '1.6rem',
              fontWeight: 800,
            }}
          >
            Project Details
          </h1>

          <p
            style={{
              color: '#A8A0B8',
              marginTop: 6,
            }}
          >
            Information about your current project.
          </p>

          <div
            className="glass"
            style={{
              marginTop: '2rem',
              padding: '1.5rem',
              borderRadius: 16,
            }}
          >
            <h2
              style={{
                fontSize: '1.2rem',
                fontWeight: 700,
              }}
            >
              Smart Campus App
            </h2>

            <p
              style={{
                color: '#A8A0B8',
                marginTop: '0.75rem',
                lineHeight: 1.6,
              }}
            >
              Your team is working on the Smart Campus App.
            </p>

            <div style={{ marginTop: '1.5rem' }}>
              <strong>Team:</strong> Alpha Squad
            </div>

            <div style={{ marginTop: '0.75rem' }}>
              <strong>Overall Progress:</strong> 77%
            </div>
          </div>
        </main>
      </div>
    )
  }

  /* ---------------- CHAT ---------------- */

  if (screen === 'chat') {
    return (
      <div style={{ display: 'flex', height: '100vh', background: '#0D0221' }}>
        <Sidebar role="student" active="chat" onNavigate={(id) => setScreen(id as Screen)} onLogout={onLogout} />
        <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Team Chat</h1>
            <p style={{ color: '#A8A0B8', marginTop: 6 }}>Communicate with your project team.</p>
          </div>
          <div className="glass" style={{ maxWidth: 900, height: 'calc(100vh - 150px)', minHeight: 500, borderRadius: 18, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid rgba(123,31,162,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div><div style={{ fontWeight: 700 }}>Alpha Squad</div><div style={{ color: '#81C784', fontSize: '0.72rem', marginTop: 3 }}>● 4 members online</div></div>
              <span style={{ fontSize: 20 }}>💬</span>
            </div>
            <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {messages.map((message) => (
                <div key={message.id} style={{ alignSelf: message.own ? 'flex-end' : 'flex-start', maxWidth: '72%' }}>
                  <div style={{ fontSize: '0.7rem', color: '#A8A0B8', marginBottom: 4, textAlign: message.own ? 'right' : 'left' }}>{message.sender} · {message.time}</div>
                  <div style={{ padding: '0.7rem 0.9rem', borderRadius: message.own ? '14px 14px 4px 14px' : '14px 14px 14px 4px', background: message.own ? 'linear-gradient(135deg, #7B1FA2, #4A148C)' : 'rgba(255,255,255,0.06)', border: '1px solid rgba(123,31,162,0.25)', lineHeight: 1.45, fontSize: '0.82rem' }}>{message.text}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: '0.9rem', borderTop: '1px solid rgba(123,31,162,0.25)', display: 'flex', gap: '0.7rem' }}>
              <input className="input-field" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') sendMessage() }} placeholder="Type a message..." style={{ flex: 1 }} />
              <button className="btn-primary" onClick={sendMessage} style={{ padding: '0.6rem 1rem' }}>Send</button>
            </div>
          </div>
        </main>
      </div>
    )
  }

  /* ---------------- PROFILE ---------------- */

  if (screen === 'profile') {
    return (
      <div style={{ display: 'flex', height: '100vh', background: '#0D0221' }}>
        <Sidebar role="student" active="profile" onNavigate={(id) => setScreen(id as Screen)} onLogout={onLogout} />
        <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Profile</h1>
          <p style={{ color: '#A8A0B8', marginTop: 6 }}>Manage your student profile and account information.</p>
          <div className="glass" style={{ maxWidth: 850, marginTop: '2rem', padding: '2rem', borderRadius: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(123,31,162,0.25)' }}>
              <div style={{ width: 76, height: 76, borderRadius: '50%', background: 'linear-gradient(135deg, #00BCD4, #7B1FA2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34 }}>🧑‍💻</div>
              <div><h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{profileName}</h2><p style={{ color: '#A8A0B8', marginTop: 4 }}>Student · Alpha Squad</p><p style={{ color: '#00FFFF', marginTop: 4, fontSize: '0.78rem' }}>Level 5 · 2,840 XP</p></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
              <div><label style={{ display: 'block', color: '#A8A0B8', fontSize: '0.75rem', marginBottom: 6 }}>Full Name</label><input className="input-field" value={profileName} disabled={!profileEditing} onChange={(e) => setProfileName(e.target.value)} /></div>
              <div><label style={{ display: 'block', color: '#A8A0B8', fontSize: '0.75rem', marginBottom: 6 }}>Email</label><input className="input-field" value={profileEmail} disabled={!profileEditing} onChange={(e) => setProfileEmail(e.target.value)} /></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
              {[['Course','Computer Engineering'],['Team','Alpha Squad'],['Progress','77%']].map(([label,value]) => (<div key={label} style={{ padding: '1rem', borderRadius: 12, background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(123,31,162,0.2)' }}><div style={{ color: '#A8A0B8', fontSize: '0.7rem' }}>{label}</div><div style={{ fontWeight: 700, marginTop: 6 }}>{value}</div></div>))}
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              <button className="btn-primary" onClick={() => setProfileEditing((prev) => !prev)}>{profileEditing ? 'Save Profile' : 'Edit Profile'}</button>
              {profileEditing && <button className="btn-secondary" onClick={() => setProfileEditing(false)}>Cancel</button>}
            </div>
          </div>
        </main>
      </div>
    )
  }

  /* ---------------- SETTINGS ---------------- */

  if (screen === 'settings') {
    return (
      <div style={{ display: 'flex', height: '100vh', background: '#0D0221' }}>
        <Sidebar role="student" active="settings" onNavigate={(id) => setScreen(id as Screen)} onLogout={onLogout} />
        <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Settings</h1>
          <p style={{ color: '#A8A0B8', marginTop: 6 }}>Manage your account and application preferences.</p>
          <div className="glass" style={{ maxWidth: 850, marginTop: '2rem', padding: '1.5rem', borderRadius: 18 }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700 }}>Notifications</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              {[{title:'Task Notifications',description:'Get notified about new assignments and deadlines.',value:notifications,setValue:setNotifications},{title:'Email Updates',description:'Receive important project updates by email.',value:emailUpdates,setValue:setEmailUpdates}].map((item) => (
                <div key={item.title} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', borderRadius: 12, background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(123,31,162,0.2)' }}>
                  <div><div style={{ fontWeight: 700, fontSize: '0.85rem' }}>{item.title}</div><div style={{ color: '#A8A0B8', fontSize: '0.72rem', marginTop: 4 }}>{item.description}</div></div>
                  <button onClick={() => item.setValue(!item.value)} aria-label={`Toggle ${item.title}`} style={{ width: 48, height: 26, borderRadius: 20, border: 'none', cursor: 'pointer', background: item.value ? '#7B1FA2' : 'rgba(255,255,255,0.12)', padding: 3 }}><span style={{ display: 'block', width: 20, height: 20, borderRadius: '50%', background: '#fff', transform: item.value ? 'translateX(22px)' : 'translateX(0)', transition: '0.2s' }} /></button>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '1.75rem' }}>
              <h2 style={{ fontSize: '1rem', fontWeight: 700 }}>Account</h2>
              <div style={{ marginTop: '1rem', padding: '1rem', borderRadius: 12, background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(123,31,162,0.2)' }}>
                <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>Security</div><div style={{ color: '#A8A0B8', fontSize: '0.72rem', marginTop: 4 }}>Keep your Trackify account secure.</div>
                <button className="btn-secondary" style={{ marginTop: '0.9rem' }} onClick={() => alert('Password change flow can be connected to your backend later.')}>Change Password</button>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
              <button className="btn-primary" onClick={() => { setSavedSettings(true); setTimeout(() => setSavedSettings(false), 2000) }}>Save Changes</button>
              {savedSettings && <span style={{ color: '#81C784', fontSize: '0.78rem' }}>✓ Settings saved</span>}
            </div>
          </div>
        </main>
      </div>
    )
  }

  /* ---------------- DASHBOARD ---------------- */

  return (
    <div
      className="bg-cosmic"
      style={{
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Sidebar
        role="student"
        active={screen}
        onNavigate={(id) => setScreen(id as Screen)}
        onLogout={onLogout}
      />

      <main
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '2rem',
          position: 'relative',
        }}
      >
        {/* Header */}

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '2rem',
          }}
        >
          <div>
            <h1
              style={{
                fontSize: '1.6rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: 4,
              }}
            >
              {greeting},{' '}
              <span style={{ color: '#00FFFF' }}>
                Alex
              </span>{' '}
              👋
            </h1>

            <p
              style={{
                color: '#A8A0B8',
                fontSize: '0.85rem',
              }}
            >
              Alpha Squad · Smart Campus App
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <div
              className="glass"
              style={{
                padding: '0.4rem 0.875rem',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <span
                style={{
                  color: '#00FFFF',
                  fontSize: '0.8rem',
                }}
              >
                ⚡
              </span>

              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#00FFFF',
                }}
              >
                Level 5
              </span>

              <span
                style={{
                  fontSize: '0.75rem',
                  color: '#A8A0B8',
                }}
              >
                · 2,840 XP
              </span>
            </div>

            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background:
                  'linear-gradient(135deg, #00BCD4, #7B1FA2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
              }}
            >
              🧑‍💻
            </div>
          </div>
        </div>

        {/* Stats */}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          {[
            {
              label: 'Overall Progress',
              val: '77%',
              icon: '📈',
              color: '#00FFFF',
              sub: 'Team avg: 68%',
            },
            {
              label: 'Tasks Completed',
              val: '8',
              icon: '✅',
              color: '#81C784',
              sub: '+3 this week',
            },
            {
              label: 'Tasks Remaining',
              val: '4',
              icon: '⏳',
              color: '#FFD54F',
              sub: '2 due soon',
            },
            {
              label: 'Upcoming Deadline',
              val: 'Aug 20',
              icon: '📅',
              color: '#CE93D8',
              sub: 'API Integration',
            },
          ].map(({ label, val, icon, color, sub }) => (
            <div
              key={label}
              className="glass stat-card"
              style={{
                borderRadius: 16,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.875rem',
                }}
              >
                <span
                  style={{
                    fontSize: '0.72rem',
                    color: '#A8A0B8',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {label}
                </span>

                <span style={{ fontSize: 18 }}>
                  {icon}
                </span>
              </div>

              <div
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  color,
                  lineHeight: 1,
                }}
              >
                {val}
              </div>

              <div
                style={{
                  fontSize: '0.7rem',
                  color: '#A8A0B8',
                  marginTop: '0.5rem',
                }}
              >
                {sub}
              </div>
            </div>
          ))}
        </div>

        {/* Tasks table */}

        <div
          className="glass"
          style={{
            borderRadius: 16,
            padding: '1.5rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.25rem',
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                }}
              >
                My Tasks
              </h2>

              <p
                style={{
                  fontSize: '0.78rem',
                  color: '#A8A0B8',
                  marginTop: 2,
                }}
              >
                Track your assigned work and submissions
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
              }}
            >
              <select
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border:
                    '1px solid rgba(123,31,162,0.35)',
                  borderRadius: 8,
                  color: '#A8A0B8',
                  fontSize: '0.78rem',
                  padding: '0.4rem 0.75rem',
                  outline: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Inter',
                }}
              >
                <option style={{ background: '#1a0533' }}>
                  All Status
                </option>

                <option style={{ background: '#1a0533' }}>
                  Quest Accepted
                </option>

                <option style={{ background: '#1a0533' }}>
                  Powering Through
                </option>

                <option style={{ background: '#1a0533' }}>
                  Near Victory
                </option>

                <option style={{ background: '#1a0533' }}>
                  Legendary Victory
                </option>
              </select>
            </div>
          </div>

          <div
            style={{
              borderRadius: 12,
              overflow: 'hidden',
              border:
                '1px solid rgba(123,31,162,0.2)',
            }}
          >
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
              }}
            >
              <thead>
                <tr
                  style={{
                    background:
                      'rgba(123,31,162,0.12)',
                    borderBottom:
                      '1px solid rgba(123,31,162,0.2)',
                  }}
                >
                  {[
                    'Task Name',
                    'Status',
                    'Progress',
                    'Priority',
                    'Difficulty',
                    'Upload',
                    'Deadline',
                  ].map((col) => (
                    <th
                      key={col}
                      style={{
                        padding: '0.75rem 1rem',
                        textAlign: 'left',
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        color: '#A8A0B8',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {TASKS.map((task) => (
                  <tr
                    key={task.name}
                    className="table-row"
                    style={{
                      borderBottom:
                        '1px solid rgba(123,31,162,0.1)',
                    }}
                  >
                    <td
                      style={{
                        padding: '0.875rem 1rem',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                      }}
                    >
                      {task.name}
                    </td>

                    <td
                      style={{
                        padding: '0.875rem 1rem',
                      }}
                    >
                      <span
                        className={`badge ${statusClass[task.status]}`}
                      >
                        {task.status}
                      </span>
                    </td>

                    <td
                      style={{
                        padding: '0.875rem 1rem',
                        minWidth: 120,
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                        }}
                      >
                        <div
                          className="progress-bar"
                          style={{
                            flex: 1,
                          }}
                        >
                          <div
                            className="progress-fill"
                            style={{
                              width: `${task.progress}%`,
                            }}
                          />
                        </div>

                        <span
                          style={{
                            fontSize: '0.72rem',
                            color: '#A8A0B8',
                            minWidth: 28,
                          }}
                        >
                          {task.progress}%
                        </span>
                      </div>
                    </td>

                    <td
                      style={{
                        padding: '0.875rem 1rem',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color:
                            priorityColor[task.priority],
                        }}
                      >
                        ● {task.priority}
                      </span>
                    </td>

                    <td
                      style={{
                        padding: '0.875rem 1rem',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color:
                            difficultyColor[
                              task.difficulty
                            ],
                        }}
                      >
                        {task.difficulty}
                      </span>
                    </td>

                    <td
                      style={{
                        padding: '0.875rem 1rem',
                      }}
                    >
                      {task.upload ? (
                        <span
                          style={{ 
                            fontSize: '0.72rem',
                            color: '#81C784',
                          }}
                        >
                          ✓ Submitted
                        </span>
                      ) : (
                        <button
  className="btn-secondary"
  onClick={() => {
    const input = document.createElement('input')
    input.type = 'file'

    input.onchange = () => {
      const file = input.files?.[0]

      if (file) {
        alert(`File selected: ${file.name}`)
      }
    }

    input.click()
  }}
  style={{
                            padding: '0.25rem 0.6rem',
                            fontSize: '0.7rem',
                            borderRadius: 7,
                          }}
                        >
                          ↑ Upload
                        </button>
                      )}
                    </td>

                    <td
                      style={{
                        padding: '0.875rem 1rem',
                        fontSize: '0.78rem',
                        color: '#A8A0B8',
                      }}
                    >
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
            position: 'fixed',
            bottom: 28,
            right: 28,
            width: 52,
            height: 52,
            borderRadius: '50%',
            background:
              'linear-gradient(135deg, #7B1FA2, #00FFFF)',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.4rem',
            boxShadow:
              '0 4px 24px rgba(123,31,162,0.5), 0 0 32px rgba(0,255,255,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s',
            color: '#fff',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          +
        </button>
      </main>

      {/* Add Task Modal */}

      {showAddTask && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(13,2,33,0.88)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 200,
          }}
          onClick={() => setShowAddTask(false)}
        >
          <div
            className="glass glow-violet fade-in"
            style={{
              width: 420,
              borderRadius: 20,
              padding: '2rem',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
              }}
            >
              Add New Task
            </h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem',
                marginBottom: '1.25rem',
              }}
            >
              <input
                className="input-field"
                placeholder="Task name"
              />

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                }}
              >
                <select
                  className="input-field"
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  <option
                    style={{
                      background: '#1a0533',
                    }}
                  >
                    Priority: High
                  </option>

                  <option
                    style={{
                      background: '#1a0533',
                    }}
                  >
                    Priority: Medium
                  </option>

                  <option
                    style={{
                      background: '#1a0533',
                    }}
                  >
                    Priority: Low
                  </option>
                </select>

                <input
                  className="input-field"
                  type="date"
                  style={{
                    colorScheme: 'dark',
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
              }}
            >
              <button
                className="btn-secondary"
                style={{
                  flex: 1,
                }}
                onClick={() => setShowAddTask(false)}
              >
                Cancel
              </button>

              <button
                className="btn-primary"
                style={{
                  flex: 2,
                }}
                onClick={() => setShowAddTask(false)}
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}