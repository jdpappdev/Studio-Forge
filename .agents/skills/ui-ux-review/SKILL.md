---
name: ui-ux-review
description: Audit an existing interface for visual hierarchy, usability, accessibility, responsive behavior, and interaction quality. Use when asked to critique or review UI/UX.
---

# UI/UX review

Review the implementation and rendered experience where available. This skill synthesizes review ideas from Impeccable, Interface Design, and Vercel's agent-skills. It is an advisory review: do not make edits unless the user also asks for fixes.

## Review in this order

1. **Purpose:** Can a user tell where they are, what the screen is for, and what action to take?
2. **Hierarchy and craft:** Is there a clear focal point? Are typography, spacing, density, surfaces, and alignment coherent with the product?
3. **Task flow:** Are navigation, labels, states, forms, errors, empty states, and confirmations understandable? Does each control behave as named?
4. **Accessibility:** Check semantics, accessible names, keyboard order, visible focus, contrast, labels, alt text, motion preferences, and status announcements where relevant.
5. **Responsive behavior:** Check for clipped content, collisions, overflow, poor wrapping, tiny touch targets, and layouts that fail at narrow widths or zoom.
6. **Performance:** Note heavy assets, unnecessary animation, avoidable React work, or expensive rendering only when supported by the code or measurements.

## Report findings

- Rank issues as **Blocker**, **High**, **Medium**, or **Polish** by user impact.
- Cite a concrete file and line when reviewing source, or a specific screen/state when reviewing a rendered page.
- State the observed problem and a practical fix. Separate confirmed issues from questions or items that need browser verification.
- Keep the report focused: lead with the few fixes that would most improve the experience. Include what you checked and what you could not inspect.

