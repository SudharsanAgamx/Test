# Architecture Overview

This section provides a high-level overview of the AgamX Enterprise AI Automation Platform architecture, including its core components, data flow, security, scalability, and integration points.

## System Components
- **Agents**: Modular, autonomous units for specific tasks (see `/agent/`)
- **Orchestrator**: Coordinates agent workflows (see `orchestrator_agent.py`)
- **Tools**: Reusable utilities for agents (see `/tools/`)
- **Evaluation & Testing**: Built-in evaluation and test suites (see `/evls/`, `/pytest/`)
- **Integrations**: External systems (O365, databases, etc.)

## What You'll Find in This Section
- Multi-agent orchestration design
- Data flow between agents, tools, and integrations
- Security model and best practices
- Scalability strategies
- Integration points for external systems

Explore the subpages for detailed architectural insights. 