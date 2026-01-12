```text
CPU = Calculator (executes math)
Registers = Calculator's 16 buttons (hold numbers temporarily)
Code = Cookbook recipe (instructions in RAM)
Thread = Cook (reads recipe, punches buttons)
```

```text
1. Thread = Cook reads recipe from RAM: "ADD 2 + 3"
2. Thread/Cook punches buttons: R0=2, R1=3
3. Calculator (CPU) sees R0+R1 → R2=5
4. Thread/Cook writes R2=5 back to recipe book (RAM)
5. Thread/Cook moves to next recipe line
```

```text
RAM (cookbook):                     Registers (calculator buttons):
line 100: mov R0, window_ptr         R0 ───┐
line 101: show R0                    │     │ ← Holds window address NOW
                                    R1 ───┘
Thread A (cook):                     CPU: "Execute line 100 → R0=window"
"Execute line 100" ──────→ punches R0 button
```

### Application Launch (Chrome/Rust Backend)

#### YOU CLICK CHROME DOCK ICON

```text
Mouse click ───────┐
                   │ OS sees: "Start Chrome!"
                   │
macOS launchd ─────┼── "Create Chrome process"
                   │
OS grabs ──────────┼── 150MB RAM (virtual memory)
                   └─ PID 1000 = Chrome process

```

#### MAIN THREAD STARTS (Cook wakes up)

```text
PHYSICAL RAM (16GB real chips):           VIRTUAL MEMORY (PID 1000's 256TB view):
┌─────────────────────────────┐         ┌──────────────────────────────────────┐
│ [4GB] macOS kernel          │         │ 0x00000000 ──────────────────────────┼── Empty
│ [2GB] Other apps            │         │                                      │
│ [150MB] Chrome PID 1000 ────┼──┐     │ 0x10000000 ─ Chrome code ────────────-┼── Loaded
│ [10GB] Free                 │  │     │ 0x7fff0000 ─ Thread A worker ───────--┼── Active
└─────────────────────────────┘  │     │   ├─ Registers (16 blocks) ──────────-┼── R0=0..R15=0
                                 │     │   │   R0=0, R1=0, R2=0...R15=0        │
                                 │     │   ├─ Stack ──────────────────────────-┼── Empty
                                 │     │   └─ Program Counter ───────────────--┼── 0x10001234
                                 │     └─ Mapped ────────────────────────────--┘
                                 └─── OS page table translation ───────────────┐
                                                                              │ ← Virtual → Physical
                                                                              └──────────────────────────────────────┘

Activity Monitor shows: chrome  150MB  (real RAM used)


```
