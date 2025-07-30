# Installation & Environment Setup

This guide will help you set up your environment for developing and running automations with AgamX.

## 1. Clone the Repository
```bash
git clone https://github.com/AgamxTS/langchain-mcp.git
cd langchain-mcp
```

## 2. Python Environment Setup
- Ensure you have Python 3.8+ installed.
- (Recommended) Create a virtual environment:
  ```bash
  python -m venv .venv
  source .venv/bin/activate  # On Windows: .venv\Scripts\activate
  ```
- Install dependencies:
  ```bash
  pip install -r requirements.txt  # or use pyproject.toml with poetry/uv
  ```

## 3. Node.js Environment (for documentation site)
- Navigate to the documentation folder:
  ```bash
  cd ../Documentation/docs
  npm install
  ```

## 4. Optional: Set up LangSmith, MCP, and other integrations
- Follow the integration guides in the `/docs/tools/` section for connecting external systems (O365, databases, etc).

## 5. Verify Installation
- Run a sample test or start the documentation site:
  ```bash
  npx docusaurus start
  ```
- For Python code, try running a test from `langchain-mcp/pytest/db_test.py`:
  ```bash
  pytest langchain-mcp/pytest/db_test.py
  ```

You're now ready to develop, test, and document automations with AgamX! 