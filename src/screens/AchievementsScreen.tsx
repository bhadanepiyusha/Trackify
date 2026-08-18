const ACHIEVEMENTS = [
  { id: 'streak', icon: '🔥', name: '30 Days Streak', desc: 'Log in for 30 consecutive days', progress: 22, total: 30, pct: 73 },
  { id: 'designer', icon: '🎨', name: 'Best Designer', desc: 'Receive 5-star feedback on design tasks', progress: 4, total: 5, pct: 80 },
  { id: 'master', icon: '⚡', name: 'Task Master', desc: 'Complete 50 tasks without missing a deadline', progress: 38, total: 50, pct: 76 },
  { id: 'team', icon: '🤝', name: 'Team Player', desc: 'Collaborate on 10 shared tasks', progress: 7, total: 10, pct: 70 },
  { id: 'deadline', icon: '⏱', name: 'Deadline Crusher', desc: 'Submit 20 tasks before the deadline', progress: 14, total: 20, pct: 70 },
]

const BADGES = [
  { level: 'Novice', icon: '🛡', color: '#78909C', glow: '#78909C', unlocked: true, xp: '0–500 XP' },
  { level: 'Amateur', icon: '⚔', color: '#4CAF50', glow: '#4CAF50', unlocked: true, xp: '500–1K XP' },
  { level: 'Explorer', icon: '🗺', color: '#2196F3', glow: '#2196F3', unlocked: true, xp: '1K–2K XP' },
  { level: 'Elite', icon: '💎', color: '#9C27B0', glow: '#9C27B0', unlocked: true, xp: '2K–4K XP' },
  { level: 'Master', icon: '👑', color: '#FF9800', glow: '#FF9800', unlocked: false, xp: '4K–8K XP' },
  { level: 'Legend', icon: '⭐', color: '#F44336', glow: '#F44336', unlocked: false, xp: '8K–16K XP' },
  { level: 'Demigod', icon: '🌟', color: '#00FFFF', glow: '#00FFFF', unlocked: false, xp: '16K+ XP' },
]

export default function AchievementsScreen() {
  return (
    <main style={{ flex: 1, overflowY: 'auto', padding: '2rem' }} className="bg-cosmic fade-in">
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Achievements & Rewards</h1>
        <p style={{ color: '#A8A0B8', fontSize: '0.85rem', marginTop: 4 }}>Track your milestones and unlock exclusive badges</p>
      </div>

      {/* XP banner */}
      <div className="glass" style={{
        borderRadius: 16, padding: '1.25rem 1.5rem',
        marginBottom: '1.5rem',
        background: 'linear-gradient(135deg, rgba(123,31,162,0.2), rgba(0,255,255,0.08))',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{
            width: 52, height: 52, borderRadius: 14,
            background: 'linear-gradient(135deg, #7B1FA2, #00FFFF)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26,
            boxShadow: '0 0 20px rgba(0,255,255,0.3)',
          }}>💎</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1rem' }}>Level 5 — Elite</div>
            <div style={{ fontSize: '0.78rem', color: '#A8A0B8', marginTop: 2 }}>2,840 / 4,000 XP to Level 6</div>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ width: 200 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
              <span style={{ fontSize: '0.72rem', color: '#A8A0B8' }}>Progress to Master</span>
              <span style={{ fontSize: '0.72rem', color: '#00FFFF', fontWeight: 600 }}>71%</span>
            </div>
            <div className="progress-bar" style={{ height: 8 }}>
              <div className="progress-fill" style={{ width: '71%' }} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
        {/* Achievements */}
        <div>
          <h2 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '1rem', color: '#F2F2F2' }}>
            Achievements <span style={{ color: '#A8A0B8', fontWeight: 400 }}>({ACHIEVEMENTS.length})</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {ACHIEVEMENTS.map((a) => (
              <div key={a.id} className="glass" style={{ borderRadius: 14, padding: '1.125rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                  background: 'rgba(123,31,162,0.2)', border: '1px solid rgba(123,31,162,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
                }}>{a.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.375rem' }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>{a.name}</div>
                      <div style={{ fontSize: '0.72rem', color: '#A8A0B8', marginTop: 2 }}>{a.desc}</div>
                    </div>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#00FFFF', flexShrink: 0, marginLeft: 8 }}>{a.pct}%</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div className="progress-bar" style={{ flex: 1 }}>
                      <div className="progress-fill" style={{ width: `${a.pct}%` }} />
                    </div>
                    <span style={{ fontSize: '0.68rem', color: '#A8A0B8', flexShrink: 0 }}>{a.progress}/{a.total}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coins / reward elements */}
        <div>
          <h2 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '1rem', color: '#F2F2F2' }}>Recent Rewards</h2>
          <div className="glass" style={{ borderRadius: 14, padding: '1.25rem', marginBottom: '1rem' }}>
            <div style={{ fontSize: '0.75rem', color: '#A8A0B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
              💰 Coins Earned
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              {[
                { label: 'Total Coins', val: '1,240', color: '#FFD54F', icon: '🪙' },
                { label: 'This Week', val: '+180', color: '#81C784', icon: '📈' },
                { label: 'Rank', val: '#3', color: '#CE93D8', icon: '🏆' },
              ].map(({ label, val, color, icon }) => (
                <div key={label} style={{ textAlign: 'center', background: 'rgba(255,255,255,0.03)', borderRadius: 10, padding: '0.75rem' }}>
                  <div style={{ fontSize: 20 }}>{icon}</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color, marginTop: 4 }}>{val}</div>
                  <div style={{ fontSize: '0.65rem', color: '#A8A0B8' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass" style={{ borderRadius: 14, padding: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', color: '#A8A0B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.875rem' }}>
              Recent XP Events
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                { event: 'Task completed: Design System', xp: '+50 XP', time: '2h ago', color: '#81C784' },
                { event: 'Submitted before deadline', xp: '+30 XP', time: '1d ago', color: '#00FFFF' },
                { event: 'Team collaboration bonus', xp: '+20 XP', time: '2d ago', color: '#CE93D8' },
                { event: 'Streak maintained', xp: '+10 XP', time: '3d ago', color: '#FFD54F' },
              ].map(({ event, xp, time, color }) => (
                <div key={event} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: 8 }}>
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 500 }}>{event}</div>
                    <div style={{ fontSize: '0.65rem', color: '#A8A0B8' }}>{time}</div>
                  </div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color }}>{xp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rewards Gallery */}
      <div className="glass" style={{ borderRadius: 16, padding: '1.5rem' }}>
        <div style={{ marginBottom: '1.25rem' }}>
          <h2 style={{ fontSize: '0.9rem', fontWeight: 700 }}>Rewards Gallery</h2>
          <p style={{ fontSize: '0.78rem', color: '#A8A0B8', marginTop: 4 }}>Collect all 7 legendary shield badges to become a Demigod</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1rem' }}>
          {BADGES.map((b) => (
            <div key={b.level} style={{ textAlign: 'center' }}>
              <div style={{
                margin: '0 auto 0.625rem',
                width: 72, height: 80,
                position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                filter: b.unlocked ? 'none' : 'grayscale(1) opacity(0.35)',
              }}>
                {/* Shield shape */}
                <svg viewBox="0 0 72 80" style={{ position: 'absolute', inset: 0 }}>
                  <defs>
                    <linearGradient id={`shield-${b.level}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={b.color} stopOpacity={0.6} />
                      <stop offset="100%" stopColor={b.color} stopOpacity={0.15} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M36 2 L68 14 L68 42 Q68 64 36 78 Q4 64 4 42 L4 14 Z"
                    fill={`url(#shield-${b.level})`}
                    stroke={b.color}
                    strokeWidth={b.unlocked ? 2 : 1}
                    strokeOpacity={b.unlocked ? 0.8 : 0.3}
                  />
                  {b.unlocked && (
                    <path
                      d="M36 2 L68 14 L68 42 Q68 64 36 78 Q4 64 4 42 L4 14 Z"
                      fill="none"
                      stroke={b.color}
                      strokeWidth={1}
                      strokeOpacity={0.3}
                      style={{ filter: `drop-shadow(0 0 6px ${b.color})` }}
                    />
                  )}
                </svg>
                <span style={{ position: 'relative', fontSize: 26, zIndex: 1 }}>{b.icon}</span>
              </div>
              <div style={{
                fontSize: '0.72rem', fontWeight: 700,
                color: b.unlocked ? b.color : '#A8A0B8',
                textShadow: b.unlocked ? `0 0 8px ${b.color}60` : 'none',
              }}>{b.level}</div>
              <div style={{ fontSize: '0.62rem', color: '#A8A0B8', marginTop: 2 }}>{b.xp}</div>
              {b.unlocked && (
                <div style={{ fontSize: '0.6rem', color: b.color, marginTop: 3, fontWeight: 600 }}>✓ Unlocked</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
