# Architecture

Studio Forge is a local-first collection of agent instructions and curated reference data. The MCP process is a thin, read-only interface over that data.

## Components

- **Skills (`.agents/skills/`)** — focused Markdown instructions loaded by compatible coding agents. Each skill names its source inspirations where relevant.
- **Guidance catalog (`knowledge/catalog.mjs`)** — static records containing an ID, title, domain, tags, guidance text, and source identifiers.
- **MCP server (`mcp-server/src/index.mjs`)** — registers two stdio tools and imports the catalog directly. `search_design_guidance` scores text matches in titles, tags, and guidance; `get_design_workflow` returns a task-specific checklist.
- **VS Code configuration (`.vscode/mcp.json`)** — starts the local server with Bun, using the workspace folder as its base.

## Data flow

```text
Compatible agent
      │ MCP over stdio
      ▼
MCP server ───── imports ─────► Guidance catalog
      │                              ▲
      └── workflow prompts            │ source identifiers
                               Agent Skills
```

The MCP server reads only the checked-in catalog and workflow definitions. It does not read files from the consuming project or persist state.

## Adding guidance

1. Check whether an existing skill or catalog entry already covers the idea.
2. Inspect and name relevant upstream projects; check their license terms before reusing material.
3. Write concise, original guidance in the appropriate skill or catalog entry.
4. Add a catalog entry only when it provides a useful searchable topic; keep its `sources` identifiers descriptive and consistent with upstream names.
5. Preserve required notices when redistributing any third-party material. Do not assume that a public repository permits copying its contents.

## Extending the MCP interface

Keep tools narrow, predictable, and read-only. Validate input schemas, return useful text for both matches and empty results, and update this document and the README when a tool or domain changes. Any future network, filesystem, shell, or write access should be treated as a significant trust-boundary change and documented before it is introduced.