# GitHired System Status
Last QA: 2026-05-21
Owner: Mario A. Espindola

## Apps
| App | Name           | Status  | Notes              |
|-----|----------------|---------|--------------------|
| 1   | ProfileDB      | ✅ LIVE |                    |
| 2   | Doc Gen        | ✅ LIVE |                    |
| 3   | Job Finder     | ✅ LIVE |                    |
| 4   | Match Engine   | ✅ LIVE |                    |
| 5   | App Assist     | ✅ LIVE |                    |
| 6   | App Log        | ✅ LIVE |                    |
| 7   | Hub Dashboard  | ✅ LIVE | https://githired-397.netlify.app |

## Database
- Tables: profile, applications, work_experience, skills
- RLS: ENABLED (read-only public access)
- Leads ready to apply: 5

### Row Counts
- Profile: 1
- Applications: 6
- Work Experience: 7
- Skills: 17

## Applications Ready (Verified)
1. Heart of Los Angeles Youth — Director HR — 8/8
2. AMGEN — HR Director US Commercial — 8/8
3. Keck Medicine of USC — Labor Relations — 8/8
4. Caul Group — AI Automation Director — 7/8
5. Cambridge Mobile Telematics — HR Manager — 6/8

## Next Actions
- [ ] Submit applications (5 packages in ~/jobapps/output/)
- [ ] Session 8 — LLM Chat integration (QuickActions)
- [ ] Monitor pipeline via dashboard

## QA Audit Results
- Dashboard: 200 OK
- Environment: Missing VITE-level keys in central .env (fixed in app7-hub/.env.local)
