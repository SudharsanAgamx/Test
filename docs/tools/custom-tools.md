---
id: custom-tools
slug: /tools/custom-tools
sidebar_label: Custom Tools
title: Custom Tools
---

# Custom Tools

You can build and extend custom tools in AgamX to support new integrations and workflows.

## How to Build a Custom Tool
1. Create a new Python module in `langchain-mcp/tools/` (e.g., `custom_tool.py`)
2. Implement the required interface for agent compatibility
3. Register and use the tool in your agent or orchestrator logic

## Example
```python
# langchain-mcp/tools/custom_tool.py
class CustomTool:
    def __init__(self, config):
        self.config = config
    def run(self, input):
        # Custom logic here
        pass
```

## Best Practices
- Keep tools modular and reusable
- Document tool APIs and configuration options

---

See the code in `langchain-mcp/tools/` for more examples. 