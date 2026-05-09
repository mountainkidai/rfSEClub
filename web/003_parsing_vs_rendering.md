# Topic 0.3 — Parsing vs Rendering

Most frontend developers mix these together.

But browser engineers think of them as completely different phases.

If you understand this deeply:

- performance debugging becomes easier
- React rendering becomes clearer
- hydration cost becomes intuitive
- layout thrashing makes sense
- animation optimization makes sense

---

# 🧠 First Principle

The browser has TWO major jobs:

## 1. Understand the code

This is:

# Parsing

---

## 2. Draw pixels on screen

This is:

# Rendering

These are different systems.

---

# 🔥 Parsing

Parsing means:

> converting raw text into structured internal data

Example:

```html id="kg9glx"
<h1>Hello</h1>
```

Browser parses it into:

```txt id="dj1pt6"
DOM node:
type = h1
text = Hello
```

---

# Browser Parses Multiple Things

## HTML → DOM

```txt id="lpkls7"
HTML parser
```

---

## CSS → CSSOM

```txt id="h4qt2o"
CSS parser
```

---

## JavaScript → AST + bytecode

JS engine parses JS before executing.

---

# 🧠 Important

Parsing does NOT mean:

> showing UI

Browser may fully parse something
without rendering it yet.

---

# 🔥 Rendering

Rendering means:

> converting parsed structures into visible pixels

This includes:

- layout
- paint
- compositing

---

# Simple Analogy

Imagine browser is building a house.

---

## Parsing

Reading blueprint.

Understanding:

- walls
- rooms
- dimensions

---

## Rendering

Actually constructing the house visually.

---

# Browser Rendering Pipeline

```txt id="khydql"
DOM + CSSOM
→ Render Tree
→ Layout
→ Paint
→ Composite
```

This is rendering.

---

# 🚨 CRITICAL INSIGHT

Parsing can happen WITHOUT rendering.

Example:

Browser may parse huge hidden DOM sections
without painting them.

---

# Another Important Insight

Rendering can happen AGAIN
without reparsing HTML.

Example:

```js id="7mjlwm"
div.style.color = "red";
```

No HTML parsing needed.

But browser may:

- repaint
- composite

---

# Different Types of Browser Work

| Operation    | Parsing? | Rendering?     |
| ------------ | -------- | -------------- |
| Load HTML    | ✅       | eventually     |
| Change text  | maybe    | ✅             |
| Change color | ❌       | repaint        |
| Change width | ❌       | layout + paint |

---

# ⚡ Expensive vs Cheap Operations

Browser work has cost levels.

---

# Cheapest

## Composite-only changes

Example:

```css id="k30i3s"
transform: translateX() opacity;
```

GPU handles these efficiently.

Great for animations.

---

# Medium Cost

## Paint changes

Example:

```css id="qfyw1h"
background-color
color
box-shadow
```

Need repaint.

---

# VERY Expensive

## Layout/Reflow

Example:

```css id="0vww5q"
width
height
margin
padding
font-size
```

Browser recalculates positions/sizes.

This can cascade through entire page.

---

# 🚨 Layout Thrashing

One of the biggest performance killers.

Example:

```js id="y8t0ui"
element.style.width = "100px";
element.offsetHeight;
element.style.width = "200px";
```

Browser repeatedly:

- recalculates layout
- blocks rendering pipeline

Bad for low-end devices.

---

# 🧠 Why React Performance Matters

React itself doesn’t draw pixels.

React updates DOM.

Browser still must:

- layout
- paint
- composite

So:

> fewer DOM changes = better performance

---

# ⚡ Hydration Connection

Hydration adds extra rendering work.

React:

- parses JS
- builds virtual tree
- attaches listeners
- reconciles DOM

Hydration cost can block interactivity.

This is why:

- large client bundles hurt INP
- Server Components help

---

# 🚨 Parsing JS Is VERY Expensive

Modern JS engines:

- parse
- optimize
- compile
- execute

Large bundles hurt:

- CPU
- battery
- memory
- interactivity

Especially on cheap Android devices.

---

# 🧠 Elite Frontend Principle

Your goal is NOT:

> “write clever React”

Your goal is:

> minimize browser work

That means:

- less JS
- fewer layouts
- fewer paints
- smaller DOM
- fewer rerenders

---

# Real Production Insight

Most frontend slowness comes from:

- rendering cost
- hydration cost
- layout recalculations

NOT network alone.

---

# ⚡ Why Streaming Is Powerful

Streaming allows browser to:

- start parsing early
- build DOM progressively
- render incrementally

Instead of waiting for full page.

This massively improves perceived performance.

---

# Final Mental Model

# Parsing

```txt id="yo3o17"
Raw code
→ structured internal representation
```

---

# Rendering

```txt id="jlwmvx"
Structured data
→ pixels on screen
```

---

# Browser Performance Hierarchy

```txt id="cmyk8w"
Composite (cheap)
↓
Paint
↓
Layout/Reflow (expensive)
```

---
