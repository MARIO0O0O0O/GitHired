# SESSION E — Job Search Agent

## Load Agent
~/jobapps/agents/job_searcher.md

## Dependencies
None. Runs in parallel immediately.

## Task
Based on user-provided search queries, scrape job postings from:
- Indeed, LinkedIn (public), Glassdoor, CalCareers, USAJOBS

## For Each Posting Return
title, employer, location, salary_range, required_years_experience,
required_education, required_certifications, key_responsibilities,
posted_date, source_url

## Tools
Playwright Python headless Chromium.
Script: ~/jobapps/agents/job_scraper.py — create if not present.

## Output Files
- ~/jobapps/output/job_search_results.csv
- ~/jobapps/output/job_search_results.json

## Hard Rules
- Never fabricate listings.
- Respect robots.txt. Use 2-3 second delays.
- Only finalize listings the user confirms are real.

## Completion Signal
Print exactly: SESSION E COMPLETE — JOB SEARCH RESULTS READY
Report: postings found, sources searched, file paths.
