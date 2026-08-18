import { useState } from 'react'

interface Props { onClose: () => void }

export default function NewTeamModal({ onClose }: Props) {
  const [step, setStep] = useState<'form' | 'created'>('form')
  const [groupName, setGroupName] = useState('')
  const [projectName, setProjectName] = useState('')
  const [description, setDescription] = useState('')

  const teamCode = 'TRK-' + Math.floor(1000 + Math.random() * 9000)
  const inviteLink = `https://trackify.app/join/${teamCode.toLowerCase().replace('-', '')}`

  const handleCreate = () => {
    if (!groupName || !projectName) return
    setStep('created')
  }

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'rgba(13,2,33,0.88)',
      backdropFilter: 'blur(10px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 200,
    }} onClick={onClose}>
      <div
        className="glass glow-violet fade-in"
        style={{ width: 480, borderRadius: 20, padding: '2rem', position: 'relative' }}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16,
          background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(123,31,162,0.3)',
          borderRadius: 8, width: 32, height: 32, display: 'flex', alignItems: 'center',
          justifyContent: 'center', cursor: 'pointer', color: '#A8A0B8', fontSize: 16,
        }}>×</button>

        {step === 'form' ? (
          <>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'rgba(123,31,162,0.25)', border: '1px solid rgba(123,31,162,0.5)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, marginBottom: '0.75rem',
              }}>+</div>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Create New Team</h2>
              <p style={{ color: '#A8A0B8', fontSize: '0.82rem', marginTop: 4 }}>
                Set up a new classroom team for your students
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ fontSize: '0.72rem', color: '#A8A0B8', marginBottom: '0.375rem', display: 'block', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Group Name *
                </label>
                <input className="input-field" placeholder="e.g. Alpha Squad" value={groupName} onChange={e => setGroupName(e.target.value)} />
              </div>
              <div>
                <label style={{ fontSize: '0.72rem', color: '#A8A0B8', marginBottom: '0.375rem', display: 'block', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Project Name *
                </label>
                <input className="input-field" placeholder="e.g. Smart Campus App" value={projectName} onChange={e => setProjectName(e.target.value)} />
              </div>
              <div>
                <label style={{ fontSize: '0.72rem', color: '#A8A0B8', marginBottom: '0.375rem', display: 'block', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Description
                </label>
                <textarea className="input-field" placeholder="Brief description of the project..." value={description} onChange={e => setDescription(e.target.value)}
                  style={{ height: 80, resize: 'none' }} />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button className="btn-secondary" style={{ flex: 1 }} onClick={onClose}>Cancel</button>
              <button className="btn-primary" style={{ flex: 2 }} onClick={handleCreate}>
                Create Team →
              </button>
            </div>
          </>
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: 48, marginBottom: '0.75rem' }}>🎉</div>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.25rem' }}>Team Created!</h2>
              <p style={{ color: '#A8A0B8', fontSize: '0.82rem' }}><strong style={{ color: '#F2F2F2' }}>{groupName}</strong> is ready for students to join.</p>
            </div>

            <div className="glass-cyan" style={{ borderRadius: 14, padding: '1.25rem', marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.7rem', color: '#A8A0B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>Team Code</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '1.4rem', fontWeight: 800, color: '#00FFFF', letterSpacing: '0.1em' }}>{teamCode}</span>
                <button className="btn-cyan" style={{ padding: '0.3rem 0.75rem', fontSize: '0.75rem' }}>Copy</button>
              </div>
            </div>

            <div className="glass" style={{ borderRadius: 14, padding: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.7rem', color: '#A8A0B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
                Student Invite Link
              </div>
              <div style={{ fontSize: '0.75rem', color: '#CE93D8', wordBreak: 'break-all', marginBottom: '0.75rem' }}>{inviteLink}</div>
              <p style={{ fontSize: '0.75rem', color: '#A8A0B8' }}>Share this link with your students to let them join the team.</p>
            </div>

            <button className="btn-primary" style={{ width: '100%' }} onClick={onClose}>
              Done
            </button>
          </>
        )}
      </div>
    </div>
  )
}
