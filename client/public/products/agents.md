# Autonomous AI Agents

> Deploy sophisticated AI agents with tool use, multi-knowledge base access, and MCP server integration. Build agentic workflows that go far beyond simple chat.

## More Than Just Chat

Agents can use tools, access multiple knowledge bases, and integrate with external systems through MCP servers - all while keeping your data confidential.

- **Tool Use & Function Calling**: Agents can call custom functions, interact with APIs, execute code, and perform complex multi-step operations.
- **Multi-Knowledge Base Access**: Connect agents to multiple knowledge bases simultaneously, allowing them to reason across different data sources.
- **MCP Server Integration**: Integrate with Model Context Protocol servers to extend agent capabilities with external tools and data sources.

## Use Cases

### Research & Analysis Agents
Agents that can search through multiple data sources, synthesize information, and produce comprehensive reports on complex topics.

### Workflow Automation
Automate business processes with agents that can interact with internal systems, make decisions, and execute multi-step workflows.

### Data Processing Pipelines
Build agents that can extract, transform, and analyze data from various sources while maintaining confidentiality throughout the pipeline.

### Decision Support Systems
Deploy agents that can analyze complex scenarios, access relevant historical data, and provide recommendations based on company policies.

## Flexible Agent Architecture

Define custom tools, connect to multiple knowledge bases, and integrate with MCP servers to build agents tailored to your specific use cases.

1. Define custom functions and tools for your agent
2. Connect to multiple knowledge bases simultaneously
3. Integrate MCP servers for extended capabilities
4. Set up guardrails and approval workflows
5. Monitor agent actions and decision-making

### Example Configuration

```json
{
  "agent": {
    "name": "research-assistant",
    "model": "claude-3-5-sonnet-20241022",
    "knowledge_bases": [
      "kb_internal_docs",
      "kb_customer_data",
      "kb_market_research"
    ],
    "tools": [
      {
        "name": "search_database",
        "description": "Search internal SQL database",
        "parameters": { "query": "string" }
      },
      {
        "name": "generate_report",
        "description": "Generate PDF report",
        "parameters": { "data": "object" }
      }
    ],
    "mcp_servers": [
      "filesystem",
      "database"
    ],
    "guardrails": {
      "require_approval": ["generate_report"],
      "max_iterations": 10
    }
  }
}
```

## Confidential by Design

All agent operations happen inside the secure enclave. Tool executions, knowledge base queries, and MCP server interactions are encrypted and isolated from the host system.

- Tool executions run in isolated environments
- Knowledge base access is encrypted end-to-end
- MCP server communications are secured
- Agent state and memory remain confidential
- Full audit logs of all agent actions

## Links

- [Get Started](/get-started.md)
- [Documentation](https://docs.enclava.ai)
