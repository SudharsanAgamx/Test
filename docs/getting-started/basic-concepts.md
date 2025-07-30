# Basic Concepts

Understanding the core concepts of AgamX is essential for building effective automations. This section introduces the foundational elements of the platform, with direct references to the codebase.

## Agents
Agents are autonomous components that perform specific tasks. In AgamX, agents are implemented in Python and can be found in:
- `langchain-mcp/agent/`
  - `databaseAgent.py`: Handles database-related automations and risk assessment.
  - `email_io_agent.py`: Manages email reading and sending (O365, templates).
  - `orchestrator_agent.py`: Coordinates multiple agents and workflow logic.
  - `agent_registry.py`: Registers and discovers available agents.

## Orchestration
Orchestration is the process of coordinating multiple agents to achieve complex workflows. The orchestrator agent (`orchestrator_agent.py`) is responsible for:
- Task assignment
- Data flow between agents
- Managing agent lifecycle and extensibility

## Tools
Tools are reusable components that extend agent capabilities. They are implemented in:
- `langchain-mcp/tools/`
  - `email_reader.py`, `email_sender.py`: Email operations
  - `auth.py`: Authentication helpers (O365, etc.)
  - `db_tools` (if present): Database utilities

## Evaluation & Testing
AgamX includes robust evaluation and testing, using:
- `langchain-mcp/evls/`: Custom evaluation logic for agents and workflows
- `langchain-mcp/pytest/`: Test suites for end-to-end and unit testing (using pytest)

## Integration
The platform is designed for extensibility, supporting integration with external systems (O365, databases, etc.) and custom tool development.

---

For more details, explore the referenced files and the next sections of this documentation. 