# Selectable MCP Providers

RuFlo can expose multiple MCP backends through the MCP bridge. The default groups remain unchanged, while optional providers can be enabled by environment variables so users can choose what they want to connect.

## Built-in groups

These groups already exist in the bridge:

- `MCP_GROUP_INTELLIGENCE` — ruvector routing, vector memory, learning
- `MCP_GROUP_AGENTS` — Ruflo agents, swarms, tasks, workflows
- `MCP_GROUP_MEMORY` — Ruflo memory, AgentDB, embeddings
- `MCP_GROUP_DEVTOOLS` — hooks, analysis, performance, GitHub tools
- `MCP_GROUP_SECURITY` — AIDefence, PII detection, claims
- `MCP_GROUP_BROWSER` — headless browser automation
- `MCP_GROUP_NEURAL` — neural and DAA tools
- `MCP_GROUP_AGENTIC_FLOW` — agentic-flow tools
- `MCP_GROUP_CLAUDE_CODE` — Claude Code MCP
- `MCP_GROUP_GEMINI` — Gemini MCP
- `MCP_GROUP_CODEX` — OpenAI Codex MCP

## Optional external groups

These are opt-in and intended to give users choice without editing source code.

### Forge MCP

Forge is for GPU kernel optimization and CUDA/Triton workflows.

```env
MCP_GROUP_FORGE=true
MCP_FORGE_COMMAND=npx
MCP_FORGE_ARGS=-y @rightnow/forge-mcp-server
```

### Blueprint MCP

Blueprint is for real-browser automation across Chrome, Firefox, and Safari profiles.

```env
MCP_GROUP_BLUEPRINT=true
MCP_BLUEPRINT_COMMAND=npx
MCP_BLUEPRINT_ARGS=-y @railsblueprint/blueprint-mcp
```

### Custom MCP

Use this to connect any stdio-compatible MCP server.

```env
MCP_GROUP_CUSTOM=true
MCP_CUSTOM_NAME=my-tools
MCP_CUSTOM_COMMAND=npx
MCP_CUSTOM_ARGS=-y my-mcp-server --stdio
```

## Integration note

The preset module lives at:

```text
ruflo/src/mcp-bridge/external-mcp-presets.js
```

The bridge can import it and merge the exported values into the existing `TOOL_GROUPS`, `BACKEND_DEFS`, and guidance map:

```js
import { mergeExternalMcp } from './external-mcp-presets.js';

const mergedMcp = mergeExternalMcp({
  toolGroups: TOOL_GROUPS,
  backendDefs: BACKEND_DEFS,
  groupGuides,
});
```

The current default is conservative: external groups are documented and configured, but disabled unless users opt in through `.env`.
