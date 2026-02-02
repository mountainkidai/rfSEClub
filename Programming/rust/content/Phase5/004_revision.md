# What is a network?

Forget browsers. Forget servers.

First principles:

A network is just:

Two computers + a wire + rules

```text
Computer A  <────── wire ──────>  Computer B
```

## The original problem:

    •	Computer A has data
    •	Computer B needs that data
    •	They are physically separate

### Naive solution (fails immediately):

```text
Send the whole file at once
```

### Why it fails:

    •	If connection breaks at 99% → start over
    •	If 10 computers talk → chaos
    •	If distance increases → delay explodes

### The key invention (this changes everything)

- Break data into small pieces
- These pieces are called packets.

```
FILE = [Packet 1][Packet 2][Packet 3][Packet 4]
```

Each packet:

- Is independent
- Can take a different path
- Can be resent if lost

This single idea is why the internet scales.

No packets → no Google → no Sari → no Phunsuk.

Why this matters for YOU

When:

- Your API serves 1 user → fine
- Your API serves 1 million users → only works because:
- Requests are packets
- Responses are packets
- Failures are isolated
- Scaling is packet math

Think Swiggy 🍔

Bad system:

- One delivery boy carries entire city’s orders → dies
- Good system:
  - Thousands of riders
  - Small orders
  - Independent routes
  - Failures don’t collapse system

- Packets = riders
- Network = roads
- Latency = traffic
- Throughput = riders/hour

### Questions

    1.	Why not send data in one big chunk?
    2.	What happens if one packet is lost?
    3.	Why packets enable scale automatically?
