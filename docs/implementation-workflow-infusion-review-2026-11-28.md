# Implementation workflow infusion review — 2026-11-28

## Scope and baseline

This static review adapts selected workflow ideas from [100x Engineer Skill](https://github.com/DeadInternetStudios/100x-engineer-skill) into Studio Forge's existing full-stack project prompt and shared Development instructions. The baseline already covered project inspection, acceptance criteria, architecture, security, focused checks, release boundaries, and frontend guidance. It did not explicitly prioritize proving the highest-risk assumption early, define contracts for critical stateful logic, call for a separate review pass, or require the delivery summary to be grounded in recorded evidence.

## Adapted practices

- Risk-first planning: test the assumption most likely to invalidate the solution before expanding the implementation.
- Contracts for consequential logic: describe allowed state, transitions, preconditions, outcomes, and invariants; add boundary and failure cases.
- Verify interfaces between slices as well as individual components.
- Make a fresh review pass against completion criteria; distinguish a self-review from an independent reviewer.
- Report only observed checks and explicitly bound what they establish. Keep a short project-local progress note when work spans sessions.
- Scale effort to risk. Formal modeling, extra reviewers, model calls, and dependencies remain optional and should be justified.

## Static representative-case review

| Case | Baseline | Candidate | Static judgment | Evidence and limit |
| --- | --- | --- | --- | --- |
| Small UI fix | Master prompt says small fixes need not load the full workflow | Focused changes remain lightweight; the Development instructions repeat this boundary | Preserved | Prompt opening and Development “Small changes” section |
| Substantial full-stack feature | Defines outcome, architecture, slices, security, verification, and release boundary | Adds early risk proof, per-slice criteria, seam checks, and an evidence-based fresh review | Clearer sequence and closure evidence | Static comparison of the prompt before and after; no application was built |
| High-risk inventory, money, or access rules | Calls for tests on important business rules and permissions | Requires explicit state/contracts and boundary/failure cases, with model checking only when justified | More actionable without requiring heavyweight formal methods for every project | Prompt risk-level and verification sections |
| User wants an independent review but no second reviewer is available | No explicit reviewer distinction | Allows a useful self-review but forbids describing it as independent | Reduces misleading review claims | Prompt review section; no second model was called |
| Long-running task or usage interruption | Delivery summarizes result and limitations | Adds an optional concise project-local status note for milestone, decisions, checks, blockers | Better continuity without imposing a new tool | Prompt delivery section; no long task was run |

## Source and reuse boundary

The 100x repository documents a staged build, explicit properties for small logic blocks, a verification ledger tied to code hashes, a separate judge pass, and evidence-based reporting. Its own verification guide clarifies that it checks a stated model and its bounds, not an arbitrary whole application, and that concurrency, time, and network behavior may be outside the model. Those concepts informed the changes; no code, copied skill text, CLI, checker, ledger format, assets, or dependencies were imported.

The full upstream system has a CLI and model-review pipeline with substantial setup and usage costs. Studio Forge adopts the workflow principles only; no installation or extra reviewer/model call is required. Repository claims about output volume, savings, or production results are not treated as independently verified outcomes for Blueprint projects.

## Judgment and next evidence

**Keep as a focused workflow improvement after static review.** The candidate retains the baseline's small-change path, product boundaries, security guidance, Studio Forge UI support, and explicit release authorization while adding risk-first validation and stronger completion evidence. No controlled agent-behavior comparison, application implementation, usage measurement, or credit-savings measurement was run. Validate the workflow on a substantial Development feature before claiming better results or lower cost.
