# **ASYNC / AWAIT (WHAT IT REALLY IS, FROM FIRST PRINCIPLES)**

If you misunderstand async:

- code compiles but behaves weird

- lifetimes look scary

- performance tanks

If you understand async:

- code is clean

- IO is efficient

- architecture clicks

We go **slow and precise**.

---

## **FIRST PRINCIPLE (THE ROOT TRUTH)**

> **Computers are fast.**

> **IO is slow.**

Examples of slow IO:

- database queries

- network calls

- disk access

- token signing (sometimes)

If your program _waits_, CPU is wasted.

Async exists to **not wait**.

---

## **WHAT "ASYNC" REALLY MEANS (NOT MAGIC)**

> **Async means: "Pause here, resume later."**

That's it.

No threads.

No parallelism (by default).

Just **pausing execution**.

---

## **STEP 1 --- THE PROBLEM WITHOUT ASYNC**

```
fn login() {
    let user = db_call();  // waits 20ms
    let token = sign();    // waits 10ms
    respond();
}
```

During those 30ms:

- thread is blocked

- server can't handle other requests

Bad at scale.

---

## **STEP 2 --- WHAT async fn ACTUALLY RETURNS**

```rs
async fn login() -> u64 {
    42
}
```

This does **NOT** return u64.

It returns:

```rs
Future<Output = u64>
```

Meaning:

> "A recipe for producing a u64 later."

Nothing runs yet.

---

## **STEP 3 --- WHAT A Future IS (MENTAL MODEL)**

A Future is a **state machine**:

```
Start
 ├─ waiting for DB
 ├─ waiting for crypto
 └─ done
```

Rust compiler builds this for you.

You never write it manually.

---

## **STEP 4 --- await (THE ONLY CONTROL POINT)**

```
let user = db_call().await;
```

Meaning:

```
If result is ready → continue
If not → pause function
```

While paused:

- executor runs other tasks

- thread is free

This is the whole trick.

---

## **STEP 5 --- WHY await MUST BE INSIDE async**

This fails:

```
fn handler() {
    db_call().await; // ❌
}
```

Because:

> "You can't pause a non-pausable function."

So:

```
async fn handler() {
    db_call().await; // ✅
}
```

---

## **STEP 6 --- ASYNC IS CONTAGIOUS (IMPORTANT)**

If function A awaits function B:

```
async fn a() {
    b().await;
}
```

Then a **must** be async.

Rule:

> **Async spreads upward, not downward.**

This is why handlers are async.

---

## **STEP 7 --- ASYNC + OWNERSHIP (WHY LIFETIMES DISAPPEAR)**

Bad idea:

```
async fn bad(s: &str) {
    db_call().await;
    println!("{}", s);
}
```

Why dangerous?

- function pauses

- reference must live across pause

- compiler must prove lifetime

Better:

```
async fn good(s: String) {
    db_call().await;
    println!("{}", s);
}
```

Rule:

> **Async functions should OWN their data.**

This kills 90% of async lifetime pain.

---

## **STEP 8 --- ASYNC ERROR HANDLING (NATURAL FIT)**

```
async fn login() -> Result<u64, AuthError> {
    let user = find_user().await?;
    let token = sign_token(user).await?;
    Ok(token)
}
```

Nothing special.

? works exactly the same.

---

## **STEP 9 --- CONCURRENT TASKS (AUTH USE-CASE)**

Sometimes you want to do things together:

```
let (user, settings) = tokio::join!(
    load_user(),
    load_settings()
);
```

This:

- runs both futures

- pauses efficiently

- no threads spawned

Useful for auth + profile loading.

---

## **STEP 10 --- WHAT ASYNC IS NOT**

Very important.

Async is NOT:

- multithreading

- parallel CPU work

- faster computation

Async is:

- **better waiting**

CPU-heavy work should go to threads, not async.

---

## **STEP 11 --- EXECUTOR (ONE SENTENCE ONLY)**

> **Executor is the engine that polls futures.**

Examples:

- Tokio

- async-std

You don't implement it.

You just use it.

---

| Step        | Code/Action                                              | Which Worker?       | Queue/Waker Status                             |
| ----------- | -------------------------------------------------------- | ------------------- | ---------------------------------------------- |
| 1. Start    | #[tokio::main] async fn main()                           | Main thread         | Spawns 10 workers + global queue tokio​        |
| 2. Spawn    | tokio::spawn(login_user())                               | Any worker          | Task added to GLOBAL queue tokio​              |
| 3. Poll     | Worker1 grabs login_user() → let user = db.query().await | Worker1             | Task running                                   |
| 4. Await    | DB returns Pending → registers waker with socket         | Worker1 parks       | Waker tells OS kqueue: "wake me when DB ready" |
| 5. Next     | Worker1 grabs next task from queue                       | Worker1             | Other tasks run (Worker2-10 unaffected)        |
| 6. DB Ready | macOS kqueue → "socket data!" → waker.wake()             | OS → Tokio          | Task re-added to GLOBAL queue tokio​           |
| 7. Resume   | Worker3 steals woken task → continues after .await       | Worker3 (stealing!) | user = DB result → res.send()                  |
| 8. Done     | Worker3 finishes → grabs next from queue                 | Any worker          | Your API serves 10x faster!                    |

## **STEP 12 --- AUTH FLOW WITH ASYNC (REAL SHAPE)**

```rs
pub async fn login(
    repo: &impl UserRepo,
    hasher: &impl PasswordHasher,
    req: LoginRequest,
) -> Result<LoginResponse, AuthError> {
    let user = repo.find(&req.username).await?;
    if !hasher.verify(&req.password, &user.hash) {
        return Err(AuthError::InvalidCredentials);
    }
    let token = sign_token(user.id).await?;
    Ok(LoginResponse { token })
}
```

Key observations:

- everything owned

- no lifetimes

- no blocking

- clean flow

---

## **🔒 DESIGN INVARIANTS (NON-NEGOTIABLE)**

1.  Async = pausable functions

2.  .await is the only pause point

3.  Async spreads upward

4.  Own data in async

5.  Never block inside async

---

## **CHECKPOINT (ANSWERED)**

1.  What does async fn return?

    → A Future, not the value.

2.  What does .await do?

    → Pause until ready.

3.  Why does ownership matter more in async?

    → Paused functions must keep data alive.

---
