---
name: react-ui-engineering
description: Implement or refactor React UI components with attention to accessibility, responsiveness, state, loading, and performance. Use for React component and frontend engineering work.
---

# React UI engineering

This skill draws on Vercel's React guidance, web interface review rules, UI UX Pro Max stack notes, and shadcn/ui's composable-component approach. It is framework guidance, not a requirement to use Next.js, shadcn/ui, or any particular dependency.

- Inspect the project stack and reuse its existing primitives, state model, styling, and package choices. Prefer a maintained accessible component primitive to hand-rolling a complex menu, dialog, combobox, or toast.
- Use semantic elements and native form behavior first. Give each interactive control a name, correct role/state, keyboard behavior, focus treatment, and appropriate error/disabled state.
- Keep state close to where it is used. Derive values during render where possible; avoid effect-driven state synchronization and unnecessary global subscriptions.
- Avoid request waterfalls: start independent asynchronous work together and defer awaits until the result is needed. Keep loading, error, and empty states explicit.
- Limit client bundles and costly rendering. Lazy-load heavy optional experiences when the project architecture supports it; measure before adding memoization or micro-optimizations.
- Make long text, translated strings, zoom, reduced motion, and narrow screens resilient. Do not rely on color alone to communicate status.
- Check links, forms, navigation, and state persistence in the actual interaction path when browser access is available.

