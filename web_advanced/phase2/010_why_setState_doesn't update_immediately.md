#Why Doesn't `setState()` Update Immediately?

> **Core Idea**
>
> `setState()` does **not** change the state immediately.
>
> Instead, it **requests React to update the state later**.
>
> React first finishes everything it's currently doing, then processes all state updates together, and finally renders the UI once.

---

# Where We Left Off

In the previous chapter we built a tiny version of `useState()` ourselves.

```javascript
function createState(initialValue) {
  let value = initialValue;

  function setValue(newValue) {
    value = newValue;
  }

  return [() => value, setValue];
}
```

It looked surprisingly similar to React.

But there was one huge difference.

When we called

```javascript
setValue(10);
```

nothing happened.

The UI didn't magically update.

Why?

Because JavaScript has no idea that something changed.

React does.

---

# Let's Forget React Again

Imagine we have this.

```javascript
let count = 0;

function render() {
  console.log(`Count: ${count}`);
}

render();
```

Output

```text
Count: 0
```

Now update it.

```javascript
count = 1;
```

Did anything happen?

No.

The console still shows

```text
Count: 0
```

Why?

Because changing a variable doesn't automatically rerun your code.

---

# Someone Has To Render Again

The only way to see the new value is

```javascript
count = 1;

render();
```

Output

```text
Count: 1
```

Notice something important.

Updating data...

and

Displaying data...

are two completely different operations.

```text
Update State

↓

Render UI
```

JavaScript never performs the second step automatically.

---

# React Solves This

React's setter doesn't only update state.

It also tells React

> "This component needs another render."

Conceptually,

```javascript
setCount(1);
```

is closer to

```javascript
updateReactMemory(1);

scheduleRender();
```

Notice the word

```text
schedule
```

Not

```text
renderImmediately
```

---

# Why Doesn't React Render Immediately?

Imagine this code.

```javascript
setCount(1);

setName("Aariv");

setTheme("Dark");
```

Suppose React rendered immediately.

```text
setCount()

↓

Render

↓

setName()

↓

Render

↓

setTheme()

↓

Render
```

React would render

three times.

That means

```text
CPU

↓

Render

↓

DOM

↓

Paint
```

three separate times.

Very expensive.

---

# A Better Idea

Instead...

React collects all updates.

```text
setCount()

↓

Pending

-------------------

setName()

↓

Pending

-------------------

setTheme()

↓

Pending
```

Nothing renders yet.

React waits.

---

# Then React Does Everything Together

Once your event finishes...

React processes every update.

```text
Pending Updates

↓

Apply Updates

↓

Render Once

↓

Update DOM

↓

Paint
```

Instead of

```text
Render

Render

Render
```

React performs

```text
One Render
```

Much faster.

---

# Think Like a Restaurant

Imagine a waiter.

You say

```text
Water please.
```

The waiter runs to the kitchen.

Comes back.

Then you say

```text
Pizza please.
```

The waiter runs again.

Then

```text
Coffee please.
```

Runs again.

That's inefficient.

---

A smarter waiter says

```text
Anything else?

...

Okay.

I'll bring everything together.
```

That's exactly what React does.

```text
setCount()

↓

setTheme()

↓

setName()

↓

React

↓

One Render
```

React batches the work together.

---

# Let's See The Famous Example

```tsx
const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);

  console.log(count);
}
```

Most beginners expect

```text
1
```

Instead,

the console prints

```text
0
```

Why?

Because React hasn't updated the state yet.

---

# What Actually Happens

Step 1

Current state

```text
count = 0
```

---

Step 2

```javascript
setCount(1);
```

React says

```text
I'll do it later.
```

Not

```text
Done.
```

---

Step 3

Immediately afterwards

```javascript
console.log(count);
```

React hasn't rendered again.

So

```text
count

↓

0
```

gets printed.

---

Step 4

The event finishes.

React processes pending updates.

```text
count

↓

1
```

---

Step 5

React renders again.

Now the component receives

```text
count = 1
```

---

# Timeline

```text
Button Click

        │
        ▼

handleClick()

        │
        ▼

setCount(1)

        │
        ▼

React

"Update scheduled."

        │
        ▼

console.log(count)

        │
        ▼

Still 0

        │
        ▼

Event Ends

        │
        ▼

React Processes Updates

        │
        ▼

count = 1

        │
        ▼

React Renders Again

        │
        ▼

UI Shows

1
```

---

# Why Is This Important?

Imagine React rendered instantly.

```javascript
setCount(1);

setName("Aariv");

setDarkMode(true);
```

React would perform

```text
Render

↓

Render

↓

Render
```

every single time.

Even on powerful computers this wastes CPU.

On slower phones...

or poor internet connections...

it becomes even more noticeable.

React's scheduling makes applications much smoother.

---

# React Thinks In Frames

Browsers update the screen roughly

```text
60 times per second
```

or every

```text
16.6ms
```

React tries to fit its work inside those frames.

Instead of interrupting the browser after every setter...

React groups updates together and renders efficiently.

```text
Many Updates

↓

One Render

↓

One DOM Update

↓

One Paint
```

---

# A More Accurate Mental Model

Don't think

```text
setCount()

↓

count changes immediately
```

Think

```text
setCount()

↓

Request React

↓

React Schedules Update

↓

React Renders

↓

New State Appears
```

The setter isn't changing your variable.

It's sending React a request.

---

# Mental Model

Imagine sending a support ticket.

```text
You

↓

Submit Ticket

↓

Support Queue

↓

Engineer Processes It

↓

Problem Solved
```

`setCount()` works similarly.

```text
Component

↓

setCount()

↓

React Update Queue

↓

React Processes Queue

↓

Component Re-renders

↓

New UI
```

The update goes into a queue first.

---

# Key Takeaways

- `setState()` does not update state immediately.
- It requests React to update the state later.
- React collects multiple updates together before rendering.
- This process is called **batching**.
- After processing the queued updates, React renders the component once.
- That's why reading state immediately after calling `setState()` still gives you the old value.

---

# Coming Up Next

We now know that calling `setState()` schedules another render.

But what exactly **is** a render?

And how is it different from a **re-render**?

That's what we'll learn next.

> **state snapshot**
