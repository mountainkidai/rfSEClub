# 1. Why State Exists

> **Goal**
>
> Before learning `useState()`, we need to answer a more fundamental question:
>
> **Why does React need state at all?**
>
> To answer that, we first need to understand how JavaScript functions work.

---

# Every React Component is Just a Function

Earlier we learned that React components are nothing special.

This component:

```tsx
function Counter() {
  return <button>0</button>;
}
```

is just another JavaScript function.

React eventually executes it like this:

```js
Counter();
```

Nothing magical happens.

The browser simply executes a JavaScript function.

---

# Let's Watch What Actually Happens

Imagine React wants to display your component.

The execution looks like this.

```text
React
   │
   ▼
Counter()
   │
   │ JavaScript starts executing the function
   ▼
Creates Local Memory
   │
   ▼
Executes Every Line
   │
   ▼
Returns React Elements
   │
   ▼
Function Ends
   │
   ▼
Local Memory Destroyed
```

Notice the last step.

> **The function is gone.**

Everything inside it disappears.

---

# Let's Prove It With Normal JavaScript

Suppose we write:

```javascript
function calculateTotal() {
  let price = 100;
  let tax = 18;

  let total = price + tax;

  return total;
}
```

Now let's visualize the execution.

```text
calculateTotal()

        │
        ▼
Creates Local Memory

price = ?
tax = ?
total = ?

        │
        ▼
Assign Values

price = 100
tax = 18

        │
        ▼
Compute

total = 118

        │
        ▼
Return 118

        │
        ▼
Function Ends

        │
        ▼
Memory Released

price ❌
tax ❌
total ❌
```

The variables do **not** exist anymore.

---

# Why?

Because local variables live on the **Call Stack**.

When a function is called, JavaScript creates a **Stack Frame**.

```text
Call Stack

┌──────────────────────────┐
│ calculateTotal()         │
│                          │
│ price = 100              │
│ tax = 18                 │
│ total = 118              │
└──────────────────────────┘
```

When the function returns...

```text
Call Stack

(empty)
```

The stack frame is removed.

Everything inside it disappears.

This happens for **every JavaScript function**.

---

# React Components Follow Exactly the Same Rule

Now consider this component.

```tsx
function Counter() {
  let count = 0;

  return <button>{count}</button>;
}
```

Let's trace the execution.

```text
React
   │
   ▼
Counter()
   │
   ▼
Create Stack Frame

count = ?

   │
   ▼
count = 0

   │
   ▼
Return React Element

<button>0</button>

   │
   ▼
Function Ends

   │
   ▼
Stack Frame Destroyed

count ❌
```

The variable no longer exists.

---

# But Wait...

Imagine the user clicks the button.

You expect this.

```text
count

0

↓

1

↓

2

↓

3
```

But where is `count`?

The function already finished.

Its memory was already destroyed.

There is literally nothing left to update.

---

# React Renders Again

When React needs fresh UI, it doesn't "continue" the previous function.

Instead, it executes the component **again**.

```text
React
   │
   ▼
Counter()

(New Function Execution)

   │
   ▼
Creates Brand New Stack Frame

count = ?

   │
   ▼
count = 0
```

Notice something important.

React did **not** recover the previous variable.

JavaScript simply executed

```javascript
let count = 0;
```

again.

---

# Why Local Variables Cannot Store UI Data

Suppose the user clicks five times.

React performs five renders.

Internally, JavaScript sees this.

```text
Render #1

Counter()

count = 0

Destroyed

────────────────────────

Render #2

Counter()

count = 0

Destroyed

────────────────────────

Render #3

Counter()

count = 0

Destroyed

────────────────────────

Render #4

Counter()

count = 0

Destroyed

────────────────────────

Render #5

Counter()

count = 0

Destroyed
```

Every render starts from scratch.

Nothing survives.

---

# So Where Should React Store the Count?

It cannot store it inside the component.

The component disappears.

Therefore React stores it somewhere else.

Think of React as owning a notebook.

```text
                React

        ┌──────────────────────┐
        │                      │
        │   Internal Memory    │
        │                      │
        │ Counter → 5          │
        │ Theme → Dark         │
        │ User → Aariv         │
        │                      │
        └──────────────────────┘
```

Now every time the component executes...

```text
React
   │
   ▼
Counter()
   │
   ▼
"Need your count?"

React Notebook

Counter → 5

   │
   ▼
Returns 5
```

The component doesn't remember anything.

React does.

---

## A Complete Example

Let's build a simple counter.

```tsx
function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

Suppose the page loads for the very first time.

The entire rendering pipeline looks like this.

```text
You Write JSX
        │
        ▼
function Counter() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
}
        │
        ▼
Compiler (SWC / Babel)
        │
        │ Converts JSX into JavaScript
        ▼
function Counter() {
    const [count, setCount] = useState(0);

    return React.createElement(
        "button",
        {
            onClick: () => setCount(count + 1)
        },
        "Count: ",
        count
    );
}
        │
        ▼
React.createElement()
        │
        │ Creates React Element objects
        ▼
{
    type: "button",
    props: {
        onClick: fn,
        children: [
            "Count: ",
            0
        ]
    }
}
        │
        ▼
React Element Tree
        │
        │ React builds the UI tree
        ▼
Counter
   │
   ▼
button
   │
   ▼
"Count: 0"
        │
        ▼
React (Reconciliation)
        │
        │ First render
        │ Nothing to compare yet
        ▼
React DOM
        │
        │ Creates a real <button>
        ▼
Browser DOM
        │
        ▼
<button>
    Count: 0
</button>
        │
        ▼
Browser Rendering Engine
        │
        │ Layout
        │ Paint
        │ Composite
        ▼
Pixels on Screen
```

The user now sees

```text
Count: 0
```

---

## Now the User Clicks the Button

The user clicks.

```tsx
onClick={() => setCount(count + 1)}
```

Since

```text
count = 0
```

React receives

```tsx
setCount(1);
```

Notice something important.

The local variable **does not change**.

Instead, React updates its internal state.

```text
React Internal Memory

Before

Counter
└── count = 0

            │
            ▼

setCount(1)

            │
            ▼

After

Counter
└── count = 1
```

Once React updates its internal memory, it renders the component again.

---

## The Second Rendering Pipeline

```text
User Click
        │
        ▼
setCount(1)
        │
        ▼
React Updates Internal Memory
        │
        ▼
React Executes Counter()
        │
        ▼
useState()
        │
        │ Returns count = 1
        ▼
Counter Returns New JSX
        │
        ▼
Compiler
        │
        ▼
React.createElement()
        │
        ▼
New React Element Tree

button

"Count: 1"

        │
        ▼
React Reconciliation
        │
        │ Old Tree:
        │ Count: 0
        │
        │ New Tree:
        │ Count: 1
        │
        │ Only text changed
        ▼
React DOM
        │
        │ Updates text node only
        ▼
Browser DOM
        │
        ▼
Browser Rendering Engine
        │
        ▼
Updated Pixels
```

Now the browser displays

```text
Count: 1
```

---

## Notice What Never Changed

The component itself never stores anything.

Its only job is:

```text
Read State
      │
      ▼
Return UI
```

React's job is:

```text
Remember State
      │
      ▼
Execute Component Again
      │
      ▼
Compare Trees
      │
      ▼
Update DOM
```

The component is like a chef following a recipe.

React is like the restaurant manager who keeps track of all the ingredients.

Every time a customer places an order, the chef doesn't remember yesterday's ingredients.

The manager hands the chef the current ingredients, the chef prepares the meal, and hands it back.

React follows exactly the same idea.

Notice something very important.

The component is **not** responsible for remembering data.

Its job is only this:

```text
Read State
      │
      ▼
Return UI
```

React is responsible for this:

```text
Remember State
      │
      ▼
Call Component Again
      │
      ▼
Update Browser
```

This separation of responsibilities is one of the most fundamental design decisions in React.

Everything you learn about Hooks, rendering, reconciliation, memoization, Context, Redux, or Server Components is built on top of this single idea.

---

# Key Takeaways

- A React component is just a JavaScript function.
- JavaScript functions store variables in a temporary stack frame.
- When a function finishes, that stack frame is destroyed.
- Therefore, local variables cannot remember UI data.
- React solves this by storing state in its own internal memory.
- The component simply reads that memory every time it renders.

---

# 2. Functions Forget Everything

> **Core Idea**
>
> Every time React renders a component, it **calls the component function again from the beginning**.
>
> Since JavaScript functions forget everything after they finish executing, the component cannot remember any previous values by itself.

---

# Let's Forget React for a Moment

Before understanding React, let's understand how **every JavaScript function** behaves.

Consider this simple function.

```javascript
function greet() {
  let name = "Aariv";

  console.log(name);
}

greet();
```

Output:

```text
Aariv
```

Simple enough.

But here's the real question.

> **After `greet()` finishes, where is the variable `name`?**

Does JavaScript keep it somewhere?

No.

It no longer exists.

---

# Let's Visualize It

When JavaScript executes the function:

```javascript
greet();
```

Internally something like this happens.

```text
JavaScript Engine
        │
        ▼
Call greet()
        │
        ▼
Create Stack Frame
        │
        ▼
name = "Aariv"
        │
        ▼
console.log(name)
        │
        ▼
Return
        │
        ▼
Destroy Stack Frame
```

After the last step,

```text
name ❌
```

The variable is gone forever.

---

# Calling the Function Again

Suppose we call it twice.

```javascript
greet();
greet();
```

Many beginners imagine JavaScript doing this.

```text
name = "Aariv"

↓

Reuse name

↓

Print again
```

That is **not** what happens.

Instead JavaScript creates a completely new execution.

First call

```text
Call #1

Create Memory

name = "Aariv"

↓

Print

↓

Destroy Memory
```

Second call

```text
Call #2

Create Memory

name = "Aariv"

↓

Print

↓

Destroy Memory
```

These are two completely different executions.

---

# Another Example

Consider this function.

```javascript
function counter() {
  let count = 0;

  count++;

  console.log(count);
}
```

Now call it three times.

```javascript
counter();
counter();
counter();
```

What do you think the output is?

Many beginners expect

```text
1
2
3
```

But the actual output is

```text
1
1
1
```

Why?

Because every function call starts with

```javascript
let count = 0;
```

Again.

And again.

And again.

---

# Let's Watch the Execution

## First Call

```text
counter()

↓

count = 0

↓

count++

↓

count = 1

↓

Print 1

↓

Memory Destroyed
```

---

## Second Call

```text
counter()

↓

count = 0

↓

count++

↓

count = 1

↓

Print 1

↓

Memory Destroyed
```

---

## Third Call

```text
counter()

↓

count = 0

↓

count++

↓

count = 1

↓

Print 1

↓

Memory Destroyed
```

Nothing survives between function calls.

---

# React Components Behave Exactly the Same Way

Now look at this React component.

```tsx
function Counter() {
  let count = 0;

  return <button>{count}</button>;
}
```

Remember:

A component is just a function.

React eventually executes

```javascript
Counter();
```

Internally the execution looks like this.

```text
React
        │
        ▼
Counter()
        │
        ▼
Create Stack Frame
        │
        ▼
count = 0
        │
        ▼
Return React Elements
        │
        ▼
Destroy Stack Frame
```

After rendering,

```text
count ❌
```

The variable disappears.

---

# But React Renders Many Times

Suppose the component renders three times.

Maybe because:

- The user clicked a button.
- A parent component updated.
- State changed.
- Props changed.

React simply executes the function again.

```text
Render #1

Counter()

count = 0

Destroyed

────────────────────

Render #2

Counter()

count = 0

Destroyed

────────────────────

Render #3

Counter()

count = 0

Destroyed
```

Notice something important.

React is **not continuing** the previous execution.

It is starting a completely new execution every time.

---

# Why Doesn't React Resume the Previous Function?

Imagine React paused the function instead.

```text
Counter()

↓

Pause Here

↓

Resume Later
```

That would be incredibly difficult.

JavaScript functions aren't designed to pause forever and resume whenever the UI changes.

Instead, React follows a much simpler design.

```text
Need New UI?

↓

Execute Component Again

↓

Return New UI

↓

Throw Away Execution
```

Every render is completely independent.

---

# Think Like a Calculator

Imagine a calculator.

You type

```text
8 + 5
```

It calculates

```text
13
```

The calculation finishes.

Now you type

```text
20 × 4
```

Does the calculator continue the previous calculation?

No.

It starts a brand-new calculation.

React components work the same way.

Every render is a brand-new calculation.

---

# The Problem

Now think about a counter.

The user clicks.

```text
Count

0

↓

1

↓

2

↓

3
```

But if the component keeps starting from scratch...

```javascript
let count = 0;
```

How can it ever become

```text
3
```

It can't.

The value would always become

```text
0
```

every render.

This is the exact problem React had to solve.

---

# React Needs Memory Outside the Function

The function cannot remember.

So React stores the data somewhere else.

Instead of this

```text
Counter()

┌──────────────┐
│ count = 3    │
└──────────────┘
```

React uses this architecture.

```text
                React

        ┌────────────────────┐
        │                    │
        │ Internal Memory    │
        │                    │
        │ Counter → 3        │
        │                    │
        └─────────┬──────────┘
                  │
                  ▼
            Counter()
                  │
                  ▼
          Reads Current State
```

The component becomes temporary.

The data becomes permanent.

---

# Real-World Analogy

Imagine you're taking an exam.

The teacher gives you an answer sheet.

You write your answers.

After two hours,

the teacher collects the paper.

The classroom is empty again.

Tomorrow you take another exam.

Do you continue writing on yesterday's paper?

No.

The teacher gives you a brand-new sheet.

Each exam session is independent.

React renders work exactly like this.

Every render gets a brand-new execution.

---

# Mental Model

A React component is **not** a running program.

It's more like a machine that takes some inputs and produces some UI.

```text
Current State
        │
        ▼
Counter()
        │
        ▼
React Elements
```

React calls the machine whenever it needs new UI.

The machine doesn't remember previous executions.

React supplies the remembered data every time.

---

# Key Takeaways

- JavaScript functions forget all local variables after they return.
- Every function call creates a completely new execution.
- React components are ordinary JavaScript functions.
- Every React render is a brand-new function execution.
- Local variables cannot preserve UI data across renders.
- Therefore, React must store state outside the component.

---

# What's Next?

Now we understand **why components cannot remember anything**.

The next question is:

> **Where does React actually keep that memory, and how does a component access it?**

That's exactly what `useState()` solves.
