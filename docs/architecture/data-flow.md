# Data Flow

Understanding data flow is key to designing robust automations in AgamX.

## Data Movement
- **Input**: Data enters the system via agents (e.g., email, database, API calls).
- **Processing**: Agents process data, often using tools for specialized tasks (see `/tools/`).
- **Orchestration**: The orchestrator agent coordinates data movement between agents.
- **Output**: Results are stored, sent via email, or integrated with external systems.

## Example Workflow
1. Email agent reads new emails (using `email_reader.py`).
2. Data is passed to the database agent for storage (using `databaseAgent.py`).
3. Orchestrator manages the sequence and error handling.

## Integration Points
- Data can flow to/from external systems (O365, databases) via integration tools.
- Evaluation and test results are logged and can be used for reporting.

---

See the orchestrator and agent code in `langchain-mcp/agent/` for real data flow logic. 