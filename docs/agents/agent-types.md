---
id: agent-types
slug: /agents/agent-types
sidebar_label: Agent Types & Roles
title: Agent Types & Roles
---

# Agent Types & Roles

AgamX features several specialized agent types, each responsible for a distinct aspect of automation.

## Orchestrator Agent
- **File:** `orchestrator_agent.py`
- **Role:** Central coordinator, assigns tasks, manages workflow state, and handles error recovery.

## Database Agent
- **File:** `databaseAgent.py`
- **Role:** Handles database operations, risk assessment, and data storage.

## Email Agent
- **File:** `email_io_agent.py`
- **Role:** Manages email reading, sending, and template processing (O365, etc.).

## Agent Registry
- **File:** `agent_registry.py`
- **Role:** Registers, discovers, and manages available agents and their capabilities.

---

Each agent type can be extended or customized for specific workflows. See the following pages for deeper dives into each agent. 