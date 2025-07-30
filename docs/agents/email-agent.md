---
id: email-agent
slug: /agents/email-agent
sidebar_label: Email Agent
title: Email Agent
---

# Email Agent

The email agent manages all email-related operations in AgamX, including reading, sending, and processing email templates (O365, etc.).

## Purpose & Responsibilities
- Reads and processes incoming emails
- Sends emails using templates and dynamic content
- Integrates with orchestrator and other agents for workflow automation

## API & Usage
- **File:** `email_io_agent.py`
- **Key Methods:**
  - `read_emails()`: Reads and processes new emails
  - `send_email(to, subject, body)`: Sends an email
  - `process_template(template, data)`: Fills and processes email templates

## Extension Points
- Add support for new email providers by extending the agent
- Customize template processing logic as needed

---

See the code in `langchain-mcp/agent/email_io_agent.py` for implementation details and examples. 