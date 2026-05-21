# FOLIO — Project Charter v3.0

## Project Name
FOLIO — AI-Powered Professional Identity & Job Application System

## Owner
Mario A. Espindola
Mario_Espindola@Outlook.com | 626-242-6736
3432 La Madera Ave #3, El Monte, CA 91734

## One-Line Vision
A personal AI system that holds my verified career history in a portable
database, finds jobs for me, tells me if I qualify, and prepares every
application document — while I remain in control of every submission.

## Full Vision
1. Parse and store verified work history, education, volunteer experience,
   certifications, projects, and skills into a canonical PostgreSQL database.
2. Use that database to generate ATS-optimized resumes, cover letters,
   and other application documents on demand.
3. Run autonomous job-search agents that scrape the web based on my queries
   and return structured job postings.
4. Match each posting to my verified database and produce a qualification
   report: MEETS MINIMUM / PARTIAL MATCH / DOES NOT MEET.
5. Present the match report and wait for my go/no-go decision.
6. On approval: draft resume, cover letter, pre-fill application form, and
   log the application. Do NOT submit.
7. I review everything. I submit.
8. A standalone web dashboard serves as the control panel for the workflow.
9. When the system matures, seed approved data into my electronic portfolio
   as a future phase.

## What FOLIO Is NOT
- Not the electronic portfolio (separate project, seeded later)
- Not an auto-submission tool
- Not a fabricator of work history
- Not a replacement for my judgment

## Core Principles
- Human approval at every critical gate
- Source-bounded database — no invented facts, ever
- Portable user-owned PostgreSQL via Supabase
- Goose orchestrates. Gemini CLI executes. I approve.
- Dashboard is standalone. Portfolio is untouched for now.

## Build Phases
| Phase | Session | Name                        | Gate                        |
|-------|---------|-----------------------------|-----------------------------|
| 0     | —       | Bootstrap                   | None                        |
| 1     | A       | Inventory Extraction        | Human review & approval     |
| 2     | B       | Supabase Schema Build       | None (parallel)             |
| 3     | C       | Dashboard Backend           | Requires B                  |
| 4     | D       | Resume & Letter Generator   | Requires A approval         |
| 5     | E       | Job Search Agent            | None (parallel)             |
| 6     | F       | Match Engine                | Requires B + A approval     |
| 7     | G       | Dashboard Frontend          | Requires C                  |
| 8     | —       | Portfolio Seeding (future)  | All phases complete         |

## Success Criteria
- Verified database populated with approved career history
- Job search returns real structured postings
- Qualification report correctly identifies gaps
- Resume and cover letter generated from database only
- Application log updated after each decision
- Dashboard renders all workflow steps in one UI
- Zero auto-submissions
