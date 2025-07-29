## Graph Theory Fun

Graph theory is a powerful area of discrete mathematics that deals with structures made up of **vertices (nodes)** and **edges (connections)**. These structures model many real-world systems such as road networks, computer connections, and social relationships. A **vertex** is a point, and an **edge** is a line connecting two vertices. Edges can connect two distinct vertices or loop back to the same vertex (a **loop**).

---

### Vertices and Edges

A **graph** consists of a set of vertices and a set of edges that connect pairs of vertices.

**Example:**
Imagine a map with 4 cities: A, B, C, and D. Roads connect these cities:

* A is connected to B and C.
* B is connected to C.
* C is connected to D.

This can be drawn as:

```txt
   A ----- B
   |     /
   |    /
   C --- D
```

* Vertices: A, B, C, D
* Edges: AB, AC, BC, CD

**Application:** Maps, network diagrams, social networks

---

### Directed Graphs

A **directed graph** (or digraph) has edges with direction, shown by arrows. These represent one-way relationships.

**Example:**
Imagine traffic flow between intersections:

* From A to B (but not back)
* From B to C
* From C to A

Represented as:

```txt
   A → B → C
   ↑     ↓
   ←─────
```

Here, each arrow shows the allowed direction of travel. Note: Arrows indicate that travel is only allowed in the direction the arrow points.

**Application:** Traffic networks, web page links, dependency graphs

---

### Shortest Path

The **shortest path** between two vertices is the path with the minimum number of edges or the minimum total weight (if edges have weights). In a **weighted graph**, each edge has a value (distance, cost, etc.). Whether the graph is **directed** or **undirected** also affects the path.

**Example:**
You want to travel from city A to D. The graph shows:

* A to B: 4 km
* A to C: 2 km
* C to D: 3 km
* B to D: 5 km

Graph structure:

```txt
A --4-- B
|      /
2     5
|   /
C --3-- D
```

Shortest path from A to D:

* A → C → D = 2 + 3 = **5 km**

**Application:** GPS navigation, routing algorithms, delivery systems. Algorithms such as **Dijkstra's Algorithm** or **Breadth-First Search (BFS)** are used to find these paths.

---

### Graph-Based Games

Graphs are often used in logic and strategy games to model relationships and movement.

**Example:**
In a social network, each person is a vertex. A line (edge) between two people means they are friends. The question might be: Who is the person with the most connections?

**Example Graph:**

```txt
Alice — Bob — Charlie
   |      |
 David   Eve
```

To find the person with the most connections, count the number of edges connected to each vertex (this is called the **degree** of the vertex). Bob has 3 edges → **degree = 3**, which is the highest.

**Application:** Social media analysis, board game strategies, puzzle solving

---
