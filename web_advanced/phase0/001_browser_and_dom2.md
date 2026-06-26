# Why React Was Invented — Explained from First Principles

> **Goal:** Understand _why React exists_ by first understanding the actual problem it solves.

Most tutorials start by teaching React.

That's backwards.

The correct question is:

> **What problem was React trying to solve?**

If you understand the problem, React becomes obvious.

---

# Step 1: Remember How the Browser Works

A browser has one job:

```text
Download files

↓

Build the DOM

↓

Paint pixels

↓

Respond to user interactions
```

When the user clicks something,

JavaScript executes.

JavaScript cannot draw pixels.

Instead it tells the browser:

> "Please modify the DOM."

The browser then performs

```text
DOM Changes

↓

Layout

↓

Paint

↓

GPU

↓

Screen
```

Every visual change follows this pipeline.

---

# Step 2: What Happens Without React?

Let's build a simple counter.

HTML

```html
<span id="count">0</span>

<button id="button">Add</button>

<p class="warning" style="display:none">Maximum reached</p>
```

Suppose the user clicks the button.

JavaScript must now update the page.

```javascript
count++;

document.getElementById("count").textContent = count;

if (count >= max) {
  document.getElementById("button").disabled = true;

  document.querySelector(".warning").style.display = "block";
}
```

Looks easy.

Only three updates.

---

# Now Imagine A Real Product

Suppose you're building Wangdu.

The page contains

```text
200 buttons

40 forms

25 dropdowns

80 cards

15 modals

12 notifications

10 loading spinners

Several animations
```

Now the user changes one value.

What changes?

Maybe

```text
Price

↓

Discount

↓

Tax

↓

Total

↓

Shipping Cost

↓

Checkout Button

↓

Cart Icon

↓

Stock Counter

↓

Recommended Products

↓

Progress Bar
```

One small change.

Ten different UI elements must update.

---

# Manual DOM Updates Become A Nightmare

Now your JavaScript becomes

```javascript
updatePrice();

updateDiscount();

updateTax();

updateCheckoutButton();

updateStockIndicator();

updateProgressBar();

updateShipping();

updateRecommendations();

updateCartBadge();

updateAnimation();
```

Now imagine

500 functions.

Written over two years.

By six developers.

Nobody remembers

which function updates what.

---

# The Real Problem

The problem was never

> Updating the DOM.

The real problem was

> Keeping the DOM consistent.

Imagine someone forgets

```javascript
updateCheckoutButton();
```

Now

Price changed.

Total changed.

But checkout button

is still enabled.

Bug.

---

Another developer forgets

```javascript
updateProgressBar();
```

Another bug.

---

Another forgets

```javascript
updateStockIndicator();
```

Another bug.

---

The application slowly becomes

impossible to maintain.

---

# The Root Cause

Think carefully.

The problem is

**not**

```text
DOM
```

The problem is

```text
Too many places responsible
for changing the DOM.
```

Every developer

can change

every DOM element.

Chaos.

---

# React Introduces A Different Philosophy

Instead of asking

> How do I update the DOM?

React asks

> What should the UI look like **for this state?**

Notice

React changes

the question.

---

Without React

You think

```text
Button clicked.

↓

Update title.

↓

Disable button.

↓

Hide spinner.

↓

Show success.

↓

Update badge.
```

React says

Forget all that.

Instead ask

```text
Current State

↓

What should the page look like?
```

---

# UI Is A Function Of State

This is React's biggest idea.

Instead of thinking

```text
Button

↓

Update

↓

DOM
```

Think

```text
State

↓

UI
```

Mathematically

```text
UI = f(State)
```

Exactly like

```text
Area = πr²
```

Input

↓

Output.

State changes.

↓

UI changes.

That's it.

---

# Example

Instead of writing

```javascript
document.getElementById("count").textContent = count;

button.disabled = count >= max;

warning.style.display = count >= max ? "block" : "none";
```

React code becomes

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <span>{count}</span>

      <button disabled={count >= 10}>Add</button>

      {count >= 10 && <p>Maximum reached</p>}
    </>
  );
}
```

Notice something.

There are

no

```javascript
getElementById();

querySelector();

style.display;

textContent;
```

You never touch the DOM.

You only describe

what should exist.

---

# React Is Like Excel

Imagine Excel.

Suppose

```text
A = 5

B = 10

Total = A + B
```

You never manually update

```text
Total
```

When

```text
A

↓

6
```

Excel automatically recalculates

```text
Total

↓

16
```

React works similarly.

You never manually update

the UI.

Change the state.

React recalculates the UI.

---

# But How Can React Know What Changed?

Good question.

Imagine React renders

```text
Button

Count: 4
```

Later

state changes.

React renders again.

```text
Button

Count: 5
```

Notice

React doesn't immediately

touch the browser.

Instead

it creates

another tree

inside memory.

---

# The Virtual DOM

The browser already has

```text
Real DOM
```

React creates another copy.

```text
Browser

↓

Real DOM
```

```text
React

↓

Virtual DOM
```

Think of it as

React's notebook.

Before changing the real page,

React first updates

its notebook.

---

Example

Old Virtual DOM

```text
div

├── Button

└── Count: 4
```

New Virtual DOM

```text
div

├── Button

└── Count: 5
```

React compares

both trees.

---

# Diffing

React asks

```text
Button changed?

↓

No

Paragraph changed?

↓

No

Image changed?

↓

No

Count changed?

↓

Yes
```

Only one node changed.

Therefore

only one DOM update

is necessary.

This comparison algorithm

is called

> **Diffing**

---

# Why Doesn't React Rebuild Everything?

Because changing the DOM

is expensive.

Remember

every DOM update may trigger

```text
Layout

↓

Paint

↓

GPU work
```

If React rebuilt

1000 nodes

for every click

performance would be terrible.

Instead

React minimizes

real DOM work.

---

# Does React Eliminate DOM Updates?

No.

This is a common misunderstanding.

React

still updates

the DOM.

It simply calculates

the smallest possible update.

Think of React as

a smart planner.

Instead of saying

```text
Rebuild the house.
```

It says

```text
Only repaint

this one wall.
```

---

# Why React Still Needs JavaScript

> **Goal:** Understand why React applications must download JavaScript before they become interactive.

Many beginners think React magically creates webpages.

It doesn't.

React itself is **just JavaScript**.

That means before React can do **anything**, the browser must first download and execute React's code.

Let's understand why from first principles.

---

# First Principle

Imagine you build **Wangdu**.

Your homepage contains

- A logo
- A search box
- A login button
- A "Like" button

Visually it looks like this.

```html
<h1>Wangdu</h1>

<input placeholder="Search" />

<button>Login</button>

<button>❤️ Like</button>
```

Looks complete.

But appearance is not the same as functionality.

---

# HTML Cannot Think

Remember the responsibilities.

HTML answers

> **What exists?**

CSS answers

> **How does it look?**

JavaScript answers

> **What happens?**

Without JavaScript,

your button is just a picture.

Think of it like this.

```text
Real Button

↓

Looks like a button

↓

Cannot do anything
```

HTML only tells the browser

```text
Draw something that looks like a button.
```

It never says

```text
When clicked,

increment likes.
```

Only JavaScript can do that.

---

# Imagine A Remote Control

Suppose someone gives you a TV remote.

It looks perfect.

```text
📺 Remote

Power Button

Volume

Channel
```

But there are

no batteries.

What happens?

Nothing.

The buttons exist.

They simply have no behavior.

HTML is similar.

Without JavaScript,

buttons exist,

but nothing happens.

---

# Now Let's Build A React App

Suppose you write

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

Looks simple.

But ask yourself

Where is this code?

Not inside the browser.

It lives on your server.

For example

```text
wangdu.org

↓

counter.jsx
```

The browser has never seen it before.

So before React can run,

the browser must download it.

---

# What Does The Browser Download?

The browser doesn't only download

your component.

It must download

```text
React Library

+

Your Components

+

Your Application Code
```

Imagine

```text
react.js

150 KB

↓

App.js

50 KB

↓

Counter.js

10 KB

↓

Utilities

20 KB
```

Everything must be downloaded.

Without those files,

the browser has no idea

what your application is.

---

# Step 1 — Download

The browser asks

```http
GET /app.js
```

Server replies

```text
React

+

Your Components

+

Application Code
```

Now the browser has the files.

But they're still just text.

---

# Step 2 — Parse

Imagine downloading a Rust file.

```rust
fn main() {
    println!("Hello");
}
```

The CPU cannot execute text.

First,

it must understand it.

JavaScript works the same way.

The browser reads

```javascript
const count = 0;
```

and says

> "Okay, this is a variable."

Then

```javascript
function Counter() {}
```

> "Okay, this is a function."

This understanding step is called

> **Parsing**

---

# Step 3 — Compile

The browser now knows

what the code means.

But CPUs don't execute JavaScript.

CPUs execute machine instructions.

So the JavaScript engine converts

```javascript
count + 1;
```

into machine code.

This is called

> **Compilation**

Modern JavaScript engines like **V8** do this automatically.

---

# Step 4 — Execute

Only now

can JavaScript actually run.

```text
Download

↓

Parse

↓

Compile

↓

Execute
```

Until execution starts,

React literally does not exist.

---

# What Happens During Execution?

React now begins building

its own internal representation

of your UI.

Remember

React never immediately modifies

the browser's DOM.

Instead

it creates

its own tree

inside memory.

```text
React

↓

Virtual DOM
```

Example

```text
App

└── Counter

     └── Button

          Count: 0
```

Now React knows

what your application should look like.

---

# React Also Attaches Event Handlers

Remember this code.

```jsx
<button
    onClick={() => setCount(count + 1)}
>
```

HTML does not understand

```text
onClick
```

React does.

During execution,

React tells the browser

```text
When this button

is clicked,

run this JavaScript function.
```

This is called

**attaching an event handler**.

Before this happens

the browser only has

```text
Button
```

After this happens

the browser has

```text
Button

+

Click Behavior
```

Now the button actually works.

---

# What Happens If JavaScript Never Loads?

Imagine

the user's internet

disconnects

after HTML downloads.

The page looks fine.

```text
Wangdu

Search Box

Login Button

Like Button
```

User clicks

```text
❤️ Like
```

Nothing happens.

Clicks again.

Still nothing.

Why?

Because React never loaded.

No JavaScript means

no behavior.

---

# Timeline

Suppose the page takes

3 seconds

to download JavaScript.

Timeline

```text
0s

↓

HTML arrives

↓

Page appears

↓

Buttons visible

↓

--------------------------------

1s

↓

Downloading React

↓

--------------------------------

2s

↓

Downloading Application Code

↓

--------------------------------

3s

↓

JavaScript Executes

↓

React Builds Virtual DOM

↓

React Attaches Event Handlers

↓

Page Becomes Interactive
```

Notice something important.

The user can **see**

the page

long before

the page can **respond**.

These are two different things.

---

# Real Life Example

Imagine opening YouTube.

You immediately see

```text
Logo

Search Box

Video Thumbnails

Menu
```

But suppose JavaScript hasn't finished loading.

You click

```text
Search
```

Nothing.

You click

```text
Menu
```

Nothing.

Everything looks ready,

but nothing works.

That's because

the interface exists,

but its behavior hasn't been attached yet.

---

# This Is Why Large React Apps Feel Slow

Imagine downloading

```text
React

150 KB

+

Your App

800 KB

+

Charts

300 KB

+

Maps

500 KB

↓

Total

1.75 MB
```

The browser must

```text
Download

↓

Parse

↓

Compile

↓

Execute
```

all of that

before React can make

the page interactive.

This delay is one of the main reasons frameworks like Next.js became popular.

---

# First-Principles Mental Model

Think of React as an actor.

Before the actor can perform,

they must first

```text
Travel to the theater

↓

Read the script

↓

Memorize the lines

↓

Walk onto the stage

↓

Start acting
```

React follows the same sequence.

```text
Download

↓

Parse

↓

Compile

↓

Execute

↓

Build Virtual DOM

↓

Attach Event Handlers

↓

Interactive UI
```

Until those steps finish,

React cannot help the browser.

---

# Final Thought

React is **not** part of the browser.

The browser only understands

- HTML
- CSS
- JavaScript

React is **just a JavaScript library**.

That means every React application begins with the same sequence:

```text
Browser

↓

Download React

↓

Download Your Application

↓

Parse JavaScript

↓

Compile JavaScript

↓

Execute JavaScript

↓

React Builds Virtual DOM

↓

React Attaches Event Handlers

↓

User Can Finally Interact With The Page
```

The key idea is simple:

> **A page can be visible before it is interactive.**

HTML makes a page **visible**.

JavaScript makes it **alive**.

React is JavaScript, so React cannot make your application interactive until the browser has downloaded and executed it.

---

# This Is Why Next.js Exists

Instead of

Browser

↓

Generating HTML

Next.js says

Server

↓

Generate HTML first

↓

Send ready-made HTML

↓

Browser immediately displays it

↓

React loads later

↓

Page becomes interactive

Users see content

almost instantly.

---

# Hydration

Imagine the server sends

```html
<h1>Learning React</h1>

<button>Like</button>
```

The page appears immediately.

But clicking

does nothing.

Why?

Because

buttons

still have

no JavaScript.

Later

React downloads.

It connects

event handlers

to existing HTML.

Now

```text
Button

↓

Clickable
```

This process is called

> **Hydration**

Think of hydration as

giving life

to already-rendered HTML.

---

# The Entire Flow

```text
Server

↓

Creates HTML

↓

Browser downloads HTML

↓

Browser builds DOM

↓

Browser paints page

↓

Downloads React

↓

Downloads your JavaScript

↓

JavaScript executes

↓

React builds Virtual DOM

↓

React hydrates page

↓

User clicks button

↓

State changes

↓

React creates new Virtual DOM

↓

Diffing algorithm compares trees

↓

Minimal DOM updates

↓

Browser recalculates layout

↓

Browser paints pixels

↓

User sees updated UI
```

---

# Mental Models

| Concept     | Think Of It As                                           |
| ----------- | -------------------------------------------------------- |
| HTML        | The structure of the page                                |
| CSS         | The appearance of the page                               |
| JavaScript  | The behavior of the page                                 |
| DOM         | The browser's object tree representing the page          |
| State       | The application's current data                           |
| React       | A function that converts **State → UI**                  |
| Virtual DOM | React's private notebook of what the UI should look like |
| Diffing     | Finding the smallest set of changes between two UI trees |
| Real DOM    | The actual page managed by the browser                   |
| Next.js     | A framework that sends HTML before JavaScript is ready   |
| Hydration   | React attaching behavior to HTML that already exists     |

---

# Final Thought

React was **not** invented because the DOM was slow.

It was invented because **humans are bad at manually keeping large user interfaces consistent**.

The Virtual DOM is an optimization, but React's biggest contribution is a programming model:

> **The UI should be a pure function of your application's state.**

Once you stop thinking in terms of "change this button" and instead think "given this state, what should the entire interface look like?", React, Next.js, and modern frontend architecture all become much easier to understand.

# The Problem With Client-Side Rendering (CSR)

> **Goal:** Understand why Client-Side Rendering (CSR) became a problem and why frameworks like Next.js were created.

Before understanding Next.js, ask a simpler question:

> **Where should HTML be created?**

There are only two possibilities.

```text
Option 1

Server creates HTML

↓

Browser displays it
```

or

```text
Option 2

Browser downloads JavaScript

↓

Browser creates HTML
```

React originally chose **Option 2**.

Let's understand why.

---

# First Principles

Imagine you're building **Wangdu**.

A user opens

```text
https://wangdu.org/blog/how-http-works
```

Your database already contains

```text
Title:
How HTTP Works

Content:
...
```

The article already exists.

The server already knows

- Title
- Author
- Content
- Images
- Comments

Everything.

Nothing needs to be calculated.

So ask yourself

> **Why should the browser rebuild something the server already knows?**

---

# How Traditional React Works (Client-Side Rendering)

Let's follow every step.

### Step 1

The browser asks

```http
GET /blog/how-http-works
```

---

### Step 2

Instead of sending the article,

the server sends

```html
<div id="root"></div>

<script src="/app.js"></script>
```

Notice something.

Where is the article?

It isn't there.

The HTML is almost empty.

---

### Step 3

The browser downloads

```text
React

↓

Your Components

↓

Your Application Code
```

Imagine

```text
React

150 KB

+

Application

600 KB

+

Other Libraries

300 KB
```

Almost

```text
1 MB
```

must be downloaded.

---

### Step 4

The browser parses

all the JavaScript.

```text
Download

↓

Parse

↓

Compile

↓

Execute
```

Only after all of that

does React start running.

---

### Step 5

React now asks your backend

```http
GET /api/blog/how-http-works
```

Server replies

```json
{
  "title": "How HTTP Works",
  "content": "..."
}
```

---

### Step 6

React finally creates HTML

inside the browser.

```jsx
<Article title={data.title} content={data.content} />
```

Only now

does the user actually see

the article.

---

# Think About What Just Happened

The article already existed

on your server.

Yet the browser still had to

```text
Download React

↓

Download Components

↓

Run JavaScript

↓

Request the article

↓

Generate HTML
```

before displaying it.

That's a lot of work.

---

# Visual Timeline

Imagine

React takes

3 seconds

to load.

```text
Time →

0s

↓

Request page

↓

------------------------------------------------

1s

↓

Download React

↓

------------------------------------------------

2s

↓

Download App

↓

------------------------------------------------

3s

↓

Execute JavaScript

↓

------------------------------------------------

4s

↓

Fetch Article

↓

------------------------------------------------

5s

↓

Generate HTML

↓

User finally sees article
```

The article existed

the entire time.

The browser simply hadn't built it yet.

---

# Why Is This Wasteful?

Imagine going to a restaurant.

You order

```text
Pizza
```

The chef has already cooked it.

Instead of serving it,

the waiter gives you

```text
Flour

Tomatoes

Cheese

Recipe Book

Oven
```

and says

```text
Please cook it yourself.
```

You'd ask

> "Why?

The chef already made it."

That's exactly what Client-Side Rendering does.

The server already knows

the final page.

Yet it sends

the ingredients

instead of

the finished page.

---

# Another Example

Imagine a PDF.

The PDF already exists.

Would you rather receive

```text
The PDF
```

or

```text
PDF Library

↓

Fonts

↓

Drawing Instructions

↓

Render Engine

↓

Generate PDF Yourself
```

Obviously

you'd rather receive

the finished PDF.

---

# Why Was Client-Side Rendering Popular?

Because many applications

aren't just documents.

Imagine

Google Docs.

The page changes constantly.

```text
Typing

↓

Cursor Movement

↓

Comments

↓

Realtime Collaboration

↓

Autosave
```

The browser must update

the interface continuously.

React is excellent for this.

---

But a blog article

doesn't change

every second.

Once published,

it mostly stays the same.

Generating it inside

the browser

doesn't provide much benefit.

---

# Compare The Two Approaches

## Client-Side Rendering

```text
Browser

↓

Request Page

↓

Download React

↓

Download App

↓

Parse JavaScript

↓

Compile JavaScript

↓

Execute JavaScript

↓

Fetch Data

↓

Generate HTML

↓

Display Page
```

The browser performs

almost all the work.

---

## Server-Side Rendering

```text
Browser

↓

Request Page

↓

Server Generates HTML

↓

Browser Receives HTML

↓

Browser Displays Page
```

Much simpler.

The server performs

the heavy work.

---

# Why Is Server-Side Rendering Faster?

Suppose your article contains

```text
100 paragraphs

10 images

5 code blocks
```

The server already knows

all of them.

Instead of sending

```text
Instructions
```

it sends

```html
<h1>How HTTP Works</h1>

<p>...</p>

<img />

<pre></pre>
```

The browser immediately builds

the DOM

and paints pixels.

No waiting

for React.

---

# Real Numbers

Imagine

```text
React

150 KB

Application

800 KB

Total

950 KB
```

On a slow

3G connection

downloading

950 KB

may take several seconds.

During those seconds

the user sees

```text
Loading...
```

or sometimes

a blank screen.

Now imagine

the server simply sends

```text
40 KB HTML
```

The browser

immediately renders

the article.

Much faster.

---

# But Don't We Still Need React?

Yes.

Eventually.

Suppose your blog has

```text
❤️ Like Button

Comment Box

Search

Dark Mode

Share Menu
```

Those need JavaScript.

So React still loads.

The difference is

the user already sees

the article

while React is downloading.

The page is useful

before it becomes interactive.

---

# This Is Exactly What Next.js Solves

Instead of making

the browser generate HTML,

Next.js asks

the server

to generate HTML first.

Flow

```text
Browser

↓

GET /blog/http

↓

Server

↓

Reads Database

↓

Creates HTML

↓

Returns Finished HTML

↓

Browser Immediately Paints Page

↓

Downloads React

↓

React Adds Interactivity
```

Users don't stare

at a blank page

waiting for JavaScript.

They immediately start reading.

---

# Mental Models

| Client-Side Rendering (CSR)      | Server-Side Rendering (SSR)      |
| -------------------------------- | -------------------------------- |
| Browser builds HTML              | Server builds HTML               |
| Browser downloads React first    | Browser receives ready-made HTML |
| Slower first render              | Faster first render              |
| Good for highly interactive apps | Good for content-heavy pages     |

---

# First-Principles Summary

Ask one simple question:

> **Who already knows the final HTML?**

If the answer is

```text
The Server
```

then making

the browser rebuild

that same HTML

is unnecessary work.

For pages like

- Blogs
- Documentation
- Marketing sites
- News articles
- Product pages

the server can simply send

the finished HTML.

The browser immediately displays it.

Later,

React downloads,

attaches event handlers,

and the page becomes interactive.

That's the key idea behind **Server-Side Rendering** and why frameworks like **Next.js** became so popular.
