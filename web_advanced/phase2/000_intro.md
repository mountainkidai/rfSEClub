# What Is Next.js? — Explained from First Principles

> **Goal:** Understand what Next.js actually is, what problem it solves, and how it fits into the web stack.

Most tutorials introduce Next.js like this:

> "Next.js is a React framework."

That's true.

But it doesn't actually explain anything.

Let's start from the machine itself.

---

# First Principles

Suppose someone opens

```text
https://wangdu.org
```

What actually happens?

Think about the computers involved.

There are only two.

```text
Your Laptop

        ↕

Internet

        ↕

Wangdu Server
```

The browser sends

```http
GET /
```

The server must decide

```text
What HTML should I return?
```

Everything in Next.js exists to answer this one question.

---

# The Software Stack

Let's start from the bottom.

Every piece of software depends on something below it.

Think of software as layers.

```text
React Components
        │
        ▼
Next.js
        │
        ▼
Node.js
        │
        ▼
Operating System
        │
        ▼
Hardware
```

Let's understand every layer.

---

# Layer 1 — Hardware

Everything starts with physical hardware.

```text
CPU

RAM

SSD

Network Card
```

These are real electronic components.

Without them,

nothing can execute.

---

# Layer 2 — Operating System

The hardware is difficult to program directly.

So we install an Operating System.

Examples

```text
Linux

macOS

Windows
```

The Operating System manages

```text
CPU

Memory

Files

Network

Processes
```

Whenever a program wants

```text
Read File

Open Socket

Allocate Memory
```

it asks the Operating System.

---

# Layer 3 — Node.js

JavaScript was originally created

only for browsers.

This code

```javascript
console.log("Hello");
```

could only run

inside Chrome,

Firefox,

or Safari.

Then Node.js was created.

Node.js asked

> **Why can't JavaScript run on servers too?**

Instead of running JavaScript

inside Chrome,

Node.js embeds

Chrome's JavaScript engine

inside a server application.

```text
Node.js

↓

V8 Engine

↓

JavaScript Executes
```

Now JavaScript can run

without a browser.

---

# What Does Node.js Add?

Browsers intentionally restrict JavaScript.

For example,

this code

```javascript
fs.readFile("secret.txt");
```

would be extremely dangerous

inside a browser.

Websites should never read

your computer's files.

So browsers don't allow it.

---

Node.js runs

on your own server,

where it is trusted.

Therefore it provides

extra capabilities.

```text
Read Files

Write Files

Connect To Database

Listen For HTTP Requests

Open TCP Connections

Access Environment Variables
```

These APIs don't come from JavaScript.

They come from Node.js.

---

# Layer 4 — React

Now suppose

Node.js receives

```http
GET /
```

It still has a problem.

How do we generate HTML?

Without React,

you might write

```javascript
const html = `
<html>
  <body>
    <h1>Wangdu</h1>
  </body>
</html>
`;
```

Imagine doing this

for

50 pages.

Very quickly,

HTML becomes difficult to maintain.

React solves this problem.

Instead of writing HTML strings,

you write components.

```jsx
function HomePage() {
  return <h1>Wangdu</h1>;
}
```

React converts components

into HTML.

Think of React as

```text
React Components

↓

HTML
```

That's React's primary job.

---

# Layer 5 — Next.js

Now imagine

you build

100 pages.

Questions appear.

```text
Which component handles /about?

Which component handles /hotels?

Should HTML be generated on the server?

Should it be generated during build?

How should images be optimized?

Where do API endpoints live?

How do fonts load efficiently?

How do we cache pages?
```

React doesn't answer

any of these questions.

React only knows

how to convert

components

into HTML.

Everything else

is your responsibility.

---

# What Next.js Really Is

Next.js is a framework built on top of Node.js and React.

It doesn't replace either one.

It coordinates them.

Think of it as

the conductor

of an orchestra.

```text
Node.js

↓

Runs JavaScript

↓

React

↓

Creates HTML

↓

Next.js

↓

Decides

• Which component?

• When should it run?

• Should HTML be cached?

• Should page stream?

• Should browser hydrate?

• Which URL matches which file?
```

---

# A First-Principles Definition

If we strip away

all the marketing,

Next.js is simply

> **A Node.js application that receives HTTP requests, runs React components, converts them into HTML, and sends that HTML back to the browser.**

Everything else

is built on top of that idea.

---

# What Happens When Someone Opens Wangdu?

Suppose the user visits

```text
https://wangdu.org/about
```

Here's the entire journey.

```text
Browser

↓

GET /about

↓

Node.js

↓

Next.js receives request

↓

Finds

app/about/page.tsx

↓

Runs React Component

↓

React Generates HTML

↓

Node.js Sends HTML

↓

Browser Displays Page
```

This is the heart

of Next.js.

---

# Why Isn't React Alone Enough?

Suppose you're using plain React.

The server returns

```html
<html>
  <body>
    <div id="root"></div>

    <script src="bundle.js"></script>
  </body>
</html>
```

Notice something.

The page contains

almost no content.

The browser now has to

```text
Download React

↓

Download Application

↓

Execute JavaScript

↓

Generate HTML

↓

Display Page
```

Until JavaScript finishes,

the user sees

```text
Blank Page
```

or

```text
Loading...
```

---

# Imagine Slow Internet

Suppose the user has 30 kbps mobile internet. Downloading React plus your application might take 10–30 seconds. For those 10–30 seconds, the browser has almost nothing to display.

---

# What Next.js Changes

Instead of sending

instructions,

Next.js sends

the finished page.

Browser requests

```http
GET /
```

Next.js responds

```html
<nav>Wangdu</nav>

<h1>Learn English</h1>

<ul>
  <li>Lesson 1</li>

  <li>Lesson 2</li>
</ul>
```

Now the browser immediately builds

the DOM

and paints pixels.

The user starts reading

before JavaScript

even finishes downloading.

---

# Think Of A Restaurant

Imagine

ordering pizza.

## Plain React

The waiter brings

```text
Flour

Cheese

Tomatoes

Recipe
```

Then says

```text
Cook it yourself.
```

That's Client-Side Rendering.

---

## Next.js

The chef cooks

the pizza.

The waiter serves

the finished meal.

```text
🍕

Ready To Eat
```

That's Server-Side Rendering.

---

# Features Next.js Gives You

Without Next.js,

you would build

many systems yourself.

| Problem           | Without Next.js             | With Next.js          |
| ----------------- | --------------------------- | --------------------- |
| Routing           | Configure routes manually   | Folders become routes |
| Server Rendering  | Write HTTP server yourself  | Built-in              |
| Static Generation | Build custom scripts        | Built-in              |
| API Server        | Separate Express project    | `route.ts`            |
| Images            | Build optimization pipeline | `<Image />`           |
| Fonts             | Configure manually          | `next/font`           |
| Bundling          | Configure Webpack/Vite      | Built-in              |
| Code Splitting    | Manual optimization         | Automatic             |

Notice something.

None of these

are React features.

They're framework features.

---

# What Next.js Is NOT

Many beginners think

Next.js

is another language.

It isn't.

Next.js doesn't replace

JavaScript.

It doesn't replace

React.

It doesn't replace

Node.js.

It combines them.

```text
Hardware

↓

Operating System

↓

Node.js

↓

React

↓

Next.js
```

Because of this,

everything you learn about

Node.js

still applies.

Everything you learn about

React

still applies.

When debugging,

you're usually debugging

Node.js

or

React,

not some mysterious

"Next.js magic."

---

# What Next.js Does Internally

At a high level,

every request follows

the same pipeline.

```text
HTTP Request

↓

Match URL

↓

Find React Component

↓

Execute Component

↓

React Creates HTML

↓

Return HTML

↓

Browser Displays Page
```

In simplified code,

it looks something like this.

```javascript
const http = require("http");

const server = http.createServer(async (req, res) => {
  // 1. Find which page matches the URL

  // 2. Run the React component

  // 3. Convert React to HTML

  const html = await renderReactComponent(req.url);

  // 4. Send HTML back

  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  res.end(html);
});

server.listen(3000);
```

A real Next.js server is much more sophisticated,

but the core idea is exactly this.

---

# Mental Models

| Layer            | Responsibility                                            |
| ---------------- | --------------------------------------------------------- |
| Hardware         | Executes instructions                                     |
| Operating System | Manages hardware resources                                |
| Node.js          | Runs JavaScript on the server and provides server APIs    |
| React            | Converts components into HTML                             |
| Next.js          | Decides **when**, **where**, and **how** React should run |

---

# Final Thought

When someone asks

> **"What is Next.js?"**

don't answer

> "It's a React framework."

Answer this instead:

> **Next.js is a Node.js application that sits between the browser and React. It receives HTTP requests, decides which React components should run, determines whether they run on the server or in the browser, converts them into HTML when appropriate, and sends the result back to the user. Everything else—routing, caching, Server Components, streaming, image optimization, and rendering modes—is built on top of that single responsibility.**
