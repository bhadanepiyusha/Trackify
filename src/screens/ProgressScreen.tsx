import {
  RadialBarChart, RadialBar, ResponsiveContainer,
  AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
  BarChart, Bar, PieChart, Pie, Cell,
} from 'recharts'

const dailyData = [
  { day: 'Aug 12', tasks: 2, progress: 62 },
  { day: 'Aug 13', tasks: 1, progress: 65 },
  { day: 'Aug 14', tasks: 3, progress: 68 },
  { day: 'Aug 15', tasks: 2, progress: 71 },
  { day: 'Aug 16', tasks: 4, progress: 74 },
  { day: 'Aug 17', tasks: 1, progress: 76 },
  { day: 'Aug 18', tasks: 2, progress: 77 },
]

const contributionData = [
  { name: 'Sarah', value: 32, fill: '#7B1FA2' },
  { name: 'Alex', value: 24, fill: '#00FFFF' },
  { name: 'Jordan', value: 20, fill: '#9C27B0' },
  { name: 'Priya', value: 16, fill: '#00BCD4' },
  { name: 'Kai', value: 8, fill: '#CE93D8' },
]

const taskData = [
  { name: 'Mon', completed: 2, pending: 3 },
  { name: 'Tue', completed: 3, pending: 2 },
  { name: 'Wed', completed: 4, pending: 4 },
  { name: 'Thu', completed: 2, pending: 1 },
  { name: 'Fri', completed: 5, pending: 3 },
  { name: 'Sat', completed: 3, pending: 2 },
  { name: 'Sun', completed: 1, pending: 1 },
]

const MILESTONES = [
  { label: 'Project Kickoff', date: 'Aug 1', done: true },
  { label: 'Design Phase', date: 'Aug 8', done: true },
  { label: 'MVP Build', date: 'Aug 20', done: false, current: true },
  { label: 'Testing', date: 'Aug 28', done: false },
  { label: 'Final Submission', date: 'Sep 5', done: false },
]

const radialData = [{ name: 'Progress', value: 77, fill: 'url(#progressGrad)' }]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background: 'rgba(13,2,33,0.95)', border: '1px solid rgba(123,31,162,0.4)', borderRadius: 10, padding: '0.625rem 0.875rem' }}>
      <div style={{ fontSize: '0.72rem', color: '#A8A0B8', marginBottom: 4 }}>{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey} style={{ fontSize: '0.8rem', color: p.color, fontWeight: 600 }}>
          {p.name}: {p.value}
        </div>
      ))}
    </div>
  )
}

export default function ProgressScreen() {
  return (
    <main style={{ flex: 1, overflowY: 'auto', padding: '2rem' }} className="bg-cosmic fade-in">
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Progress Analytics</h1>
        <p style={{ color: '#A8A0B8', fontSize: '0.85rem', marginTop: 4 }}>Alpha Squad · Smart Campus App</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
        {/* Big circular progress */}
        <div className="glass" style={{ borderRadius: 16, padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontSize: '0.75rem', color: '#A8A0B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
            Total Progress
          </div>
          <div style={{ position: 'relative', width: 180, height: 180 }}>
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart innerRadius="72%" outerRadius="90%" data={radialData} startAngle={90} endAngle={-270}>
                <defs>
                  <linearGradient id="progressGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#7B1FA2" />
                    <stop offset="100%" stopColor="#00FFFF" />
                  </linearGradient>
                </defs>
                <RadialBar dataKey="value" cornerRadius={8} background={{ fill: 'rgba(255,255,255,0.05)' }} />
              </RadialBarChart>
            </ResponsiveContainer>
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#00FFFF', lineHeight: 1 }}>77%</div>
              <div style={{ fontSize: '0.7rem', color: '#A8A0B8', marginTop: 4 }}>Complete</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', width: '100%', marginTop: '1.25rem' }}>
            {[
              { label: 'Done', val: 26, color: '#00FFFF' },
              { label: 'Left', val: 9, color: '#A8A0B8' },
            ].map(({ label, val, color }) => (
              <div key={label} style={{ textAlign: 'center', background: 'rgba(255,255,255,0.03)', borderRadius: 10, padding: '0.625rem' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color }}>{val}</div>
                <div style={{ fontSize: '0.68rem', color: '#A8A0B8' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily progress area chart */}
        <div className="glass" style={{ borderRadius: 16, padding: '1.5rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>Daily Progress</div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={dailyData}>
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7B1FA2" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#7B1FA2" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="day" tick={{ fill: '#A8A0B8', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#A8A0B8', fontSize: 11 }} axisLine={false} tickLine={false} domain={[55, 85]} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="progress" stroke="#7B1FA2" strokeWidth={2} fill="url(#areaGrad)" name="Progress %" dot={{ fill: '#00FFFF', strokeWidth: 0, r: 4 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
        {/* Member Contribution */}
        <div className="glass" style={{ borderRadius: 16, padding: '1.5rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>Member Contribution</div>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={contributionData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value" strokeWidth={0}>
                {contributionData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
              </Pie>
              <Tooltip content={({ active, payload }) => active && payload?.[0] ? (
                <div style={{ background: 'rgba(13,2,33,0.95)', border: '1px solid rgba(123,31,162,0.4)', borderRadius: 8, padding: '0.5rem 0.75rem' }}>
                  <div style={{ fontSize: '0.8rem', color: payload[0].payload.fill, fontWeight: 700 }}>{payload[0].name}: {payload[0].value}%</div>
                </div>
              ) : null} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.75rem' }}>
            {contributionData.map((d) => (
              <div key={d.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: d.fill }} />
                  <span style={{ fontSize: '0.75rem', color: '#A8A0B8' }}>{d.name}</span>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: d.fill }}>{d.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tasks chart */}
        <div className="glass" style={{ borderRadius: 16, padding: '1.5rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>Tasks This Week</div>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={taskData} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="name" tick={{ fill: '#A8A0B8', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#A8A0B8', fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="completed" name="Completed" fill="#7B1FA2" radius={[4, 4, 0, 0]} />
              <Bar dataKey="pending" name="Pending" fill="rgba(0,255,255,0.25)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: '#7B1FA2' }} />
              <span style={{ fontSize: '0.72rem', color: '#A8A0B8' }}>Completed</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: 'rgba(0,255,255,0.4)' }} />
              <span style={{ fontSize: '0.72rem', color: '#A8A0B8' }}>Pending</span>
            </div>
          </div>
        </div>

        {/* Deadline timeline */}
        <div className="glass" style={{ borderRadius: 16, padding: '1.5rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.25rem' }}>Deadline Timeline</div>
          <div style={{ position: 'relative', paddingLeft: 24 }}>
            <div style={{
              position: 'absolute', left: 8, top: 8, bottom: 8, width: 2,
              background: 'linear-gradient(180deg, #7B1FA2, rgba(123,31,162,0.1))',
              borderRadius: 1,
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
              {MILESTONES.map(({ label, date, done, current }) => (
                <div key={label} style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute', left: -20, top: 2,
                    width: 12, height: 12, borderRadius: '50%',
                    background: done ? 'linear-gradient(135deg, #7B1FA2, #00FFFF)' : current ? '#00FFFF' : 'rgba(255,255,255,0.1)',
                    border: current ? '2px solid #00FFFF' : done ? 'none' : '2px solid rgba(255,255,255,0.15)',
                    boxShadow: current ? '0 0 12px rgba(0,255,255,0.5)' : done ? '0 0 8px rgba(123,31,162,0.4)' : 'none',
                  }} />
                  <div style={{ fontWeight: current ? 700 : 500, fontSize: '0.82rem', color: current ? '#00FFFF' : done ? '#F2F2F2' : '#A8A0B8' }}>
                    {label}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#A8A0B8', marginTop: 1 }}>
                    {date} {current && <span style={{ color: '#00FFFF', fontWeight: 600 }}>← Current</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
