# Creating Your First Automation

This guide will walk you through building your first automation using AgamX, leveraging the agent and tool modules in your codebase.

## 1. Define Your Automation Goal
Decide what you want to automate (e.g., reading emails and storing data in a database).

## 2. Choose and Configure Agents
- Use the orchestrator agent to coordinate tasks.
- Example: To automate email reading and database storage, use `email_io_agent.py` and `databaseAgent.py` from `langchain-mcp/agent/`.

## 3. Implement the Workflow
Create a Python script (e.g., `my_automation.py`) in the `langchain-mcp/agent/` directory:

```python
from agent.orchestrator_agent import OrchestratorAgent
from agent.email_io_agent import EmailIOAgent
from agent.databaseAgent import DatabaseAgent

# Initialize agents
email_agent = EmailIOAgent(config={...})
db_agent = DatabaseAgent(config={...})

# Orchestrate workflow
orchestrator = OrchestratorAgent(agents=[email_agent, db_agent])
result = orchestrator.run_workflow(task="Read emails and store in DB")
print(result)
```

## 4. Run and Test Your Automation
- Execute your script:
  ```bash
  python my_automation.py
  ```
- Use the test suite in `langchain-mcp/pytest/` to validate your workflow:
  ```bash
  pytest langchain-mcp/pytest/db_test.py
  ```

## 5. Extend and Integrate
- Add more agents or tools as needed (see `langchain-mcp/tools/` for reusable components).
- Integrate with external systems (O365, databases) as described in the `/docs/tools/` section.

---

Congratulations! You've created your first automation with AgamX. Explore further to build more complex workflows. 