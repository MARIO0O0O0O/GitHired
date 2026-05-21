export default function QuickActions() {
  return (
    <div className="card">
      <h3>Quick Actions</h3>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px'}}>
        <button className="btn">🔍 Find Jobs</button>
        <button className="btn">📄 Gen Resume</button>
        <button className="btn">📋 Log App</button>
        <button className="btn">💬 Ask GitHired</button>
      </div>
    </div>
  )
}
