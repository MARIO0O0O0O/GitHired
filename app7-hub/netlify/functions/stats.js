import { createClient } from '@supabase/supabase-js'

export async function handler(event) {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: ''
    }
  }

  const supabase = createClient(
    process.env.VITE_SUPABASE_URL,
    process.env.VITE_SUPABASE_ANON_KEY
  )

  const { data: apps } = await supabase
    .from('applications')
    .select('status, match_score, company, position')

  const { data: profile } = await supabase
    .from('profile')
    .select('name, address')
    .limit(1)

  const total = apps?.length || 0
  const readyToApply = apps?.filter(a => a.status === 'ready_to_apply').length || 0
  const applied = apps?.filter(a => a.status === 'applied').length || 0
  const interviewing = apps?.filter(a => a.status === 'interviewing').length || 0
  
  // Handling position vs job_title based on actual schema (verified as 'position' in psql check)
  const topScore = apps && apps.length > 0 ? Math.max(...apps.map(a => a.match_score || 0)) : 0
  const topLead = apps?.find(a => a.match_score === topScore)

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300'
    },
    body: JSON.stringify({
      total_applications: total,
      ready_to_apply: readyToApply,
      applied: applied,
      interviewing: interviewing,
      top_match_score: topScore,
      top_lead: topLead ? `${topLead.position} @ ${topLead.company}` : null,
      owner: profile?.[0]?.name || 'Mario A. Espindola',
      last_updated: new Date().toISOString().split('T')[0]
    })
  }
}
