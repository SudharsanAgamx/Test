# Quickstart

Get up and running with AgamX in 5 minutes!

## Prerequisites
- Node.js & npm (for documentation site)
- Python 3.8+ (for agent and tool code)
- Git

## Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/AgamxTS/langchain-mcp.git
   cd langchain-mcp
   ```
2. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt  # or use pyproject.toml with poetry/uv
   ```
3. **Install documentation dependencies:**
   ```bash
   cd ../docs
   npm install
   ```
4. **Start the documentation site:**
   ```bash
   npx docusaurus start
   ```
5. **Explore the codebase:**
   - Agents: `langchain-mcp/agent`
   - Tools: `langchain-mcp/tools`
   - Evaluations: `langchain-mcp/evls`
   - Tests: `langchain-mcp/pytest`

You're ready to start building and testing automations with AgamX! 