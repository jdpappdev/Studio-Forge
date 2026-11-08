# Contributing

Thanks for helping make Studio Forge more useful to people building web interfaces. Focus changes on clear, actionable guidance, source accuracy, accessibility, and maintainability.

## Before you edit

- Read the existing skill or catalog entry and check for overlap.
- Inspect the referenced source itself when practical; do not rely on a listing or summary alone.
- Name relevant upstream projects and check license status before reusing their material.
- Prefer original summaries. Do not copy substantial text, scripts, assets, or datasets without confirming the applicable terms and preserving required notices.

## Make a focused change

- Keep each skill scoped to a recognizable task and usable without a specific framework unless the skill says otherwise.
- Keep catalog records concise, searchable, source-attributed, and consistent with the MCP schema.
- Avoid absolute design rules where context and user needs should decide.
- For MCP changes, keep the interface read-only and validate inputs with schemas.
- Update README or architecture documentation when user-facing tools, workflows, setup, or data flow changes.

## Local checks

Install dependencies and start the MCP server from `mcp-server/`:

```sh
bun install
bun run start
```

The server communicates over stdio, so starting it directly is useful as a smoke check but it will wait for an MCP client connection. For tool-level checks, use a compatible MCP client and exercise both tools, including an empty search result and each workflow task. This repository currently has no automated test or lint scripts.

Review your diff before submitting. Do not include `node_modules`, secrets, credentials, unrelated generated files, or copied source material without its required notices.

## Pull requests

Describe the user problem, the change, and any source/license implications. Include the checks you ran and clearly label checks that need a compatible MCP client or rendered UI to verify. Keep pull requests focused and link relevant upstream references.

## Reporting conduct or security concerns

For community expectations, see `CODE_OF_CONDUCT.md`. For sensitive security reports, see `SECURITY.md`.