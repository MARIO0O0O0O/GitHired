# SESSION A — Evidence-Only Resume Inventory

## Load Agent
~/jobapps/agents/hr_specialist.md

## Your Role
Deterministic professional document extractor and inventory compiler.

## Approved Source Files
- /storage/emulated/0/Documents/jobapps/ESPINDOLA-RESUME.pdf
- Any supplemental files the user attaches in this session.
DO NOT use any other sources. Verify every row in the pre-seeded draft
against the source PDF before finalizing. Correct any discrepancy.

## Hard Rules
- Do NOT invent any employer, title, project, date, certification, or skill.
- Do NOT add items not explicitly in source files.
- Mark ambiguous items: NEEDS REVIEW
- Mark conflicts: CONFLICT — NEEDS REVIEW
- Do NOT write to Supabase or any database.
- Stop and ask the user before guessing or inferring anything.

════════════════════════════════════════════════════════════
PRE-SEEDED DRAFT — VERIFY AGAINST SOURCE PDF
STATUS: DRAFT — NOT APPROVED FOR DATABASE INGESTION
════════════════════════════════════════════════════════════

## 1. Identity
name:    Mario A. Espindola
email:   Mario_Espindola@Outlook.com
phone:   626-242-6736
address: 3432 La Madera Ave #3, El Monte, CA 91734

## 2. Professional Summary (source text)
"Results-oriented Human Resources professional with comprehensive expertise in
Administrative Analysis, Human Resources, Public Policy, Technology Administration,
and Public Finance Management. Committed to leveraging cutting-edge technology and
fostering a collaborative environment to drive efficiency and organizational success."

## 3. Work History

| # | Employer | Title | Type | Start | End | Source | Confidence |
|---|---|---|---|---|---|---|---|
| 1 | Robert Half Staffing | HR Assignments | Temp/Staffing | 06/2024 | Present | Resume p.1 | HIGH |
| 2 | City of Fountain Valley | Senior HR Analyst | Full-Time | 01/2023 | 09/2023 | Resume p.1 | HIGH |
| 3 | City of Anaheim | Employee Development Manager | Full-Time | 04/2022 | 01/2023 | Resume p.1 | HIGH |
| 4 | City of Santa Ana | HR Analyst / Mgmt Analyst / Mgmt Aide | Full-Time | 08/2015 | 03/2022 | Resume p.2 | HIGH |
| 5 | COSA (Confidential Assoc. of Santa Ana) | President (Union) | Elected | 2019 | 2022 | Resume p.2 | HIGH |
| 6 | Santiago Canyon College / Santa Ana College | Professor | Part-Time | 2018 | Present | Resume p.2 | HIGH |
| 7 | Los Alamitos JFTB | Auxiliary Firefighter | Volunteer | 2012 | 2012 | Resume p.2 | HIGH |

### Key Responsibilities by Role

**Robert Half Staffing (06/2024–Present)**
Managed benefits programs and compliance training. Conducted investigations.
Assisted recruitment, onboarding, performance management.
Developed and implemented HR policies. Provided specialized HR support.

**City of Fountain Valley — Sr. HR Analyst (01/2023–09/2023)**
Talent acquisition for hard-to-fill roles (firefighters, police, IT Manager).
Reduced time-to-hire while maintaining quality control.
Led Employee Attraction and Retention program committee.
Revitalized fiscal management with efficient processes and auditing.
Oversaw two HR Analysts and one HR Tech.

**City of Anaheim — Employee Development Manager (04/2022–01/2023)**
Managed Employee Development Division for 400+ employees.
Oversaw recruitment, employee & labor relations, workers comp, training.
Administered progressive discipline including investigations.
Managed ADA interactive process for reasonable accommodations.
Orchestrated employee recognition gala for 1,000 people.

**City of Santa Ana — HR Analyst / Mgmt Analyst / Mgmt Aide (08/2015–03/2022)**
HR Analyst: comprehensive HR administration for 1,500+ employees.
Developed and launched Employee Wellness Program.
Developed and oversaw $60M HR budget.
Mgmt Analyst: managed $50M+ federal grants (WIOA, CDBG), fiscal compliance.
Legislative analysis and report writing for leadership.
Mgmt Aide: cost-benefit analysis for annexation of 24 acres unincorporated OC land.
Managed $100M+ in professional service agreements (RFPs to fiscal monitoring).

**COSA — President (2019–2022)**
Negotiated multi-million-dollar agreement as union President.
Presided over Executive Board; acted as primary spokesperson.
Advocated for members; managed Janus v. AFSCME legislative matters.

**Professor — Santiago Canyon College / Santa Ana College (2018–Present)**
Teaches HR, Public Administration, and Supervision courses.
Assisted developing first AA in Public Administration at Santiago Canyon College.
Developed theory + practical curricula. Courses delivered online.

**Auxiliary Firefighter — Los Alamitos JFTB (2012)**
Crash-crew team: fire suppression and medical aid.
Responded to military aircraft emergencies.

## 4. Education

| Institution | Credential | Field | Start | End | Source | Confidence |
|---|---|---|---|---|---|---|
| Cal State Fullerton | Master of Public Administration | Public Administration | 2014 | 2018 | Resume + Diploma p.3 | HIGH |
| Cal State Fullerton | Bachelor of Arts | Public Administration | 2012 | 2014 | Resume + Diploma p.4 | HIGH |
| Santa Ana College | Associate of Science | Fire Technology / Public Fire Service | 2009 | 2012 | Resume + Degree p.5 | HIGH |
| Santa Ana College | 154th Fire Academy — Firefighter I | Fire Training | 2008 | 2009 | Resume + Cert p.6 | HIGH |

## 5. Certifications & Training

| Credential | Issuer | Date | Source | Confidence |
|---|---|---|---|---|
| Public Sector HR Essentials: Session 3 (24 IPMA-CP/SCP pts) | IPMA-HR | 07/21/2020 | Cert p.7 | HIGH |
| Online Teaching and Learning Certificate | Santiago Canyon College | 05/2020 | Cert p.8 | HIGH |
| Firefighter I Trained (2000+ hours, State Board of Fire Services) | Santa Ana College / OCFCA | 06/11/2011 | Cert p.6 | HIGH |

## 6. Projects (named in source)
- Employee Retention and Recruitment Program
- Employee Wellness Program
- Resident Stimulus Program
- Land Annexation Cost-Benefit Analysis
- Fire Department User-Fee Study
- First AA in Public Administration (Santiago Canyon College)

## 7. Skills (listed in source)
Recruitment | Investigations | Negotiations | Tech Implementation |
Diversity, Equity & Inclusion | Employee Relations | Budget Development |
Fiscal/Grant Management | Contract Management

## 8. Teaching / Speaking
Professor, HR / Public Admin / Supervision — Santiago Canyon College + Santa Ana College (2018–Present)
Co-developed AA in Public Administration curriculum (Santiago Canyon College)
Online Teaching Certificate (May 2020)

## 9. Awards & Recognition
NEEDS REVIEW — none explicitly listed in source. Add if applicable.

## 10. Gaps / Ambiguities / Needs Review
- Robert Half end date is "Present" — confirm if still active
- COSA full legal name — confirm: Confidential Association of Santa Ana
- Exact course titles not listed — add if available
- Additional certifications (SHRM, PHR, SPHR) not in source — add if applicable
- Volunteer/community service beyond JFTB — add if applicable

## 11. Approval Gate
STATUS: DRAFT — NOT APPROVED FOR DATABASE INGESTION
Change to STATUS: APPROVED after user review and correction.

═══════════════════════════════════════════════════════════
END OF PRE-SEEDED DRAFT
═══════════════════════════════════════════════════════════

Output to: ~/jobapps/output/master_professional_inventory.md

## Completion Signal
Print exactly: SESSION A COMPLETE — REVIEW master_professional_inventory.md BEFORE PROCEEDING
Then stop. Do not write to any database.
