---
description: Update the status of a WGI AI Office department in the backend JSON file
---

Update the status of a WGI AI Office department in the backend JSON file (`data/departments.json`).

Use this command when the user asks to:
- Change a department's status (e.g. "Set AI Sales to At Risk")
- Update a department's metric (e.g. "AI Finance reports 15% over budget")
- Update a department's description

Steps:
1. Read the current `data/departments.json` file.
2. Find the department by `agent` slug or `name`.
3. Update the requested fields (`status`, `metric`, `desc`).
4. Update `lastUpdated` to the current ISO 8601 timestamp.
5. Recompute `activeDepartments` from the number of departments with `status: "Active"`.
6. Set `systemHealth` based on the new state: `Optimal` (all active), `At Risk` (any at risk), `Degraded` (any offline).
7. Write the file back and verify the change.

The dashboard fetches the JSON at runtime, so the change is live on the next page load.