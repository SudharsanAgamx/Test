---
id: db-tools
slug: /tools/db-tools
sidebar_label: Database Tools
title: Database Tools
---

# Database Tools

AgamX provides tools for database operations, supporting integration with MongoDB, MCP, and other databases.

## Available Tools
- (Add your database tool modules here, e.g., `db_tools.py` if present)

## Setup & Usage
- Import the tools in your agent or workflow scripts
- Configure connection and authentication settings as needed

## Example
```python
# Example usage if db_tools.py exists
from tools.db_tools import DBTool

db_tool = DBTool(config={...})
db_tool.connect()
db_tool.store_data(data)
```

## Extension
- Add support for new databases by extending the tool classes
- Customize connection and query logic as needed

---

See the code in `langchain-mcp/tools/` for implementation details. 