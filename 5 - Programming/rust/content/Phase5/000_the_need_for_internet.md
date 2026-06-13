# The Birth of Computing: From Mechanical Gears to Networked Mainframes

## 1. Before Electronic Computers (up to ~1940s)

**Goal**: Help humans calculate faster and with fewer mistakes.

### What People Used

Imagine doing math by hand—adding, multiplying—takes forever and you make mistakes. People invented tools:

- **Abacus**: wooden beads on rods you slide to count (invented ~2700 BC).
- **Mechanical calculators**: machines with **gears** and **levers** (spinning metal wheels and moving arms) that do math when you turn a crank or push keys.

These machines had no electricity—just physical spinning parts, like a clock.

### First Principle

> Replace slow, error-prone human thinking with a machine that always follows the same steps, the same way, every time.

**Key vocab**:

- **Mechanical**: using physical moving parts (gears, levers), not electricity.
- **Repeatable process**: the machine does the exact same thing every time, so answers are reliable.

---

## 2. First Electronic Computers (1940s–1950s)

**Goal**: Use electricity to make switches flip on/off faster than any spinning gear can move.

### What Changed

Instead of gears, inventors used **electricity** and **vacuum tubes**:

- **Vacuum tube**: a glass bulb (like an old light bulb) that acts as an electronic switch—electricity turns it **on** (1) or **off** (0).
- **Examples**: ENIAC (Philadelphia, 1946), UNIVAC (Universal Automatic Computer, 1951).

### How Big Were They?

- **Size**: Entire rooms (30m × 5m).
- **Weight**: 30+ tons (like 6 elephants).
- **Heat**: Generated so much heat they needed special air-conditioning.
- **Cost**: $400,000–$1 million (≈$8–20 million today).
- **Speed**: Could do 1,000–5,000 calculations per second (vs. mechanical ~10/second).

### Problems

- Vacuum tubes often **failed** (burned out like old light bulbs).
- Very expensive, so only **military, scientists, governments** used them for ballistics calculations, code-breaking, census data.

### First Principle

> A computer is a **giant collection of electronic switches**. More switches + faster switching = more computing power.

**Key vocab**:

- **Switch**: something that turns on/off (electrical = 1/0, true/false).
- **Vacuum tube**: an electronic switch in a glass tube that can flip billions of times per second.
- **On/off = 1/0**: the language computers speak internally (binary code).

---

## 3. Mainframe Era (1950s–1960s)

**Goal**: Scale computing power up so big organizations (governments, universities, companies) can afford shared machines.

### The Big Breakthrough: Transistors

In the **1950s**, **transistors** replaced vacuum tubes:

- **Transistor**: a tiny electronic switch made of semiconductor material (silicon/germanium)—no glass bulb, no heat, more reliable.
- **Size**: Pinhead-sized.
- **Reliability**: Lasted longer than vacuum tubes.
- **Heat**: Produced much less waste heat.

### What Is a Mainframe?

A **mainframe** is one enormous, powerful computer that handles calculations for many people.

**Three core parts**:

1. **CPU (Central Processing Unit)**: The "brain"—made of thousands of transistors acting as switches to do math and logic.
2. **Memory (Magnetic core memory)**: Small magnetic rings (like tiny doughnuts) that store bits (1s and 0s). Very expensive, so memory was limited (kilobytes–megabytes).
3. **Storage**: How data gets in/out and saved:
   - **Punched cards**: cardboard with holes punched in specific patterns (represent 1s/0s). Operator feeds cards into a reader.
   - **Magnetic tape**: like cassette tape but stores computer data (slow, sequential access).
   - **Hard disks**: spinning metal platters that store data magnetically (faster than tape, but expensive).

### Physical Setup

- **Size**: Cabinet-sized to room-sized (smaller than ENIAC, but still huge).
- **Cost**: $1–10 million (equivalent to $10–100 million today).
- **Location**: Special **climate-controlled rooms** (mainframes needed cool air to prevent overheating).
- **Staff**: Teams of operators and engineers to run/maintain them.

### Typical Users

- **Banks**: storing account data, processing millions of transactions.
- **Airlines**: booking flights, managing reservations.
- **Governments**: census, tax records, military calculations.
- **Universities**: scientific research, simulations.

### First Principle

> Instead of many weak individual machines, pool all computing power into **one super-powerful shared machine** that many people can use.

**Key vocab**:

- **Transistor**: tiny electronic switch, smaller and more reliable than vacuum tubes.
- **Magnetic core**: a physical ring storing a single bit (1 or 0) using magnetism.
- **Punched card**: cardboard with holes encoding data (0s/1s), read by a mechanical reader.
- **Mainframe**: a large, centralized computer serving many simultaneous users.

---

## 4. How People Used Mainframes (No Internet Yet)

### Batch Mode (Early 1950s–1960s)

**The workflow**:

1. **Write your program**: Programmer sits at a **keypunch** machine (electromechanical typewriter) and types code.
2. **Punch cards**: Each line of code is converted to holes punched in a card (standard: 80 columns per card).
3. **Stack of cards**: One program = often hundreds of cards stacked together (held together by rubber bands).
4. **Hand to operator**: Bring your card deck to the computer room operator (usually a person in a glass office).
5. **Queue**: Operator loads jobs one by one into the **job queue** (waiting list).
6. **Run overnight**: Mainframe processes your job along with 100 others, one after another.
7. **Print results**: Output goes to a **line printer** (fast printer that prints whole lines at once) or new punched cards.
8. **Pickup later**: You come back hours/days later to get your output printout from a shelf.

**Why this way?** Batch mode maximizes mainframe efficiency—no idle time waiting for human input.

**Key vocab**:

- **Batch**: a group of jobs processed together, one after another.
- **Queue**: a waiting list of jobs to run.
- **Keypunch**: a machine that converts typed text into punched holes on cards.
- **Line printer**: an industrial printer that prints entire lines of text at once (very fast, very loud).

### Time-Sharing (Late 1960s)

As mainframes became more powerful, **time-sharing** allowed interactive use:

**The idea**: Instead of batch processing, let multiple users log in via **terminals** (simple screens + keyboards) and work interactively, like they own the machine.

**How the OS (Operating System) makes this work**:

1. **Each user logs in** via a terminal connected to the mainframe over a phone line (slow, 300 baud = 30 characters/second).
2. **OS creates a process** for each user (a separate "workspace" tagged with that user's name/ID).
3. **CPU time-slicing**:
   - CPU runs User A's code for 10–100 milliseconds (very fast).
   - Saves User A's state (what they were doing) to disk.
   - Runs User B's code for 10–100 milliseconds.
   - Saves User B's state.
   - Runs User C, User D, etc.
   - Returns to User A—so fast (cycling thousands of times/second) that each user **feels like they have the mainframe to themselves**.

4. **Memory isolation**: Each user's data is locked in a separate memory section via hardware protection—no accidental data mixing.

**Result**: 10–100 people can edit code, run queries, and see results instantly, sharing one $5M machine.

**Key vocab**:

- **Terminal**: a dumb screen + keyboard (no computing power)—just a window into the mainframe.
- **Time-sharing**: dividing CPU time among multiple users so fast it feels simultaneous.
- **Process**: a separate "workspace" for each user, holding their data and state.
- **OS (Operating System)**: software that manages the mainframe, schedules jobs, protects user data, enforces time-sharing.

### Connecting Different Sites (Mainframes at MIT, Pentagon, etc.)

Without the internet, how do distant mainframes share data?

#### Method 1: Sneakernet

- **Definition**: Physically carrying storage media between computers (tapes/cards travel via mail, courier, or human feet).
- **Speed**: Days to weeks (limited by postal/courier speed).
- **Example**: Tape from MIT arriving at Pentagon via overnight mail, loaded into their mainframe.

#### Method 2: Circuit-Switched Phone Lines

- **Definition**: Renting a **dedicated private phone line** between two mainframes (like a private highway, always open).
- **Setup**: Special **modems** (devices that convert digital computer signals to analog phone signals) on each end.
- **Speed**: Very slow by today's standards (300–2400 **baud** = bits/second; roughly 30–240 characters/second).
- **Cost**: Expensive to rent (like a monthly car payment per pair of computers).
- **Example**: MIT and Pentagon rent a dedicated phone line for 8 hours/day; data flows both ways continuously.

#### The Problem with Both Methods

- **Expensive**: Sneakernet requires humans; leased lines cost thousands/month.
- **Single point of failure**: If the mail gets lost or the phone line cuts (damaged line = no connection), communication dies.
- **Slow**: Unreliable and delays are measured in hours/days.
- **Not scalable**: Want to connect 10 universities? Need 45 separate phone lines (a line for every pair).

### First Principle Problem

> Each big computer is an **isolated island**. Sharing data or computing power across cities is slow, fragile, and expensive. There must be a better way.

**Key vocab**:

- **Sneakernet**: physical transport of storage media (humorous term).
- **Circuit-switched**: a dedicated phone line rented for exclusive use between two points.
- **Baud**: bits per second (early speed measure).
- **Modem**: device converting digital signals to analog phone signals.

---

## 5. The Need for Networking (Early 1960s)

### Why Connect Mainframes?

**Three big drivers**:

#### 1. Resource Sharing

- **Problem**: Harvard has a powerful mainframe for physics simulations; MIT wants to use it without buying their own ($5M).
- **Solution**: Connect mainframes so MIT's researchers can submit jobs to Harvard's computer remotely.
- **Benefit**: Share expensive computational resources instead of duplicating them.

#### 2. Reliability (Cold War)

- **Problem**: US military feared nuclear war—if Soviet missiles destroy a telephone line, communication dies.
- **Solution**: Build a network where data finds **alternative routes** if some lines are destroyed.
- **Benefit**: Military communication survives partial destruction (critical for national defense).

#### 3. Cost Efficiency

- **Problem**: 10 universities need to share data. Renting point-to-point phone lines for every pair = 45 expensive phone lines.
- **Solution**: Build one shared network. Universities connect once, can talk to any other.
- **Benefit**: Massive cost savings instead of custom private roads between every pair.

### The Road Network Analogy

Think of it like cities and highways:

**Old way (pre-network)**:

**Old Way (Circuit Switching - Pre-1969)**: Every pair needs **their own private road**.

**4 Himachal cities example** (Shimla, Manali, Dharamshala, Solan):

```text

Shimla ========= Manali (private road #1, $$$)
Shimla ========= Dharamshala (private road #2, $$$)
Shimla ========= Solan (private road #3, $$$)
Manali ========= Dharamshala (private road #4, $$$)
Manali ========= Solan (private road #5, $$$)
Dharamshala === Solan       (private road #6, $$$)

TOTAL: 6 separate roads = bankrupt!

```

**Problems**:

- **Cost**: 6 roads × ₹10L/month = ₹60L/month
- **Landslide**: Shimla-Manali road breaks → Shimla isolated from Manali only
- **Waste**: Shimla-Solan road empty while waiting for use

---

**New Way (Packet Switching - ARPANET 1969)**: **Shared highways + smart routers**.

```

          Shimla (Router)
           /    \
     Road1    Road2
         \     /
       Manali  Dharamshala
         \     /
     Road3   Road4
         \   /
        Solan (Router)

```

```text
Visual for N=4:
Shimla pairs: Manali, Dharamshala, Solan → 3 roads
Manali pairs: Dharamshala, Solan → 2 roads (Shimla already counted)
Dharamshala pairs: Solan → 1 road
Solan pairs: 0 (all counted)
TOTAL: 3+2+1+0 = 6 = 4(3)/2 ✓

```

**Magic**:

```

Shimla → Manali message:

1. Breaks into PACKETS
2. Packet1: Shimla → Road1 → Manali ✓
3. Packet2: Shimla → Road2 → Dharamshala → Road4 → Solan → Road3 → Manali ✓

Road1 breaks (landslide)?
Packet2 reroutes: Shimla → Dharamshala → Solan → Manali

```

**Wins**:

- **Cost**: Only **4 shared roads** (not 6 private)
- **Survives**: Any 1 road dies → packets use other paths
- **Efficient**: All roads busy carrying packets from everyone

```

4 cities: OLD=6 private roads ❌ NEW=4 shared roads + routers ✅
10 cities: OLD=45 roads 💀 NEW=~10 shared roads 🚀

```

### How?

```text
Step 1: City 1 connects to Cities 2,3,4...N
        = (N-1) roads

Step 2: City 2 connects to Cities 3,4...N
        = (N-2) roads (don't count 2→1, already counted)

Step 3: City 3 connects to Cities 4...N
        = (N-3) roads

...

Step N-1: City (N-1) connects to City N
        = 1 road
```

```text
N=2 cities (Shimla-Manali): 2(1)/2 = 1 road ✓
N=3 cities (+Dharamshala): 3(2)/2 = 3 roads ✓
N=4 cities (+Solan): 4(3)/2 = 6 roads ✓
N=10 cities: 10(9)/2 = 45 roads 😱
N=15 cities (ARPANET): 15(14)/2 = 105 roads 💀
```

**Visual**:

```

OLD: Spider web of private roads (breaks easy)
NEW: Highway system with exits (detours always exist)

```

This is why your phone internet works during roadblocks—**packets find new paths**! 🛣️➡️📱

### First Principle

> Instead of custom dedicated roads (expensive, fragile), build a **shared network** where data can find multiple paths and routes around damage.

**Key vocab**:

- **Network**: interconnected computers sharing a communication system.
- **Routing**: finding a path from one computer to another (can go multiple ways).
- **Packet**: small chunks of data sent independently (can take different routes).

---

## Summary So Far

| Era                                     | Tech                          | Users                    | How Connected                               | Problem                                          |
| --------------------------------------- | ----------------------------- | ------------------------ | ------------------------------------------- | ------------------------------------------------ |
| 1940s–1950s                             | Vacuum tubes (ENIAC)          | Military, scientists     | None (isolated)                             | Unreliable, slow, isolated                       |
| 1950s–1960s                             | **Transistors, mainframes**   | Businesses, universities | Batch input (cards), time-sharing terminals | Expensive, isolated, hard to share across cities |
| Early 1960s                             | Mainframes everywhere         | Corporations, government | Sneakernet, leased phone lines              | Fragile, expensive, slow                         |
| **Solution coming**: **ARPANET (1969)** | Transistors, packet switching | Military, universities   | **Shared network, multiple routes**         | Solves isolation & reliability                   |

Next: How ARPANET was invented to solve these problems...

```

```
