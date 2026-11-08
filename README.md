# Studio Forge

**A focused design toolkit for coding agents.** Studio Forge brings together practical guidance for distinctive web design, product UI, motion, React implementation, and interface review, with a small read-only MCP server for searching that guidance.

## What's included

- Four reusable [Agent Skills](.agents/skills/) for frontend design, motion design, React UI engineering, and UI/UX review.
- A curated guidance catalog at `knowledge/catalog.mjs`.
- An optional [Model Context Protocol (MCP) server](mcp-server/) that exposes catalog search and workflow prompts.

Studio Forge contains original summaries and adaptations. It does not bundle the referenced skills, assets, component libraries, external data, automatic hooks, or live-editing scripts. The skills identify their source inspirations; check upstream project terms before reusing third-party material.

## Quick start

### Requirements

- [Bun](https://bun.sh/) to run the MCP server.
- A coding agent that discovers skills from `.agents/skills/` to use the skills.

### Use the skills

Open this repository in a compatible coding agent. The skills live in `.agents/skills/`; consult the agent's documentation if it requires a different discovery location.

### Run the MCP server in VS Code

1. Open the Studio Forge repository folder in VS Code.
2. Install the server dependencies once:

   ```powershell
   cd mcp-server
   bun install
   ```

3. Start the server from VS Code's MCP Servers view. The checked-in `.vscode/mcp.json` uses `bun` on `PATH` and starts the server from `mcp-server/`.

The server uses stdio and is read-only. It does not inspect or modify your projects, access the network, run shell commands, bootstrap applications, or install dependencies for you.

## MCP tools

| Tool | Purpose |
|---|---|
| `search_design_guidance` | Search curated advice by query and optional topic domain. |
| `get_design_workflow` | Return a short workflow for design, implementation, review, or motion tasks. |

The search domains are `design`, `ui-ux`, `design-system`, `motion`, `accessibility`, `responsive-design`, `react`, `review`, and `implementation`.

## Repository map

```text
.agents/skills/       Agent Skills
knowledge/            Structured design guidance catalog
mcp-server/           Read-only stdio MCP server
.vscode/mcp.json      VS Code MCP server configuration
ARCHITECTURE.md       Data flow and component boundaries
CONTRIBUTING.md       Contribution workflow
SECURITY.md           Responsible security reporting guidance
CODE_OF_CONDUCT.md    Community expectations
CHANGELOG.md          Release history
```

## Contributing

Contributions that improve clarity, usefulness, accessibility, or source attribution are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a change. When drawing on external inspiration, name the relevant projects in the skill or catalog and preserve applicable notices for any material that is actually redistributed.

## Security

See [SECURITY.md](SECURITY.md) for responsible reporting guidance.

## License

The Studio Forge project files are provided under the [MIT License](LICENSE), except where a file or third-party notice states otherwise. The project license does not change the terms of external projects referenced in the skills or catalog.