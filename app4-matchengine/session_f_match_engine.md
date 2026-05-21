# SESSION F — Match Engine & Qualification Checker

## Load Agent
~/jobapps/agents/match_engine.md

## Dependencies
- Requires Session B complete (Supabase live).
- Requires master_professional_inventory.md STATUS = APPROVED.
- Reads ~/jobapps/output/job_search_results.json.

## Known Profile Summary
Mario Espindola — ~10 years CA public sector HR.
MPA Cal State Fullerton (2018). BA Public Admin CSUF (2014).
Key disciplines: Recruitment, Employee/Labor Relations, Benefits Administration,
Investigations, DEI, Budget/Fiscal Management ($60M HR budget, $50M+ grants),
Contract Management ($100M+ agreements), ADA Compliance,
Training/Development, Workers Comp, Progressive Discipline.
Union President COSA (2019–2022). Professor HR/Public Admin (2018–present).
Current: HR Assignments via Robert Half (06/2024–present).
Cert: IPMA-HR Public Sector HR Essentials (2020, 24 pts).

## Task — For Each Posting in job_search_results.json
1. Extract required_years_experience by discipline.
2. Calculate matching years from work_history rows.
3. Compare required_education to education rows.
4. Compare required_certifications to certifications rows.
5. Assign:
   - MEETS MINIMUM     → all core requirements met
   - PARTIAL MATCH     → some met; list specific gaps clearly
   - DOES NOT MEET     → core unmet; explain clearly

## Output
~/jobapps/output/qualification_report.md
Sorted by match status descending (MEETS MINIMUM first).

## Hard Rules
- Never overstate qualifications.
- Never infer experience beyond the approved inventory.
- Do not make apply/no-apply recommendations.

## Completion Signal
Print exactly: SESSION F COMPLETE — QUALIFICATION REPORT READY
