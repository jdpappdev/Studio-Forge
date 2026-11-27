# Selected skill infusion review

Date: 2026-11-12

## Review type and scope

This is a static instruction review of the four Studio Forge skills and their MCP workflow prompts. The baseline is commit `742923f3ea8a1da14daec0d2bfd3948e661d4b5e`; the reviewed candidate was published in commit `201628b45f0b76965e34deb81a58cadb0595d2af`. No live agent comparison, browser review, or MCP client run was performed, so this report does not claim behavioral improvement.

Criteria: retain distinctive product-led design; preserve working content and behavior during redesign; keep accessibility, keyboard/touch operation, responsive layout, and reduced motion explicit; keep performance advice evidence-based; maintain Studio Forge's read-only MCP boundary and source attribution.

## Representative cases

| Case | Baseline | Candidate | Static change | Evidence and limit |
|---|---|---|---|---|
| New page with an existing product design system | Frontend design already called for a specific direction, responsive structure, accessible behavior, and rendered review. | Adds a minimum usability floor, key-view-first iteration, checks for affected task paths and key states, and a reminder that automated scores are review signals. | Makes the first visual checkpoint and minimum product-quality requirements more concrete while leaving stylistic decisions contextual. | Compared `frontend-design/SKILL.md` and design workflow prompt. No generated page was reviewed. |
| Redesign of a working product flow | Asked to preserve product facts and existing behavior, without listing what to compare. | Names copy, routes, links, fields, handlers, state, and relevant test hooks for an explicit before/after comparison. | Makes preservation easier to inspect and report. | Compared frontend and UI/UX skill instructions and the redesign guidance added to the catalog. No redesign was run. |
| UI motion with reduced-motion users and repeated input | Already named motion purpose, simple tools, reduced-motion support, and interruption behavior. | Adds a sequence specification (trigger, order, timing, easing, final state), explicit touch/reduced-motion handling, rendered review at relevant sizes, and source-media boundaries. | Adds implementation detail while retaining the existing motion purpose and accessibility commitments; source-specific measurements remain non-universal. | Compared `motion-design/SKILL.md` and MCP motion workflow prompt. No animation was rendered. |

## Result

**Static review: keep provisionally.** The changes add concrete preservation, state, and review checks without replacing the original design direction or promoting taste metrics to universal pass/fail rules. The candidate still needs use on representative Development projects before we can say it performs better in practice. Update this report if a real run reveals extra effort, missed behavior, or regressions.

## Source boundaries

- [Hallmark](https://github.com/Nutlope/hallmark): used as a high-level reference for staged planning, preservation checks, and separating minimum requirements from craft guidance. Its project declares MIT; no themes, prompts, scripts, code, or media were copied.
- [MotionSites Web Builder](https://github.com/Motionsites-AI/claude-skill): used as a high-level reference for precise motion/build briefs and rendered review. Its instructions and code are MIT-licensed, while its examples and media are separately copyrighted; none were copied.
- [motionmaxxing](https://github.com/Tejashmakwana/motionmaxxing): retained as a reference whose measurements apply to its own sample, not as interface-wide timing or motion targets.

The candidate preserves the repository's existing source citations and read-only MCP design. No MCP tools, network permissions, project access, or write capability were added.
