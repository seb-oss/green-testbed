# GitHub Copilot SDK - Implementation Context

This document provides essential context for implementing GitHub Copilot SDK in the Green Testbed project. **Reference this file when implementing any Copilot SDK-based agentic workflows.**

---

## Overview

The GitHub Copilot SDK enables embedding agentic workflows programmatically in Node.js/TypeScript applications. It provides:

- **Agent Runtime**: Production-tested orchestration engine (same as Copilot CLI)
- **Tool Support**: Built-in and custom tools for extending agent capabilities
- **Streaming**: Real-time response streaming
- **MCP Integration**: Connect to Model Context Protocol servers for additional tools
- **Session Management**: Handle multiple concurrent conversations

**Status**: Technical Preview (functional but not yet production-ready)

---

## Installation

### Prerequisites

1. **GitHub Copilot CLI** must be installed and authenticated:

   ```bash
   # Install via npm
   npm install -g @githubnext/github-copilot-cli

   # Or follow official guide:
   # https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli

   # Verify installation
   copilot --version
   ```

2. **GitHub Copilot subscription** is required (free tier available with limited usage)

### Install SDK

```bash
npm install @github/copilot-sdk
```

### TypeScript Support

If using TypeScript, install `tsx` for easy execution:

```bash
npm install -D tsx
```

---

## Core Imports

```typescript
// Main client and session management
import { CopilotClient } from "@github/copilot-sdk";

// Tool definition utilities
import { defineTool } from "@github/copilot-sdk";

// Event types for handling streaming responses
import { SessionEvent } from "@github/copilot-sdk";

// Type definitions (if needed)
import type { SessionConfig, MessageOptions, Tool } from "@github/copilot-sdk";
```

---

## Basic Usage Pattern

### 1. Create Client

```typescript
import { CopilotClient } from "@github/copilot-sdk";

// Create client (manages CLI lifecycle automatically)
const client = new CopilotClient();

// Or connect to external CLI server
const client = new CopilotClient({
  cliUrl: "localhost:4321", // Optional: connect to existing CLI server
});
```

### 2. Create Session

```typescript
const session = await client.createSession({
  model: "sonnet-4.5", // Model selection
  streaming: true, // Enable streaming responses
  tools: [customTool], // Array of custom tools
  mcpServers: {
    // Optional: MCP server connections
    github: {
      type: "http",
      url: "https://api.githubcopilot.com/mcp/",
    },
  },
  customAgents: [
    {
      // Optional: specialized agents
      name: "test-generator",
      displayName: "Test Generator",
      description: "Generates WebDriverIO tests",
      prompt: "You are an expert test engineer...",
    },
  ],
  systemMessage: {
    // Optional: customize behavior
    content: "You are a test engineer...",
  },
});
```

### 3. Send Messages

```typescript
// Simple request/response
const response = await session.sendAndWait({
  prompt: "Generate tests for gds-button",
});
console.log(response?.data.content);

// With streaming
session.on((event: SessionEvent) => {
  if (event.type === "assistant.message_delta") {
    process.stdout.write(event.data.deltaContent);
  }
  if (event.type === "session.idle") {
    console.log(); // New line when done
  }
});

await session.sendAndWait({
  prompt: "Generate tests for gds-button",
});
```

### 4. Cleanup

```typescript
await client.stop();
process.exit(0);
```

---

## Custom Tools

Tools allow Copilot to call your code. Essential for test generation workflows.

### Define a Tool

```typescript
import { defineTool } from "@github/copilot-sdk";

const readComponentMatrix = defineTool("read_component_matrix", {
  description: "Read coverage requirements for a component from the matrix",
  parameters: {
    type: "object",
    properties: {
      componentName: {
        type: "string",
        description: "Component name (e.g., 'gds-button')",
      },
      category: {
        type: "string",
        description: "Test category (interaction, accessibility, visual)",
        enum: ["interaction", "accessibility", "visual"],
      },
    },
    required: ["componentName", "category"],
  },
  handler: async (args: { componentName: string; category: string }) => {
    // Your implementation
    const matrix = await readMatrix();
    const component = matrix.components[args.componentName];
    return component[args.category];
  },
});
```

### Use Tool in Session

```typescript
const session = await client.createSession({
  model: "gpt-4.1",
  tools: [readComponentMatrix, generateTestFile],
  mcpServers: {
    green: {
      type: "stdio",
      command: "node",
      args: ["./node_modules/@sebgroup/green-core/bin/mcp-server"],
      tools: ["*"],
    },
  },
});
```

### Tool Best Practices

1. **Clear descriptions**: Agent decides when to call based on description
2. **Typed parameters**: Use JSON Schema for parameter validation
3. **Async handlers**: Return promises for async operations
4. **Error handling**: Tools should handle errors gracefully
5. **Return structured data**: JSON objects are easier for agents to process

---

## Event Types

When streaming is enabled, handle these event types:

```typescript
session.on((event: SessionEvent) => {
  switch (event.type) {
    case "assistant.message_delta":
      // Incremental response content
      process.stdout.write(event.data.deltaContent);
      break;

    case "assistant.message_done":
      // Complete message available
      console.log("Message complete:", event.data.content);
      break;

    case "tool.call_start":
      // Agent is calling a tool
      console.log(`Calling tool: ${event.data.toolName}`);
      break;

    case "tool.call_done":
      // Tool call completed
      console.log(`Tool result:`, event.data.result);
      break;

    case "session.idle":
      // Agent finished processing
      console.log("\nReady for next prompt");
      break;

    case "session.error":
      // Error occurred
      console.error("Error:", event.data.error);
      break;
  }
});
```

---

## Architecture

```
Your Application (testbed scripts)
       ↓
  SDK Client (@github/copilot-sdk)
       ↓ JSON-RPC
 Copilot CLI (server mode)
       ↓
 GitHub Copilot API
```

The SDK automatically:

- Spawns and manages CLI process
- Handles JSON-RPC communication
- Manages session lifecycle
- Routes tool calls to handlers

---

## Use Cases for Green Testbed

### 1. Test Generation Script

```typescript
import { CopilotClient, defineTool } from "@github/copilot-sdk";
import { readMatrix, fetchGreenDocs } from "./utils";

// Define tools for agent
const tools = [
  defineTool("get_coverage_requirements", {
    description: "Get test coverage requirements from matrix",
    parameters: {
      type: "object",
      properties: {
        component: { type: "string" },
        tier: { type: "number" },
      },
      required: ["component", "tier"],
    },
    handler: async ({ component, tier }) => {
      return await readMatrix(component, tier);
    },
  }),

  defineTool("get_component_docs", {
    description: "Get component documentation from Green MCP",
    parameters: {
      type: "object",
      properties: {
        component: { type: "string" },
      },
      required: ["component"],
    },
    handler: async ({ component }) => {
      return await fetchGreenDocs(component);
    },
  }),

  defineTool("save_test_file", {
    description: "Save generated test code to file",
    parameters: {
      type: "object",
      properties: {
        path: { type: "string" },
        content: { type: "string" },
      },
      required: ["path", "content"],
    },
    handler: async ({ path, content }) => {
      await fs.writeFile(path, content);
      return { success: true, path };
    },
  }),
];

// Create session with specialized agent
const client = new CopilotClient();
const session = await client.createSession({
  model: "gpt-4.1",
  tools,
  customAgents: [
    {
      name: "test-generator",
      displayName: "Test Generator",
      description: "Generates WebDriverIO tests for Green components",
      prompt: `You are an expert test engineer for the Green Design System.
    
Your task is to generate comprehensive WebDriverIO tests.

Process:
1. Use get_coverage_requirements to understand what tests are needed
2. Use get_component_docs to understand the component API
3. Generate complete test code following project patterns
4. Use save_test_file to save the generated tests

Always generate complete, runnable code with no placeholders.`,
    },
  ],
});

// Generate tests
const response = await session.sendAndWait({
  prompt: `Generate Tier 2 tests for gds-button component.
  
Include tests for:
- All interactions (click, hover, focus)
- All events (click, focus, blur)
- All states (disabled, loading)
- Keyboard navigation (Enter, Space)

Follow WebDriverIO best practices and project conventions.`,
});

await client.stop();
```

### 2. Component Sync Script

```typescript
// Detect new components and update matrix
const session = await client.createSession({
  model: "gpt-4.1",
  streaming: true,
  tools: [
    detectNewComponents,
    analyzeComponentAPI,
    updateMatrix,
    createMatrixEntry,
  ],
  customAgents: [
    {
      name: "component-syncer",
      description: "Analyzes Green Core changes and updates test matrix",
      prompt: `You are responsible for keeping the test matrix in sync with Green Core library.

When given a changelog:
1. Identify new, modified, or removed components
2. For new components, analyze API and propose matrix entry
3. For modified components, update existing matrix entries
4. Create structured output suitable for automated PR creation`,
    },
  ],
});

session.on(handleStreamingEvents);

await session.sendAndWait({
  prompt: `Analyze green-core@2.27.0 changelog and update test matrix.
  
Changelog:
${changelog}

Output a JSON structure with:
- newComponents: array of component names
- modifiedComponents: array with changes
- proposedMatrixEntries: full matrix entries for new components`,
});
```

### 3. Testbed Page Generation

```typescript
const session = await client.createSession({
  model: "gpt-4.1",
  tools: [getComponentDocs, readExistingTestbedPages, saveTestbedPage],
  customAgents: [
    {
      name: "testbed-generator",
      description: "Creates testbed showcase pages for components",
      prompt: `Generate testbed pages that showcase all variants and props of a component.

Use Lit web components and follow project structure.
Include all prop combinations, states, and variants for comprehensive visual testing.`,
    },
  ],
});
```

---

## MCP Server Integration

Connect to Model Context Protocol servers for additional capabilities:

```typescript
const session = await client.createSession({
  model: "sonnet-4.5",
  mcpServers: {
    // Green Design System MCP (if available)
    green: {
      type: "stdio", // or "http"
      command: "mcp-server-green",
      args: [],
    },

    // GitHub MCP for repo operations
    github: {
      type: "http",
      url: "https://api.githubcopilot.com/mcp/",
    },

    // File system operations
    filesystem: {
      type: "stdio",
      command: "mcp-server-filesystem",
      args: ["--workspace", process.cwd()],
    },
  },
});

// Agent can now use tools from MCP servers
// e.g., green.getComponentDocs, github.createPR, filesystem.writeFile
```

---

## Error Handling

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();

try {
  const session = await client.createSession({ model: "sonnet-4.5" });

  const response = await session.sendAndWait({
    prompt: "Generate tests",
  });

  if (!response?.data.content) {
    throw new Error("No response from agent");
  }

  console.log(response.data.content);
} catch (error) {
  if (error.message.includes("CLI not found")) {
    console.error(
      "Copilot CLI not installed. Run: npm install -g @githubnext/github-copilot-cli",
    );
  } else if (error.message.includes("authentication")) {
    console.error("Not authenticated. Run: copilot auth");
  } else {
    console.error("Error:", error);
  }
} finally {
  await client.stop();
}
```

---

## Configuration Options

### CopilotClient Options

```typescript
const client = new CopilotClient({
  // Connect to external CLI server (optional)
  cliUrl: "localhost:4321",

  // CLI spawn options (when not using cliUrl)
  cliPath: "/custom/path/to/copilot", // Custom CLI path
  cliArgs: ["--verbose"], // Additional CLI arguments
});
```

### SessionConfig Options

```typescript
interface SessionConfig {
  model: string; // Required
  streaming?: boolean; // Enable streaming responses
  tools?: Tool[]; // Custom tools
  mcpServers?: Record<string, MCPServerConfig>; // MCP server connections
  customAgents?: CustomAgent[]; // Specialized agents
  systemMessage?: {
    // System prompt customization
    content: string;
  };
  temperature?: number; // Sampling temperature (0-1)
  maxTokens?: number; // Max response tokens
}
```

### MessageOptions

```typescript
interface MessageOptions {
  prompt: string; // Required: user message
  context?: string; // Additional context
  files?: Array<{
    // File attachments
    path: string;
    content: string;
  }>;
}
```

---

## Running CLI in Server Mode

For development/debugging, run CLI separately:

```bash
# Start CLI server on specific port
copilot --server --port 4321

# Or let it choose random port
copilot --server
```

Then connect from SDK:

```typescript
const client = new CopilotClient({
  cliUrl: "localhost:4321",
});
```

**Benefits:**

- Keep CLI running between SDK restarts
- Inspect CLI logs for debugging
- Share CLI server across multiple SDK clients
- Test with custom CLI configurations

---

## Best Practices

### 1. Resource Management

Always stop the client when done:

```typescript
const client = new CopilotClient();
try {
  // ... use client
} finally {
  await client.stop();
}
```

### 2. Agent Design

Create focused agents with clear responsibilities:

```typescript
// Good: Focused agent
{
  name: "test-generator",
  prompt: "Generate WebDriverIO tests. Follow project patterns. Use provided tools to get requirements and docs."
}

// Avoid: Overly generic agent
{
  name: "helper",
  prompt: "Help with anything"
}
```

### 3. Tool Design

Keep tools focused and composable:

```typescript
// Good: Single responsibility
defineTool("read_matrix", { ... });
defineTool("fetch_docs", { ... });

// Avoid: Too much in one tool
defineTool("do_everything", { ... });
```

### 4. Streaming UI

Provide visual feedback during streaming:

```typescript
session.on((event: SessionEvent) => {
  if (event.type === "tool.call_start") {
    console.log(`🔧 Using tool: ${event.data.toolName}...`);
  }
  if (event.type === "assistant.message_delta") {
    process.stdout.write(event.data.deltaContent);
  }
});
```

### 5. Validation

Validate agent output before using:

```typescript
const response = await session.sendAndWait({ prompt: "Generate code" });
const code = response?.data.content;

// Validate generated code
if (!code.includes("import")) {
  console.error("Invalid code: missing imports");
  // Retry or handle error
}
```

---

## Model Selection

Available models (check at runtime with SDK):

- `gpt-4.1` - Latest GPT-4 Turbo (recommended)
- `gpt-4o` - GPT-4 Optimized
- `claude-3.5-sonnet` - Anthropic Claude (if using BYOK)
- Others via Copilot CLI

Query available models:

```typescript
const models = await client.getAvailableModels();
console.log(models);
```

---

## Documentation Links

### Official Documentation

- **Main README**: https://github.com/github/copilot-sdk/blob/main/README.md
- **Getting Started Guide**: https://github.com/github/copilot-sdk/blob/main/docs/getting-started.md
- **Node.js Cookbook**: https://github.com/github/copilot-sdk/blob/main/cookbook/nodejs/README.md
- **MCP Documentation**: https://github.com/github/copilot-sdk/blob/main/docs/mcp.md
- **Copilot CLI Installation**: https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli
- **Copilot Requests & Billing**: https://docs.github.com/en/copilot/concepts/billing/copilot-requests

### Related Resources

- **GitHub Copilot Features**: https://github.com/features/copilot
- **Model Context Protocol**: https://github.com/modelcontextprotocol/servers
- **GitHub MCP Server**: https://github.com/github/github-mcp-server
- **Awesome Copilot - SDK Instructions**: https://github.com/github/awesome-copilot/blob/main/collections/copilot-sdk.md

### Examples

- **Sample Projects**: https://github.com/github/copilot-sdk/tree/main/samples
- **Video Tutorial**: https://youtu.be/6GcupNzH678 (YouTube Content Generator)

---

## Troubleshooting

### CLI Not Found

```
Error: Copilot CLI not found in PATH
```

**Solution**: Install CLI:

```bash
npm install -g @githubnext/github-copilot-cli
# Verify: copilot --version
```

### Authentication Errors

```
Error: Not authenticated with GitHub Copilot
```

**Solution**: Authenticate CLI:

```bash
copilot auth
```

### Connection Timeouts

```
Error: Failed to connect to CLI server
```

**Solutions**:

1. Check CLI is running: `ps aux | grep copilot`
2. Try specifying port explicitly: `cliUrl: "localhost:4321"`
3. Check firewall settings

### Tool Call Failures

If agent isn't using your tools:

1. **Check description**: Make it clear when to use the tool
2. **Verify parameters**: Ensure schema is correct
3. **Test handler**: Log when handler is called
4. **Simplify**: Break complex tools into smaller ones

---

**Last Updated**: January 26, 2026  
**SDK Version**: Technical Preview  
**Target Language**: Node.js / TypeScript
