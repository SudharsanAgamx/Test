---
id: email-automation
slug: /developer-guide/examples/email-automation
sidebar_label: Email Automation Example
title: Email Automation Example
---

# Email Automation Example

This example demonstrates how to automate email workflows using AgamX agents and tools.

## Scenario
- Read incoming emails
- Process and respond to emails automatically

## Example Code
```python
from agent.email_io_agent import EmailIOAgent
from agent.orchestrator_agent import OrchestratorAgent

email_agent = EmailIOAgent(config={...})
orchestrator = OrchestratorAgent(agents=[email_agent])

result = orchestrator.run_workflow(task="Process and respond to emails")
print(result)
```

---

See the code in `langchain-mcp/agent/` for more details. 