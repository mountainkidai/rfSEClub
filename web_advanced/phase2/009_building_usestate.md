# Building `useState()` From Scratch

> **Core Idea**
>
> Before understanding React's `useState()`, let's build a tiny version ourselves.
>
> We won't build all of React.
>
> We'll only solve one problem:
>
> **"How can a function remember a value between executions?"**

---

# Let's Forget React Exists

Imagine React never existed.

You only have JavaScript.

You want to build a counter.

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

Because every time the function runs...

```text
Counter()

↓

count = 0

↓

Function Ends

↓

Memory Destroyed
```

Then...

```text
Counter()

↓

count = 0

↓

Function Ends

↓

Memory Destroyed
```

The variable lives **inside** the function.

When the function finishes...

the variable disappears.

---

# First Principle

A function cannot remember local variables after it finishes executing.

Every function call starts fresh.

Think of it like a whiteboard.

```text
Run Counter()

↓

Write

count = 0

↓

Erase Whiteboard
```

Run it again...

```text
Run Counter()

↓

Write

count = 0

↓

Erase Whiteboard
```

Nothing survives.

---

# So Where Should Memory Live?

If memory disappears with the function...

then memory must live...

**outside** the function.

Instead of

```text
Counter

┌─────────────┐
│ count = 0   │
└─────────────┘
```

Let's move it outside.

```javascript
let memory = 0;

function Counter() {
  console.log(memory);
}

Counter();
```

Output

```text
0
```

Now the memory survives.

Why?

Because it isn't inside the function anymore.

---

# Can We Update It?

Sure.

```javascript
let memory = 0;

function Counter() {
  console.log(memory);

  memory++;
}

Counter();
Counter();
Counter();
```

Output

```text
0
1
2
```

Interesting.

Now the function remembers something.

Not because the function changed.

Because the memory lives outside.

---

# But This Isn't Flexible

Imagine another counter.

```javascript
let memory = 0;

function CounterA() {}

function CounterB() {}
```

Now both counters share the same memory.

That's bad.

Each component should have its own memory.

We need something smarter.

---

# Let's Build a Tiny State Manager

Instead of one variable...

let's create a function that owns memory.

```javascript
function createState(initialValue) {
  let value = initialValue;

  function getValue() {
    return value;
  }

  function setValue(newValue) {
    value = newValue;
  }

  return {
    getValue,
    setValue,
  };
}
```

Now let's use it.

```javascript
const counter = createState(0);

console.log(counter.getValue());

counter.setValue(5);

console.log(counter.getValue());
```

Output

```text
0
5
```

Something interesting happened.

The variable `value` survived...

even after `createState()` finished.

How?

---

# Closures

Normally...

local variables disappear.

```text
Function Runs

↓

Variables Created

↓

Function Ends

↓

Variables Destroyed
```

But JavaScript has a special feature called a **closure**.

If another function still needs a variable...

JavaScript keeps it alive.

```text
createState()

↓

value = 0

↓

Returns getValue()

↓

getValue() still uses value

↓

JavaScript keeps value alive
```

The function finished.

But the memory survived.

---

# Visualizing It

```text
createState()

        │

        ▼

value = 0

        │

        ▼

Returns

getValue()

setValue()

        │

        ▼

JavaScript keeps

value

alive
```

This is one of JavaScript's most powerful features.

---

# React Uses The Same Idea

React does something conceptually similar.

Instead of

```text
value
```

React stores

```text
count
```

Instead of

```text
getValue()
```

React simply gives you

```text
count
```

Instead of

```text
setValue()
```

React gives you

```text
setCount()
```

Conceptually...

our code

```javascript
const counter = createState(0);

counter.getValue();

counter.setValue(10);
```

becomes

```tsx
const [count, setCount] = useState(0);
```

React's API is simply nicer.

---

# Let's Improve Our API

Instead of

```javascript
counter.getValue();
```

let's return the value directly.

```javascript
function createState(initialValue) {
  let value = initialValue;

  function setValue(newValue) {
    value = newValue;
  }

  return [() => value, setValue];
}
```

Or conceptually...

```javascript
function useState(initialValue) {
  let value = initialValue;

  function setValue(newValue) {
    value = newValue;
  }

  return [value, setValue];
}
```

This starts looking familiar.

```javascript
const [count, setCount] = useState(0);
```

---

# But There Is One Huge Problem...

Try this.

```javascript
let counter = useState(0);

counter[1](10);

counter = useState(0);
```

What happens?

The value becomes...

```text
0
```

Again.

Everything resets.

Why?

Because every time `useState()` runs...

it creates brand new memory.

Our tiny implementation still isn't solving the real problem.

---

# What React Actually Does

React never stores state inside your component.

It stores state inside React itself.

```text
Component

↓

useState()

↓

React Memory

↓

Current State
```

Every time your component runs...

React looks up the existing state instead of creating new state.

That's why your counter remembers its value between renders.

---

# Mental Model

Don't think of `useState()` as creating memory.

Think of it as asking React:

> "Can I have my state back?"

React checks its internal memory...

finds your state...

and returns it.

```text
Component

↓

useState()

↓

React Memory

↓

[count, setCount]
```

Your component never owns the state.

React does.

---

# Key Takeaways

- Local variables disappear when a function finishes.
- Persistent memory must live outside the function.
- JavaScript closures allow variables to survive after a function returns.
- We can build a tiny version of state using closures.
- React builds on the same idea but stores state inside React instead of inside your component.
- `useState()` is simply the API that lets your component access React's internal state.

---

# Coming Up Next

Our tiny implementation still has one major flaw.

When we call `setValue()`, the UI doesn't automatically update.

React somehow knows **when to render again**.

How?

That's exactly what we'll learn next:

> **Why doesn't `setState()` update immediately?**
