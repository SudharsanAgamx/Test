---
id: email-tools
slug: /tools/email-tools
sidebar_label: Email Tools
title: Email Tools
---

# Email Tools

AgamX provides reusable tools for email operations, including reading, sending, and processing emails (O365, Google, etc.).

## Available Tools
- `email_reader.py`: Reads and processes incoming emails
- `email_sender.py`: Sends emails using templates and dynamic content

## Setup & Usage
- Import the tools in your agent or workflow scripts
- Configure authentication and provider settings as needed

## Example
```python
from tools.email_reader import EmailReader
from tools.email_sender import EmailSender

reader = EmailReader(config={...})
sender = EmailSender(config={...})

emails = reader.read_emails()
sender.send_email(to, subject, body)
```

## Extension
- Add support for new providers by extending the tool classes
- Customize parsing and sending logic as needed

---

See the code in `langchain-mcp/tools/email_reader.py` and `langchain-mcp/tools/email_sender.py` for implementation details. 