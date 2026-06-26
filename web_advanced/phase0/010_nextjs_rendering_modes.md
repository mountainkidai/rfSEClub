# Hydration & Next.js Rendering Modes — Explained from First Principles

> **Goal:** Understand _why hydration exists_, _why it has a cost_, and how **SSG**, **ISR**, **SSR**, and **CSR** are simply different answers to one question:
>
> **"When should HTML be generated?"**

---

# First Principle

Before React...

remember one thing.

The browser only understands

```text
HTML

↓

Build DOM

↓

Paint Pixels
```

The browser **cannot display React components.**

It can only display **HTML**.

So React's first job is always

```text
React Components

↓

HTML

↓

Browser
```

The only question is

> **Who creates that HTML?**

There are only two possible answers.

```text
Server
```

or

```text
Browser
```

Everything in Next.js is built around this one decision.

---

# Before Understanding Hydration

Let's build a simple page.

```jsx
function LikeButton() {
  return <button>❤️ Like (42)</button>;
}
```

React eventually produces

```html
<button>❤️ Like (42)</button>
```

The browser understands HTML.

It immediately draws

```text
❤️ Like (42)
```

on the screen.

Looks perfect.

---

# But Is The Button Alive?

No.

Ask yourself.

Where is

```jsx
onClick={() => likePost()}
```

inside HTML?

It isn't.

HTML only describes

```text
What exists.
```

It never describes

```text
What should happen.
```

The browser simply knows

```text
Draw a button.
```

It does **not** know

```text
When clicked

↓

Increment Likes
```

That logic exists

inside JavaScript.

---

# Imagine A Toy Car

Imagine buying a toy car.

It looks amazing.

```text
🚗
```

Beautiful wheels.

Nice paint.

Doors.

Windows.

Everything.

But there's one problem.

No engine.

Can it move?

No.

The car exists.

It simply has no behavior.

HTML is exactly like this.

It gives you

```text
Structure

Appearance
```

But no behavior.

---

# What Makes It Alive?

JavaScript.

React eventually downloads

and tells the browser

```text
When this button

is clicked

↓

Run this function.
```

Only now

does the button become

interactive.

---

# This Process Is Called Hydration

Hydration means

> **React takes HTML that already exists and attaches JavaScript behavior to it.**

Think of hydration as

```text
HTML

+

JavaScript

↓

Interactive Website
```

---

# Step-by-Step Example

Imagine

the user visits

```text
wangdu.org
```

---

## Step 1

Browser requests

```http
GET /
```

---

## Step 2

Server responds

```html
<h1>Wangdu</h1>

<button>❤️ Like (42)</button>
```

Browser immediately builds

the DOM.

```text
Document

├── h1

└── button
```

Browser paints pixels.

The user sees

```text
❤️ Like (42)
```

Everything looks ready.

---

## Step 3

User clicks.

Nothing happens.

Why?

Because

there is still

no JavaScript.

The button is

just HTML.

---

## Step 4

Meanwhile

browser downloads

```text
React

↓

Application Code

↓

Components
```

---

## Step 5

Browser executes React.

React now finds

the existing HTML.

```html
<button>❤️ Like (42)</button>
```

It does **not**

create another button.

Instead it says

```text
I see

this button

already exists.
```

Then it attaches

```jsx
onClick = { handleLike };
```

to that existing button.

Now clicking works.

This attachment process

is called

> **Hydration**

---

# Why Is It Called Hydration?

Imagine

a dry sponge.

```text
□□□□□□□□
```

It has shape.

But no water.

Now

add water.

```text
🟦🟦🟦🟦
```

Same sponge.

Now alive.

Hydration works similarly.

HTML already exists.

React simply adds

behavior.

---

# Timeline

Imagine

JavaScript takes

3 seconds

to download.

Timeline

```text
0s

↓

HTML arrives

↓

Browser paints page

↓

User sees content

--------------------------------

1s

↓

Downloading React

--------------------------------

2s

↓

Downloading App

--------------------------------

3s

↓

React executes

↓

Hydration

↓

Buttons become clickable
```

Notice something.

The page became

visible

at

```text
0 seconds.
```

But interactive

only at

```text
3 seconds.
```

---

# Two Important Metrics

These are often confused.

---

## First Contentful Paint (FCP)

Question:

> **When does the user first see something?**

Example

```text
0.8 seconds

↓

Logo appears
```

FCP

=

0.8s

---

## Time To Interactive (TTI)

Question:

> **When can the user actually use the page?**

Example

```text
3.2 seconds

↓

Buttons work

↓

Search works

↓

Navigation works
```

TTI

=

3.2s

---

Notice

```text
FCP

≠

TTI
```

A page can

look ready

while still

doing nothing.

---

# Why Hydration Has A Cost

React itself

must first

```text
Download

↓

Parse

↓

Compile

↓

Execute
```

Only then

can hydration begin.

On a powerful laptop

this may take

```text
100 ms
```

On a slow phone

with

```text
30 kbps
```

this may take

```text
10–30 seconds.
```

The user already sees

the article.

But

buttons

still don't work.

---

# Why This Is Still Better Than CSR

Suppose

there is no HTML.

The browser must

```text
Download React

↓

Download App

↓

Execute JavaScript

↓

Generate HTML

↓

Paint Page
```

Now the user sees

nothing

for several seconds.

Hydration avoids this.

The user can at least

start reading immediately.

---

# Now We Can Understand Next.js Rendering Modes

Every rendering mode

answers

exactly one question.

> **When should HTML be generated?**

That's it.

Everything else

is just an implementation detail.

---

# 1. SSG — Static Site Generation

Question:

> When is HTML created?

Answer:

```text
During Build
```

Imagine

you're deploying Wangdu.

Before deployment

Next.js runs

every React component.

```text
React Components

↓

Generate HTML

↓

Save HTML Files
```

Example

```text
/blog/http

↓

blog/http.html
```

Later

users request

```text
/blog/http
```

Server simply replies

```text
Already generated.

Here you go.
```

No database.

No React execution.

No server computation.

---

## Timeline

```text
Build Time

↓

Generate HTML

↓

Deploy

↓

User Requests

↓

Return HTML Immediately
```

This is why SSG is extremely fast.

---

## Best For

- Documentation
- Blogs
- Wangdu lessons
- Marketing pages
- Static hotel information

---

# 2. ISR — Incremental Static Regeneration

Same idea.

Except

HTML occasionally

becomes stale.

Imagine

hotel prices

update

every hour.

Instead of rebuilding

the whole website

every minute

Next.js says

```text
Use existing HTML.

↓

If older than 1 hour

↓

Regenerate in background.
```

Users never wait.

Old page

keeps working

until

new page

is ready.

---

## Timeline

```text
User

↓

Old HTML

↓

Background Regeneration

↓

Next User

↓

Fresh HTML
```

---

## Best For

- Hotel details
- Restaurant menus
- Nutrition data
- Maps

---

# 3. SSR — Server-Side Rendering

Question

When is HTML created?

Answer

```text
Every Request
```

User requests

```text
/dashboard
```

Server executes

React

every single time.

```text
Request

↓

React Runs

↓

Query Database

↓

Generate HTML

↓

Return HTML
```

Fresh data.

Every request.

---

## Best For

- User Dashboard
- Bank Account
- AlpKid Portfolio
- Personalized Content

---

# 4. CSR — Client-Side Rendering

Question

Who creates HTML?

Answer

```text
Browser
```

Flow

```text
Browser

↓

Downloads React

↓

Downloads App

↓

Runs React

↓

Fetches Data

↓

Generates HTML

↓

Displays Page
```

The server

never generated

the page.

---

## Best For

Only things like

- Live Chat
- Drawing Canvas
- Video Editors
- Games

---

# Comparing All Four

| Mode    | When HTML Is Created                 | Where HTML Is Created      |
| ------- | ------------------------------------ | -------------------------- |
| **SSG** | Build Time                           | Server (once during build) |
| **ISR** | Build Time + Background Regeneration | Server                     |
| **SSR** | Every Request                        | Server                     |
| **CSR** | After JavaScript Loads               | Browser                    |

---

# Decision Tree

Instead of memorizing acronyms,

ask yourself one question.

```text
Does the server already know
the HTML?

↓

YES

↓

Should it ever change?

↓

No

↓

SSG

-------------------------

Changes Occasionally?

↓

ISR

-------------------------

Changes Every Request?

↓

SSR

-------------------------

Server Doesn't Know?

↓

Browser Must Build It

↓

CSR
```

---

# First-Principles Summary

Every modern rendering strategy comes from answering one simple question:

> **When should the HTML be created?**

| Strategy | Simple Answer                                                                                  |
| -------- | ---------------------------------------------------------------------------------------------- |
| **SSG**  | Before users ever visit the site.                                                              |
| **ISR**  | Before users visit, then refresh it occasionally in the background.                            |
| **SSR**  | Right before sending the response to each user.                                                |
| **CSR**  | Don't create HTML on the server at all; let the browser build it after downloading JavaScript. |

Once you understand that **all rendering modes differ only in _when_ and _where_ HTML is generated**, the entire Next.js rendering model becomes much easier to reason about.
