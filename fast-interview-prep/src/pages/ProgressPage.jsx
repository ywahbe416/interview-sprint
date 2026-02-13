const progressItems = [
  { label: 'DSA Foundation', value: 72 },
  { label: 'Problem-Solving Speed', value: 55 },
  { label: 'System Design Basics', value: 38 },
  { label: 'Mock Interview Readiness', value: 64 }
]

function ProgressPage() {
  return (
    <section>
      <h2 className="section-title">Progress Tracker</h2>
      <p className="section-subtitle">Demo metrics to visualize your learning momentum.</p>

      <div className="progress-list">
        {progressItems.map((item) => (
          <article key={item.label} className="progress-card">
            <div className="progress-header">
              <h3>{item.label}</h3>
              <span>{item.value}%</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${item.value}%` }} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProgressPage
