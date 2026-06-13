## PART B — TRANSPORT LAYER (RELIABILITY IS BORN HERE)

Routing only gets packets there.

Now we ask:

**Do they arrive correctly, in order, and fast?**

---

## 11. Why Packets Arrive Out of Order

### First Principle: Packets Are Independent

Each packet:

- Is routed separately
- May take different paths
- May face different congestion

**So:**

- Packet 5 might arrive before packet 3

**This is normal, not an error.**

---

## 12. TCP — The Reliability Protocol

### TCP (Transmission Control Protocol) - Definition

**TCP** is responsible for:

- Ordering packets
- Detecting loss
- Retransmitting data
- Controlling speed

### 📌 Important

**Without TCP, the internet would feel random and broken.**

---

## 13. TCP Handshake (Connection Setup)

Before data flows, TCP does a handshake.

### Handshake - Definition

A **handshake** is a short conversation to:

- Agree on connection
- Confirm both sides are alive

**Steps:**

```
SYN          → "I want to talk"
SYN-ACK      → "I hear you"
ACK          → "Let's talk"
```

**Only after this:**
→ data flows

### 📌 Important

**This costs 1–2 round trips → latency.**

---

## 14. Retransmissions (Fixing Packet Loss)

### Retransmission - Definition

**Retransmission** = If TCP doesn't receive confirmation, it assumes packet is lost and sends it again.

**Packet loss is common because:**

- Congestion
- Wireless noise
- Router drops

**TCP makes loss invisible — but slower.**

---

## 15. Congestion Control (This Is the Big One)

### Congestion - Definition

**Congestion** = too many packets, not enough capacity.

**TCP assumes:**

"If packets are dropping, the network is overloaded."

**So TCP:**

- Slows down
- Sends fewer packets
- Gradually increases speed again

**This creates:**

- Speed ramps
- Sudden slowdowns

### 📌 Important

**Most "slow internet" is TCP being polite.**

---

## 16. Why TCP Causes Latency Spikes

**TCP:**

- Waits for acknowledgments
- Reacts cautiously
- Penalizes loss heavily

**So:**

- Small packet loss → big slowdown
- Long distance → worse effect

**This is why:**

- Cross-continent calls feel laggy
- Mobile networks feel unstable

---

## 17. UDP — The Opposite Philosophy

### UDP (User Datagram Protocol) - Definition

**UDP says:**

"I'll send packets. I don't care what happens."

**UDP provides:**

- No ordering
- No retransmission
- No congestion control

**It's:**

- Fast
- Unreliable
- Stateless

---

## 18. Why Games & Streaming Use UDP

**Games:**

- Old data is useless
- Late packet = garbage

**Video streaming:**

- Skipping is better than freezing

**UDP lets applications decide:**

- What to drop
- What to resend
- What to ignore

---

## 19. QUIC — TCP Rebuilt on Top of UDP

### QUIC - Definition

**QUIC** is a modern protocol that:

- Uses UDP
- Rebuilds reliability in user space
- Avoids TCP's worst problems

**QUIC advantages:**

- Faster handshakes
- Better congestion control

**HTTP/3 runs on QUIC.**

### 📌 Important

**This is why Chrome feels faster on bad networks.**

---

## 20. The Takeaway

- **Routing** decides where packets go
- **BGP** decides which networks talk
- **TCP** decides how fast and reliable
- **UDP** decides how fast, no guarantees

**Most performance issues are not code.**

**They are:**

- Distance
- Congestion
- TCP behavior
- Bad routing decisions

---

## Problems

Answer without thinking:

- Why BGP failures go global
- Why TCP slows down when packets drop
- Why packets arrive out of order
- Why UDP is faster but dangerous
- Why QUIC exists

---
