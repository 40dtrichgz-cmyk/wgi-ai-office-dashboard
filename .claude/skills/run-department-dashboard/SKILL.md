---
name: run-department-dashboard
description: Run the WGI AI Office department dashboard in a headless browser and capture a screenshot
model: fable
---

# Run the WGI AI Office Department Dashboard

The WGI AI Office department dashboard is a single static HTML file
(`department-dashboard.html`) that renders a 12-department status
overview. It runs entirely in the browser — no server, no backend,
no API key required.

This skill drives the dashboard with Playwright headless Chromium and
captures a screenshot, so a future agent can verify the dashboard
renders correctly without opening a window.

## Prerequisites

- Node.js v24+ and npm (already present in this container).
- Playwright installed in the project. Install once:

```bash
npm install --no-save playwright
npx playwright install chromium
```

## Run (agent path)

Launch the driver. It opens the dashboard in headless Chromium, waits
for it to render, and saves a full-page screenshot:

```bash
node .claude/skills/run-department-dashboard/driver.mjs
```

Screenshot lands at:
`.claude/skills/run-department-dashboard/screenshot.png`

To inspect the screenshot programmatically, check the PNG header:

```bash
node -e "const fs=require('fs');const b=fs.readFileSync('.claude/skills/run-department-dashboard/screenshot.png');console.log('size:',b.length,'| dims:',b.readUInt32BE(16),'x',b.readUInt32BE(20),'| valid:',b.slice(0,8).toString('hex')==='89504e470d0a1a0a')"
```

## Run (human path)

Open the file directly in any browser — no build step, no server:

```bash
open department-dashboard.html      # macOS
xdg-open department-dashboard.html   # Linux
start department-dashboard.html      # Windows
```

The dashboard is a single static file. Double-click it in your file
manager to open it.

## Driver

The driver is committed at
`.claude/skills/run-department-dashboard/driver.mjs`. It:

1. Launches headless Chromium.
2. Opens `department-dashboard.html` via `file://`.
3. Waits 2 seconds for the page to render.
4. Captures a full-page screenshot.

If you need a different viewport, edit the `viewport` dimensions in the
driver. If you need to interact with the page (search, filter), extend
the driver with `page.fill()` / `page.click()` calls.

## Gotchas

- The HTML file uses relative paths. Always run the driver from the
  project root (`C:\Users\Windows10\Desktop\claude agent`).
- Playwright needs the `chromium` browser binary. `npx playwright
  install chromium` downloads it once; it is cached at
  `C:\Users\Windows10\AppData\Local\ms-playwright`.
- On a fresh machine, the first run may take a few minutes while
  Playwright downloads the browser binary.
- The screenshot is a full-page capture, so its height is larger than
  the viewport (e.g. 1440×1865 for a 1440×900 viewport).

## Troubleshooting

**Blank or empty screenshot.** The page may not have finished
rendering. Increase the `waitForTimeout` delay in the driver (currently
2000 ms) or add `page.waitForSelector('.card')` after `goto` to wait
for the department cards to appear.

**"chromium: command not found" / browser launch fails.** Install the
browser binary:

```bash
npx playwright install chromium
```

**"Cannot find module 'playwright'"**. Install the dependency:

```bash
npm install --no-save playwright
```

**Sandbox errors on Linux.** If Chromium refuses to launch due to
sandbox restrictions, add `--no-sandbox` to the launch args in the
driver:

```js
chromium.launch({ headless: true, args: ['--no-sandbox'] });
```