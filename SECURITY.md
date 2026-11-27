# Security Policy

Studio Forge is a local-first set of Markdown guidance and a small stdio MCP server. The current server searches its bundled catalog and returns fixed workflows; it does not access the network, inspect consuming-project files, execute shell commands, or write project data.

## Reporting a vulnerability

Please do not publish sensitive vulnerability details in a public issue. Use GitHub's **Report a vulnerability** option on the repository's Security tab. If that option is unavailable, contact the owner through the contact options on the [jdpappdev GitHub profile](https://github.com/jdpappdev) to arrange a private route before sending sensitive details.

Include the affected version or commit, the relevant component, steps to reproduce, and the impact. Avoid sharing real credentials, private user data, or destructive proof-of-concept payloads.

## Scope

Reports involving the MCP server, its dependency configuration, or unsafe behavior in the bundled guidance are in scope. Third-party projects named in the skills or catalog are independently maintained; report issues in those projects to their maintainers.

There is no formal support or response-time SLA yet. Reports will be assessed as maintainers are available.
