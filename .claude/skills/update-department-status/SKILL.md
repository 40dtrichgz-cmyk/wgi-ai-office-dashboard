---
name: update-department-status
description: Update the status of a WGI AI Office department in the backend JSON file
model: opus
tools:
  - Glob
  - Grep
  - Read
  - Write
---

# Update Department Status

Update the status of a WGI AI Office department in the backend JSON file
(`data/departments.json`).

## Purpose

The WGI AI Office dashboard reads its data from `data/departments.json`.
This skill lets the Master Agent (or any department head) update a
department's status, metric, or description in that file, so the
dashboard reflects the new state on the next load.

## Prerequisites

- The file `data/departments.json` exists in the project root.
- Node.js 22+ is installed (it is in this environment).

## How to use

Run this skill when the user asks to:
- Change a department's status (e.g. "Set AI Sales to At Risk")
- Update a department's metric (e.g. "AI Finance reports 15% over budget")
- Update a department's description

## Steps

1. **Read the current file.** Use the Read tool on
   `data/departments.json` to get the current state.

2. **Find the department.** Match by `agent` slug (e.g. `ai-sales`) or
   by `name` (e.g. `AI Sales`).

3. **Update the fields.** Change the requested fields:
   - `status`: one of `Active`, `At Risk`, `Offline`
   - `metric`: the headline number or state
   - `desc`: the department description

4. **Update the metadata.** After any change:
   - Set `lastUpdated` to the current ISO 8601 timestamp
   - Recompute `activeDepartments` from the number of departments with
     `status: "Active"`
   - Set `systemHealth` based on the new state:
     - All active → `Optimal`
     - Any at risk → `At Risk`
     - Any offline → `Degraded`

5. **Write the file back.** Use the Write tool to save the updated JSON.

6. **Verify.** Read the file back to confirm the change was applied
   correctly.

## Example

User: "Set AI Sales to At Risk because the pipeline is slowing down."

1. Read `data/departments.json`.
2. Find `ai-sales`.
3. Change `status` from `"Active"` to `"At Risk"`.
4. Update `lastUpdated` and recompute `activeDepartments` (now 11).
5. Set `systemHealth` to `"At Risk"`.
6. Write the file back.
7. Confirm with the user that the dashboard will now show AI Sales as
   At Risk.

## Notes

- This skill only modifies `data/departments.json`. It does not touch
  the dashboard HTML.
- The dashboard fetches the JSON at runtime, so no rebuild is needed —
  the change is live on the next page load.
- If the file does not exist, create it with the full 12-department
  structure before making changes.