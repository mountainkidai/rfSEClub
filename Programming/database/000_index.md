# Database: From Theory to Production

## Part I: Foundations - Database Theory & History

### Chapter 1: The Birth of Relational Databases (1960s-1970s)

#### 1.1 Pre-Computer Era to First Databases

- Filing cabinets as database analogs
- First computerized databases (1960s)
- Charles Bachman's Integrated Data Store (IDS)
- IBM's Information Management System (IMS)

#### 1.2 E.F. Codd's Revolutionary Paper (1970)

- "A Relational Model of Data for Large Shared Data Banks"
- Mathematical foundation: Set theory and predicate logic
- Tables (relations), rows (tuples), columns (attributes)

#### 1.3 Commercialization Era

- System R prototype (IBM, 1974)
- Oracle (1979) - first commercial RDBMS
- Ingres (UC Berkeley)
- SQL standardization

#### 1.4 Codd's 12 Rules

- Information rule: All data in tables
- Guaranteed access rule: Primary key access
- Comprehensive language rule: SQL capability
- View updating, integrity constraints

#### 1.5 Relational Algebra

- Selection, Projection, Join
- Union, Intersection, Difference
- Mathematical operators on relations

### Chapter 2: ACID Properties - Transactional Guarantees

#### 2.1 Atomicity

- Transaction as single indivisible unit
- All-or-nothing execution
- BEGIN TRANSACTION, COMMIT, ROLLBACK
- Example: Bank transfer (debit + credit atomic)

#### 2.2 Consistency

- Database remains valid after transaction
- All validation rules checked
- Constraints enforced
- Example: A + B = 100 maintained

#### 2.3 Isolation

- Concurrent transactions don't interfere
- Isolation Levels (increasing strictness):
  - Read Uncommitted: Dirty reads possible
  - Read Committed (PostgreSQL default): See only committed data
  - Repeatable Read: Consistent snapshot within transaction
  - Serializable: Highest isolation, as if transactions run serially
- Prevents: Dirty reads, non-repeatable reads, phantom reads
- Trade-offs: Isolation vs performance

#### 2.4 Durability

- Committed changes persist after failure
- Write-Ahead Logging (WAL) ensures durability
- Changes permanent once committed

#### 2.5 Practical Isolation Level Selection

- Read-only transactions: Use Repeatable Read
- Read-write transactions: Serializable or Read Committed
- High concurrency: Read Committed
- Strong consistency needs: Serializable

## Part II: PostgreSQL Architecture & Internals

### Chapter 3: Connection Handling Evolution (SQL → MySQL → PostgreSQL)

#### 3.1 Raw SQL Era (1970s) - Single Process

- One app = one process
- No concurrency (queue everything)
- Like single bank teller

#### 3.2 MySQL - Threaded Architecture

- One thread per connection (up to 50K+ threads)
- Shared memory apartment 🏠
- max_connections = 5000 → 5000 threads
- Thread Pool mode (MySQL 8.0+): Fixed threads (64-512) + task queue
- Pros: Low RAM
- Cons: One crash kills all

#### 3.3 PostgreSQL - Process-Based Architecture

##### 3.3.1 Postmaster Process (Daddy 👑)

Master controller, parent of ALL processes

- Listens on port 5432
- Forks backend process per connection
- Manages server lifecycle (start/stop/restart)

##### 3.3.2 Backend Processes (Workers 👶)

- Process-per-connection model
- Each client gets dedicated OS process
- Execute SQL queries, manage transactions
- Isolation + stability over threads
- Controlled by max_connections
- Trade-off: Memory overhead vs reliability

##### 3.3.3 Why Processes > Threads?

| Processes ✅            | Threads ❌ (MySQL)          |
| ----------------------- | --------------------------- |
| 1 crash ≠ kill everyone | 1 crash = kill WHOLE server |
| Memory isolated         | Shared memory bugs          |
| Easy debugging          | Hard debugging              |
| Fork() copy-on-write    | Complex locking             |

#### 3.3.4 Background Workers & Auxiliary Processes

- Autovacuum workers: Cleanup dead tuples
- WAL writer: Write-ahead log management
- Checkpointer: Periodic checkpoints
- Background writer: Async writes
- Statistics collector: Query stats
- Parallel query workers: Configured by max_worker_processes

### Chapter 4: Query Execution Lifecycle

#### 4.1 Stage 1: Parsing

- Lexer recognizes lexemes (keywords, literals)
- Parser validates grammar using Bison/Flex
- Creates Abstract Syntax Tree (AST)
- Entry: exec_simple_query() function

#### 4.2 Stage 2: Analysis/Rewrite

- Semantic analysis
- Table/column existence validation
- Type checking
- View expansion

#### 4.3 Stage 3: Planning/Optimization

- Planner generates execution paths
- Cost estimation per path
- Considers: indexes, statistics, table sizes, join methods
- Selects optimal plan (lowest cost)
- Output: PlannedStmt structure
- Uses dynamic programming for join planning

#### 4.4 Stage 4: Execution

- Portal created in backend memory
- Iterator model: nodes act as assembly line
- Root requests from children, children deliver rows
- Execution techniques:
  - Parallel execution: Multiple CPU cores
  - Vectorized execution: Batch processing
  - Operator fusion: Combine operators

#### 4.5 Query Protocols

- Simple query protocol: Direct execution
- Extended query protocol: Prepared statements

### Chapter 5: Multi-Version Concurrency Control (MVCC)

#### 5.1 Core Principle

- Readers never block writers, writers never block readers
- Foundation of PostgreSQL's high concurrency

#### 5.2 How MVCC Works

- Each transaction gets unique XID (Transaction ID)
- Hidden system columns on every row:
  - xmin: Transaction that created row
  - xmax: Transaction that deleted/updated row
  - cmin, cmax: Command IDs
- Updates create new row version, old marked "dead"
- Each transaction sees consistent snapshot based on start time

#### 5.3 Visibility Rules

- Determine which row version visible to transaction
- Based on transaction isolation level
- Prevents dirty reads, phantom reads
- Ensures consistent read results

#### 5.4 Vacuum Process

- Cleans up dead row versions
- Reclaims storage space
- Updates statistics
- Prevents table bloat
- Critical for maintenance

#### 5.5 MVCC Benefits

- High concurrency without locks
- Readers don't block writers
- Consistent snapshots
- Reduced contention
- Supports multiple isolation levels

#### 5.6 MVCC Trade-offs

- More disk space: Multiple row versions
- Updates slower than inserts: Creates new version
- Requires vacuum: Overhead of cleanup
- Append-only storage: Complexity in implementation
- Write amplification: Each update = new row

### Chapter 6: Storage System

#### 6.1 Storage Hierarchy

- Tablespaces: Physical storage locations
- Databases: Collections of schemas
- Schemas: Namespaces for objects
- Relations: Tables, indexes, sequences

#### 6.2 Page Structure

- Default 8KB pages
- Page header + metadata + data rows
- Heap files for row storage

#### 6.3 Tuple Structure

- Tuple header: Metadata, length, pointer
- Null bitmap: Efficient NULL representation
- System columns: Row ID, transaction info (xmin, xmax)
- Data: Actual column values

#### 6.4 Write-Ahead Logging (WAL)

- Changes written to log before data files
- Ensures durability and crash recovery
- Foundation for replication
- Point-in-time recovery

#### 6.5 Shared Memory Components

- Shared buffers: Data cache
- WAL buffers: Log write cache
- Lock tables: Concurrency control
- Communication between processes

## Part III: SQL Fundamentals & Advanced Concepts

### Chapter 7: Database Normalization

#### 7.1 Purpose of Normalization

- Minimize data redundancy
- Enhance data integrity
- Improve consistency
- Optimize storage
- Simplify maintenance

#### 7.2 First Normal Form (1NF)

- Atomicity: Each cell contains single, indivisible value
- Primary key: Unique identifier for each row
- No repeating groups: No multi-valued attributes
- No duplicated rows or columns
- Unique column names

#### 7.3 Second Normal Form (2NF)

- Must be in 1NF
- No partial dependencies: All non-key attributes fully depend on entire primary key
- Applies to composite primary keys
- Eliminates redundancy from partial key dependencies

#### 7.4 Third Normal Form (3NF)

- Must be in 2NF
- No transitive dependencies: Non-key attributes depend only on primary key, not other non-key attributes
- Eliminates dependencies between non-key columns
- Most common normalization target

#### 7.5 Boyce-Codd Normal Form (BCNF)

- Stricter version of 3NF
- Every determinant is a candidate key
- Addresses anomalies 3NF doesn't handle
- Eliminates all functional dependencies

#### 7.6 Fourth & Fifth Normal Forms (4NF, 5NF)

- Handle multi-valued dependencies (4NF)
- Join dependencies (5NF)
- Rarely needed in practice

#### 7.7 Normalization Trade-offs

- Benefits: Less redundancy, better integrity, easier updates
- Costs: More joins, potential performance impact
- Denormalization: Sometimes intentional for performance (e.g., data warehouses)

### Chapter 8: SQL Joins

#### 8.1 INNER JOIN

- Returns only matching rows from both tables
- Most common join type
- Syntax: `SELECT * FROM A INNER JOIN B ON A.id = B.id`
- Use: When you need only records with matches

#### 8.2 LEFT (OUTER) JOIN

- Returns all rows from left table
- Matched rows from right table
- NULL for non-matches in right table
- Syntax: `SELECT * FROM A LEFT JOIN B ON A.id = B.id`
- Use: Keep all records from primary table

#### 8.3 RIGHT (OUTER) JOIN

- Returns all rows from right table
- Matched rows from left table
- NULL for non-matches in left table
- Syntax: `SELECT * FROM A RIGHT JOIN B ON A.id = B.id`
- Use: Can be rewritten as LEFT JOIN (reverse tables)

#### 8.4 FULL OUTER JOIN

- Returns all rows from both tables
- Matches where possible
- NULL where no match
- Syntax: `SELECT * FROM A FULL OUTER JOIN B ON A.id = B.id`
- Use: Complete view of both datasets
- Note: Not all databases support (e.g., MySQL)

#### 8.5 CROSS JOIN

- Cartesian product of both tables
- Every row from A combined with every row from B
- No ON clause
- Use: Generate combinations

#### 8.6 Join Performance

- Index join columns for speed
- Choose appropriate join type
- Nested loop: Small tables
- Merge join: Large sorted tables
- Hash join: Large unsorted tables

### Chapter 9: Subqueries

#### 9.1 Non-Correlated (Independent) Subqueries

- Executes once, independent of outer query
- Result used by outer query
- Generally more efficient
- Can be nested
- Returns single value or set of values

Example:

```sql
SELECT name FROM employees
WHERE department_id IN (SELECT id FROM departments WHERE location = 'NYC');
```

#### 9.2 Correlated Subqueries

- References columns from outer query
- Executes repeatedly (once per outer row)
- Dependent on outer query values
- Slower due to repeated execution
- Flexible for row-by-row operations

Example:

```sql
SELECT e.name, e.salary
FROM employees e
WHERE e.salary > (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id);
```

#### 9.3 Key Differences

| Aspect      | Non-Correlated     | Correlated             |
| ----------- | ------------------ | ---------------------- |
| Execution   | Once               | Once per outer row     |
| Dependency  | Independent        | Depends on outer query |
| Performance | Faster             | Slower                 |
| Flexibility | Less flexible      | More flexible          |
| Nesting     | Can be nested      | Cannot be nested       |
| Use case    | Static comparisons | Row-by-row operations  |

#### 9.4 Optimization Tips

- Use non-correlated when possible
- Consider rewriting correlated as JOINs
- Index columns referenced by subquery
- Limit data returned by subquery
- Avoid in complex conditions

### Chapter 10: Aggregate Functions & Grouping

#### 10.1 Aggregate Functions

- COUNT(): Count rows
- SUM(): Total of numeric column
- AVG(): Average value
- MIN(): Minimum value
- MAX(): Maximum value
- GROUP_CONCAT(): Concatenate strings

#### 10.2 GROUP BY Clause

- Groups rows with same values
- Required when mixing aggregate and non-aggregate columns
- Syntax: `SELECT col1, COUNT(col2) FROM table GROUP BY col1`
- Creates groups for aggregate calculations

Example:

```sql
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department;
```

#### 10.3 HAVING Clause

- Filters groups after GROUP BY
- Like WHERE but for grouped data
- Can use aggregate functions in condition
- Syntax: `HAVING aggregate_function(col) condition`

Example:

```sql
SELECT department, COUNT(*) as emp_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 10;
```

#### 10.4 WHERE vs HAVING

- WHERE: Filters rows before grouping
- HAVING: Filters groups after grouping
- WHERE: Cannot use aggregate functions
- HAVING: Can use aggregate functions

Execution Order:

1. FROM
2. WHERE (filter rows)
3. GROUP BY (create groups)
4. HAVING (filter groups)
5. SELECT
6. ORDER BY

#### 10.5 Combined Example

```sql
SELECT product_category, SUM(sales) AS total_sales
FROM sales
WHERE sale_date >= '2023-01-01'  -- Filter rows first
GROUP BY product_category
HAVING SUM(sales) > 10000  -- Filter groups
ORDER BY total_sales DESC;
```

#### 10.6 Advanced Grouping

- ROLLUP: Hierarchical grouping (subtotals)
- CUBE: All combinations of grouping columns
- GROUPING SETS: Custom grouping combinations

### Chapter 11: Window Functions

#### 11.1 Window Functions Overview

- Perform calculations across row sets (windows)
- Return multiple rows (unlike aggregate functions)
- Don't collapse rows into groups
- Powerful for ranking, running totals, moving averages

#### 11.2 Basic Syntax

```sql
function_name() OVER (
    [PARTITION BY column1, column2, ...]
    [ORDER BY column3, column4, ...]
)
```

Components:

- PARTITION BY: Divides result set into windows/groups
- ORDER BY: Defines order within each partition (mandatory for some functions)
- OVER: Specifies window

#### 11.3 Ranking Functions

**ROW_NUMBER():**

- Assigns unique sequential integer to each row
- No gaps, no ties (1, 2, 3, 4, 5)
- Order-sensitive (ORDER BY required)

```sql
SELECT name, salary,
    ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS row_num
FROM employees;
```

**RANK():**

- Assigns rank with gaps for ties
- Same rank for tied values, then skip (1, 2, 2, 4, 5)

```sql
SELECT name, score,
    RANK() OVER (ORDER BY score DESC) AS rank
FROM students;
```

**DENSE_RANK():**

- Assigns rank without gaps
- Same rank for ties, no skip (1, 2, 2, 3, 4)

```sql
SELECT name, score,
    DENSE_RANK() OVER (ORDER BY score DESC) AS dense_rank
FROM students;
```

#### 11.4 ROW_NUMBER() vs RANK() vs DENSE_RANK()

| Score | ROW_NUMBER | RANK | DENSE_RANK |
| ----- | ---------- | ---- | ---------- |
| 95    | 1          | 1    | 1          |
| 90    | 2          | 2    | 2          |
| 90    | 3          | 2    | 2          |
| 85    | 4          | 4    | 3          |
| 80    | 5          | 5    | 4          |

#### 11.5 PARTITION BY Usage

- Divides data into separate windows
- Function applied independently to each partition
- Numbering resets per partition

```sql
-- Rank students per section
SELECT section, name, score,
    RANK() OVER (PARTITION BY section ORDER BY score DESC) AS rank_in_section
FROM students;
```

#### 11.6 Practical Use Cases

- Top N per group: Use ROW_NUMBER() with WHERE filter
- Pagination: Divide results into pages
- Running totals: SUM() OVER (ORDER BY date)
- Moving averages: AVG() OVER (ORDER BY date ROWS BETWEEN...)
- Percentile calculations: NTILE()

#### 11.7 Window Functions in Subqueries

```sql
WITH ranked AS (
    SELECT *,
        ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rn
    FROM employees
)
SELECT * FROM ranked WHERE rn <= 3;  -- Top 3 earners per department
```

#### 11.8 Other Window Functions

- LEAD(): Access next row value
- LAG(): Access previous row value
- NTILE(n): Divide into n buckets
- FIRST_VALUE(): First value in window
- LAST_VALUE(): Last value in window

## Part IV: Indexing Strategies & Query Optimization

### Chapter 12: Index Types in PostgreSQL

#### 12.1 B-Tree Indexes (Default)

**Best for:** Scalar types (int, string), equality & range queries

**Operations:** =, >, <, >=, <=, BETWEEN, IN, LIKE (with leading chars)

**Complexity:** O(log n) access

**Balanced tree structure:** Self-balancing for consistent performance

**When to use:**

- Standard WHERE clauses: `WHERE age = 30`
- Range queries: `WHERE order_date BETWEEN '2023-01-01' AND '2023-12-31'`
- Sorting: `ORDER BY indexed column`
- Foreign keys, primary keys

**Performance:** 1M rows, 5s → 50ms with B-tree

**Multi-column B-Tree:**

```sql
CREATE INDEX idx_name_age ON users (name, age);
```

- Column order matters! Most selective first
- Left-most prefix rule applies

**Partial Indexes:**

```sql
CREATE INDEX idx_active_users ON users (age) WHERE active = true;
```

- Index subset of data
- Smaller index, faster queries on subset

#### 12.2 GIN (Generalized Inverted Index)

**Best for:** Arrays, JSONB, full-text search, multi-value columns

**Performance:** 10x-100x faster searches, 20x slower inserts

**Inverted index structure:** Maps values to row locations

**When to use:**

- Array contains: `WHERE tags @> ARRAY['electronics']`
- Full-text search: `to_tsvector('english', content)`
- JSONB operators: @>, ?, ?&, ?|
- Any "contains" or overlap queries

**Setup:**

```sql
-- Arrays
CREATE INDEX idx_tags ON products USING GIN (tags);

-- Full-text search
CREATE EXTENSION pg_trgm;
CREATE INDEX idx_search ON documents USING GIN (to_tsvector('english', content));

-- JSONB
CREATE INDEX idx_data ON events USING GIN (data);
```

**Real Example:** Blog tags search 2s → 100ms

**Maintenance:** Schedule REINDEX for dynamic data during low-traffic

#### 12.3 GiST (Generalized Search Tree)

**Best for:** Geometric/spatial data, ranges, custom types

**Tree-based structure:** Balanced for various data types

**When to use:**

- PostGIS geospatial queries
- Range types (int4range, tstzrange)
- Full-text search (alternative to GIN)
- Point/polygon proximity

**Example:**

```sql
CREATE INDEX idx_location ON places USING GIST (geom);

-- Proximity query
SELECT * FROM places
WHERE ST_DWithin(geom, ST_MakePoint(-74,40), 1000);
```

**Real Example:** Ride-sharing proximity queries, sub-second on 500K records

#### 12.4 BRIN (Block Range Index)

**Best for:** Large sequential datasets (time-series, logs)

**Space:** 100x smaller than B-tree for TB-scale tables

**Stores:** Min/max values per block range

**When to use:**

- Timestamp columns (append-only tables)
- Sequential data: created_at, auto-increment id
- Data naturally clustered on disk

**Setup:**

```sql
-- First cluster the table
CLUSTER logs USING idx_logs_time;

-- Then create BRIN
CREATE INDEX idx_logs_time ON logs USING BRIN (timestamp);
```

**Real Example:** IoT 10GB data, index 1% size of B-tree, 95% speed

**Trade-off:** Best for sequential scans on naturally ordered data

#### 12.5 Hash Indexes

**Best for:** Equality only (=)

**Limitation:** No range queries, no ordering

**Rarely used:** B-tree handles equality well enough

#### 12.6 Index Selection Matrix

| Data Type                | Query Pattern       | Best Index |
| ------------------------ | ------------------- | ---------- |
| Scalar (int, string)     | =, <, >, BETWEEN    | B-Tree     |
| Array                    | CONTAINS, overlap   | GIN        |
| JSONB                    | Path queries        | GIN        |
| Full-text                | Search, tsvector    | GIN        |
| Geometry                 | Proximity, spatial  | GiST       |
| Range types              | Overlaps, contains  | GiST       |
| Time-series (sequential) | Range on timestamps | BRIN       |

#### 12.7 Index Best Practices

- Run EXPLAIN ANALYZE to confirm usage
- Limit 5-10 indexes per table (write overhead)
- Index foreign keys always
- Index WHERE, JOIN, ORDER BY columns
- Monitor with pg_stat_user_indexes
- Schedule REINDEX for GIN/GiST
- Use partial indexes for subsets
- Avoid over-indexing (each index slows writes)
- Consider composite indexes for multi-column queries
- Regularly VACUUM ANALYZE for statistics

### Chapter 13: Query Optimization Techniques

#### 13.1 EXPLAIN ANALYZE Workflow

**Purpose:** Understand execution plan, identify bottlenecks

**Shows:** Query plan, cost estimates, actual execution times

**Basic usage:**

```sql
EXPLAIN ANALYZE SELECT * FROM orders WHERE order_date > '2023-01-01';
```

**Key metrics:**

- Seq Scan: Full table scan (not always bad for small tables!)
- Index Scan: Using index
- Cost: Estimated expense (startup..total)
- Actual time: Real execution in milliseconds
- Rows: Number processed
- Buffers: Memory usage (with BUFFERS option)

**Advanced:**

```sql
EXPLAIN (ANALYZE, BUFFERS, VERBOSE) SELECT ...;
```

#### 13.2 Scan Types

**Sequential Scan:**

- Read entire table
- Good for: Small tables, returning >5-10% of rows
- Bad for: Large tables, selective queries

**Index Scan:**

- Use index to find rows
- Good for: Selective queries (<5% rows)
- Requires: Index on WHERE/JOIN columns

**Bitmap Index Scan:**

- Combine multiple indexes
- Good for: OR queries, multiple conditions
- Two phases: bitmap build, heap scan

**Index Only Scan:**

- All needed columns in index
- No heap access required
- Fastest scan type

#### 13.3 Join Strategies

**Nested Loop:**

- For each outer row, scan inner table
- Fast to start
- Best for: Small tables, indexed inner table
- Worst for: Large tables, no index

**Merge Join:**

- Zipper operation on sorted datasets
- Best for: Large sorted/indexed tables
- High startup cost: If sort needed
- Efficient: Once sorted

**Hash Join:**

- Build hash table for one relation
- Best for: Large unsorted tables
- Memory intensive
- Good for: Equi-joins

#### 13.4 Statistics and Maintenance

**Problem:** Stale statistics → poor query plans

**Solution:** Regular ANALYZE

```sql
ANALYZE table_name;       -- Update statistics
VACUUM ANALYZE;           -- Cleanup + statistics
AUTOVACUUM;               -- Automatic (enable by default)
```

**Why important:**

- Planner estimates row counts
- Chooses join strategy
- Decides index vs sequential scan
- Without good stats: wrong decisions

#### 13.5 Query Optimization Checklist

- Index strategically: WHERE, JOIN, ORDER BY columns
- Select only needed columns: Avoid SELECT \*
- Limit rows early: Use WHERE, LIMIT
- Optimize JOINs: Index join columns, appropriate type
- Avoid functions on indexed columns: Breaks index usage
- Use EXPLAIN ANALYZE: Verify plan
- Update statistics: Regular VACUUM ANALYZE
- Partition large tables: Break into manageable chunks
- Materialised views: Pre-compute aggregations
- Monitor slow queries: pg_stat_statements
- Connection pooling: Reduce connection overhead
- Analyze lock contention: Minimize blocking

#### 13.6 Common Anti-Patterns

- ❌ SELECT \* when few columns needed
- ❌ Functions on indexed columns: WHERE UPPER(name) = 'JOHN'
- ❌ Leading wildcards: LIKE '%search%'
- ❌ OR conditions: Consider UNION or GIN index
- ❌ Missing indexes on foreign keys
- ❌ Correlated subqueries: Rewrite as JOIN
- ❌ Large OFFSET: Use keyset pagination

#### 13.7 Performance Metrics to Track

- Cache hit ratio: Data in memory (target >95%)
- Query execution time: P50, P95, P99 latencies
- Lock contention: Wait times
- Buffer usage: Memory efficiency
- Index usage: pg_stat_user_indexes
- Table bloat: Dead tuple ratio
- Connection pool exhaustion: Active vs max

## Part V: Connection Pooling

### Chapter 14: Connection Pooling Fundamentals

#### 14.1 Why Connection Pooling?

**Problem:** Creating DB connections is expensive

- Network handshake: TCP 3-way handshake
- Authentication: User verification
- Connection setup: Memory allocation, state initialization
- Latency: 50-100ms per connection
- Resource intensive: Memory, file descriptors

**Solution:** Pool of reusable connections

- Create once at startup
- Borrow from pool when needed
- Return after use
- Dramatic performance improvement
- Reduced latency, resource consumption

#### 14.2 Key Configuration Parameters

**Max Pool Size:**

- Maximum concurrent connections
- Set based on: DB capacity, app load, server resources
- Formula: max_pool_size < db_max_connections
- Too few: Contention, delays
- Too many: Resource exhaustion, diminishing returns

**Min Idle Connections:**

- Minimum kept ready
- Balance: Availability vs resource usage
- Warm up pool at startup

**Connection Timeout:**

- How long to wait for available connection
- Prevents indefinite blocking
- Typical: 30-60 seconds
- Fail fast for better UX

**Max Lifetime:**

- How long connection can exist
- Forces recycling (prevents stale connections)
- Typical: 30-60 minutes
- Handles server-side timeouts

**Idle Timeout:**

- Close idle connections after period
- Frees resources during low traffic
- Typical: 10-15 minutes

**Connection Validation:**

- "Test on borrow" pattern
- Verify connection alive before use
- Lightweight query: SELECT 1
- Removes broken connections from pool

#### 14.3 Pooling Modes (PgBouncer)

**Transaction Pooling (Recommended):**

- Connection per transaction
- High concurrency
- Good balance
- Stateful features limited to transaction

**Session Pooling:**

- Connection per session
- Lower concurrency
- Full stateful feature support
- Prepared statements, temp tables work

**Statement Pooling:**

- Connection per statement
- Highest concurrency
- No multi-statement transactions
- Very limited use cases

#### 14.4 Best Practices

- Use pooling library: HikariCP (Java), PgBouncer, sqlx (Rust)
- Configure max pool size: Based on max_connections
- Enable connection validation: Detect stale connections
- Close connections properly: Return to pool
- Monitor pool health: Active, idle, waiting metrics
- Handle connection leaks: Track unreturned connections
- Implement timeouts: Avoid indefinite waits
- Dynamic pool sizing: Adjust to traffic
- Separate pools: Different components
- Failover strategies: Handle failures gracefully

#### 14.5 Common Issues & Solutions

**Connection Leaks:**

- Symptom: Pool exhaustion, timeouts
- Cause: Connections not returned
- Solution: Proper close/return, monitoring, try-with-resources

**Timeouts:**

- Symptom: Requests waiting for connection
- Cause: Pool too small, slow queries
- Solution: Increase pool size, optimize queries, add timeout alerts

**Stale Connections:**

- Symptom: Errors on connection use
- Cause: DB closed connection, network issues
- Solution: Connection validation, max lifetime

**Thundering Herd:**

- Symptom: All connections created at once
- Cause: Sudden traffic spike
- Solution: Ramp-up period, min idle connections

#### 14.6 PgBouncer Deployment Patterns

**Application-Collocated:**

- PgBouncer on same VM as app
- Pros: Low latency, security
- Cons: Multiple PgBouncer instances

**Centralised:**

- Single PgBouncer for all apps
- Pros: Easier management
- Cons: Single point of failure, network hop

**Built-in (PostgreSQL):**

- Built-in PgBouncer in Azure/Cloud
- Pros: Seamless failover, no config changes
- Cons: Cloud vendor specific

#### 14.7 Monitoring & Metrics

- Active connections: Currently in use
- Idle connections: Available in pool
- Waiting connections: Queued requests (bad sign!)
- Connection age: Time since creation
- Checkout duration: How long connections held
- Pool utilization: Active / Max (target <80%)

## Part VI: Rust sqlx Integration

### Chapter 15: sqlx Overview & Setup

#### 15.1 sqlx Key Features

- Compile-time query verification: Catch errors at compile time
- Type-safe SQL: Rust types match DB types
- Async/await support: Non-blocking I/O
- Multiple databases: Postgres, MySQL, SQLite
- Connection pooling built-in: PgPool
- Prevents: SQL injection, type mismatches

#### 15.2 Cargo.toml Setup

```toml
[dependencies]
sqlx = { version = "0.8", features = [
    "runtime-tokio",      # Async runtime
    "postgres",           # PostgreSQL driver
    "macros",             # Compile-time checking
    "uuid",               # UUID type support
    "time",               # Date/time types
    "chrono"              # Alternative datetime
]}
tokio = { version = "1", features = ["full"] }
```

**Feature flags:**

- runtime-tokio: Tokio async runtime
- runtime-async-std: async-std runtime
- postgres, mysql, sqlite: Database drivers
- macros: query!, query_as! macros
- migrate: Migration support
- tls: TLS connection support

#### 15.3 Environment Setup

```bash
# .env file
DATABASE_URL=postgres://user:password@localhost:5432/dbname

# For compile-time checking
export DATABASE_URL="postgres://user:password@localhost:5432/dbname"
```

### Chapter 16: Connection Pool Creation

#### 16.1 Basic Pool Setup

```rust
use sqlx::postgres::{PgPoolOptions, PgPool};
use sqlx::{Pool, Postgres};
use std::time::Duration;

#[tokio::main]
async fn main() -> Result<(), sqlx::Error> {
    let database_url = std::env::var("DATABASE_URL")
        .expect("DATABASE_URL must be set");

    let pool: PgPool = PgPoolOptions::new()
        .max_connections(5)
        .connect(&database_url)
        .await?;

    println!("Connected to database!");
    Ok(())
}
```

#### 16.2 Advanced Pool Configuration

```rust
let pool = PgPoolOptions::new()
    .max_connections(10)                              // Max pool size
    .min_connections(2)                               // Min idle connections
    .acquire_timeout(Duration::from_secs(30))         // Connection timeout
    .idle_timeout(Duration::from_secs(600))           // Idle timeout (10 min)
    .max_lifetime(Duration::from_secs(1800))          // Max lifetime (30 min)
    .test_before_acquire(true)                        // Validate before use
    .connect(&database_url)
    .await?;
```

**Configuration guidelines:**

- max_connections: Set based on DB max_connections and app instances
- min_connections: 1-2 for small apps, 5-10 for high-traffic
- acquire_timeout: 30-60 seconds
- idle_timeout: 10-15 minutes
- max_lifetime: 30-60 minutes

#### 16.3 Pool Cloning is Safe

```rust
pub struct Pool<DB: Database>(Arc<PoolInner<DB>>);
```

**Important:** PgPool uses Arc internally

- Cloning is cheap: Only increments reference count
- All clones share same pool: No duplication
- No performance penalty: Safe to pass around

```rust
let pool = create_pool().await;
let pool_clone = pool.clone();  // Cheap clone
```

### Chapter 17: Compile-Time Query Verification

#### 17.1 How It Works

- At compile time: Connects to DB using DATABASE_URL
- Validates query syntax
- Checks table/column existence
- Verifies Rust types match DB types
- Generates metadata for offline builds

#### 17.2 What It Checks

✅ Query syntax errors
✅ Table/column existence
✅ Type mismatches
✅ Column count mismatch

#### 17.3 What It Doesn't Check

❌ Runtime constraints: Foreign keys, check constraints
❌ Data-dependent logic: Triggers
❌ NOT NULL violations on INSERT: Only at runtime
❌ Constraint violations: Unique, foreign key

#### 17.4 Checked vs Unchecked Queries

**Checked (Compile-time verification):**

```rust
// Using query! macro - compile-time checked
let users = sqlx::query_as!(
    User,
    "SELECT id, name, email FROM users WHERE id = $1",
    user_id
)
.fetch_one(&pool)
.await?;
```

**Unchecked (Runtime only):**

```rust
// Using query_as - runtime only
let users = sqlx::query_as::<_, User>("SELECT id, name FROM users")
    .fetch_all(&pool)
    .await?;
```

#### 17.5 Offline Mode for CI/CD

**Problem:** CI doesn't have database access

**Solution:** Prepare query metadata

```bash
# Generate .sqlx/ directory with metadata
cargo sqlx prepare

# Add to version control
git add .sqlx/

# Build without DATABASE_URL
cargo build
```

**Workflow:**

- Developer: Connect to DB, develop with checked queries
- Before commit: Run cargo sqlx prepare
- CI: Build using .sqlx/ metadata (no DB needed)
- Production: Use offline mode or connect to DB

#### 17.6 Limitations & Workarounds

**Problem:** sqlx doesn't check NOT NULL on INSERT

```rust
// This compiles but fails at runtime
sqlx::query!("INSERT INTO users (name) VALUES ($1)", name)
    .execute(&pool)
    .await?;  // Runtime error if user_id NOT NULL missing
```

**Workaround:** Add missing columns or use RETURNING

```rust
sqlx::query!("INSERT INTO users (name, user_id) VALUES ($1, $2)", name, user_id)
    .execute(&pool)
    .await?;
```

**Problem:** IN queries with arrays

```rust
// Doesn't work with compile-time check
let ids = vec![1, 2, 3];
sqlx::query!("SELECT * FROM users WHERE id IN ($1)", ids)  // Error
```

**Workaround:** Use ANY operator

```rust
sqlx::query!("SELECT * FROM users WHERE id = ANY($1)", &ids)
    .fetch_all(&pool)
    .await?;
```

### Chapter 18: CRUD Operations with sqlx

#### 18.1 Read (SELECT)

**Single row:**

```rust
let user = sqlx::query_as!(
    User,
    "SELECT id, name, email FROM users WHERE id = $1",
    user_id
)
.fetch_one(&pool)  // Expects exactly one row
.await?;
```

**Optional row:**

```rust
let user = sqlx::query_as!(
    User,
    "SELECT id, name, email FROM users WHERE id = $1",
    user_id
)
.fetch_optional(&pool)  // Returns Option<User>
.await?;
```

**Multiple rows:**

```rust
let users = sqlx::query_as!(
    User,
    "SELECT id, name, email FROM users ORDER BY created_at DESC LIMIT $1 OFFSET $2",
    limit as i32,
    offset as i32
)
.fetch_all(&pool)  // Returns Vec<User>
.await?;
```

**Stream (memory efficient for large results):**

```rust
use futures::TryStreamExt;

let mut stream = sqlx::query_as!(User, "SELECT * FROM users")
    .fetch(&pool);

while let Some(user) = stream.try_next().await? {
    println!("{:?}", user);
}
```

#### 18.2 Create (INSERT)

**Insert with RETURNING:**

```rust
let user = sqlx::query_as!(
    User,
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id, name, email, created_at",
    name,
    email
)
.fetch_one(&pool)
.await?;
```

**Insert without return:**

```rust
sqlx::query!(
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    name,
    email
)
.execute(&pool)
.await?;
```

**Bulk insert (not directly supported, use loops or unnest):**

```rust
for user in users {
    sqlx::query!("INSERT INTO users (name, email) VALUES ($1, $2)", user.name, user.email)
        .execute(&pool)
        .await?;
}
```

#### 18.3 Update

```rust
let result = sqlx::query!(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    new_name,
    new_email,
    user_id
)
.execute(&pool)
.await?;

println!("Updated {} rows", result.rows_affected());
```

#### 18.4 Delete

```rust
let result = sqlx::query!("DELETE FROM users WHERE id = $1", user_id)
    .execute(&pool)
    .await?;

if result.rows_affected() == 0 {
    return Err("User not found".into());
}
```

#### 18.5 Transactions

```rust
let mut tx = pool.begin().await?;

// All or nothing
sqlx::query!("INSERT INTO users (name) VALUES ($1)", "Alice")
    .execute(&mut *tx)
    .await?;

sqlx::query!("INSERT INTO orders (user_id, total) VALUES ($1, $2)", user_id, 100.0)
    .execute(&mut *tx)
    .await?;

// Commit or rollback
tx.commit().await?;  // or tx.rollback()?
```

#### 18.6 Custom Types

```rust
use sqlx::FromRow;
use uuid::Uuid;

#[derive(Debug, FromRow)]
struct User {
    id: Uuid,
    name: String,
    email: String,
    created_at: chrono::DateTime<chrono::Utc>,
}
```

**Type mappings:**

- INT, BIGINT → i32, i64
- TEXT, VARCHAR → String
- UUID → uuid::Uuid
- TIMESTAMPTZ → chrono::DateTime<Utc>
- BOOL → bool
- JSONB → serde_json::Value

### Chapter 19: Migrations with sqlx-cli

#### 19.1 Install sqlx-cli

```bash
cargo install sqlx-cli --no-default-features --features postgres
```

#### 19.2 Create Database

```bash
sqlx database create
```

#### 19.3 Create Migration

```bash
sqlx migrate add -r init
```

Creates two files:

- migrations/TIMESTAMP_init.up.sql (forward)
- migrations/TIMESTAMP_init.down.sql (rollback)

#### 19.4 Write Migration

**Up migration (TIMESTAMP_init.up.sql):**

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);
```

**Down migration (TIMESTAMP_init.down.sql):**

```sql
DROP INDEX IF EXISTS idx_users_email;
DROP TABLE IF EXISTS users;
```

#### 19.5 Run Migrations

**From CLI:**

```bash
sqlx migrate run
```

**In code:**

```rust
sqlx::migrate!()
    .run(&pool)
    .await
    .expect("Failed to run migrations");
```

#### 19.6 Migration Best Practices

- Reversible: Always write down migrations
- Idempotent: Use IF NOT EXISTS, IF EXISTS
- Atomic: Keep each migration focused
- Test: Test migrations in dev before production
- Version control: Commit migrations
- Sequential: Don't edit old migrations after merging

## Part VII: Axum Integration

### Chapter 20: Axum + sqlx Patterns

#### 20.1 Pattern 1: Pool in App State (Recommended)

```rust
use axum::{Router, extract::State, routing::get, http::StatusCode, Json};
use sqlx::PgPool;

#[derive(Clone)]
struct AppState {
    db: PgPool,
}

#[tokio::main]
async fn main() {
    let pool = PgPoolOptions::new()
        .max_connections(5)
        .connect(&std::env::var("DATABASE_URL").unwrap())
        .await
        .unwrap();

    let state = AppState { db: pool };

    let app = Router::new()
        .route("/users", get(get_users))
        .route("/users/:id", get(get_user))
        .with_state(state);

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000")
        .await
        .unwrap();

    axum::serve(listener, app).await.unwrap();
}

async fn get_users(
    State(state): State<AppState>
) -> Result<Json<Vec<User>>, StatusCode> {
    let users = sqlx::query_as!(User, "SELECT * FROM users")
        .fetch_all(&state.db)
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

    Ok(Json(users))
}
```

#### 20.2 Pattern 2: FromRef Trait

```rust
use axum::extract::FromRef;

#[derive(Clone)]
struct AppState {
    db: PgPool,
    config: Config,
}

// Enable direct PgPool extraction
impl FromRef<AppState> for PgPool {
    fn from_ref(state: &AppState) -> PgPool {
        state.db.clone()
    }
}

// Now handlers can extract pool directly
async fn get_users(
    State(pool): State<PgPool>  // Direct pool extraction
) -> Result<Json<Vec<User>>, StatusCode> {
    let users = sqlx::query_as!(User, "SELECT * FROM users")
        .fetch_all(&pool)
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

    Ok(Json(users))
}
```

#### 20.3 Pattern 3: Queries Struct

```rust
struct Queries {
    pool: PgPool,
}

impl Queries {
    async fn get_users(&self) -> Result<Vec<User>, sqlx::Error> {
        sqlx::query_as!(User, "SELECT * FROM users")
            .fetch_all(&self.pool)
            .await
    }

    async fn get_user(&self, id: Uuid) -> Result<Option<User>, sqlx::Error> {
        sqlx::query_as!(User, "SELECT * FROM users WHERE id = $1", id)
            .fetch_optional(&self.pool)
            .await
    }

    async fn create_user(&self, name: &str, email: &str) -> Result<User, sqlx::Error> {
        sqlx::query_as!(
            User,
            "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
            name, email
        )
        .fetch_one(&self.pool)
        .await
    }

    async fn update_user(&self, id: Uuid, name: &str) -> Result<User, sqlx::Error> {
        sqlx::query_as!(
            User,
            "UPDATE users SET name = $1 WHERE id = $2 RETURNING *",
            name, id
        )
        .fetch_one(&self.pool)
        .await
    }

    async fn delete_user(&self, id: Uuid) -> Result<(), sqlx::Error> {
        sqlx::query!("DELETE FROM users WHERE id = $1", id)
            .execute(&self.pool)
            .await?;
        Ok(())
    }
}

impl FromRef<AppState> for Queries {
    fn from_ref(state: &AppState) -> Queries {
        Queries { pool: state.db.clone() }
    }
}

// Handler using Queries
async fn get_users(
    State(queries): State<Queries>
) -> Result<Json<Vec<User>>, StatusCode> {
    let users = queries.get_users()
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

    Ok(Json(users))
}
```

#### 20.4 Error Handling

```rust
use axum::response::{IntoResponse, Response};
use axum::http::StatusCode;

// Custom error type
enum ApiError {
    DatabaseError(sqlx::Error),
    NotFound,
    BadRequest(String),
}

impl IntoResponse for ApiError {
    fn into_response(self) -> Response {
        let (status, message) = match self {
            ApiError::DatabaseError(_) => {
                (StatusCode::INTERNAL_SERVER_ERROR, "Internal server error")
            }
            ApiError::NotFound => {
                (StatusCode::NOT_FOUND, "Resource not found")
            }
            ApiError::BadRequest(msg) => {
                (StatusCode::BAD_REQUEST, msg.as_str())
            }
        };

        (status, message).into_response()
    }
}

impl From<sqlx::Error> for ApiError {
    fn from(err: sqlx::Error) -> Self {
        ApiError::DatabaseError(err)
    }
}

// Handler with proper error handling
async fn get_user(
    State(queries): State<Queries>,
    Path(id): Path<Uuid>
) -> Result<Json<User>, ApiError> {
    let user = queries.get_user(id)
        .await?
        .ok_or(ApiError::NotFound)?;

    Ok(Json(user))
}
```

#### 20.5 Request/Response DTOs

```rust
use serde::{Deserialize, Serialize};

#[derive(Deserialize)]
struct CreateUserRequest {
    name: String,
    email: String,
}

#[derive(Serialize)]
struct UserResponse {
    id: Uuid,
    name: String,
    email: String,
    created_at: String,
}

impl From<User> for UserResponse {
    fn from(user: User) -> Self {
        UserResponse {
            id: user.id,
            name: user.name,
            email: user.email,
            created_at: user.created_at.to_rfc3339(),
        }
    }
}

async fn create_user(
    State(queries): State<Queries>,
    Json(payload): Json<CreateUserRequest>
) -> Result<Json<UserResponse>, ApiError> {
    let user = queries.create_user(&payload.name, &payload.email)
        .await?;

    Ok(Json(user.into()))
}
```

#### 20.6 Testing with sqlx

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[tokio::test]
    async fn test_create_user() {
        let pool = PgPoolOptions::new()
            .max_connections(1)
            .connect(&std::env::var("DATABASE_URL").unwrap())
            .await
            .unwrap();

        let queries = Queries { pool: pool.clone() };

        // Run test in transaction (auto-rollback)
        let mut tx = pool.begin().await.unwrap();

        let user = sqlx::query_as!(
            User,
            "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
            "Test User",
            "test@example.com"
        )
        .fetch_one(&mut *tx)
        .await
        .unwrap();

        assert_eq!(user.name, "Test User");

        // Auto-rollback when tx dropped
    }
}
```

## Part VIII: Applying to KOEL Project

### Chapter 21: KOEL Schema Analysis & Optimization

#### 21.1 Schema Review

The KOEL auth service schema demonstrates excellent first-principles design:

- 12 core tables for 10M users, 500K req/sec
- Encryption-first approach (AES256 + SHA256 hashes)
- MVCC-friendly design
- Cache-optimized denormalization

#### 21.2 Index Strategy Analysis

**Critical Performance Indexes:**

```sql
-- Authentication hot path (every request)
CREATE INDEX idx_users_aadhaar_hash ON users(aadhaar_hash);  -- B-Tree
CREATE INDEX idx_users_email_hash ON users(email_hash);       -- B-Tree
CREATE INDEX idx_sessions_refresh_token_hash ON sessions(refresh_token_hash);  -- B-Tree

-- Session management
CREATE INDEX idx_sessions_user_device_type ON sessions(user_id, device_type, created_at DESC);
CREATE INDEX idx_sessions_browser_fingerprint ON sessions(browser_fingerprint);

-- Authorization
CREATE INDEX idx_user_roles_user_product ON user_roles(user_id, product_domain);
```

**Recommended Additions:**

```sql
-- GIN for array/JSONB queries
CREATE INDEX idx_users_kyc_data ON users USING GIN (kyc_data);
CREATE INDEX idx_email_events_template_data ON email_events USING GIN (template_data);

-- BRIN for time-series
CREATE INDEX idx_audit_logs_created_brin ON audit_logs USING BRIN (created_at);
CREATE INDEX idx_email_events_created_brin ON email_events USING BRIN (created_at);

-- Partial indexes for hot queries
CREATE INDEX idx_sessions_active ON sessions(user_id, last_active)
WHERE is_active = true AND deleted_at IS NULL;

CREATE INDEX idx_email_events_queued ON email_events(created_at)
WHERE status = 'queued';
```

#### 21.3 Connection Pool Configuration for 500K req/sec

**Architecture:**

- 10 Axum instances (horizontal scaling)
- Each instance: 50K req/sec capacity
- DB: RDS db.r6i.2xlarge (max_connections = 5000)

**Per-instance pool config:**

```rust
let pool = PgPoolOptions::new()
    .max_connections(400)          // 10 instances × 400 = 4000 (80% of 5000)
    .min_connections(50)           // Keep warm
    .acquire_timeout(Duration::from_secs(5))  // Fast fail
    .idle_timeout(Duration::from_secs(300))   // 5 min
    .max_lifetime(Duration::from_secs(1800))  // 30 min
    .test_before_acquire(true)     // Validate
    .connect(&database_url)
    .await?;
```

**Rationale:**

- 400 connections/instance handles burst traffic
- Leave 1000 connections for admin, maintenance
- Fast acquire timeout for UX
- Connection validation prevents stale connection errors

#### 21.4 Query Optimization for Hot Paths

**Login Query (most frequent):**

```rust
// Original
let user = sqlx::query_as!(
    User,
    "SELECT * FROM users WHERE email_hash = $1",
    email_hash
)
.fetch_optional(&pool)
.await?;

// Optimized: Select only needed columns
let user = sqlx::query_as!(
    UserAuth,
    "SELECT id, password_hash, is_active, kyc_status FROM users
     WHERE email_hash = $1 AND deleted_at IS NULL",
    email_hash
)
.fetch_optional(&pool)
.await?;
```

**Session Validation (every request):**

```rust
// Use composite index
let session = sqlx::query_as!(
    Session,
    "SELECT id, user_id, access_token_exp, device_type
     FROM sessions
     WHERE refresh_token_hash = $1 AND is_active = true AND deleted_at IS NULL",
    token_hash
)
.fetch_optional(&pool)
.await?;
```

#### 21.5 Caching Strategy

**Redis Cache Layer:**

```rust
// Pseudo-code pattern
async fn get_user_roles(user_id: Uuid, product: &str) -> Result<Vec<String>> {
    let cache_key = format!("roles:{}:{}", user_id, product);

    // Try cache first
    if let Some(roles) = redis.get(&cache_key).await? {
        return Ok(roles);
    }

    // Cache miss: query DB
    let roles = sqlx::query_scalar!(
        "SELECT role FROM user_roles
         WHERE user_id = $1 AND product_domain = $2 AND is_active = true",
        user_id, product
    )
    .fetch_all(&pool)
    .await?;

    // Cache for 5 minutes
    redis.setex(&cache_key, 300, &roles).await?;

    Ok(roles)
}
```

**Cache Targets:**

- User sessions (Redis): 15 min TTL
- User roles: 5 min TTL
- Company metadata: 1 hour TTL
- Partner configs: 30 min TTL

#### 21.6 Axum Handler Structure for KOEL

```rust
// src/main.rs
#[tokio::main]
async fn main() {
    let pool = create_pool().await;
    let redis = create_redis_client().await;

    let state = AppState {
        db: pool,
        redis,
        config: load_config(),
    };

    let app = Router::new()
        .route("/auth/login", post(auth::login))
        .route("/auth/refresh", post(auth::refresh_token))
        .route("/auth/logout", post(auth::logout))
        .route("/users", get(users::list).post(users::create))
        .route("/users/:id", get(users::get).put(users::update).delete(users::delete))
        .route("/sessions", get(sessions::list_user_sessions))
        .route("/sessions/:id", delete(sessions::revoke))
        .layer(ServiceBuilder::new()
            .layer(TraceLayer::new_for_http())
            .layer(CompressionLayer::new()))
        .with_state(state);

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

// src/handlers/auth.rs
pub async fn login(
    State(state): State<AppState>,
    Json(payload): Json<LoginRequest>,
) -> Result<Json<LoginResponse>, ApiError> {
    // 1. Hash email
    let email_hash = hash_email(&payload.email);

    // 2. Query user (uses idx_users_email_hash)
    let user = sqlx::query_as!(
        UserAuth,
        "SELECT id, password_hash, is_active FROM users
         WHERE email_hash = $1 AND deleted_at IS NULL",
        email_hash
    )
    .fetch_optional(&state.db)
    .await?
    .ok_or(ApiError::InvalidCredentials)?;

    // 3. Verify password
    verify_password(&payload.password, &user.password_hash)?;

    // 4. Create session
    let session = create_session(&state.db, user.id, &payload.device_info).await?;

    // 5. Generate tokens
    let tokens = generate_tokens(&session);

    // 6. Cache session in Redis
    cache_session(&state.redis, &session).await?;

    Ok(Json(LoginResponse {
        access_token: tokens.access,
        refresh_token: tokens.refresh,
        expires_in: 900,
    }))
}

// src/db/queries/users.rs
impl Queries {
    pub async fn get_user_by_email_hash(&self, email_hash: &[u8]) -> Result<Option<User>, sqlx::Error> {
        sqlx::query_as!(
            User,
            "SELECT * FROM users WHERE email_hash = $1 AND deleted_at IS NULL",
            email_hash
        )
        .fetch_optional(&self.pool)
        .await
    }

    pub async fn create_user(&self, data: CreateUserData) -> Result<User, sqlx::Error> {
        sqlx::query_as!(
            User,
            "INSERT INTO users (aadhaar_hash, email_hash, email_encrypted, name_encrypted, username, kyc_status, first_company_id)
             VALUES ($1, $2, $3, $4, $5, $6, $7)
             RETURNING *",
            data.aadhaar_hash,
            data.email_hash,
            data.email_encrypted,
            data.name_encrypted,
            data.username,
            data.kyc_status as _,
            data.first_company_id
        )
        .fetch_one(&self.pool)
        .await
    }

    pub async fn update_user_kyc(&self, user_id: Uuid, kyc_status: KycStatus, kyc_data: serde_json::Value) -> Result<(), sqlx::Error> {
        sqlx::query!(
            "UPDATE users SET kyc_status = $1, kyc_data = $2, aadhaar_last_verified = NOW()
             WHERE id = $3",
            kyc_status as _,
            kyc_data,
            user_id
        )
        .execute(&self.pool)
        .await?;
        Ok(())
    }
}
```

#### 21.7 Performance Testing Plan

**Load Testing Setup:**

```bash
# Using k6
k6 run --vus 10000 --duration 60s load_test.js
```

**Targets (per KOEL spec):**

- Throughput: 500K req/sec
- Latency P99: <100ms
- Cache hit rate: >95%
- Error rate: <0.1%
- Connection pool utilization: <80%

**Monitoring:**

- Prometheus + Grafana for metrics
- pg_stat_statements for slow queries
- Connection pool stats (active, idle, waiting)
- Redis hit/miss ratio
- Per-endpoint latency histograms

#### 21.8 Migration to Production

**Phase 1: Setup**

```bash
# 1. Install sqlx-cli
cargo install sqlx-cli --features postgres

# 2. Create migrations from KOEL schema
sqlx migrate add -r create_enums
sqlx migrate add -r create_core_tables
sqlx migrate add -r create_auth_tables
# ... etc
```

**Phase 2: Schema Migration**

- Run migrations in staging first
- Test with production-like data volume
- Verify all indexes created
- Check statistics updated

**Phase 3: Application Deployment**

- Blue-green deployment
- Gradual traffic shift
- Monitor error rates, latencies
- Rollback plan ready

**Phase 4: Optimization Iteration**

- Analyze slow query log
- Add missing indexes
- Optimize hot paths
- Tune connection pool

## Part IX: Advanced Topics & Best Practices

### Chapter 22: Advanced SQL Patterns in Rust

#### 22.1 Dynamic Query Building

```rust
// For complex filters, avoid concatenation
struct UserFilter {
    name: Option<String>,
    min_age: Option<i32>,
    active: Option<bool>,
}

async fn search_users(pool: &PgPool, filter: UserFilter) -> Result<Vec<User>, sqlx::Error> {
    let mut query = sqlx::QueryBuilder::new("SELECT * FROM users WHERE 1=1");

    if let Some(name) = filter.name {
        query.push(" AND name LIKE ").push_bind(format!("%{}%", name));
    }
    if let Some(min_age) = filter.min_age {
        query.push(" AND age >= ").push_bind(min_age);
    }
    if let Some(active) = filter.active {
        query.push(" AND active = ").push_bind(active);
    }

    query.push(" ORDER BY created_at DESC");
    query.build_query_as::<User>().fetch_all(pool).await
}
```

#### 22.2 Batch Operations

```rust
// Efficient bulk insert
async fn bulk_insert_users(pool: &PgPool, users: Vec<CreateUser>) -> Result<(), sqlx::Error> {
    let mut query = sqlx::QueryBuilder::new("INSERT INTO users (name, email) ");

    query.push_values(users, |mut b, user| {
        b.push_bind(user.name).push_bind(user.email);
    });

    query.build().execute(pool).await?;
    Ok(())
}
```

#### 22.3 Cursor-Based Pagination

```rust
// Better than OFFSET for large datasets
async fn paginate_users(pool: &PgPool, cursor: Option<Uuid>, limit: i64) -> Result<Vec<User>, sqlx::Error> {
    match cursor {
        Some(id) => {
            sqlx::query_as!(
                User,
                "SELECT * FROM users WHERE id > $1 ORDER BY id LIMIT $2",
                id, limit
            )
            .fetch_all(pool)
            .await
        }
        None => {
            sqlx::query_as!(
                User,
                "SELECT * FROM users ORDER BY id LIMIT $1",
                limit
            )
            .fetch_all(pool)
            .await
        }
    }
}
```

#### 22.4 Pessimistic Locking

```rust
// Prevent concurrent updates
async fn deduct_inventory(pool: &PgPool, product_id: Uuid, quantity: i32) -> Result<(), sqlx::Error> {
    let mut tx = pool.begin().await?;

    // Lock row for update
    let inventory = sqlx::query!(
        "SELECT quantity FROM inventory WHERE product_id = $1 FOR UPDATE",
        product_id
    )
    .fetch_one(&mut *tx)
    .await?;

    if inventory.quantity < quantity {
        return Err(sqlx::Error::RowNotFound);
    }

    sqlx::query!(
        "UPDATE inventory SET quantity = quantity - $1 WHERE product_id = $2",
        quantity, product_id
    )
    .execute(&mut *tx)
    .await?;

    tx.commit().await?;
    Ok(())
}
```

### Chapter 23: Production Best Practices

#### 23.1 Observability

```rust
use tracing::{info, warn, error, instrument};

#[instrument(skip(pool))]
async fn get_user(pool: &PgPool, id: Uuid) -> Result<User, sqlx::Error> {
    info!("Fetching user {}", id);

    let start = std::time::Instant::now();
    let result = sqlx::query_as!(User, "SELECT * FROM users WHERE id = $1", id)
        .fetch_optional(pool)
        .await;

    info!("Query took {:?}", start.elapsed());

    match result {
        Ok(Some(user)) => Ok(user),
        Ok(None) => {
            warn!("User {} not found", id);
            Err(sqlx::Error::RowNotFound)
        }
        Err(e) => {
            error!("Database error: {}", e);
            Err(e)
        }
    }
}
```

#### 23.2 Health Checks

```rust
async fn health_check(State(pool): State<PgPool>) -> Result<StatusCode, StatusCode> {
    sqlx::query("SELECT 1")
        .execute(&pool)
        .await
        .map(|_| StatusCode::OK)
        .map_err(|_| StatusCode::SERVICE_UNAVAILABLE)
}
```

#### 23.3 Graceful Shutdown

```rust
#[tokio::main]
async fn main() {
    let pool = create_pool().await;
    let app = create_app(pool.clone());

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();

    axum::serve(listener, app)
        .with_graceful_shutdown(shutdown_signal())
        .await
        .unwrap();

    // Close pool on shutdown
    pool.close().await;
}

async fn shutdown_signal() {
    tokio::signal::ctrl_c()
        .await
        .expect("Failed to install CTRL+C signal handler");
}
```

#### 23.4 Security Checklist

- Use parameterized queries (sqlx does this)
- Encrypt sensitive data at rest
- Use TLS for DB connections
- Principle of least privilege (DB user permissions)
- Regular security audits
- Dependency scanning (cargo-audit)
- Rate limiting
- Input validation
- SQL injection prevention (sqlx macros)

#### 23.5 Performance Monitoring

```rust
// Track query performance
use tracing_subscriber;

tracing_subscriber::fmt()
    .with_max_level(tracing::Level::INFO)
    .with_target(false)
    .with_timer(tracing_subscriber::fmt::time::UtcTime::rfc_3339())
    .json()
    .init();
```

#### 23.6 Deployment Checklist

- Connection pool configured correctly
- Migrations tested in staging
- Indexes created and verified
- VACUUM ANALYZE run
- Monitoring dashboards set up
- Alerting configured
- Backup strategy in place
- Disaster recovery tested
- Load testing completed
- Documentation updated
