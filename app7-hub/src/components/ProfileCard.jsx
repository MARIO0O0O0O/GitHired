import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
export default function ProfileCard() {
  const [profile, setProfile] = useState(null)
  useEffect(() => {
    supabase.from('profile').select('*').limit(1)
      .then(({ data }) => setProfile(data?.[0]))
  }, [])
  if (!profile) return <div className="card">Loading Profile...</div>
  return (
    <div className="card">
      <h2>{profile.name}</h2>
      <p>{profile.address}</p>
      <p style={{marginTop:'10px', fontSize:'0.9rem'}}>{profile.summary}</p>
    </div>
  )
}
