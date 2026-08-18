import { useState } from 'react'

interface AuthScreenProps {
  onLogin: (role: 'teacher' | 'student') => void
}

export default function AuthScreen({ onLogin }: AuthScreenProps) {
  const [tab, setTab] = useState<'login' | 'register'>('login')
  const [role, setRole] = useState<'student' | 'teacher'>('student')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [showOtp, setShowOtp] = useState(false)
  const [otp, setOtp] = useState(['', '', '', '', '', ''])

  const handleOtpChange = (i: number, val: string) => {
    if (val.length > 1) return
    const next = [...otp]
    next[i] = val
    setOtp(next)
    if (val && i < 5) {
      const nextInput = document.getElementById(`otp-${i + 1}`)
      nextInput?.focus()
    }
  }

  const handleSubmit = () => {
    if (tab === 'login') {
      onLogin(role)
    } else {
      setShowOtp(true)
    }
  }

  return (
    <div
      className="bg-cosmic"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'stretch' }}
    >
      {/* Left panel */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem',
          position: 'relative',
          borderRight: '1px solid rgba(123,31,162,0.25)',
          background: 'linear-gradient(160deg, rgba(123,31,162,0.12) 0%, rgba(0,255,255,0.04) 100%)',
        }}
      >
        {/* Glow orbs */}
        <div style={{
          position: 'absolute', width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(123,31,162,0.2) 0%, transparent 70%)',
          top: '10%', left: '10%', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', width: 300, height: 300,
          background: 'radial-gradient(circle, rgba(0,255,255,0.08) 0%, transparent 70%)',
          bottom: '10%', right: '15%', pointerEvents: 'none',
        }} />

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative' }}>
          <div style={{
            width: 72, height: 72,
            background: 'linear-gradient(135deg, #7B1FA2, #00FFFF)',
            borderRadius: 20,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 36, margin: '0 auto 1rem',
            boxShadow: '0 0 32px rgba(123,31,162,0.5), 0 0 64px rgba(0,255,255,0.15)',
          }}>⚡</div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#F2F2F2', marginBottom: '0.5rem' }}>
            Trackify
          </h1>
          <p style={{ fontSize: '1rem', color: '#A8A0B8', fontWeight: 400 }}>
            Track. Collaborate. Achieve.
          </p>
        </div>

        {/* Illustration */}
        <div style={{
          width: '100%', maxWidth: 400,
          padding: '2rem',
          borderRadius: 20,
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(123,31,162,0.25)',
          position: 'relative',
        }}>
          {/* Abstract collaboration illustration */}
          <svg viewBox="0 0 360 220" style={{ width: '100%', height: 'auto' }}>
            {/* Background nodes */}
            <circle cx="60" cy="60" r="30" fill="rgba(123,31,162,0.25)" />
            <circle cx="180" cy="40" r="24" fill="rgba(0,255,255,0.12)" />
            <circle cx="300" cy="70" r="28" fill="rgba(123,31,162,0.2)" />
            <circle cx="120" cy="160" r="22" fill="rgba(0,255,255,0.1)" />
            <circle cx="240" cy="170" r="26" fill="rgba(123,31,162,0.18)" />

            {/* Connection lines */}
            <line x1="60" y1="60" x2="180" y2="40" stroke="rgba(0,255,255,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="180" y1="40" x2="300" y2="70" stroke="rgba(123,31,162,0.4)" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="60" y1="60" x2="120" y2="160" stroke="rgba(123,31,162,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="300" y1="70" x2="240" y2="170" stroke="rgba(0,255,255,0.25)" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="120" y1="160" x2="240" y2="170" stroke="rgba(123,31,162,0.35)" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="180" y1="40" x2="240" y2="170" stroke="rgba(0,255,255,0.2)" strokeWidth="1" strokeDasharray="3 4" />

            {/* Avatars */}
            {[
              { cx: 60, cy: 60, emoji: '👨‍💻', label: 'Alex' },
              { cx: 180, cy: 40, emoji: '👩‍🎨', label: 'Sara' },
              { cx: 300, cy: 70, emoji: '🧑‍🔬', label: 'Jordan' },
              { cx: 120, cy: 160, emoji: '👩‍💼', label: 'Teacher' },
              { cx: 240, cy: 170, emoji: '👨‍🚀', label: 'Kai' },
            ].map(({ cx, cy, emoji, label }) => (
              <g key={label}>
                <circle cx={cx} cy={cy} r={20} fill="rgba(255,255,255,0.07)" stroke="rgba(123,31,162,0.5)" strokeWidth="1.5" />
                <text x={cx} y={cy + 6} textAnchor="middle" fontSize="16">{emoji}</text>
                <text x={cx} y={cy + 34} textAnchor="middle" fontSize="9" fill="#A8A0B8">{label}</text>
              </g>
            ))}

            {/* Central pulse */}
            <circle cx="180" cy="110" r="18" fill="rgba(0,255,255,0.08)" stroke="rgba(0,255,255,0.3)" strokeWidth="1.5" />
            <text x="180" y="116" textAnchor="middle" fontSize="14">⚡</text>

            {/* XP badges */}
            <rect x="10" y="180" width="52" height="20" rx="10" fill="rgba(123,31,162,0.3)" stroke="rgba(123,31,162,0.5)" strokeWidth="1" />
            <text x="36" y="193" textAnchor="middle" fontSize="8" fill="#CE93D8" fontWeight="600">+50 XP</text>
            <rect x="300" y="10" width="48" height="20" rx="10" fill="rgba(0,255,255,0.12)" stroke="rgba(0,255,255,0.3)" strokeWidth="1" />
            <text x="324" y="23" textAnchor="middle" fontSize="8" fill="#00FFFF" fontWeight="600">LEVEL 5</text>
          </svg>

          <p style={{ textAlign: 'center', color: '#A8A0B8', fontSize: '0.8rem', marginTop: '1rem' }}>
            Join 12,000+ students collaborating on projects worldwide
          </p>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
          {[
            { val: '12K+', label: 'Students' },
            { val: '3.2K', label: 'Projects' },
            { val: '98%', label: 'Satisfaction' },
          ].map(({ val, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#00FFFF' }}>{val}</div>
              <div style={{ fontSize: '0.7rem', color: '#A8A0B8', marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <div style={{
        width: 480,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 2.5rem',
      }}>
        <div style={{ width: '100%', maxWidth: 380 }}>
          {/* Tabs */}
          <div style={{
            display: 'flex',
            background: 'rgba(255,255,255,0.04)',
            borderRadius: 12,
            padding: 4,
            marginBottom: '1.5rem',
            border: '1px solid rgba(123,31,162,0.25)',
          }}>
            {(['login', 'register'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  borderRadius: 9,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  background: tab === t ? 'linear-gradient(135deg, #7B1FA2, #9C27B0)' : 'transparent',
                  color: tab === t ? '#fff' : '#A8A0B8',
                  boxShadow: tab === t ? '0 4px 12px rgba(123,31,162,0.4)' : 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {t === 'login' ? 'Sign In' : 'Register'}
              </button>
            ))}
          </div>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.25rem', color: '#F2F2F2' }}>
            {tab === 'login' ? 'Welcome back' : 'Create account'}
          </h2>
          <p style={{ color: '#A8A0B8', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            {tab === 'login' ? 'Sign in to your Trackify account' : 'Join Trackify and start achieving'}
          </p>

          {/* Role switcher */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ fontSize: '0.75rem', color: '#A8A0B8', marginBottom: '0.5rem', display: 'block', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              I am a
            </label>
            <div style={{
              display: 'flex',
              background: 'rgba(255,255,255,0.04)',
              borderRadius: 10,
              padding: 4,
              border: '1px solid rgba(123,31,162,0.25)',
            }}>
              {(['student', 'teacher'] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  style={{
                    flex: 1,
                    padding: '0.5rem',
                    borderRadius: 7,
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    transition: 'all 0.2s',
                    background: role === r ? 'rgba(0,255,255,0.12)' : 'transparent',
                    color: role === r ? '#00FFFF' : '#A8A0B8',
                    border: role === r ? '1px solid rgba(0,255,255,0.3)' : '1px solid transparent',
                    cursor: 'pointer',
                  }}
                >
                  {r === 'student' ? '🎓 Student' : '👨‍🏫 Teacher'}
                </button>
              ))}
            </div>
          </div>

          {/* Form fields */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '1.25rem' }}>
            {tab === 'register' && (
              <div>
                <label style={{ fontSize: '0.75rem', color: '#A8A0B8', marginBottom: '0.375rem', display: 'block', fontWeight: 500 }}>Full Name</label>
                <input className="input-field" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
              </div>
            )}
            <div>
              <label style={{ fontSize: '0.75rem', color: '#A8A0B8', marginBottom: '0.375rem', display: 'block', fontWeight: 500 }}>Email Address</label>
              <input className="input-field" type="email" placeholder="you@school.edu" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <label style={{ fontSize: '0.75rem', color: '#A8A0B8', marginBottom: '0.375rem', display: 'block', fontWeight: 500 }}>Password</label>
              <input className="input-field" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
          </div>

          {tab === 'login' && (
            <div style={{ textAlign: 'right', marginBottom: '1.25rem' }}>
              <button style={{ fontSize: '0.8rem', color: '#00FFFF', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter' }}>
                Forgot password?
              </button>
            </div>
          )}

          <button className="btn-primary" style={{ width: '100%', padding: '0.75rem', fontSize: '0.9rem' }} onClick={handleSubmit}>
            {tab === 'login' ? 'Sign In →' : 'Create Account →'}
          </button>

          <p style={{ textAlign: 'center', color: '#A8A0B8', fontSize: '0.8rem', marginTop: '1.25rem' }}>
            {tab === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button onClick={() => setTab(tab === 'login' ? 'register' : 'login')}
              style={{ color: '#00FFFF', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter', fontWeight: 600 }}>
              {tab === 'login' ? 'Register' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>

      {/* OTP Modal */}
      {showOtp && (
        <div style={{
          position: 'fixed', inset: 0,
          background: 'rgba(13,2,33,0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 100,
        }}>
          <div className="glass glow-violet fade-in" style={{ padding: '2.5rem', borderRadius: 20, width: 380, textAlign: 'center' }}>
            <div style={{ fontSize: 40, marginBottom: '1rem' }}>📧</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Verify your email</h3>
            <p style={{ color: '#A8A0B8', fontSize: '0.85rem', marginBottom: '2rem' }}>
              We sent a 6-digit code to <span style={{ color: '#00FFFF' }}>{email || 'your email'}</span>
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: '2rem' }}>
              {otp.map((digit, i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  maxLength={1}
                  value={digit}
                  onChange={e => handleOtpChange(i, e.target.value)}
                  style={{
                    width: 44, height: 52, textAlign: 'center',
                    background: 'rgba(255,255,255,0.06)',
                    border: `2px solid ${digit ? 'rgba(0,255,255,0.5)' : 'rgba(123,31,162,0.4)'}`,
                    borderRadius: 10, color: '#F2F2F2', fontSize: '1.1rem', fontWeight: 700,
                    outline: 'none', fontFamily: 'Inter',
                    boxShadow: digit ? '0 0 12px rgba(0,255,255,0.2)' : 'none',
                  }}
                />
              ))}
            </div>
            <button className="btn-primary" style={{ width: '100%' }} onClick={() => onLogin(role)}>
              Verify & Continue
            </button>
            <button onClick={() => setShowOtp(false)} style={{ marginTop: '0.875rem', color: '#A8A0B8', fontSize: '0.8rem', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter' }}>
              ← Back
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
