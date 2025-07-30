---
id: test-strategy
slug: /evaluation/test-strategy
sidebar_label: Test Strategy
title: Test Strategy
---

# Test Strategy

AgamX uses a comprehensive test strategy to ensure the reliability and quality of automations.

## Components
- **Unit Tests:** Validate individual agent and tool logic (see `langchain-mcp/pytest/`)
- **Integration Tests:** Test workflows involving multiple agents and tools
- **End-to-End (E2E) Tests:** Simulate real-world scenarios and user flows
- **LangSmith Integration:** Advanced evaluation and tracing

## Workflow
1. Write tests using pytest in `langchain-mcp/pytest/`
2. Run tests locally and in CI pipelines
3. Analyze results and coverage
4. Use LangSmith for advanced evaluation and debugging

---

See the test suites and evaluation logic in the codebase for examples. 