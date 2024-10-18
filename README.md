# Incident Management System

## Table of Contents

1. [Self-Service](#self-service)
2. [Incidents](#incidents)
3. [Watched Incidents](#watched-incidents)
4. [Service Desk](#service-desk)
5. [Incident Categories](#incident-categories)
    - [Incident](#incident)
    - [Create New](#create-new)
    - [Assigned to Me](#assigned-to-me)
    - [Open](#open)
    - [Open - Unassigned](#open---unassigned)
    - [Resolved](#resolved)
    - [All](#all)
6. [Task SLA](#task-sla)
7. [Overview](#overview)
8. [Summary of Key Use Cases](#summary-of-key-use-cases)

---

## Self-Service

Self-Service portals empower end-users to:

-   **Log Incidents:** Report issues with software or hardware.
-   **Raise Service Requests:** Request new software or access to a tool.
-   **Track Status:** Check the status of existing incidents or requests.
-   **Search Knowledge Articles:** Find solutions to common problems.
-   **Access Automated Help:** Use virtual agents for assistance.

**Use Case:** End-users can log incidents without contacting the IT help desk, reducing the workload on support teams and speeding up issue resolution.

---

## Incidents

In ServiceNow, **Incidents** refer to unplanned disruptions to services or degradation in service quality. Managing incidents is a core function of IT Service Management (ITSM).

### Example:

A user cannot access email or the internet, and an incident is created to restore service.

### Incident Management Workflow:

1. **Create:** The incident is logged.
2. **Assign:** The incident is assigned to the relevant team.
3. **Investigate:** The root cause is identified.
4. **Resolve:** The service is restored.
5. **Close:** The incident is marked resolved or closed.

---

## Watched Incidents

Watched incidents are those that a user is tracking for updates, even if they are not directly assigned.

**Use Case:**

-   A manager or IT lead may watch critical incidents relevant to their department.
-   Teams relying on another service may track related incidents for updates.

---

## Service Desk

The **Service Desk** is the central point of contact between users and the IT department, responsible for:

-   **Receiving, Logging, and Assigning Incidents:** Capturing all incoming issues.
-   **Resolving Simple Issues:** Directly resolving minor problems or routing complex issues to the correct teams.
-   **Providing Support:** Assisting users and tracking service requests.

**Use Case:** If an employee reports a laptop issue, the service desk logs the incident and assigns it to the hardware support team.

---

## Incident Categories

### a) Incident

This view shows a full list of all incidents, regardless of status. Typically available to administrators and managers for oversight.

### b) Create New

Allows users or IT personnel to log a new incident, requiring:

-   **Short Description** (e.g., "Unable to access email").
-   **Category** (e.g., Network, Software).
-   **Priority** (e.g., High, Medium, Low).
-   **Assignment Group or Assigned To.**

### c) Assigned to Me

Displays incidents assigned to the logged-in user, who is responsible for resolving them.

**Use Case:** A technician sees assigned incidents and begins working on the most critical one.

### d) Open

Shows all incidents that are not resolved or closed, including those "In Progress" or "On Hold."

**Use Case:** The service desk monitors open incidents to ensure timely resolution and prevent SLA breaches.

### e) Open - Unassigned

Displays incidents that are open but not assigned to any individual or team.

**Use Case:** A service desk manager reviews this list to assign incidents appropriately.

### f) Resolved

Shows incidents that are resolved but not yet closed. After confirming with the user that the issue is resolved, the technician can move the incident to the closed state.

**Use Case:** If a user still has the issue after the resolution, they can re-open the incident, ensuring the problem is properly resolved.

### g) All

Provides access to all incidents, regardless of their status (Open, Closed, In Progress, etc.).

**Use Case:** Administrators or managers can use this view for reporting, auditing, or reviewing incident trends over time.

---

## Task SLA

This section monitors Service Level Agreements (SLAs) for tasks, including incidents. It tracks how well the IT team is performing against agreed timeframes.

**Use Case:** Ensures incidents are resolved within specified SLAs, such as:

-   Priority 1 incidents must be resolved within 4 hours.
-   Priority 2 incidents must be resolved within 24 hours.

The Task SLA allows users to:

-   View active and breached SLAs.
-   Monitor performance of teams and individuals.
-   Escalate issues nearing breach deadlines.

---

## Overview

The Overview section provides a dashboard view of incidents and SLAs. This can include:

-   Total incidents: Open, Resolved, Closed.
-   Incidents by priority: High, Medium, Low.
-   SLA Performance: Percentage of incidents resolved within SLA.
-   Graphs and metrics: Help managers quickly identify problem areas.

**Use Case:** Managers use the Overview Dashboard to:

-   Monitor the workload and backlog of incidents.
-   Track the performance of their team.
-   Identify patterns in incidents (e.g., recurring network outages).

---

## Summary of Key Use Cases

-   **Self-Service Portal:** Enables users to log incidents and requests on their own.
-   **Watched Incidents:** Helps users keep track of critical incidents.
-   **Service Desk:** Acts as the primary point of contact for users needing IT assistance.
-   **Task SLA:** Ensures compliance with service timelines, avoiding penalties or breaches.
-   **Overview Dashboard:** Provides a high-level view of incident management and team performance.
