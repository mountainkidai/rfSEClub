# Layer 5: Next.js App Router — Explained from First Principles

> **Goal:** Understand the App Router by answering one simple question:
>
> **"How does Next.js know what page to show?"**

Forget the framework for a moment.

Let's start from the web itself.

---

# First Principles

Imagine someone visits

```text
https://wangdu.org/hotels/shimla
```

The browser sends

```http
GET /hotels/shimla
```

Your server now has one problem.

> **Which code should handle `/hotels/shimla`?**

There are many ways to solve this.

---

# Before Next.js

Traditionally, frameworks used routing tables.

Example

```javascript
router.get("/", homeHandler);

router.get("/about", aboutHandler);

router.get("/hotels", hotelsHandler);

router.get("/hotels/:id", hotelHandler);
```

Every new page required

- writing the page
- registering the route

Two separate steps.

Developers often forgot one.

---

# Next.js Asks A Different Question

Instead of asking

> "Where is the routing table?"

Next.js asks

> **"Why not let the file system become the routing table?"**

Folders already organize code.

Why not organize URLs the same way?

This is called

> **File-System Routing**

---

# Every Folder Represents A URL

Suppose your project looks like

```text
app/

├── page.tsx

├── about/
│   └── page.tsx

├── hotels/
│   ├── page.tsx
│   └── shimla/
│       └── page.tsx
```

Next.js automatically understands

```text
app/page.tsx

↓

/
```

```text
app/about/page.tsx

↓

/about
```

```text
app/hotels/page.tsx

↓

/hotels
```

```text
app/hotels/shimla/page.tsx

↓

/hotels/shimla
```

No routing configuration.

No route registration.

The folders **are** the routes.

---

# Dynamic Routes

Now imagine

you have

```text
50,000 hotels.
```

Will you create

```text
shimla/

manali/

goa/

delhi/

...
```

50,000 folders?

Of course not.

Instead,

Next.js lets folders become variables.

```text
app/

└── hotels/

      └── [id]/

            page.tsx
```

Notice the square brackets.

```text
[id]
```

means

> "This part of the URL is dynamic."

---

Suppose user visits

```text
/ hotels / shimla
```

Next.js automatically creates

```typescript
params.id

↓

"shimla"
```

User visits

```text
/ hotels / manali
```

Now

```typescript
params.id

↓

"manali"
```

The same page handles

every hotel.

---

# Visualizing It

```text
Browser

↓

GET /hotels/shimla

↓

Next.js

↓

Find

app/hotels/[id]/page.tsx

↓

params.id = "shimla"

↓

Execute Component

↓

Generate HTML
```

---

# Route Groups

Sometimes

you want folders

only for organization.

Example

```text
(auth)

├── login

└── signup
```

Notice

```text
(auth)
```

uses parentheses.

Parentheses mean

> **This folder does NOT appear in the URL.**

Example

```text
app

└── (auth)

      └── login

            page.tsx
```

URL becomes

```text
/login
```

NOT

```text
/auth/login
```

Think of route groups as folders

for developers,

not users.

---

# API Routes

Not every request

returns HTML.

Sometimes

React isn't involved.

Example

Browser sends

```http
POST /api/bookings
```

This isn't asking

for a webpage.

It's asking

to create a booking.

Next.js lets you create

```text
app/

└── api/

      └── bookings/

            route.ts
```

Now

```http
POST /api/bookings
```

runs

```typescript
POST();
```

inside

```typescript
route.ts;
```

Think of

```text
page.tsx

↓

Returns HTML
```

while

```text
route.ts

↓

Returns Data
```

---

# Special Files

Most files

have special meanings.

---

# page.tsx

This creates

an actual webpage.

Without

```text
page.tsx
```

the folder

doesn't become

a route.

Think

```text
page.tsx

=

Public webpage
```

---

# layout.tsx

Imagine

every page

needs

```text
Navbar

Sidebar

Footer
```

Without layouts

every page repeats

the same HTML.

```text
Navbar

↓

Home

↓

Footer
```

```text
Navbar

↓

Hotels

↓

Footer
```

```text
Navbar

↓

About

↓

Footer
```

Lots of duplication.

Instead

Next.js wraps

every page.

```text
layout.tsx

↓

Navbar

↓

{children}

↓

Footer
```

Each page

gets inserted

inside

```text
{children}
```

---

# Why Layouts Are Fast

Suppose user moves

```text
/hotels

↓

/about
```

Without layouts

the browser destroys

everything.

```text
Navbar

↓

Destroyed

↓

Created Again
```

Screen flashes.

Feels slow.

---

With layouts

```text
Navbar

↓

Stays

↓

Only children change
```

Navigation feels instant.

---

# loading.tsx

Suppose

your page needs

3 seconds

to load.

Instead of showing

nothing,

Next.js automatically shows

```text
Loading...

Loading Hotels...

Skeleton UI
```

until the page finishes.

No extra code required.

---

# error.tsx

Suppose

database crashes.

Instead of

showing

a white screen,

Next.js renders

```text
Something went wrong.

Try Again.
```

This file

must be

Client Component

because

it has retry buttons

and state.

---

# not-found.tsx

Suppose user visits

```text
/hotels/unknown-city
```

Database returns

nothing.

Inside page

you call

```typescript
notFound();
```

Next.js automatically renders

```text
404

Hotel Not Found
```

using

```text
not-found.tsx
```

---

# middleware.ts

Middleware runs

before

any page.

Think of it

as

security

at the entrance.

```text
Browser

↓

Middleware

↓

Allowed?

↓

YES

↓

Continue

NO

↓

Redirect Login
```

Common uses

- Authentication
- Redirects
- Rate Limiting
- Logging

---

# The Biggest Idea In App Router

Everything

is

a

Server Component

by default.

This is

probably

the biggest design decision

Next.js made.

---

# Why?

Remember

Server Components

send

almost zero JavaScript.

Suppose

this page

lists hotels.

```tsx
export default async function Page() {
  const hotels = await db.query("SELECT * FROM hotels");

  return (
    <ul>
      {hotels.map((h) => (
        <li>{h.name}</li>
      ))}
    </ul>
  );
}
```

Notice

```typescript
db.query();
```

Browser

never sees

this code.

It runs

only

on your server.

Benefits

```text
Database Password

↓

Never leaves server
```

```text
Database Query

↓

Never downloaded
```

```text
JavaScript Bundle

↓

Much Smaller
```

---

# What Can't Server Components Do?

They have

no browser.

Therefore

they cannot access

```text
Mouse

Keyboard

window

document

localStorage
```

Therefore

these fail

```typescript
useState();

useEffect();

onClick();

window.location;
```

because

those things

exist only

inside browsers.

---

# Client Components

Whenever

you need

browser features

add

```typescript
"use client";
```

Now

the component

runs

inside

the browser.

Example

```tsx
"use client";

export default function SearchBox() {

    const [query, setQuery] =
        useState("");

    return (

        <input
            value={query}
            onChange={...}
        />

    );

}
```

Now

typing works.

---

# Why Should "use client" Be Rare?

Every Client Component

adds JavaScript

to the browser.

Imagine

```text
100 Client Components

↓

100 JS Files

↓

Download

↓

Parse

↓

Compile

↓

Execute
```

Large bundles

mean

slower websites.

Server Components

avoid this cost.

---

# Rule Of Thumb

Ask yourself

one question.

> **Does this component need browser features?**

If

NO

↓

Keep it

Server Component.

If

YES

↓

Make it

Client Component.

---

# Composition Rules

Server Components

can render

Client Components.

Example

```tsx
export default async function Page() {

    const hotels =
        await db.query(...);

    return (
        <SearchBox
            hotels={hotels}
        />
    );

}
```

Server

fetches data.

Client

handles interaction.

Perfect.

---

Client Components

cannot import

Server Components.

Why?

Because

the browser

cannot execute

server-only code

like

```typescript
db.query();
```

But

Client Components

can receive

Server Components

as

```tsx
children;
```

because

the server

already rendered

that HTML.

---

# Dynamic Routes

Suppose

user visits

```text
/hotels/shimla
```

Next.js executes

```tsx
params.id

↓

"shimla"
```

Now

you simply query

```typescript
SELECT *

FROM hotels

WHERE id = "shimla"
```

Same component.

Every hotel.

---

# Static Generation

Suppose

you already know

all hotel IDs.

Next.js can generate

every page

during deployment.

```text
Deploy

↓

Generate

/hotels/shimla

↓

Generate

/hotels/manali

↓

Generate

/hotels/goa
```

Later

users simply receive

ready-made HTML.

Very fast.

---

# Mental Models

| Concept                  | Think Of It As                                          |
| ------------------------ | ------------------------------------------------------- |
| `app/`                   | The root of your website                                |
| Folder                   | A URL segment                                           |
| `page.tsx`               | A public webpage                                        |
| `layout.tsx`             | A reusable shell around pages                           |
| `loading.tsx`            | Temporary UI while data loads                           |
| `error.tsx`              | Fallback UI when something crashes                      |
| `not-found.tsx`          | Custom 404 page                                         |
| `route.ts`               | API endpoint instead of a webpage                       |
| `middleware.ts`          | Security guard before every request                     |
| Server Component         | Runs only on the server, sends almost no JavaScript     |
| Client Component         | Runs in the browser and supports interactivity          |
| `params`                 | Dynamic values extracted from the URL                   |
| `generateStaticParams()` | Tell Next.js which dynamic pages to build ahead of time |

---

# Final Thought

The App Router isn't just a different way to organize files.

It combines **routing**, **rendering**, and **server/client execution** into one mental model.

Everything becomes much easier if you remember these three rules:

1. **Folders become URLs.**
2. **Every component is a Server Component by default.**
3. **Only add `"use client"` when you genuinely need browser features like state, events, or browser APIs.**

Once these three ideas click, the rest of the App Router becomes a natural extension rather than a collection of features to memorize.
