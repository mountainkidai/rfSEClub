# How Next.js Works Internally — From `npm run build` to Pixels on the Screen

> **Goal:** Understand everything that happens between writing React code and a user seeing pixels on their screen.

Many developers know how to use Next.js.

Very few understand what it actually does internally.

Let's build the entire pipeline from first principles.

---

# First Principles

Imagine you've finished building Wangdu.

Your project looks like this.

```text
app/
components/
public/
package.json
```

Now you run

```bash
npm run build
```

What actually happens?

Does Next.js simply copy your files?

No.

It performs an enormous amount of work.

Think of it as a factory.

```text
Your Source Code

↓

Next.js Build Pipeline

↓

Optimized Website

↓

Deploy

↓

Users Visit
```

The important thing to understand is:

> **The build happens once. Users may visit millions of times afterward.**

---

# Two Completely Different Phases

Every Next.js application has two phases.

## Phase 1

Build Time

```text
Developer

↓

npm run build

↓

Generate Production Website
```

This happens

once

during deployment.

---

## Phase 2

Request Time

```text
User

↓

Visits Website

↓

Receives HTML
```

This happens

every time

someone visits.

Never confuse these two phases.

---

# Phase 1 — Build Time

Suppose

you run

```bash
npm run build
```

Now Next.js begins transforming

your project.

---

# Step 1 — Parse Your Code

You wrote

```tsx
export default function Page() {
  return <h1>Hello</h1>;
}
```

Computers cannot execute TypeScript or JSX. Those are languages for humans. First, Next.js converts them into plain JavaScript. This process is called

> **Compilation**
> Next.js uses **SWC** which is written in Rust. Think of SWC as a translator.

```text
TypeScript

↓

JavaScript
```

---

# Step 2 — Bundle Everything

Your project probably contains

```text
page.tsx
Navbar.tsx
Button.tsx
Search.tsx
Utils.ts
```

The browser cannot request thousands of tiny files. Instead Next.js groups related modules together.

```text
100 Files

↓

A Few Bundles
```

This process is called

> **Bundling**

Think of it like packing many small items into one shipping box.

---

# Step 3 — Remove Unused Code

Imagine

you imported

```typescript
import { Button } from "@/components";
```

but never used it. Should users download it? No. Next.js removes everything that is never used. This is called

> **Tree Shaking**

Imagine a tree.

```text
App

├── Home ✓

├── About ✓

├── OldComponent ❌

├── TestButton ❌
```

Unused branches are cut off.

The final application becomes smaller.

---

# Step 4 — Generate Static Pages

Suppose your page is Static Site Generation.

```tsx
export default async function Page() {

    const lessons = await db.query(...);

    return <LessonList lessons={lessons} />

}
```

During

```bash
npm run build
```

Next.js actually executes

this component.

```text
React Component

↓

Database Query

↓

HTML

↓

Save HTML File
```

Notice users are not involved. Everything happens during the build.

This is one of the biggest mindset shifts in modern web development.

Forget Next.js for a moment.

Let's start from **first principles**.

---

# First Principles

A website is nothing more than this:

```
Browser
    ↓
HTML
    ↓
Browser reads HTML
    ↓
Creates pixels
```

Everything else (React, Next.js, Vue, Angular...) exists only to answer one question:

> **When should this HTML be generated?**

There are only four answers.

```
Before deployment       → SSG
Sometimes after deploy  → ISR
Every request           → SSR
Inside browser          → CSR
```

That's literally it.

---

# Imagine you're writing a book

Suppose you're writing a programming book.

Question:

**When do you print the pages?**

There are four possibilities.

---

# 1. SSG (Static Site Generation)

You print every page before opening the bookstore.

```
Write book
     ↓
Print 1000 copies
     ↓
Store opens
     ↓
Customer buys one
```

Customer never waits for printing.

The book already exists.

Same idea:

```
npm run build

↓

React component runs

↓

HTML created

↓

Saved on disk

↓

Uploaded to CDN
```

Example:

```
app/

    lessons/

        greetings/page.tsx

        numbers/page.tsx

        colors/page.tsx
```

During build

```
page.tsx

↓

runs

↓

returns JSX

↓

Next converts to HTML

↓

.next/server/app/lessons/greetings.html
```

Later

```
Browser

↓

GET /lessons/greetings

↓

CDN

↓

greetings.html

↓

Done
```

No React.

No database.

No server.

Only HTML.

---

## How to enable SSG

The simplest SSG page:

```tsx
export default function Page() {
  return <h1>Hello World</h1>;
}
```

Nothing else required.

If you fetch data:

```tsx
async function getLessons() {
    return db.lesson.findMany()
}

export default async function Page() {
    const lessons = await getLessons()

    return (...)
}
```

Then

```
npm run build

↓

Database queried ONCE

↓

HTML generated

↓

Done
```

No special configuration.

If the page has **no dynamic behavior**, Next.js statically generates it automatically.

For dynamic routes:

```tsx
export async function generateStaticParams() {
  return [{ slug: "greetings" }, { slug: "numbers" }, { slug: "colors" }];
}
```

Now Next knows which pages to build.

---

# 2. ISR (Incremental Static Regeneration)

Now imagine your printed book changes every week.

Instead of printing everything again,

the bookstore says:

> "We'll keep selling today's version.
>
> Meanwhile we'll print a fresh one in the background."

That's ISR.

```
Old HTML

↓

User gets old HTML immediately

↓

Background rebuild starts

↓

Database queried

↓

New HTML saved

↓

Next visitor gets fresh HTML
```

---

## Enable ISR

Simply add:

```tsx
export const revalidate = 3600;
```

```
3600 seconds

=

1 hour
```

Example

```tsx
export const revalidate = 3600

export default async function Hotels() {
    const hotels = await db.hotel.findMany()

    return (...)
}
```

Behavior

```
First request

↓

Cached HTML

↓

No DB
```

After one hour

```
User visits

↓

Old HTML returned immediately

↓

Background rebuild

↓

DB queried

↓

New HTML cached
```

---

## Force rebuild immediately

Instead of waiting one hour:

```tsx
import { revalidatePath } from "next/cache"

await db.hotel.create(...)

revalidatePath("/hotels")
```

Now

```
Insert hotel

↓

Invalidate cache

↓

Next request rebuilds HTML

↓

Everyone sees new page
```

Perfect for:

- Blogs
- Documentation
- News
- Hotel listings
- Product catalogues

---

# 3. SSR (Server Side Rendering)

Now imagine you never print books.

Every customer walks in.

They ask:

> "Can you print my copy?"

Printer starts.

Then customer waits.

Every single customer.

That's SSR.

```
Request

↓

Server

↓

Database

↓

React

↓

HTML

↓

Browser
```

Every request repeats this.

---

## Enable SSR

Just make the page dynamic.

For example:

```tsx
import { cookies } from "next/headers"

export default async function Dashboard() {
    const cookieStore = await cookies()

    ...
}
```

or

```tsx
export const dynamic = "force-dynamic";
```

or use request-specific values:

```tsx
headers();

cookies();

searchParams;

authorization;
```

Since every user is different,

Next cannot cache the HTML.

It must rebuild every request.

---

Example

```tsx
export default async function Dashboard() {

    const progress = await db.progress.findMany()

    return (...)
}
```

Every refresh

```
Browser

↓

Server

↓

Database

↓

HTML

↓

Browser
```

Perfect for

- dashboards
- banking
- admin
- profile pages

---

# 4. CSR (Client Side Rendering)

Now imagine the bookstore gives you a blank notebook.

Inside is only:

```
Loading...
```

After reaching home

you download the real pages.

That's CSR.

---

The browser loads

```html
<div id="root"></div>
```

Then JavaScript runs.

Then

```
fetch()

↓

API

↓

JSON

↓

React renders

↓

HTML appears
```

---

## Enable CSR

Add

```tsx
"use client";
```

Then fetch data inside the browser.

```tsx
"use client"

import { useEffect, useState } from "react"

export default function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {

        fetch("/api/users")
            .then(r => r.json())
            .then(setUsers)

    }, [])

    return (...)
}
```

Browser workflow

```
Open page

↓

Loading...

↓

JS downloads

↓

API called

↓

JSON

↓

React updates screen
```

---

# Which one should you use?

## Wangdu lessons

```
Course text

Examples

Images

Audio URLs
```

Use **SSG**

```
Changes rarely

↓

Fastest possible

↓

No database after deployment
```

---

## Phunsuk hotels

```
Hotel prices

Availability

New hotels
```

Use **ISR**

```
Updates occasionally

↓

Cache most requests

↓

Refresh automatically
```

---

## a trading dashboard

```
Balance

Trades

Orders

P&L
```

Use **SSR**

```
Every user sees different data

↓

Always live
```

---

## Search autocomplete

```
Typing...

↓

Suggestions
```

Use **CSR**

```
Needs instant interaction

↓

Runs in browser
```

---

# The complete mental model

```text
                When is HTML created?

                       │
        ┌──────────────┼──────────────┐
        │              │              │
   Before deploy   After expiry   Every request
        │              │              │
       SSG            ISR            SSR
        │              │              │
    HTML file      Cached HTML   Fresh HTML
    on CDN         + Rebuild     Every time
        │              │              │
        └──────────────┼──────────────┘
                       │
              Browser receives HTML


Browser creates HTML itself
        │
       CSR
        │
HTML built using JavaScript after page loads
```

## A practical rule of thumb

When building with the **App Router** in Next.js:

| If your page is...                                                         | Use     |
| -------------------------------------------------------------------------- | ------- |
| Public content that rarely changes (docs, lessons, marketing pages)        | **SSG** |
| Public content that changes occasionally (blogs, products, hotels)         | **ISR** |
| Personalized or always-live content (dashboard, profile, cart)             | **SSR** |
| Highly interactive UI after the page loads (search, filters, chat widgets) | **CSR** |

One important thing to remember is that these modes are **not mutually exclusive**. A single Next.js page can combine them. For example, your Wangdu lesson page can be **SSG** for the lesson content, while the "Mark as Completed" button is a **Client Component (CSR)**, and submitting quiz answers uses a **Server Action**. This mix-and-match approach is one of the biggest strengths of the Next.js App Router. It aligns well with the curriculum you're building around understanding how the web works from first principles.

---

# Step 5 — Optimize Images

Suppose

you uploaded

```text
hero.jpg

5 MB
```

Should phones download

5 MB

every time?

No.

Next.js automatically generates

optimized versions.

```text
Original

↓

WebP

↓

AVIF

↓

Different Sizes
```

Different devices

receive

different image sizes.

---

# Step 6 — Fingerprint Assets

Imagine

you deploy

```text
bundle.js
```

Tomorrow

you change

one line.

Browsers

may still use

the old cached version.

To solve this

Next.js renames files.

Instead of

```text
bundle.js
```

it becomes

```text
bundle.a3f9bc.js
```

Tomorrow

after another change

```text
bundle.9d7f21.js
```

Different filename

means

the browser automatically downloads

the new version.

This technique is called

> **Cache Busting**

---

# Step 7 — Output Everything

After all optimizations

Next.js creates

```text
.next/
```

Think of

`.next`

as

the finished factory product.

Everything inside

is ready

to deploy.

---

# What's Inside `.next`?

You never edit

`.next`.

Next.js generates it.

Think of it as

the compiled version

of your application.

```text
.next/

├── server/

├── static/

├── cache/

└── BUILD_ID
```

Let's understand each folder.

---

## server/

Contains

compiled

Server Components.

```text
Your React Components

↓

Server JavaScript
```

These files execute

inside Node.js.

The browser

never downloads them.

---

## static/

Contains

everything

the browser needs.

Examples

```text
React

JavaScript Bundles

Fonts

Optimized Images
```

These files

are downloaded

by users.

---

## cache/

Stores

cached

fetch requests

and build artifacts.

This makes future builds

and requests

faster.

---

## BUILD_ID

Every deployment

gets

a unique identifier.

Example

```text
BUILD_ID

↓

4c71ab92
```

Suppose

you deploy again.

```text
BUILD_ID

↓

98df31aa
```

Browsers now know

everything changed

and automatically

invalidate old caches.

---

# Phase 2 — A User Visits Your Website

Now imagine

the website

has been deployed.

A user opens

```text
https://wangdu.org/lessons/http
```

What happens?

---

# Step 1 — DNS

The browser asks

```text
Where is wangdu.org?
```

DNS replies

```text
104.26.xx.xx
```

Now the browser

knows

which computer

to contact.

---

# Step 2 — TCP + TLS

The browser

opens

a secure connection.

```text
Browser

↓

TCP Handshake

↓

TLS Handshake

↓

Secure Connection
```

Only after this

can data travel.

---

# Step 3 — HTTP Request

Browser sends

```http
GET /lessons/http
```

to your server.

---

# Step 4 — Next.js Receives The Request

Next.js now asks

```text
Which page

matches

/lessons/http ?
```

It finds

```text
app/

↓

lessons/

↓

[id]/

↓

page.tsx
```

Then extracts

```text
params.id

↓

"http"
```

---

# Step 5 — Decide How To Render

Now Next.js asks

one question.

```text
Is this page

already generated?
```

If

SSG

↓

Return existing HTML.

If

ISR

↓

Return cached HTML

(or regenerate if needed).

If

SSR

↓

Run React now.

Everything depends

on

the rendering mode.

---

# Step 6 — React Runs

Suppose

it's SSR.

React executes

your component.

```tsx
const lesson =
    await db.query(...);

return <Lesson />
```

React generates

HTML.

```text
React Components

↓

HTML
```

---

# Step 7 — HTML Streams To Browser

The server

doesn't always wait

for the entire page.

Instead

it can send

pieces.

```text
Chunk 1

↓

Chunk 2

↓

Chunk 3
```

The browser

starts rendering

before

the whole page arrives.

This is called

> **Streaming**

---

# Step 8 — Browser Paints Pixels

Browser receives HTML. Builds the DOM. Calculates layout. Paints pixels. User finally sees the page. This moment is called

> **First Contentful Paint (FCP)**

---

# Step 9 — JavaScript Downloads

Meanwhile

the browser

downloads

```text
React

↓

Client Components

↓

Application Code
```

The page is already visible.

JavaScript

downloads

in the background.

---

# Step 10 — Hydration

Finally React executes. It finds the existing HTML. Instead of rebuilding it, React attaches behavior.

```text
HTML

↓

Hydration

↓

Interactive Page
```

Buttons now work. Search works. Forms work. This moment is called

> **Time To Interactive (TTI)**

---

# Why Hydration Errors Happen

Suppose

the server renders

```html
<p>10:00</p>
```

One second later

the browser renders

```html
<p>10:01</p>
```

React compares

both versions.

```text
Server

↓

10:00

Browser

↓

10:01
```

They don't match. React reports a hydration error. The server and browser must generate the same initial HTML.

---

# Development vs Production

Many beginners assume

```bash
npm run dev
```

and

```bash
npm run build
```

behave the same.

They don't.

---

## Development Mode

Goal

```text
Fast developer feedback.
```

Features

- Recompiles only changed files
- Hot Module Replacement (HMR)
- Detailed error messages
- Source maps
- Debug information

Speed

```text
Fast to edit

Slower to serve
```

---

## Production Mode

Goal

```text
Fast user experience.
```

Features

- Full optimization
- Tree shaking
- Minification
- Static page generation
- Optimized bundles
- Compressed assets

Speed

```text
Slower to build once

Extremely fast to serve
```

---

# Complete Lifecycle

```text
Developer

↓

Write React Code

↓

npm run build

↓

Compile

↓

Bundle

↓

Tree Shake

↓

Generate Static HTML

↓

Optimize Images

↓

Fingerprint Assets

↓

Create .next/

↓

Deploy

↓

────────────────────────────

User Visits Website

↓

DNS

↓

TCP + TLS

↓

HTTP Request

↓

Next.js Matches Route

↓

Runs React (if needed)

↓

Generate HTML

↓

Stream HTML

↓

Browser Builds DOM

↓

Browser Paints Pixels (FCP)

↓

Download JavaScript

↓

Hydration

↓

Interactive Page (TTI)
```

---

# Mental Models

| Concept        | Think Of It As                                                   |
| -------------- | ---------------------------------------------------------------- |
| Build          | Manufacturing the website before shipping it                     |
| `.next/`       | The compiled, production-ready version of your app               |
| SWC            | A translator that converts TypeScript/JSX into JavaScript        |
| Bundling       | Packing many modules into a few optimized files                  |
| Tree Shaking   | Removing code that nobody uses                                   |
| Fingerprinting | Giving assets unique names so browsers know when they've changed |
| Streaming      | Sending HTML in pieces instead of waiting for the whole page     |
| FCP            | The moment users first see content                               |
| TTI            | The moment users can actually interact with the page             |

---

# Final Thought

At its core, Next.js isn't doing anything magical.

It's acting like a highly optimized factory with two responsibilities:

1. **Before deployment**, it transforms your source code into an optimized application by compiling, bundling, optimizing, and pre-generating assets.
2. **After deployment**, it receives HTTP requests, decides how each page should be rendered, sends HTML to the browser as quickly as possible, and finally lets React hydrate the page to make it interactive.

Everything else—Server Components, SSG, ISR, SSR, streaming, image optimization, and caching—is built on top of these two phases: **build time** and **request time**.
