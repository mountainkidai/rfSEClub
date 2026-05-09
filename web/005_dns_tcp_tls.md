# Topic 0.5 — DNS, TCP, TLS Deep Dive

Now we enter:

# network engineering fundamentals

This topic is EXTREMELY important for your goal.

Because on:

- 30 kbps internet
- high latency
- weak mobile networks

the real enemy is often:

# round trips

Not bandwidth alone.

---

# 🧠 First Principle

When user opens a website:

```txt id="rkxl7t"
https://example.app
```

the browser CANNOT instantly talk to the server.

It must first solve 3 problems:

---

# Problem 1

## “Where is this server?”

Solved by:

# DNS

---

# Problem 2

## “How do I establish reliable communication?”

Solved by:

# TCP

---

# Problem 3

## “How do I communicate securely?”

Solved by:

# TLS

---

These happen BEFORE actual website data starts flowing.

This is critical.

---

# 🌐 PART 1 — DNS

# What is DNS?

DNS =

# Domain Name System

Humans use:

```txt id="39e6ta"
google.com
```

Computers use:

```txt id="rkq6ow"
142.250.183.14
```

DNS converts:

```txt id="x6m6k5"
domain → IP address
```

---

# 🔥 DNS Lookup Flow

Browser asks:

```txt id="y8kcrs"
“What is the IP for example.app?”
```

Lookup may involve:

```txt id="dhxxoh"
Browser cache
→ OS cache
→ Router cache
→ ISP DNS
→ Root DNS
→ TLD DNS
→ Authoritative DNS
```

Finally:

```txt id="fljlwm"
example.app → 104.21.44.12
```

---

# 🚨 DNS Costs Time

DNS itself requires network requests.

On slow internet:
this latency matters A LOT.

---

# ⚡ DNS Optimization

Elite apps:

- use fast DNS providers
- cache aggressively
- minimize domain sharding

Because:
more domains =
more DNS lookups.

---

# 🌐 PART 2 — TCP

Now browser knows server IP.

Next problem:

# “How do we establish reliable communication?”

Solved by:

# TCP

---

# What is TCP?

TCP =

# Transmission Control Protocol

It guarantees:

- ordered delivery
- reliable delivery
- retransmission if packets lost

Websites depend heavily on TCP reliability.

---

# 🔥 TCP Handshake

Before data transfer,
browser and server establish connection.

This requires:

```txt id="6q6elc"
1. SYN
2. SYN-ACK
3. ACK
```

Called:

# TCP Three-Way Handshake

---

# Visual Flow

```txt id="mjlwmg"
Browser → SYN
Server → SYN-ACK
Browser → ACK
```

ONLY after this:
real data transfer begins.

---

# 🚨 Round Trips Matter

Each handshake costs:

# RTT (Round Trip Time)

On high latency mobile networks:
RTT can dominate total load time.

Sometimes:
latency > bandwidth problem.

---

# 🧠 Elite Insight

For slow internet:
reducing requests often matters MORE than reducing bytes.

Because:
each request may trigger:

- DNS
- TCP
- TLS
- waiting

---

# 🌐 PART 3 — TLS

Now connection exists.

But HTTPS sites require security.

So browser and server perform:

# TLS Handshake

---

# What is TLS?

TLS =

# Transport Layer Security

It provides:

- encryption
- authenticity
- integrity

Without TLS:
data can be intercepted.

---

# HTTPS Flow

```txt id="efc5lr"
HTTP + TLS = HTTPS
```

---

# TLS Handshake Purpose

Browser and server:

- verify certificates
- exchange encryption keys
- establish secure session

---

# 🚨 TLS Also Costs Round Trips

More latency.

This is why HTTPS has overhead.

Security is not free.

---

# Modern TLS Improvements

Modern browsers use:

- TLS 1.3
- session resumption
- connection reuse

to reduce handshake costs.

---

# 🌐 Then Actual HTTP Starts

ONLY NOW browser finally sends:

```http id="jlwm1v"
GET /dashboard HTTP/1.1
Host: example.app
```

Amazing, right?

So much happens BEFORE page even starts loading.

---

# 🚨 Why Many Requests Kill Slow Networks

Imagine page loads:

```txt id="e56ixp"
10 JS files
5 CSS files
20 images
3 fonts
analytics
chat widget
```

Each may involve:

- connection setup
- waiting
- TCP congestion
- packet loss

Disaster on weak internet.

---

# 🧠 This Is Why HTTP/2 Was Huge

Old HTTP/1.1:
few parallel connections.

HTTP/2:

- multiplexing
- multiple requests on one connection

Massive improvement.

---

# HTTP/3 Is Even Better

Uses:

# QUIC over UDP

Benefits:

- lower latency
- faster recovery
- better mobile performance

Important future topic.

---

# ⚡ CDN Connection Advantage

CDNs reduce physical distance.

Instead of:

```txt id="l4t52n"
India → US server
```

browser talks to:

```txt id="ljlwmz"
India → nearby edge server
```

Much lower latency.

---

# 🚨 Real Production Insight

On ultra-slow internet:
latency dominates.

Meaning:

- fewer requests
- fewer domains
- fewer round trips

can matter more than raw bundle size.

---

# ⚡ Golden Rule

# Bandwidth Problem

```txt id="4x9nzc"
too many bytes
```

---

# Latency Problem

```txt id="3w5z0e"
too many round trips
```

Elite apps optimize BOTH.

---

# 🧠 Mental Model

Before loading a webpage:

```txt id="lf9zyq"
DNS
→ find server

TCP
→ establish reliable connection

TLS
→ establish secure connection

HTTP
→ finally request page
```

Only THEN:
actual website loading begins.

---
