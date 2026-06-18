# PHASE 6 — REACT INTERNALS & UI ENGINEERING

> The DOM is powerful.
>
> The DOM is also painful.
>
> React exists because updating user interfaces manually does not scale.

---

# Why This Phase Exists

Before React, frontend engineers built applications using:

```javascript
document.createElement();
appendChild();
removeChild();
querySelector();
```

This works for:

```text
Small Websites
```

It breaks down for:

```text
Gmail
Notion
WhatsApp
Figma
Linear
Phunsuk
```

As applications become more interactive:

- State increases
- UI complexity increases
- DOM updates increase
- Bugs increase

The problem isn't rendering.

The problem is:

```text
Managing State Changes
```

React was invented to solve that problem.

---

# The Fundamental Question

Imagine a counter:

```text
Count: 0
```

User clicks:

```text
+
```

Now:

```text
Count: 1
```

Questions:

- What changed?
- What should update?
- How do we update efficiently?
- How do we avoid updating everything?

React exists to answer those questions.

---

# Learning Objectives

By the end of this phase you should understand:

- Why React exists
- Component architecture
- Declarative UI
- State management
- Rendering
- Reconciliation
- Fiber architecture
- Concurrent rendering
- Server Components
- React performance

---

# Mental Model

Most developers think:

```text
React
=
UI Library
```

Partially true.

React is actually:

```text
State Engine
+
Rendering Engine
+
Scheduling Engine
```

Its job is:

```text
Application State
↓
UI Description
↓
Efficient DOM Updates
```

---

# PHASE ROADMAP

---

# 6.1 Why React Exists

Topics:

- Manual DOM manipulation
- UI complexity explosion
- State synchronization problems

Questions:

Why wasn't vanilla JavaScript enough?

---

# 6.2 Declarative UI

Traditional approach:

```javascript
if (loggedIn) {
  showDashboard();
}
```

React approach:

```jsx
return loggedIn ? <Dashboard /> : <Login />;
```

Questions:

What does declarative mean?

Why is it powerful?

---

# 6.3 What Is JSX?

Topics:

```jsx
<Component />
```

Questions:

Is JSX HTML?

(No.)

What does JSX compile into?

---

# 6.4 React Elements

Topics:

```jsx
<div>Hello</div>
```

Questions:

What is actually created?

What is a React Element?

---

# 6.5 Components

Topics:

```jsx
function UserCard() {}
```

Questions:

Why divide UIs into components?

---

# 6.6 Component Architecture

Topics:

- Composition
- Reusability
- Encapsulation

Questions:

How do large applications scale?

---

# 6.7 Props

Topics:

```jsx
<User name="Aariv" />
```

Questions:

How does data move between components?

---

# 6.8 One-Way Data Flow

Topics:

Parent → Child

Questions:

Why is React predictable?

---

# 6.9 State

Most important React concept.

Topics:

```jsx
useState();
```

Questions:

What is UI state?

Why is state difficult?

---

# 6.10 State Updates

Topics:

- Immutable updates
- State transitions

Questions:

Why should state never be mutated?

---

# 6.11 React Rendering

Topics:

- Initial render
- Re-render

Questions:

What triggers rendering?

---

# 6.12 Reconciliation

Critical topic.

Topics:

Comparing trees

Questions:

How does React determine changes?

---

# 6.13 Virtual DOM

Topics:

Virtual representations

Questions:

What is Virtual DOM?

Why was it created?

---

# 6.14 Diffing Algorithm

Topics:

Tree comparison

Questions:

How does React find minimal updates?

---

# 6.15 Keys

Topics:

```jsx
key = {};
```

Questions:

Why do lists need keys?

What happens without them?

---

# 6.16 Event System

Topics:

Synthetic Events

Questions:

Why doesn't React use browser events directly?

---

# 6.17 React Hooks

Topics:

Hook architecture

Questions:

Why were hooks invented?

---

# 6.18 useState Deeply

Topics:

State queues
Updates
Batching

Questions:

What actually happens internally?

---

# 6.19 useEffect

Topics:

Effects

Questions:

Why do effects exist?

Why do they cause bugs?

---

# 6.20 Dependency Arrays

Topics:

Reactivity

Questions:

How does React know when to rerun effects?

---

# 6.21 Cleanup Functions

Topics:

Resource management

Questions:

How do we prevent memory leaks?

---

# 6.22 useRef

Topics:

Persistent references

Questions:

How can values survive renders?

---

# 6.23 useMemo

Topics:

Memoization

Questions:

When should computations be cached?

---

# 6.24 useCallback

Topics:

Function memoization

Questions:

Why do function identities matter?

---

# 6.25 Custom Hooks

Topics:

Logic abstraction

Questions:

How do teams share behavior?

---

# 6.26 Context API

Topics:

Global state sharing

Questions:

How do we avoid prop drilling?

---

# 6.27 Reducers

Topics:

```jsx
useReducer();
```

Questions:

How do complex state systems work?

---

# 6.28 React Lifecycle

Topics:

Mount
Update
Unmount

Questions:

What is the lifecycle of a component?

---

# 6.29 Error Boundaries

Topics:

Failure isolation

Questions:

How does React survive crashes?

---

# 6.30 Forms In React

Topics:

Controlled Components
Uncontrolled Components

Questions:

How should forms be managed?

---

# 6.31 Refs & DOM Access

Topics:

Imperative access

Questions:

When should React touch the DOM?

---

# 6.32 React Fiber

The most important React topic.

Topics:

Fiber Nodes

Questions:

What replaced the old React architecture?

Why?

---

# 6.33 Fiber Architecture

Topics:

Work units

Questions:

Why can React pause rendering?

---

# 6.34 Scheduling

Topics:

Prioritization

Questions:

How does React decide what to render first?

---

# 6.35 Concurrent Rendering

Topics:

Interruptible rendering

Questions:

Why is React 18 different?

---

# 6.36 Automatic Batching

Topics:

Update grouping

Questions:

Why are multiple updates fast?

---

# 6.37 Suspense

Topics:

Loading boundaries

Questions:

Why was Suspense invented?

---

# 6.38 Lazy Loading

Topics:

Code splitting

Questions:

Why load code later?

---

# 6.39 React Profiler

Topics:

Performance analysis

Questions:

Why is a component slow?

---

# 6.40 Memoization

Topics:

```jsx
React.memo();
```

Questions:

When should rendering be skipped?

---

# 6.41 Render Optimization

Topics:

Avoiding unnecessary renders

Questions:

Why do applications become slow?

---

# 6.42 React Query Concepts

Not the library.

The concept.

Topics:

- Server State
- Client State

Questions:

Why are they different?

---

# 6.43 React Architecture Patterns

Topics:

- Smart Components
- Presentational Components
- Composition

Questions:

How do large React applications scale?

---

# 6.44 Testing React

Topics:

Component testing

Questions:

How do we trust UI behavior?

---

# 6.45 Accessibility In React

Topics:

Semantic rendering

Questions:

Can React apps remain accessible?

---

# 6.46 React Server Components

Future architecture.

Topics:

Server Components

Questions:

Why move rendering back to servers?

---

# 6.47 Client Components

Topics:

Interactivity

Questions:

What truly requires JavaScript?

---

# 6.48 React Compiler

Future-focused engineering.

Topics:

Automatic optimization

Questions:

Can React optimize itself?

---

# 6.49 Building Your Own React

Topics:

Virtual DOM
Diffing
Hooks

Questions:

How difficult is React really?

---

# 6.50 React Systems Engineering

Topics:

Putting everything together

Questions:

How do companies like:

- Meta
- Airbnb
- Stripe
- Linear

build React applications serving millions?

---

# Completion Project

Build:

```text
Mini React Clone
```

Features:

```text
JSX Support
Virtual DOM
Diffing
Component System
useState
useEffect
Basic Scheduler
```

Restrictions:

```text
No React
No Preact
No Frameworks
```

Build it yourself.

---

# Bonus Project

Build:

```text
Mini Figma UI Engine
```

Using:

```text
React
Canvas
State Management
```

Goal:

Understand React's rendering model deeply.

---

# Success Criteria

You can confidently answer:

1. Why does React exist?
2. What is declarative UI?
3. What is JSX?
4. What is a React Element?
5. What is State?
6. What triggers rendering?
7. What is Reconciliation?
8. What is the Virtual DOM?
9. Why are keys important?
10. Why do hooks exist?
11. How does useState work internally?
12. Why does useEffect exist?
13. What is React Fiber?
14. What is Concurrent Rendering?
15. What is Suspense?
16. What is Automatic Batching?
17. What is a Server Component?
18. What is a Client Component?
19. How does React optimize rendering?
20. Why is React fundamentally a state management problem disguised as a UI library?

If you can answer those questions from first principles, React stops being a framework you use and becomes a system you understand.

At that point, learning any future UI framework becomes straightforward because you understand the underlying problems React was built to solve.
