---
name: frontend-design
description: Plan or build a distinctive marketing page, landing page, or front-end visual experience. Use when starting a design, redesigning a site, or when UI feels generic or templated.
---

# Frontend design

This first-party skill also draws on [Hallmark](https://github.com/Nutlope/hallmark) at the level of staged planning and review gates. Hallmark's project is MIT-licensed; no Hallmark themes, prompts, scripts, code, or media are included here.

Create a design that belongs to this product and its audience. This skill synthesizes ideas from Taste Skill, Anthropic's `frontend-design`, UI UX Pro Max, Impeccable, Interface Design, SuperDesign, and `frontend-design-ultimate`.

## Plan the direction

1. Identify the audience, the task or offer, the content available, the primary action, and the intended deliverable (a component, page, or broader flow). Read the project’s existing components and design conventions. For a redesign, first inventory existing content and behavior: routes, links, fields, handlers, state, and relevant test hooks.
2. Explore the product’s domain before selecting a visual template. Name its vocabulary, materials, contexts, and one signature visual or interaction that could plausibly belong to this product.
3. Write a compact plan: concept, palette, typography roles, content grid, hero composition, section rhythm, imagery, and motion. Sketch an annotated wireframe when choosing page or flow structure, including mobile reading order and important states. Define tokens from the chosen direction rather than copying a preset wholesale. For a substantial page, build and inspect the key view first, then carry its design logic through the remaining sections.
4. Name the obvious defaults for this type of page. Keep them only when they fit the brief; reject them when they are simply the first pattern that came to mind.
5. Preserve product facts and existing behavior. Never invent metrics, testimonials, customer names, product capabilities, or real-world details. Mark illustrative placeholders clearly.

## Build with hierarchy

- Choose one focal point per view. Make importance legible through size, weight, contrast, placement, and whitespace rather than styling everything as equally prominent.
- Choose information density deliberately. Product tools often need compact, scannable layouts; marketing pages can use more open rhythm. Let the task decide.
- Use a coherent set of tokens and a restrained number of component patterns. Reuse the project’s system and extend it instead of adding a parallel palette, spacing scale, or radius scheme.
- Let real product UI, content, photography, or craft carry the design. Treat stand-in media honestly and identify it as a stand-in in the handoff.
- Use decoration only when it adds meaning, hierarchy, atmosphere, or interaction feedback. Keep one memorable move and let supporting elements stay disciplined.
- Write clear, specific copy. A control should say what it does, and an error or empty state should tell the user what happened or what to do next.
- Make responsive behavior, keyboard access, visible focus, sufficient contrast, and reduced-motion behavior part of the first implementation pass.
- Treat accessibility, truthful content, working task-critical behavior, and supported-width usability as the minimum floor. Treat style conventions as guidance that can yield to a clear product reason; a design lint or score is a review signal, not a universal quality verdict.

## Iterate

Inspect the rendered page when a browser is available. Review the key task path at supported desktop and narrow widths, including important states; check affected links, forms, and controls. Critique the result against the brief. Fix the highest-impact issue first: unclear purpose, weak hierarchy, broken layout, inaccessible control, or decorative noise. Take another look after meaningful visual changes. Report what was inspected and any viewport or browser checks that were unavailable. A lint or score is a signal for review, not proof of quality.

