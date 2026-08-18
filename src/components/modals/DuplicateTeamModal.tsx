import { useState } from 'react'

interface Props {
  team: { name: string; members: number; progress: number } | null
  onClose: () => void
}

export default function DuplicateTeamModal({ team, onClose }: Props) {
  const [newName, setNewName] = useState('')
  const [done, setDone] = useState(false)

  const source = team || { name: 'Alpha Squad', members: 5, progress: 78 }

  if (done) {
    return (
      <div style={{
        position: 'fixed', inset: 0, background: 'rgba(13,2,33,0.88)', backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200,
      }} onClick={onClose}>
        <div className="glass glow-violet fade-in" style={{ width: 420, borderRadius: 20, padding: '2.5rem', textAlign: 'center' }} onClick={e => e.stopPropagation()}>
          <div style={{ fontSize: 48, marginBottom: '1rem' }}>⧉</div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Team Duplicated!</h2>
          <p style={{ color: '#A8A0B8', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
            <strong style={{ color: '#00FFFF' }}>{newName || 'New Team'}</strong> has been created with {source.members} students.
          </p>
          <span className="badge badge-quest" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>Quest Accepted</span>
          <button className="btn-primary" style={{ width: '100%', display: 'block', marginTop: '0.5rem' }} onClick={onClose}>Done</button>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(13,2,33,0.88)', backdropFilter: 'blur(10px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200,
    }} onClick={onClose}>
      <div className="glass glow-violet fade-in" style={{ width: 460, borderRadius: 20, padding: '2rem', position: 'relative' }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16,
          background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(123,31,162,0.3)',
          borderRadius: 8, width: 32, height: 32, display: 'flex', alignItems: 'center',
          justifyContent: 'center', cursor: 'pointer', color: '#A8A0B8', fontSize: 16,
        }}>×</button>

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: 'rgba(156,39,176,0.2)', border: '1px solid rgba(156,39,176,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20, marginBottom: '0.75rem',
          }}>⧉</div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Duplicate Team</h2>
          <p style={{ color: '#A8A0B8', fontSize: '0.82rem', marginTop: 4 }}>Clone this team with its full student roster</p>
        </div>

        {/* Source team info */}
        <div className="glass" style={{ borderRadius: 14, padding: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '0.7rem', color: '#A8A0B8', marginBottom: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Original Team
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {[
              { label: 'Team Name', val: source.name },
              { label: 'Members', val: `${source.members} students` },
              { label: 'Progress', val: `${source.progress}%` },
            ].map(({ label, val }) => (
              <div key={label}>
                <div style={{ fontSize: '0.68rem', color: '#A8A0B8', marginBottom: 2 }}>{label}</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#F2F2F2' }}>{val}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ fontSize: '0.72rem', color: '#A8A0B8', marginBottom: '0.375rem', display: 'block', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            New Group Name *
          </label>
          <input className="input-field" placeholder={`${source.name} — Copy`} value={newName} onChange={e => setNewName(e.target.value)} />
        </div>

        <div style={{ borderRadius: 12, background: 'rgba(255,193,7,0.06)', border: '1px solid rgba(255,193,7,0.2)', padding: '0.875rem', marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.78rem', color: '#A8A0B8' }}>
            <span style={{ color: '#FFD54F', marginTop: 1 }}>ℹ</span>
            Students will be copied to the new team.
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.78rem', color: '#A8A0B8' }}>
            <span style={{ color: '#FFD54F', marginTop: 1 }}>↺</span>
            Tasks and progress will be reset.
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.78rem', color: '#A8A0B8' }}>
            <span style={{ color: '#CE93D8', marginTop: 1 }}>⚡</span>
            New team status: <span className="badge badge-quest" style={{ marginLeft: 4 }}>Quest Accepted</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button className="btn-secondary" style={{ flex: 1 }} onClick={onClose}>Cancel</button>
          <button className="btn-primary" style={{ flex: 2 }} onClick={() => setDone(true)}>
            Duplicate Team →
          </button>
        </div>
      </div>
    </div>
  )
}
