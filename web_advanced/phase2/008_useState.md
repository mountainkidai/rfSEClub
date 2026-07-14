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

The books belong to the library. Not the students. If a student wants a book, they don't walk into storage and grab one. Instead they ask the librarian.

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

# 5. Why Does `useState()` Return an Array Instead of an Object?

> **Core Idea**
>
> `useState()` could have returned an object.
>
> React intentionally returns an array because it works beautifully with JavaScript's **array destructuring**, allows developers to choose meaningful variable names, and keeps the API concise.

---

# A Common Beginner Question

Most React tutorials simply tell you to write this.

```tsx
const [count, setCount] = useState(0);
```

But many beginners naturally wonder:

> **Why an array?**

Why not this?

```tsx
const state = useState(0);

console.log(state.value);

state.setValue(1);
```

Or even

```tsx
const { value, setValue } = useState(0);
```

Those look perfectly reasonable.

So why did React choose an array?

Let's build the answer from first principles.

---

# First, Remember What `useState()` Does

In the previous chapter, we learned that `useState()` is simply a bridge between your component and React's internal memory.

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
+
Setter Function
        │
        ▼
Component Continues Executing
```

Notice something.

React always needs to return **two things**.

1. The current value.
2. A function that updates the value.

Conceptually,

React behaves something like this.

```javascript
function useState(initialValue) {
  return [currentValue, updateFunction];
}
```

The question now becomes:

> **Why an array instead of an object?**

---

# Option 1 — Returning an Object

React could have been designed like this.

```javascript
function useState(initialValue) {
  return {
    value: currentValue,

    setValue: updateFunction,
  };
}
```

Then we would write

```tsx
const state = useState(0);

console.log(state.value);

state.setValue(1);
```

Or using object destructuring

```tsx
const { value, setValue } = useState(0);
```

Nothing is wrong with this.

It would work perfectly.

So why didn't React choose this design?

---

# Problem 1 — Fixed Property Names

Imagine you have three different pieces of state.

```tsx
const { value, setValue } = useState(0);

const { value, setValue } = useState("");

const { value, setValue } = useState(false);
```

Immediately you have a problem.

Every object has

```text
value

setValue
```

JavaScript won't allow duplicate variable names.

You'd have to rename everything.

```tsx
const { value: count, setValue: setCount } = useState(0);

const { value: username, setValue: setUsername } = useState("");

const { value: isOpen, setValue: setIsOpen } = useState(false);
```

This works...

But it becomes verbose.

---

# Option 2 — Returning an Array

Instead React returns

```javascript
[currentValue, updateFunction];
```

Now JavaScript lets us choose the names ourselves.

```tsx
const [count, setCount] = useState(0);
```

Another state

```tsx
const [username, setUsername] = useState("");
```

Another state

```tsx
const [isOpen, setIsOpen] = useState(false);
```

Notice something beautiful.

React never decided the variable names.

**You did.**

---

# React Doesn't Know What You're Storing

Suppose React returned an object.

What property names should it use?

Imagine these examples.

```tsx
const age = useState(21);

const email = useState("");

const darkMode = useState(false);

const cartItems = useState([]);
```

Should React return

```text
age

setAge
```

or

```text
email

setEmail
```

or

```text
cartItems

setCartItems
```

It can't.

React has no idea what you're storing.

Only **you** know.

Returning an array solves this problem perfectly.

---

# JavaScript Already Has Array Destructuring

React isn't inventing anything new.

This is ordinary JavaScript.

Example:

```javascript
const person = ["Aariv", 24];

const [name, age] = person;

console.log(name);
console.log(age);
```

Output

```text
Aariv

24
```

React simply uses the exact same feature.

```javascript
const state = [0, setCount];

const [count, setCount] = state;
```

Nothing React-specific is happening.

---

# Let's Connect It to the Rendering Pipeline

Suppose React executes your component.

```tsx
function Counter() {
  const [count, setCount] = useState(0);

  return <button>Count: {count}</button>;
}
```

Here's what happens internally.

```text
React Executes Counter()
        │
        ▼
useState(0)
        │
        ▼
React Internal Memory
        │
        ▼
Returns

[
    0,
    setCount()
]

        │
        ▼
JavaScript Array Destructuring

count = 0

setCount = function

        │
        ▼
Component Continues Executing
        │
        ▼
Returns JSX

<button>

Count: 0

</button>

        │
        ▼
React.createElement()
        │
        ▼
React Elements
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

Notice something important.

`useState()` does **not** return two separate variables.

It returns **one array**.

JavaScript then destructures that array into two variables.

---

# Let's Prove It

These two pieces of code are identical.

### Version 1

```tsx
const [count, setCount] = useState(0);
```

---

### Version 2

```tsx
const state = useState(0);

const count = state[0];

const setCount = state[1];
```

The first version is simply cleaner.

---

# Why Not Return Multiple Values?

Someone might ask

> Why doesn't JavaScript simply allow this?

```javascript
const count,
  setCount = useState(0);
```

Because JavaScript functions always return **one value**.

That value can be

- a number

```javascript
return 10;
```

- a string

```javascript
return "Hello";
```

- an object

```javascript
return {};
```

- an array

```javascript
return [];
```

When React wants to return multiple pieces of information,

it wraps them inside one array.

---

# Real-World Analogy

Imagine ordering food.

The waiter brings you a tray.

```text
Tray

🍔 Burger

🥤 Drink
```

The waiter returns **one tray**.

The tray contains two items.

You unpack them.

```text
Tray

↓

Burger

Drink
```

React works the same way.

```text
useState()

↓

Returns One Array

↓

JavaScript Destructures It

↓

count

setCount
```

---

# Mental Model

Think of `useState()` as handing your component a package.

```text
useState()

        │

        ▼

┌────────────────────────┐
│                        │
│   [                  ] │
│                        │
│   0                    │
│   setCount()           │
│                        │
└────────────────────────┘

        │

        ▼

JavaScript Destructuring

        │

        ▼

count

setCount
```

The package is one value.

JavaScript simply opens the package for you.

---

# Key Takeaways

- `useState()` always returns one value: an array.
- That array contains two items:
  - The current state.
  - The setter function.
- React chose an array because JavaScript's array destructuring makes the API concise.
- Arrays let developers choose meaningful variable names.
- React doesn't know what your state represents, so it lets you decide the names.

---

# Coming Up Next

Now we understand why `useState()` returns an array.

The next question is even more interesting:

> **Building useState() From Scratch**
