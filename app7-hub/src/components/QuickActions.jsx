import { useState } from 'react'
import ChatPanel from './ChatPanel'

export default function QuickActions() {
  const [chatOpen, setChatOpen] = useState(false)
  return (
    <div className="card">
      <h3>Quick Actions</h3>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'
      }}>
        <button className="btn">🔍 Find New Jobs</button>
        <button className="btn">📄 Generate Resume</button>
        <button className="btn">📋 Log Application</button>
        <button className="btn" onClick={() => setChatOpen(true)}>
          💬 Ask GitHired
        </button>
      </div>
      {chatOpen && <ChatPanel onClose={() => setChatOpen(false)} />}
    </div>
  )
}
