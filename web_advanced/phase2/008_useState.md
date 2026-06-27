# 4. What Exactly is `useState()`?

> **Core Idea**
>
> `useState()` does **not** create memory inside your component.
>
> Instead, it is a function that lets your component **access React's internal memory.**
>
> Think of it as a bridge between your component and React.

---

# Where We Left Off

In the previous chapter we discovered something important.

React owns the state.

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
          Counter()
```

But this raises another question.

> **How does the component read that value?**

The answer is

```tsx
useState();
```

---

# Think Like a Library

Imagine a huge library.

Inside the library are thousands of books.

```text
Library

Book #1

Book #2

Book #3

Book #4

...
```

The books belong to the library.

Not the students.

If a student wants a book,

they don't walk into storage and grab one.

Instead they ask the librarian.

```text
Student

↓

Librarian

↓

Book
```

React works exactly the same way.

```text
Component

↓

useState()

↓

React Memory

↓

Current State
```

The component never touches React's memory directly.

It always goes through `useState()`.

---

# Let's Look at the Code

```tsx
function Counter() {
  const [count, setCount] = useState(0);

  return <button>Count: {count}</button>;
}
```

Everything starts here.

```tsx
useState(0);
```

---

# What Happens Internally?

Let's follow the execution.

```text
React Executes Counter()
        │
        ▼
Counter()
        │
        ▼
JavaScript Executes

const [count, setCount] = useState(0);

        │
        ▼
useState(0)
        │
        ▼
React Internal Memory
        │
        ▼
Returns

Current Value

+

Setter Function
```

The component now has everything it needs.

---

# Let's Slow Down Even More

Suppose this is the first render.

React reaches

```tsx
useState(0);
```

Now imagine the following conversation.

```text
Counter()

↓

React,

I need my state.

↓

React

Do I already have one?

↓

Checks Memory

↓

No.

↓

Creates

count = 0

↓

Returns

0

+

setCount()
```

Nothing magical happened.

The component simply asked React for some state.

---

# Why Is It Called `useState()`?

Let's split the name.

```text
use

+

State
```

The keyword is

```text
use
```

React is saying

> **"Use some state that I already manage for you."**

Notice what React did **not** call it.

```text
createState()

❌

rememberState()

❌

storeState()

❌

saveState()

❌
```

Because the component doesn't own the state.

React does.

The component only **uses** it.

---

# Think About the Rendering Pipeline

Earlier we learned that React renders UI like this.

```text
React Executes Component
        │
        ▼
Component Returns JSX
        │
        ▼
React.createElement()
        │
        ▼
React Elements
        │
        ▼
React Reconciliation
        │
        ▼
React DOM
        │
        ▼
Browser DOM
        │
        ▼
Pixels
```

Now let's insert `useState()`.

```text
React Executes Component
        │
        ▼
useState()
        │
        ▼
React Internal Memory
        │
        │ Returns:
        │ count = 0
        │ setCount()
        ▼
Component Continues Executing
        │
        ▼
Returns JSX
        │
        ▼
React.createElement()
        │
        ▼
React Element Tree
        │
        ▼
React Reconciliation
        │
        ▼
React DOM
        │
        ▼
Browser DOM
        │
        ▼
Pixels
```

Notice where `useState()` sits.

It happens **before** the component returns JSX.

Because React needs to know the current value before it can build the UI.

---

# What Does `useState()` Return?

Conceptually,

React behaves something like this.

```javascript
function useState(initialValue) {
  return [currentValue, updateFunction];
}
```

Notice that it returns two things.

```text
Current Value

+

Setter Function
```

For our counter,

React returns

```text
0

+

setCount()
```

JavaScript then performs array destructuring.

```tsx
const [count, setCount] = useState(0);
```

Which is equivalent to

```javascript
const state = useState(0);

const count = state[0];

const setCount = state[1];
```

Nothing React-specific is happening here.

This is ordinary JavaScript array destructuring.

---

# Visualizing the Entire Flow

Let's combine everything we've learned.

```text
React Executes Counter()
        │
        ▼
Counter()
        │
        ▼
useState(0)
        │
        ▼
React Internal Memory
        │
        │
        │ Returns
        │
        ├──────────────► count = 0
        │
        └──────────────► setCount()
        │
        ▼
Counter Continues
        │
        ▼
Returns JSX
        │
        ▼
React.createElement()
        │
        ▼
React Element Tree
        │
        ▼
React DOM
        │
        ▼
Browser DOM
        │
        ▼
Pixels
```

Everything begins with `useState()` reading React's memory.

---

# Real-World Analogy

Imagine you're using Google Drive.

Your document isn't stored on your laptop.

It's stored on Google's servers.

When you open the document,

this happens.

```text
Your Laptop

↓

Request File

↓

Google Drive Server

↓

Returns File

↓

You Edit It
```

React works the same way.

```text
Component

↓

useState()

↓

React Memory

↓

Returns State

↓

Component Uses It
```

The component never owns the data.

React does.

---

# Mental Model

Don't think of `useState()` as a storage box.

Think of it as a **bridge**.

```text
        React Memory
              │
              │
              ▼
         ┌─────────┐
         │useState │
         └─────────┘
              │
              ▼
         Component
              │
              ▼
          Returns UI
```

Without `useState()`,

the component has no way to access React's internal memory.

---

# Key Takeaways

- React owns the state.
- Components do not directly access React's memory.
- `useState()` is the bridge between the component and React's memory.
- It returns two values:
  - The current state.
  - A function that can request updates.
- The component uses those values to build the UI.

---

# Coming Up Next

Now we know **what `useState()` is**.

The next question is even more interesting.

> **Why does `useState()` return an array instead of an object?**

We'll answer that in the next chapter.
