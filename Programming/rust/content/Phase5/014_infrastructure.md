INFRASTRUCTURE ABSTRACTIONS

## Where Your Request Goes Before Your Code Even Wakes Up

You'll finally see why prod behaves differently from localhost.

---

## 6.0 First-Principle Picture (Mental Model)

Think of the internet as a massive pipe system.

**A user request does not go:**

```
Browser → Your Code
```

**It goes:**

```
Browser
  ↓
DNS
  ↓
Internet
  ↓
Load Balancer
  ↓
Reverse Proxy
  ↓
App Server
  ↓
DB / Cache
  ↓
Response (same path back)
```

**Level 6 is everything between the internet and your app logic.**

---

## 6.1 LOAD BALANCERS (CRITICAL)

### What Problem Exists?

**One server has limits:**

- CPU
- Memory
- Network
- Crashes

**Reality:**

- Traffic comes in bursts
- Users don't wait
- Servers fail

**So first principle:**

**Never trust a single machine**

---

### What a Load Balancer Is (Definition)

A **load balancer** is:

**A machine that receives requests and decides which backend server should handle it**

It does not process business logic.

It only routes traffic.

### Simple Mental Picture

```
User
  ↓
Load Balancer
  ↓ ↓ ↓
Server A  Server B  Server C
```

---

## Two Types (This Matters a Lot)

### L4 Load Balancer (Layer 4 — TCP/UDP)

**Operates on:**

- IP
- Port
- Protocol

**It does not understand HTTP.**

**It sees:**

```
TCP packet → forward
```

**Examples:**

- AWS NLB
- Raw HAProxy (TCP mode)

**Profile:**

- Fast
- Dumb
- Cheap

---

### L7 Load Balancer (Layer 7 — HTTP)

**Understands:**

- URLs
- Headers
- Cookies
- Methods

**Can route like:**

```
/api → backend A
/images → backend B
```

**Examples:**

- AWS ALB
- Nginx
- Cloudflare

**Profile:**

- Slower
- Smart
- Powerful

---

### Why This Distinction Exists

**First principles:**

- TCP is about connections
- HTTP is about meaning

**L4 balances connections**

**L7 balances intent**

---

### Sticky Sessions (Important for Auth)

**Problem:**

- User logs in on Server A
- Next request goes to Server B
- Session missing → logout

**Solution:**
**Sticky sessions**

Load balancer pins a user to a server using:

- Cookies
- IP hash

**Bad for scaling.**

**JWT avoids this problem.**

---

## 6.2 REVERSE PROXY

### The Silent Guardian

---

### What Is a Reverse Proxy?

A **reverse proxy:**

- Sits in front of your app
- Receives requests
- Forwards them to internal servers

**Users never talk to your app directly.**

---

### Reverse vs Forward Proxy

| Type          | Who it Protects |
| ------------- | --------------- |
| Forward proxy | Client          |
| Reverse proxy | Server          |

**Nginx is usually a reverse proxy.**

---

### Why Reverse Proxies Exist (First Principles)

They solve cross-cutting concerns:

- TLS termination
- Compression
- Caching
- Rate limiting
- Header normalization

**Your app stays dumb and fast.**

---

### Typical Real Flow

```
User
  ↓
Cloudflare (Edge)
  ↓
Load Balancer
  ↓
Nginx (Reverse Proxy)
  ↓
App (Node/Rust)
```

**Your app only sees clean HTTP.**

---

### TLS Termination (Important)

**TLS is expensive.**

**So:**

- TLS ends at proxy
- Internal traffic is plain HTTP

**This:**

- Saves CPU
- Simplifies code
- Centralizes security

---

## 6.3 RATE LIMITING

### Preventing Abuse

---

### First-Principle Problem

If one user sends:

- 1 request/sec → fine
- 1000 requests/sec → server dies

**The server must say:**

**"Slow down."**

---

### What Rate Limiting Is

**Rate limiting:**

Limits how many requests a client can make in a time window

**Example:**

```
100 requests / minute / IP
```

---

### Where Rate Limiting Happens

**Best place:**

- Reverse proxy
- Edge (Cloudflare)

**Worst place:**

- Inside app code

**Why?**

**Attack traffic never reaches your app**

---

### How Rate Limits Are Tracked

**Keys:**

- IP address
- API key
- User ID

**Storage:**

- Redis
- In-memory counters
- Sliding windows

---

### HTTP Response

**When limit exceeded:**

```
HTTP 429 Too Many Requests
```

**This is not an error.**

**It's a policy decision.**

---

## 6.4 WHY THIS LAYER MATTERS

Now connect dots to your experience.

---

### "Works Locally but Fails in Prod"

**→ Proxy headers / TLS / timeouts**

Your localhost doesn't have a proxy layer. Production does.

---

### "Random 401s"

**→ Sticky sessions / load balancing**

Requests bouncing between servers with different session data.

---

### "App Slow Only Sometimes"

**→ Cold servers / uneven load**

Some servers handle more traffic than others.

---

### "Sudden Downtime"

**→ No rate limiting / no circuit breakers**

One bot or spike kills everything.

---

## LOCK THIS MENTAL STACK

```
Internet
  ↓
DNS
  ↓
Edge (CDN / WAF)
  ↓
Load Balancer
  ↓
Reverse Proxy
  ↓
Application Code
  ↓
Database / Cache
```

**You write only one layer.**

**The others decide if your code even runs.**

---

## 6.5 CDN & CACHING

### Why Images Load Instantly

---

### What a CDN Does (Complete Model)

A **CDN (Content Delivery Network)** is:

**A network of servers placed close to users that cache your content.**

**Three types of caching:**

### Browser Cache

```
GET /image.jpg
↓
Browser: "Do I have this?"
Yes → serve locally (instant)
No → ask server
```

**Controlled by:**

```
Cache-Control: max-age=3600
```

---

### Edge Cache (Cloudflare, CDN)

```
User request
  ↓
Cloudflare Mumbai
  ↓
Do we have /image.jpg?
Yes → serve instantly (20ms)
No → fetch from origin (200ms)
```

**Saves origin bandwidth.**

**Reduces origin load.**

---

### Server Cache (Redis, Memcached)

```
App receives request
  ↓
Redis: "Have I computed this?"
Yes → return (1ms)
No → compute & store
```

**In-memory, extremely fast.**

---

### Cache Invalidation (The Hard Problem)

**Truth:**

> There are only two hard things in Computer Science:
> cache invalidation and naming things

**Why hard?**

```
Cache has stale data
User sees old version
Meanwhile, you've updated
Now you have two sources of truth
```

**Solutions (all imperfect):**

1. **TTL (Time To Live)** — cache expires after N seconds
2. **Versioning** — /image-v2.jpg instead of /image.jpg
3. **Purge** — manually invalidate when you deploy
4. **Tag-based** — invalidate all images when any image changes

**Pick your trade-off.**

---

## 6.6 TIMEOUTS & RETRIES

### Why Cascading Failures Happen

---

### The Timeout Problem

**Default behavior:**

```
Client calls API
API doesn't respond in 5 seconds
Client: "Maybe try again?"
```

**But if:**

- Timeout is too low → false failures
- Timeout is too high → user waiting forever

**There's no perfect timeout.**

---

### Retries (Make It Worse)

**Naive retry logic:**

```javascript
try {
  response = await fetch(url);
} catch {
  response = await fetch(url); // retry
}
```

**What happens:**

```
Upstream server is struggling
You timeout & retry
You just made it worse
```

**This causes cascading failure.**

---

### The Fix: Exponential Backoff

**Real retry:**

```javascript
attempt 1: wait 1 second
attempt 2: wait 2 seconds
attempt 3: wait 4 seconds
attempt 4: wait 8 seconds
```

**Why?**

Give the upstream server time to recover.

---

### Circuit Breaker Pattern

**Idea:**

```
If service fails 5 times in a row
Don't even try for 10 seconds
Then try again (probe)
```

**Prevents cascading collapse.**

---

## 6.7 REAL-WORLD IMPLICATIONS

### For Your Stack

---

### Koel Auth

- Load balancer distributes login requests
- Reverse proxy terminates TLS (saves CPU)
- Rate limiting prevents brute force
- Sticky sessions or JWT (you chose JWT ✅)

---

### Phunsuk

- Maps API needs L7 routing (location-based)
- Payments must have TLS termination (security)
- Reviews need caching (popular items)
- Needs timeout + retry logic

---

### Sari AI

- Model inference needs L4 balancing (compute-heavy)
- Inference cache critical (reuse results)
- Timeouts essential (models hang sometimes)
- Rate limiting protects GPU budget

---

## Lock-In Questions (Answer Instantly)

- Why L4 vs L7 matters
- Why TLS terminates at proxy, not app
- Why sticky sessions break scaling
- Why reverse proxies handle cross-cutting concerns
- Why rate limiting should be at proxy, not app code
- Why cache invalidation is hard
- Why dumb retries cause cascading failures

**If these click → you now understand real infrastructure.**

---
