---
id: setup-environment
slug: /developer-guide/setup-environment
sidebar_label: Setup Environment
title: Setup Environment
---

# Setup Environment

This page explains how to set up your development environment for AgamX.

## Prerequisites
- Python 3.8+
- Node.js & npm
- Git

## Steps
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd langchain-mcp
   ```
2. **Set up Python environment:**
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   pip install -r requirements.txt
   ```
3. **Set up documentation site:**
   ```bash
   cd ../Documentation/docs
   npm install
   npx docusaurus start
   ```

## Tips
- Use virtual environments to isolate dependencies
- Store credentials securely (see [Authentication](/tools/auth))

---

See the codebase README files for more details. 