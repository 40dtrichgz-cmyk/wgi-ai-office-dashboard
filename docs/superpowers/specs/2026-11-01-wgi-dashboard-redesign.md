# WGI AI Office Dashboard — redesign design doc

Date: 2026-11-01
Skill: taste-skill (app-screen run, `references/app-screens.md`)

## 1. What this is

An **app screen**, not a page: the WGI AI Office Master Agent dashboard is
worked in (a glance a day, on desktop), not read once.

Subject: WGI (Well & Good Inter Guard) AI Office — a 12-department AI agent
team. Audience: the CEO / master agent, checking which departments are
healthy and which need attention.

## 2. The screen's one question

**"Which departments are healthy and which need attention?"**

Everything on the first screen answers that. The biggest block is the
department grid; the largest figure is the count of healthy departments.

One finding, read first: **12 of 12 agents are live and on duty.**

## 3. Inventory (data and jobs)

Objects: 12 department agents. Fields — name, Thai name, agent slug,
model (opus/sonnet), status, metric label, metric value, description,
5 duties.

Magnitudes: 12 agents total. 3 opus (CEO, Strategy, IT & Data), 9 sonnet.
All 12 Active. No at-risk or offline departments in the current dataset.

People: the WGI CEO opens it once a day, on desktop, for a glance.

Jobs: search/filter departments, refresh status, open a department's
agent. The most frequent job is finding a specific department.

Product's own things that make it this product and not a template:
- The name WGI and what it means (Well & Good Inter Guard)
- "Smarter Team. Stronger WGI."
- The 12 agents themselves, with their Thai titles
- The neon-cyan isometric office look from the reference image

## 4. Style dealt

`true-black-flat` (dark), seed 1738816659, kind `workspace`, screens
`overview`, theme dark.

**Why this style.** The reference image is a dark, neon-cyan isometric
office. True-black-flat is the only dark style in the library, and its
move — elevation by lightness alone, colour confined to data — matches
the reference better than any light style could. The alternative dealt
was `data-terminal`, which is for long monitoring sessions; this is a
glance-a-day hub, so true-black-flat fits.

**Face chosen.** The sheet allows "the one data hue from the product's
world in place of the dealt lime". WGI's world is neon cyan, so the
dealt lime `#c6f24e` is replaced by **cyan `#22d3ee`**. It is still the
only hue on data and never touches buttons, tabs or nav.

**Ground.** The sheet allows "a cool near-black for a monitor". The
ground is `#0b0c12` with cards at `#14151c` — one lightness step, no
border, no shadow. Not navy, not slate.

**Signature element.** The product's own thing: the **12 agents as a
roster strip** — the agent-team bar from the reference image, rendered
as a row of 12 named cells with their model colour. This is the one
element only WGI has.

## 5. Blocks (answers to the next questions)

1. **KPI strip** — 4 headline numbers: 12 agents, 3 opus, 12/12 active,
   1 model family. One divided container, no tiles, no icons.
2. **Department grid** — the 12 cards, the screen's biggest block. Each
   card: agent slug, name, Thai name, status pill, model, metric, duties.
3. **Model mix** — opus vs sonnet as a thin ring (3 of 12 opus).
4. **Status distribution** — a horizontal bar list: active 12, at-risk 0,
   offline 0.

## 6. Layout

Shell: **no sidebar** — a 46px top bar on the page ground over a
centred 1120px column; the WGI wordmark sits on the column's left edge.
This is a generated overview with few destinations.

Grid arithmetic: 1120px column, 24px gutters, cards 4-up at 1440
(4 × 256 + 3 × 24 = 1096, closes inside 1120). On the phone the cards
go 2-up.

## 7. Live thing

The **search box** in the top bar: type a department name, Thai name or
agent slug and the grid filters. It works with a thumb on a phone, has
a plain fallback without script, and never blocks reading.

## 8. What is left to the builder

- The exact duty wording per department (already in the data file).
- Whether any department flips to At Risk when real data lands.