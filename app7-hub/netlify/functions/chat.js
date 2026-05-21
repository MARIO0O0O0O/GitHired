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
  const { message, context } = JSON.parse(event.body || '{}')
  const prompt = `You are GitHired, a career assistant for Mario A. Espindola, an HR professional in Los Angeles. Answer questions about his job search pipeline. Current data: ${context}

User: ${message}`
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    }
  )
  const data = await res.json()
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      reply: data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response.'
    })
  }
}
