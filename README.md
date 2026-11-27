# Studio Forge

[![Catalog checks](https://github.com/jdpappdev/Studio-Forge/actions/workflows/catalog-check.yml/badge.svg)](https://github.com/jdpappdev/Studio-Forge/actions/workflows/catalog-check.yml)

**A focused design toolkit for coding agents.** Studio Forge brings together practical guidance for distinctive web design, product UI, motion, React implementation, and interface review, with a small read-only MCP server for searching that guidance.

## What's included

- Four reusable [Agent Skills](.agents/skills/) for frontend design, motion design, React UI engineering, and UI/UX review.
- A curated guidance catalog at `knowledge/catalog.mjs`.
- An optional [Model Context Protocol (MCP) server](mcp-server/) that exposes catalog search and workflow prompts.
- An optional [full-stack project master prompt](templates/full-stack-project-master-prompt.md) for substantial application builds, designed to work alongside the focused design skills.

Studio Forge ships four focused skills and an original, searchable guidance catalog. They summarize and adapt selected upstream ideas; the repository does not redistribute upstream skill packs, sample media, component libraries, datasets, automatic hooks, or live-editing scripts. Each skill identifies its inspirations. Check upstream terms before reusing third-party material.

## Quick start

### Requirements

- [Bun](https://bun.sh/) to run the MCP server.
- A coding agent that discovers skills from `.agents/skills/` to use the skills.

### Use the skills

Install a single skill into the current project with the [Skills CLI](https://github.com/vercel-labs/skills):

```sh
npx skills add jdpappdev/Studio-Forge --skill frontend-design -a codex
```

Choose `frontend-design`, `motion-design`, `react-ui-engineering`, or `ui-ux-review` after `--skill`. Repeat the command for other skills. Add `-g` if you want the skill available across projects. To use all four directly, open the repository in a compatible coding agent; the skills live in `.agents/skills/`.

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

### Example

Search `redesign forms` in the `ui-ux` domain to get a checklist for preserving existing copy, routes, links, fields, handlers, and state. Ask `get_design_workflow` for the `motion` workflow to get a concise plan covering purpose, timing, interruption, reduced motion, and review.

## Use the full-stack project prompt

For a substantial application build, copy the [master prompt](templates/full-stack-project-master-prompt.md), replace its project brief with the real requirements, and use it as an implementation frame. Keep the four focused skills and MCP as targeted design support; small fixes do not need the full prompt.

## Repository map

```text
.agents/skills/       Agent Skills
templates/            Reusable project prompts
knowledge/            Structured design guidance catalog
mcp-server/           Read-only stdio MCP server
docs/                 Review notes for substantive guidance revisions
tests/                Catalog integrity checks
.github/workflows/    Continuous integration
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
