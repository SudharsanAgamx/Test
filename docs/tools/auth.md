---
id: auth
slug: /tools/auth
sidebar_label: Authentication
title: Authentication
---

# Authentication

AgamX provides authentication tools for connecting to external systems (O365, databases, etc.).

## Available Tools
- `auth.py`: Handles authentication logic and environment setup

## Setup & Usage
- Store credentials in environment variables or secure vaults
- Import and use the authentication helpers in your scripts

## Example
```python
from tools.auth import authenticate

token = authenticate(provider="O365", config={...})
```

## Best Practices
- Never hardcode credentials in code
- Regularly rotate and audit credentials

---

See the code in `langchain-mcp/tools/auth.py` for implementation details. 