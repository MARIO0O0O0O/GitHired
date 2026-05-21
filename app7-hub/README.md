# App 7 — GitHired Hub Dashboard
Status: COMPLETE — 2026-05-21
Live URL: https://githired-397.netlify.app
Stack: React + Vite + Supabase + Netlify
Panels: ProfileCard, PipelineBoard, MatchScores, QuickActions
Data: Live from Supabase (read-only, RLS enabled)

## Build Instructions
```bash
npm install
npm run build
netlify deploy --prod --dir=dist
```
