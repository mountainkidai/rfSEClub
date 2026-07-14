Perfect. This deserves to be written like a chapter from a systems programming book. We'll ignore Fiber, Hooks internals, priorities, etc., and build React from **first principles**.

---

# Chapter 1 — Building `useState` From Scratch

Before learning `useState`, forget React for a moment.

Imagine you're building your own UI library.

The question is simple:

> **How can a function remember something after it finishes executing?**

That's the entire problem `useState` solves.

---

# Step 1 — A normal JavaScript function has no memory

Suppose you write

```javascript
function Counter() {
  let count = 0;

  console.log(count);
}

Counter();
Counter();
Counter();
```

Output

```text
0
0
0
```

Why?

Because every time JavaScript calls

```javascript
Counter();
```

it creates a completely new function execution.

Think of it like this.

```
Counter()

↓

count = 0

↓

Function ends

↓

Everything disappears
```

Call it again.

```
Counter()

↓

count = 0

↓

Function ends

↓

Everything disappears
```

Every function call starts from scratch.

There is **no memory**.

---

# Step 2 — React needs memory

Imagine a button.

```jsx
function Counter() {
  let count = 0;

  return <button>{count}</button>;
}
```

The user clicks.

You want

```
0

↓

1

↓

2

↓

3
```

But your function always starts with

```javascript
let count = 0;
```

So this can never work.

React needs somewhere to store data that survives after the function finishes.

---

# Step 3 — React creates its own memory

Instead of storing state inside your component,

React stores it itself.

Imagine React starts like this.

```javascript
// React's private memory

let state = undefined;
```

Notice carefully.

This is **outside** your component.

Your component never owns it.

Think of it like a box.

```
React Memory

┌──────────────┐
│ state = ?    │
└──────────────┘
```

This box survives forever.

Unlike your component.

---

# Step 4 — React creates `useState`

Now imagine React writes

```javascript
// React's private memory

let state = undefined;

function useState(initialValue) {
  if (state === undefined) {
    state = initialValue;
  }

  return state;
}
```

This is obviously incomplete.

But let's understand it.

Suppose you write

```jsx
const count = useState(0);
```

First render

```
state = undefined
```

React checks

```javascript
if (state === undefined)
```

True.

So

```javascript
state = 0;
```

Now

React Memory

```
┌──────────────┐
│ state = 0    │
└──────────────┘
```

React returns

```javascript
0;
```

So your component receives

```javascript
count = 0;
```

---

# Step 5 — React needs a way to change the state

Reading isn't enough.

We also need to change it.

So React creates a function.

```javascript
let state = undefined;

function useState(initialValue) {
  if (state === undefined) {
    state = initialValue;
  }

  function setState(newValue) {
    state = newValue;
  }

  return [state, setState];
}
```

Now your component can write

```jsx
const [count, setCount] = useState(0);
```

Now React returns

```
count = 0

setCount = function
```

---

# Step 6 — But there is a problem

Suppose

```javascript
setCount(1);
```

React Memory becomes

```
┌──────────────┐
│ state = 1    │
└──────────────┘
```

But your UI still shows

```
0
```

Why?

Because changing memory doesn't automatically run your component again.

React must call your component again.

---

# Step 7 — React creates `render()`

Imagine React wrote

```javascript
function render() {
  Counter();
}
```

Now React changes

```javascript
setState(newValue){

    state = newValue;

    render();

}
```

Now everything works.

---

# First Render

React Memory

```
state = undefined
```

React calls

```javascript
render();
```

↓

```javascript
Counter();
```

↓

```javascript
useState(0);
```

↓

```
state = 0
```

React returns

```javascript
[0, setState];
```

Your component receives

```
count = 0
```

UI

```
0
```

---

# User clicks

User presses

```javascript
setCount(1);
```

React stores

```
React Memory

┌──────────────┐
│ state = 1    │
└──────────────┘
```

Then React calls

```javascript
render();
```

React runs

```javascript
Counter();
```

again.

Now

```javascript
useState(0);
```

checks

```javascript
state === undefined;
```

False.

So React ignores

```javascript
0;
```

and returns

```javascript
[1, setState];
```

Your component receives

```
count = 1
```

UI

```
1
```

---

# A huge realization

React never changed

```javascript
count;
```

It changed

```
React Memory
```

Then it simply called your component again.

Your component got a new snapshot.

That is the biggest idea behind React.

---

This is **Part 1**. The next part naturally builds on this by introducing the **Pending Update Queue**, explaining **why `setState` doesn't update immediately**, and then showing **how batching** and **`setCount(prev => prev + 1)`** work from first principles.

Excellent. Now that we understand **React Memory**, we can answer the biggest question most React developers have:

> **If React has the memory, why doesn't `setState()` update it immediately?**

This is where the **Pending Update Queue** comes in.

---

# Chapter 2 — Why `setState()` Doesn't Update State Immediately

In the previous chapter, we built a simple version of React.

It looked like this.

```javascript
// React's private memory

let state = undefined;

function useState(initialValue) {
  if (state === undefined) {
    state = initialValue;
  }

  function setState(newValue) {
    state = newValue;

    render();
  }

  return [state, setState];
}
```

This works.

But there is a huge problem.

---

# Step 1 — Imagine multiple updates

Suppose your component is

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  function click() {
    setCount(1);
    setCount(2);
    setCount(3);
  }
}
```

Using our implementation,

React would do

```text
setCount(1)

↓

Update React Memory

↓

Render

↓

setCount(2)

↓

Update React Memory

↓

Render

↓

setCount(3)

↓

Update React Memory

↓

Render
```

That means

```text
Render

↓

Render

↓

Render
```

Three renders.

---

# Step 2 — Why is that bad?

Rendering is expensive.

Every render means React must

```text
Run your component

↓

Create new JSX

↓

Compare old UI with new UI

↓

Update the DOM

↓

Browser paints the screen
```

Doing this three times is unnecessary.

The final UI is simply

```text
3
```

So React asks

> "Why render three times if I already know there are more updates coming?"

Instead, React waits.

---

# Step 3 — React introduces a Pending Update Queue

Instead of updating the state immediately,

React creates another piece of private memory.

```javascript
// React's private memory

let state = undefined;
let updateQueue = [];
```

Now React owns two things.

```text
React Memory

┌──────────────┐
│ state = ?    │
└──────────────┘


Pending Updates

┌──────────────┐
│              │
└──────────────┘
```

Think of the queue as a waiting room.

Updates go there first.

---

# Step 4 — React changes `setState()`

Instead of updating memory immediately,

React now stores the update.

```javascript
let state = undefined;
let updateQueue = [];

function useState(initialValue) {
  if (state === undefined) {
    state = initialValue;
  }

  function setState(update) {
    // Store the update.
    updateQueue.push(update);

    // Tell React:
    // "We need another render."

    scheduleRender();
  }

  return [state, setState];
}
```

Notice the difference.

Before

```javascript
state = newValue;
```

Now

```javascript
updateQueue.push(update);
```

Nothing changes yet.

---

# Step 5 — React Memory doesn't change immediately

Suppose

Current React Memory

```text
React Memory

┌──────────────┐
│ state = 0    │
└──────────────┘


Pending Updates

┌──────────────┐
│              │
└──────────────┘
```

User clicks

```javascript
setCount(1);
```

React stores

```text
React Memory

┌──────────────┐
│ state = 0    │
└──────────────┘


Pending Updates

┌──────────────┐
│      1       │
└──────────────┘
```

Notice

The memory is still

```text
0
```

React hasn't updated anything yet.

---

# Step 6 — Multiple updates

Now imagine

```javascript
setCount(1);
setCount(2);
setCount(3);
```

React stores

```text
React Memory

┌──────────────┐
│ state = 0    │
└──────────────┘


Pending Updates

┌──────────────┐
│      1       │
├──────────────┤
│      2       │
├──────────────┤
│      3       │
└──────────────┘
```

Notice

Still

```text
state = 0
```

Nothing has rendered yet.

---

# Step 7 — React schedules one render

React notices

```text
"There are pending updates."
```

It schedules **one render**, not three.

Conceptually

```javascript
function scheduleRender() {
  processPendingUpdates();

  render();
}
```

Real React waits until the current event finishes and batches updates together, but this is the basic idea.

---

# Step 8 — React processes the queue

Imagine React wrote

```javascript
function processPendingUpdates() {
  while (updateQueue.length > 0) {
    const update = updateQueue.shift();

    state = update;
  }
}
```

Current memory

```text
state = 0
```

Queue

```text
[1,2,3]
```

React removes

```text
1
```

Memory

```text
state = 1
```

Queue

```text
[2,3]
```

React removes

```text
2
```

Memory

```text
state = 2
```

Queue

```text
[3]
```

React removes

```text
3
```

Memory

```text
state = 3
```

Queue

```text
[]
```

Final React Memory

```text
React Memory

┌──────────────┐
│ state = 3    │
└──────────────┘
```

---

# Step 9 — React renders once

Only now does React call

```javascript
render();
```

↓

```javascript
Counter();
```

↓

```javascript
useState(0);
```

React returns

```javascript
[3, setState];
```

Your component receives

```javascript
count = 3;
```

UI

```text
3
```

Notice

There wasn't

```text
0

↓

1

↓

2

↓

3
```

There was

```text
0

↓

3
```

because React waited until all updates were processed.

---

# The biggest realization

There are now **three separate worlds**.

```text
                 YOUR COMPONENT

               Counter()

                    │
                    │ reads
                    ▼

             React Memory
        ┌──────────────────┐
        │ state = ?         │
        └──────────────────┘
                    ▲
                    │ updated from
                    │

          Pending Update Queue
      ┌────────────────────────┐
      │ 1                      │
      │ 2                      │
      │ 3                      │
      └────────────────────────┘
```

Your component **never updates the state directly**.

Instead:

1. Your component asks React to update the state.
2. React stores that request in the **Pending Update Queue**.
3. React processes all pending updates.
4. React updates **React Memory**.
5. React renders your component once with the latest state.

---

## What's next?

Now we can answer the question that confuses almost everyone:

```javascript
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

Why does this become `1`, while

```javascript
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
```

becomes `3`?

Once you understand the React Memory and Pending Update Queue, that difference becomes very straightforward.

Perfect. This is the chapter where everything finally clicks.

Up until now we learned:

- React owns the state.
- React stores updates in the Pending Update Queue.
- React processes the queue.
- React renders once.

Now let's answer the biggest question.

> **Why does this become `1`?**

```jsx
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

while this becomes `3`?

```jsx
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
```

---

# Chapter 3 — Why `setCount(count + 1)` Doesn't Work Three Times

Suppose React Memory looks like this.

```text
React Memory

┌──────────────┐
│ state = 0    │
└──────────────┘

Pending Updates

┌──────────────┐
│              │
└──────────────┘
```

React renders your component.

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  function click() {
    // ...
  }
}
```

React executes

```jsx
const [count, setCount] = useState(0);
```

and returns

```javascript
count = 0;
```

This value belongs to **this render only**.

Think of it as a **snapshot**.

```text
Current Render

count = 0
```

---

# What is a snapshot?

A snapshot is simply a copy of the state at the moment React rendered your component.

For this render,

```text
Current Render

count = 0
```

Even if React Memory changes later,

```text
React Memory

state = 5
```

your current render still has

```text
Current Render

count = 0
```

because JavaScript variables don't magically change while a function is running.

---

# Step 1 — First line

You click the button.

```jsx
setCount(count + 1);
```

Current Render

```text
count = 0
```

JavaScript evaluates

```javascript
count + 1;
```

before calling `setCount()`.

So JavaScript computes

```text
0 + 1

↓

1
```

React actually receives

```javascript
setState(1);
```

React stores

```text
Pending Updates

┌──────────────┐
│      1       │
└──────────────┘
```

Notice

React Memory has **not changed yet**.

```text
React Memory

state = 0
```

Current Render is still

```text
count = 0
```

---

# Step 2 — Second line

Next line

```jsx
setCount(count + 1);
```

Many beginners think

```text
count = 1
```

now.

But it isn't.

Why?

Because React hasn't rendered again.

This render is still running.

So JavaScript again evaluates

```javascript
count + 1;
```

Current Render

```text
count = 0
```

Result

```text
1
```

React receives

```javascript
setState(1);
```

Queue becomes

```text
Pending Updates

┌──────────────┐
│      1       │
├──────────────┤
│      1       │
└──────────────┘
```

Memory still

```text
state = 0
```

---

# Step 3 — Third line

Exactly the same.

```javascript
count + 1;
```

Current Render

```text
count = 0
```

Result

```text
1
```

Queue becomes

```text
Pending Updates

┌──────────────┐
│      1       │
├──────────────┤
│      1       │
├──────────────┤
│      1       │
└──────────────┘
```

React Memory

```text
state = 0
```

Current Render

```text
count = 0
```

---

# Notice what React actually received

Many people imagine React receives

```javascript
count + 1;
count + 1;
count + 1;
```

It doesn't.

JavaScript already evaluated those expressions.

React actually receives

```javascript
setState(1);
setState(1);
setState(1);
```

That's a huge difference.

---

# React processes the queue

Queue

```text
[1,1,1]
```

Current Memory

```text
state = 0
```

First update

```javascript
state = 1;
```

Memory

```text
state = 1
```

Second update

```javascript
state = 1;
```

Nothing changes.

Third update

```javascript
state = 1;
```

Nothing changes.

Final React Memory

```text
React Memory

┌──────────────┐
│ state = 1    │
└──────────────┘
```

React renders once.

Your component receives

```javascript
count = 1;
```

---

# Why does the callback work?

Now write

```jsx
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
```

Notice something completely different.

JavaScript does **not** execute

```javascript
prev + 1;
```

Instead,

JavaScript creates three function objects.

Think of each one as an instruction.

Instruction 1

```text
"When React is ready,
take the latest value
and add one."
```

Instruction 2

```text
"When React is ready,
take the latest value
and add one."
```

Instruction 3

```text
"When React is ready,
take the latest value
and add one."
```

React receives

```javascript
setState((prev) => prev + 1);
setState((prev) => prev + 1);
setState((prev) => prev + 1);
```

Queue

```text
Pending Updates

┌──────────────────────┐
│ prev => prev + 1     │
├──────────────────────┤
│ prev => prev + 1     │
├──────────────────────┤
│ prev => prev + 1     │
└──────────────────────┘
```

React Memory is still

```text
state = 0
```

---

# React processes the first update

React removes

```javascript
update = (prev) => prev + 1;
```

Current Memory

```text
state = 0
```

React executes

```javascript
state = update(state);
```

which becomes

```javascript
state = update(0);
```

Inside the function

```text
prev = 0
```

Returns

```text
1
```

Memory becomes

```text
state = 1
```

---

# React processes the second update

Queue still contains another function.

Current Memory

```text
state = 1
```

React executes

```javascript
state = update(1);
```

Inside

```text
prev = 1
```

Returns

```text
2
```

Memory becomes

```text
state = 2
```

---

# React processes the third update

Current Memory

```text
state = 2
```

React executes

```javascript
state = update(2);
```

Returns

```text
3
```

Memory becomes

```text
React Memory

┌──────────────┐
│ state = 3    │
└──────────────┘
```

Queue becomes empty.

---

# React renders once

Now React calls

```javascript
Counter();
```

React returns

```javascript
[3, setState];
```

Current Render

```text
count = 3
```

UI

```text
3
```

---

# The biggest realization

The difference is **who performs the calculation**.

### Value update

```jsx
setCount(count + 1);
```

**JavaScript** performs the calculation immediately.

React receives

```text
1
```

---

### Function update

```jsx
setCount((prev) => prev + 1);
```

**React** performs the calculation later.

React receives

```text
prev => prev + 1
```

When React processes the queue, it calls that function with the **latest value in React Memory**, not the stale `count` from the old render.

---

# Final Mental Model

Whenever you use `useState`, always picture these three boxes:

```text
                Current Render
          ┌────────────────────┐
          │ count = 0          │
          └────────────────────┘
                    │
                    │ read from
                    ▼

              React Memory
          ┌────────────────────┐
          │ state = 0          │
          └────────────────────┘
                    ▲
                    │ updated by
                    │

          Pending Updates Queue
      ┌──────────────────────────┐
      │ 1                        │
      │ or                       │
      │ prev => prev + 1         │
      └──────────────────────────┘
```

Everything in `useState` becomes much easier if you remember:

- **Current Render** is just a snapshot. It never changes while your component is executing.
- **React Memory** is the real source of truth. It survives across renders.
- **Pending Updates Queue** temporarily stores updates until React processes them.

That is the core mental model behind `useState`, batching, and functional updates. Once this clicks, hooks like `useReducer`, `useEffect`, and even React's internal Hook implementation become much easier to understand.
