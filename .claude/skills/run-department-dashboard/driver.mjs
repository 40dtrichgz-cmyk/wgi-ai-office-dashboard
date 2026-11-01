import { chromium } from 'playwright';
import path from 'path';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const filePath = path.resolve('department-dashboard.html');
  await page.goto(`file://${filePath}`);

  // Wait for page load
  await page.waitForTimeout(2000);

  // Save screenshot
  const screenshotPath = path.resolve('.claude/skills/run-department-dashboard/screenshot.png');
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log(`Screenshot saved to ${screenshotPath}`);

  await browser.close();
})();
