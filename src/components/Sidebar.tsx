interface NavItem {
  id: string
  label: string
  icon: string
}

const teacherNav: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: '⊞' },
  { id: 'classrooms', label: 'Manage Classrooms', icon: '🏛' },
  { id: 'students', label: 'Students', icon: '👥' },
  { id: 'projects', label: 'Projects', icon: '📋' },
  { id: 'progress', label: 'Progress', icon: '📈' },
  { id: 'audit', label: 'Audit Logs', icon: '🔍' },
]

const studentNav: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: '⊞' },
  { id: 'tasks', label: 'Assigned Tasks', icon: '✅' },
  { id: 'project', label: 'Project Details', icon: '📋' },
  { id: 'chat', label: 'Chat', icon: '💬' },
  { id: 'progress', label: 'Progress', icon: '📈' },
  { id: 'achievements', label: 'Achievements', icon: '🏆' },
  { id: 'rewards', label: 'Rewards', icon: '🎖' },
]

interface SidebarProps {
  role: 'teacher' | 'student'
  active: string
  onNavigate: (id: string) => void
  onLogout: () => void
}

export default function Sidebar({ role, active, onNavigate, onLogout }: SidebarProps) {
  const nav = role === 'teacher' ? teacherNav : studentNav

  return (
    <aside
      className="glass flex flex-col h-full"
      style={{
        width: 220,
        minWidth: 220,
        borderRight: '1px solid rgba(123,31,162,0.3)',
        borderRadius: 0,
        padding: '1.25rem 0.75rem',
        gap: 0,
      }}
    >
      {/* Logo */}
      <div className="px-2 mb-6">
        <div className="flex items-center gap-2 mb-1">
          <div
            style={{
              width: 32,
              height: 32,
              background: 'linear-gradient(135deg, #7B1FA2, #00FFFF)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 16,
            }}
          >
            ⚡
          </div>
          <span style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#F2F2F2' }}>
            Trackify
          </span>
        </div>
        <div
          style={{
            fontSize: '0.65rem',
            color: '#00FFFF',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            paddingLeft: 40,
            marginTop: -2,
          }}
        >
          {role === 'teacher' ? 'Teacher Portal' : 'Student Portal'}
        </div>
      </div>

      {/* Nav */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {nav.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${active === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            <span className="nav-icon" style={{ fontSize: 14, width: 18, textAlign: 'center' }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>

      {/* Bottom */}
      <div style={{ borderTop: '1px solid rgba(123,31,162,0.25)', paddingTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <button className="nav-item" onClick={() => onNavigate('profile')}>
          <span style={{ fontSize: 14, width: 18, textAlign: 'center' }}>👤</span>
          Profile
        </button>
        <button className="nav-item" onClick={() => onNavigate('settings')}>
          <span style={{ fontSize: 14, width: 18, textAlign: 'center' }}>⚙️</span>
          Settings
        </button>
        <button
          className="nav-item"
          onClick={onLogout}
          style={{ color: '#ff6b6b', marginTop: 4 }}
        >
          <span style={{ fontSize: 14, width: 18, textAlign: 'center' }}>↩</span>
          Sign Out
        </button>
      </div>
    </aside>
  )
}
