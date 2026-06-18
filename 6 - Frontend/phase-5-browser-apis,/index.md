# PHASE 5 — BROWSER APIs & WEB PLATFORM ENGINEERING

> Most developers think React is the platform.
>
> React is not the platform.
>
> The Browser is the platform.

---

# Why This Phase Exists

Most frontend engineers spend years learning:

```text
React
Next.js
Redux
Tailwind
```

but never learn:

```text
DOM
Fetch
Storage
Workers
WebSockets
IndexedDB
Service Workers
```

This creates framework-dependent engineers.

The reality is:

```text
React
Vue
Svelte
Angular
Next.js
```

are temporary.

The browser platform is permanent.

Every framework eventually talks to:

```text
Browser APIs
```

Therefore:

```text
Frontend Engineering
=
Web Platform Engineering
```

---

# The Fundamental Question

Imagine React disappears tomorrow.

Could you still build:

- Gmail?
- WhatsApp Web?
- Google Docs?
- Figma?
- Phunsuk?

If the answer is no:

you don't understand the web platform yet.

This phase fixes that.

---

# Learning Objectives

By the end of this phase you should understand:

- DOM APIs
- Event Systems
- Networking APIs
- Browser Storage
- Offline Systems
- Background Processing
- Realtime Communication
- Browser Capabilities
- Web Platform Architecture

---

# Mental Model

The browser is:

```text
Mini Operating System
```

It provides:

```text
Rendering
Storage
Networking
Concurrency
Security
Media
Device Access
```

through APIs.

JavaScript is simply the language used to access them.

---

# PHASE ROADMAP

---

# 5.1 What Are Browser APIs?

Topics:

- Native APIs
- Browser Capabilities
- Web Platform

Questions:

What is an API?

Who provides browser APIs?

Why are they not part of JavaScript?

---

# 5.2 The Global Environment

Topics:

```javascript
window;
document;
navigator;
location;
history;
```

Questions:

What global objects exist?

Where do they come from?

---

# 5.3 DOM Fundamentals

Topics:

```javascript
document;
querySelector;
createElement;
appendChild;
removeChild;
```

Questions:

How do websites manipulate pages?

---

# 5.4 DOM Tree Traversal

Topics:

```javascript
parentNode;
children;
nextSibling;
previousSibling;
```

Questions:

How is the DOM structured?

---

# 5.5 DOM Mutation

Topics:

```javascript
append;
prepend;
replaceChild;
remove;
```

Questions:

How does JavaScript modify interfaces?

---

# 5.6 DOM Performance

Topics:

- Reflow
- Repaint
- Layout Thrashing

Questions:

Why can DOM updates become expensive?

---

# 5.7 Event System Fundamentals

Topics:

```javascript
click;
keydown;
submit;
scroll;
```

Questions:

How does user interaction reach JavaScript?

---

# 5.8 Event Propagation

Topics:

```text
Capture
Target
Bubble
```

Questions:

How do events travel through the DOM?

---

# 5.9 Event Delegation

Topics:

Large-scale event handling

Questions:

Why don't large applications attach thousands of listeners?

---

# 5.10 Forms API

Topics:

```javascript
FormData;
HTMLFormElement;
Validation;
```

Questions:

How do browsers process forms?

---

# 5.11 Fetch API

Topics:

```javascript
fetch();
```

Questions:

How do browsers communicate with servers?

---

# 5.12 Request & Response Objects

Topics:

```javascript
Request;
Response;
Headers;
```

Questions:

How does networking actually work?

---

# 5.13 Streams

Topics:

```javascript
ReadableStream;
WritableStream;
```

Questions:

Why wait for an entire file?

Why not process data incrementally?

---

# 5.14 AbortController

Topics:

```javascript
AbortController;
```

Questions:

How do we cancel requests?

---

# 5.15 Browser Storage Overview

Topics:

```text
Cookies
LocalStorage
SessionStorage
IndexedDB
Cache API
```

Questions:

Where does browser data live?

---

# 5.16 Cookies

Topics:

Authentication

Questions:

How do websites remember users?

---

# 5.17 Local Storage

Topics:

```javascript
localStorage;
```

Questions:

When should local storage be used?

---

# 5.18 Session Storage

Topics:

```javascript
sessionStorage;
```

Questions:

How is it different from local storage?

---

# 5.19 IndexedDB

One of the most important browser APIs.

Topics:

```text
Client-side Database
```

Questions:

How can applications work offline?

---

# 5.20 Cache API

Topics:

Browser Caching

Questions:

How do PWAs store resources?

---

# 5.21 Service Workers

The most important browser API.

Topics:

```text
Background Browser Process
```

Questions:

How can websites work offline?

Why are PWAs possible?

---

# 5.22 Offline Architecture

Topics:

```text
Offline First
```

Questions:

Can websites function without internet?

---

# 5.23 Background Sync

Topics:

Retry Queues

Questions:

What happens when users reconnect?

---

# 5.24 Web Workers

Topics:

```javascript
Worker;
```

Questions:

How does JavaScript use multiple threads?

---

# 5.25 Shared Workers

Topics:

Cross-tab communication

Questions:

Can tabs share work?

---

# 5.26 WebSockets

Critical topic.

Topics:

```text
Persistent Connections
```

Questions:

How does realtime communication work?

---

# 5.27 Server-Sent Events

Topics:

```text
One-way Streaming
```

Questions:

When are SSEs better than WebSockets?

---

# 5.28 WebRTC

Topics:

Peer-to-peer communication

Questions:

How do video calls work?

---

# 5.29 Notifications API

Topics:

Push Notifications

Questions:

How do browsers send notifications?

---

# 5.30 Push API

Topics:

Background messaging

Questions:

How do applications wake up users?

---

# 5.31 Clipboard API

Topics:

```javascript
navigator.clipboard;
```

Questions:

How does copy-paste work?

---

# 5.32 Drag & Drop API

Topics:

File interactions

Questions:

How does file dragging work?

---

# 5.33 File API

Topics:

```javascript
File;
Blob;
```

Questions:

How do browsers handle files?

---

# 5.34 Geolocation API

Topics:

```javascript
navigator.geolocation;
```

Questions:

How does location detection work?

---

# 5.35 Permissions API

Topics:

Camera
Microphone
Location

Questions:

How does browser permission management work?

---

# 5.36 Media Devices API

Topics:

```javascript
getUserMedia();
```

Questions:

How do browsers access cameras?

---

# 5.37 Audio APIs

Topics:

Audio Processing

Questions:

How do music applications work?

---

# 5.38 Canvas API

Topics:

2D Rendering

Questions:

How do browsers draw graphics?

---

# 5.39 SVG

Topics:

Vector Graphics

Questions:

Why are SVGs infinitely scalable?

---

# 5.40 WebGL

Topics:

GPU Rendering

Questions:

How do browsers render 3D worlds?

---

# 5.41 WebGPU

Future-focused engineering.

Topics:

GPU Computing

Questions:

Can browsers perform AI inference?

Can browsers run simulations?

---

# 5.42 Intersection Observer

Topics:

Viewport observation

Questions:

How does lazy loading work?

---

# 5.43 Mutation Observer

Topics:

DOM observation

Questions:

How can code react to DOM changes?

---

# 5.44 Resize Observer

Topics:

Layout observation

Questions:

How can applications react to resizing?

---

# 5.45 URL API

Topics:

```javascript
URL;
URLSearchParams;
```

Questions:

How should URLs be manipulated safely?

---

# 5.46 History API

Topics:

```javascript
pushState;
replaceState;
```

Questions:

How does client-side routing work?

---

# 5.47 Browser Security APIs

Topics:

- CSP
- Same-Origin Policy
- CORS

Questions:

Why are browser restrictions necessary?

---

# 5.48 Progressive Web Apps

Topics:

```text
PWA Architecture
```

Questions:

Can websites compete with native apps?

---

# 5.49 Browser Capability Detection

Topics:

Feature detection

Questions:

How do applications support different browsers?

---

# 5.50 Web Platform Architecture

Topics:

Putting everything together

Questions:

How does a modern browser application function?

---

# Completion Project

Build:

```text
Mini Phunsuk Offline Travel Guide
```

Features:

```text
Offline Maps Metadata
Offline Articles
IndexedDB Storage
Search
Background Sync
Push Notifications
File Uploads
Location Detection
```

Restrictions:

```text
No React
No Frameworks
```

Only:

```text
HTML
CSS
JavaScript
Browser APIs
```

---

# Bonus Project

Build:

```text
Mini Browser OS
```

Features:

```text
Window System
File Storage
Notifications
Offline Data
Background Tasks
```

using only browser APIs.

---

# Success Criteria

You can confidently answer:

1. What are Browser APIs?
2. Why are they separate from JavaScript?
3. How does the DOM work?
4. How do events propagate?
5. How does fetch work?
6. What is IndexedDB?
7. What is a Service Worker?
8. How do offline applications work?
9. What are Web Workers?
10. How do WebSockets work?
11. What is WebRTC?
12. How do browsers access cameras?
13. How do push notifications work?
14. How does client-side routing work?
15. Why are browser security restrictions necessary?
16. How do PWAs work?
17. How can websites work without internet?
18. How can websites behave like native applications?
19. Why is React optional but Browser APIs are not?
20. Why is the browser one of the most powerful software platforms ever created?

If you can answer those questions from first principles, frameworks become implementation details.

You stop being a React developer and become a Web Platform Engineer.
