# State Is A Snapshot

> **Core Idea**
>
> Every time React renders your component, it gives that render a **snapshot** of the current state.
>
> That snapshot never changes while the render is executing.
>
> If the state changes later, React creates an entirely new render with a new snapshot.

---

# Where We Left Off

In the previous chapter we learned something important.

Calling

```javascript
setCount(1);
```

doesn't immediately change

```javascript
count;
```

Instead,

React schedules another render.

But this raises another question.

If the state changes later...

why does this still print

```javascript
console.log(count);
```

instead of the new value?

The answer is

> Every render gets its own snapshot of state.

---

# Let's Forget React Again

Imagine you're looking at today's newspaper.

```text
Monday's Newspaper

Temperature: 25°C
```

Later in the day,

the weather changes.

```text
Temperature: 31°C
```

Does your newspaper magically update?

No.

The newspaper is a snapshot of what was true when it was printed.

To see the latest information,

you need tomorrow's newspaper.

---

# React Works The Same Way

Imagine this component.

```tsx
function Counter() {
  const [count, setCount] = useState(0);

  return <button>{count}</button>;
}
```

On the first render,

React gives the component

```text
count = 0
```

Think of it as taking a photograph.

```text
Render #1

📸

count = 0
```

That photograph never changes.

---

# What Happens When We Click?

Suppose we click the button.

```javascript
setCount(1);
```

Many beginners imagine this.

```text
Render #1

count

0

↓

1
```

But that's **not** what happens.

React never edits an existing render.

Instead,

it creates an entirely new one.

---

# React Creates A New Snapshot

Instead of changing

```text
Render #1
```

React creates

```text
Render #2

📸

count = 1
```

Now there are conceptually two snapshots.

```text
Render #1

count = 0

-------------------

Render #2

count = 1
```

The first one never changes.

The second one contains the updated state.

---

# Visualizing It

```text
Render #1

count = 0

        │
        │ setCount(1)
        ▼

React

Schedules Update

        │
        ▼

Render #2

count = 1
```

Notice something important.

React didn't modify Render #1.

It created Render #2.

---

# Why Does `console.log(count)` Print 0?

Let's revisit our example.

```tsx
function handleClick() {
  setCount(count + 1);

  console.log(count);
}
```

Suppose the current render has

```text
count = 0
```

Step 1

```javascript
setCount(1);
```

React schedules another render.

---

Step 2

```javascript
console.log(count);
```

Which render is this code running inside?

Still

```text
Render #1
```

And Render #1 has

```text
count = 0
```

So the output is

```text
0
```

React hasn't switched to Render #2 yet.

---

# Think Of It Like A Photograph

Imagine taking a picture of a whiteboard.

```text
📸

Count = 0
```

Later,

someone changes the whiteboard.

```text
Count = 1
```

Does your photograph change?

No.

The photo always shows

```text
Count = 0
```

To see the new value,

you need another photo.

That's exactly how React renders work.

---

# Every Render Has Its Own Variables

This surprises many beginners.

Consider this component.

```tsx
function Counter() {
  const [count, setCount] = useState(0);

  console.log(count);

  return <button>{count}</button>;
}
```

The first render creates

```text
count = 0
```

The second render creates

```text
count = 1
```

These are **different JavaScript variables** created during different executions of the function.

React doesn't mutate the old variable.

It executes the component again and creates a new one.

---

# The Rendering Pipeline

```text
React Executes Component

        │
        ▼

Reads Current State

count = 0

        │
        ▼

Creates Snapshot

        │
        ▼

Returns JSX

        │
        ▼

Later...

setCount(1)

        │
        ▼

React Schedules Update

        │
        ▼

Executes Component Again

        │
        ▼

Reads Current State

count = 1

        │
        ▼

Creates New Snapshot

        │
        ▼

Returns New JSX
```

Every execution gets a fresh snapshot.

---

# Mental Model

Don't think of state as a variable that changes.

Think of it as a sequence of snapshots.

```text
Render #1

📸

count = 0

        │

        ▼

Render #2

📸

count = 1

        │

        ▼

Render #3

📸

count = 2

        │

        ▼

Render #4

📸

count = 3
```

Each render is frozen in time.

---

# Why This Matters

Understanding snapshots explains many React behaviors.

It explains why

- `console.log(count)` prints the old value.
- Event handlers "remember" old state.
- Closures sometimes use stale values.
- Functional updates exist.

Nearly every confusing React bug begins with forgetting that **state is a snapshot**.

---

# Key Takeaways

- React never changes the state inside an existing render.
- Every render receives its own snapshot of state.
- Calling `setState()` schedules a new render with a new snapshot.
- Old renders continue using their original snapshot.
- Think of each render as a photograph frozen in time.

---

# Coming Up Next

If every render gets its own snapshot...

what happens when we call

```javascript
setCount(count + 1);
setCount(count + 1);
```

Why doesn't the counter increase by two?

To answer that, we first need to understand **functional updates**.

> **Functional Updates**
