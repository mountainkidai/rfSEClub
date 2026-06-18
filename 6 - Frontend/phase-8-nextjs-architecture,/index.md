# PHASE 8 — NEXT.JS ARCHITECTURE & FULLSTACK WEB SYSTEMS

> React solves UI.
>
> Next.js solves applications.

---

# Why This Phase Exists

React is excellent at:

```text id="s8u6h1"
Building User Interfaces
```

React is not designed to solve:

```text id="b0z4d5"
Routing
SEO
Streaming
Caching
Data Fetching
Server Rendering
Edge Computing
Deployment
```

As applications become larger:

```text id="ez5xlh"
Frontend
+
Backend
+
Infrastructure
```

begin to merge.

This is where Next.js enters.

Next.js is not:

```text id="1wlm6y"
A React Framework
```

Next.js is:

```text id="hzj3np"
A Web Application Operating System
```

It coordinates:

```text id="a4q2fz"
Browser
Server
Cache
Database
CDN
Edge
```

into a single system.

---

# The Fundamental Question

Imagine a user visits:

```text id="4l0psr"
phunsuk.ai/tours/spiti
```

Questions:

- Where is the page generated?
- Browser?
- Server?
- Edge?
- Cache?

How does data arrive?

How does HTML appear instantly?

How does the page remain interactive?

Answering those questions is the purpose of this phase.

---

# Learning Objectives

By the end of this phase you should understand:

- Why Next.js exists
- Fullstack architecture
- Server Components
- Client Components
- Routing systems
- Data fetching
- Caching
- Streaming
- Server Actions
- Edge Computing
- Production deployment

---

# Mental Model

Most developers think:

```text id="g9x5rv"
Next.js
=
React + Routing
```

Wrong.

Next.js is:

```text id="h4p6km"
Application Runtime
+
Server Runtime
+
Rendering Engine
+
Cache Engine
+
Deployment Platform
```

Its job is:

```text id="56f0p4"
Data
↓
Rendering
↓
Caching
↓
Delivery
↓
Interaction
```

---

# PHASE ROADMAP

---

# 8.1 Why Next.js Exists

Topics:

- React limitations
- SPA limitations
- SEO problems
- Performance problems

Questions:

Why wasn't React enough?

---

# 8.2 History of Rendering

Topics:

```text id="2w6t2g"
MPA
↓
SPA
↓
SSR
↓
Hybrid
```

Questions:

Why did frontend architectures evolve?

---

# 8.3 Next.js Architecture Overview

Topics:

```text id="z1nm5g"
Browser
Server
Database
Cache
CDN
```

Questions:

How does Next.js connect everything?

---

# 8.4 App Router

Most important Next.js feature.

Topics:

```text id="eyq3vl"
app/
```

Questions:

Why replace the Pages Router?

---

# 8.5 File-Based Routing

Topics:

```text id="3j5a6e"
page.tsx
layout.tsx
loading.tsx
error.tsx
```

Questions:

Why use files as routes?

---

# 8.6 Layout Architecture

Topics:

Nested Layouts

Questions:

Why shouldn't navigation rerender?

---

# 8.7 Route Groups

Topics:

```text id="1n48v4"
(route-group)
```

Questions:

How can routes share architecture?

---

# 8.8 Dynamic Routes

Topics:

```text id="w12x7g"
[id]
[slug]
```

Questions:

How do websites generate millions of pages?

---

# 8.9 Catch-All Routes

Topics:

```text id="u2z5x0"
[...slug]
```

Questions:

How do documentation systems work?

---

# 8.10 Parallel Routes

Topics:

Concurrent rendering

Questions:

How can multiple pages render simultaneously?

---

# 8.11 Intercepting Routes

Topics:

Modals
Overlays

Questions:

How do modern applications show modal pages?

---

# 8.12 Server Components

The most important Next.js topic.

Topics:

React Server Components

Questions:

Why move rendering to servers?

---

# 8.13 Client Components

Topics:

```tsx
"use client";
```

Questions:

What actually requires JavaScript?

---

# 8.14 Server vs Client Components

Questions:

Where should logic live?

Where should rendering happen?

---

# 8.15 Hydration

Critical topic.

Topics:

Hydration lifecycle

Questions:

Why does React need hydration?

---

# 8.16 Partial Hydration

Topics:

Selective interactivity

Questions:

Can applications ship less JavaScript?

---

# 8.17 Data Fetching Architecture

Topics:

```typescript
fetch();
```

Questions:

Where should data be fetched?

---

# 8.18 Request Memoization

Topics:

Automatic caching

Questions:

Why doesn't Next fetch repeatedly?

---

# 8.19 Fetch Cache

Topics:

Data caching

Questions:

How does Next reduce server load?

---

# 8.20 Revalidation

Topics:

```typescript
revalidate;
```

Questions:

How does stale data become fresh?

---

# 8.21 Cache Tags

Topics:

Tag-based invalidation

Questions:

How can specific content refresh?

---

# 8.22 Static Rendering

Topics:

SSG

Questions:

When should pages be pre-built?

---

# 8.23 Dynamic Rendering

Topics:

Request-time rendering

Questions:

When should pages be generated on demand?

---

# 8.24 Incremental Static Regeneration

Topics:

ISR

Questions:

Can pages be static and dynamic simultaneously?

---

# 8.25 Streaming

One of the most important web concepts.

Topics:

HTML streaming

Questions:

Why wait for everything?

---

# 8.26 Suspense Architecture

Topics:

Loading boundaries

Questions:

How does streaming work?

---

# 8.27 Loading UI

Topics:

```text
loading.tsx
```

Questions:

How do users perceive speed?

---

# 8.28 Error Boundaries

Topics:

```text
error.tsx
```

Questions:

How should failures be isolated?

---

# 8.29 Route Handlers

Topics:

```text
route.ts
```

Questions:

Can Next.js replace backend APIs?

---

# 8.30 API Design

Topics:

REST APIs

Questions:

How should frontend and backend communicate?

---

# 8.31 Server Actions

The future of fullstack React.

Topics:

```typescript
"use server";
```

Questions:

Why remove API boilerplate?

---

# 8.32 Form Actions

Topics:

Server-driven mutations

Questions:

How should forms behave?

---

# 8.33 Authentication Architecture

Topics:

Sessions
Cookies
Tokens

Questions:

How should users log in?

---

# 8.34 Authorization Architecture

Topics:

Permissions
Roles

Questions:

Who can access what?

---

# 8.35 Middleware

Topics:

Request interception

Questions:

How can requests be controlled globally?

---

# 8.36 Cookies

Topics:

Server-side cookies

Questions:

How does authentication work?

---

# 8.37 Headers

Topics:

Request metadata

Questions:

How can applications understand requests?

---

# 8.38 Search Params

Topics:

URL state

Questions:

How should URLs drive applications?

---

# 8.39 Metadata API

Topics:

SEO architecture

Questions:

How do search engines understand pages?

---

# 8.40 Open Graph

Topics:

Social sharing

Questions:

How do links generate previews?

---

# 8.41 Image Optimization

Topics:

```text
next/image
```

Questions:

Why are images expensive?

---

# 8.42 Font Optimization

Topics:

Font loading

Questions:

Why do fonts affect performance?

---

# 8.43 Script Optimization

Topics:

Third-party scripts

Questions:

How can JavaScript be loaded efficiently?

---

# 8.44 Edge Runtime

Critical topic.

Topics:

Edge Computing

Questions:

Why move compute closer to users?

---

# 8.45 CDN Architecture

Topics:

Global caching

Questions:

How does content reach users quickly?

---

# 8.46 Deployment Architecture

Topics:

Build pipeline

Questions:

What happens after `git push`?

---

# 8.47 Docker Deployment

Topics:

Containerization

Questions:

How does Next run outside Vercel?

---

# 8.48 Monorepo Architecture

Topics:

Turborepo
Shared packages

Questions:

How should large systems scale?

---

# 8.49 Fullstack Systems Design

Topics:

Frontend
Backend
Database
Cache

Questions:

How should entire products be designed?

---

# 8.50 Next.js Systems Engineering

Topics:

Putting everything together

Questions:

How do companies serve millions of users with small teams?

---

# Completion Project

Build:

```text id="u96wgs"
Phunsuk Production Platform
```

Features:

```text id="ybgt5f"
Tour Pages
Search
Authentication
Bookings
Payments
Admin Dashboard
Caching
Streaming
SEO
Image Optimization
```

Architecture:

```text id="n8kbh5"
Next.js
TypeScript
PostgreSQL
Rust APIs
Docker
```

Restrictions:

```text id="f9j04w"
No Firebase
No Supabase
No Low-Code Tools
```

Understand every layer.

---

# Bonus Project

Build:

```text id="e4hkql"
Mini Next.js Clone
```

Features:

```text id="t7htg4"
Routing
SSR
Static Generation
Layouts
Streaming
Server Components
```

Goal:

Understand why Next.js exists.

---

# Success Criteria

You can confidently answer:

1. Why does Next.js exist?
2. Why wasn't React enough?
3. What is the App Router?
4. What are Server Components?
5. What are Client Components?
6. What is Hydration?
7. What is Streaming?
8. What is ISR?
9. What is Revalidation?
10. What are Cache Tags?
11. What are Server Actions?
12. What are Route Handlers?
13. How does authentication work?
14. How does Edge Computing work?
15. How does a CDN work?
16. How does Next.js optimize images?
17. How does Next.js optimize fonts?
18. How does deployment work?
19. How should a production web platform be architected?
20. Why is Next.js fundamentally a distributed systems framework disguised as a frontend framework?

If you can answer those questions from first principles, Next.js stops being a collection of features and becomes what it truly is:

```text id="6gfj0z"
A platform for building globally distributed web applications.
```
