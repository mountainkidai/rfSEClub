# The Fetch-Execute Cycle: How CPUs Execute Instructions

## Introduction

You've learned about CPU architecture, ISAs, and registers. Now it's time to see **exactly what happens** when the CPU executes a single instruction—the fundamental fetch-execute cycle that repeats billions of times per second.

Understanding the fetch-execute cycle is crucial for understanding CPU performance, bottlenecks, cache behavior, and why certain code optimizations matter.

In this article, we'll trace one instruction from memory all the way through to completion, then explore modern optimizations like pipelining, out-of-order execution, and branch prediction.

## Prerequisites

Before reading this article, you should understand:

- CPU components: registers, ALU, program counter (Article 004)
- ISAs: x86-64, ARM64, RISC-V (Article 005)
- Memory hierarchy and caches (mentioned in Article 004)

## The Basic Fetch-Execute Cycle

The **fetch-execute cycle** (also called the **instruction cycle**) is the fundamental operation of every CPU:

```
┌─────────────────────────────────────────┐
│  1. FETCH                               │
│  Get next instruction from memory       │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│  2. DECODE                              │
│  Determine what instruction means       │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│  3. EXECUTE                             │
│  Perform calculation in ALU             │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│  4. MEMORY (Optional)                   │
│  Load from or store to memory           │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│  5. WRITEBACK                           │
│  Store result in register               │
└────────────────┬────────────────────────┘
                 │
                 └──────── Repeat! ────────
```

### Step 1: Fetch

**What happens**: The CPU retrieves the next instruction from memory.

```
Program Counter (PC) = 0x1000 (memory address)
CPU sends to memory controller: "Give me instruction at 0x1000"
Memory responds: "Here's 0x44890003" (4-byte ARM64 instruction)
Instruction Register (IR) = 0x44890003
```

**Timing**: Depends on where instruction is:

- **L1 Cache**: 1-3 cycles
- **L2 Cache**: 10-20 cycles
- **RAM**: 100+ cycles
- **Disk** (page fault): Millions of cycles!

### Step 2: Decode

**What happens**: Control unit figures out what the instruction does.

```
IR = 0x44890003

Control Unit analyzes:
  - Opcode (top 8-11 bits): This is an ADD instruction
  - Register fields: Use registers R1, R2, R3
  - Immediate values: None in this case

Decoded signals sent to:
  - ALU: "Prepare to ADD"
  - Registers: "Get values from R1 and R2"
  - Result destination: "Will store in R3"
```

**Timing**: Very fast, 1 cycle (in a simple CPU).

### Step 3: Execute

**What happens**: The ALU performs the actual operation.

```
R1 = 10
R2 = 20

ALU receives: ADD signal, values 10 and 20
ALU computes: 10 + 20 = 30
Result: 30 (ready for writeback)
```

**Timing**: Depends on operation:

- **ADD/SUB**: 1 cycle
- **MUL**: 3-4 cycles
- **DIV**: 10-20 cycles
- **FP SQRT**: 10-30 cycles

### Step 4: Memory (Optional)

**What happens**: If instruction needs memory access, it happens here.

```
Example: LDR R0, [R1, #8]  (Load from memory)

R1 = 0x2000
Offset = 8
Memory address = 0x2000 + 8 = 0x2008

CPU sends: "Load 8 bytes from address 0x2008"
Memory responds: "Value is 0x1234567890ABCDEF"
Result = 0x1234567890ABCDEF (ready for writeback)
```

**Timing**: Varies wildly:

- **L1 Cache hit**: 1-3 cycles
- **L2 Cache hit**: 10-20 cycles
- **L3 Cache hit**: 30-50 cycles
- **RAM hit**: 100+ cycles
- **Cache miss (page fault)**: Millions of cycles!

**Not all instructions need this stage** (e.g., ADD doesn't access memory).

### Step 5: Writeback

**What happens**: Result is written back to a register.

```
Result = 30
Destination = R3

Write: R3 = 30

Now next instruction can use R3 if needed!
```

**Timing**: Very fast, 1 cycle.

---

## The Instruction Cycle Timeline

Let's trace a simple ARM64 program through the entire cycle:

```
Program Memory:
0x1000: ADD X0, X1, X2    ; Add X1 and X2, store in X0
0x1004: MOV X3, #10       ; Move constant 10 to X3
0x1008: ADD X4, X0, X3    ; Add X0 and X3, store in X4

Registers before:
X1 = 5
X2 = 7
X3 = ?
X4 = ?

Cycle | Stage      | IR            | PC    | X0 | X1 | X2 | X3 | X4
------|------------|---------------|-------|----|----|----|----|----
  1   | Fetch      | [fetch word]   | 0x1000|    | 5  | 7  |    |
  2   | Decode     | ADD X0,X1,X2   | 0x1004|    | 5  | 7  |    |
  3   | Execute    | ADD X0,X1,X2   | 0x1004| 12 | 5  | 7  |    |
  4   | Memory     | ADD X0,X1,X2   | 0x1004| 12 | 5  | 7  |    |
  5   | Writeback  | ADD X0,X1,X2   | 0x1004| 12 | 5  | 7  |    |
  6   | Fetch      | MOV X3,#10     | 0x1008| 12 | 5  | 7  | 10 |
  7   | Decode     | MOV X3,#10     | 0x1008| 12 | 5  | 7  | 10 |
  8   | Execute    | MOV X3,#10     | 0x1008| 12 | 5  | 7  | 10 |
  9   | Writeback  | MOV X3,#10     | 0x1008| 12 | 5  | 7  | 10 |
```

**Key observation**: One instruction takes 5 cycles minimum. With this pattern, CPU executes one instruction per 5 cycles (0.2 instructions per cycle).

That's slow! Modern CPUs are **much faster** through pipelining.

---

## Pipelining: Overlapping Instruction Execution

The key insight: **Different stages of different instructions can execute simultaneously**.

Instead of waiting for one instruction to complete, we can:

- Fetch instruction N+1
- While decoding instruction N+1
- While executing instruction N
- While doing memory access for instruction N-1
- While writing back instruction N-2

### 5-Stage Pipeline Example

### Pipeline Visualization

```
Without Pipelining (5 cycles per instruction):
Instr1: [F][D][E][M][W] ────── 5 cycles

Instr2:                [F][D][E][M][W] ────── 5 cycles

Total: 10 cycles for 2 instructions


With Pipelining (1 cycle per instruction after startup):
Instr1: [F][D][E][M][W]
Instr2:    [F][D][E][M][W]
Instr3:       [F][D][E][M][W]
Instr4:          [F][D][E][M][W]
Instr5:             [F][D][E][M][W]

Total: 9 cycles for 5 instructions (1.8x speedup for 5-stage pipeline)

Theoretical max: N + 4 cycles for N instructions (asymptotes to 1 instruction/cycle)
```

| No Pipeline                              | Pipeline                                    |
| ---------------------------------------- | ------------------------------------------- |
| Shirt1: Wash → Dry → Fold (30 min total) | Washer, Dryer, Folder all busy AT SAME TIME |
| Shirt2 waits for Shirt1                  | Shirt2 starts washing while Shirt1 dries    |
| Sequential                               | Overlapped work                             |

### Pipeline Stages (Modern CPUs)

Modern CPUs have **much deeper pipelines** (10-20+ stages):

```
Modern 14-stage pipeline:
1. Fetch1: Start address calculation
2. Fetch2: TLB lookup (virtual→physical address)
3. Fetch3: Hit/Miss resolution
4. Fetch4: Instruction cache access
5. Decode1: Simple decode
6. Decode2: Complex decode
7. Execute1: ALU operation
8. Execute2: ALU operation
9. Execute3: ALU operation
10. Memory1: TLB lookup
11. Memory2: Cache access
12. Memory3: Cache miss handling
13. Writeback1: Register file access
14. Writeback2: Register file write

Benefit: Higher clock speeds (each stage is simpler)
Cost: Longer pipeline = bigger penalty for mispredictions
```

---

## Pipeline Hazards: When Things Go Wrong

Pipelining isn't always smooth. **Hazards** occur when a later instruction depends on an earlier one.

### Data Hazard (Read-After-Write)

**Problem**: Instruction N+2 needs the result of instruction N.

```
Cycle 1: ADD R1, R2, R3    ; R1 = R2 + R3
Cycle 2: MOV R4, R1        ; R4 = R1 (but R1 not ready yet!)

Without hazard handling:
Cycle | Instr1      | Instr2
------|-------------|----------
  1   | [F][D][E]   |
  2   |    [F][D][E][M][W] ← R1 still computing!
  3   |             [F]... (Wrong value read!)
```

**Solution 1: Stall (Bubble)**

```
Cycle | Instr1      | Instr2
------|-------------|----------
  1   | [F][D][E]   |
  2   |    [F][D]   |
  3   |       [E]   | [F][D]... ← Wait
  4   |       [M]   |
  5   |       [W]   | [E]...
```

_Cost: 2-3 cycles lost_

**Solution 2: Forwarding (Result Bypass)**

```
When Instr1 writes R1, immediately forward to Instr2.

Cycle | Instr1      | Instr2
------|-------------|----------
  1   | [F][D][E]   |
  2   |    [F][D]   |
  3   |       [E]   | [F][D] ← Read forwarded value
  4   |       [M][W]|    [E]...
```

_Cost: 0 cycles! (Modern CPUs do this)_

### Control Hazard (Branch Misprediction)

**Problem**: Conditional branch, CPU doesn't know which way it goes.

```
Cycle 1: CMP R1, R2          ; Compare R1 and R2
Cycle 2: B.EQ label          ; Branch if equal
Cycle 3: Predicted: ADD R3...

But comparison says NOT equal!
Entire pipeline flush needed.
```

**Solution 1: Stall**

```
Wait for branch to resolve before fetching next instruction.
Cost: Huge (15-30+ cycles for deep pipeline)
```

**Solution 2: Branch Prediction**

```
Predict which way branch goes → Fetch ahead
Accuracy: 95%+ on modern CPUs
If wrong: Flush pipeline (only ~20% of time)
Expected cost: 0.05 × 20 cycles = 1 cycle average
```

### Structural Hazard

**Problem**: Two instructions need the same hardware resource.

```
Instr1: LOAD R0, [mem]  ; Need memory access
Instr2: STORE R1, [mem] ; Also need memory access
```

**Solution**: Pipeline stages have dedicated resources, or scheduling prevents conflicts.

---

## Out-of-Order Execution

Even with forwarding, some stalls are unavoidable. Modern CPUs solve this with **out-of-order execution**.

### Concept

Reorder instructions to maximize parallelism while maintaining correct results.

```
Program Order:
1. ADD R0, R1, R2      ; Depends on nothing
2. MUL R3, R4, R5      ; Depends on nothing (different registers!)
3. ADD R6, R0, R3      ; Depends on instructions 1 and 2

Execution Order (Reordered):
1. ADD R0, R1, R2      ; Execute first
2. MUL R3, R4, R5      ; Execute in parallel (different ALU)
3. ADD R6, R0, R3      ; Execute when both are ready
```

### How It Works

```
Fetch/Decode: Instructions placed in "Instruction Window"
              (typical: 128-256 instructions)

Scheduler: Watches for dependencies
           Issues instruction when inputs ready
           (not necessarily in program order)

Execution: Multiple instructions in-flight
           Out of order, but results committed in order

Writeback: Results written back in program order
           (ensures no observable difference)
```

### Benefits

```
With-Order Execution:
MUL R3, R4, R5         ; 10 cycles
ADD R0, R1, R2         ; Must wait! 1 cycle
Total: 11 cycles

Out-of-Order Execution:
MUL R3, R4, R5         ; 10 cycles
ADD R0, R1, R2         ; Executes in parallel! 1 cycle
Total: 10 cycles (or even less with multiple ALUs)
```

---

## Superscalar Execution

Modern CPUs can execute **multiple instructions per cycle** by having multiple ALUs.

```
Single-issue CPU:
Cycle 1: Fetch → Decode → Execute: ADD R1, R2, R3
Cycle 2: Fetch → Decode → Execute: MUL R4, R5, R6

Dual-issue CPU:
Cycle 1: (Fetch→Decode→Execute: ADD) + (Fetch→Decode→Execute: MUL)
         Both happen simultaneously!

4-issue (typical modern):
Fetch up to 4 instructions
Decode up to 4 instructions
Execute up to 4 instructions
In parallel!
```

### Intel Core i9 Execution Resources

```
Modern i9 has:
- 4 Integer ALUs
- 2 Load/Store units
- 2 Floating-point units
- 1 Branch unit

Can execute: 4 instructions per cycle theoretically
Actual: 2-3 per cycle (dependencies, memory stalls)
```

---

## Branch Prediction

Modern CPUs predict which way branches go to avoid pipeline flushes.

### Static Prediction

**Simple rules**:

```
Forward branches: Predict "not taken"
Backward branches: Predict "taken"
```

**Accuracy**: ~50-60%.

### Dynamic Prediction: Branch Predictor

**Idea**: Track branch history.

```
Branch at 0x1000: "if (x > 0)"

History table:
If this branch taken last 4 times
→ Predict "taken" next time

Actual pattern: T, T, T, T, N, T, T, T, T, N...
Predictor learns pattern
```

**Modern accuracy**: 95%+ for regular patterns.

### Predictors (Real CPUs)

| Predictor             | Accuracy | Size      |
| --------------------- | -------- | --------- |
| **Static**            | ~60%     | N/A       |
| **1-bit counter**     | ~80%     | 256 bytes |
| **2-level predictor** | ~90%     | 2 KB      |
| **gshare**            | ~95%     | 16 KB     |
| **TAGE** (modern)     | ~97%     | 64 KB     |

### When Prediction Fails

```
Predict: taken → Fetch ahead
Actual: not taken → Flush pipeline

Modern CPU pipeline depth: 14-24 stages
Flush cost: 15-24 cycles
Occurs: ~5% of branches
Effective cost: 0.05 × 20 = 1 cycle average
```

---

## Cache and Memory Access Timing

Most pipeline time is wasted **waiting for memory**.

```
L1 Cache hit:     1-3 cycles
L2 Cache hit:    10-20 cycles
L3 Cache hit:    30-50 cycles
Main RAM hit:   100+ cycles
Page fault:      10,000,000+ cycles (disk!)
```

### Why Caches are Critical

```
Tight loop with L1 cache hits:
ADD R0, R1, R2       ; 1 cycle
LDR R3, [R4]         ; 3 cycles (L1 hit)
Total: 1 instruction per 4 cycles (0.25 IPC)

Same loop with cache misses (RAM):
ADD R0, R1, R2       ; 1 cycle
LDR R3, [R4]         ; 100 cycles (RAM miss)
Total: 1 instruction per 101 cycles (0.01 IPC)

100x difference!
```

### Cache Behavior Matters

```
// Bad: Random memory access
for (int i = 0; i < 1000000; i++) {
    data[random()] += 1;  // Cache misses!
}

// Good: Sequential memory access
for (int i = 0; i < 1000000; i++) {
    data[i] += 1;  // Cache hits!
}
```

Sequential access: 100x faster (due to cache locality).

---

## Real-World Performance: IPC (Instructions Per Cycle)

### Theoretical Maximum

```
4-issue superscalar = 4.0 IPC max
Perfect case: 4 independent instructions with no hazards
```

### Actual Performance (2026 CPUs)

| Workload                             | IPC      | Notes                         |
| ------------------------------------ | -------- | ----------------------------- |
| **Ideal**: Integer ops, no stalls    | 3.5-4.0  | Rare in practice              |
| **Good**: Tight loops, L1 cache hits | 2.0-3.0  | Common in well-optimized code |
| **Average**: Mixed operations        | 1.0-2.0  | Typical programs              |
| **Bad**: Cache misses, branches      | 0.5-1.0  | Unoptimized code              |
| **Terrible**: Random memory access   | 0.05-0.2 | Pathological case             |

---

## Putting It All Together: Modern CPU Execution

Here's what actually happens in a modern (2026) CPU:

```
1. Instruction Fetch Unit
   - Fetches 4-6 instructions per cycle
   - Branch predictor looks ahead
   - Manages instruction cache and prefetch

2. Instruction Cache (L1 Icache)
   - 32-64 KB, very fast (1-2 cycles)
   - Stores recently used instructions

3. Decode Unit
   - Decodes 4-6 instructions per cycle
   - Converts to micro-operations (µops)
   - Handles complex x86 instructions

4. Instruction Window (Reorder Buffer)
   - 128-256 entries
   - Tracks in-flight instructions
   - Allows out-of-order execution

5. Register Rename
   - Maps logical registers to physical registers
   - Enables parallel register operations
   - Resolves false dependencies

6. Scheduler (Dispatch Unit)
   - Issues instructions when operands ready
   - Sends to appropriate execution unit
   - Out-of-order issue (not necessarily program order)

7. Execution Units
   - 4+ Integer ALUs
   - 2+ Load/Store units
   - 2+ FP units
   - Branch units

8. Load/Store Unit
   - TLB (Translation Lookaside Buffer) - fast address translation
   - L1 Data Cache - 32-64 KB, 3-4 cycles
   - L2 Cache - 256 KB, 10-20 cycles
   - L3 Cache - 8-32 MB, 30-50 cycles
   - Main RAM - 8-64 GB, 100+ cycles

9. Reorder Buffer & Commit
   - Results committed in program order
   - Ensures precise exceptions
   - Enables rollback on misprediction

10. Registers
    - 1-3 cycle access
    - 64-bit (or 128/256/512 with SIMD)
```

---

## Performance Analysis Example

Let's analyze this code:

```rust
fn sum_array(arr: &[i32; 1000]) -> i32 {
    let mut sum = 0;
    for i in 0..1000 {
        sum += arr[i];    // Array access in loop
    }
    sum
}
```

### Analysis

```
Loop iteration:
1. LDR R0, [R1, R2]    ; Load arr[i] from memory (3-100 cycles)
2. ADD R3, R3, R0      ; Add to sum (1 cycle)
3. ADD R2, R2, #4      ; Increment index (1 cycle)
4. CMP R2, #4000       ; Compare with limit (1 cycle)
5. B.LT loop           ; Branch if less than (0 cycles if predicted right)

Total per iteration: 3 + 1 = 4 cycles minimum

At 4 GHz: 4 cycles × 1000 = 4000 cycles = 1 microsecond

Actual time depends on:
- Cache hits vs misses
- Branch prediction
- Pipelining efficiency
```

### Optimization: Unrolling

```rust
// Unrolled: 4 iterations per loop
fn sum_array_unrolled(arr: &[i32; 1000]) -> i32 {
    let mut sum = 0;
    for i in (0..1000).step_by(4) {
        sum += arr[i];
        sum += arr[i+1];
        sum += arr[i+2];
        sum += arr[i+3];
    }
    sum
}
```

**Benefits**:

- 4 LDR instructions can execute in parallel (4 load/store units)
- 4 ADD instructions interleave
- Fewer branches (4x fewer loop iterations)
- Better instruction-level parallelism

**Result**: Nearly 4x faster (if memory allows).

---

## Key Takeaways

1. **Fetch-Execute Cycle**: Fetch → Decode → Execute → Memory → Writeback
2. **Without pipelining**: 1 instruction per 5 cycles
3. **With pipelining**: 1 instruction per cycle after startup
4. **Data hazards**: Dependencies between instructions → Use forwarding
5. **Control hazards**: Branches → Use prediction (95%+ accurate)
6. **Out-of-order execution**: Reorder instructions to maximize parallelism
7. **Superscalar**: 4+ instructions per cycle (theoretically)
8. **Cache is king**: L1 hit vs RAM miss = 100x difference
9. **IPC varies**: 0.05 (terrible) to 4.0 (perfect) depending on code
10. **Modern CPUs**: Incredibly complex with 14+ pipeline stages, 128+ in-flight instructions

## Implications for Programmers

1. **Data locality matters**: Sequential access beats random (cache)
2. **Reduce dependencies**: Let compiler parallelize independent operations
3. **Avoid branches**: Branchy code → Mispredictions → Pipeline flushes
4. **Use SIMD**: Vector operations exploit superscalar potential
5. **Profile before optimizing**: Measure actual bottlenecks

## Further Reading & References

- [Agner Fog's CPU Optimization Manuals](https://www.agner.org/optimize/)
- [What Every Programmer Should Know About Memory](https://www.akkadia.org/drepper/cpumemory.pdf)
- [Computer Architecture: A Quantitative Approach](https://www.elsevier.com/books/computer-architecture-a-quantitative-approach/hennessey/978-0-12-811905-1)
- [Intel 64 and IA-32 Architectures Optimization Reference](https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-optimization-manual.pdf)

## Questions to Test Your Understanding

1. Draw and label the 5-stage fetch-execute cycle.
2. What is pipelining and how does it improve performance?
3. Explain the difference between data hazards, control hazards, and structural hazards.
4. How does forwarding help with data hazards?
5. What is branch prediction and why is it important?
6. Explain out-of-order execution. Why would a CPU do this?
7. What is superscalar execution?
8. Why is a cache miss so expensive?
9. What is IPC and why does it vary?
10. How would you optimize code to maximize IPC?

Try answering these before reading the next article!

### 1. 5-Stage Cycle

```
FETCH → DECODE → EXECUTE → MEMORY → WRITEBACK → (loop)
Grab instr → Read it → ALU math → RAM if needed → Save result
```

**Perfect simple diagram!**

### 2. Pipelining

**Overlap stages** like laundry line. **Improves**: 5x speedup (1 instr/cycle vs 5). **Fill time** first few cycles.

**Spot on!**

### 3. Hazards

- **Data**: Instr2 needs Instr1 result (wait!)
- **Control**: `if` branch—wrong path = flush
- **Structural**: Two instr need same ALU/cache

**Exact!**

### 4. Forwarding

**Bypass result directly** from ALU to next instr (no wait). `Instr1 ADD → forward to Instr2 immediately`.

**Nailed it.**

### 5. Branch Prediction

**Guess `if` path** (95% right). **Important**: Wrong = pipeline flush (20 cycle penalty).

**Perfect.**

### 6. Out-of-Order

**Reorder instr** when dependencies ready (like scheduler). **Why**: Hide memory stalls, max ALU use.

**Great intuition.**

### 7. Superscalar

**Multiple ALUs/pipelines** (4 instr/cycle). i9 has 4 integer ALUs.

**Yes!**

### 8. Cache Miss

**RAM = 100 cycles vs L1 3 cycles** (33x slower). **Pipeline stalls waiting**.

**Core truth.**

### 9. IPC

**Instructions Per Cycle**. **Varies**: Good code 2-3, bad/random 0.1 (cache/branches).

**Spot-on.**

### 10. Maximize IPC

- Sequential arrays (cache hits)
- Unroll loops (parallelism)
- Minimize branches
- SIMD (vector math)
- Independent ops

---

## What's Next

You've learned how individual instructions execute. The next article will zoom out to **Memory Fundamentals**—understanding the memory hierarchy, stack, heap, and how your program's data is stored and accessed.
