import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
export default function MatchScores() {
  const [apps, setApps] = useState([])
  useEffect(() => {
    supabase.from('applications')
      .select('company,match_score')
      .order('match_score', { ascending: false })
      .then(({ data }) => setApps(data || []))
  }, [])
  return (
    <div className="card">
      <h3>Match Scores</h3>
      {apps.map((a, i) => (
        <div key={i} style={{marginBottom:'12px'}}>
          <div style={{fontSize:'12px',marginBottom:'4px'}}>{a.company}</div>
          <div style={{background:'#334155',borderRadius:'4px',height:'20px',width:'100%'}}>
            <div style={{background:'#3b82f6',height:'100%',width:`${(a.match_score/8)*100}%`,borderRadius:'4px',textAlign:'right',paddingRight:'6px',fontSize:'12px',lineHeight:'20px', color: 'white'}}>
              {a.match_score}/8
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
