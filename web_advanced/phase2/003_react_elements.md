# React Elements — The JavaScript Objects Behind Every React App

> **Goal:** Understand what `React.createElement()` actually returns, why React represents UI as JavaScript objects, and why React itself does **not** modify the browser DOM.

In the previous chapter we learned that JSX is **not HTML**.

The compiler transforms JSX into JavaScript.

But what JavaScript?

Let's find out.

---

# Recap

Suppose you write

```jsx
function App() {
  return <h1>Hello World</h1>;
}
```

The browser cannot execute JSX.

So the compiler transforms it into

```javascript
function App() {
  return React.createElement("h1", null, "Hello World");
}
```

Now the question becomes

> **What does `React.createElement()` actually do?**

Many beginners think

```text
React.createElement()

↓

Creates HTML
```

That is **wrong**.

Others think

```text
React.createElement()

↓

Creates DOM
```

Also wrong.

Let's understand what really happens.

---

# First Principle

Imagine you're building a house.

The architect creates

```text
Blueprint
```

Does the blueprint become a house?

No.

A blueprint is simply a description.

It tells builders what should exist.

```text
Blueprint

↓

Construction

↓

House
```

React works exactly the same way.

---

# React Doesn't Build The UI Immediately

Suppose you write

```jsx
<h1>Hello</h1>
```

React does **not**

immediately create

```html
<h1>Hello</h1>
```

It also does **not**

immediately call

```javascript
document.createElement("h1");
```

Instead,

it creates

a blueprint.

---

# What Does React.createElement() Return?

Let's see.

```javascript
const element = React.createElement("h1", null, "Hello");

console.log(element);
```

Output (simplified)

```javascript
{
  type: "h1",

  props: {

    children: "Hello"

  }
}
```

That's it.

Nothing magical.

Just

a JavaScript object.

---

# A React Element Is Just A JavaScript Object

This object

is called

a

> **React Element**

Notice

it isn't

```text
HTML
```

It isn't

```text
DOM
```

It isn't

```text
Browser API
```

It's simply

data.

---

# Think Of A Restaurant

Imagine you order

a pizza.

The waiter writes

```text
Table: 7

Food: Pizza

Size: Large

Extra Cheese: Yes
```

This paper isn't the pizza. It's merely a description of the pizza. React Elements work exactly like this.

```javascript
{
  type: "button",

  props: {
    children: "Login"
  }
}
```

This object

describes

what should exist.

---

# A More Complex Example

Suppose you write

```jsx
<div className="card">
  <h1>Hello</h1>

  <button>Login</button>
</div>
```

React creates something similar to

```javascript
{
  type: "div",

  props: {

    className: "card",

    children: [

      {
        type: "h1",
        props: {
          children: "Hello"
        }
      },

      {
        type: "button",
        props: {
          children: "Login"
        }
      }

    ]

  }

}
```

Notice
The UI became a tree of JavaScript objects.

---

# Why Use Objects?

This is the important question.

---

# Why Not Directly Create HTML? Or Directly Modify the DOM?

Imagine React immediately created DOM nodes. Now suppose you update one value — React would need to immediately touch the browser. That would make planning very difficult.

Instead, React first builds an in-memory model of the UI. Think of it as a blueprint. Only later does it decide what should change.

---

## Everything Becomes Data

Once the UI is represented as objects, React can analyze it, compare it, transform it, store it, and reuse it.

**Example:**

```javascript
{
  type: "button",
  props: {
    disabled: true,
    children: "Save"
  }
}
```

Changing `disabled: false` means React only needs to update one property.

---

## React Doesn't Know About Browsers

This surprises many developers. React itself has no idea what a browser is. It doesn't know about `HTML`, `DOM`, `window`, or `document`.

Instead, React only knows how to create React Elements:

```
React
↓
JavaScript Objects
```

Nothing more.

---

## Then Who Updates The Browser?

Not React. Another library does.

> **React DOM**

This distinction is extremely important.

---

## React vs React DOM

Many developers think these are the same thing. They're not.

**React** creates React Elements:

```
React
↓
React Elements
```

**React DOM** takes those elements and updates the browser:

```
React DOM
↓
Browser DOM
```

Think of it like this:

```
Architect
↓
Blueprint
↓
Construction Workers
↓
House
```

React is the architect. React DOM is the construction crew.

---

## Why Separate Them?

Because not every React application runs inside a browser.

**React Native** — there is no HTML, no DOM, yet React works:

```
React
↓
React Native Renderer
↓
iPhone UI
```

**Ink (terminal apps)**:

```
React
↓
Ink Renderer
↓
Terminal
```

Same React. Different renderer.

---

## The Complete Architecture

```
You Write JSX
↓
Compiler (SWC / Babel)
↓
React.createElement()
↓
React Elements (JavaScript Objects)
↓
React
↓
React DOM (Bridge)
↓
Browser DOM
↓
Layout
↓
Paint
↓
Pixels
```

React DOM is the bridge between React and the browser.

---

## What Happens on Update?

**Old UI:** `Count: 4` → **New UI:** `Count: 5`

React now has two trees of React Elements.

**Old:**

```javascript
{
  type: "button",
  props: {
    children: "Count: 4"
  }
}
```

**New:**

```javascript
{
  type: "button",
  props: {
    children: "Count: 5"
  }
}
```

React compares both trees. This comparison is called:

> **Reconciliation** or **Diffing**

React discovers only the text changed, then tells React DOM to update just that one text node — instead of rebuilding the entire page.

---

This is one of the biggest misconceptions about React.

The answer is **No.**

The browser's DOM **does not automatically recreate the entire page** when something changes.

The real problem React solved was **making updates easier for developers**, not fixing a browser limitation.

Let's understand this from first principles.

---

# Imagine you have this HTML

```html
<body>
  <h1>Hello</h1>
  <button>Click</button>
</body>
```

The browser creates a DOM tree.

```text
Document
    │
    └── body
         │
         ├── h1
         │     └── "Hello"
         │
         └── button
               └── "Click"
```

Nothing is recreated automatically.

---

# Suppose the text changes

```text
Hello

↓

Hello Wangdu
```

Without React, you can simply do

```javascript
const h1 = document.querySelector("h1");

h1.textContent = "Hello Wangdu";
```

What happens?

```text
DOM Tree

Before

h1
 └── "Hello"

↓

After

h1
 └── "Hello Wangdu"
```

Only one text node changed.

The browser **did not rebuild the whole page**.

---

# So what was the problem before React?

The problem wasn't the DOM.

The problem was **you** (the developer).

Imagine a page like this:

```text
Dashboard

├── Sidebar
├── Notifications
├── User Info
├── Messages
├── Charts
├── Settings
├── Profile
├── Search
├── Footer
```

Now suppose the user's name changes.

Without React you must remember:

```javascript
user.name = "Aariv";

document.querySelector("#username").textContent = user.name;

document.querySelector("#profile-name").textContent = user.name;

document.querySelector("#navbar-name").textContent = user.name;

document.querySelector("#sidebar-name").textContent = user.name;
```

You have to manually update **every place** that depends on the data.

As applications grew, this became difficult to maintain.

---

# React changes the workflow

Instead of saying

> "Update these DOM nodes."

You simply say

```jsx
<h1>{user.name}</h1>
```

Later

```javascript
setUser({
  name: "Aariv",
});
```

That's all.

React figures out:

- which components changed
- which React elements changed
- which DOM nodes changed

Then ReactDOM performs only those updates.

You describe **what** the UI should look like.

React figures out **how** to update the DOM.

---

# Does React recreate the whole DOM?

No.

Suppose

Before

```jsx
<div>
  <h1>Hello</h1>
  <button>Save</button>
</div>
```

After

```jsx
<div>
  <h1>Hello Wangdu</h1>
  <button>Save</button>
</div>
```

React compares the two trees.

```text
div

↓

same

h1

↓

same

button

↓

same

Text

↓

changed
```

ReactDOM performs essentially:

```javascript
h1.textContent = "Hello Wangdu";
```

The `<button>` is untouched.

The `<div>` is untouched.

The page is not rebuilt.

---

# Then why do people say "React updates efficiently"?

Because if you wrote the same application without React, you would need to manually decide what to update.

For example:

```javascript
if (userChanged) {
  updateNavbar();
  updateSidebar();
  updateProfile();
  updateDashboard();
  updateFooter();
}
```

React automates that bookkeeping.

---

# The real comparison

## Vanilla JavaScript

```text
Data changes

↓

Developer figures out

↓

Which DOM nodes changed?

↓

Manually update them
```

---

## React

```text
Data changes

↓

React compares old UI and new UI

↓

React figures out differences

↓

ReactDOM updates only the changed DOM nodes
```

---

# Final mental model

The browser DOM has **always** supported updating a single element efficiently.

React did **not** invent efficient DOM updates.

React's innovation was:

1. Let developers describe the UI declaratively.
2. Automatically calculate what changed.
3. Apply only the necessary DOM operations.

So a more accurate statement is:

> **Without React, the browser does not recreate the entire page. Instead, the developer is responsible for manually updating the correct DOM nodes. React automates that process by computing the minimal set of updates and letting ReactDOM apply them.**

---

# Example

The easiest way to understand all of these is to follow **one button click** from beginning to end.

Let's build a simple app.

```jsx
function App() {
  return (
    <div>
      <h1>Hello Aariv</h1>
      <button>Click Me</button>
    </div>
  );
}
```

Now let's see what happens.

---

# Step 1 — You Write JSX

This is what you write.

```jsx
function App() {
  return (
    <div>
      <h1>Hello Aariv</h1>
      <button>Click Me</button>
    </div>
  );
}
```

Humans like writing JSX because it looks like HTML.

But JavaScript has absolutely no idea what this means.

---

# Step 2 — Compiler (SWC / Babel)

The compiler translates JSX into normal JavaScript.

```jsx
function App() {
  return React.createElement(
    "div",
    null,

    React.createElement("h1", null, "Hello Aariv"),

    React.createElement("button", null, "Click Me"),
  );
}
```

Think of the compiler as Google Translate.

```text
JSX Language
        ↓
JavaScript Language
```

Nothing has appeared on the screen yet.

---

# Step 3 — React.createElement()

Now React.createElement() executes.

Many beginners think it creates HTML.

It does not.

Instead it creates plain JavaScript objects.

For the `<h1>`:

```javascript
{
    type: "h1",
    props: {
        children: "Hello Aariv"
    }
}
```

For the button:

```javascript
{
    type: "button",
    props: {
        children: "Click Me"
    }
}
```

For the parent:

```javascript
{
    type: "div",
    props: {
        children: [
            h1Object,
            buttonObject
        ]
    }
}
```

Everything is still just JavaScript objects.

Nothing exists inside the browser yet.

---

# Mental Model

Imagine an architect.

Before constructing a house, they create a blueprint.

```text
Blueprint

Living Room

Kitchen

Bedroom

Bathroom
```

Nobody lives inside the blueprint.

It simply describes the future house.

A React Element is exactly like that.

It is a blueprint describing the UI.

---

# Step 4 — React Element Tree

> `React now connects all these objects together.`

```text
div
│
├── h1
│      │
│      └── "Hello Aariv"
│
└── button
       │
       └── "Click Me"
```

This is called the **React Element Tree**.

Think of it as a family tree.

```text
Grandparent

↓

Parent

↓

Child
```

React now understands the complete UI.

Still...

No HTML exists.

---

# Step 5 — React

Now React starts working.

Notice this carefully.

React itself never creates HTML.

Instead it asks:

> "What should the UI look like?"

It stores the current tree.

```text
Current Tree

div

├── h1
│      Hello Aariv
│
└── button
       Click Me
```

---

# User clicks a button

Suppose clicking the button changes the name.

```jsx
const [name, setName] = useState("Aariv")

<button onClick={() => setName("Wangdu")}>
```

React creates a completely new React Element Tree.

Old

```text
div

├── h1
│      Hello Aariv
│
└── button
```

New

```text
div

├── h1
│      Hello Wangdu
│
└── button
```

Notice something.

Only one word changed.

---

# Step 6 — React Compares Trees

Now React compares both trees.

```text
Old                     New

div                     div
 │                        │
h1                      h1
 │                        │
Hello Aariv          Hello Wangdu
```

React asks:

```text
div changed?

↓

No

button changed?

↓

No

h1 changed?

↓

No

Text changed?

↓

YES
```

So React decides:

```text
Only update the text node.
```

---

# Mental Model

Imagine two books.

Old version

```text
Chapter 1

Hello Aariv
```

New version

```text
Chapter 1

Hello Wangdu
```

Would you print the entire book again?

No.

You replace one sentence.

That's exactly what React does.

---

# Step 7 — React DOM

Now React hands its decision to React DOM.

```text
React

↓

Only update the h1 text
```

ReactDOM translates that into browser instructions.

```javascript
h1.textContent = "Hello Wangdu";
```

or internally it may use equivalent DOM APIs.

ReactDOM is the construction worker.

React is the architect.

```text
Architect

↓

Blueprint

↓

Construction Worker

↓

Real House
```

---

# Step 8 — Browser DOM

The browser receives

```javascript
h1.textContent = "Hello Wangdu";
```

Now the browser changes its internal DOM tree.

Before

```text
body

└── div

      ├── h1
      │      Hello Aariv
      │
      └── button
```

After

```text
body

└── div

      ├── h1
      │      Hello Wangdu
      │
      └── button
```

The button wasn't touched.

The div wasn't recreated.

Only the text node changed.

---

# Step 9 — Browser Rendering Engine

The browser notices

```text
DOM changed.
```

Now the browser performs rendering.

```text
DOM

↓

Style Calculation

↓

Layout

↓

Paint

↓

Composite

↓

Pixels
```

Finally you see

```text
Hello Wangdu
```

on the screen.

---

# Complete Mental Model

```text
You Write JSX
        │
        ▼
Compiler (SWC / Babel)
        │
        │ Converts JSX into JavaScript
        ▼
React.createElement()
        │
        │ Creates plain JavaScript objects
        ▼
React Element Tree
        │
        │ Connects them into a tree
        ▼
React
(Reconciliation)
        │
        │ " Compares old tree with new tree - Only the text changed."
        ▼
React DOM
        │
        │ Calls browser DOM APIs
        ▼
Browser DOM
        │
        │ Updates the real DOM tree
        ▼
Browser Rendering Engine
        │
        │ Layout → Paint → Composite
        ▼
Pixels on Screen
```

# Final Mental Models

| Concept                      | Think of it as                        | Example                                                                                      |
| ---------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------- |
| **JSX**                      | A human-friendly way to describe a UI | `<h1>Hello</h1>`                                                                             |
| **Compiler (SWC/Babel)**     | A translator                          | Converts JSX into JavaScript                                                                 |
| **React.createElement()**    | A blueprint factory                   | Creates JavaScript objects describing UI elements                                            |
| **React Element**            | A blueprint                           | `{ type: "h1", props: { children: "Hello" } }`                                               |
| **React Element Tree**       | A complete building blueprint         | The hierarchy of all UI elements (`div → h1 → text`)                                         |
| **React**                    | The architect and inspector           | Compares the old blueprint with the new one and decides what changed                         |
| **ReactDOM**                 | The construction worker               | Uses `document.createElement()`, `appendChild()`, `textContent`, etc., to update the browser |
| **Browser DOM**              | The actual building                   | The real nodes the browser manages in memory                                                 |
| **Browser Rendering Engine** | The painter                           | Calculates layout, paints pixels, and displays the final page                                |

The most important insight is this:

- **React Elements** describe **what the UI should look like**.
- **React** decides **what changed**.
- **ReactDOM** performs **the actual DOM operations**.
- **The browser** turns those DOM changes into **visible pixels**.

---

## Final Thought

The most important idea in React is this:

> **React does not manipulate the browser directly.**

Instead, React creates a tree of **plain JavaScript objects** called **React Elements**. Those objects are React's internal description of your user interface.

React analyzes those objects, determines what changed, and then hands a list of updates to **React DOM**, whose only job is to synchronize the browser's DOM with React's desired UI.

Once you understand that React works with **objects**, not HTML, the architecture of React becomes much easier to reason about. The next step is understanding how React compares two trees of React Elements and updates only what changed — the process known as **Reconciliation** or **Diffing**.
