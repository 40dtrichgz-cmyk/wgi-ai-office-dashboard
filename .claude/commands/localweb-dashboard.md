---
description: เปิด Local Web Dashboard สำหรับดูสถานะแผนกทั้งหมดใน Browser โดยไม่ต้องมี Backend
---

Open the Local Web Dashboard for WGI AI Office department status overview.

Steps:
1. Tell the user to open the file: `department-dashboard.html` located at `C:\Users\Windows10\Desktop\claude agent\department-dashboard.html`
2. Explain that it is a pure HTML/JS dashboard — no server, no backend, no API key required. Just double-click the file to open in any browser.
3. Describe what the dashboard shows:
   - 12 department cards with status, model (opus/sonnet), key metric, and Thai/English department names
   - Each card lists the agent's main duties (หน้าที่หลัก)
   - Search bar to filter departments by name or keyword
   - Refresh button to refresh status
   - CEO/Ops cards highlighted with accent colors
4. Note that status values are placeholder/demo data unless connected to live backend data.
5. Offer to help add real backend integration (e.g., connecting to `/department-status` command output) when the user is ready.

Write the response in Thai.