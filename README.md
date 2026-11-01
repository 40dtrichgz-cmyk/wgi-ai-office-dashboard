# WGI AI Office — Agent Team & Dashboard

A 13‑agent Claude Code team simulating a full corporate office, plus a live department‑status dashboard.

## What's inside

| Folder / File | Purpose |
|---------------|---------|
| `.claude/agents/` | 13 specialized agents (CEO, Strategy, Sales, Finance, HR, Operations, Marketing, IT & Data, Legal, Research, Support, Admin, Master) |
| `.claude/commands/` | `/department-status` — Thai executive summary of all 12 departments |
| `.claude/skills/` | `localweb-dashboard` — opens the dashboard in your browser |
| `department-dashboard.html` | **Live dashboard** — open this file in any browser (no server needed) |

## Quick start

### 1. Open the dashboard locally (no backend required)

Double‑click `department-dashboard.html` — it runs entirely in the browser.

Or, from any Claude Code session:

```
/localweb-dashboard
```

### 2. View a department status report

```
/department-status
```

### 3. Use any department agent

```
/ai-ceo
/ai-strategy
/ai-sales
/ai-finance
/ai-hr
/ai-operations
/ai-marketing
/ai-it-data
/ai-legal
/ai-research
/ai-support
/ai-admin
/master-agent
```

## Dashboard features

- 12 department cards with status, model (opus/sonnet), key metric, and Thai/English names
- Each card lists the agent's main duties (`หน้าที่หลัก`)
- Search bar to filter departments
- Refresh button
- CEO and Operations cards highlighted with accent colors

> Note: status values are placeholder/demo data until connected to a live backend.

## Live site

This repository is deployed to **GitHub Pages** — see the "Pages" tab in the repository settings.