# Full-Stack Project Prompt Review — 2026-11-27

## Change under review

- **Baseline:** The supplied restaurant-system prompt, which contains substantial domain-specific requirements and a generic build mandate. No earlier reusable full-stack prompt was found in Studio Forge.
- **Candidate:** `templates/full-stack-project-master-prompt.md`, with shared routing guidance in `Development/AGENTS.md`.
- **Intended improvement:** Preserve the useful project-implementation discipline while making it reusable across application domains and avoiding over-application to small edits.
- **Review type:** Static instruction review. No representative application was implemented for this review, and no behavior-level improvement is claimed.

## Review cases

| Case | Baseline result | Candidate result | Change | Evidence |
| --- | --- | --- | --- | --- |
| Build a substantial app from a complete brief | Restaurant-specific requirements; no domain-neutral workflow available | Template directs inspection, acceptance criteria, architecture, sliced implementation, verification, and delivery | Broader reuse without retaining restaurant assumptions | Static inspection of the candidate template |
| Fix a small issue in an existing app | Original prompt asks for a full system build | Development instructions say not to apply the full prompt to a small fix | Reduces unnecessary process for focused work | Static inspection of `Development/AGENTS.md` and the template introduction |
| Encounter an unresolved business rule | Original prompt says to proceed without questions, which can encourage guessing | Candidate permits reasonable low-risk inference but asks when correctness, security, or product direction materially depends on the answer | Makes uncertainty visible and preserves progress | Static inspection of the “Define the outcome” and quality sections |
| Reach deployment or other external action | Original prompt asks for a deployment-ready outcome without a specific authorization boundary | Candidate distinguishes preparation from publishing or deployment and requires explicit authorization for external changes | Clarifies the release boundary | Static inspection of the template's “Respect release boundaries” instruction |

## Judgment

**Keep as an optional reusable reference.** The candidate captures the intended general workflow and routes frontend work to Studio Forge guidance. Static review cannot establish that it improves implementation outcomes; evaluate it on a real Development project and record the actual behavior before making that claim.
