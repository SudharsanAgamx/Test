---
id: custom-integrations
slug: /developer-guide/examples/custom-integrations
sidebar_label: Custom Integration Examples
title: Custom Integration Examples
---

# Custom Integration Examples

This page provides examples of building custom integrations with AgamX.

## Example: Custom Tool Integration
```python
from tools.custom_tool import CustomTool
from agent.orchestrator_agent import OrchestratorAgent

custom_tool = CustomTool(config={...})
orchestrator = OrchestratorAgent(agents=[custom_tool])

result = orchestrator.run_workflow(task="Run custom integration")
print(result)
```

## Example: External API Integration
- Build a new tool for the API
- Register and use it in your workflow

---

See the code in `langchain-mcp/tools/` and `langchain-mcp/agent/` for more details. 