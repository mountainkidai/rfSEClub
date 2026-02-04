# **🎓 INDEXEDDB \& CLIENT-SIDE CACHING - First Principles**

Let us learn absolute fundamentals to expert level.

---

## **📚 PART 1: THE FUNDAMENTALS (First Principles)**

### **What is a Database?**

incase you haven't database yet, go through our database topics.

```
Database = Organized collection of data

Real life example:
├─ Filing cabinet = Database
├─ Drawer = Table
├─ Folder = Record/Row
└─ Paper = Field/Column

Digital:
├─ Hard drive = Database
├─ File = Table
├─ JSON object = Record
└─ Property = Field
```

**Types of databases:**

```
1. Server-side (PostgreSQL, MySQL, MongoDB)
   └─ Lives on server
   └─ Multiple users access same data
   └─ Requires network

2. Client-side (localStorage, IndexedDB, SQLite)
   └─ Lives in browser/app
   └─ Each user has own copy
   └─ Works offline
```

---

### **Storage Evolution in Browsers:**

```
1995 - Cookies (4KB)
├─ Tiny storage
├─ Sent with every request
└─ Slow

2005 - localStorage (5-10MB)
├─ Key-value store
├─ Synchronous (blocks UI)
├─ Only stores strings
└─ localStorage.setItem('key', 'value')

2011 - IndexedDB (50MB - 1GB+)
├─ Full database
├─ Asynchronous (doesn't block UI)
├─ Stores any data type
├─ Indexes for fast queries
└─ Transactions for safety
```

**Why IndexedDB won:**

```
localStorage:
const data = JSON.parse(localStorage.getItem('Register'));
const filtered = data.filter(entry => entry.amount > 1000);
// Must load ALL data into memory
// Then filter in JavaScript
// Slow with large datasets

IndexedDB:
const filtered = await db.Register.where('amount').above(1000).toArray();
// Database does filtering
// Only loads matching records
// Fast even with 100,000 records
```

---

## **📚 PART 2: INDEXEDDB CORE CONCEPTS**

### **1. What is an Index?**

**Without index:**

```
Find all entries where amount_paid > 1000

Database must scan EVERY record:
Record 1: amount = 500  ❌ (check)
Record 2: amount = 1500 ✅ (check)
Record 3: amount = 800  ❌ (check)
Record 4: amount = 2000 ✅ (check)
...
Record 500: amount = 1200 ✅ (check)

Total: 500 checks (O(n) = linear time)
```

**With index:**

```
Index is like a sorted lookup table:

amount_paid index:
500  → Record 1
800  → Record 3
1200 → Record 500
1500 → Record 2
2000 → Record 4
...

To find amount > 1000:
1. Binary search: O(log n) = 9 checks
2. Jump to 1200 in index
3. Read records from 1200 onwards
4. Done

Total: 9 checks instead of 500 (55x faster)
```

**Real-world analogy:**

```
Book without index:
"Find all mentions of 'React'"
└─ Read entire book, page by page (slow)

Book with index:
"Find all mentions of 'React'"
└─ Look at back of book: "React: pages 45, 102, 234"
└─ Jump directly to those pages (fast)
```

---

### **2. What is a Transaction?**

**The problem:**

```
You're transferring money:

Step 1: Subtract $100 from Account A
Step 2: Power outage 💥
Step 3: Add $100 to Account B (never happens)

Result: $100 disappeared! ❌
```

**Solution: Transaction (Atomic operation)**

```
BEGIN TRANSACTION
  Step 1: Subtract $100 from Account A (temporary)
  Step 2: Add $100 to Account B (temporary)
COMMIT TRANSACTION

If BOTH succeed → Changes are permanent ✅
If EITHER fails → BOTH are cancelled (rollback) ✅

Transaction = All-or-nothing guarantee
```

**In your Register:**

```javascript
await db.transaction("rw", db.Register, async () => {
  await db.Register.clear(); // Step 1 (temporary)
  await db.Register.bulkAdd(entries); // Step 2 (temporary)
});
// COMMIT happens here (both succeed or both fail)
```

**Why this matters:**

```
Without transaction:
1. Clear cache (cache is empty)
2. Network fails during bulkAdd
3. Cache is empty, user sees blank page ❌

With transaction:
1. Clear cache (temporary state)
2. Network fails during bulkAdd
3. Transaction rolls back
4. Cache restored to previous state ✅
5. User still sees old data (better than nothing)
```

**ACID Properties (Why databases are reliable):**

```
A = Atomic (all-or-nothing)
C = Consistent (data always valid)
I = Isolated (operations don't interfere)
D = Durable (saved permanently)

Example:
Atomic: Transfer $100 → both accounts updated or neither
Consistent: Total money stays same (conservation)
Isolated: Two transfers don't corrupt each other
Durable: Power outage doesn't lose committed data
```

---

### 2 C = Consistent

- Data always follows your business rules.

```text
Before: Balance = ₹5000 ✓ (valid)
Transaction: Book hotel ₹4500
After: Balance = ₹500 ✓ (still valid)
```

### Wrong: Balance = -₹500 ❌ (violates "no negative balance" rule → transaction REJECTED)

### 3 I = Isolated

- Transactions don't interfere with each other.

```text
User A books Shimla Grand hotel (Room 101)
User B books same room SIMULTANEOUSLY
```

- Without Isolation: Both get Room 101 → double booking disaster!
- With Isolation: User B sees "Room unavailable" → only one booking succeeds.

### 4 D = Durable

- Once saved = saved FOREVER, even if server crashes.

```text
Your booking saved → COMMIT
Server crashes 2 seconds later →
On restart: Booking STILL THERE ✓
```

### **3. Synchronous vs Asynchronous**

**Synchronous (Blocking):**

```javascript
// localStorage is synchronous
const data = localStorage.getItem('bigData'); // Takes 100ms
console.log('Done'); // Waits 100ms before running

Timeline:
0ms   → Start getItem()
      → UI freezes (can't click anything)
100ms → getItem() finishes
100ms → console.log runs
100ms → UI unfreezes
```

**Asynchronous (Non-blocking):**

```javascript
// IndexedDB is asynchronous
const data = await db.Register.toArray(); // Takes 100ms
console.log('Done'); // But UI doesn't freeze

Timeline:
0ms   → Start toArray()
0ms   → Browser continues
       ( UI stays responsive ✅ (scroll, click works)
        User interacts normally...)
100ms → toArray() finishes
100ms → console.log runs

User can scroll/click during those 100ms ✅
```

**Why this matters:**

```
Synchronous:
├─ Simple code
├─ But freezes UI
└─ Bad UX with large data

Asynchronous:
├─ Complex code (promises/async/await)
├─ But UI stays smooth
└─ Good UX always
```

---

## **📚 PART 3: A SAMPLE CODE EXPLAINED LINE-BY-LINE**

### **File 1: `blockchain-Register-db.ts` (Database Schema)**

```typescript
import Dexie, { Table } from "dexie";
```

**What is Dexie?**

```
Dexie = Wrapper around IndexedDB API

Without Dexie (raw IndexedDB):
const request = indexedDB.open("myDB", 1);
request.onsuccess = (event) => {
  const db = event.target.result;
  const transaction = db.transaction(["store"], "readwrite");
  const store = transaction.objectStore("store");
  const addRequest = store.add(data);
  addRequest.onsuccess = () => {
    console.log("Added");
  };
};

With Dexie:
await db.Register.add(data);

Same thing, 100x simpler ✅
```

---

```typescript
export interface RegisterEntry {
  id?: number; // Auto-increment primary key
  server_id?: string; // database UUID (unique)
  amount_paid: number;
  // ... other fields
}
```

**What is an Interface?**

```
Interface = TypeScript contract
Defines what shape data must have

Think of it as a form:
┌─────────────────────────┐
│ Register Entry Form       │
├─────────────────────────┤
│ ID: [auto]              │
│ From: [required]        │
│ To: [required]          │
│ amount_paid: [required] │
└─────────────────────────┘

TypeScript checks:
✅ All required fields present
✅ Types are correct (number is number)
❌ Typos (from_arae_id won't compile)
```

---

## 6.example

```text
Table<ROW TYPE,     KEY TYPE>
Table<RegisterEntry,  number>
 ↑                  ↑
What row contains  How to find row (ID type)
```

```ts
interface RegisterEntry {
  id: number; // ← THIS matches the "number" type
  hotel: string;
  amount: number;
}

class airbnbDB {
  Register!: Table<RegisterEntry, number>; // number = id: number
}
```

| Table Declaration               | Your Schema        | What id Field Looks Like          |
| ------------------------------- | ------------------ | --------------------------------- |
| Table<RegisterEntry, number>    | "++id, hotel"      | id: number = 1, 2, 3...           |
| Table<User, string>             | "email"            | email: string = "john@airbnb.com" |
| Table<Booking, [number,string]> | "[userId+hotelId]" | [userId: number, hotelId: string] |

```ts
interface User {
  email: string; // ← ID = email (NOT number!)
  name: string;
}

class airbnbDB {
  users!: Table<User, string>; // string = email ID!

  constructor() {
    this.version(1).stores({
      users: "email, name", // email = primary key (no ++id)
    });
  }
}
```

```ts
Email ID          | Name
"john@airbnb.com" | "John Doe"
"jane@mountain.com"| "Jane Smith"
"admin@hotels.com" | "Admin User"
```

```ts
// Add user (email = ID)
await db.users.add({
  email: "john@airbnb.com",
  name: "John",
});

// Find by EMAIL (string ID)
const john = await db.users.get("john@airbnb.com");
console.log(john); // { email: "john@airbnb.com", name: "John" }
```

```typescript
class airbnbDB {
  Register!: Table<RegisterEntry, number>;  // 1+2+3
  ↑       ↑_____________↑      ↑
  1=Prop  2=Generic     3=Promise later

  constructor() {
    this.version(1).stores({ Register: "++id, hotel" });  // 4=INITIALIZER
  }
}
```

## Quick Cheat Sheet

```
: Type        → "This is a string/number/etc"
interface {}  → "Object must have these fields"
<T>           → "Reusable for any Type T"
= value       → "Default value"
!             → "Trust me, I'll set it later"
```

```typescript
export class RegisterDatabase extends Dexie {
  Register!: Table<RegisterEntry, number>;
```

**What is `!` (Non-null assertion)?**

```
Register!: Table<RegisterEntry, number>;
       ↑
This means: "Trust me, this will be set"

Without !:
Register: Table<RegisterEntry, number>;
// TypeScript error: "Property 'Register' has no initializer"

With !:
Register!: Table<RegisterEntry, number>;
// TypeScript: "OK, I trust you initialized it"

We initialize it in constructor:
this.version(1).stores({ Register: "++id, ..." });
                         ↑
                    This creates the Register table
```

**What is `Table<RegisterEntry, number>`?**

```
Table<RegisterEntry, number>
      ↑           ↑
      │           └─ Primary key type (number)
      └─ Record type (RegisterEntry)

Means:
- Each record is a RegisterEntry object
- Primary key is a number (id field)
```

```ts
Before: No tables
this.version(1).stores({ Register: "++id, hotel" })
After:
┌─────────────┐
│ Register table│  ← CREATED!
├─────────────┤
│ id │ hotel  │
│ 1  │ Shimla │
│ 2  │ Kufri  │
└─────────────┘
```

---

```ts
stores({ Register: "++id" }); // Only id indexed

// ✅ Fast - id is ALWAYS indexed
await db.Register.get(1);

// ❌ SLOW - hotel NOT indexed (scans ALL rows)
await db.Register.where("hotel").equals("Shimla"); // Works but SLOW!
```

```ts
stores({ Register: "++id, hotel" }); // id + hotel indexed

// ✅ Both FAST!
await db.Register.get(1);
await db.Register.where("hotel").equals("Shimla");
```

```typescript
constructor() {
  super("airbnbRegisterDB");
```

**What is `super()`?**

```ts
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }
}
```

In your code:

```ts
class RegisterDatabase extends Dexie {
  constructor() {
    super("airbnbRegisterDB"); // Call Dexie constructor
    // This creates the database named "airbnbRegisterDB"
  }
}
```

---

```typescript
this.version(1).stores({
  Register:
    "++id, " + // Primary key (auto-increment)
    "&server_id, " + // Unique index
    "from_area_id, " + // Regular index
    "to_area_id, " + // Regular index
    "paid_at, " + // Regular index (for sorting)
    "transport_mode, " + // Regular index
    "amount_paid, " + // Regular index
    "user_hash", // Regular index
});
```

**Schema syntax explained:**

```
"++id"
  ↑↑
  └─ Auto-increment (1, 2, 3, 4, ...)

"&server_id"
 ↑
 └─ Unique (no duplicates allowed)

"from_area_id"
 (no prefix)
 └─ Regular index (for fast lookups)

Full translation:
"++id, &server_id, from_area_id"

Means:
1. id is primary key, auto-increments
2. server_id is unique index (prevents duplicate Supabase records)
3. from_area_id is regular index (for filtering/sorting)
```

**Why these specific indexes?**

```
++id:
├─ Every record needs unique identifier
└─ Auto-increment = don't manually assign

&server_id:
├─ Supabase UUID is unique
├─ Prevents duplicate syncs
└─ Real-time + polling might try to add same record twice

from_area_id, to_area_id:
├─ Users filter by location often
├─ "Show me all trips from Shimla"
└─ Index makes this query fast

paid_at:
├─ Users sort by date (newest first)
├─ .orderBy("paid_at").reverse()
└─ Index makes sorting instant

transport_mode, amount_paid:
├─ Users filter by transport type
├─ Users filter by budget range
└─ Indexes make these queries fast

user_hash:
├─ "My Entries" filter
├─ Show only entries I submitted
└─ Index makes this instant
```

---

```typescript
export const db = new RegisterDatabase();
```

**What is `export const`?**

```
const db = new RegisterDatabase();
└─ Create one instance

export const db = ...
└─ Make it available to other files

In other files:
import { db } from './Register-db';
await db.Register.add(entry);  // Use the same instance
```

**Why single instance?**

```
Wrong (multiple instances):
// File A
const db = new RegisterDatabase();
db.Register.add(entry1);

// File B
const db = new RegisterDatabase();  // Different instance!
const entries = await db.Register.toArray();
// Might not see entry1! (different connection)

Right (single instance):
// Register-db.ts
export const db = new RegisterDatabase();

// File A
import { db } from './Register-db';
db.Register.add(entry1);

// File B
import { db } from './Register-db';
const entries = await db.Register.toArray();
// Sees entry1! (same connection) ✅
```

---

### **File 2: `Register-sync.ts` (Sync Engine)**

```typescript
const SYNC_KEY = "Register:last-sync";
const SYNC_INTERVAL = 30_000; // 30 seconds
```

**What are constants?**

```
const SYNC_KEY = "Register:last-sync";
└─ Value never changes (constant)

Why not just use the string directly?

Bad:
localStorage.setItem("Register:last-sync", timestamp);
localStorage.getItem("Register:last-synk");  // Typo! Bug!

Good:
localStorage.setItem(SYNC_KEY, timestamp);
localStorage.getItem(SYNC_KEY);  // No typo possible ✅
```

**Why `30_000` instead of `30000`?**

```
30_000 = 30,000 (more readable)
└─ JavaScript allows _ as separator

1_000_000 = 1,000,000 (1 million)
vs
1000000 (hard to count zeros)
```

---

```typescript
async function fetchWithRetry(
  url: string,
  maxRetries = 3,
  initialDelay = 1000,
): Promise<Response> {
```

**What is `async`?**

```
async function = Returns a Promise

Normal function:
function getData() {
  return data;  // Returns immediately
}
const result = getData();  // Have result now

Async function:
async function getData() {
  return data;  // Returns Promise
}
const promise = getData();  // Have promise
const result = await promise;  // Wait for result
```

**What is `Promise<Response>`?**

```
Promise<Response>
        ↑
        └─ Will eventually give you a Response object

Think of it as:
Promise = IOU (I Owe You)
"I don't have the data now, but I will soon"

await promise
└─ "I'll wait until you have it"
```

---

```typescript
for (let i = 0; i < maxRetries; i++) {
  try {
    const response = await fetch(url);

    if (response.status >= 500) {
      throw new Error(`Server error: ${response.status}`);
    }

    return response; // Success!
  } catch (err: any) {
    lastError = err;

    if (i === maxRetries - 1) break;

    const delay = initialDelay * Math.pow(2, i);
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
}
```

**What is exponential backoff?**

```
Attempt 1: Wait 1s  (initialDelay * 2^0)
Attempt 2: Wait 2s  (initialDelay * 2^1)
Attempt 3: Wait 4s  (initialDelay * 2^2)

Why exponential?

Linear (1s, 2s, 3s):
└─ If server is overloaded, you keep hammering it
└─ Makes problem worse

Exponential (1s, 2s, 4s):
└─ Give server more time to recover
└─ Reduces load exponentially
```

**Flow diagram:**

```
Try fetch
    ├─ Success? → Return ✅
    └─ Fail? ↓
Wait 1s
Try fetch
    ├─ Success? → Return ✅
    └─ Fail? ↓
Wait 2s
Try fetch
    ├─ Success? → Return ✅
    └─ Fail? ↓
Wait 4s
Try fetch
    ├─ Success? → Return ✅
    └─ Fail? → Throw error ❌
```

---

```typescript
export class RegisterSync {
  private static intervalId: NodeJS.Timeout | null = null;
```

**What is `private static`?**

```
private:
└─ Only accessible inside this class

static:
└─ Belongs to class, not instance

Example:
class Counter {
  static count = 0;  // Shared by all

  increment() {
    Counter.count++;
  }
}

const c1 = new Counter();
const c2 = new Counter();
c1.increment();  // Counter.count = 1
c2.increment();  // Counter.count = 2 (shared!)
```

**In your code:**

```typescript
private static intervalId: NodeJS.Timeout | null = null;

Means:
- intervalId is shared across all uses of RegisterSync
- Can't access it from outside (private)
- Stores the timer ID

Usage:
RegisterSync.startPeriodicSync();  // Creates timer, stores ID
RegisterSync.startPeriodicSync();  // Clears old timer first
└─ Prevents multiple timers running
```

---

```typescript
static startPeriodicSync(): () => void {
  if (this.intervalId) {
    clearInterval(this.intervalId);
  }
```

**What is `(): () => void`?**

```
startPeriodicSync(): () => void
                      ↑
                      └─ Returns a function

Translation:
"This function returns a function that returns nothing"

Why?

For React cleanup:
useEffect(() => {
  const cleanup = RegisterSync.startPeriodicSync();
  return cleanup;  // React calls this on unmount
}, []);
```

**Why clear existing interval?**

```
Without clearing:
User navigates away → Component unmounts
User navigates back → Component remounts
startPeriodicSync() called again
└─ Now TWO timers running! (bug)
└─ Double the syncs (waste)

With clearing:
if (this.intervalId) {
  clearInterval(this.intervalId);  // Stop old timer
}
this.intervalId = setInterval(...); // Start new timer
└─ Only ONE timer ever running ✅
```

---

```typescript
this.fullSync().catch((err) => {
  console.error("❌ Initial sync failed:", err);
});
```

**What is `.catch()`?**

```
Promises can succeed or fail:

Success:
promise.then(result => {
  console.log("Got:", result);
});

Failure:
promise.catch(error => {
  console.error("Failed:", error);
});

Combined:
promise
  .then(result => { ... })
  .catch(error => { ... });

Or with async/await:
try {
  const result = await promise;
} catch (error) {
  console.error(error);
}
```

**Why catch here?**

```
this.fullSync().catch((err) => { ... });
                ↑
                └─ Don't let error crash the app

If sync fails:
├─ Log error ✅
├─ App keeps running ✅
└─ Next sync (30s later) might succeed ✅

Without catch:
├─ Error bubbles up
├─ Crashes React component
└─ User sees white screen ❌
```

---

```typescript
this.intervalId = setInterval(() => {
  this.fullSync().catch((err) => {
    console.error("❌ Periodic sync failed:", err);
  });
}, SYNC_INTERVAL);
```

**What is `setInterval`?**

```
setInterval(function, delay)
            ↑         ↑
            │         └─ Time between calls (ms)
            └─ Function to call repeatedly

Example:
let count = 0;
setInterval(() => {
  count++;
  console.log(count);
}, 1000);

Output:
1 (after 1s)
2 (after 2s)
3 (after 3s)
... forever (until clearInterval)
```

**In your code:**

```
setInterval(() => {
  this.fullSync();  // Sync with server
}, 30_000);        // Every 30 seconds

Timeline:
0s    → Start
30s   → Sync
60s   → Sync
90s   → Sync
120s  → Sync
... forever
```

---

```typescript
return () => {
  if (this.intervalId) {
    clearInterval(this.intervalId);
    this.intervalId = null;
    console.log("🛑 Stopped background sync");
  }
};
```

**What is this returning?**

```
A cleanup function

React usage:
useEffect(() => {
  const cleanup = RegisterSync.startPeriodicSync();

  // When component unmounts:
  return cleanup;  // React calls this
}, []);

What happens:
1. Component mounts → startPeriodicSync()
2. Timer starts (syncing every 30s)
3. User navigates away → Component unmounts
4. React calls cleanup function
5. Timer stops (no more syncs)
6. Saves battery/bandwidth ✅
```

---

```typescript
static async fullSync(limit = 500): Promise<void> {
  try {
    const resp = await fetchWithRetry(
      `/api/travel-Registers?limit=${limit}`
    );

    const entries: any[] = await resp.json();
```

**What is `await`?**

```
Without await:
const resp = fetch('/api/data');
console.log(resp);  // Promise { <pending> }

With await:
const resp = await fetch('/api/data');
console.log(resp);  // Response { status: 200, ... }

await = "Wait for Promise to finish"
```

**What is `.json()`?**

```
HTTP response comes as text:
'[{"id":1,"amount":500},{"id":2,"amount":1000}]'
↓
resp.json() converts to JavaScript:
[
  { id: 1, amount: 500 },
  { id: 2, amount: 1000 }
]
```

---

```typescript
await db.transaction("rw", db.Register, async () => {
  await db.Register.clear();
  if (entries.length > 0) {
    await db.Register.bulkAdd(
      entries.map((entry) => ({
        ...entry,
        server_id: entry.id,
      })),
    );
  }
});
```

**What is `"rw"`?**

```
"rw" = Read-Write permission

Options:
"r"  = Read-only (can't modify)
"rw" = Read-Write (can modify)

db.transaction("rw", db.Register, async () => {
                ↑
                └─ Need write permission for clear() and bulkAdd()
```

**What is `.map()`?**

```
Array transformation:

Input:
[
  { id: "uuid-1", amount: 500 },
  { id: "uuid-2", amount: 1000 }
]

.map((entry) => ({
  ...entry,
  server_id: entry.id,
}))

Output:
[
  { id: "uuid-1", amount: 500, server_id: "uuid-1" },
  { id: "uuid-2", amount: 1000, server_id: "uuid-2" }
]

Why?
database uses 'id' field
IndexedDB uses 'server_id' (to avoid conflict with auto-increment id)
We copy 'id' to 'server_id' before storing
```

**What is `...entry`?**

```
Spread operator = Copy all properties

entry = { id: 1, amount: 500 }

Without spread:
{ server_id: entry.id }
// Result: { server_id: 1 }  ❌ Lost 'amount'

With spread:
{ ...entry, server_id: entry.id }
// Result: { id: 1, amount: 500, server_id: 1 } ✅
```

---

```typescript
localStorage.setItem(SYNC_KEY, Date.now().toString());
```

**What is `Date.now()`?**

```
Date.now() = Current timestamp in milliseconds

Example:
Date.now() = 1738665000000
             ↑
             └─ Milliseconds since Jan 1, 1970 (Unix epoch)

Used for:
- Check how long ago last sync was
- Calculate: Date.now() - lastSync > 30_000 (30s passed?)
```

---

## **📚 PART 4: REACT INTEGRATION**

```typescript
const dbEntries = useLiveQuery(
  () => db.Register.orderBy("paid_at").reverse().limit(20).toArray(),
  [limit],
);
```

**What is `useLiveQuery`?**

```
Magic React hook that:
1. Runs query
2. Returns results
3. Watches for changes
4. Auto re-runs query when data changes
5. Auto updates UI

Example:
const entries = useLiveQuery(() => db.Register.toArray());

Timeline:
0ms   → useLiveQuery executes → Returns []
100ms → IndexedDB loads → Returns [entry1, entry2]
        → React re-renders ✅

Later:
User adds entry3 → IndexedDB changes
→ useLiveQuery detects change
→ Re-executes query → Returns [entry1, entry2, entry3]
→ React re-renders ✅

You don't call anything manually!
Completely reactive!
```

**Query breakdown:**

```typescript
db.Register                    // Select from Register table
  .orderBy("paid_at")       // Sort by date
  .reverse()                 // Newest first
  .limit(20)                // Take first 20
  .toArray()                // Return as array

SQL equivalent:
SELECT * FROM Register
ORDER BY paid_at DESC
LIMIT 20
```

**What is `[limit]` dependency?**

```typescript
useLiveQuery(
  () => db.Register.limit(limit).toArray(),
  [limit]  // Re-run when limit changes
);

Timeline:
limit = 20 → Query returns 20 entries
User clicks "Load More"
limit = 40 → Query re-runs → Returns 40 entries
limit = 60 → Query re-runs → Returns 60 entries
```

---

## **📚 PART 5: PERFORMANCE SECRETS**

### **Why IndexedDB is Fast:**

```
1. Indexes (B-Tree data structure)
   ├─ O(log n) lookups instead of O(n)
   └─ 500 items: 9 checks vs 500 checks

2. Async (doesn't block UI)
   ├─ User can scroll while querying
   └─ Smooth 60fps always

3. Native code (written in C++)
   ├─ Runs at machine speed
   └─ Faster than JavaScript

4. Memory-mapped files
   ├─ OS handles caching
   └─ Hot data stays in RAM
```

### **Query Optimization:**

```javascript
// ❌ Slow (no index)
const entries = await db.Register.toArray();
const filtered = entries.filter((e) => e.amount > 1000);
// Loads ALL entries into memory, then filters

// ✅ Fast (uses index)
const filtered = await db.Register.where("amount").above(1000).toArray();
// Database does filtering, only loads matches
```

### **Batch Operations:**

```javascript
// ❌ Slow (multiple transactions)
for (const entry of entries) {
  await db.Register.add(entry); // 500 transactions
}

// ✅ Fast (single transaction)
await db.Register.bulkAdd(entries); // 1 transaction
// 50x faster!
```

---

## **📚 PART 6: ADVANCED PATTERNS**

### **Compound Indexes:**

```typescript
this.version(1).stores({
  Register: "++id, [from_area_id+to_area_id]",
  // ↑ Compound index (multiple fields)
});

// Fast query on combination:
await db.Register.where("[from_area_id+to_area_id]")
  .equals(["shimla", "manali"])
  .toArray();

// Finds trips FROM shimla TO manali specifically
```

### **Multi-Entry Indexes:**

```typescript
interface Entry {
  id: number;
  tags: string[]; // Array
}

this.version(1).stores({
  entries: "++id, *tags",
  //     ↑ Multi-entry index (arrays)
});

await db.entries.where("tags").equals("urgent").toArray();
// Finds all entries where tags array contains "urgent"
```

### **Full-Text Search:**

```typescript
// Add search field
entries.map((entry) => ({
  ...entry,
  searchText: [entry.from_destination, entry.to_destination, entry.notes]
    .join(" ")
    .toLowerCase(),
}));

// Query
await db.Register.where("searchText").startsWith(query.toLowerCase()).toArray();
```

---

## **📚 PART 7: DEBUGGING \& TOOLS**

### **Chrome DevTools:**

```
1. Open DevTools (F12)
2. Application tab
3. IndexedDB section
4. Expand "airbnbRegisterDB"
5. Click "Register" table
6. See all records ✅

Right-click → Delete Database
└─ For testing
```

### **Console Commands:**

```javascript
// In browser console:

// View all entries
await db.Register.toArray();

// Count entries
await db.Register.count();

// Clear everything
await db.Register.clear();

// Add test entry
await db.Register.add({
  from_area_id: "test",
  to_area_id: "test",
  amount_paid: 1000,
  // ... other required fields
});
```

### **Performance Monitoring:**

```typescript
const startTime = performance.now();
const entries = await db.Register.toArray();
const elapsed = performance.now() - startTime;
console.log(`Query took ${elapsed}ms`);

// Typical times:
// 500 entries: ~50ms
// 10,000 entries: ~200ms
```

---

### async and await

```ts
// STEP 1: Create the Promise function
function makePizza() {
  return new Promise((resolve, reject) => {
    console.log("2. Inside anonymous function");

    setTimeout(() => {
      console.log("3. Timer fired! Resolving...");
      resolve("🍕 Pizza ready!");
    }, 1000);
  });
}

// STEP 2: Create async function
async function orderPizza() {
  console.log("1. Creating promise...");

  const pizzaPromise = makePizza();
  console.log("4. Promise created");
  console.log(pizzaPromise); // Promise { <pending> }

  // AWAIT - Wait for promise to resolve
  const pizza = await pizzaPromise;
  //     ↑↑↑↑↑
  // Pauses here until resolve() is called!

  console.log("5. await finished!");
  console.log(pizza); // "🍕 Pizza ready!"
}

console.log("Start");
orderPizza();
console.log("6. Code finished");

// OUTPUT:
// Start
// 1. Creating promise...
// 2. Inside anonymous function
// 4. Promise created
// Promise { <pending> }
// 6. Code finished
// [1 second waits...]
// 3. Timer fired! Resolving...
// 5. await finished!
// 🍕 Pizza ready!
```

### WITH .then()

```ts
const pizzaPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("🍕 Pizza ready!");
  }, 1000);
});

pizzaPromise.then((pizza) => {
  console.log(pizza); // Runs LATER when resolve() called
});

console.log("Code continues"); // Runs IMMEDIATELY
```

WITH async/await

###

```ts
javascript;
async function orderPizza() {
  const pizzaPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍕 Pizza ready!");
    }, 1000);
  });

  const pizza = await pizzaPromise;
  //              ↑↑↑↑↑
  // PAUSES here - waits for resolve()

  console.log(pizza); // Runs AFTER resolve() called
}

orderPizza();
console.log("Code continues"); // Runs IMMEDIATELY
```
