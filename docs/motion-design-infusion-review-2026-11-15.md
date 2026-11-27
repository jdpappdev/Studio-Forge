# Motion design skill review

Date: 2026-11-15

## Scope and review type

This is a static instruction review of the existing Studio Forge motion-design skill and searchable guidance catalog. The baseline is the local skill and catalog before this revision; those files already included the earlier MotionSites and motionmaxxing additions. This review adds a practical bridge from code-animation and interactive-scene references to production web UI motion.

No agent behavior comparison, rendered animation, browser test, or performance measurement was run. The cases below are review scenarios, not executed tests.

Criteria: keep motion tied to user purpose; preserve existing reduced-motion, interruption, focus, and touch guidance; choose tools proportionate to the interface; keep essential information available without a canvas scene; avoid importing demos, prompts, assets, or unnecessary dependencies.

## Representative case review

| Case | Baseline guidance | Candidate guidance | Static assessment | Evidence and limit |
|---|---|---|---|---|
| Small button or panel feedback | Purpose, frequency, existing tokens, simple tools, and reduced motion were covered. | Keeps these checks and explicitly says not to choose a more complex renderer solely because a reference uses it. | The simplest suitable technique remains preferred; no extra setup is implied for a small effect. | Compared the local baseline and candidate skill. No UI was implemented. |
| Motion-led landing page with a reduced-motion preference | Reduced motion, touch, interruption, and rendered review were covered, but no explicit guidance on scroll hijacking or scene-based pause/fallback was present. | Adds progressive enhancement for scroll effects, keeps essential content visible, and adds pause/fallback guidance for long-running scenes. | Adds a useful accessibility and control path without requiring motion for comprehension. | Static scenario review only; no browser or assistive technology run. |
| Interactive 3D/WebGL hero | The least-complex-tool rule discouraged unnecessary 3D but did not give a technique-selection boundary or scene lifecycle guidance. | Adds CSS/SVG/Canvas/WebGL fit criteria, keeps essential content in ordinary UI, and calls for resize, pause, hidden-scene, and cleanup handling where practical. | Makes the decision clearer while keeping Three.js optional and stack-dependent. | Compared skill and catalog wording. No 3D scene or frame-rate test was run. |

## Recommendation

**Keep provisionally after static review.** The additions address a specific gap: translating code-built animation inspiration into appropriate web UI techniques without making every interface a 3D scene. Existing purpose, reduced-motion, interruption, and rendered-review criteria remain. Validate the guidance on a real Studio Forge frontend task before claiming improved agent behavior.

## Source boundary

- [awesome-opus-animation](https://github.com/krillinai/awesome-opus-animation), especially its [code animation](https://github.com/krillinai/awesome-opus-animation/blob/main/categories/code-animation.md), [motion design](https://github.com/krillinai/awesome-opus-animation/blob/main/categories/motion-design.md), and [3D scenes](https://github.com/krillinai/awesome-opus-animation/blob/main/categories/3d-scenes.md) collections: used as inspiration for technique categories and interactive-scene examples. No showcased work, prompts, code, or media were copied.
- This is original decision guidance, not an import of an animation framework or production recipe. The reference collection does not establish universal performance or accessibility outcomes.
