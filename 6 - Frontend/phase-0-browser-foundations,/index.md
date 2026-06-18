# PHASE 0 — BROWSER FOUNDATIONS

> Before React.
>
> Before Next.js.
>
> Before Tailwind.
>
> Before JavaScript.
>
> There is the Browser.

---

# Why This Phase Exists

Most frontend developers learn:

```text
HTML
CSS
JavaScript
React
Next.js
```

and can build applications.

Very few understand:

```text
How bytes become pixels.
```

Yet every frontend framework exists because browsers exist.

React is built on top of browser APIs.

Next.js is built on top of React.

Tailwind is built on top of CSS.

CSS is interpreted by a browser.

Everything eventually reaches the browser.

Therefore:

```text
Frontend Engineering
=
Browser Engineering
```

This phase teaches the browser from first principles.

---

# The Fundamental Question

When a user types:

```text
https://example.com
```

into a browser and presses Enter:

How does a screen full of pixels appear?

That single question leads to almost every topic in modern frontend engineering.

---

# Learning Objectives

By the end of this phase you should understand:

- Why browsers exist
- How browsers are structured internally
- How websites travel across the internet
- How HTML becomes a DOM tree
- How CSS becomes a CSSOM tree
- How layouts are calculated
- How pixels are painted
- How JavaScript interacts with pages
- Why rendering is expensive
- Why React exists
- Why Next.js exists
- Why performance matters

---

# Mental Model

A browser is not:

```text
A website viewer
```

A browser is:

```text
A specialized operating system
for rendering documents.
```

Modern browsers contain:

```text
Networking
Storage
Rendering Engine
JavaScript Engine
Security Sandbox
GPU Integration
Process Management
```

A browser is one of the most complex software systems ever built.

---

# PHASE ROADMAP

---

# 0.1 Why Browsers Exist

## Topics

- History of the web
- Static documents
- Hyperlinks
- Early browsers
- Browser wars
- Modern browsers

## Key Questions

Why was the browser invented?

Why didn't people simply download files?

Why does the web exist?

What problem did hyperlinks solve?

---

# 0.2 Browser Architecture

## Topics

- Browser process
- Renderer process
- GPU process
- Network process
- Utility processes
- Site isolation
- Multi-process architecture

## Mental Model

Modern browsers look like:

```text
Browser
├── UI Process
├── Network Process
├── GPU Process
├── Renderer Process
└── Utility Processes
```

Each tab is often its own process.

This improves:

- stability
- security
- performance

---

# 0.3 Journey of a Website

The most important lesson in this phase.

When a user visits:

```text
https://example.com
```

What happens?

Step-by-step:

```text
User enters URL
↓
DNS Lookup
↓
TCP Connection
↓
TLS Handshake
↓
HTTP Request
↓
Server Response
↓
HTML Download
↓
Browser Parsing
↓
Render Tree Creation
↓
Layout
↓
Paint
↓
Composite
↓
Pixels Appear
```

This single flow explains most frontend engineering.

---

# 0.4 URLs

## Topics

- URL structure
- Protocols
- Domains
- Paths
- Query parameters
- Fragments

Example:

```text
https://www.example.com/products?id=5#reviews
```

Break down every component.

Understand what each piece means.

---

# 0.5 DNS

## Topics

- Domain names
- DNS servers
- Recursive resolution
- Caching
- TTL

Mental model:

```text
DNS
=
Internet Phonebook
```

Turns:

```text
google.com
```

into:

```text
142.250.x.x
```

---

# 0.6 TCP

## Topics

- Connections
- Packets
- Reliability
- Ordering
- Retransmission
- Three-way handshake

Mental Model:

```text
TCP
=
Reliable Delivery Service
```

The internet can lose packets.

TCP ensures delivery.

---

# 0.7 TLS

## Topics

- Encryption
- Certificates
- Public key cryptography
- HTTPS

Questions:

Why is HTTPS secure?

How do browsers trust websites?

What is a certificate authority?

---

# 0.8 HTTP

## Topics

- Requests
- Responses
- Methods
- Headers
- Status codes

Methods:

```text
GET
POST
PUT
PATCH
DELETE
```

Status Codes:

```text
200
301
302
404
500
```

Every frontend engineer must know these cold.

---

# 0.9 Browser Networking

## Topics

- Connection pooling
- HTTP/2
- HTTP/3
- Multiplexing
- Keep alive

Questions:

Why is HTTP/2 faster?

Why was HTTP/3 created?

Why do websites feel faster today?

---

# 0.10 HTML Parsing

Browser receives:

```html
<h1>Hello World</h1>
```

What happens?

Topics:

- Tokenization
- Parsing
- DOM construction
- Incremental parsing

Output:

```text
DOM Tree
```

---

# 0.11 DOM

## Topics

- Nodes
- Elements
- Tree structure
- Parent/child relationships

Mental Model:

```text
DOM
=
Browser's in-memory representation
of a webpage
```

Not HTML.

HTML becomes DOM.

---

# 0.12 CSS Parsing

Topics:

- CSS parser
- Rule processing
- Selector matching

Output:

```text
CSSOM Tree
```

---

# 0.13 CSSOM

Mental Model:

```text
DOM
+
CSSOM
=
Render Tree
```

Topics:

- Style calculations
- Inheritance
- Specificity
- Computed styles

---

# 0.14 Render Tree

The browser combines:

```text
DOM
+
CSSOM
```

to create:

```text
Render Tree
```

Only visible elements participate.

This tree drives rendering.

---

# 0.15 Layout (Reflow)

Topics:

- Box model
- Position calculations
- Element sizing
- Layout engine

Questions:

How does the browser determine:

- width
- height
- position

for every element?

---

# 0.16 Paint

Topics:

- Paint instructions
- Text rendering
- Background rendering
- Borders
- Shadows

The browser decides:

```text
What to draw
```

---

# 0.17 Compositing

Topics:

- Layers
- GPU acceleration
- Compositor thread

The browser decides:

```text
How to draw efficiently
```

This is where modern performance comes from.

---

# 0.18 JavaScript Engine

Browsers are not just document renderers.

They are execution environments.

Topics:

- V8
- SpiderMonkey
- JavaScriptCore
- Parsing
- Compilation
- Execution

Questions:

How does JavaScript run?

Where does JavaScript live?

---

# 0.19 Browser Event System

Topics:

- Events
- Bubbling
- Capturing
- Propagation

Examples:

```text
click
keydown
scroll
mousemove
submit
```

React's event system is built on top of this.

---

# 0.20 Browser Storage

Topics:

- Cookies
- LocalStorage
- SessionStorage
- IndexedDB

Questions:

How do websites remember users?

How do logins survive refreshes?

---

# 0.21 Browser Security

Topics:

- Same Origin Policy
- CORS
- CSP
- Sandboxing
- XSS basics

Without security:

```text
The web would collapse.
```

---

# 0.22 Rendering Performance

Topics:

- Critical Rendering Path
- Reflow
- Repaint
- Layout Thrashing

Questions:

Why do websites become slow?

Why do animations stutter?

Why does Lighthouse complain?

---

# 0.23 Why React Exists

After learning the browser:

you discover a problem.

Updating the DOM manually becomes difficult.

React exists to solve:

```text
UI State Management
```

Topics:

- DOM manipulation problems
- Declarative UI
- Virtual DOM
- Component architecture

---

# 0.24 Why Next.js Exists

After learning React:

you discover another problem.

React alone does not solve:

- SEO
- Performance
- Streaming
- Routing
- Caching

Next.js exists to solve those.

Topics:

- SSR
- SSG
- Streaming
- Routing
- Caching

---

# Phase Completion Project

Build:

```text
Mini Browser Explorer
```

Features:

- Enter URL
- Inspect requests
- Inspect response headers
- Inspect HTML
- Inspect DOM
- Inspect CSS
- Analyze rendering path

Goal:

Understand every step between:

```text
URL
↓
Network
↓
HTML
↓
DOM
↓
Render Tree
↓
Pixels
```

---

# Success Criteria

You can confidently answer:

1. What happens when I type a URL?
2. What is DNS?
3. What is TCP?
4. What is TLS?
5. What is HTTP?
6. What is the DOM?
7. What is the CSSOM?
8. What is the Render Tree?
9. What is Layout?
10. What is Paint?
11. What is Compositing?
12. Why is rendering expensive?
13. Why does React exist?
14. Why does Next.js exist?
15. How do browsers turn bytes into pixels?

If you can answer those questions from first principles, every frontend framework becomes dramatically easier to understand.
