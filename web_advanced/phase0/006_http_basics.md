# Topic 0.6 — HTTP Basics

This is the language of the web.

Every Next.js app,
every API,
every browser request,
every image,
every fetch call —
all run on HTTP.

If you deeply understand HTTP:

- caching becomes easy
- auth becomes easier
- Next.js fetch caching makes sense
- CDN behavior makes sense
- performance optimization becomes systematic

---

# 🧠 First Principle

Browser and server communicate using:

# HTTP

HTTP =

# HyperText Transfer Protocol

Think of it as:

> a structured conversation format

---

# Basic Flow

```txt id="n7j86m"
Browser → HTTP Request
Server  → HTTP Response
```

---

# Example Request

```http id="yr0mav"
GET /dashboard HTTP/1.1
Host: phunsuk.app
```

---

# Example Response

```http id="jlwm7f"
HTTP/1.1 200 OK
Content-Type: text/html

<h1>Hello</h1>
```

---

# 🧠 HTTP Is Stateless

This is VERY important.

HTTP itself remembers NOTHING.

Each request is independent.

Meaning:

```txt id="q3kglk"
Request 1 ≠ Request 2
```

Server forgets previous request unless:

- cookies
- sessions
- tokens
- databases

are used.

---

# 🌐 HTTP METHODS

Methods describe:

# intention

---

# GET

```http id="uv51wx"
GET /posts
```

Means:

> “give me data”

Should NOT change server state.

Used for:

- pages
- fetching APIs
- images

---

# POST

```http id="u6rfkt"
POST /posts
```

Means:

> “create something”

Used for:

- forms
- login
- creating records

---

# PUT / PATCH

Update existing data.

---

# PUT / PATCH

Used to:

> update existing data

Example:

- update profile
- change password
- edit blog post
- modify product info

---

# PUT

Usually means:

> replace entire resource

Example:

```http id="z3m8qw"
PUT /users/1
```

Body:

```json id="u6x1rk"
{
  "name": "Aman",
  "email": "aman@example.com"
}
```

Server may replace full user data with new version.

Think:

```txt id="m4v9zp"
overwrite everything
```

---

# PATCH

Usually means:

> partially update resource

Example:

```http id="k7q2mw"
PATCH /users/1
```

Body:

```json id="x8r5vn"
{
  "name": "Aman"
}
```

Only updates:

```txt id="p1m4zk"
name field
```

Other fields remain unchanged.

Think:

```txt id="d5x7rq"
modify only specific fields
```

---

# Simple Difference

| Method | Meaning                 |
| ------ | ----------------------- |
| PUT    | Replace entire resource |
| PATCH  | Partial update          |

---

# Real-World Analogy

Suppose user profile is:

```json id="w9v2mc"
{
  "name": "John",
  "email": "john@mail.com",
  "age": 25
}
```

## PUT

Send:

```json id="v3q8pk"
{
  "name": "Aman"
}
```

May replace entire object and remove missing fields.

Result:

```json id="g6m1zw"
{
  "name": "Aman"
}
```

---

## PATCH

Send:

```json id="t4x7rq"
{
  "name": "Aman"
}
```

Result:

```json id="h8m2vk"
{
  "name": "Aman",
  "email": "john@mail.com",
  "age": 25
}
```

Only changed one field.

# DELETE

Delete resource.

---

# 🚨 Performance Insight

GET requests are highly cacheable.

Very important for performance engineering.

---

# 🌐 STATUS CODES

Server responds with status codes.

---

# 200 OK

Success.

---

# 201 Created

Resource created successfully.

---

# 301 / 302 Redirect

Browser should go elsewhere.

---

# 304 Not Modified

Huge performance feature.

Means:

```txt id="jlwm7k"
"Use your cached version"
```

No need to download again.

Amazing for slow internet.

---

# 400 Bad Request

Client mistake.

---

# 401 Unauthorized

Need authentication.

---

# 403 Forbidden

Authenticated but blocked.

---

# 404 Not Found

Resource missing.

---

# 500 Internal Server Error

Server crashed or failed.

---

```text
+------+-------------------------+----------------------------------+
| Code | Meaning                 | Explanation                      |
+------+-------------------------+----------------------------------+
| 200  | OK                      | Request succeeded                |
| 201  | Created                 | Resource created successfully    |
| 301  | Moved Permanently       | Permanent redirect               |
| 302  | Found / Temporary       | Temporary redirect               |
| 304  | Not Modified            | Use cached version               |
| 400  | Bad Request             | Client sent invalid request      |
| 401  | Unauthorized            | Authentication required          |
| 403  | Forbidden               | Access denied                    |
| 404  | Not Found               | Resource does not exist          |
| 500  | Internal Server Error   | Server failed/crashed            |
+------+-------------------------+----------------------------------+
```

# 🌐 HEADERS

Headers contain metadata.

Very important.

---

# Request Headers Example

```http id="jlwm7m"
Authorization: Bearer token
Accept: application/json
Cookie: session=abc
```

---

# Response Headers Example

```http id="jlwm7n"
Content-Type: application/json
Cache-Control: max-age=3600
Content-Encoding: br
```

Headers control:

- caching
- compression
- auth
- content type
- security

---

# 🚨 Important Header

# Content-Type

Tells browser what data is coming.

Example:

```http id="jlwm7p"
Content-Type: text/html
```

or

```http id="jlwm7q"
Content-Type: application/json
```

Browser behavior changes based on this.

---

# 🌐 COOKIES

Remember:
HTTP is stateless.

Cookies help maintain state.

Example:

```http id="jlwm7r"
Cookie: session=abc123
```

Browser automatically sends cookies on future requests.

Used for:

- login sessions
- preferences
- auth

---

# 🚨 Cookie Problem

Cookies increase EVERY request size.

Badly designed auth systems can slow apps significantly.

---

# 🌐 KEEP-ALIVE

Without keep-alive:

Every request requires:

- new TCP connection
- new TLS handshake

Very expensive.

---

# Keep-Alive Solves This

Connection stays open.

Multiple requests reuse same connection.

Huge latency improvement.

---

# 🚨 Cache Is KING on Slow Internet

The fastest request is:

> no request at all.

Because then there is:

```txt id="m4x8qp"
Zero download
Zero latency
Zero parsing
Zero CPU work
```

That’s why caching is one of the biggest web performance optimizations.

---

# 🌐 ETags

ETag means:

> Entity Tag

It’s basically a unique version identifier for a file/resource.

Example response from server:

```http id="u7v2zk"
ETag: "abc123"
```

Meaning:

> “Current version of this file = abc123”

Browser stores:

- file
- ETag value

in cache.

---

# Next Time Browser Visits

Browser asks server:

```http id="p5m1rq"
If-None-Match: "abc123"
```

Meaning:

> “I already have version abc123.”
>
> “Did file change?”

---

# If File Did NOT Change

Server responds:

```http id="k8x4vn"
304 Not Modified
```

Meaning:

> “Your cached version is still valid.”
>
> “Reuse it.”

So server sends:

```txt id="y3m7zw"
NO file data
```

Huge bandwidth savings.

---

# Without ETag

Browser would redownload:

```txt id="b6q2xp"
app.js
styles.css
logo.png
```

again and again.

Wasteful.

---

# Why This Is Huge on Slow Internet

Suppose:

```txt id="d9v5mk"
app.js = 500KB
```

Without cache:

- redownload every visit

With ETag:

- tiny validation request only
- reuse cached file

Massive improvement for:

- bandwidth
- latency
- CPU
- loading speed

---

# Important Insight

Caching optimizations often beat:

- compression
- rendering tricks
- faster servers

Because:

```txt id="r1x8qw"
best byte = byte never sent
```

That’s why modern apps aggressively cache:

- JS bundles
- CSS
- images
- fonts
- API responses.
