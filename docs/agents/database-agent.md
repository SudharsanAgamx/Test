---
id: database-agent
slug: /agents/database-agent
sidebar_label: Database Agent
title: Database Agent
---

# Database Agent

The Database Agent is a specialized component within the AgamX multi-agent system that manages all database-related operations for risk assessment data. It provides intelligent CRUD operations, schema validation, and risk assessment capabilities through MongoDB integration.

## Purpose & Responsibilities

### Core Functions
- **Data Management**: Handles Create, Read, Update, Delete (CRUD) operations for risk assessment data
- **Schema Validation**: Ensures data integrity by validating against predefined schemas
- **Risk Assessment**: Performs automated risk evaluation and validation
- **Query Processing**: Converts natural language queries into structured database operations
- **Data Mapping**: Intelligently maps user input to database schema fields

### Key Responsibilities
- **Insert Operations**: Validates required fields and confirms data before insertion
- **Query Operations**: Executes complex queries with proper filtering and sorting
- **Update Operations**: Safely modifies existing records with atomic operations
- **Delete Operations**: Removes records with proper validation
- **Error Handling**: Provides meaningful error messages and validation feedback
- **Integration**: Works seamlessly with orchestrator and other agents

## Architecture & Implementation

### Technology Stack
- **Framework**: LangChain with MCP (Model Context Protocol) adapters
- **Database**: MongoDB via MCP server
- **LLM**: OpenAI GPT-4o-mini for natural language processing
- **Transport**: Docker-based MCP server communication

### Core Components
```python
class DatabaseAgent:
    def __init__(self):
        self.llm_mini = ChatOpenAI(model="gpt-4o-mini", temperature=0)
        self.client = self._initialize_mcp_client()
        self.prompts = self._load_prompts()
```

### Database Schema
The agent manages three main collections:

1. **trackers**: Project risk tracker metadata
   - `file_path` (required): SharePoint or file system path
   - `project_name` (required, unique): Project identifier
   - `primary_owner_email` (required): Project owner contact
   - `tracker_type` (fixed): "risk assessment"
   - `project_status` (fixed): "started"

2. **trackeritems**: Individual risk items
   - `project_id` (required): Reference to parent tracker
   - `item_type` (fixed): "Risk Management"
   - `item_contents` (required): Detailed risk information
   - `item_status` (fixed): "Pending"

3. **trackeritemcommunications**: Communication history
   - `tracker_id` (required): Reference to tracker item
   - `comm_type` (required): Type of communication
   - `recipient` (required): Email address
   - `comm_status` (fixed): "pending"

## API & Usage

### Basic Invocation
```python
from agent.databaseAgent import DatabaseAgent

# Initialize the agent
agent = DatabaseAgent()

# Execute a query
result = await agent({"query": "Find all active risk assessment trackers"})
response = result.get("database_response")
```

### Supported Operations

#### Insert Operations
```python
# Insert a new risk tracker
query = "Insert a new risk assessment tracker for project 'AI Implementation' with primary owner 'ai.team@company.com', file path: agamxts.com"
result = await agent({"query": query})
```

#### Query Operations
```python
# Find trackers by status
query = "Find the risk assessment trackers filter with the project status 'started'"
result = await agent({"query": query})

# Complex queries with sorting
query = "Find the most recent 5 risk assessments ordered by creation date"
result = await agent({"query": query})
```

#### Update Operations
```python
# Update user email
query = "Change the primary owner email address for trackers from email 'ai.team@company.com' to 'john.doe.new@company.com'"
result = await agent({"query": query})
```

#### Delete Operations
```python
# Delete specific records
query = "Delete all tracker items for project 'Test Project'"
result = await agent({"query": query})
```

## Best Practices

### 1. Data Validation
- **Required Fields**: Always validate required fields before insertion
- **Data Types**: Ensure proper data type conversion (e.g., ObjectId for IDs)
- **Unique Constraints**: Check for uniqueness violations
- **Schema Compliance**: Validate against predefined schemas

### 2. Error Handling
```python
# Proper error handling pattern
try:
    result = await agent({"query": user_query})
    if "error" in result.get("status", ""):
        # Handle specific error cases
        handle_error(result.get("message"))
except Exception as e:
    # Log and handle unexpected errors
    logger.error(f"Database agent error: {str(e)}")
```

### 3. Confirmation Workflow
- **Insert Operations**: Always confirm mapped values before insertion
- **Update Operations**: Validate filter and update objects
- **Delete Operations**: Confirm deletion scope and impact

### 4. Performance Optimization
- **Query Optimization**: Use appropriate indexes and filters
- **Batch Operations**: Group related operations when possible
- **Connection Management**: Properly manage MCP client connections

### 5. Security Considerations
- **Input Validation**: Sanitize all user inputs
- **Access Control**: Implement proper authentication and authorization
- **Data Encryption**: Ensure sensitive data is encrypted
- **Audit Logging**: Log all database operations for compliance

## Testing Strategy

### Test Structure
The database agent uses a comprehensive testing framework with multiple layers:

#### 1. Unit Tests (`db_test.py`)
```python
TEST_SCENARIOS = [
    {
        "id": 1,
        "agent": "Database",
        "test_case": "Insert Risk Tracker",
        "question": "Insert a new risk assessment tracker for project 'AI Implementation2' with primary owner 'ai.team@company.com', file path: agamxts.com.",
        "expected_tool": "insert-many",
        "expected_database": "n8ntest",
        "expected_collection": "trackers",
        "required_keys": ["documents"],
        "expected_output": "green"
    }
]
```

#### 2. Evaluation Tests (`db_evals.py`)
```python
async def evaluate_database_response(inputs: dict, outputs: dict, reference_outputs: dict) -> dict:
    """LLM-based evaluation of database responses"""
    # Evaluates intent matching and response quality
```

### Test Categories

#### Functional Tests
- **CRUD Operations**: Test all database operations
- **Schema Validation**: Verify field requirements and data types
- **Error Handling**: Test various error scenarios
- **Edge Cases**: Handle boundary conditions

#### Integration Tests
- **Agent Communication**: Test interaction with orchestrator
- **MCP Integration**: Verify MongoDB MCP server communication
- **End-to-End Workflows**: Complete user journey testing

#### Performance Tests
- **Response Time**: Measure query execution time
- **Concurrency**: Test multiple simultaneous operations
- **Load Testing**: High-volume operation testing

### Running Tests
```bash
# Run all database tests
python -m pytest support/db_test.py -v

# Run specific test scenario
python -m pytest support/db_test.py::test_database_agent_scenarios[0] -v

# Run evaluation tests
python support/db_evals.py
```

## Prompt Management

### Prompt Structure
The agent uses YAML-based prompts for maintainability:

```yaml
# system_prompts_v2.yaml
generic_system_prompt: |
  You are a MongoDB query assistant for risk assessment data...
  
risk_assessment_template: |
  SPECIAL INSTRUCTIONS FOR FIELD INFERENCE:
  - You MUST infer field values from user's natural language input...
  
database_schema: |
  Database Schema for n8ntest database:
  Purpose: This database is used to store the risk assessment data...
```

### Updating Prompts

#### 1. System Prompts
```python
def _load_prompts(self) -> Dict[str, Any]:
    prompts_path = os.path.join(os.path.dirname(__file__), 'prompts', 'system_prompts_v2.yaml')
    with open(prompts_path, 'r', encoding='utf-8') as f:
        data = yaml.safe_load(f)
    return data
```

#### 2. Schema Updates
- Modify `database_schema` section in YAML file
- Update field requirements and data types
- Add new collections or modify existing ones

#### 3. Business Logic Updates
- Update `risk_assessment_template` for new validation rules
- Modify confirmation workflows
- Add new operation types

#### 4. Sample Data Updates
- Update `sample_data` section with new examples
- Ensure examples match current schema
- Add edge case examples

### Prompt Best Practices

#### 1. Clarity and Specificity
- Use clear, unambiguous instructions
- Provide specific examples for each operation type
- Include error message templates

#### 2. Validation Rules
- Define explicit validation requirements
- Specify required vs optional fields
- Include data type constraints

#### 3. Error Handling
- Provide meaningful error messages
- Include recovery suggestions
- Log validation failures

#### 4. Performance Optimization
- Keep prompts concise but complete
- Use efficient validation patterns
- Minimize redundant checks

## Configuration & Environment

### Environment Variables
```bash
# Required
MONGODB_MCP_CONNECTION_STRING=mongodb://username:password@host:port/database

# Optional
OPENAI_API_KEY=your_openai_api_key
LANGCHAIN_TRACING_V2=true
LANGCHAIN_ENDPOINT=https://api.smith.langchain.com
LANGCHAIN_API_KEY=your_langsmith_api_key
```

### Docker Configuration
```yaml
# MCP Server Configuration
MongoDB:
  command: docker
  args:
    - run
    - --rm
    - -i
    - -e
    - MDB_MCP_CONNECTION_STRING=${MONGODB_MCP_CONNECTION_STRING}
    - mongodb/mongodb-mcp-server:latest
  transport: stdio
```

## Monitoring & Logging

### Metrics to Track
- **Response Time**: Average query execution time
- **Success Rate**: Percentage of successful operations
- **Error Rate**: Frequency of validation failures
- **User Satisfaction**: Response quality metrics

### Logging Strategy
```python
import logging

logger = logging.getLogger(__name__)

# Log all database operations
logger.info(f"Database operation: {operation_type} - {query}")
logger.error(f"Database error: {error_message}")
```

## Troubleshooting

### Common Issues

#### 1. Connection Errors
```python
# Check MCP connection
if not connection_string:
    raise ValueError("MONGODB_MCP_CONNECTION_STRING not set")
```

#### 2. Schema Validation Failures
- Verify required fields are provided
- Check data type compatibility
- Ensure unique constraints are met

#### 3. Performance Issues
- Review query patterns
- Check database indexes
- Monitor connection pool usage

### Debug Mode
```python
# Enable debug logging
logging.basicConfig(level=logging.DEBUG)

# Enable LangSmith tracing
os.environ["LANGCHAIN_TRACING_V2"] = "true"
```

## Extension Points

### Adding New Collections
1. Update schema definition in prompts
2. Add sample data examples
3. Update validation rules
4. Create corresponding test cases

### Custom Validation Logic
```python
def custom_validation(data: dict) -> bool:
    # Implement custom validation rules
    return validation_result
```

### New Operation Types
1. Define operation in system prompts
2. Add corresponding test scenarios
3. Update evaluation criteria
4. Document usage patterns

---

## Related Documentation
- [Agent Lifecycle](./agent-lifecycle.md)
- [Orchestrator Agent](./orchestrator.md)
- [Developer Guide](../developer-guide/index.md)
- [Testing Strategy](../evaluation/test-strategy.md)

See the implementation in `langchain-mcp/agent/databaseAgent.py` and test files in `support/` for complete examples. 