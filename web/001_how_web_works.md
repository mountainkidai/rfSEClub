# 🌐 How the Web Actually Works

Because Next.js is fundamentally:

> an optimization layer on top of the browser + network.

If you deeply understand the browser request lifecycle:

- hydration becomes obvious
- caching becomes obvious
- streaming becomes obvious
- performance becomes engineering instead of magic

---

# Topic 0.1 — Browser Request Lifecycle

# 🧠 First Principle

When you type:

```txt
https://example.com
```

A MASSIVE chain of events begins.

The browser, OS, DNS servers, TCP, TLS, CDN, server, parser, renderer, JS engine —
all start working together.

Understanding this flow is critical.

---

# The Entire Lifecycle (High Level)

```txt
1. URL entered
2. DNS lookup
3. TCP connection
4. TLS handshake
5. HTTP request
6. Server processing
7. HTTP response
8. Browser parses HTML
9. CSS loading
10. JS loading/execution
11. Render page
12. Hydration (React/Next.js)
```

This entire process determines:

- speed
- UX
- performance
- bandwidth usage
  - Bandwidth is the maximum amount of data that can be transferred over a network connection in a given amount of time. It’s usually measured in bits per second, like Mbps (megabits per second) or Gbps.

---

# Step 1 — URL Parsing

You type:

```txt
https://example.app/dashboard
```

Browser breaks it into:

| Part        | Meaning  |
| ----------- | -------- |
| https       | protocol |
| example.app | domain   |
| /dashboard  | path     |

---

# Step 2 — DNS Lookup

Browser now asks:

> “What IP address belongs to example.app?”

Humans use names.
Computers use IPs.

Example:

```txt
phunsuk.app → 104.21.44.12
```

This lookup may involve:

- browser cache
- OS cache
- router cache
- ISP DNS
- root DNS servers

DNS can itself take time.

On slow internet:
DNS latency matters A LOT.

---

# Step 3 — TCP Connection

Now the browser says:

> “I want to talk to this server.”

Before sending website data, the browser and server must establish a reliable connection using **TCP**.

This process is called:

> **TCP Handshake**

It happens in 3 steps:

```txt
1. SYN
   Client → Server
   "Can we connect?"

2. SYN-ACK
   Server → Client
   "Yes, and I heard you."

3. ACK
   Client → Server
   "Great, connection established."
```

After this handshake, the browser can finally start sending HTTP requests and downloading website data.

---

## Why this is expensive on slow internet

The handshake requires multiple back-and-forth network trips.

These are called:

> **Round Trips (RTT = Round Trip Time)**

TCP handshake cost: 1.5 RTT

Meaning:

- data travels client → server → client
- then one more half-trip client → server

---

If network RTT is 600ms:
1.5×600=900 ms

So almost **1 second is spent just establishing the connection** before any webpage content starts downloading.

On a **30 kbps** connection:

- networks are usually `high-latency`
- transfers are slow
- every round trip feels expensive

That’s why slow internet feels laggy even before the page appears.

---

# Important Terms

## Bandwidth

> Maximum amount of data that can be transferred per second.

Example:

- 30 kbps = 30,000 bits/sec

Higher bandwidth → more data can flow at once.

Analogy:

- bandwidth = width of a highway

---

## Latency

> Time taken for a request to go to the server and for the response to come back.

Measured in:

- milliseconds (ms)

Example:

- Clicking a link and waiting before response begins

High latency makes the internet feel slow even if bandwidth is decent.

Analogy:

- latency = travel time between cities

---

## Throughput

> Actual real-world transfer speed achieved.

Usually lower than bandwidth because of:

- latency
- congestion
- packet loss
- protocol overhead

Example:

- bandwidth = 30 kbps
- actual download speed may only be 20 kbps

---

## Simple Difference

| Term       | Meaning               |
| ---------- | --------------------- |
| Bandwidth  | Maximum capacity      |
| Latency    | Delay before transfer |
| Throughput | Actual achieved speed |

# Step 4 — TLS Handshake (HTTPS)

Since the website uses **HTTPS**, the browser and server must first create a **secure encrypted connection**.

This process is called:

> **TLS Handshake**

During this process they:

- verify certificates
- establish encryption
- generate secure keys
- make sure nobody can spy on the connection

Simplified flow:

```txt id="8fw6jg"
Browser:
"Are you really the server?"

Server:
"Yes, here's my certificate."

Browser:
"Okay, let's create encrypted communication."
```

Only after this process finishes can secure HTTPS data transfer begin.

---

## Why this is expensive

TLS requires:

- extra network round trips
- certificate verification
- cryptographic calculations

So before downloading the webpage, the browser already spends time:

1. DNS lookup
2. TCP handshake
3. TLS handshake

On slow networks like 30 kbps:

- latency is high
- round trips are slow
- encryption setup adds more delay

So HTTPS improves security —
but it also adds connection overhead.

---

## Important

HTTPS is:

- secure
- encrypted
- trusted

But security is not free.

Extra security means:

- more communication
- more processing
- more waiting before content loads

That’s why modern performance optimization tries to:

- reduce handshakes
- reuse connections
- cache TLS sessions
- use HTTP/2 and HTTP/3 efficiently

Yes — they are versions of the HTTP protocol.

## HTTP Versions

### HTTP/1.1

Older version.

Problems:

- requests mostly handled one-by-one
- multiple files cause delays
- head-of-line blocking

---

### HTTP/2

Improved version.

Features:

- multiple requests on one connection
- faster loading
- header compression
- better performance

Browser can download:

```text id="qg6zkr"
HTML
CSS
JS
Images
```

more efficiently together.

---

### HTTP/3

Newest major version.

Built on:

> QUIC instead of TCP

Benefits:

- lower latency
- faster handshakes
- better on weak/mobile networks
- connection survives network changes better

Very useful for:

- slow internet
- mobile data
- unstable connections

---

So when people say:

> “Use HTTP/2 or HTTP/3 efficiently”

they mean:

- use newer web protocols
- reduce unnecessary round trips
- improve speed and UX
- optimize bandwidth and latency handling

They are basically newer, smarter ways browsers and servers communicate.

---

## Header Compression (HTTP/2)

Every HTTP request contains **headers**.

Example headers:

```txt id="lq2f7g"
User-Agent
Cookie
Authorization
Content-Type
Accept-Language
```

These are metadata about the request.

When a browser sends a request to a server, it doesn’t send only:

```txt id="vv0t9u"
"give me the webpage"
```

It also sends extra information _about the request_.

This extra information is called:

> **HTTP Headers**

Headers are basically:

> metadata about the request

Meaning:

> information describing the request.

---

Example request:

```txt id="jjlwm3"
GET /home HTTP/1.1
Host: example.com
User-Agent: Chrome
Accept-Language: en-US
Cookie: session=abc123
```

Here:

- `GET /home`
  → actual request

Everything else:

- Host
- User-Agent
- Cookie
- etc.

are headers.

---

# Common Headers

## User-Agent

Tells server:

> which browser/device is making request

Example:

```txt id="cfe8sl"
Chrome on Windows
Safari on iPhone
```

Server may return different layouts for mobile vs desktop.

---

## Cookie

Stores session/user info.

Example:

```txt id="9w6m8d"
logged-in session
shopping cart
preferences
```

Without cookies:

- websites would forget you after every request.

---

## Authorization

Used for login/security.

Example:

```txt id="rjlwmk"
Bearer token
API key
JWT token
```

Tells server:

> “this user is authenticated.”

---

## Content-Type

Tells:

> what kind of data is being sent

Examples:

```txt id="vphn4t"
application/json
text/html
image/png
```

---

## Accept-Language

Tells server:

> preferred language

Example:

```txt id="5c9qij"
en-US
hi-IN
fr-FR
```

Server may respond in that language.

---

# Why Headers Matter

Headers help server understand:

- who you are
- what browser you use
- what data format you want
- whether you're logged in
- language/device preferences

But headers add extra bytes to every request.

That’s why HTTP/2 compresses them to save bandwidth.

Problem in HTTP/1.1:

- headers were sent again and again
- even if mostly unchanged
- wastes bandwidth

Example:

```txt id="0tpw4k"
Request 1 → sends 1KB headers
Request 2 → sends same 1KB headers again
Request 3 → again...
```

On pages with 100 requests:

- huge unnecessary data transfer

Especially bad on slow internet.

---

## HTTP/2 Solution → Header Compression

HTTP/2 compresses headers using a technique called:

> HPACK

Instead of resending full headers repeatedly:

```txt id="v9m6k1"
"same as previous request"
```

This reduces:

- bandwidth usage
- transfer size
- loading time

Very useful for:

- mobile networks
- slow internet
- large websites

---

# QUIC (HTTP/3)

HTTP/3 does not use TCP.

Instead it uses:

> QUIC

QUIC is a newer transport protocol made by [Google](https://www.google.com?utm_source=chatgpt.com).

It runs on:

> UDP

instead of TCP.

---

## Why QUIC exists

TCP has problems:

- slow handshakes
- head-of-line blocking
- poor performance on unstable networks

QUIC fixes many of these.

---

## Benefits of QUIC

### Faster connection setup

HTTP/3 + QUIC reduce handshake delays.

Sometimes:

- connection can start in 0-RTT or 1-RTT

Meaning fewer round trips before data transfer.

---

### Better multiplexing

If one request stalls:

- others continue normally

In TCP:

- one blocked packet can slow everything.

---

### Better for mobile internet

QUIC handles:

- packet loss
- unstable signals
- WiFi ↔ mobile switching

much better.

---

## Simple Summary

| Technology         | Purpose                          |
| ------------------ | -------------------------------- |
| Header Compression | Reduce repeated header data      |
| QUIC               | Faster modern transport protocol |
| HTTP/2             | Better HTTP over TCP             |
| HTTP/3             | Better HTTP using QUIC/UDP       |

Yes — exactly.

The browser only _tells_ the server:

```txt id="f8t9kw"
Accept-Language: hi-IN
```

But the server must be programmed to handle it.

---

# What Browser Does

Browser sends preferred language:

```txt id="rfx25z"
Accept-Language: en-US
```

Meaning:

> “I prefer English (US).”

Or:

```txt id="c8t4b6"
Accept-Language: hi-IN
```

Meaning:

> “I prefer Hindi (India).”

---

# What Server Must Do

Your backend/server logic checks this header:

Pseudo logic:

```txt id="qzjlwm"
if language == "hi-IN":
    send Hindi content

elif language == "fr-FR":
    send French content

else:
    send English content
```

So yes:

> you must build localization/i18n logic yourself.

---

# Real Example

Suppose your site has translations:

```txt id="xuk1sm"
en.json
hi.json
fr.json
```

Server reads header:

```txt id="jlwm0w"
Accept-Language: hi-IN
```

Then loads:

```txt id="x11b8w"
hi.json
```

and responds with Hindi text.

---

# Important

The browser does NOT translate automatically.

The server/app must:

- support multiple languages
- store translations
- choose correct response

---

# Common Approaches

## Server-side

Backend sends translated HTML/content.

Example:

- Next.js
- Django
- Laravel

---

## Client-side

Frontend JS changes language dynamically.

Example:

- React i18n
- i18next

---

So the header is basically:

> a hint from browser

And your application decides:

- whether to use it
- ignore it
- or override it.

---

# Step 5 — HTTP Request

NOW the browser finally sends the actual request to the server.

Example:

```http
GET /dashboard HTTP/1.1
Host: phunsuk.app
```

Meaning:

```txt id="pbnd2y"
GET
→ I want data

/dashboard
→ which page/resource I want

HTTP/1.1
→ protocol version

Host: phunsuk.app
→ which server/domain
```

---

The browser may also send extra information called:

> HTTP Headers

Example:

```txt id="w4s6mf"
Cookie
Authorization
User-Agent
Accept-Language
Cache-Control
```

These help the server understand:

- who the user is
- whether user is logged in
- browser/device info
- preferred language
- caching behavior

---

# Example Request

```http
GET /dashboard HTTP/1.1
Host: phunsuk.app
Cookie: session=abc123
Authorization: Bearer xyz
Accept-Language: en-US
```

Meaning:

```txt id="qz4yk0"
Cookie
→ user's session/login info

Authorization
→ authentication token

Accept-Language
→ preferred language
```

---

# Cache Information

Browser may also send cache headers like:

```txt id="mrvxg8"
If-None-Match
If-Modified-Since
```

Meaning:

> “I already have old data cached.
> Has anything changed?”

If nothing changed, server replies:

```txt id="x7zx4u"
304 Not Modified
```

Then browser reuses cached files instead of downloading again.

This:

- saves bandwidth
- improves performance
- reduces loading time

Especially important on slow internet.

---

# Step 6 — Server Processing

Server receives request.

Could involve:

- database query
- authentication
- rendering
- cache lookup

Next.js may:

- render Server Components
- stream HTML
- fetch data
- hit cache

---

# Step 7 — HTTP Response

After processing the request, the server sends a response back to the browser.

Example:

```http id="d2f8p9"
HTTP/1.1 200 OK
Content-Type: text/html
```

Meaning:

```txt id="j7y1k3"
200 OK
→ request succeeded

Content-Type: text/html
→ response contains HTML
```

---

The server may then send:

```txt id="k4m8x2"
HTML
CSS
JavaScript
images
fonts
JSON data
```

These files are called:

> resources/assets

---

# What Happens Next

The browser still cannot show the app immediately.

First it must:

```txt id="x8q3vn"
1. Download files
2. Parse files
3. Execute JavaScript
4. Build page UI
5. Render pixels on screen
```

Every step takes time.

---

# Example

Suppose server sends:

```txt id="b2v6qw"
index.html
app.js
styles.css
logo.png
```

Browser workflow:

```txt id="u0m5ke"
download → parse HTML
download → parse CSS
download → execute JS
build DOM
calculate layout
paint screen
```

Only THEN does the user finally see the webpage.

---

Yes — exactly.

An HTTP response also has:

```txt id="vrk8y0"
1. Status Line
2. Headers
3. Body
```

---

# Example HTTP Response

```http id="t1x7mw"
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1250
Cache-Control: max-age=3600

<html>
  <body>Hello</body>
</html>
```

---

# Parts Explained

## 1. Status Line

```txt id="wq4c0m"
HTTP/1.1 200 OK
```

Meaning:

- protocol version
- status code
- request result

Examples:

- `200 OK`
- `404 Not Found`
- `500 Server Error`

---

## 2. Headers

Metadata about the response.

Example:

```txt id="r1z9bn"
Content-Type
Content-Length
Cache-Control
Set-Cookie
```

These tell browser:

- what type of content
- response size
- caching rules
- cookies/session info

---

## 3. Body

Actual response data.

Could be:

- HTML
- JSON
- image
- CSS
- JS
- video

Example body:

```html id="u3k2yd"
<html>
  <body>
    Hello
  </body>
</html>
```

---

# Simple Analogy

Think of HTTP response like a courier package:

```txt id="hv7kq2"
Status line → delivery status
Headers     → package information label
Body        → actual item inside package
```

So both:

- HTTP request
- HTTP response

contain:

- headers
- body

except some requests (like GET) usually have no body.

# Why Large Apps Feel Slow

Modern apps often send:

- huge JS bundles
- many images
- fonts
- API requests

So browser spends time:

- downloading
- parsing
- compiling JS
- rendering UI

On slow networks:

- bandwidth is low
- latency is high
- rendering becomes delayed

---

# Critical Insight

Website performance is not only:

> “How fast server responds”

It is also:

```txt id="jz5u1f"
network speed
+
file size
+
JavaScript execution
+
browser rendering
```

All together determine:

- speed
- UX
- responsiveness
- bandwidth usage
- perceived performance

---

# Step 8 — HTML Parsing

Now the browser starts reading the HTML document received from the server.

Example:

```html id="u4m1zs"
<h1>Hello</h1>
```

The browser cannot directly display raw HTML text.

First, it must understand the structure of the page.

So the browser parses the HTML and converts it into a tree-like structure called:

> **DOM Tree**
>
> DOM = Document Object Model

---

# Example

HTML:

```html id="e7t6qp"
<html>
  <body>
    <h1>Hello</h1>
  </body>
</html>
```

Browser converts it into:

```txt id="x8r4kc"
Document
 └── html
      └── body
           └── h1
```

Each HTML tag becomes a:

> node/object in memory

---

# Why Browser Does This

The browser needs a structured representation so it can:

- render the page
- apply CSS styles
- run JavaScript
- update UI dynamically

The DOM is basically:

> an in-memory representation of the webpage
> When the browser downloads HTML, it does not keep working with plain text like this:

```html id="j2v7wp"
<h1>Hello</h1>
```

Instead, the browser converts it into JavaScript-like objects stored in memory (RAM).

Example:

```txt id="n5w1xr"
h1 element
 ├── tagName = "h1"
 ├── text = "Hello"
 └── children = []
```

All these connected objects together form:

> the DOM tree

---

# Why “in-memory”?

Because the browser stores this structure in RAM while the page is open.

So the browser can quickly:

- change text
- add elements
- remove elements
- update styles
- respond to clicks

without rereading the HTML file every time.

---

# Simple Analogy

HTML file:

```txt id="u2z0mc"
Blueprint on paper
```

DOM:

```txt id="w7n3qy"
Actual working model built in memory
```

Yes — exactly.

The DOM is basically:

> a tree of JavaScript objects representing the webpage.

Example HTML:

```html id="h2r8vk"
<h1>Hello</h1>
```

Browser internally creates something like:

```js id="u4k1qb"
{
  tagName: "H1",
  innerText: "Hello"
}
```

Real DOM objects are more complex, but conceptually this is what happens.

---

# DOM = Objects in Memory

Each HTML element becomes an object.

Example:

```html id="p9x3mw"
<body>
  <h1>Hello</h1>
  <button>Click</button>
</body>
```

Becomes a tree of objects:

```txt id="f7v2zs"
Document
 └── body object
      ├── h1 object
      └── button object
```

---

# Why This Matters

Because JavaScript can interact with these objects.

Example:

```js id="n6m8yt"
document.querySelector("h1");
```

returns:

> the DOM object for `<h1>`

Then JS can modify it:

```js id="r2k5wd"
h1.innerText = "Welcome";
```

Browser updates the screen immediately.

---

# Important

DOM is NOT the original HTML file.

It is:

> the browser's object representation of the page.

So:

```txt id="m4c7qv"
HTML → parsed → DOM objects in memory
```

---

# Example

Suppose JavaScript runs:

```js id="d8k4sm"
document.querySelector("h1").innerText = "Welcome";
```

Browser changes the DOM object in memory:

```txt id="k1r8px"
"Hello" → "Welcome"
```

Then updates the screen.

The original downloaded HTML file usually does NOT change.

Only the DOM changes.

---

# Simple Flow

```txt id="c6m4tj"
HTML file downloaded
        ↓
Browser parses HTML
        ↓
Creates DOM objects in memory
        ↓
JavaScript manipulates DOM
        ↓
Browser renders updated UI
```

---

# Important Insight

The browser does NOT work directly on HTML text after downloading.

Instead:

```txt id="z5q2va"
HTML text
   ↓
HTML Parser
   ↓
DOM Tree
   ↓
Render page
```

---

# Why Large HTML Can Slow Things

Huge HTML documents mean:

- more parsing
- larger DOM trees
- more memory usage

Large DOM trees can hurt:

- performance
- rendering speed
- responsiveness

Especially on:

- low-end devices
- slow CPUs
- mobile phones

---

# Key Idea

HTML is:

> the source code of the page

DOM is:

> the browser's live in-memory version of the page

JavaScript usually interacts with:

> the DOM, not raw HTML.

---

# Step 9 — CSS Parsing

After parsing HTML, the browser downloads and reads CSS files.

Example:

```css id="y7q2mv"
h1 {
  color: red;
}
```

The browser parses CSS and converts it into another in-memory structure called:

> **CSSOM**
>
> CSS Object Model

Just like:

- HTML → DOM
- CSS → CSSOM

---

# Example

HTML:

```html id="v5r8kx"
<h1>Hello</h1>
```

CSS:

```css id="u3m1zp"
h1 {
  color: red;
}
```

Browser creates:

```txt id="b6t4qw"
DOM
 └── h1

CSSOM
 └── h1 → color:red
```

Then combines them.

---

# Render Tree

Browser combines:

```txt id="p1x7dn"
DOM + CSSOM
```

to create:

> **Render Tree**

The render tree contains:

- visible elements
- their styles
- layout information

This is what browser actually uses to render pixels on screen.

---

# Rendering Flow

```txt id="g4v9mc"
HTML → DOM
CSS  → CSSOM

DOM + CSSOM
       ↓
   Render Tree
       ↓
Layout
       ↓
Paint Screen
```

---

# Important Insight

Browser usually blocks rendering until CSS is ready.

Why?

Because without CSS:

- sizes may change
- fonts may change
- layout may shift
- UI may flicker badly

Example:

Without CSS:

```txt id="m8z2rk"
plain ugly page appears
```

Then suddenly:

```txt id="s6x1qy"
everything jumps into styled layout
```

Bad UX.

So browser waits for CSS before rendering.

---

# Why Large CSS Hurts Performance

Large CSS files mean:

- more network download
- more parsing
- larger CSSOM
- delayed rendering

Especially on slow internet:

- CSS becomes render-blocking
- user sees blank screen longer

That’s why performance optimization often includes:

- minimizing CSS
- removing unused CSS
- critical CSS
- splitting CSS files
- caching CSS aggressively

# Step 11 — Rendering

Browser finally paints pixels.

Pipeline:

```txt
DOM
→ CSSOM
→ Render Tree
→ Layout
→ Paint
→ Composite
```

Now user sees page.

---

# Step 10 — JavaScript Loading

While parsing HTML, the browser may encounter:

```html id="z9m4qw"
<script src="app.js"></script>
```

At this moment, the browser usually pauses HTML parsing.

Why?

Because JavaScript can change the page structure itself.

Example:

```js id="j7v2xp"
document.body.innerHTML = "Changed";
```

This can completely modify the DOM.

So the browser cannot safely continue parsing/rendering until JavaScript finishes.

---

# What Browser Must Do

For JavaScript files, browser must:

```txt id="m1q8rk"
1. Download JS
2. Parse JS
3. Compile JS
4. Execute JS
```

Only then can rendering continue properly.

---

# Why JavaScript Is Expensive

JavaScript is not just:

> downloaded text

The browser engine must actually:

- understand the code
- convert it into machine instructions
- execute it on CPU

This costs:

- CPU time
- memory
- battery
- rendering delay

---

# On Slow Devices

On weak phones or laptops:

- CPU is slow
- JavaScript execution becomes expensive

Sometimes:

> JS execution is slower than the network itself.

Meaning:

- downloading finished
- but browser is still busy processing JS

This causes:

- laggy UI
- delayed rendering
- frozen interactions
- poor UX

---

# Why Large JS Bundles Hurt Performance

Large frontend apps often send:

```txt id="t8x5mc"
React
libraries
framework runtime
components
hydration code
state managers
```

as huge JavaScript bundles.

Problems:

- bigger downloads
- longer parsing
- more compilation
- slower execution

Especially bad on:

- mobile devices
- low-end CPUs
- slow internet

---

# Important Insight

HTML is relatively cheap.

JavaScript is expensive.

Why?

HTML mostly describes structure:

```html id="w5p2zy"
<h1>Hello</h1>
```

But JavaScript is executable logic:

```js id="k3r7vb"
calculate();
render();
diff();
hydrate();
update();
```

Execution always costs CPU work.

---

# Why Server Components Matter

Traditional frontend apps often send:

```txt id="p9v6qw"
Huge JavaScript bundles
```

to the browser.

Server Components instead send mostly:

```txt id="x2m4zn"
HTML
```

HTML is:

- smaller
- cheaper to parse
- faster to render
- less CPU-intensive

So browser does less JavaScript work.

---

# Core Philosophy of Modern Next.js

Modern frameworks try to:

```txt id="v7t1ke"
Move work from browser → server
```

Because servers are powerful,
while users may have:

- slow phones
- weak CPUs
- slow internet

So the goal is:

```txt id="r4y8mf"
Less client JavaScript
More server-rendered HTML
```

for better:

- performance
- UX
- loading speed
- SEO
- bandwidth efficiency

# Step 12 — Hydration (React/Next.js)

User sees HTML.

BUT buttons still don’t work.

Why?

Because HTML alone is not interactive.

React now downloads JS and attaches event listeners.

This is:

# Hydration

Example:

```html
<button>Click</button>
```

becomes interactive after hydration.

---

# 🚨 Hydration Is Expensive

Hydration requires:

- JS download
- parsing
- execution
- attaching listeners

Too much hydration =
terrible slow-internet experience.

---

# 🧠 Elite Next.js Mental Model

## Bad approach

```txt
Send huge JS app
Browser builds UI
```

## Elite approach

```txt
Server sends ready HTML
Minimal JS enhances interactivity
```

This is exactly why:

- Server Components exist
- streaming exists
- partial hydration exists

---

# For ultra-fast apps:

> Send less JavaScript.

Not:

> “optimize later”

---

# Real Production Insight

Most slow apps are slow because:

- too many JS bundles
- too many requests
- too much hydration
- giant libraries
- excessive client components

NOT because React is slow.

---

# 🧠 Final Mental Model

Browser lifecycle:

```txt
URL
→ DNS
→ TCP
→ TLS
→ HTTP Request
→ Server
→ HTML/CSS/JS
→ Parsing
→ Rendering
→ Hydration
→ Interactive App
```

Every millisecond matters.

Every byte matters.

---
