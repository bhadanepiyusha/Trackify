import { useState } from 'react'

interface Props { onClose: () => void }

const TEAM_PREVIEW = {
  name: 'Gamma Crew',
  students: 6,
  leader: 'Sarah Kim',
  project: 'Smart Campus App',
  code: 'TRK-7723',
}

export default function JoinTeamModal({ onClose }: Props) {
  const [code, setCode] = useState('')
  const [preview, setPreview] = useState(false)
  const [claimed, setClaimed] = useState(false)

  const handleCheck = () => {
    if (code.length >= 4) setPreview(true)
  }

  if (claimed) {
    return (
      <div style={{
        position: 'fixed', inset: 0,
        background: 'rgba(13,2,33,0.88)', backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200,
      }} onClick={onClose}>
        <div className="glass glow-violet fade-in" style={{ width: 420, borderRadius: 20, padding: '2.5rem', textAlign: 'center' }} onClick={e => e.stopPropagation()}>
          <div style={{ fontSize: 48, marginBottom: '1rem' }}>✅</div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Team Claimed!</h2>
          <p style={{ color: '#A8A0B8', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            You're now linked to <strong style={{ color: '#00FFFF' }}>{TEAM_PREVIEW.name}</strong>.<br />
            You can manage this classroom from your dashboard.
          </p>
          <button className="btn-primary" style={{ width: '100%' }} onClick={onClose}>Back to Dashboard</button>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'rgba(13,2,33,0.88)', backdropFilter: 'blur(10px)',
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
            background: 'rgba(0,188,212,0.15)', border: '1px solid rgba(0,188,212,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 22, marginBottom: '0.75rem',
          }}>#</div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Join Existing Team</h2>
          <p style={{ color: '#A8A0B8', fontSize: '0.82rem', marginTop: 4 }}>
            Enter a team code to link yourself to an existing classroom
          </p>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontSize: '0.72rem', color: '#A8A0B8', marginBottom: '0.375rem', display: 'block', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Enter Team Code
          </label>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <input
              className="input-field"
              placeholder="e.g. TRK-7723"
              value={code}
              onChange={e => { setCode(e.target.value.toUpperCase()); setPreview(false) }}
              style={{ fontFamily: 'monospace', letterSpacing: '0.08em', fontSize: '0.9rem' }}
            />
            <button className="btn-cyan" style={{ whiteSpace: 'nowrap' }} onClick={handleCheck}>
              Look up →
            </button>
          </div>
        </div>

        {preview && (
          <div className="glass-cyan fade-in" style={{ borderRadius: 14, padding: '1.25rem', marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '0.7rem', color: '#00FFFF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.875rem' }}>
              Team Found ✓
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {[
                { label: 'Team Name', val: TEAM_PREVIEW.name },
                { label: 'Students', val: `${TEAM_PREVIEW.students} members` },
                { label: 'Current Leader', val: TEAM_PREVIEW.leader },
                { label: 'Project', val: TEAM_PREVIEW.project },
              ].map(({ label, val }) => (
                <div key={label}>
                  <div style={{ fontSize: '0.68rem', color: '#A8A0B8', marginBottom: 2, fontWeight: 500 }}>{label}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#F2F2F2' }}>{val}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.75rem', color: '#A8A0B8', marginTop: '0.875rem', borderTop: '1px solid rgba(0,255,255,0.1)', paddingTop: '0.75rem' }}>
              Claiming this team links your teacher account to the classroom, giving you full management access.
            </p>
          </div>
        )}

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button className="btn-secondary" style={{ flex: 1 }} onClick={onClose}>Cancel</button>
          <button
            className="btn-primary"
            style={{ flex: 2, opacity: preview ? 1 : 0.4 }}
            disabled={!preview}
            onClick={() => setClaimed(true)}
          >
            Claim Team →
          </button>
        </div>
      </div>
    </div>
  )
}
