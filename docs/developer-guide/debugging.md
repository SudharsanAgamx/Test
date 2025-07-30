---
id: debugging
slug: /developer-guide/debugging
sidebar_label: Debugging
title: Debugging
---

# Debugging

This page provides tips and techniques for debugging agents, tools, and workflows in AgamX.

## Techniques
- Use logging throughout agent and tool code
- Leverage Python debuggers (e.g., `pdb`)
- Add assertions and error handling
- Use test cases to reproduce issues

## Example
```python
import logging
logging.basicConfig(level=logging.DEBUG)

# Add debug statements in your code
logging.debug("Processing email: %s", email_id)
```

## Tips
- Check logs for errors and stack traces
- Use breakpoints to step through code
- Write tests to catch regressions

---

See the codebase and test files for debugging patterns. 