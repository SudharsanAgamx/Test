---
id: db-automation
slug: /developer-guide/examples/db-automation
sidebar_label: DB Automation Example
title: DB Automation Example
---

# DB Automation Example

This example demonstrates how to automate database operations using AgamX agents and tools.

## Scenario
- Read data from an email
- Store the data in a database

## Example Code
```python
from agent.email_io_agent import EmailIOAgent
from agent.databaseAgent import DatabaseAgent
from agent.orchestrator_agent import OrchestratorAgent

email_agent = EmailIOAgent(config={...})
db_agent = DatabaseAgent(config={...})
orchestrator = OrchestratorAgent(agents=[email_agent, db_agent])

result = orchestrator.run_workflow(task="Read emails and store in DB")
print(result)
```

---

See the code in `langchain-mcp/agent/` for more details. 