import { useState, useEffect, useRef } from 'react'
import { supabase } from '../lib/supabase'

export default function ChatPanel({ onClose }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi Mario — ask me anything about your pipeline.' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [context, setContext] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => {
    supabase.from('applications')
      .select('company,position,status,match_score')
      .then(({ data }) => {
        if (data) setContext(JSON.stringify(data))
      })
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = async () => {
    if (!input.trim() || loading) return
    const userMsg = { role: 'user', text: input }
    setMessages(m => [...m, userMsg])
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input, context })
      })
      const data = await res.json()
      setMessages(m => [...m, { role: 'assistant', text: data.reply }])
    } catch {
      setMessages(m => [...m, {
        role: 'assistant',
        text: 'Connection error — try again.'
      }])
    }
    setLoading(false)
  }

  return (
    <div style={{
      position: 'fixed', bottom: '20px', right: '20px',
      width: '340px', background: '#1e293b', borderRadius: '12px',
      padding: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
      zIndex: 1000, display: 'flex', flexDirection: 'column'
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        marginBottom: '12px', alignItems: 'center'
      }}>
        <strong style={{ color: '#3b82f6' }}>💬 Ask GitHired</strong>
        <button onClick={onClose} style={{
          background: 'none', border: 'none', color: '#94a3b8',
          cursor: 'pointer', fontSize: '1.2rem', lineHeight: 1
        }}>✕</button>
      </div>
      <div style={{
        height: '240px', overflowY: 'auto', marginBottom: '12px',
        display: 'flex', flexDirection: 'column', gap: '8px'
      }}>
        {messages.map((m, i) => (
          <div key={i} style={{
            alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
            background: m.role === 'user' ? '#3b82f6' : '#334155',
            padding: '8px 12px', borderRadius: '8px',
            maxWidth: '85%', fontSize: '0.875rem',
            lineHeight: '1.4', color: '#f1f5f9'
          }}>
            {m.text}
          </div>
        ))}
        {loading && (
          <div style={{ color: '#94a3b8', fontSize: '0.8rem', alignSelf: 'flex-start' }}>
            Thinking...
          </div>
        )}
        <div ref={bottomRef} />
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="Ask about your pipeline..."
          style={{
            flex: 1, background: '#0f172a',
            border: '1px solid #334155', color: '#f1f5f9',
            padding: '8px 10px', borderRadius: '6px',
            fontSize: '0.875rem', outline: 'none'
          }}
        />
        <button onClick={send} disabled={loading} style={{
          background: loading ? '#334155' : '#3b82f6',
          border: 'none', color: 'white',
          padding: '8px 14px', borderRadius: '6px',
          cursor: loading ? 'default' : 'pointer', fontSize: '1rem'
        }}>➤</button>
      </div>
    </div>
  )
}
