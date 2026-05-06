// =============================================================================
// External MCP Presets
// =============================================================================
// This module keeps community/user-selectable MCP servers in one place.
// The bridge can import these definitions and merge them into BACKEND_DEFS.
// All presets are opt-in through MCP_GROUP_* env flags.

function splitArgs(value) {
  if (!value || !value.trim()) return [];
  return value
    .split(' ')
    .map((part) => part.trim())
    .filter(Boolean);
}

function env(name, fallback = '') {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value.trim() : fallback;
}

export const EXTERNAL_TOOL_GROUPS = {
  forge: {
    enabled: process.env.MCP_GROUP_FORGE === 'true',
    description: 'Forge MCP — GPU kernel optimization, CUDA/Triton workflows, H100/A100 tuning',
    source: 'forge',
  },

  blueprint: {
    enabled: process.env.MCP_GROUP_BLUEPRINT === 'true',
    description: 'Blueprint MCP — real-browser automation across Chrome, Firefox, and Safari profiles',
    source: 'blueprint',
  },

  custom: {
    enabled: process.env.MCP_GROUP_CUSTOM === 'true' && Boolean(env('MCP_CUSTOM_COMMAND')),
    description: 'Custom MCP — user-provided stdio MCP server command',
    source: env('MCP_CUSTOM_NAME', 'custom'),
  },
};

export function getExternalBackendDefs() {
  const customName = env('MCP_CUSTOM_NAME', 'custom');

  return [
    {
      name: 'forge',
      command: env('MCP_FORGE_COMMAND', 'npx'),
      args: splitArgs(env('MCP_FORGE_ARGS', '-y @rightnow/forge-mcp-server')),
      groups: ['forge'],
    },
    {
      name: 'blueprint',
      command: env('MCP_BLUEPRINT_COMMAND', 'npx'),
      args: splitArgs(env('MCP_BLUEPRINT_ARGS', '-y @railsblueprint/blueprint-mcp')),
      groups: ['blueprint'],
    },
    {
      name: customName,
      command: env('MCP_CUSTOM_COMMAND'),
      args: splitArgs(env('MCP_CUSTOM_ARGS')),
      groups: ['custom'],
    },
  ].filter((backend) => backend.command);
}

export function getExternalGuidance() {
  return {
    forge: `# Forge MCP Group\n\nGPU kernel optimization and CUDA/Triton workflows. Enable with MCP_GROUP_FORGE=true.\n\nUse this when the task involves GPU kernels, PyTorch performance, H100/A100 optimization, Triton/CUDA generation, or low-level ML performance work.`,
    blueprint: `# Blueprint MCP Group\n\nReal browser automation using Chrome, Firefox, and Safari profiles. Enable with MCP_GROUP_BLUEPRINT=true.\n\nUse this when the task needs browser actions, real profile state, screenshots, navigation, form filling, or browser-based testing.`,
    custom: `# Custom MCP Group\n\nUser-provided stdio MCP server. Enable with MCP_GROUP_CUSTOM=true and set MCP_CUSTOM_COMMAND plus optional MCP_CUSTOM_ARGS.\n\nUse this to connect any compatible MCP server without editing Ruflo source code.`,
  };
}

export function mergeExternalMcp({ toolGroups, backendDefs, groupGuides = {} }) {
  return {
    toolGroups: {
      ...toolGroups,
      ...EXTERNAL_TOOL_GROUPS,
    },
    backendDefs: [
      ...backendDefs,
      ...getExternalBackendDefs(),
    ],
    groupGuides: {
      ...groupGuides,
      ...getExternalGuidance(),
    },
  };
}
