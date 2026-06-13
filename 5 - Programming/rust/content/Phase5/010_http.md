# LEVEL 5 — APPLICATION PROTOCOLS: HTTP and Authentication

## Where Developers Think the Internet Starts (It Doesn't)

- Routing got packets there
- TCP made them reliable
- TLS made them safe

**Now comes meaning.**

---

## PART 1 — HTTP BASICS (FOUNDATION)

---

## 1. What HTTP Actually Is (Definition)

### HTTP (HyperText Transfer Protocol) - Definition

**HTTP** is a protocol that defines:

- How a client asks for something
- How a server responds

**That's it.**

**HTTP does NOT:**

- Send packets
- Encrypt data
- Guarantee delivery

**It just defines messages.**

---

## 2. Client and Server (Define Clearly)

### Client - Definition

The **client** is the machine that starts the request.

**Examples:**

- Browser
- Mobile app
- fetch() in JavaScript

### Server - Definition

The **server** is the machine that:

- Receives requests
- Sends responses

### 📌 Important

**HTTP is always client → server.**

**Servers never talk first.**

---

## 3. Request vs Response (Core Idea)

### Request - Definition

A **request** is:

"Please do something for me"

**Example:**

```
GET /profile
```

### Response - Definition

A **response** is:

"Here's the result"

**Example:**

```
200 OK
{ user data }
```

**Every HTTP interaction is exactly one request → one response.**

---

## 4. What's Inside an HTTP Request

An HTTP request has **4 main parts.**

### 1. Method

Defines intent.

**Examples:**

- `GET` → read
- `POST` → send data
- `PUT` → replace
- `DELETE` → remove

### 2. Path

Defines what resource.

**Example:**

```
/login
/user/42
```

### 3. Headers

### Header - Definition

A **header** is metadata — data about the request.

**Examples:**

- Who you are
- What format you accept
- Auth info

**Example:**

```
Authorization: Bearer abc123
```

### 4. Body / content

Optional data payload.

Used in:

- Login
- Forms
- APIs

---

## 5. HTTP Responses (What Servers Send Back)

A response contains:

### Status Code

### Status Code - Definition

A **status code** is a number describing the result.

**Important ones (real meaning):**

| Code | Meaning                     | Example Scenario                                   |
| ---- | --------------------------- | -------------------------------------------------- |
| 200  | Success                     | GET /api/user → returns your profile data          |
| 301  | Moved permanently           | mountainkid.ai → redirects to www.mountainkid.ai   |
| 400  | Client messed up            | Missing email in login POST → "Bad Request"        |
| 401  | Not authenticated           | Accessing /api/private without JWT token           |
| 403  | Authenticated but forbidden | Logged-in user tries admin route → "No permission" |
| 404  | Not found                   | GET /api/sari-wrong-endpoint → page doesn't exist  |
| 500  | Server messed up            | Supabase DB down → your Next.js API crashes        |

---

## 6. Keep-Alive (Why Connections Stay Open)

### Keep-Alive - Definition

**Keep-alive** = reusing TCP connections instead of creating new ones.

```text
Keep-alive lets your browser reuse the same TCP connection for multiple requests to the same site, skipping slow handshakes each time.
```

```text
1. Shimla browser → mountainkid.ai → NEW TCP (300ms) + TLS (500ms) = 800ms
2. Get CSS → NEW TCP (300ms) + TLS (500ms) = 800ms
3. Get JS → NEW TCP (300ms) + TLS (500ms) = 800ms
```

**Total: 2.4 seconds** just for handshakes

### With Keep-Alive (Fast)

```text
1. Shimla → mountainkid.ai → TCP+TLS ONCE (800ms) → HTML loads
2. Reuse pipe → CSS (10ms)
3. Reuse pipe → JS (10ms)
```

**Total: 820ms** (handshakes only once)

**So Without keep-alive:**

- Every request = new TCP + TLS handshake
- Extremely slow

**With keep-alive:**

- Connection reused
- Much faster

### 📌 Important

Bottom line: Modern browsers/Vercel do keep-alive automatically. You rarely touch headers.

**This alone can change latency by 10x.**

---

## PART 2 — HTTP PERFORMANCE & MODERN VERSIONS

---

## 7. Why HTTP/1 Feels Slow

HTTP/1 has a big flaw.

### Head-of-Line Blocking - Definition

**Head-of-line blocking** means:

One slow request blocks everything behind it.

**Browser sends:**

```

Request A
Request B
Request C

```

**If A is slow:**

```

→ B and C wait

```

**This kills performance.**

---

## 8. HTTP/2 (Multiplexing)

### Multiplexing - Definition

**Multiplexing** means:

Multiple requests share one connection at the same time.

**HTTP/2:**

- Sends many requests together
- Responses come back independently

**This fixes:**

- Head-of-line blocking (mostly)
- Connection explosion

---

## 9. HTTP/3 (Why UDP Is Used)

HTTP/2 still uses TCP.

**TCP problem:**

```text
One packet loss → everything slows
```

**HTTP/3 uses:**

**QUIC** (built on UDP)

**Why?**

- Faster recovery
- No TCP-level blocking
- Better on mobile & bad networks

### 📌 Important

**This is why modern browsers feel faster.**

```text
Page Load (10 assets: HTML/CSS/JS/API):

TCP: Packet 3 lost → ALL 10 assets wait → 2sec delay
QUIC: Packet 3 lost → only CSS waits, others deliver → 200ms delay
```

---
