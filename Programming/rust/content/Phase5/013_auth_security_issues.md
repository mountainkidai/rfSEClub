# AUTH CONTINUED — The 3 Dangers + Solutions: CSRF, OAuth, Magic Links

## PART 1 — CSRF (Cross-Site Request Forgery)

### Why Cookies Are Dangerous by Default

---

## 1. What CSRF Actually Is (Definition)

### CSRF (Cross-Site Request Forgery) - Definition

**CSRF** is an attack where:

A malicious website tricks your browser into sending a request to another website using your cookies automatically.

**Key detail:**
👉 **The browser sends cookies even if YOU didn't intend to**

---

## 2. First-Principle Root Cause

**Two facts collide:**

- Browsers automatically attach cookies
- Servers trust cookies

**That's it.**

No JavaScript hacks.  
No password stealing.

Just browser behavior.

---

## 3. Concrete Example (Very Important)

You are logged into: **bank.com**

Your browser has:

```
Cookie: session_id=abc123
```

Now you visit: **evil.com**

**evil.com silently loads:**

```html
<img src="https://bank.com/transfer?to=evil&amount=10000" />
```

**Browser thinks:**

"This is a request to bank.com, I'll attach cookies."

**Result:**

- Cookies sent
- Server trusts request
- Money transferred

**You never clicked anything.**

### 📌 This is CSRF.

---

## 4. Why JWT in Cookies Is Also Vulnerable

JWT does **NOT** prevent CSRF if stored in cookies.

**Why?**

- Browser still auto-sends cookies
- Server still trusts them

**JWT ≠ CSRF protection.**

**JWT solves scaling, not intent.**

---

## 5. How CSRF Is Actually Prevented

**Core idea:**

**Prove that the request was intentionally created by your site**

There are only **3 real defenses.**

---

## 6. Defense #1 — SameSite Cookies (Most Important)

### SameSite Cookie Attribute - Definition

**SameSite** tells the browser:

"When should I send this cookie?"

### Options:

**SameSite=Strict**

- Cookie sent only when user is already on your site
- Strongest protection

**SameSite=Lax**

- Cookie sent on top-level navigation
- Blocks most CSRF
- Default in modern browsers

**SameSite=None**

- Cookie sent everywhere
- Must be Secure
- Dangerous if misused

### 📌 SameSite is the #1 CSRF defense today

**Your config:**

```
sameSite: "strict"
```

- ✅ Correct
- ✅ Safe
- ✅ Modern

---

## 7. Defense #2 — CSRF Tokens (Classic Approach)

### CSRF Token - Definition

A **CSRF token** is:

- Random value
- generated and Stored by server
- Embedded in forms or headers

**Request must include:**

```
X-CSRF-Token: random123
```

**Attackers:**

- Can trigger requests
- Cannot read token
- So request fails

**Used heavily in:**

- Rails
- Django
- Old session-based apps

---

Why Random CSRF Tokens Are Secure
Server creates UNPREDICTABLE token per session:

```text
csrf_token = crypto.randomBytes(32).toString('hex')
// = "a1b2c3d4e5f6..." (256-bit randomness)
```

Server stores it:

```javascript
// Session store / DB
session_id: "user123_session";
csrf_token: "a1b2c3d4e5f6...";
```

| Attack            | Chance of Success | Why Fails?                         |
| ----------------- | ----------------- | ---------------------------------- |
| Guess random      | 1 in 2^256        | Like winning lottery 10x in row    |
| Try common values | 0%                | Server checks EXACT match          |
| Reuse old tokens  | 0%                | One-time use, expires with session |

```text
✅ YOUR FORM (legit)
<input name="_csrf" value="a1b2c3d4e5f6...">  ← Server gave you
POST /transfer {to: "friend", _csrf: "a1b2c3d4e5f6..."} ✓ MATCH!

❌ HACKER FORM (evil.com)
<input name="_csrf" value="random_guess_123">  ← Hacker invented
POST /transfer {to: "hacker", _csrf: "random_guess_123"} ❌ NO MATCH!

❌ HACKER FORM (evil.com)
<input name="_csrf" value="a1b2c3d4e5f6...">  ← Copied somehow?
POST /transfer {to: "hacker", _csrf: "a1b2c3d4e5f6..."} ❌ Already used/expired!

```

## 8. Defense #3 — Custom Headers

Browsers:

Don't allow cross-site JavaScript to set custom headers

So if server requires:

```text
X-Requested-With: XMLHttpRequest
```

```text
// Option 1: Traditional magic words
'X-Requested-With': 'XMLHttpRequest'

// Option 2: YOUR custom password
'X-MyApp-Secret': 'my-bank-rules-2026'

// Option 3: Random per-session
'X-CSRF-Token': 'a1b2c3d4random123'

```

```text
// Server code (any of these work)
if (req.headers['x-requested-with'] === 'XMLHttpRequest') { ok }
if (req.headers['x-myapp-secret'] === 'my-bank-rules-2026') { ok }
if (req.headers['x-csrf-token'] === session.csrfToken) { ok }
```

CSRF attacks fail.

**Used in:**

- SPA APIs
- Token-based auth

---

## 9. CSRF Mental Model (Lock This)

```
Cookies = automatic
Automatic = dangerous
CSRF = confused deputy problem
SameSite = browser-level fix
```
