# SESSION G — Dashboard Frontend Build

## Load Agent
~/jobapps/agents/db_engineer.md

## Dependencies
Requires session_c_report.md confirming Netlify functions are live.

## Task
Build standalone React + Vite + Tailwind dashboard.
Project directory: ~/jobapps/dashboard/
This is NOT the electronic portfolio. Do not touch any portfolio files.

## Pages
1. /profile         — identity card + work history + education + certs
2. /jobs            — search form + filterable results with match status badges
3. /match           — per-posting qualification breakdown
4. /documents       — resume and cover letter list with version labels
5. /applications    — tracker: company, title, status, resume used, date, notes
6. /settings        — Supabase status, export buttons (CSV/JSON)

## Tech
- React 18 + Vite, Tailwind CSS
- @supabase/supabase-js (anon key only, from .env.local)
- React Router v6

## .env.local (create, do not commit)
VITE_SUPABASE_URL=<from session_c_report>
VITE_SUPABASE_ANON_KEY=<from session_c_report>

## Hard Rules
- Standalone only. Zero portfolio changes.
- ANON_KEY only on client side.
- Every apply/submit routes through a user-confirm modal first.
- No auto-submission logic of any kind.

## Completion Signal
Print exactly: SESSION G COMPLETE — DASHBOARD FRONTEND READY FOR REVIEW
Write ~/jobapps/output/session_g_report.md: local URL, Netlify URL, pages, known issues.
