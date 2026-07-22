# Understanding the Browser User-Agent from First Principles

> "Every HTTP request tells a small story about who is making the request."
>
> One of the pieces of that story is the **User-Agent**.

---

# Table of Contents

1. What is a User-Agent?
2. Why Does It Exist?
3. What Happens When You Open a Website?
4. Anatomy of a User-Agent
5. Breaking Down a Real User-Agent
6. Why Every Browser Says Mozilla
7. Why Apple Silicon Macs Still Say Intel
8. Browser Engine vs JavaScript Engine
9. The History of Browser Engines
10. What is KHTML?
11. What is WebKit?
12. What is Blink?
13. Why Chrome Still Says AppleWebKit
14. Why Chrome Says Safari
15. Why Brave Says Chrome
16. Can You Trust the User-Agent?
17. Modern Browser Architecture
18. Key Takeaways

---

# 1. What is a User-Agent?

A **User-Agent** is simply a string of text sent by the client (browser, mobile app, CLI tool, bot, etc.) to the server with every HTTP request.

Think of it as an introduction.

> "Hello Server.
>
> I am Chrome running on macOS."

Example:

```http
GET / HTTP/1.1
Host: wangdu.world

User-Agent:
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
AppleWebKit/537.36 (KHTML, like Gecko)
Chrome/150.0.0.0
Safari/537.36
```

The browser includes this automatically.

---

# 2. Why Does It Exist?

Imagine you're building a website.

Visitors might use

- Chrome
- Brave
- Safari
- Firefox
- Edge

Some browsers support certain features while older browsers may not.

The server wants to know

- What browser?
- What operating system?
- Is this a mobile device?
- Is this probably a bot?

The User-Agent provides clues.

---

# 3. What Happens When You Open a Website?

Suppose you visit

```
https://wangdu.world
```

The browser sends a request.

```
Browser
    │
    │ HTTP Request
    ▼
Server
```

The request contains headers.

```
GET /

Host: wangdu.world

User-Agent:
Mozilla/5.0 ...

Accept:
text/html

Accept-Language:
en-US
```

The server reads these headers and responds appropriately.

---

# 4. Anatomy of a User-Agent

Let's examine a real example.

```
Mozilla/5.0
(Macintosh; Intel Mac OS X 10_15_7)
AppleWebKit/537.36
(KHTML, like Gecko)
Chrome/150.0.0.0
Safari/537.36
```

Every part has historical significance.

---

# 5. Breaking Down a Real User-Agent

## Mozilla/5.0

```
Mozilla/5.0
```

This is **not** telling us the browser is Mozilla.

It is simply a compatibility string.

We'll see why shortly.

---

## Macintosh

```
Macintosh
```

The browser is running on macOS.

---

## Intel Mac OS X 10_15_7

```
Intel Mac OS X 10_15_7
```

Historically this represented

- Intel processor
- macOS Catalina

Modern Apple Silicon Macs often still include this string for compatibility.

It should **not** be treated as proof the computer is actually Intel.

---

## AppleWebKit

```
AppleWebKit/537.36
```

This is **not** saying Chrome uses Apple's browser engine today.

It exists for historical compatibility.

---

## KHTML, like Gecko

```
KHTML, like Gecko
```

This means

> "This browser behaves similarly to Gecko in many situations."

Again, this is largely historical compatibility.

---

## Chrome

```
Chrome/150.0.0.0
```

This tells the server the browser is Chrome-compatible version 150.

Brave also reports this because it is based on Chromium.

---

## Safari

```
Safari/537.36
```

This does **not** mean the browser is Safari.

It is simply another compatibility token.

---

# 6. Why Every Browser Says Mozilla

This is one of the oldest compatibility hacks on the web.

## 1994

The dominant browser was

```
Netscape Navigator
```

Internally its project codename was

```
Mozilla
```

Many websites began checking

```javascript
if (browser == "Mozilla") {
  // Modern browser
}
```

Then Internet Explorer arrived.

Instead of honestly identifying itself...

```
Internet Explorer
```

...Microsoft discovered many websites refused to work.

So Internet Explorer pretended to be Mozilla.

```
Mozilla/2.0
```

Later

- Firefox
- Chrome
- Safari
- Edge
- Brave

all copied the same approach.

Today nearly every browser still begins with

```
Mozilla/5.0
```

It no longer has any real meaning.

It exists purely for compatibility.

---

# 7. Why Apple Silicon Macs Still Say Intel

Many people notice this.

"My MacBook has an M2 processor."

Yet the User-Agent contains

```
Intel Mac OS X
```

Why?

Because millions of websites were written assuming

```
Mac
=
Intel
```

Removing the word "Intel" could break those websites.

Therefore browsers often keep it.

The User-Agent should be viewed as a compatibility hint rather than an exact hardware description.

---

# 8. Browser Engine vs JavaScript Engine

Many beginners think these are the same.

They are completely different.

## Browser Engine

Responsible for

- HTML
- CSS
- Layout
- Rendering
- Painting pixels

Examples

- Blink
- WebKit
- Gecko

---

## JavaScript Engine

Responsible for executing JavaScript.

Examples

- V8
- JavaScriptCore
- SpiderMonkey

---

Example:

```
Brave

Rendering
    ↓
Blink

JavaScript
    ↓
V8
```

---

Safari

```
Rendering
    ↓
WebKit

JavaScript
    ↓
JavaScriptCore
```

---

Firefox

```
Rendering
    ↓
Gecko

JavaScript
    ↓
SpiderMonkey
```

---

# 9. The History of Browser Engines

```
KHTML
    │
    ▼
WebKit
    │
    ▼
Blink
```

Modern browsers evolved through several generations.

---

# 10. What is KHTML?

KHTML was an open-source rendering engine developed for the KDE desktop environment on Linux.

Apple wanted a browser but did not want to build an engine from scratch.

Instead, Apple forked KHTML.

---

# 11. What is WebKit?

Apple's fork of KHTML became

```
WebKit
```

Safari was built using WebKit.

```
KHTML
    │
    ▼
WebKit
    │
    ▼
Safari
```

---

# 12. What is Blink?

Google initially built Chrome using WebKit.

Later Google decided to fork WebKit.

The result was

```
Blink
```

Today Blink powers

- Chrome
- Brave
- Edge
- Opera
- Arc
- Vivaldi

---

# 13. Why Chrome Still Says AppleWebKit

Chrome no longer uses WebKit.

It uses Blink.

However millions of websites check

```
AppleWebKit
```

Removing it would break compatibility.

So Chrome simply keeps the historical identifier.

---

# 14. Why Chrome Says Safari

Chrome originally inherited Safari's User-Agent.

Even after Blink replaced WebKit, Google continued sending

```
Safari/537.36
```

This does **not** mean Chrome is Safari.

It is only a compatibility token.

---

# 15. Why Brave Says Chrome

Brave is built on Chromium.

Architecture

```
Brave
    │
    ▼
Chromium
    │
    ├── Blink
    └── V8
```

Brave mainly changes

- Privacy
- Ad blocking
- Wallet
- Sync
- AI features
- User interface

The underlying browser engine remains Chromium.

Therefore Brave reports itself as Chrome-compatible.

---

# 16. Can You Trust the User-Agent?

No.

The User-Agent is simply a string.

Anyone can fake it.

Example using curl

```bash
curl \
-A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36" \
https://example.com
```

Although curl is making the request, the server might believe it is Chrome.

Therefore

**Never use the User-Agent for authentication or security.**

---

# 17. Modern Browser Architecture

```
                Browser
                    │
      ┌─────────────┴──────────────┐
      │                            │
Rendering Engine           JavaScript Engine
      │                            │
     Blink                        V8
      │                            │
      └─────────────┬──────────────┘
                    │
              Render Web Page
```

---

Example

```
Brave

UI
│
├── Tabs
├── Address Bar
├── Downloads
├── Settings
├── Shields
└── Wallet

        │

Chromium

        │

Rendering
Blink

JavaScript
V8

Networking
HTTP
TCP
TLS

Operating System
macOS
Windows
Linux
```

---

# 18. Key Takeaways

- A User-Agent is a string sent with every HTTP request.
- It helps servers understand what kind of client is making the request.
- `Mozilla/5.0` is a historical compatibility string.
- Modern Apple Silicon Macs may still report `Intel` for compatibility.
- Browser engines render HTML and CSS.
- JavaScript engines execute JavaScript.
- Safari uses **WebKit + JavaScriptCore**.
- Chrome and Brave use **Blink + V8**.
- Brave identifies itself as Chrome because it is built on Chromium.
- `AppleWebKit` and `Safari` remain in the User-Agent for historical compatibility.
- The User-Agent should never be trusted for security because it can be easily spoofed.

---

# Final Thought

The User-Agent is one of the oldest pieces of the modern web. Although many parts of it no longer describe the browser's true implementation, they remain because the web values **backward compatibility**. A single line of text carries decades of browser evolution, engineering trade-offs, and historical decisions made to keep billions of existing websites working.
