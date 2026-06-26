# Why JSX Exists — Explained from First Principles

> **Goal:** Understand why JSX was invented, why it is **not HTML**, and what actually happens when you write `<div>Hello</div>`.

Most tutorials begin React like this:

```jsx
function App() {
  return <h1>Hello World</h1>;
}
```

Then they immediately start teaching hooks.

That's backwards.

Before learning React, we should answer one simple question:

> **What exactly is `<h1>Hello</h1>`?**

Is it HTML?

Is it JavaScript?

Is it something else?

Let's start from first principles.

---

# First Principle

Remember what browsers understand.

Browsers only understand three languages.

```text
HTML

CSS

JavaScript
```

That's it.

Nothing else.

Browsers do **not** understand

```text
JSX

TypeScript

SCSS

TSX
```

Those are languages created for developers.

They must eventually become

```text
HTML

CSS

JavaScript
```

before the browser can execute them.

---

# A Question

Suppose Chrome downloads

```jsx
function App() {
  return <h1>Hello</h1>;
}
```

Can Chrome execute this?

No.

Why?

Because

```jsx
<h1>Hello</h1>
```

is **not valid JavaScript**.

Try running it directly in Node.js.

```javascript
<h1>Hello</h1>
```

You'll immediately get

```text
SyntaxError
```

So something must transform JSX before JavaScript runs.

---

# Before JSX

Let's pretend JSX never existed.

How would React describe

```html
<div>
  <h1>Hello</h1>
</div>
```

using only JavaScript?

It would look like this.

```javascript
const element = React.createElement(
  "div",
  null,
  React.createElement("h1", null, "Hello"),
);
```

This works perfectly. But imagine writing an entire application like this.

```javascript
React.createElement(

  React.createElement(

    React.createElement(

      React.createElement(

...
```

The code becomes difficult to read.

---

# The Problem

Humans think visually.

We naturally think

```text
div

└── h1

    └── Hello
```

But

```javascript
React.createElement();
```

forces us to think inside-out. Nested function calls don't resemble the final UI.

---

# JSX Was Invented

JSX solves exactly one problem. It makes React elements look like HTML. Instead of writing

```javascript
React.createElement("div", null, React.createElement("h1", null, "Hello"));
```

we write

```jsx
<div>
  <h1>Hello</h1>
</div>
```

Much easier

for humans.

---

# JSX Is Not HTML

This is probably the biggest misconception in React. Many developers believe

```jsx
<div>Hello</div>
```

is HTML. It isn't. It merely
**looks**
like HTML. Think about this.

Can HTML contain JavaScript variables?

```jsx
<h1>Hello, {name}</h1>
```

HTML cannot.

Can HTML execute

JavaScript expressions?

```jsx
<p>{2 + 2}</p>
```

No.

Can HTML call

functions?

```jsx
<Button />
```

No.

JSX can.

Because JSX is

a JavaScript syntax,

not HTML.

---

# Think Of JSX As A New Syntax

Imagine mathematics.

These two expressions

mean exactly the same thing.

```text
2 × (3 + 4)
```

and

```text
(3 + 4) * 2
```

Different syntax.

Same meaning.

JSX is similar.

These are equivalent.

```jsx
<div>
  <h1>Hello</h1>
</div>
```

```javascript
React.createElement("div", null, React.createElement("h1", null, "Hello"));
```

Different syntax.

Same meaning.

---

# So Why Doesn't The Browser Crash?

Because the browser never sees JSX. Before your application starts,

Next.js or Vite
or
Create React App

runs a compiler.

The compiler transforms

```jsx
<div>
  <h1>Hello</h1>
</div>
```

into

```javascript
React.createElement("div", null, React.createElement("h1", null, "Hello"));
```

Only JavaScript

reaches the browser.

JSX disappears completely.

---

# Complete Pipeline

```text
You Write

↓

JSX

↓

Compiler (SWC / Babel)

↓

JavaScript

↓

Browser Executes JavaScript
```

Notice

JSX never reaches Chrome.

It only exists

while you're writing code.

---

# Mental Models

| Concept  | Think Of It As                                                               |
| -------- | ---------------------------------------------------------------------------- |
| HTML     | A language browsers understand.                                              |
| JSX      | A developer-friendly syntax that looks like HTML but compiles to JavaScript. |
| Compiler | A translator that converts JSX into JavaScript before the browser sees it.   |
| React    | Never receives raw JSX. It works with JavaScript after compilation.          |

---

# Final Thought

JSX was not invented to make websites faster.

It was invented to make **developers more productive**.

Instead of writing deeply nested function calls, developers can write UI in a syntax that resembles HTML while still having the full power of JavaScript.

The key idea to remember is:

> **JSX is not HTML. JSX is a language for developers. Browsers never execute JSX—they only execute the JavaScript produced by the compiler.**

The next article answers an even more interesting question:

> **If JSX becomes JavaScript, what exactly does `React.createElement()` return?**
