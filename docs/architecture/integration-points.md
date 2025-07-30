# Integration Points

AgamX is built for extensibility and seamless integration with external systems.

## Supported Integrations
- **O365 Email**: Managed by the email agent and tools (`email_reader.py`, `email_sender.py`).
- **Databases**: Managed by the database agent and related tools.
- **Authentication**: Handled by `auth.py` and environment configuration.

## Adding New Integrations
- Implement new tools in `/tools/` for custom systems.
- Register new agents in `agent_registry.py` for specialized workflows.

## Example: Adding a New Tool
1. Create a new Python module in `/tools/` (e.g., `custom_tool.py`).
2. Implement the required interface for agent compatibility.
3. Register and use the tool in your agent or orchestrator logic.

---

See the code in `langchain-mcp/tools/` and `langchain-mcp/agent/` for integration examples. 