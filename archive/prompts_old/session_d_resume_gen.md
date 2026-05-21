# SESSION D — ATS Resume & Cover Letter Generator

## Load Agent
~/jobapps/agents/hr_specialist.md

## Dependencies
Read ~/jobapps/output/master_professional_inventory.md.
Check STATUS line. STOP if STATUS is DRAFT.
Proceed only if STATUS is APPROVED.

## Known Background (pre-loaded from approved inventory)
Mario A. Espindola — Senior HR Professional
~10 years CA public sector HR. MPA + BA Public Administration (CSUF).
Roles: City of Santa Ana (7 yrs), City of Anaheim (Emp. Dev. Manager),
City of Fountain Valley (Sr. HR Analyst), Robert Half (current).
Union President COSA (2019–2022). Professor HR/Public Admin (2018–present).
Skills: Recruitment, Investigations, Negotiations, DEI, Employee Relations,
Budget Development, Fiscal/Grant Management, Contract Management,
Tech Implementation, ADA Compliance, Workers Compensation.
Certs: IPMA-HR Public Sector HR Essentials (2020), Firefighter I, Online Teaching.

## Task — For Each Role the User Provides
1. Parse the job description.
2. Extract top 10 ATS keywords + all required qualifications.
3. Map each to approved inventory rows.
4. Generate ATS resume — plain text only, no tables, columns, or graphics.
5. Generate cover letter — factual, specific, no generic filler.
6. Write match score: High / Medium / Low with gap list.

## Output Files (per role)
- ~/jobapps/output/resume_[rolename]_v1.md
- ~/jobapps/output/coverletter_[rolename]_v1.md
- ~/jobapps/output/match_score_[rolename].md

## Completion Signal
Print exactly: SESSION D COMPLETE — DOCUMENTS READY FOR REVIEW
