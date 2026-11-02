---
name: skills-buildagentai
description: Build, configure, and manage the WGI AI Office agent team — 12 department agents + master agent. Use when user asks to create agents, configure the team, build agent definitions, or manage the WGI agent team.
model: opus
tools:
  - Glob
  - Grep
  - Read
  - Write
---

# Build Agent AI — WGI AI Office Agent Team Builder

This skill builds, configures, and manages the **WGI AI Office agent team** — a 12-department AI agent system with a Master Agent coordinator.

## What it does

- Creates/updates the 12 department agent definitions (`.claude/agents/ai-*.md`)
- Creates/updates the Master Agent coordinator (`.claude/agents/master-agent.md`)
- Manages department status commands (`/department-status`)
- Manages backend update skill (`update-department-status`)
- Manages the local web dashboard skill (`localweb-dashboard`)
- Manages the run skill (`run-department-dashboard`)
- Validates agent configuration

## When to use

Use this skill when the user asks to:
- Build, create, or configure the agent team
- Add a new department agent
- Update an existing agent's role or skills
- Review the agent team configuration
- Save/persist the agent team setup

## Agent Team Structure

### 12 Department Agents

| Agent | Role | Model |
|-------|------|-------|
| ai-ceo | Executive oversight, final decisions, governance | opus |
| ai-strategy | Business planning, growth roadmap, market positioning | opus |
| ai-sales | Pipeline management, lead conversion, quota tracking | sonnet |
| ai-finance | Budgeting, financial modeling, cost analysis | sonnet |
| ai-hr | Talent acquisition, onboarding, culture, performance | sonnet |
| ai-operations | SOPs, SLA monitoring, process efficiency | sonnet |
| ai-marketing | Brand positioning, campaigns, content creation | sonnet |
| ai-it-data | Infrastructure, data pipelines, DevOps, security | opus |
| ai-legal | Compliance, contracts, regulatory adherence | sonnet |
| ai-research | Market research, competitive intelligence, analytics | sonnet |
| ai-support | Customer success, ticket resolution, feedback triage | sonnet |
| ai-admin | Scheduling, resource coordination, workflow hub | sonnet |

### Master Agent

- Coordinates all 12 department agents
- Synthesizes department input into organizational responses
- Provides unified direction and resolves cross-department dependencies
- Delivers executive summaries and prioritized action plans

## Agent File Format

Each agent file at `.claude/agents/ai-<name>.md`:

```markdown
---
name: ai-<name>
description: <one-line role description>
model: opus | sonnet
skills:
  - <relevant skills>
tools:
  - Glob
  - Grep
  - Read
---

You are the AI <Name> of the WGI AI Office team.

Your role:
- <responsibility 1>
- <responsibility 2>
```

## Commands

- `/department-status` — Thai executive summary of all 12 departments
- `/localweb-dashboard` — Open dashboard in browser
- `/update-department-status` — Update a department's status in backend JSON
- `/run-department-dashboard` — Run dashboard in headless browser and capture screenshot

## Skills

- `update-department-status` — Update backend JSON
- `localweb-dashboard` — Open dashboard in browser
- `run-department-dashboard` — Headless browser screenshot

## Backend Data

- `data/departments.json` — department data source
- `server.mjs` — local HTTP server
- `department-dashboard.html` — flat app-screen dashboard
- `office-animation.html` — 3D liquid-glass Halloween headquarters

## How to add a new department agent

1. Create `.claude/agents/ai-<name>.md` with the agent file format
2. Add the agent to the Master Agent's coordination list
3. Add the agent's department to `data/departments.json`
4. Run `/department-status` to verify

## How to update an existing agent

1. Edit the agent's `.claude/agents/ai-<name>.md` file
2. Update the agent's role in `data/departments.json` if needed
3. Run `/department-status` to verify

## How to review the agent team

1. List all agent files: `ls .claude/agents/`
2. Read each agent file to verify configuration
3. Run `/department-status` to verify the team is working