# PHASE 3 — JAVASCRIPT RUNTIME ENGINEERING

> HTML gives meaning.
>
> CSS gives appearance.
>
> JavaScript gives behavior.

But JavaScript is much more than a scripting language.

JavaScript is:

```text
A Runtime System
```

Understanding JavaScript is not about learning syntax.

It is about understanding:

```text
Execution
Memory
Concurrency
Events
Objects
Modules
Runtime Architecture
```

Most developers learn:

```javascript
const user = "Aariv";
```

Very few understand:

```text
How this variable exists in memory.
```

That difference separates framework users from engineers.

---

# Why This Phase Exists

Most frontend developers learn React before learning JavaScript.

This creates engineers who know:

```javascript
useState();
useEffect();
useMemo();
```

but cannot explain:

```text
Closures
Execution Context
this
Event Loop
Prototypes
```

React is built on JavaScript.

Next.js is built on React.

Therefore:

```text
JavaScript
↓
React
↓
Next.js
```

Not the other way around.

---

# The Fundamental Question

When JavaScript executes:

```javascript
function add(a, b) {
  return a + b;
}

add(5, 10);
```

What actually happens?

Questions:

- Where is the function stored?
- Where do variables live?
- How is memory allocated?
- How is code executed?
- Who runs the code?

Answering those questions is the purpose of this phase.

---

# Learning Objectives

By the end of this phase you should understand:

- JavaScript architecture
- Memory management
- Execution contexts
- Scope
- Closures
- Objects
- Prototypes
- Async programming
- Event loop
- Modules
- Runtime optimization
- Browser integration

---

# Mental Model

JavaScript is not:

```text
A language
```

JavaScript is:

```text
Language
+
Runtime
+
Memory Model
+
Execution Engine
```

The browser provides:

```text
JavaScript Engine
+
Web APIs
```

Together they create modern web applications.

---

# PHASE ROADMAP

---

# 3.1 What Is JavaScript?

## Topics

- History
- ECMAScript
- Browser scripting
- Runtime environments

Questions:

Why was JavaScript created?

Why does it still dominate frontend?

---

# 3.2 JavaScript Engines

Topics:

- V8
- SpiderMonkey
- JavaScriptCore

Questions:

Who executes JavaScript?

How does a browser run code?

---

# 3.3 Parsing & Compilation

Topics:

- Tokenization
- AST
- Parsing
- Bytecode

Flow:

```text
Source Code
↓
Tokens
↓
AST
↓
Bytecode
↓
Execution
```

Questions:

How does text become executable code?

---

# 3.4 JIT Compilation

Topics:

- Interpreters
- Compilers
- Just-In-Time Compilation

Questions:

Why is modern JavaScript fast?

How does V8 optimize code?

---

# 3.5 Values & Types

Topics:

```javascript
number;
string;
boolean;
null;
undefined;
symbol;
bigint;
object;
```

Questions:

What is a value?

What is a type?

---

# 3.6 Variables

Topics:

```javascript
var
let
const
```

Questions:

What is variable binding?

What is mutability?

When should each be used?

---

# 3.7 Memory Fundamentals

Topics:

- RAM
- Memory allocation
- References
- Addresses

Questions:

Where does data live?

How does JavaScript use memory?

---

# 3.8 Stack vs Heap

Topics:

```text
Stack
Heap
```

Questions:

Where are primitives stored?

Where are objects stored?

Why?

---

# 3.9 Primitive Values

Topics:

```javascript
string;
number;
boolean;
null;
undefined;
symbol;
bigint;
```

Questions:

Why are primitives immutable?

---

# 3.10 Reference Values

Topics:

```javascript
Object;
Array;
Function;
```

Questions:

What is a reference?

Why does object mutation happen?

---

# 3.11 Garbage Collection

Topics:

- Reachability
- Mark and Sweep
- Memory cleanup

Questions:

Why don't we free memory manually?

How does JavaScript avoid leaks?

---

# 3.12 Execution Context

The most important JavaScript topic.

Topics:

- Global context
- Function context
- Creation phase
- Execution phase

Questions:

What happens before code executes?

---

# 3.13 Scope

Topics:

- Global scope
- Function scope
- Block scope

Questions:

Where can variables be accessed?

---

# 3.14 Lexical Environment

Topics:

- Environment records
- Scope chains

Questions:

How does JavaScript find variables?

---

# 3.15 Hoisting

Topics:

```javascript
var
let
const
function
```

Questions:

Why can functions be called before definition?

---

# 3.16 Functions

Topics:

- Declarations
- Expressions
- Parameters
- Return values

Questions:

Why are functions special?

---

# 3.17 First-Class Functions

Topics:

- Passing functions
- Returning functions

Questions:

Why are functions objects?

---

# 3.18 Closures

One of the most important concepts.

Topics:

- Persistent state
- Lexical memory

Questions:

How does React state work?

How do callbacks work?

---

# 3.19 The `this` Keyword

Topics:

```javascript
this;
```

Questions:

What determines `this`?

Why does it confuse developers?

---

# 3.20 Arrow Functions

Topics:

```javascript
() => {};
```

Questions:

Why were arrow functions introduced?

How do they affect `this`?

---

# 3.21 Objects

Topics:

- Properties
- Methods
- Dynamic structure

Questions:

What is an object?

---

# 3.22 Arrays

Topics:

- Internal behavior
- Iteration

Questions:

Why are arrays objects?

---

# 3.23 Destructuring

Topics:

```javascript
const { name } = user;
```

Questions:

Why does modern JavaScript use destructuring?

---

# 3.24 Spread & Rest

Topics:

```javascript
...
```

Questions:

How are immutable updates performed?

---

# 3.25 Prototypes

The topic most developers never truly learn.

Topics:

- Prototype chain
- Inheritance

Questions:

How does JavaScript inheritance work?

---

# 3.26 Classes

Topics:

```javascript
class User {}
```

Questions:

Are classes real?

Or syntax sugar?

---

# 3.27 Error Handling

Topics:

```javascript
try
catch
finally
throw
```

Questions:

How should failures be handled?

---

# 3.28 Concurrency Fundamentals

Topics:

- Single-threaded execution
- Asynchronous operations

Questions:

How can JavaScript do multiple things at once?

---

# 3.29 Call Stack

Topics:

- Function frames
- Stack growth

Questions:

How does execution flow?

---

# 3.30 Web APIs

Topics:

```javascript
fetch
setTimeout
DOM APIs
```

Questions:

Are Web APIs part of JavaScript?

(No.)

---

# 3.31 Event Loop

The second most important topic.

Topics:

- Event Loop Architecture

Questions:

How does async code work?

---

# 3.32 Task Queue

Topics:

```javascript
setTimeout;
events;
```

Questions:

When do callbacks execute?

---

# 3.33 Microtask Queue

Topics:

```javascript
Promise;
queueMicrotask;
```

Questions:

Why do Promises execute before timers?

---

# 3.34 Promises

Topics:

```javascript
Promise;
```

Questions:

Why were Promises invented?

---

# 3.35 Async/Await

Topics:

```javascript
async
await
```

Questions:

Why is async/await easier to reason about?

---

# 3.36 Fetch API

Topics:

- HTTP requests
- Responses
- Streams

Questions:

How do applications communicate with servers?

---

# 3.37 Modules

Topics:

```javascript
import
export
```

Questions:

Why were modules introduced?

---

# 3.38 Module Resolution

Topics:

- ES Modules
- Dependency Graphs

Questions:

How does JavaScript find files?

---

# 3.39 Bundling

Topics:

- Bundlers
- Dependency Analysis

Questions:

Why do React apps require bundling?

---

# 3.40 Tree Shaking

Topics:

- Dead code elimination

Questions:

Why are modern bundles smaller?

---

# 3.41 Runtime Optimization

Topics:

- Hidden Classes
- Inline Caching

Questions:

Why is some JavaScript faster?

---

# 3.42 Memory Leaks

Topics:

- Detached DOM nodes
- Retained references

Questions:

Why do apps become slower over time?

---

# 3.43 Browser Integration

Topics:

- DOM APIs
- Event APIs

Questions:

How does JavaScript control webpages?

---

# 3.44 Security Fundamentals

Topics:

- XSS
- Injection
- Trusted input

Questions:

Why is user input dangerous?

---

# 3.45 JavaScript Architecture Patterns

Topics:

- Functional Programming
- Immutability
- Composition

Questions:

How should large systems be structured?

---

# 3.46 Modern JavaScript Engineering

Topics:

- Maintainability
- Scalability
- Readability

Questions:

How do large teams write JavaScript?

---

# Completion Project

Build:

```text
Mini Reactive UI Framework
```

Features:

```text
State System
Event System
DOM Updates
Component Rendering
Template Engine
```

Restrictions:

```text
No React
No Vue
No Frameworks
```

Build your own.

The goal is to understand why React exists.

---

# Bonus Project

Build:

```text
Mini JavaScript Runtime Visualizer
```

Visualize:

```text
Call Stack
Task Queue
Microtask Queue
Event Loop
```

in real time.

---

# Success Criteria

You can confidently answer:

1. What is a JavaScript engine?
2. What is the AST?
3. What is JIT compilation?
4. What is the Stack?
5. What is the Heap?
6. What is Garbage Collection?
7. What is an Execution Context?
8. What is Scope?
9. What is a Closure?
10. What is `this`?
11. What is a Prototype?
12. What is the Event Loop?
13. What are Microtasks?
14. What are Promises?
15. Why does async/await work?
16. What are Modules?
17. Why do bundlers exist?
18. Why does React rely on closures?
19. Why does React rely on JavaScript's event system?
20. Why can JavaScript power applications serving millions of users?

If you can answer those questions from first principles, React will stop feeling magical and start feeling inevitable.
