# GitHired — Engineering Blueprint v3.0

## Tech Stack
| Layer              | Tool                       | Notes                               |
|--------------------|----------------------------|-------------------------------------|
| Orchestrator       | Goose (Block)              | Manages agents, recipes, gates      |
| Worker             | Gemini CLI                 | Executes per-session prompts        |
| Database           | Supabase (PostgreSQL)      | User-owned, RLS-secured, portable   |
| Backend API        | Netlify Functions (Node)   | Serverless endpoints for dashboard  |
| Dashboard Frontend | React + Vite + Tailwind    | Standalone app — NOT the portfolio  |
| Deployment         | Netlify                    | Dashboard and functions only        |
| Job Scraper        | Playwright + Python        | Headless browser agent              |
| Resume Builder     | Python + Jinja2            | Plain-text ATS output               |
| ATS Scorer         | Resume-Matcher (OSS)       | Keyword gap analysis                |
| CLI Environment    | Termux on S24 Ultra        | Primary dev machine                 |
| Version Control    | GitHub                     | All code committed here             |

## Dependency Graph
[A] Inventory → HUMAN GATE → [D] Resume Gen
                            → [F] Match Engine (also needs B)
[B] Supabase  → [C] Backend → [G] Dashboard
[E] Job Search (no deps, starts immediately)

## Qualification Check Logic
for each job_posting:
  1. extract required_years_experience by discipline
  2. sum work_history.years WHERE discipline matches
  3. compare required_education to education.credential
  4. compare required_certifications to certifications rows
  5. output: MEETS MINIMUM / PARTIAL MATCH / DOES NOT MEET

## Netlify Endpoints
GET  /api/profile               — people + work_history
GET  /api/jobs                  — job_postings list
GET  /api/applications          — applications log
POST /api/jobs/add              — insert job_posting
POST /api/applications/add      — insert application record
GET  /api/match/:job_id         — qualification report for job
GET  /api/resume/:role          — resume version for role

## Key Code Snippets

Supabase client (React):
  import { createClient } from '@supabase/supabase-js'
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  )

Netlify function skeleton:
  const { createClient } = require('@supabase/supabase-js')
  exports.handler = async () => {
    const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)
    const { data, error } = await sb.from('work_history').select('*')
    if (error) return { statusCode: 500, body: JSON.stringify(error) }
    return { statusCode: 200, body: JSON.stringify(data) }
  }

Playwright scraper skeleton (Python):
  from playwright.sync_api import sync_playwright
  import time
  def scrape_indeed(query, location):
    results = []
    with sync_playwright() as p:
      browser = p.chromium.launch(headless=True)
      page = browser.new_page()
      page.goto(f"https://www.indeed.com/jobs?q={query}&l={location}")
      time.sleep(2.5)
      for card in page.query_selector_all('.job_seen_beacon'):
        results.append({'title': card.query_selector('h2').inner_text()})
      browser.close()
    return results

## Testing Procedures
| Test        | What                                | Pass Criteria                     |
|-------------|-------------------------------------|-----------------------------------|
| Unit        | Each Supabase table CRUD            | Insert/read/update/delete OK      |
| Integration | Netlify function → Supabase         | Returns correct rows              |
| E2E         | Search → match → docs → log        | Complete, no auto-submit          |
| ATS         | Resume through Resume-Matcher       | Score ≥ 70% on target role        |
| Security    | RLS blocks unauthenticated reads    | 403 on anon read                  |
| Human Gate  | Apply requires confirm modal        | No submit without approval        |
| Scraper     | Playwright returns real postings    | ≥ 5 results per query             |

## Potential Issues & Mitigations
| Issue                       | Mitigation                                       |
|-----------------------------|--------------------------------------------------|
| Gemini invents history      | Hard rules + pre-seeded verified inventory draft |
| Scraper blocked             | Rotate user-agent, 2-3s delays, robots.txt       |
| Supabase free tier limits   | Monitor rows, export CSV/JSON regularly          |
| Netlify cold starts         | Lightweight functions, no heavy deps             |
| Resume breaks ATS           | Plain text only, no tables or graphics           |
| Goose timeout on S24        | Checkpoints per session, resume from output file |
| Cross-session conflicts     | All writes to ~/jobapps/output/, Goose merges    |
| Playwright on Termux native | Use proot Ubuntu if Chromium fails               |
