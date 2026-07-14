# Functional Updates

> **Core Idea**
>
> Sometimes the next state depends on the previous state.
>
> In those situations, reading the current snapshot isn't enough.
>
> Instead of giving React the next value,
>
> you give React a **function** that calculates the next value from the latest state.

---

# Where We Left Off

In the previous chapter we learned something extremely important.

Every render gets its own snapshot.

```text
Render #1

count = 0

--------------------

Render #2

count = 1

--------------------

Render #3

count = 2
```

A render never changes after it has been created.

Now let's see why this creates a problem.

---

# Imagine This Code

```tsx
const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);

  setCount(count + 1);
}
```

Most beginners expect

```text
0

↓

1

↓

2
```

But React shows

```text
1
```

Why?

---

# Let's Follow The Execution

Current snapshot

```text
count = 0
```

Now JavaScript executes

```javascript
setCount(count + 1);
```

JavaScript first evaluates

```javascript
count + 1;
```

Which becomes

```javascript
0 + 1

↓

1
```

So React receives

```javascript
setCount(1);
```

---

Next line

```javascript
setCount(count + 1);
```

Remember...

Which snapshot are we still inside?

```text
Render #1
```

And that snapshot still has

```text
count = 0
```

So JavaScript again calculates

```javascript
0 + 1

↓

1
```

React receives

```javascript
setCount(1);
```

again.

---

# What Does React Receive?

React doesn't receive

```text
1

↓

2
```

React receives

```text
setCount(1)

setCount(1)
```

The second update simply replaces the first.

Final state

```text
1
```

---

# Visualizing The Queue

React's update queue becomes

```text
Queue

↓

1

↓

1
```

After processing

```text
Final Value

↓

1
```

Not

```text
2
```

---

# The Problem

The problem isn't React.

The problem is

```javascript
count;
```

Both calculations used the same snapshot.

```text
Render #1

count = 0
```

Neither calculation knew about the other.

---

# We Need A Different Approach

Instead of saying

```text
Set the value to 1.
```

What if we said

```text
Take whatever the latest value is...

then add one.
```

That's exactly what functional updates do.

---

# Functional Updates

Instead of

```javascript
setCount(count + 1);
```

we write

```javascript
setCount((previous) => previous + 1);
```

Notice something.

We're no longer using

```javascript
count;
```

Instead,

React gives us

```javascript
previous;
```

---

# Why Is This Better?

Now imagine

```javascript
setCount((previous) => previous + 1);

setCount((previous) => previous + 1);
```

React stores

two functions.

```text
Queue

↓

previous => previous + 1

↓

previous => previous + 1
```

Later,

React executes them one by one.

---

# Step 1

Current value

```text
0
```

Run first function

```text
0 + 1

↓

1
```

---

# Step 2

Current value

```text
1
```

Run second function

```text
1 + 1

↓

2
```

Final value

```text
2
```

Exactly what we expected.

---

# Visualizing The Queue

Instead of storing values

```text
1

↓

1
```

React stores instructions.

```text
+1

↓

+1
```

When React processes them

```text
Current Value

0

↓

+1

↓

1

↓

+1

↓

2
```

Each function receives the newest state.

---

# Think Like A Bank

Imagine your bank balance is

```text
₹1000
```

Two employees receive these instructions.

Employee A

```text
Add ₹100
```

Employee B

```text
Add ₹100
```

If both employees first read

```text
₹1000
```

and both write

```text
₹1100
```

you lose money.

---

A smarter system works like this.

Employee A

```text
Current Balance

₹1000

↓

₹1100
```

Employee B

reads the updated balance.

```text
Current Balance

₹1100

↓

₹1200
```

Each employee works with the latest value.

That's exactly how functional updates work.

---

# When Should You Use Functional Updates?

If your next state depends on the previous state...

use a function.

Examples

```javascript
setCount((previous) => previous + 1);
```

```javascript
setScore((previous) => previous + 10);
```

```javascript
setItems((previous) => [...previous, newItem]);
```

```javascript
setTodos((previous) => previous.filter((todo) => todo.id !== id));
```

Each update is based on the latest state, not an old snapshot.

---

# When Don't You Need Them?

Suppose the next value doesn't depend on the previous one.

```javascript
setTheme("Dark");
```

or

```javascript
setUser(userData);
```

or

```javascript
setIsOpen(true);
```

Here,

React already knows the final value.

A functional update isn't necessary.

---

# Mental Model

Don't think

```text
Functional Update

↓

New Value
```

Think

```text
Functional Update

↓

Instruction

↓

React Executes Later

↓

Latest State

↓

New State
```

React isn't storing values.

It's storing instructions for how to calculate the next value.

---

# Key Takeaways

- Every render has its own snapshot of state.
- Using `count + 1` reads from the current snapshot.
- Multiple updates may all use the same snapshot.
- Functional updates receive the latest state when React processes the update queue.
- Use functional updates whenever the next state depends on the previous state.

---

# Coming Up Next

We've seen React queue multiple updates.

But how does React decide **when** to process that queue?

Why doesn't it render after every `setState()`?

That's where **batching** comes in.

> **Batching**
