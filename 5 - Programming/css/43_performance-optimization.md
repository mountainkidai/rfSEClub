## Performance Optimization

Optimizing CSS performance is crucial for fast, smooth websites. Poorly optimized styles can cause slow page loads, janky animations, and bad user experiences. Three key areas in CSS performance are reflows, repaints, and critical CSS.

---

### Reducing Reflows

A **reflow** (also called layout) happens when the browser recalculates the positions and sizes of elements. Reflows are triggered by:

* Changing layout properties like `width`, `height`, `margin`, `padding`, or `display`
* Adding or removing DOM elements
* Changing content that affects layout

**To reduce reflows:**

* Avoid layout thrashing (reading & writing layout in a loop)
* Batch DOM changes together
* Use classes to toggle styles instead of setting styles individually
* Use `visibility: hidden` instead of `display: none` when hiding elements temporarily (avoids layout change)

---

### Minimizing Repaints

A **repaint** happens when visual styles like color or shadow change, but layout is not affected.

**Repaints are less expensive than reflows**, but still costly if frequent.

**To reduce repaints:**

* Avoid frequent changes to `color`, `background`, `box-shadow`
* Use `transform` and `opacity` for animations instead of `top`, `left`, or `width`
* Keep animations on composited layers using `will-change: transform` or `translateZ(0)`

---

### Critical CSS

**Critical CSS** is the minimal set of CSS rules needed to render the above-the-fold content (visible portion) of a page.

**Why it's important:**

* Browsers block rendering until CSS is downloaded and parsed
* Critical CSS helps load the most important styles faster

**For critical CSS:**

* Inline only above-the-fold styles in `<head>`
* Load rest of the CSS asynchronously (e.g., using `media="print"` trick or `loadCSS` library)
* Use tools like Critical or Penthouse to extract critical CSS

---

### Summary

| Goal               | How to Achieve It                                             |
| ------------------ | ------------------------------------------------------------- |
| Reduce Reflows     | Batch DOM changes, use classes, minimize layout changes       |
| Reduce Repaints    | Avoid unnecessary visual changes, use `transform` & `opacity` |
| Optimize Load Time | Inline critical CSS, lazy-load non-critical styles            |
