---
id: email-evaluation
slug: /evaluation/email-evaluation
sidebar_label: Email Agent Evaluation
title: Email Agent Evaluation
---

# Email Agent Evaluation

This page describes how the email agent is evaluated for correctness, reliability, and integration with external systems.

## Evaluation Criteria
- Email reading and parsing accuracy
- Template processing correctness
- Delivery and error handling
- Integration with O365 and other providers

## Test Cases
- Reading and processing various email formats
- Sending emails with dynamic templates
- Handling delivery failures and retries

## Metrics
- Success/failure rate
- Processing latency
- Delivery and bounce rates

---

See `langchain-mcp/evls/email_evals.py` and related test cases for implementation and test examples. 