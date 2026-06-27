# 3. React Needs Memory

> **Core Idea**
>
> A React component is executed from the beginning every time React renders it.
>
> Since functions forget everything after execution, React needs a separate place to remember data between renders.

---

# Let's Start With What We Already Know

In the previous chapters, we learned that React renders UI like this.

```text
You Write JSX
        │
        ▼
Compiler (SWC / Babel)
        │
        ▼
React.createElement()
        │
        ▼
React Element Tree
        │
        ▼
React
(Reconciliation)
        │
        ▼
React DOM
        │
        ▼
Browser DOM
        │
        ▼
Browser Rendering Engine
        │
        ▼
Pixels on Screen
```

This pipeline explains **how React builds the UI**.

But now let's ask a different question.

> **Where does the value of `count` come from?**

Consider this component.

```tsx
function Counter() {
  const [count, setCount] = useState(0);

  return <button>Count: {count}</button>;
}
```

The browser eventually shows

```text
Count: 0
```

But where did that **0** come from?

Let's follow the entire execution.

---

# First Render

The user opens the page.

React starts rendering.

```text
Browser Opens Website
        │
        ▼
React Executes Counter()
```

React calls the component.

```tsx
Counter();
```

Now JavaScript begins executing the function.

---

# React Reaches useState()

The first line is

```tsx
const [count, setCount] = useState(0);
```

At this moment something special happens.

Unlike normal JavaScript functions,

React is now involved.

```text
Counter()
      │
      ▼
useState(0)
      │
      ▼
React Internal Memory
```

The component is asking React:

> "Do you already have a value for my state?"

---

# React Looks Inside Its Memory

Suppose this is the very first render.

React checks its internal memory.

```text
React Memory

Counter

❌ Nothing Found
```

Since no state exists yet,

React creates one.

```text
React Memory

Counter

count = 0
```

Notice carefully.

The component did **not** store the value.

React did.

---

# React Returns the Value

After storing it,

React returns

```text
Current Value

0

Setter Function

setCount()
```

So JavaScript receives

```tsx
const count = 0;
const setCount = /* React function */;
```

Now the component continues executing.

---

# Returning JSX

The next statement is

```tsx
return <button>Count: {count}</button>;
```

Since

```text
count = 0
```

React receives

```tsx
<button>Count: 0</button>
```

---

# Now Continue the Rendering Pipeline

From here,

everything happens exactly as we learned previously.

```text
Counter()
        │
        ▼
useState()
        │
        │ React returns count = 0
        ▼
JSX Returned
        │
        ▼
Compiler (Already compiled during build)
        │
        ▼
React.createElement()
        │
        ▼
React Element Tree

button

"Count: 0"

        │
        ▼
React
(Reconciliation)

First Render

Nothing to compare

        │
        ▼
React DOM
        │
        ▼
Browser DOM

<button>

Count: 0

</button>

        │
        ▼
Browser Rendering Engine
        │
        ▼
Pixels on Screen
```

The browser now displays

```text
Count: 0
```

---

# Notice Something New

Previously our rendering pipeline looked like this.

```text
JSX

↓

React.createElement()

↓

React

↓

React DOM

↓

Browser
```

Now we can insert **React's memory** into the pipeline.

```text
React Executes Component
        │
        ▼
useState()
        │
        ▼
React Internal Memory
        │
        ▼
Returns Current State
        │
        ▼
Component Returns JSX
        │
        ▼
React.createElement()
        │
        ▼
React Element Tree
        │
        ▼
React (Reconciliation)
        │
        ▼
React DOM
        │
        ▼
Browser DOM
        │
        ▼
Browser Rendering Engine
        │
        ▼
Pixels
```

This is the complete mental model.

State is **not part of the rendering pipeline**.

State is an **input** to the rendering pipeline.

Just like a function receives parameters,

a React component receives state.

---

# Think Like a Chef

Imagine a restaurant.

The chef cooks food.

But the chef doesn't store ingredients.

The kitchen storage does.

```text
Kitchen Storage

Tomatoes

Cheese

Bread

↓

Chef

↓

Burger

↓

Customer
```

The chef only asks

> "Give me today's ingredients."

React works the same way.

```text
React Memory

count = 0

↓

Counter()

↓

React Elements

↓

Browser
```

The component never owns the state.

It only reads it.

---

# Mental Model

Instead of imagining this

```text
Counter

┌──────────┐
│ count=0  │
└──────────┘
```

Imagine this.

```text
                React

      ┌─────────────────────┐
      │                     │
      │ Internal Memory     │
      │                     │
      │ Counter → count=0   │
      │                     │
      └─────────┬───────────┘
                │
                ▼
         Executes Counter()
                │
                ▼
          Returns React Elements
                │
                ▼
             Browser
```

This single picture explains almost everything about `useState()`.

---

# Key Takeaways

- Components are temporary.
- React's memory is permanent.
- `useState()` is how a component asks React for its remembered value.
- The returned state becomes an input to the rendering pipeline.
- React remembers the data, while the component simply uses it.

---

# Coming Up Next

Now that we know **where the state comes from**, the next question becomes:

> **What exactly is `useState()`? Why is it called a Hook instead of `createState()` or `getState()`?**
