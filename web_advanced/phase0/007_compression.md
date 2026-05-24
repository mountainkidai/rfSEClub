# Topic 0.7 — Compression (gzip / Brotli)

This topic is PURE performance engineering.

For your goal:

> apps usable on 30kbps internet

compression is not optional.

It is survival.

---

# 🧠 First Principle

Most web files contain:

# repetitive text

Example JavaScript:

```js id="jlwm80"
function renderComponent() {
  return renderSomething();
}
```

Words repeat:

- function
- render
- return
- spaces
- symbols

Sending raw text over network is wasteful.

So browsers and servers use:

# compression

---

# What Compression Does

Compression:

> reduces number of bytes sent over network

Example:

```txt id="jlwm81"
500 KB JS
↓
120 KB compressed
```

Massive difference.

Especially on slow internet.

---

# 🚨 Important Insight

Compression reduces:

- bandwidth usage
- transfer time

But NOT:

- round trips
- server latency

Different optimization layer.

---

# 🌐 How Compression Works

Browser says:

```http id="jlwm82"
Accept-Encoding: gzip, br
```

Meaning:

```txt id="jlwm83"
"I support compressed responses."
```

Server responds:

```http id="jlwm84"
Content-Encoding: br
```

Meaning:

```txt id="jlwm85"
"This response is Brotli compressed."
```

Yes — internally compression works by finding:

> repeated patterns/bytes

and encoding them more efficiently.

Not exactly “character by character” only —
more like:

```txt id="q4m8xp"
repeated sequences of bytes/patterns
```

---

# Simple Example

Suppose JS contains:

```js id="v7x2rk"
render render render render
```

Raw text:

```txt id="u3m5zw"
render render render render
```

Compression algorithm notices:

```txt id="c8q1mv"
"render" repeats many times
```

So instead of storing full word repeatedly:

```txt id="n5v4pk"
render render render render
```

it stores something conceptually like:

```txt id="r2x7zn"
"render" × 4
```

Much smaller.

---

# Another Example

Suppose HTML:

```html id="k9m2rq"
<div>
  <div>
    <div>
      <div></div>
    </div>
  </div>
</div>
```

Repeated:

```txt id="y6v1mw"
<div>
```

Compression algorithms exploit this repetition.

---

# Why Text Compresses So Well

Code/text has huge repetition:

```txt id="t4x8qp"
function
return
const
class
spaces
indentation
HTML tags
JSON keys
```

These repeat constantly.

So compression ratios become huge:

```txt id="w1m7zk"
500KB
↓
100KB
```

---

# Why Images Compress Poorly Again

JPEG/WebP/MP4 already internally do:

- pattern reduction
- frequency optimization
- mathematical compression

So there’s little repetition left.

Trying gzip/Brotli again often gives:

```txt id="p8q3rk"
almost no improvement
```

---

# Important Technical Insight

Compression works on:

> bytes

not “meaning”.

It does NOT understand:

- JavaScript
- HTML
- React

It only sees:

```txt id="x2v6mw"
patterns
repetition
frequent sequences
```

and encodes them efficiently.

---

# Real Mental Model

```txt id="m7x4zn"
Original:
AAAAAAABBBBBBBBBCCCCCC

Compressed:
7A9B6C
```

Real algorithms are much smarter,
but conceptually similar.

---

# Browser Side

When browser receives compressed response:

```http id="d5m1vq"
Content-Encoding: br
```

browser automatically:

```txt id="f9x2pk"
decompresses bytes
```

before:

- parsing HTML
- executing JS
- applying CSS

User never notices this process.

Browser decompresses automatically.

User never notices.

---

# 🔥 Main Compression Types

---

# 1. gzip

Older.
Still very common.

Good compression.

Fast.

---

# 2. Brotli (`br`)

Modern.
Usually MUCH better than gzip.

Smaller payloads.

Especially good for:

- JS
- CSS
- HTML

---

# Example

```txt id="jlwm86"
Raw JS:      500 KB
gzip:        150 KB
brotli:      110 KB
```

Huge savings.

---

# 🚨 Why Compression Is Magical

Imagine:

30kbps internet.

---

Without compression:

```txt id="jlwm87"
500 KB JS
```

might take:

# forever

---

With Brotli:

```txt id="jlwm88"
110 KB
```

Massively faster.

Compression can literally save seconds.

---

# ⚡ Compression Works BEST on Text

Excellent for:

- HTML
- CSS
- JS
- JSON
- SVG

Because text has repetition.

---

# 🚫 Compression Works Poorly on Already Compressed Files

Examples:

- JPEG
- PNG
- MP4
- WebP
- AVIF

These are already compressed formats.

Trying again gives tiny benefit.

---

# 🌐 Why JSON APIs Become Dangerous

Bad APIs send:

```json id="jlwm89"
{
  "user": {
    "profile": {
      "settings": {
        ...
```

Huge nested repetitive payloads.

Compression helps —
but giant payloads still hurt.

---

# 🚨 Elite Backend Principle

Never send data UI doesn’t need.

Compression is NOT excuse for bloated APIs.

---

# 🌐 Compression and Next.js

Next.js deployments usually enable:

- gzip
- Brotli

through:

- Vercel
- CDN
- reverse proxies

Automatically.

---

# 🚨 But Compression Cannot Save Bad Architecture

Example:

```txt id="jlwm8a"
3 MB hydrated React app
```

Even compressed:
still terrible.

Compression helps.
But minimizing JS matters more.

---

# ⚡ Compression + Caching = GOD TIER

Best combination:

```txt id="jlwm8b"
small compressed file
+
long cache lifetime
```

Browser downloads once.
Reuses forever.

Ultra fast experience.

---

# 🌐 Compression CPU Tradeoff

Compression saves bandwidth,
but requires CPU for:

- compression
- decompression

Brotli compresses better,
but costs more CPU on server.

Usually worth it.

---

# 🚨 Real Production Insight

On modern apps:
JavaScript is often:

- largest compressed asset
- biggest CPU cost
- biggest hydration cost

This is why elite Next.js engineers:

- reduce JS aggressively
- prefer Server Components
- avoid unnecessary libraries

---

# ⚡ Text Compression Is INSANELY Effective

Example:

```txt id="jlwm8c"
HTML
CSS
JS
JSON
```

often compress:

# 70–90%

Huge win.

---

# 🌐 Image Compression Matters Too

For images:
use modern formats:

- WebP
- AVIF

Instead of:

- huge PNGs
- unoptimized JPEGs

Critical for slow internet.

---

# 🚨 Real Mobile Reality

Most frontend developers test on:

- fast WiFi
- MacBook
- modern CPUs

Real users often have:

- unstable mobile networks
- low-end Android devices
- weak CPUs

Compression matters enormously there.

---

# ⚡ Golden Rule

# Smaller payloads =

- faster rendering
- faster hydration
- lower battery use
- lower memory pressure
- lower bandwidth cost

---

# 🧠 Mental Model

```txt id="jlwm8d"
Raw Response
↓
Compression (gzip/Brotli)
↓
Network transfer
↓
Browser decompresses
↓
Use resource
```

Compression reduces transfer cost massively.

---

# Real Next.js Connection

This is why:

- minimizing bundle size matters
- tree shaking matters
- code splitting matters
- dynamic imports matter
- Server Components matter

Everything ultimately reduces transferred bytes.

---
