# How Computer Memory Works: The Big Picture

## Introduction

You've learned how the CPU executes instructions. But where does the CPU get those instructions? Where does it store data? How does it access a 64 GB RAM with registers that only hold 64 bits?

The answer is **memory**—one of the most critical and complex parts of your computer.

Memory isn't just one thing. Modern computers have a **memory hierarchy**: from tiny, ultra-fast registers inside the CPU to huge, slow storage on disk. Understanding this hierarchy is crucial for writing fast code, as a single cache miss can waste 100+ CPU cycles.

In this article, we'll explore the complete memory hierarchy, how caches work, and why memory access patterns matter so much.

## Prerequisites

Before reading this article, you should understand:

- CPU basics: registers, ALU, program counter (Article 004)
- Fetch-execute cycle and pipelining (Article 006)
- Basic concepts of storage and speed

## The Memory Hierarchy

Your computer has multiple types of memory, each with different speed and capacity trade-offs:

![image](../../image/phase2/memory.png)

Let's explore each level in detail.

---

## Level 0: CPU Registers (Fastest, Smallest)

### What Are Registers?

**Registers** are the fastest memory in your computer—located inside the CPU itself.

```
Registers: 64-bit values, stored directly in CPU
Examples (x86-64): RAX, RBX, RCX, RDX, RSI, RDI, RBP, RSP, R8-R15
Examples (ARM64): X0-X31
```

### Characteristics

| Aspect          | Value                                       |
| --------------- | ------------------------------------------- | --------------- | -------------------------- |
| **Size**        | 16 registers × 8 bytes = 128 bytes (x86-64) |
| **Access Time** | 0 cycles (part of CPU, accessed directly)   |
| **Bandwidth**   | Unlimited (multiple reads per cycle)        |
| **Cost**        | Extremely expensive                         |
| Metric          | Measures                                    | Units           | Analogy                    |
| ----------      | -------------------------                   | --------------- | -------------------------- |
| Bandwidth       | Theoretical max capacity                    | bps, Mbps, Gbps | Pipe width solarwinds​     |
| Latency         | Delay in transmission                       | Milliseconds    | Travel time ir​            |
| Throughput      | Actual data transfer rate                   | bps, Mbps, Gbps | Water flow volume qsfptek​ |

### Why So Expensive?

Registers are literally part of the CPU die (the actual silicon chip—flat square of semiconductor where all transistors live.). Each register requires transistors for storage and wiring to connect to ALU. Adding more registers means:

- Larger CPU die (more expensive to manufacture)
- More complex instruction encoding (limited registers per instruction)
- Slower clock speeds (more wiring = longer critical path)

### Register Usage

```rust
// Rust code
let a = 5;           // Register (fast!)
let b = 10;          // Register (fast!)
let sum = a + b;     // Register (fast!)

// CPU sees:
MOV RAX, 5      ; R0 = 5
MOV RBX, 10     ; R1 = 10
ADD RAX, RBX    ; R0 = R0 + R1
```

**Execution**: ~1 cycle for all three operations.

---

## Level 1: L1 Cache (Very Fast, Very Small)

### What Is L1 Cache?

**L1 Cache** is a small, fast memory between CPU and RAM, storing recently accessed data.

### Organization

Modern CPUs split L1 into two parts:

```
L1-I (Instruction Cache):
  - Stores recently executed instructions
  - 32-64 KB typical
  - Hit rate: ~95% (instructions executed sequentially)

L1-D (Data Cache):
  - Stores recently accessed data
  - 32-64 KB typical
  - Hit rate: ~80-90% (depends on code locality)
```

### Characteristics

| Aspect          | Value                         |
| --------------- | ----------------------------- |
| **Size**        | 32-64 KB per core             |
| **Access Time** | 1-3 cycles (hits)             |
| **Access Time** | 10+ cycles (misses, go to L2) |
| **Bandwidth**   | 100+ GB/s                     |
| **Cost**        | Expensive                     |

### How L1 Works: Cache Lines

Data isn't stored individually—it comes in **cache lines** (64 bytes typical).

```
Main Memory:
Address: 0x1000  0x1008  0x1010  0x1018  ...
Data:    [12]    [34]    [56]    [78]    ...

CPU requests: Load from address 0x1001
L1 Cache: "I'll fetch a whole cache line (0x1000-0x103F)"

Cache Line (64 bytes):
[0x1000-0x103F] = { 0x1000: 12, 0x1008: 34, 0x1010: 56, ... }

Now 0x1001, 0x1002, ... 0x103F are all cached!
```

### Cache Hit vs Miss

```
L1 Hit (Data is cached):
  Access time: 1-3 cycles
  CPU gets data immediately

L1 Miss (Data not cached):
  Access time: ~10 cycles + L2 lookup
  If L2 hit: 10-20 cycles
  If L2 miss: 100+ cycles (goes to RAM)
```

### Spatial and Temporal Locality

L1 caches rely on two principles:

**Temporal Locality**: "If you accessed data recently, you'll likely access it again soon."

```rust
// Loop accesses same memory
for i in 0..1000 {
    arr[i] += 1;  // Same array accessed repeatedly
}
// All arr[i] values likely stay in L1!
```

**Spatial Locality**: "If you accessed address X, you'll likely access X+1, X+2, etc. soon."

```rust
// Sequential access loads entire cache line
for i in 0..1000 {
    arr[i] += 1;  // Access 0x1000, 0x1001, ...
}
// Whole cache line fetched, next access already cached!
```

### Real-World L1 Cache Impact

```rust
// Good: Sequential access (L1 cache hits)
fn sum_sequential(arr: &[i32; 1000]) -> i32 {
    let mut sum = 0;
    for i in 0..1000 {
        sum += arr[i];  // Sequential → L1 hits
    }
    sum
}
// Speed: ~1 ns per element

// Bad: Random access (L1 cache misses)
fn sum_random(arr: &[i32; 1000]) -> i32 {
    let mut sum = 0;
    let mut idx = 0;
    for _ in 0..1000 {
        idx = (idx * 1103515245 + 12345) % 1000;  // Random
        sum += arr[idx];  // Random → L1 misses
    }
    sum
}
// Speed: ~100 ns per element (100x slower!)
```

---

## Level 2: L2 Cache (Fast, Small)

### What Is L2 Cache?

**L2 Cache** is larger than L1 but slower—a second-level cache for missed L1 lookups.

### Characteristics

| Aspect          | Value                         |
| --------------- | ----------------------------- |
| **Size**        | 256 KB per core               |
| **Access Time** | 10-20 cycles (hits)           |
| **Access Time** | 30+ cycles (misses, go to L3) |
| **Bandwidth**   | 100+ GB/s                     |
| **Cost**        | Less expensive than L1        |

### L1 Miss → L2 Hit

```
L1 Miss:
  "I need data from 0x10000, not in L1"
  ↓
L2 Check:
  "Found it in L2 cache!"
  ↓
Copy to L1:
  "Also copying to L1 for future hits"
  ↓
Return to CPU:
  10-20 cycles (still fast!)
```

### L2 Statistics (Typical)

```
100 memory accesses:
  90 hit in L1         → 1-3 cycles each = ~270 cycles
  8 hit in L2          → 10-20 cycles each = ~120 cycles
  2 hit in L3          → 30-50 cycles each = ~80 cycles

Total: ~470 cycles ≈ 4.7 cycles per access average
```

---

## Level 3: L3 Cache (Less Fast, Medium)

### What Is L3 Cache?

**L3 Cache** is large and shared between all cores on a CPU.

### Characteristics

| Aspect          | Value                                       |
| --------------- | ------------------------------------------- |
| **Size**        | 8-32 MB (shared across cores)               |
| **Access Time** | 30-50 cycles (hits)                         |
| **Access Time** | 100+ cycles (misses, go to RAM)             |
| **Bandwidth**   | 100+ GB/s                                   |
| **Shared**      | Yes, between all cores (8-16 cores typical) |

### When You Need L3

```
Large working set that doesn't fit in L1/L2:
- Processing image (16 MB) that's larger than L1+L2 (256KB+32KB)
- Multi-threaded program with multiple data sets
- Database operations with large result sets
```

### Cache Coherency (Multi-Core)

With multiple cores sharing L3, a problem arises:

```
Core 1 has value X = 42 in L1 cache
Core 2 modifies X = 100 in memory
Core 1 still sees X = 42 (stale!)

Solution: Cache Coherency Protocol (MESI/MOESI)
  - Cores keep track of what other cores have
  - Write invalidates copies in other cores
  - Cost: Memory barriers, cache line invalidation
```

---

## Level 4: Main Memory (RAM)

### What Is RAM?

**RAM (Random Access Memory)** is your computer's "main memory"—where programs and data live during execution.

### Characteristics

| Aspect          | Value                                      |
| --------------- | ------------------------------------------ |
| **Size**        | 8-64 GB typical (2026)                     |
| **Access Time** | 100+ cycles (latency: ~50-100 nanoseconds) |
| **Bandwidth**   | 20-100 GB/s (DDR4/DDR5)                    |
| **Cost**        | Cheap relative to cache                    |
| **Volatile**    | Data lost when powered off                 |

### Why RAM is So Slow

```
L1 Cache: Data is right next to ALU
          Electricity travels ~1mm = 1-3 cycles

RAM: Data is on separate DIMM module
     Electricity travels ~10cm + through bus
     Signal must:
       1. Travel to memory controller
       2. Be decoded
       3. Accessed from memory array
       4. Travel back
     Total: 100+ cycles
```

### RAM Organization

```
Memory Address Space (64-bit):
0x0000000000000000  ┌─────────────────┐
                    │  Kernel Space   │
                    │  (privileged)   │
                    ├─────────────────┤
                    │  Unused         │
                    ├─────────────────┤
                    │  Heap           │ (grows up)
                    │  (dynamic)      │
                    ├─────────────────┤
                    │  Uninitialized  │ (BSS)
                    │  data           │
                    ├─────────────────┤
                    │  Initialized    │
                    │  data           │
                    ├─────────────────┤
                    │  Code           │
                    │  (.text)        │
                    ├─────────────────┤
                    │  Stack          │ (grows down)
                    ├─────────────────┤
                    │  Unused         │
0xFFFFFFFFFFFFFFFF  └─────────────────┘
```

---

## Level 5: Storage (Disk)

### What Is Storage?

**Storage** (SSD or HDD) is permanent memory where programs and data are stored when not in use.

### Characteristics

| Aspect                    | Value                                         |
| ------------------------- | --------------------------------------------- |
| **Size**                  | 256 GB - 2+ TB typical                        |
| **Access Time**           | 100 microseconds (SSD), 10 milliseconds (HDD) |
| **Access Time in Cycles** | ~1 million cycles (SSD), ~100 million (HDD)   |
| **Bandwidth**             | 1-5 GB/s (SSD), 100 MB/s (HDD)                |
| **Cost**                  | Very cheap                                    |
| **Persistent**            | Data survives power off                       |

### Loading Program from Disk

When you run a program:

```
1. OS reads program file from disk
   Time: 10-50 milliseconds

2. OS creates process in memory
   Maps program code/data into virtual memory

3. CPU starts executing from 0x400000 (typical base)
   But data isn't all in RAM yet

4. First access to unmapped memory → Page Fault
   OS loads 4KB page from disk
   Cost: 10+ milliseconds (5000x slower than L3!)

5. Subsequent accesses to same page → Fast
   (now in RAM, possibly in cache)
```

### Page Faults Kill Performance

```rust
// This looks fast:
arr[0] = 1;
arr[1] = 2;

// But if arr[0] causes page fault:
arr[0] = 1;     // 10 milliseconds (disk load!)
arr[1] = 2;     // 1 nanosecond (already in memory)

10,000,000x difference!
```

---

## Complete Memory Access Latency Numbers

Here are **real numbers** for a modern (2026) CPU:

| Operation       | Cycles       | Nanoseconds | Relative Speed |
| --------------- | ------------ | ----------- | -------------- |
| Register access | 0            | 0 ns        | 1x             |
| L1 cache hit    | 1-3          | 0.3-1 ns    | 1x             |
| L2 cache hit    | 10-20        | 3-6 ns      | 3-10x          |
| L3 cache hit    | 30-50        | 10-15 ns    | 10-50x         |
| Main RAM access | 100-200      | 30-60 ns    | 100x           |
| SSD access      | ~1,000,000   | 300-500 µs  | 1,000,000x     |
| HDD access      | ~100,000,000 | 10 ms       | 100,000,000x   |

**Key insight**: One SSD access = **1 million CPU cycles** wasted!

---

## Virtual Memory and Memory Management

Your program doesn't directly access physical RAM. Instead, it uses **virtual addresses** that the OS translates to physical addresses.

### Why Virtual Memory?

```
Without Virtual Memory:
  Program 1 sees RAM: 0x0 - 0x8000000
  Program 2 sees RAM: 0x8000000 - 0x10000000
  Problem: Hard to manage, fragmented

With Virtual Memory:
  Program 1 sees: 0x0 - 0xFFFFFFFFFFFFFFFF (full address space)
  Program 2 sees: 0x0 - 0xFFFFFFFFFFFFFFFF (full address space)
  OS maps virtual addresses to physical RAM
  Isolation: Each program can't access other's memory
```

### Virtual Memory Address Translation

```
Virtual Address (from program): 0x12345678
                                ↓
TLB Check (Translation Lookaside Buffer):
  Quick lookup: "0x12345000 → 0x98765000"
  Hit: 1-3 cycles ✓

TLB Miss:
  Walk Page Table: 4-5 memory accesses
  Time: 100+ cycles

Physical Address: 0x98765678
                  ↓
L1 Cache Check: Hit/Miss
```

### TLB (Translation Lookaside Buffer)

The **TLB** is a tiny cache (64 entries typical) for virtual→physical address translation.

```
TLB = { (VA, PA) pairs }
Example: (0x12345000 → 0x98765000)

Program accesses 0x12345000: TLB hit → 1 cycle
Program accesses 0x12345100: TLB hit (same page) → 1 cycle
Program accesses 0x55555000: TLB miss → 100+ cycles

TLB flush (context switch): All entries invalidated
```

---

## The Memory Access Path: Real Example

Let's trace what actually happens when your code accesses memory:

```rust
fn access_array(arr: &[i32; 1000]) {
    let x = arr[500];  // Access middle of array
}
```

### Detailed Execution

```
1. REGISTER ACCESS: Get arr address
   Time: 0 cycles
   (Address is already in register from function parameter)

2. COMPUTE EFFECTIVE ADDRESS: arr + 500 * 4
   Time: 1 cycle
   (ALU computes: address + offset)
   Result: 0x12345A00 (virtual address)

3. TLB LOOKUP: Translate virtual → physical
   Time: 1-3 cycles
   (Fast: most addresses cached in TLB)
   Result: 0x98765A00 (physical address)

   (If TLB miss: +100 cycles for page table walk)

4. L1 CACHE LOOKUP: Check L1 data cache
   Time: 1-3 cycles
   Hit? Data found at 0x98765A00
   Not found? Continue to L2

5. L2 CACHE LOOKUP: Check L2 cache
   Time: 10-20 cycles if this is where we find it
   Not found? Continue to L3

6. L3 CACHE LOOKUP: Check L3 cache
   Time: 30-50 cycles if this is where we find it
   Not found? Continue to RAM

7. MAIN MEMORY ACCESS: Load from RAM
   Time: 100+ cycles
   Memory controller fetches from DIMM
   Returns 64-byte cache line

8. POPULATE CACHES: Fill L1, L2, L3
   Time: 0 cycles (happens in background)
   Data now available for future accesses

9. RETURN VALUE TO CPU
   Time: Already done
   Value is now in register/L1 for future use
```

**Total time depends on cache hits:**

- **Best case** (L1 hit): 3 cycles (~1 nanosecond)
- **Typical case** (L2 hit): 15 cycles (~5 nanoseconds)
- **Worst case** (RAM hit): 120 cycles (~40 nanoseconds)

---

## Cache Behavior and Optimization

### Cache Oblivious Algorithms

You can write code that's efficient on multiple cache sizes without knowing exact L1/L2/L3 sizes.

Cache-Oblivious = Sari User List

```text
Good: Process users by city (grouped together)
Delhi users 0-99 → Mumbai 100-199 → Chennai 200-299
Load Delhi block → ALL Delhi data in cache → Fast!

Bad: Process by user ID randomly
User 5, 203, 67, 189 → Jump everywhere → Cache miss every time
```

Prefetching = Phunsuk Hotel List

```text
You search hotels: Hotel1, Hotel2, Hotel3 (sorted by price)
CPU sees "+1 each time" → Pre-loads Hotel4,5,6 into L1 cache
You click Hotel4 → Already loaded! Instant!
False Sharing = Sari Counters
```

### Prefetching

Modern CPUs **prefetch** data they predict you'll need.

```
Sequential access pattern:
  Access: 0x1000, 0x1040, 0x1080, ...

CPU learns pattern:
  "Stride = 0x40 bytes"

Prefetches: 0x10C0 (before you ask!)

When you access 0x10C0: Already in L1!
```

---

```rust
// Sari App: Nutrition patient database
struct Patient {
    id: u32,        // 4 bytes
    weight: u32,    // 4 bytes
    water_needed: f32, // 4 bytes
    city: [u8; 20], // 20 bytes (null padded)
} // Total: 32 bytes per patient

fn main() {
    // Simulate RAM: 1,000 patients (Delhi + Mumbai)
    let mut patients: Vec<Patient> = vec![];

    // Delhi patients (IDs 0-499) - GROUPED TOGETHER
    for i in 0..500 {
        patients.push(Patient {
            id: i,
            weight: 70 + (i % 10),
            water_needed: 2.5,
            city: *b"Delhi\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
        });
    }

    // Mumbai patients (IDs 500-999)
    for i in 500..1000 {
        patients.push(Patient {
            id: i,
            weight: 65 + (i % 10),
            water_needed: 2.2,
            city: *b"Mumbai\0\0\0\0\0\0\0\0\0\0\0\0\0",
        });
    }

    println!("🏥 Sari Clinic Ready! 1000 patients loaded");

    // === FIRST LOOKUP: John (Delhi patient 45) ===
    println!("\n🔍 FIRST lookup: patient[45] (John Delhi)");
    let john = lookup_patient(&patients, 45);
    println!("✅ John: {}kg, needs {}L water", john.weight, john.water_needed);
    // RAM → L3 → L2 → L1 → REGISTER (SLOW first time)

    // === NEXT LOOKUP: Nearby Mary (patient 46) ===
    println!("\n🔍 NEXT lookup: patient[46] (Mary Delhi)");
    let mary = lookup_patient(&patients, 46);
    println!("✅ Mary: {}kg, needs {}L water", mary.weight, mary.water_needed);
    // SAME 64-byte line in L1! ⚡️ INSTANT!

    // === JUMP LOOKUP: Far away Raj (patient 500 Mumbai) ===
    println!("\n🔍 JUMP lookup: patient[500] (Raj Mumbai)");
    let raj = lookup_patient(&patients, 500);
    println!("✅ Raj: {}kg, needs {}L water", raj.weight, raj.water_needed);
    // NEW cache line → RAM fetch again (SLOW!)
}

fn lookup_patient(patients: &Vec<Patient>, index: usize) -> Patient {
    // CPU simulates: REGISTER X0 = patients[index]
    patients[index]  // ← Triggers cache journey!
}

```

| Level           | What it holds               | Pieces per Core           | Size per Piece | Total Capacity | Latency           | Speed  | Power  | Job                     | Sari Example                      |
| --------------- | --------------------------- | ------------------------- | -------------- | -------------- | ----------------- | ------ | ------ | ----------------------- | --------------------------------- |
| Registers       | Live numbers during math    | 32                        | 64 bits        | 256B/core      | 0-1 cycle ⚡️     | Max    | Tiny   | CPU math workspace      | John's weight (70) during calc    |
| L1 Data P-core  | Hot patient data            | 2,048                     | 64 bytes       | 128KB/core     | 3-5 cycles ⚡️    | Max    | Low    | Fastest patient lookups | Delhi patients 0-4K (P-core 0)    |
| L1 Data E-core  | Hot patient data            | 1,024                     | 64 bytes       | 64KB/core      | 3-5 cycles ⚡️    | Medium | Tiny   | Background data         | Database sync patients (E-core 3) |
| L1 Instr P-core | Hot code                    | 3,072                     | 64 bytes       | 192KB/core     | 3-5 cycles ⚡️    | Max    | Low    | Fast code execution     | Sari Rust code (P-core 0)         |
| L1 Instr E-core | Hot code                    | 2,048                     | 64 bytes       | 128KB/core     | 3-5 cycles ⚡️    | Medium | Tiny   | Background code         | Supabase sync code (E-core 3)     |
| L2 P-cluster    | Recent data (4 P-cores)     | 262,144 (shared 4 cores)  | 64 bytes       | 16MB (P-group) | 10-15 cycles ⚡   | High   | Medium | P-core recent data      | All Delhi patients (P-group)      |
| L2 E-cluster    | Recent data (4 E-cores)     | 65,536 (shared 4 cores)   | 64 bytes       | 4MB (E-group)  | 10-15 cycles ⚡   | Medium | Low    | E-core recent data      | Background sync data (E-group)    |
| SLC (ex-L3)     | Shared data (all cores+GPU) | 8M (shared)               | 64 bytes       | 32MB (shared)  | 30-50 cycles ⚡   | Medium | Medium | Team shared data        | Delhi+Mumbai patients (all cores) |
| Unified RAM     | Everything                  | 1B (SHARED all cores+GPU) | 64 bytes       | 16GB (SHARED)  | 100-200 cycles 🐌 | Slow   | High   | Permanent storage       | 1M patients + OS + images         |

**SECOND 0**: Power ON → **ALL EMPTY**
Registers: Empty ❌ | L1/L2/SLC/RAM: Only RAM has patients

### 1️⃣ FIRST LOOKUP: John (patient) - 100 cycles SLOW

```text
CPU: "Need patient[45]!"

REGISTER? ❌ Empty (0 cycles)
L1 Data P-core? ❌ Empty (3 cycles)
L2 P-cluster? ❌ Empty (10 cycles)
SLC? ❌ Empty (30 cycles)
**UNIFIED RAM → GRABS 64-BYTE BOX #45** (100 cycles 🐌)

BOX #45 contents (64 bytes):
[John: ID45,70kg,2.5L][Mary: ID46,72kg,2.6L]

RAM → SLC → L2 → **L1 FILLED** → **X0 = John's 32 bytes**
✅ **Total: 143 cycles** (first miss)
```

### 2️⃣ SECOND LOOKUP: Mary (patient) - 1 cycle ⚡️

```text
CPU: "Need patient[46]!"

REGISTER? ❌
**L1 Data P-core? YES!** ← Mary in same BOX #45
**X1 = Mary's 32 bytes**

✅ **Total: 3 cycles** (L1 HIT!)
```

### 3️⃣ THIRD LOOKUP: Raj (patient) - 100 cycles SLOW

```text
CPU: "Need patient[500]!"

REGISTER? ❌
L1? ❌ (evicts old Delhi box)
L2? ❌
SLC? ❌
**RAM → NEW BOX #500** (100 cycles 🐌)

BOX #500 contents:
[Raj: ID500,65kg,2.2L][Next: ID501,...]

RAM → SLC → L2 → L1 → **X2 = Raj's data**
✅ **Total: 143 cycles** (new miss)
```

### M2 MEMORY LADDER (Your MacBook Pro)

```text
RAM (16GB shared) ──────💾 100-200 cycles ────> SLC (32MB shared)
    ↓                                                         ↑
L2 P-cluster (16MB/4 cores) ────⚡ 10-15 cycles ────> L1 Data (128KB/core)
    ↓                                                         ↑
                  L1 Instr (192KB/core) ────⚡️ 3-5 cycles ────> **REGISTER (32×64bit)**
```

### Timeline

```text
Time   What Happens                           Where John Lives
0ns    Power on                               RAM only
100ns  patients[45] ← RAM fetch BOX#45        L1 P-core 0 (John+Mary)
101ns  patients[46] ← L1 hit!                 L1 P-core 0 (same BOX)
201ns  patients[500]← RAM fetch BOX#500       L1 P-core 0 (Raj+next)
```

```text
1000 patients × 32B = **32KB**
= **25% of 1 P-core L1** (128KB)
= **Group by city** → All Delhi in 16 boxes → **999 L1 hits** after first fetch!

**Result**: Lightning fast Sari app on your M2!** 🚀
```

### Another example

```text
500MB Video in RAM:
┌───────────────────────────────────────┐
│ Frame 0-100 → P-core 0 L1 (128KB)     │ ⚡️
│ Frame 101-200 → P-core 1 L1 (128KB)   │ ⚡️
│ Frame 201-300 → P-core 2 L1 (128KB)   │ ⚡️
│ Frame 301-400 → P-core 3 L1 (128KB)   │ ⚡️
│ AI filters → GPU (direct RAM)         │ 🚀
│ Encoding → E-cores (background)       │ ⚡
└───────────────────────────────────────┘
SLC (32MB): Popular frames shared
```

## Key Takeaways

1. **Memory hierarchy**: Registers → L1/L2/L3 caches → RAM → Disk
2. **Speed varies 1000x**: L1 cache (1 ns) vs RAM (100 ns)
3. **Cache lines matter**: Fetches 64 bytes at a time
4. **Spatial locality**: Sequential access is 100x faster
5. **Temporal locality**: Reusing data keeps it in cache
6. **Virtual memory**: Programs use virtual addresses, OS translates to physical
7. **TLB misses**: Page table walk costs 100+ cycles
8. **Page faults**: Disk access = 1,000,000+ cycles
9. **Multi-core**: Cache coherency and false sharing matter
10. **Optimization starts here**: Fix memory access patterns before anything else

**1 Cycle** = 1 CPU clock tick

**Modern CPU**: 3.5 GHz (M2 P-core) = **3.5 billion cycles/second**

**1 cycle** = **0.286 nanoseconds** (ns)

## Implications for Programmers

1. **Structure of Arrays vs Array of Structures**: SOA is cache-friendly
2. **Sequential > Random**: Sequential access 100x faster
3. **Cache misses dominate**: Profile memory access, not just computation
4. **Prefetching helps**: Regular patterns enable hardware prefetch
5. **False sharing hurts**: Pad data structures to avoid cache line contention
6. **Minimize allocations**: Each allocation might come from disk (page fault)

## Further Reading & References

- [What Every Programmer Should Know About Memory](https://www.akkadia.org/drepper/cpumemory.pdf)
- [Cache Oblivious Algorithms](https://en.wikipedia.org/wiki/Cache-oblivious_algorithm)
- [NUMA Architecture](https://en.wikipedia.org/wiki/Non-uniform_memory_access)
- [Intel 64 Memory Architecture](https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-system-management-manual-combined-vols-1-2-3.pdf)

## Questions to Test Your Understanding

1. Draw the memory hierarchy from fastest to slowest.
2. What is a cache line? Why do caches fetch them instead of individual bytes?
3. Explain the difference between L1 cache miss and L2 cache hit.
4. What are temporal and spatial locality? Give code examples.
5. Why is sequential memory access 100x faster than random?
6. How does virtual memory work? Why does the OS use it?
7. What is the TLB and why is a TLB miss expensive?
8. What is a page fault and when does it occur?
9. Explain false sharing and how to avoid it.
10. Why do memory barriers matter for multi-threaded code on weak-memory architectures?

Try answering these before reading the next article!

```text
1.
REGISTER (0 cycles) ──⚡️──> L1 Cache (3 cycles) ──⚡──> L2 (10 cycles)
                      │
                      └───⚡──> SLC/L3 (30 cycles) ──🐌──> RAM (100 cycles)
                                             │
                                             └───💾──> SSD (1M cycles)

```

2.**Cache Line = 64-byte box** CPU grabs from RAM

**Why 64 bytes?**

- Hardware bus optimized for 64B transfers
- **Prefetches nearby data** (spatial locality)
- Single byte request → **Whole box fetched anyway**

Sari: `patients[45]` → Gets patients[45+46] FREE!

---

### 3. L1 Miss vs L2 Hit

| Situation        | Where Data Lives              | Total Time    | Sari Example                       |
| ---------------- | ----------------------------- | ------------- | ---------------------------------- |
| L1 HIT           | Already in L1 (fastest cache) | 3 cycles ⚡️  | Mary (already loaded with John)    |
| L1 MISS → L2 HIT | Not in L1, but in L2          | 13 cycles ⚡  | Delhi patients (L2 has city block) |
| L1/L2 MISS → RAM | Nowhere fast, in RAM          | 150 cycles 🐌 | First Mumbai patient (cold RAM)    |

### 4.

**4 RAM fetches for 4 accesses** 🐌

| Type           | Meaning                        | Code Example                                                      | Sari Win                        |
| -------------- | ------------------------------ | ----------------------------------------------------------------- | ------------------------------- |
| TEMPORAL(Time) | Recently used → Used again     | rust<br>sum += arr; // Reuse arr<br>sum += arr; // Same spot!<br> | Reuse "Delhi patients" list     |
| SPATIAL(Space) | Nearby addresses used together | rust<br>arr; // John<br>arr; // Mary next door!<br>               | Delhi patients grouped together |

### 5.

SEQUENTIAL (16 patients):
1 RAM fetch (100 cycles) + 15 L1 hits (3 cycles) = 145 cycles
145 ÷ 16 = **9 cycles average** ⚡️

RANDOM (16 patients):
16 RAM fetches × 100 cycles = **1600 cycles**
1600 ÷ 16 = **100 cycles average** 🐌

**100x slower!**

### 6.

| Without Virtual         | With Virtual          |
| ----------------------- | --------------------- |
| App1: RAM 0-4GB         | App1: Fake RAM 0-16EB |
| App2: RAM 4-8GB         | App2: Fake RAM 0-16EB |
| Fragmented + Crash risk | Isolated + Huge space |

### 7

**Problem**: App uses FAKE addresses (0x1000)
**CPU needs REAL** RAM addresses (0x7FFF)

**TLB = Tiny notebook** with 64 most-used mappings:

```text
Sari Fake RAM ──📱TLB───> Real RAM ──💾───> SLC ──⚡───> L1 ──⚡️───> Register
↓ ↓ ↓
Heap: patients[45] → 0xABCD5A9C → BOX w/John+Mary → L1 P-core 0 → X0=John
```

### 8

**RAM = Collection of 4KB Pages**

16GB RAM = 16GB ÷ 4KB = **4 MILLION pages**

| Page             | Page Fault               |
| ---------------- | ------------------------ |
| 4KB memory chunk | "Page missing from RAM!" |

```text
RAM (16GB):
[Page 0][Page 1][Page 2]...[Page 4,000,000]
[4KB]  [4KB]  [4KB]     [4KB]
```

```text
**1 Page (4KB)** = **128 Sari patients** (32B each)
4KB ÷ 32B = 128 patients

**Sari 1000 patients** = **8 pages** (1000 ÷ 128)

**Your M2 16GB RAM** = **2M patient records** possible!

```

### 9

| Problem | False Sharing                            |
| ------- | ---------------------------------------- |
| What    | 2 threads fight over same 64B cache line |
| Fix     | Pad data to 64B boundaries               |

## What's Next

Now that you understand the memory hierarchy, the next article will dive into **The Stack**—the fast, structured memory where local variables live.

```

```
