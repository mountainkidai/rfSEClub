### What is a Port?

Port = Door number on a computer. Different apps listen on different doors.

- Port = Door number on a computer. Different apps listen on different doors.

0️⃣ Start from the physical world

- Imagine one apartment building.
  - The building has one street address
  - Inside the building are many apartments
  - Each apartment has a different purpose

#### This maps exactly to computers on the internet

### 1️⃣ WHAT IS AN IP ADDRESS?

An IP address is:

- The street address of a computer on a network

```text
142.250.183.14
```

Means:

“Send data to THIS machine.”

That’s all.

- No app.
- No website.
- Just a machine.

### Why IP exists (first principles)

Without IP:

- You can’t say which computer
- Internet would be shouting into the void

So rule #1:

1. Every machine needs a unique address
   - That address = IP

```text
3 IP Addresses in Your Home:

1. LAPTOP:      192.168.1.100  ← Private IP (Local only)
2. ROUTER(LAN): 192.168.1.1    ← Private IP (Gateway)
3. ROUTER(WAN): 203.0.113.45   ← Public IP (ISP assigned)
```

```text
Internet ←── Sees ONLY: 203.0.113.45 (Router WAN/Public)
                 ↓ NAT Translation (Router rewrites)
Router   ←── Knows: 192.168.1.100 (Laptop Private)
                 ↓ ARP Resolution (Ethernet MAC lookup)
Laptop   ←── 192.168.1.100 (Its own Private IP)

```

```text
1. Laptop originates TCP SYN:
{Src: 192.168.1.100:54321, Dst: 142.250.190.78:443} (Google)

2. Router NAT rewrites:
{Src: 203.0.113.45:54321, Dst: 142.250.190.78:443}

3. Internet routes on public IPs only

4. Google replies:
{Src: 142.250.190.78:443, Dst: 203.0.113.45:54321}

5. Router reverse NAT:
{Src: 142.250.190.78:443, Dst: 192.168.1.100:54321}

6. Router ARP → Finds laptop MAC → Ethernet delivery

```

```text
Router has 2 NETWORK INTERFACES:
┌─────────────────┐    ┌──────────────────┐
│ WAN Interface   │    │ LAN Interface    │
│ IP: 203.0.113.45│    │ IP: 192.168.1.1  │
│ Public (ISP)    │    │ Private (Local)  │
└─────────────────┘    └──────────────────┘
         │                      │
    Internet Traffic       Laptop: 192.168.1.100

```

NAT table is the real hero

Inside the router, there is a table like this:

```text
PublicIP:PublicPort   ↔   PrivateIP:PrivatePort
203.0.113.45:54321    ↔   192.168.1.100:54321

NAT = IP address translation (L3)
ARP Address Resolution Protocol = MAC address discovery (L2)
Together = Complete packet delivery!
```

### 2️⃣ THE PROBLEM IP ALONE CANNOT SOLVE

- One computer runs many programs at the same time.

Example:

- Chrome
- WhatsApp
- Node.js server
- Database
- SSH

### Question

- If data reaches the machine…
- WHICH program should receive it?

IP alone can’t answer this.

### 3️⃣ WHAT IS A PORT?

A port is:

- A numbered doorway into a specific program on a computer

### Think

- IP = building
- Port = apartment number

```text
142.250.183.14:443
```

### Means

- Computer at IP 142.250.183.14
- Program listening on door 443

### Why ports exist (first principles)

- One machine → many services
- So:
  - We need a way to say which service
  - That number = port

Port
Meaning

- HTTP 80
- HTTPS 443
- SSH 22
- PostgreSQL 5432
- Redis 6379

### 4️⃣ WHAT IS A PROTOCOL?

Now deeper.

Definition (simple)

A protocol is:

- A set of rules for how data is structured and interpreted

Human analogy:

- English
- Hindi
- Morse code
  - Same mouth.
  - Different rules.

### Why protocol exists

If I send:

```text
010101011
```

### How do you interpret it?

### Protocol answers:

- Where message starts
- Where it ends
- What each part means

### Protocol

- TCP Reliable delivery
- UDP Fast, unreliable
- HTTP Web requests
- TLS Encryption

### 5️⃣ THE REAL TRUTH: IP + PORT + PROTOCOL = DESTINATION

To reach a service, you ALWAYS need three things:

```text
IP address  → Which machine
Port        → Which program
Protocol    → How to talk
```

```text
HTTPS → TCP → IP
```

```text
142.250.183.14 : 443 / TCP
```

### 6️⃣ WHAT A SERVER ACTUALLY DOES

- A server program says:
- “I will listen on PORT X using PROTOCOL Y”
- Example (Node.js):

```js
app.listen(3000);
```

Means:

“Bind to port 3000 and wait for TCP connections”

Now:

- OS watches port 3000
- Incoming packets go to your app
