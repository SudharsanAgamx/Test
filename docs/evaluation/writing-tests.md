---
id: writing-tests
slug: /evaluation/writing-tests
sidebar_label: Writing Tests
title: Writing Tests
---

# Writing Tests

This page explains how to write new tests for agents, tools, and workflows in AgamX.

## Getting Started
- Use pytest for all test cases (see `langchain-mcp/pytest/`)
- Organize tests by agent/tool or workflow

## Example: Database Agent Test
```python
# langchain-mcp/pytest/db_test.py
import pytest
from agent.databaseAgent import DatabaseAgent

def test_store_data():
    db_agent = DatabaseAgent(config={...})
    result = db_agent.store_data({"key": "value"})
    assert result is True
```

## Best Practices
- Use fixtures for setup/teardown
- Cover edge cases and error handling
- Document test cases and expected outcomes

---

See the test files in `langchain-mcp/pytest/` for more examples. 