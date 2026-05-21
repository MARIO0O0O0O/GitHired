---
# GitHired — Deferred Items

## playwright (needed for job scraper — Session E)
Fix: proot Ubuntu environment is ready, but Chromium install failed on arm64 Ubuntu 26.04.
Run before Session E:
  proot-distro login ubuntu -- python3 -m playwright install chromium

## resume-matcher (ATS keyword scoring)
Fix options:
  A) pip3 install resume-matcher inside proot Ubuntu
  B) Manual keyword review — no tool needed
Status: non-blocking, skip for now

## Notes
- Tasks 1, 3, 4, 6 are fully ready.
- Task 2 (Supabase) is pending authentication.
- Session E scraper runs inside proot Ubuntu, not native Termux.
- All other sessions unaffected.
- Project renamed to GitHired to avoid conflict with "folio" business project.
---
