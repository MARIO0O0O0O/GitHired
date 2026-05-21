# SESSION C — Dashboard Backend Wiring

## Load Agent
~/jobapps/agents/db_engineer.md

## Dependencies
Requires session_b_report.md confirming schema is live.

## Steps — Execute in Order
1. npm install -g netlify-cli
2. netlify login (Marioespindola00@gmail.com)
3. netlify init — NEW standalone site: folio-dashboard (NOT the portfolio)
4. netlify env:set SUPABASE_URL <from session_b_report>
5. netlify env:set SUPABASE_ANON_KEY <from Supabase dashboard>
6. Create netlify.toml in ~/jobapps/

## Functions — Create in ~/jobapps/netlify/functions/
- get-profile.js      — SELECT * FROM work_history JOIN people
- get-jobs.js         — SELECT * FROM job_postings
- get-applications.js — SELECT * FROM applications
- add-job.js          — INSERT INTO job_postings
- add-application.js  — INSERT INTO applications
- get-match.js        — qualification report by job_id

## Hard Rules
- NEVER use SERVICE_ROLE_KEY in any function.
- Do NOT run netlify deploy until user confirms env vars.

## Completion Signal
Print exactly: SESSION C COMPLETE — DASHBOARD BACKEND READY
Write ~/jobapps/output/session_c_report.md: function list, env vars confirmed, site URL.
