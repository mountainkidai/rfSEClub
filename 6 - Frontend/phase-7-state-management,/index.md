# PHASE 7 — STATE MANAGEMENT & CLIENT ARCHITECTURE

> Most frontend applications do not fail because of rendering.
>
> They fail because of state.

---

# Why This Phase Exists

A simple website has almost no state.

```text
Home Page
About Page
Contact Page
```

State is trivial.

But applications like:

- Gmail
- WhatsApp
- Notion
- Linear
- Figma
- Phunsuk
- Sari

contain enormous amounts of state.

Questions:

```text
Who is logged in?
What data is loaded?
What is loading?
What failed?
What changed?
What is cached?
What is unsaved?
What is offline?
What is syncing?
```

As applications grow:

```text
State Complexity
>
UI Complexity
```

Most developers think React is difficult.

React is easy.

State management is difficult.

---

# The Fundamental Question

Imagine a tourism booking application.

User:

```text
Searches Tour
↓
Views Tour
↓
Books Tour
↓
Pays
↓
Downloads Ticket
```

At every step:

```text
State Changes
```

The real challenge is not rendering.

The challenge is:

```text
Maintaining Consistent State
```

across the entire application.

---

# Learning Objectives

By the end of this phase you should understand:

- What state is
- Types of state
- State architecture
- State synchronization
- Caching
- Server state
- Client state
- State machines
- Real-time synchronization
- Offline-first state systems

---

# Mental Model

Most engineers think:

```text
State
=
Variables
```

Wrong.

State is:

```text
The Current Reality
Of The Application
```

State answers:

```text
What is true right now?
```

Everything else flows from that.

---

# PHASE ROADMAP

---

# 7.1 What Is State?

Topics:

- Application state
- UI state
- Data state

Questions:

Why does state exist?

Why is state difficult?

---

# 7.2 Types of State

Topics:

```text
Local State
Global State
Server State
URL State
Persistent State
Derived State
```

Questions:

Are all states equal?

(No.)

---

# 7.3 Local Component State

Topics:

```jsx
useState();
```

Questions:

When should state remain local?

---

# 7.4 Shared State

Topics:

Cross-component communication

Questions:

When does state need to be shared?

---

# 7.5 State Ownership

Critical topic.

Questions:

Who owns data?

Who should update data?

Who should consume data?

---

# 7.6 State Lifting

Topics:

```text
Child
↓
Parent
```

Questions:

Why does React encourage lifting state?

---

# 7.7 Prop Drilling

Topics:

Deep component trees

Questions:

Why is prop drilling painful?

---

# 7.8 Context API

Topics:

```jsx
createContext();
```

Questions:

When should Context be used?

When should it not?

---

# 7.9 Context Performance

Topics:

Re-render propagation

Questions:

Why can Context become slow?

---

# 7.10 Reducers

Topics:

```jsx
useReducer();
```

Questions:

Why model updates as actions?

---

# 7.11 Action-Based Architecture

Topics:

```text
Action
↓
Reducer
↓
State
```

Questions:

Why do enterprise systems prefer actions?

---

# 7.12 Immutable Updates

Topics:

```text
Mutation
vs
Immutability
```

Questions:

Why does React depend on immutability?

---

# 7.13 Derived State

Topics:

Computed data

Questions:

When should state not be stored?

---

# 7.14 State Normalization

Topics:

Entity structures

Questions:

How does Facebook manage large datasets?

---

# 7.15 Global State

Topics:

Application-wide data

Questions:

What truly belongs globally?

---

# 7.16 Redux

Historical context.

Topics:

Store
Actions
Reducers

Questions:

Why did Redux become popular?

---

# 7.17 Redux Toolkit

Topics:

Modern Redux

Questions:

Why did Redux evolve?

---

# 7.18 Zustand

Topics:

Minimal stores

Questions:

Why are modern state libraries simpler?

---

# 7.19 Jotai

Topics:

Atomic state

Questions:

Can state be composed?

---

# 7.20 Signals

Future architecture.

Topics:

Reactive systems

Questions:

Why are Signals becoming popular?

---

# 7.21 Server State

Most important concept.

Questions:

What if the state belongs to the server?

---

# 7.22 Client State vs Server State

Topics:

Ownership

Questions:

Who owns the truth?

---

# 7.23 Data Fetching Architecture

Topics:

Loading
Error
Success

Questions:

How should remote data be handled?

---

# 7.24 Caching Fundamentals

Topics:

Memory caches

Questions:

Why fetch data repeatedly?

---

# 7.25 Cache Invalidation

Topics:

Freshness

Questions:

One of the hardest problems in software:

```text
When is data stale?
```

---

# 7.26 TanStack Query Concepts

Not the library.

The architecture.

Topics:

```text
Fetch
Cache
Invalidate
Refetch
```

Questions:

Why does modern React prefer server-state libraries?

---

# 7.27 Optimistic Updates

Critical topic.

Topics:

Immediate UI updates

Questions:

Can the UI update before the server responds?

---

# 7.28 Pagination

Topics:

Data loading strategies

Questions:

How do applications handle millions of records?

---

# 7.29 Infinite Scrolling

Topics:

Progressive loading

Questions:

How do social media feeds work?

---

# 7.30 URL State

Topics:

Search Params

Questions:

Should application state live in URLs?

---

# 7.31 Form State

Topics:

Complex forms

Questions:

Why are forms difficult?

---

# 7.32 Persistent State

Topics:

Storage-backed state

Questions:

How does state survive refreshes?

---

# 7.33 Authentication State

Topics:

Users
Sessions
Tokens

Questions:

Who is logged in?

---

# 7.34 Authorization State

Topics:

Roles
Permissions

Questions:

What can users do?

---

# 7.35 Realtime State

Topics:

WebSockets

Questions:

How do collaborative systems update instantly?

---

# 7.36 Event-Driven Architecture

Topics:

Events
Subscriptions

Questions:

Can state changes trigger behavior?

---

# 7.37 Synchronization

Topics:

Multiple clients

Questions:

How do devices remain consistent?

---

# 7.38 Conflict Resolution

Topics:

Concurrent updates

Questions:

What if two users edit simultaneously?

---

# 7.39 Offline State

Topics:

Offline-first systems

Questions:

How do applications work without internet?

---

# 7.40 Background Sync

Topics:

Queue architecture

Questions:

How does data eventually synchronize?

---

# 7.41 State Machines

One of the most important engineering topics.

Topics:

Finite States

Questions:

Can applications enter invalid states?

---

# 7.42 XState Concepts

Topics:

Explicit state transitions

Questions:

Can software model reality more accurately?

---

# 7.43 Event Sourcing

Topics:

Event logs

Questions:

Can state be reconstructed from history?

---

# 7.44 CQRS Fundamentals

Topics:

Command vs Query

Questions:

Should reads and writes be separate?

---

# 7.45 Distributed State

Topics:

Multi-user systems

Questions:

How does Figma maintain consistency?

---

# 7.46 CRDT Fundamentals

Extremely important for future systems.

Topics:

Conflict-free Replicated Data Types

Questions:

Can users collaborate without conflicts?

---

# 7.47 Presence Systems

Topics:

```text
Online
Offline
Typing
Viewing
```

Questions:

How does collaboration software work?

---

# 7.48 State Architecture At Scale

Topics:

Application architecture

Questions:

How do companies manage state across millions of users?

---

# 7.49 State Engineering Patterns

Topics:

Best practices

Questions:

How do elite teams avoid state chaos?

---

# 7.50 State Systems Design

Topics:

Putting everything together

Questions:

How should state flow through a modern application?

---

# Completion Project

Build:

```text
Phunsuk Booking State Engine
```

Requirements:

```text
Authentication
Search
Booking Flow
Payment Flow
Caching
Offline Support
Optimistic Updates
Background Sync
Realtime Updates
```

Restrictions:

```text
No External State Library
```

Build using:

```text
React
Context
Reducers
Custom Architecture
```

---

# Bonus Project

Build:

```text
Mini Notion Collaboration Engine
```

Features:

```text
Realtime Editing
Presence
Conflict Resolution
Offline Support
Synchronization
```

Goal:

Understand collaborative state systems.

---

# Success Criteria

You can confidently answer:

1. What is state?
2. Why is state difficult?
3. What is local state?
4. What is global state?
5. What is server state?
6. Why is Context not a state manager?
7. Why does Redux exist?
8. What is Zustand?
9. What is caching?
10. What is cache invalidation?
11. What are optimistic updates?
12. What is URL state?
13. What is authentication state?
14. What is a state machine?
15. Why are state machines valuable?
16. What is CRDT?
17. How do collaborative applications work?
18. How do offline-first systems synchronize?
19. How do realtime systems manage consistency?
20. Why is state management the hardest frontend problem?

If you can answer those questions from first principles, you'll realize:

```text
Frontend Engineering
=
State Engineering
```

Rendering is the easy part.

Managing reality is the hard part.
