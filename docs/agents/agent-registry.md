---
id: agent-registry
slug: /agents/agent-registry
sidebar_label: Agent Registry
title: Agent Registry
---

# Agent Registry

The agent registry manages the discovery, registration, and lifecycle of all agents in AgamX.

## Purpose & Responsibilities
- Registers new agents and their capabilities
- Enables discovery of available agents for orchestration
- Manages agent metadata and permissions

## API & Usage
- **File:** `agent_registry.py`
- **Key Methods:**
  - `register_agent(agent)`: Registers a new agent
  - `get_agent(name)`: Retrieves an agent by name
  - `list_agents()`: Lists all registered agents

## Extension Points
- Add new agent types and register them for orchestration
- Extend metadata and permission logic as needed

---

See the code in `langchain-mcp/agent/agent_registry.py` for implementation details and examples. 