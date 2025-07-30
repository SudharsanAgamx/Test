# Multi-Agent System

AgamX is built around a multi-agent architecture, enabling complex workflows through the collaboration of specialized agents.

## Agent Types & Roles
- **Orchestrator Agent** (`orchestrator_agent.py`): Central coordinator, assigns tasks, manages workflow state.
- **Database Agent** (`databaseAgent.py`): Handles database operations, risk assessment, and data storage.
- **Email Agent** (`email_io_agent.py`): Manages email reading, sending, and template processing.
- **Agent Registry** (`agent_registry.py`): Registers, discovers, and manages available agents.

## Orchestration Logic
- The orchestrator agent receives a workflow/task request.
- It delegates subtasks to specialized agents based on their capabilities.
- Agents communicate results back to the orchestrator, which manages the overall workflow state.
- Agents can be extended or replaced for custom workflows.

## Extensibility
- New agent types can be added by implementing the required interfaces and registering them in `agent_registry.py`.
- Agents can use tools from `/tools/` for additional capabilities.

---

See the code in `langchain-mcp/agent/` for implementation details and examples. 