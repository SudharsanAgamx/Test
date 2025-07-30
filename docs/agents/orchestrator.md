---
id: orchestrator
slug: /agents/orchestrator
sidebar_label: Orchestrator Agent
title: Orchestrator Agent
---

# Orchestrator Agent

The orchestrator agent is the central coordinator in AgamX, responsible for managing workflows and delegating tasks to specialized agents.

## Purpose & Responsibilities
- Receives workflow/task requests
- Assigns subtasks to appropriate agents (database, email, etc.)
- Manages workflow state, error handling, and result aggregation
- Supports extensibility for custom workflows

## API & Usage
- **File:** `orchestrator_agent.py`
- **Key Methods:**
  - `run_workflow(task: str)`: Executes a workflow by delegating to agents
  - `add_agent(agent)`: Registers a new agent for orchestration

## Extension Points
- Add new agent types by implementing required interfaces and registering them
- Customize workflow logic by extending the orchestrator class

---

See the code in `langchain-mcp/agent/orchestrator_agent.py` for implementation details and examples. 