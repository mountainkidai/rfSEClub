# 8.4.1 — What Is a React Component?

> [!IMPORTANT]

> **Goal:** Understand what a React component really is from first principles.  
> By the end of this chapter, you'll understand that a React component is **nothing more than a JavaScript function that describes a piece of user interface**.

---

## Before We Learn Components

Let’s forget React for a few minutes.

Suppose you're building a website for **Wangdu**.

It looks like this:

```text
+------------------------------------------------+
|                  Wangdu                        |
+------------------------------------------------+

🏠 Home    📚 Lessons    👤 Profile

-----------------------------------------------

Welcome to Wangdu

Learn English from first principles.

[ Start Learning ]

-----------------------------------------------

© Wangdu
```

Now imagine building another page:

```text
+------------------------------------------------+
|                  Wangdu                        |
+------------------------------------------------+

🏠 Home    📚 Lessons    👤 Profile

-----------------------------------------------

Lesson 1

Introduction to English

[ Continue ]

-----------------------------------------------

© Wangdu
```

What do you notice?

---

## The Problem

Both pages contain:

```text
Logo
Navigation Bar
Footer
```

Only the middle changes.

If we copy and paste everything, our project quickly becomes:

```text
Home Page       500 lines
Lesson Page     520 lines
Profile Page    510 lines
Settings Page   505 lines
```

Suppose tomorrow you change the logo.

Now you must update every page:

```text
Home        ✓
Lessons     ✓
Profile     ✓
Settings    ✓
...
150 pages
```

Eventually, you forget one page.

Now your website looks inconsistent.

> `This is one of the oldest problems in software engineering: duplicated code becomes hard to maintain.`

---

## First Principle

Whenever we notice the same code appearing again and again, we ask one question:

> **Can we reuse it?**

JavaScript already has a solution:

## Functions

---

## Functions Are Reusable Instructions

Suppose everywhere in your program you need:

```text
Area of Circle
```

Instead of writing this twenty times:

```javascript
const area = 3.14159 * radius * radius;
```

You write this once:

```javascript
function calculateArea(radius) {
  return Math.PI * radius * radius;
}
```

Now everywhere else you simply write:

```javascript
calculateArea(5);
calculateArea(10);
calculateArea(100);
```

The logic exists in one place.

> **Write once. Reuse everywhere.**

That is one of the biggest ideas in programming.

---

## React Uses The Same Idea

React asks a very simple question:

> Instead of reusing calculations, why not reuse pieces of the user interface?

Imagine your navigation bar.

Instead of copying its HTML onto every page, you write one function:

```jsx
function Navbar() {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/lessons">Lessons</a>
      <a href="/profile">Profile</a>
    </nav>
  );
}
```

Now whenever you need a navigation bar, you simply write:

```jsx
<Navbar />
```

instead of copying the HTML again.

---

## A Component Is Just A Function

This is probably the biggest misconception about React.

Many beginners think a component is:

- A special React object.
- A class.
- A DOM element.
- A widget.

None of those are true.

> A React component is simply a JavaScript function.

Example:

```jsx
function Greeting() {
  return <h1>Hello</h1>;
}
```

Let’s compare it with a normal function.

**Normal JavaScript**

```javascript
function add(a, b) {
  return a + b;
}
```

**React**

```jsx
function Greeting() {
  return <h1>Hello</h1>;
}
```

Both are functions.

The only difference is what they return.

---

## Functions Return Values

Suppose you call:

```javascript
add(2, 3);
```

The function executes and returns:

```text
5
```

Simple.

Now imagine calling:

```jsx
Greeting();
```

What does it return?

Does it return HTML?

**No.**

From previous chapters, JSX becomes:

```javascript
React.createElement(...)
```

So this:

```jsx
function Greeting() {
  return <h1>Hello</h1>;
}
```

actually becomes something like:

```javascript
function Greeting() {
  return React.createElement("h1", null, "Hello");
}
```

Which returns a React Element:

```javascript
{
  type: "h1",
  props: {
    children: "Hello"
  }
}
```

> [!IMPORTANT]
> A component does **not** return HTML.  
> It returns a **React Element**, which is simply a JavaScript object.

---

## Think Like A Factory

Imagine a factory making chairs:

```text
Blueprint
   ↓
Factory
   ↓
Chair
```

The factory doesn’t return wood.

It returns a finished chair.

A React component is similar:

```text
Component Function
        ↓
    Execution
        ↓
 React Elements
```

Later, React uses those React Elements to build the final webpage.

---

## Why Is It Called A Component?

Think about a car.

A car isn’t one giant object.

It is built from smaller pieces:

```text
Car
├── Engine
├── Steering Wheel
├── Dashboard
├── Seats
└── Wheels
```

React follows the same philosophy.

Instead of writing one enormous page, we build many small pieces:

```text
HomePage
├── Navbar
├── HeroSection
├── Features
├── Testimonials
└── Footer
```

Each piece is called a **component**.

---

## Components Build Components

Suppose your homepage looks like this:

```jsx
function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PopularLessons />
      <Footer />
    </>
  );
}
```

Notice something:

`HomePage` doesn’t contain lots of HTML.

Instead, it combines other components.

Those components may combine even smaller components:

```text
HomePage
├── Navbar
│   ├── Logo
│   ├── Navigation
│   └── ProfileMenu
├── HeroSection
│   ├── Heading
│   ├── Description
│   └── Button
└── Footer
```

Eventually, every application becomes a tree of components.

---

## Components Describe UI

A component doesn’t directly draw pixels.

It doesn’t directly modify the browser.

It simply answers one question:

> **What should this part of the user interface look like?**

Suppose React asks:

```text
Navbar, what should you look like?
```

The component replies:

```jsx
<nav>...</nav>
```

React asks:

```text
Footer, what should you look like?
```

The component replies:

```jsx
<footer>...</footer>
```

React collects all of these descriptions and eventually builds the complete page.

---

## Components Don’t Execute Themselves

This surprises many beginners.

Suppose you write:

```jsx
<Navbar />
```

Does the browser execute `Navbar()`?

No.

React does.

Conceptually, React performs something like:

```javascript
Navbar();
```

The returned React Element becomes part of the application’s React Element tree.

This happens for every component.

---

## The Component Tree

Suppose your application contains:

```jsx
<App />
```

Internally, React executes components like this:

```text
App()
├── Navbar()
├── HomePage()
│   ├── Hero()
│   ├── CourseList()
│   └── Footer()
└── Sidebar()
```

Every function returns more React Elements.

Eventually, there are no components left, only HTML elements like:

```text
div
button
input
nav
footer
span
```

These are then passed to React DOM.

---

## A Real Example

Instead of writing one huge component, avoid this:

```jsx
function HomePage() {
  return <div>800 lines of JSX...</div>;
}
```

Split it:

```jsx
function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}
```

Each component has one responsibility.

This makes the code easier to:

- Read.
- Reuse.
- Test.
- Maintain.

---

## Single Responsibility

Good components do one thing.

**Bad**

```text
Dashboard
├── Authentication
├── Fetch Database
├── Navigation
├── Payment Logic
├── Charts
├── Settings
├── Notifications
└── Footer
```

**Good**

```text
Dashboard
├── Navbar
├── StatsCard
├── RevenueChart
├── RecentOrders
├── Sidebar
└── Footer
```

Small components are easier to understand.

> If a component is doing too many unrelated jobs, it probably needs to be split into smaller components.

---

## Mental Model

Think of React components like LEGO bricks.

One brick isn’t a castle:

```text
□
```

But many bricks together can build anything:

```text
Castle
   ↓
Made From
   ↓
Small LEGO Pieces
```

React applications work the same way.

---

## Summary

- A React component is **not** a special language feature.
- It is simply **a JavaScript function**.
- Instead of returning numbers, strings, or business-logic values, it returns **React Elements**.
- Those React Elements describe what the user interface should look like.
- React executes these functions, builds an element tree, compares it with the previous tree, and updates the browser when needed.

> **A React component is a reusable JavaScript function whose only responsibility is to describe one piece of the user interface.**

---

## Next Chapter

If components are just functions, the next natural question is:

> **How do we pass data into them?**

That’s where **Props** come in.

---

If you want, I can also convert this into:

- a **beautiful docs-style Markdown version** for GitHub/book notes,
- a **Notion-style version**,
- or a **MDX version** with custom callout components.
