# Routing: Why Toy Apps Break and Planet-Scale Systems Survive

## What This Article Is About

This article explains **routing**.

**Routing** = the process of deciding where a packet should go next on the internet.

### If you understand routing:

- You can build systems that scale globally
- You can debug "slow internet" problems correctly
- You stop blaming code for physics problems

### If you don't:

- Your app works for 100 users
- Breaks mysteriously at 10,000
- Feels "randomly slow"

---

## First-Principle Truth (The Foundation)

**Routing is just local decisions repeated billions of times.**

There is:

- ❌ no global map of the internet
- ❌ no central controller
- ❌ no "best path" stored anywhere

Each router only decides: **"Where do I send this packet next?"**

That's why the internet:

- survives cable cuts
- survives wars
- survives bad deployments

---

## Definitions We'll Use (Simple)

### Packet

A **packet** is a small piece of data sent over the internet.

Large data (images, videos, requests) are broken into many packets.

**Think:** one envelope, not the whole book.

### IP Address

An **IP address** is a numeric label for a computer on a network.

**Example:** `104.21.32.15`

**Meaning:** "This is the destination computer's number."

It's like a phone number, not a name.

### Router

A **router** is a computer whose job is:

- receive packets
- decide where to send them next
- forward them

**Important:** Routers do not run apps. Routers do not know websites. Routers do not know users.

### Route

A **route** is a rule that says: "Packets matching this pattern go that way."

### Hop

A **hop** is one jump from one router to another router.

- Laptop → router = 1 hop
- Router → router = another hop

### TTL (Time To Live)

**TTL** is a number inside a packet that decreases by 1 at every hop.

**Purpose:** prevents packets from looping forever

**When TTL reaches 0:** packet is destroyed

---

## 1. The Core Problem Routing Solves

When a packet is created, you have:

- ✅ the packet
- ✅ the destination IP address

You do **not** have:

- ❌ the full path
- ❌ knowledge of the whole internet

So the real question is not: "What is the best path to the destination?"

**The real question is:** "Who should I hand this packet to next?"

**Routing is just answering that question — over and over.**

---

## 2. Why Routers Are Intentionally "Dumb"

Routers are designed to be simple **on purpose**.

A router does **not** know:

- domain names (like google.com)
- applications
- users
- sessions
- databases

A router **only** knows this rule:
**IP range → next router**

# IP Range (Definition)

An IP range is a group of IP addresses that start the same way.

```text
Example: 104.21.0.0 – 104.21.255.255
Meaning: "Any IP starting with 104.21 belongs to the same network."
This grouping saves memory and time.
Example Routing Table (Simplified)
10.0.0.0/8 → Router B
172.16.0.0/12 → Router C
0.0.0.0/0 → ISP gateway
```

---

## 1. “Usual” IP ranges

There are two big buckets:

### a) Private IP ranges (used inside homes, offices, VPCs)

These are **never routed on the public internet**. They only exist inside local networks.[^1]

- 10.0.0.0 – 10.255.255.255 → written as `10.0.0.0/8`
- 172.16.0.0 – 172.31.255.255 → written as `172.16.0.0/12`
- 192.168.0.0 – 192.168.255.255 → written as `192.168.0.0/16`

Most home Wi‑Fi routers use something like `192.168.0.x` or `192.168.1.x`.

You can think of these as:
“Local-only numbers, free for anyone to reuse inside their own network.”

### b) Public IP ranges (everything else)

Public IPs are **globally unique** and **routable on the internet**.

- Assigned by ISPs, cloud providers, etc.
- Routers on the public internet will forward packets for these.

Your example `104.21.32.15` is a public IP.

---

## 2. “Does anyone know my device IP?”

Separate the worlds:

### Inside your home (private world)

Your laptop/phone gets a **private IP** from your Wi‑Fi router, e.g. `192.168.1.23`.

- This address is **only valid inside your home network**.
- Devices on the internet **cannot see** this address.

### At the edge (router’s public identity)

Your Wi‑Fi router has:

- One **private** IP on the inside (like `192.168.1.1`)
- One **public** IP on the outside (given by your ISP)

When your laptop talks to the internet:

- The router rewrites the source IP from `192.168.1.23` → `your_public_IP`.
- This is **NAT (Network Address Translation)**.

So:

- **Your exact device private IP is not known on the internet.**
- What websites “see” is: your router’s **public** IP.

Inside your house, your router knows which device is which (via private IP + ports). Outside, the world only knows “one public IP” that represents your whole home.

---

## 3. What are “Router B” and “Router C”?

In this snippet:

```text
10.0.0.0/8      → Router B
172.16.0.0/12   → Router C
0.0.0.0/0       → ISP gateway
```

These are not special magic devices; they’re just **other routers** that this router is connected to.

- `Router B` = “the neighbor router that knows how to reach the 10.x.x.x network”
- `Router C` = “the neighbor router that knows how to reach the 172.16.x.x network”

---

### Note

- "Neighbor router" = physical neighbor, not your actual neighbor
  In networking:
- Neighbor router = any router physically connected to this router via a cable or direct link.
- Think of it like apartments in a building:

```text
[Apt1]---[Apt2]---[Apt3]---[Apt4]
Apt1's "neighbors" = Apt2 (left) and Apt4 (right).
```

Routers work the same way:

```text
[Router A] === cable === [Router B] === cable === [Router C]
```

Router A knows:
"If packet is for 10.x.x.x → send it out the cable to Router B"
"If packet is for 172.x.x.x → send it out the cable to Router C"

These could be:

- Next rack in the same data center
- Next city’s ISP router
- Next country’s backbone router
- Not your actual neighbor’s home router.

## 4. How the real path usually looks

Your picture is almost right; let’s tighten it.

Typical flow for a request from your laptop to some server on the internet:

1. **Laptop** (private IP, e.g. `192.168.1.23`)
2. **Home Wi‑Fi router**
   - Inside: private IP like `192.168.1.1`
   - Outside: public IP from ISP
   - Does NAT to map your private IP → its public IP
3. **ISP access router / aggregation router**
   - First “big” router that sees many customers
4. **ISP core / backbone + peering / IXPs**
   - ISP’s internal backbone routers
   - Routers at IXPs (Internet Exchange Points) where many networks connect and peer[^9][^10][^11]
5. Possibly **other ISPs / transit providers**
6. **Destination network** (cloud provider / CDN / origin server)

You can mentally compress this to:

> device → home router → ISP → “internet core” → destination network

while remembering that “ISP” and “internet core” = many routers and links.

## 3. Physical Reality (No Cloud Fantasy)

There is no cloud.

There are only:

- computers
- cables
- electrical / light signals
- repeaters (routers)

Your laptop **cannot** send signals far.

**Physics limit:** signal weakens with distance

So the world looks like this:

```

Laptop
↓
Nearby router
↓
Bigger router
↓
Even bigger router
↓
...
↓
Destination computer

```

**This is not software design. This is electromagnetism.**

---

## 4. Why Routers Exist at All

Imagine shouting.

- You can shout ~10 meters
- A megaphone reaches farther
- A stadium speaker reaches thousands

**Routers are signal relays.**

They:

- receive a signal
- amplify it
- forward it

**Without routers:** → internet stops at your room.

---

## 5. Why Your Laptop Sends to Only ONE Router

Your laptop asks: "Who is the nearest helper?"

**Answer:** The closest router physically available

That router is usually:

- your home Wi-Fi router
- office router
- mobile tower router

### Wi-Fi (Definition)

**Wi-Fi** is short-range wireless communication.

**Purpose:**

- connect nearby devices
- low power
- short distance

**Important:** Wi-Fi is **not** the internet.

---

## 6. Why Your Wi-Fi Router Is Conceptually Skipped

Important clarification:

Your Wi-Fi router:

- does not know the internet
- has exactly one path outward

It only knows:

- devices inside your home
- one upstream router

**So conceptually, it's a pass-through.**

**Analogy:** house gate → street. Real navigation starts on highways.

---

## 7. ISP Router (First Real Decision Point)

### ISP (Definition)

An **ISP** (Internet Service Provider) is a company that connects you to the internet.

**Examples:**

- Airtel
- Jio
- BSNL

An **ISP router:**

- serves thousands of homes
- connects local networks to the global internet

**This is where real routing begins.**

---

## 8. Why IP Addresses Exist

Routers handle: **millions of packets per second**

They must decide in: **microseconds**

They need:

- fixed-size
- numeric
- machine-readable addresses

**That's why IP addresses exist.**

**Example:** `104.21.32.15`

**Meaning:** "Send toward the computer with this number."

---

## 9. Why Routers Cannot Store Every IP

There are **billions of IP addresses**.

Routers have:

- limited memory
- strict time limits

They **cannot** store:

```

104.21.32.15 → path A
104.21.32.16 → path B
104.21.32.17 → path C

```

**Solution:** they compress knowledge using ranges.

---

## 10. How Routing Decisions Are Made

When a router sees:

```

Destination IP: 104.21.32.15

```

It checks rules like:

```

If starts with 104.21 → send to Router X
If starts with 172.16 → send to Router Y
Else → default gateway

```

This is called **prefix matching**.

### Prefix Matching (Definition)

**Prefix matching** = comparing the starting digits of an IP address.

- No AI.
- No prediction.
- Just fast comparison.

---

## 11. Why Routers Only Know the Next Step

No router knows the full path.

**Why?**

- internet is massive
- paths change constantly
- storing full routes is impossible

**Routers follow this rule:**

> "I don't need the destination. I only need to send it closer."

**Billions of small local decisions → global connectivity.**

---

## 12. Why Routing Scales Infinitely

Because:

- routers know very little
- decisions are local
- failures don't spread

**If one router dies:** packets reroute. Internet heals itself.

This is called **fault tolerance**.

### Fault Tolerance (Definition)

**Fault tolerance** = a system's ability to keep working even when parts fail.

---

## 13. Backbone Routers (The Big Ones)

### Backbone Router (Definition)

A **backbone router** is a very large router that connects countries and continents.

**Properties:**

- millions of packets per second
- microsecond decisions
- constantly changing routes

**Each hop:** TTL = TTL − 1

---
