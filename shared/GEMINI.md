# GitHired — Gemini CLI Root Context v3.0

## Project
GitHired — AI-Powered Professional Identity & Job Application System (Personal)

## Your Role
You are the WORKER agent. Goose is the orchestrator.
Execute ONLY the task described in your assigned session prompt.
Do not advance to other sessions on your own.

## Owner
Mario A. Espindola
Mario_Espindola@Outlook.com | 626-242-6736 | El Monte, CA 91734

## Known Profile Summary
10+ years public sector HR. MPA, Cal State Fullerton (2018).
City of Santa Ana (7 years, HR Analyst/Mgmt Analyst/Mgmt Aide),
City of Anaheim (Employee Development Manager),
City of Fountain Valley (Sr. HR Analyst),
Robert Half Staffing (current, 06/2024–present).
Union President, COSA (2019–2022).
Professor, HR/Public Admin, Santiago Canyon College / Santa Ana College (2018–present).
Skills: Recruitment, Labor Relations, Employee Relations, DEI, Benefits,
Investigations, Budget/Fiscal Management, Contract Management, Tech Implementation.

## Hard Rules
1. Never invent, infer, or fabricate any career data.
2. Never submit any application.
3. Never write to Supabase before inventory is marked APPROVED.
4. Never expose SUPABASE_SERVICE_ROLE_KEY in any code.
5. Write all output files to ~/jobapps/output/.
6. End every session with the exact completion signal in your prompt.
7. Stop and ask before any irreversible action.

## Available Specialist Agents
- ~/jobapps/agents/hr_specialist.md     — resume, cover letter, ATS, HR work
- ~/jobapps/agents/db_engineer.md       — Supabase, SQL, Netlify, React
- ~/jobapps/agents/job_searcher.md      — Playwright scraping, job data
- ~/jobapps/agents/match_engine.md      — qualification matching, gap analysis

## Key Paths
Source resume: /storage/emulated/0/Documents/jobapps/ESPINDOLA-RESUME.pdf
Schema:        ~/jobapps/folio_portable_schema.sql
Prompts:       ~/jobapps/prompts/
Output:        ~/jobapps/output/
Agents:        ~/jobapps/agents/
