---
name: motion-design
description: Design, implement, or review motion in web interfaces. Use when adding transitions, animation, gesture feedback, page choreography, or when reviewing whether existing animation belongs.
---

# Motion design

Motion must serve the task. This skill adapts animation guidance from Emil Kowalski's skills, Taste Skill, and the UI UX Pro Max catalog.

## Decide before implementing

1. Decide whether motion improves understanding. Frequent keyboard actions and rapidly repeated controls should be instant or nearly instant. If motion only adds delay, omit it.
2. State its purpose: feedback, state change, spatial continuity, explanation, or rare delight. Content the user is reading or acting on should not move merely for decoration.
3. Match the motion to interaction frequency, platform conventions, distance, and emphasis. A hover response should be quieter than a rare success moment.
4. Check existing motion tokens and libraries. Use the least complex suitable tool: CSS for simple transitions/keyframes, Web Animations API for controllable browser animation, and an existing motion library for complex interruptible or gesture-driven work. Do not add a dependency for a small effect.

## Implement responsibly

- Prefer compositor-friendly transforms and opacity; avoid animating layout properties unless the interaction needs it and the cost is understood.
- Use easing that fits the direction: entrances decelerate into place, exits accelerate away, and state changes feel prompt. Avoid bouncy springs unless the product and moment support them.
- Make interruption and repeated input behave well. The final semantic state must be correct even when an animation is cancelled or reduced.
- Gate hover-only motion behind hover-capable pointers where necessary. Keep focus and touch feedback available too.
- Include `prefers-reduced-motion` behavior in the same change. Remove nonessential movement or replace it with an immediate state change without hiding information.
- Do not add blanket scroll reveals, parallax on functional content, blinking, autoplaying carousels, or delayed transitions to frequent actions.

## Review

Check timing, easing, properties, interruption, keyboard and touch behavior, reduced motion, and performance. Suggest removing motion when that produces a clearer or faster interface.

