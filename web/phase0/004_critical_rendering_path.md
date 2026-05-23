# Topic 0.4 — Critical Rendering Path (CRP)

This is one of the MOST important topics in frontend performance engineering.

If you master this:

- Lighthouse scores stop feeling random
- Core Web Vitals make sense
- hydration optimization makes sense
- Next.js architecture decisions become obvious
- you start thinking like a browser engineer

---

# 🧠 First Principle

When a user opens a website:

The browser’s FIRST goal is NOT:

> “load everything”

Its first goal is:

> “show something useful as fast as possible”

The sequence of steps required to show the FIRST visible pixels is called:

# Critical Rendering Path

---

# 🔥 Definition

Critical Rendering Path =

> the minimum work browser must complete before user sees content

---

# The CRP Pipeline

```txt id="5hjmyh"
HTML download
→ HTML parsing
→ DOM creation

CSS download
→ CSS parsing
→ CSSOM creation

DOM + CSSOM
→ Render Tree

Render Tree
→ Layout
→ Paint
```

Only AFTER this:
user sees pixels.

---

# 🚨 The Entire Game

Performance engineering is basically:

# Reduce:

- blocking work
- blocking resources
- unnecessary bytes
- unnecessary JS

on this path.

---

# CRITICAL vs NON-CRITICAL

This distinction changes everything.

---

# Critical Resources

Needed immediately for first render.

Examples:

- HTML
- critical CSS
- above-the-fold content

---

# Non-Critical Resources

Can load later.

Examples:

- chat widgets
- analytics
- below-the-fold images
- heavy dashboards
- videos

Elite apps delay these aggressively.

---

# ⚡ Render Blocking Resources

Some resources BLOCK rendering.

Mainly:

## CSS

and

## synchronous JS

---

# Why CSS Blocks Rendering

Browser cannot safely paint without knowing styles.

Example:

```css id="y1hr8t"
.container {
  display: none;
}
```

If browser painted before CSS:
layout may completely change.

So browser waits.

---

# 🚨 Large CSS = Slower First Paint

This is why:

- giant Tailwind outputs
- unused CSS
- huge component libraries

hurt performance.

---

# Why JavaScript Blocks Parsing

Example:

```html id="11wl1v"
<script src="app.js"></script>
```

Browser pauses HTML parsing.

Because JS can modify DOM instantly:

```js id="p9i5y0"
document.body.innerHTML = "Changed";
```

So browser must stop and execute JS first.

---

# ⚠️ Huge JS Bundles Destroy CRP

Because browser must:

```txt id="3q7yx8"
download
→ parse
→ compile
→ execute
```

before continuing.

This is why:

> JavaScript is the biggest frontend performance tax.

---

# Old React Approach (Client-Side Rendering)

Traditional React apps often worked like this:

```txt id="f8x3mq"
1. Browser downloads almost empty HTML
2. Downloads huge JavaScript bundle
3. Executes React app
4. React builds UI in browser
5. Finally page appears
```

So the browser does most of the work.

Problem:

- lots of JS
- slower rendering
- blank screen longer
- poor performance on slow devices

---

# Modern Next.js Approach

Modern Next.js prefers:

> Server Components + Server Rendering

Flow:

```txt id="p7m4zw"
1. Server renders HTML
2. Browser immediately shows UI
3. JavaScript loads later
4. React hydrates interactivity
```

So users can see content much faster.

---

# What Is Hydration?

Hydration means:

> React attaches JavaScript behavior to already-rendered HTML.

Example:

Server sends:

```html id="u3k9xp"
<button>Like</button>
```

Browser can already display it immediately.

Later React hydrates it:

```txt id="y6v1rc"
adds click handlers
adds state
adds interactivity
```

So:

- HTML appears first
- interactivity comes after

---

# Why This Is Faster

HTML is cheap for browser to render.

JavaScript is expensive because browser must:

- download
- parse
- compile
- execute

So sending HTML first drastically improves:

```txt id="n2w8zk"
First Paint
Largest Contentful Paint
Time to Interactive
UX
```

---

# Massive CRP Improvement

CRP means:

> Critical Rendering Path

The sequence of steps required before users see usable UI.

Modern Next.js improves CRP because:

- less blocking JavaScript
- faster first render
- smaller client bundles
- more work moved to server

Result:

```txt id="m5x7qp"
Faster page load
Better UX
Less CPU usage
Better mobile performance
```

---

# 🚀 Metrics Connected to CRP

Core Web Vitals mostly measure:

> how good and fast the Critical Rendering Path (CRP) is.

Meaning:

- how quickly users see content
- how responsive the app feels
- how smoothly the page becomes interactive

---

# 1. FCP — First Contentful Paint

> When the browser first shows any visible content on screen.

Examples:

- text appears
- logo appears
- spinner appears

Before FCP:

```txt id="t3m8qw"
blank white screen
```

After FCP:

```txt id="r7v2zk"
user finally sees something
```

Goal:

> show content as fast as possible.

---

# 2. LCP — Largest Contentful Paint

> When the main/largest visible content finishes rendering.

Usually:

- hero image
- large heading
- banner
- main content section

Example:

```txt id="x4p9mc"
big homepage image appears
```

LCP is important because it often matches:

> “Does the page feel loaded to user?”

Even if small text appeared earlier,
users usually wait for the main content.

---

# 3. INP — Interaction to Next Paint

> How quickly the page responds after user interaction.

Example:

- click button
- type input
- open menu

INP measures:

```txt id="u6w1rq"
user action
→ browser processes JS
→ UI updates visually
```

Low INP:

- smooth
- responsive
- instant feeling

High INP:

- laggy
- frozen
- delayed interactions

---

# Why Large JavaScript Hurts INP

Heavy JavaScript blocks the main thread.

Browser becomes busy:

- parsing JS
- executing JS
- hydrating React
- rendering updates

While busy:

```txt id="m9x5vk"
browser cannot respond quickly
```

So clicks feel delayed.

---

# Important Insight

Good performance is NOT only:

```txt id="q2r8zy"
fast network
```

It is also:

```txt id="n5v4kp"
fast rendering
fast JS execution
fast interaction response
```

That’s exactly what Core Web Vitals try to measure.

# 🧠 Elite Insight

Most frontend optimization is NOT:

> “making app faster”

It’s:

> “making first render happen earlier”

---

# ⚡ Critical CSS

One powerful optimization:

Load ONLY essential CSS first.

Delay rest.

Example:

- above-the-fold styles first
- dashboard styles later

This improves:

- FCP
- LCP

---

Normally, when browser sees:

```html id="x8m4qp"
<script src="app.js"></script>
```

it does this:

```txt id="t5v1zk"
STOP HTML parsing
↓
download JS
↓
execute JS
↓
continue HTML parsing
```

Because JavaScript might modify the page.

This blocks rendering and slows page load.

---

# With `defer`

Example:

```html id="m2r7wx"
<script defer src="app.js"></script>
```

Now browser behaves differently:

```txt id="p6x3mq"
continue parsing HTML
↓
download JS in background
↓
finish building DOM
↓
execute JS later
```

So browser does NOT pause HTML parsing immediately.

That means:

- DOM builds faster
- content appears sooner
- rendering starts earlier

---

# Why This Feels Faster

Without `defer`:

```txt id="h4w8zn"
HTML parsing gets blocked repeatedly
```

With `defer`:

```txt id="n7v2rk"
browser keeps building page continuously
```

So:

- FCP improves
- LCP improves
- blank screen time reduces

---

# Important

`defer` does NOT make JavaScript execution cheaper.

It improves:

> scheduling

Meaning:

- browser delays JS execution
- prioritizes rendering first

This improves perceived performance a lot.

---

# Simple Comparison

## Normal Script

```txt id="u9m5px"
Parse HTML
STOP
Run JS
Continue
STOP
Run JS
Continue
```

---

## Deferred Script

```txt id="v3r8kq"
Parse HTML continuously
↓
DOM ready
↓
Run JS afterward
```

Much smoother for rendering.

---

# ⚡ Code Splitting

Huge concept.

Instead of:

```txt id="jlwm2v"
1 massive bundle
```

send:

```txt id="9ssvch"
small route-specific bundles
```

Critical for Next.js.
Yes — exactly.

That’s one of the biggest reasons you see:

```txt id="z8m4wp"
_many small JS files_
```

in the Network tab of a modern Next.js app.

---

# Old Approach

Earlier apps often shipped:

```txt id="u2r7kq"
1 giant bundle.js
```

Containing:

- entire app
- all routes
- all components
- all libraries

Problem:

Even if user visits only:

```txt id="x5v1mc"
/login
```

browser still downloads code for:

- dashboard
- settings
- charts
- admin panel
- etc.

Huge waste.

---

# Modern Next.js Approach → Code Splitting

Next.js automatically splits JavaScript into smaller chunks.

Example:

```txt id="p7x4zn"
/login      → login bundle
/dashboard  → dashboard bundle
/settings   → settings bundle
```

So browser downloads:

> only what current page needs.

Massive performance improvement.

---

# Why Many Files Appear

You may see:

```txt id="k3m8rq"
framework.js
main.js
webpack.js
page chunks
layout chunks
vendor chunks
dynamic chunks
```

These are split bundles/chunks.

Each contains specific parts of app code.

---

# Benefits

Instead of:

```txt id="v6r2qp"
download 2MB immediately
```

browser may download:

```txt id="g4w9mk"
only 150KB for current route
```

Then lazy-load remaining code later if needed.

This improves:

- FCP
- LCP
- bandwidth usage
- mobile performance
- caching efficiency

---

# Extra Important Insight

Smaller chunks also improve caching.

Example:

```txt id="q8v5zy"
dashboard.js changed
```

Browser only redownloads:

```txt id="t1m4xr"
dashboard chunk
```

instead of entire app bundle.

Huge win.

---

# So Yes

Those many `.js` files you see in Network tab are usually:

> automatic code splitting + chunking optimization done by Next.js/bundler.

---

# Dynamic Imports / Lazy Loading

Normally when building an app, all components may get bundled together.

Example:

```txt id="r7m4xq"
main.js
```

contains:

- navbar
- dashboard
- charts
- editor
- modal
- everything

Problem:
Even if user never opens chart page,
browser still downloads chart library.

Wasteful.

---

# Dynamic Import

Example:

```js id="w2v8pk"
dynamic(() => import("./Chart"));
```

Meaning:

> “Do NOT load Chart immediately.”
>
> “Load it only when actually needed.”

This is called:

> lazy loading

---

# What Happens Internally

Without dynamic import:

```txt id="m5x1zr"
page load
↓
download entire app bundle
↓
includes chart code too
```

With dynamic import:

```txt id="t8q4vn"
page load
↓
skip chart bundle initially
↓
user opens chart section
↓
browser downloads chart chunk later
```

Much faster initial loading.

---

# Why This Is Powerful

Some libraries are huge.

Examples:

- charts
- editors
- maps
- video players
- markdown parsers

These can add:

```txt id="u1p7kc"
100KB
300KB
500KB+
```

to initial bundle.

Dynamic imports prevent that upfront cost.

---

# Real Example

Suppose dashboard contains:

- text
- stats
- chart at bottom

Instead of loading chart library immediately:

```js id="x9r3mq"
const Chart = dynamic(() => import("./Chart"));
```

Browser first loads:

```txt id="b4v8zw"
important UI only
```

Then later loads chart code separately.

This improves:

- FCP
- LCP
- bandwidth usage
- mobile performance

---

# Why Next.js Loves This

Next.js focuses heavily on:

```txt id="g7m2xp"
send less JavaScript initially
```

Dynamic imports help by:

- splitting heavy components
- delaying non-critical code
- reducing initial bundle size

---

# Important Insight

Not all code is equally important.

Critical code:

```txt id="v3q8rk"
navbar
hero section
main content
```

can load immediately.

Non-critical code:

```txt id="d6x1mw"
charts
modals
editors
analytics
```

can wait until needed.

That’s the philosophy behind lazy loading.

# ⚡ Streaming

One of the biggest modern performance optimizations.

Traditionally, servers often worked like this:

```txt id="m7x2qp"
fetch all data
render full page
finish everything
THEN send response
```

Problem:
User waits for entire page generation before seeing anything.

Bad for:

- slow APIs
- large pages
- slow databases

---

# Streaming Approach

Instead of waiting for everything:

```txt id="u5r8zk"
send HTML progressively
```

Meaning:

- server sends page in chunks
- browser starts rendering immediately
- remaining content arrives later

---

# Traditional Flow

```txt id="q3v1mw"
Server:
wait...
wait...
wait...
↓
send full HTML

Browser:
starts rendering very late
```

---

# Streaming Flow

```txt id="p9x4rk"
Server:
send navbar
send hero
send layout
wait for slow data
send remaining content later

Browser:
starts rendering immediately
```

Huge perceived speed improvement.

---

# Why This Feels Faster

Browser does NOT need complete HTML to begin work.

As soon as partial HTML arrives:

```txt id="w8m2zn"
browser parses HTML
builds DOM
renders visible UI
```

while remaining content is still downloading.

So users see:

- page structure
- loading skeletons
- headers
- partial content

much earlier.

---

# Real Example

Suppose dashboard has:

- navbar
- sidebar
- slow analytics chart

Without streaming:

```txt id="n4v7qp"
wait for chart query
↓
entire page delayed
```

With streaming:

```txt id="c6x1mw"
show navbar immediately
show sidebar immediately
stream chart later
```

Feels dramatically faster.

---

# React + Next.js Streaming

Modern Next.js App Router uses:

- React Suspense
- streaming SSR

Example idea:

```jsx id="r2m8vk"
<Suspense fallback={<Loading />}>
  <SlowChart />
</Suspense>
```

Meaning:

> “Render rest of page now.”
>
> “Stream SlowChart later when ready.”

---

# Important Insight

Streaming improves:

```txt id="x5q3zr"
perceived performance
```

Even if total download time stays similar.

Why?

Because users:

- see progress earlier
- interact earlier
- feel app is faster

This is a huge UX win.

---

# 🚨 Hydration and CRP

Hydration often happens AFTER first paint.

But heavy hydration delays:

- interactivity
- responsiveness

This hurts:

- INP
- battery
- CPU

---

# 🧠 Golden Rule for Elite Apps

# Send:

- HTML
- minimal CSS
- tiny JS

as early as possible.

Delay EVERYTHING else.

---

# Real Production Insight

Most bad apps:

- load giant component libraries
- hydrate entire app
- ship huge JS
- fetch too much data
- block rendering

Most elite apps:

- aggressively split code
- stream HTML
- minimize hydration
- optimize critical path

---

# ⚡ For Your 30kbps Goal

Critical Rendering Path is EVERYTHING.

Because:

- network is slow
- CPU is weak
- latency is high

So:

> every unnecessary byte delays first paint

---

# Final Mental Model

```txt id="hmjlwm"
Critical Rendering Path =
minimum browser work needed
to show first visible content
```

Performance engineering =
reducing work on this path.

---
