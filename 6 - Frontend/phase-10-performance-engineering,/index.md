# PHASE 10 — PERFORMANCE ENGINEERING & WEB OPTIMIZATION

> Most developers make software work.
>
> Elite engineers make software fast.

---

# Why This Phase Exists

Users do not experience:

```text id="qit1uw"
Code
```

Users experience:

```text id="9d9zvh"
Latency
```

Nobody cares:

```text id="g7e1g5"
How elegant your architecture is
```

if the page takes:

```text id="nj5m95"
8 seconds
```

to load.

Performance is not a feature.

Performance is:

```text id="3m4smy"
Part Of The Product
```

---

# The Fundamental Question

Imagine two applications:

```text id="l0b3ei"
App A
100ms

App B
3000ms
```

Same features.

Same UI.

Same business.

Users overwhelmingly prefer:

```text id="zcdsjg"
App A
```

Speed changes:

- Conversion
- Retention
- Revenue
- User satisfaction

Performance is business.

---

# Learning Objectives

By the end of this phase you should understand:

- Browser performance
- Rendering performance
- JavaScript performance
- Network optimization
- Caching
- Core Web Vitals
- Frontend profiling
- Performance budgets
- Large-scale optimization

---

# Mental Model

Most developers think:

```text id="ql8y64"
Performance
=
Optimization
```

Wrong.

Performance is:

```text id="lpl0eu"
Systems Design
```

Good performance is designed.

Not patched.

---

# PHASE ROADMAP

---

# 10.1 What Is Performance?

Topics:

- Perceived speed
- Actual speed
- Human perception

Questions:

What does "fast" actually mean?

---

# 10.2 Performance Metrics

Topics:

```text id="ykxub5"
Latency
Throughput
Bandwidth
Memory
CPU
```

Questions:

How is performance measured?

---

# 10.3 User-Centric Performance

Topics:

User perception

Questions:

What does the user actually experience?

---

# 10.4 Critical Rendering Path

One of the most important topics.

Topics:

```text id="j0s8wa"
HTML
↓
DOM
↓
CSSOM
↓
Render Tree
↓
Layout
↓
Paint
```

Questions:

Why does rendering take time?

---

# 10.5 Browser Rendering Costs

Topics:

- Layout
- Paint
- Composite

Questions:

What operations are expensive?

---

# 10.6 Reflow

Topics:

Layout recalculation

Questions:

Why does changing one element affect many?

---

# 10.7 Repaint

Topics:

Visual updates

Questions:

When does repaint occur?

---

# 10.8 Layout Thrashing

Topics:

Repeated measurements

Questions:

Why do applications become janky?

---

# 10.9 GPU Compositing

Topics:

Layers

Questions:

Why are some animations smooth?

---

# 10.10 JavaScript Performance

Topics:

Execution costs

Questions:

When does JavaScript become slow?

---

# 10.11 Event Loop Performance

Topics:

Main thread blocking

Questions:

Why does UI freeze?

---

# 10.12 Memory Performance

Topics:

Heap growth

Questions:

Why do applications become slower over time?

---

# 10.13 Memory Leaks

Topics:

Retained references

Questions:

How can memory be lost?

---

# 10.14 React Rendering Performance

Topics:

Component rendering

Questions:

Why do React apps rerender excessively?

---

# 10.15 React Profiling

Topics:

React DevTools

Questions:

What component is slow?

---

# 10.16 Memoization

Topics:

```jsx id="h68c1n"
useMemo;
useCallback;
React.memo;
```

Questions:

When should rerenders be prevented?

---

# 10.17 State Performance

Topics:

State granularity

Questions:

Why does state architecture affect performance?

---

# 10.18 List Rendering

Topics:

Large collections

Questions:

How do applications render 100,000 rows?

---

# 10.19 Virtualization

Critical topic.

Topics:

Windowing

Questions:

How can large datasets render instantly?

---

# 10.20 Network Performance

Topics:

Latency
Bandwidth

Questions:

Why is network often slower than code?

---

# 10.21 HTTP Performance

Topics:

HTTP/2
HTTP/3

Questions:

How do protocols affect speed?

---

# 10.22 Resource Loading

Topics:

Critical resources

Questions:

What should load first?

---

# 10.23 Bundle Analysis

Topics:

JavaScript payloads

Questions:

Why is the bundle large?

---

# 10.24 Code Splitting

Topics:

Dynamic imports

Questions:

Why load code users never visit?

---

# 10.25 Lazy Loading

Topics:

Deferred resources

Questions:

What should load later?

---

# 10.26 Tree Shaking

Topics:

Dead code elimination

Questions:

Why ship unused code?

---

# 10.27 Image Optimization

One of the highest ROI optimizations.

Topics:

```text id="3ijzw4"
WebP
AVIF
Responsive Images
```

Questions:

Why are images expensive?

---

# 10.28 Image Delivery Architecture

Topics:

CDNs
Transformation

Questions:

How do modern platforms optimize images?

---

# 10.29 Font Optimization

Topics:

Font loading

Questions:

Why do fonts delay rendering?

---

# 10.30 Script Optimization

Topics:

```html id="msdfsq"
async defer
```

Questions:

How should scripts load?

---

# 10.31 Resource Hints

Topics:

```html id="pqhw7l"
preload prefetch preconnect dns-prefetch
```

Questions:

How can browsers prepare work?

---

# 10.32 Caching Fundamentals

Topics:

Browser caching

Questions:

Why download resources repeatedly?

---

# 10.33 HTTP Caching

Topics:

```text id="hck4iu"
Cache-Control
ETag
Expires
```

Questions:

When should content be reused?

---

# 10.34 CDN Caching

Topics:

Edge caching

Questions:

Why place content near users?

---

# 10.35 Application Caching

Topics:

Data caches

Questions:

What data should remain in memory?

---

# 10.36 Service Worker Caching

Topics:

Offline caching

Questions:

How can applications survive poor networks?

---

# 10.37 Core Web Vitals

The most important performance metric.

Topics:

```text id="5ps0jc"
LCP
CLS
INP
```

Questions:

How does Google measure UX?

---

# 10.38 Largest Contentful Paint

Topics:

Loading performance

Questions:

How quickly does content appear?

---

# 10.39 Cumulative Layout Shift

Topics:

Visual stability

Questions:

Why do pages jump around?

---

# 10.40 Interaction To Next Paint

Topics:

Responsiveness

Questions:

How quickly does the UI react?

---

# 10.41 Lighthouse

Topics:

Performance auditing

Questions:

How do we measure quality?

---

# 10.42 WebPageTest

Topics:

Deep diagnostics

Questions:

What happens across global networks?

---

# 10.43 Chrome Performance Panel

Topics:

Profiling

Questions:

What is consuming CPU time?

---

# 10.44 React Performance Tools

Topics:

Render analysis

Questions:

Why is React slow?

---

# 10.45 Performance Budgets

Critical engineering topic.

Topics:

```text id="77i6vf"
JS Budget
CSS Budget
Image Budget
```

Questions:

How do teams prevent regressions?

---

# 10.46 Monitoring Production Performance

Topics:

Real User Monitoring

Questions:

How do real users experience the application?

---

# 10.47 Performance At Scale

Topics:

Millions of users

Questions:

What breaks first?

---

# 10.48 Mobile Performance

Topics:

Low-end devices

Questions:

How do applications work on cheap phones?

---

# 10.49 Ultra-Low Internet Engineering

MountainKid-critical topic.

Topics:

```text id="18m6ic"
2G
3G
Intermittent Networks
```

Questions:

Can applications work in remote villages?

Can applications work in the Himalayas?

---

# 10.50 Performance Systems Design

Topics:

Putting everything together

Questions:

How should performance influence architecture decisions?

---

# Completion Project

Build:

```text id="5lqqf2"
Phunsuk Lite
```

Goal:

```text id="zovvql"
Works on 3G
Works on Cheap Android Phones
Works in Remote Areas
```

Requirements:

```text id="2gsfyz"
LCP < 2s
CLS < 0.1
INP < 200ms

Offline Support
Image Optimization
Caching
Streaming
Code Splitting
Virtualized Lists
```

---

# Bonus Project

Build:

```text id="0vjlwm"
Performance Observatory
```

Features:

```text id="q5wty2"
Lighthouse Integration
Core Web Vitals
Real User Metrics
Performance Dashboard
```

Track:

```text id="9q4w3m"
Phunsuk
Sari
Wangdu
Sheldon
```

in production.

---

# Success Criteria

You can confidently answer:

1. What is performance?
2. What is the Critical Rendering Path?
3. What causes reflows?
4. What causes repaints?
5. What causes memory leaks?
6. Why do React apps rerender?
7. What is virtualization?
8. What is code splitting?
9. What is tree shaking?
10. Why are images expensive?
11. How does caching work?
12. What are Core Web Vitals?
13. What is LCP?
14. What is CLS?
15. What is INP?
16. What is a performance budget?
17. How do we measure real user experience?
18. How do we build applications for poor networks?
19. How do we build applications for low-end devices?
20. Why is performance fundamentally a systems problem rather than a frontend problem?

If you can answer those questions from first principles, you'll realize:

```text id="gkpnm9"
Fast Software
Is Not An Optimization.

It Is An Architectural Decision.
```

The best engineers don't make slow software fast.

They design software that never becomes slow in the first place.
