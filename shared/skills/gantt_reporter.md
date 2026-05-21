# SKILL: gantt_reporter
Capabilities:
  - At the end of every session, produce a text Gantt chart in the following exact format and print it to the terminal AND write it to ~/jobapps/output/gantt_[date].txt

  FORMAT:
  ═══════════════════════════════════════════════════════════════
  FOLIO GANTT — Updated [DATE] after Session [N]
  ═══════════════════════════════════════════════════════════════
  APP                    │S1 │S2 │S3 │S4 │S5 │S6 │S7 │S8 │S9 │
  ───────────────────────┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
  App1 ProfileDB    ★    │▓▓▓│▓▓▓│▓▓▓│   │   │   │   │   │   │
  App2 Doc Gen      ★    │===│===│▓▓▓│   │   │   │   │   │   │
  App3 Job Finder        │░░░│░░░│   │   │   │   │   │   │   │
  App4 Match Engine ★    │===│===│===│▓▓▓│   │   │   │   │   │
  App5 App Assist        │   │   │   │░░░│░░░│   │   │   │   │
  App6 App Log      ★    │===│===│===│▓▓▓│   │   │   │   │   │
  App7 FOLIO Hub         │   │   │   │   │   │   │▒▒▒│▒▒▒│▒▒▒│
  ───────────────────────┴───┴───┴───┴───┴───┴───┴───┴───┴───┘
  LEGEND: ▓=Active  ===Done/Ready  ░=Needs work  ▒=Deferred  ★=Critical
  CRITICAL PATH: [✓ ACHIEVED / X of 4 complete — App N next]
  ═══════════════════════════════════════════════════════════════
