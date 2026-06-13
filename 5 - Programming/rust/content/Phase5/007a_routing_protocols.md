# Routing Protocols & Transport Layer: How the Internet Actually Works

## PART A — ROUTING PROTOCOLS

### (How Networks Talk to Other Networks)

Until now, we talked about routers forwarding packets locally.

Now comes the big jump:

**How do entire networks decide where traffic should go?**

---

## 1. First Principle: The Internet Is Not One Network

### Network (Autonomous System) - Definition

A **network** (in internet terms) is a large group of computers and routers controlled by one organization.

This is called an **Autonomous System (AS)**.

**Examples:**

- Google's network = one Autonomous System
- AWS = many Autonomous Systems
- Airtel, Jio, BSNL = Autonomous Systems
- Cloudflare = Autonomous System

**Each Autonomous System:**

- Controls its own routers
- Makes its own rules
- Is selfish (important)

### 📌 Important

**The internet = thousands of independent networks, not one big happy family.**

---

## 2. The Real Problem: Crossing Network Boundaries

**Inside one network:**

- Routers cooperate
- Same owner
- Same goals

**Between networks:**

- Different owners
- Different money
- Different priorities

**So the real question becomes:**

"How does Network A tell Network B what destinations it can reach?"

**That's where routing protocols come in.**

---

## 3. What a Routing Protocol Is (Definition)

### Routing Protocol - Definition

A **routing protocol** is a set of rules that routers use to:

- Share reachability information
- Decide which paths to accept
- Decide which paths to reject

### 📌 Important

- Routing protocols do **not** move packets
- They **only** decide where packets should go

---

## 4. Two Kinds of Routing Protocols (Big Picture)

There are two worlds:

- **Inside a network** → Internal routing
- **Between networks** → External routing

We care about **external routing** now.

---

## 5. BGP — The Protocol That Runs the Internet

### BGP (Border Gateway Protocol) - Definition

**BGP** is the protocol used to:

- Route traffic between autonomous systems (networks)

**Every big outage story eventually says:**

"BGP misconfiguration"

**Because nothing else operates at this scale.**

---

## 6. What BGP Actually Announces (Simple)

BGP does **not** say:

"Here is the full path to Google"

**BGP says:**

"If you send traffic for these IP ranges to me, I know how to forward it."

**Example BGP announcement:**

```
104.21.0.0/16 → reachable via AS13335 (Cloudflare)
```

**That's it.**

- No speed
- No latency
- Just reachability

---

## 7. Why BGP Is Based on Trust (This Is Scary)

There is **no central authority** validating BGP.

Networks basically say:

> "Trust me bro, I can handle this traffic."

If another network believes it:

- Traffic flows
- Even if it's wrong

### 📌 Important

**This is why mistakes propagate globally.**

---

## 8. Why AWS Outages Feel Global

AWS hosts:

- APIs
- Auth
- DNS
- Databases
- CDNs

If BGP misroutes AWS IP ranges:

- Thousands of apps disappear
- Even unrelated companies break

**Your app didn't fail.**

**Its upstream network did.**

---
