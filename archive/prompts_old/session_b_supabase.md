# SESSION B — Supabase Schema Build

## Load Agent
~/jobapps/agents/db_engineer.md

## Dependencies
None. Runs in parallel immediately.

## Steps — Execute in Order
1. pkg install nodejs git -y
2. npm install -g supabase
3. supabase login (Marioespindola00@gmail.com)
4. supabase init (inside ~/jobapps/)
5. supabase db push using ~/jobapps/folio_portable_schema.sql

## Tables
people, source_documents, source_extractions, work_history, education,
certifications, projects, skills, teaching_speaking, awards_recognition,
job_postings, applications, resume_versions, cover_letter_versions

## RLS on ALL tables
ALTER TABLE <table> ENABLE ROW LEVEL SECURITY;
CREATE POLICY "owner_only" ON <table>
  FOR ALL USING (auth.uid()::text = person_id::text);

## Hard Rules
- Schema only. Zero data rows.
- Do NOT skip RLS.
- Do NOT expose service_role key.
- Confirm each step. Stop and print full error on any failure.

## Completion Signal
Print exactly: SESSION B COMPLETE — SUPABASE SCHEMA LIVE
Write ~/jobapps/output/session_b_report.md: table list, RLS status, project URL.
