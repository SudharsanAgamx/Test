---
id: db-evaluation
slug: /evaluation/db-evaluation
sidebar_label: Database Agent Evaluation
title: Database Agent Evaluation
---

# Database Agent Evaluation

This page describes how the database agent is evaluated for correctness, performance, and reliability.

## Evaluation Criteria
- Data integrity and correctness
- Risk assessment accuracy
- Performance under load
- Error handling and recovery

## Test Cases
- CRUD operations with valid and invalid data
- Risk assessment on various record types
- Stress tests for high-volume operations

## Metrics
- Success/failure rate
- Latency and throughput
- Error rates and recovery time

---

See `langchain-mcp/evls/db_evals.py` and `langchain-mcp/pytest/db_test.py` for implementation and test examples. 