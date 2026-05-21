import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
const colors = {
  researching:'#64748b', ready_to_apply:'#3b82f6',
  applied:'#eab308', interviewing:'#22c55e',
  offered:'#f59e0b', closed:'#ef4444'
}
export default function PipelineBoard() {
  const [apps, setApps] = useState([])
  useEffect(() => {
    supabase.from('applications')
      .select('company,position,status,match_score')
      .order('match_score', { ascending: false })
      .then(({ data }) => setApps(data || []))
  }, [])
  return (
    <div className="card">
      <h3>Application Pipeline</h3>
      {apps.map((a, i) => (
        <div key={i} style={{borderLeft:`4px solid ${colors[a.status]||'#64748b'}`,padding:'8px',marginBottom:'8px', background: '#334155', borderRadius: '0 4px 4px 0'}}>
          <strong>{a.position}</strong> — {a.company}
          <span style={{float:'right',color:colors[a.status], fontWeight: 'bold'}}>{a.status}</span>
          <div style={{fontSize: '0.8rem', marginTop: '4px'}}>Match: {a.match_score}/8</div>
        </div>
      ))}
    </div>
  )
}
