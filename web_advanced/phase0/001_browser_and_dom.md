The DOM, JavaScript, and How the Browser Actually Works

> **Goal:** Understand _why_ JavaScript exists, what the DOM really is, why browsers freeze, and why React and Next.js were invented.

---

# First Principles

Before learning React, Next.js, or any framework, ask one question:

> **What is a browser?**

A browser is just another program running on your computer.

Its job is surprisingly simple.

```
Internet

↓

Download files

↓

Understand them

↓

Draw pixels on the screen

↓

Respond to user actions
```

That's it.

Everything else is built on top of these four responsibilities.

---

# The Browser Understands Three Languages

The browser only understands three languages.

```
HTML

CSS

JavaScript
```

Each has exactly one responsibility.

---

## HTML

HTML describes **what exists**.

Example

```html
<h1>Welcome</h1>

<button>Login</button>

<img src="/logo.png" />
```

HTML is structure.

Think of it as the skeleton.

---

## CSS

CSS describes

> How should it look?

```css
button {
  background: blue;
  color: white;
}
```

CSS is appearance.

Think of it as clothes.

---

## JavaScript

JavaScript answers

> What should happen?

```javascript
button.onclick = () => {
  alert("Hello");
};
```

Without JavaScript

The page cannot react.

It just sits there.

---

# Before JavaScript

Imagine it's 1994.

Websites looked like this.

```
Welcome

About

Contact
```

That's all.

If you clicked something

The browser downloaded another page.

Every click

↓

New request

↓

New page

There were almost no interactions.

---

# Then JavaScript Was Invented

In 1995,

**Brendan Eich** created JavaScript in about ten days.

Its original purpose was tiny.

Examples

```
Validate a form

↓

Show an alert

↓

Change button color

↓

Animate a menu
```

Nobody expected people to build

- Gmail
- Google Maps
- Figma
- Notion
- VS Code

inside a browser.

But they did.

That's why frontend development became complicated.

JavaScript was never originally designed for applications this large.

---

# What Is The DOM?

This is one of the most misunderstood topics.

Suppose the browser downloads

```html
<html>
  <body>
    <h1>Wangdu</h1>

    <button>Login</button>
  </body>
</html>
```

Can the browser directly modify this text?

No.

Instead it converts HTML into a tree.

```
Document

└── html
    └── body
        ├── h1
        │     "Wangdu"
        │
        └── button
              "Login"
```

This tree is called

> **DOM**

DOM stands for

**Document Object Model**

Notice something.

It says

```
Object
```

not

```
Text
```

The browser converts HTML into objects.

Each node becomes an object.

Example

```javascript
button = {
  tag: "button",
  text: "Login",
  disabled: false,
};
```

Now JavaScript can modify those objects.

---

# Why Does The DOM Exist?

Imagine HTML stayed as plain text.

```
<button>Login</button>
```

Now you want to change it to

```
<button>Logout</button>
```

You'd have to edit text.

Find characters.

Insert new ones.

Delete old ones.

Very slow.

Instead,

the browser creates objects.

Objects are much easier to modify.

---

# JavaScript Talks To The DOM

JavaScript cannot directly draw pixels.

It asks the DOM to change.

Example

```javascript
document.getElementById("title").textContent = "MountainKid";
```

JavaScript says

```
DOM

Please change this node.
```

The DOM changes.

Then

the browser redraws the screen.

Notice

JavaScript never paints pixels.

The browser does.

---

# The Browser Pipeline

Everything follows this order.

```
HTML

↓

DOM

↓

JavaScript changes DOM

↓

Browser recalculates layout

↓

Browser paints pixels

↓

User sees changes
```

This pipeline runs thousands of times.

---

# Who Owns The DOM?

Important question.

Many beginners think

```
JavaScript owns the DOM.
```

Wrong.

The browser owns the DOM.

JavaScript merely asks permission.

```
JavaScript

↓

Browser DOM

↓

Browser Renderer

↓

GPU

↓

Screen
```

---

# What Is The JavaScript Engine?

JavaScript cannot execute itself.

The browser contains another program.

This is called

```
JavaScript Engine
```

Chrome uses

```
V8
```

Firefox uses

```
SpiderMonkey
```

Safari uses

```
JavaScriptCore
```

Their only job is

```
Read JavaScript

↓

Execute JavaScript
```

---

# The Call Stack

Imagine JavaScript as a worker.

There is only one worker.

Not ten.

Not one hundred.

One.

The worker has one desk.

```
Call Stack

↓

main()

↓

login()

↓

fetchUser()

↓

render()
```

The worker can only do

one thing at a time.

---

Example

```javascript
console.log("A");

console.log("B");

console.log("C");
```

Execution

```
A

↓

B

↓

C
```

Never

```
A

↓

C

↓

B
```

Because there is only one worker.

---

# Why Is JavaScript Single Threaded?

Imagine two workers modifying the same button.

Worker 1

```
Button text

↓

Login
```

Worker 2

```
Button text

↓

Logout
```

Who wins?

Chaos.

To avoid these problems,

JavaScript runs one piece of code at a time.

This makes programming much simpler.

---

# The Event Loop

Now imagine

the user clicks.

At exactly the same moment

a network request finishes.

Both events happen.

Can JavaScript execute both?

No.

There is one worker.

So events wait.

```
Click

↓

Queue
```

```
Network response

↓

Queue
```

The worker finishes current work.

Then picks the next event.

```
Call Stack

↓

Empty?

↓

Yes

↓

Take next event

↓

Execute

↓

Repeat forever
```

This loop is called

> **Event Loop**

---

# Why Does The UI Freeze?

Suppose you write

```javascript
const start = Date.now();

while (Date.now() - start < 5000) {}
```

For five seconds

JavaScript is busy.

Remember

There is only one worker.

During those five seconds

```
Cannot click

Cannot scroll

Cannot repaint

Cannot type

Cannot animate
```

Everything freezes.

The browser is waiting.

Not because the browser is slow.

Because JavaScript never gave it a chance.

---

# Yielding Control

This is one of the most important concepts in frontend engineering.

The mistake many tutorials make is saying:

> "`await new Promise(resolve => setTimeout(resolve, 0))` lets the browser breathe."

But they never explain **why**.

Let's build it from first principles.

---

## Imagine there is only one worker

Remember this.

JavaScript has **one worker**.

```
        Browser

      JavaScript Worker
             👨‍💻
```

That worker is responsible for

- Running your JavaScript
- Handling button clicks
- Running timers
- Processing network callbacks

But the browser also wants to

- Paint pixels
- Animate
- Scroll
- Respond to clicks

The problem is:

**The browser cannot paint while JavaScript is still working.**

---

# Example

Suppose your code is

```javascript
for (let i = 0; i < 100000; i++) {
  process(items[i]);
}
```

Imagine each item takes

```
1 ms
```

Total

```
100000 ms

=

100 seconds
```

During those 100 seconds

```
JavaScript Worker

Processing...
Processing...
Processing...
Processing...
Processing...
```

The browser is waiting.

```
Browser

❌ Cannot paint

❌ Cannot animate

❌ Cannot scroll

❌ Cannot click
```

The webpage freezes.

---

# Timeline

```
Time →

JS
████████████████████████████████████

Browser Paint
-----------------------------------
(waiting...)
```

Notice

The browser never gets a chance.

---

# Instead

Break the work into pieces.

```
100 items

↓

pause

↓

100 items

↓

pause

↓

100 items

↓

pause
```

Now the timeline looks like

```
JS
█████     █████     █████

Paint
     🎨         🎨         🎨
```

The browser paints between chunks.

The page stays responsive.

---

# What does "yield" mean?

Imagine you're talking to someone.

Without yielding

```
You

blah blah blah blah blah blah blah
blah blah blah blah blah blah blah
blah blah blah blah blah blah blah
blah blah blah blah blah blah blah
```

Nobody else can speak.

---

Yielding means

```
You

Talk

↓

Pause

↓

Other person speaks

↓

Continue
```

That's exactly what JavaScript does.

---

# So what does this line do?

```javascript
await new Promise((resolve) => setTimeout(resolve, 0));
```

Many beginners think

> "It waits zero milliseconds."

Not exactly.

It means

> **"I'm done for now. Put the rest of my work back into the event queue."**

Think of it as saying

```
JavaScript Worker

"I'll continue later."

↓

Leaves the desk.

↓

Browser gets the desk.

↓

Browser paints.

↓

JavaScript comes back.
```

---

# Visualizing it

Without yield

```
Call Stack

Process 1
Process 2
Process 3
Process 4
Process 5
Process 6
Process 7

Browser

Waiting...

Waiting...

Waiting...
```

With yield

```
Process 1
Process 2
Process 3

↓

Stack Empty

↓

Browser Paints 🎨

↓

Continue

↓

Process 4
Process 5
Process 6

↓

Stack Empty

↓

Browser Paints 🎨
```

---

# Real code

Bad

```javascript
for (const item of items) {
  process(item);
}
```

If

```
items = 1,000,000
```

the browser freezes.

---

Better

```javascript
for (let i = 0; i < items.length; i++) {
  process(items[i]);

  if (i % 100 === 0) {
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
}
```

Now every 100 items

JavaScript says

```
I'll continue later.
```

Browser gets time to

- repaint
- handle clicks
- animate
- scroll

---

# Why `setTimeout(0)`?

People see

```javascript
setTimeout(..., 0)
```

and think

```
Wait zero milliseconds.
```

That's **not** the important part.

The important part is

```
Current JavaScript finishes

↓

Callback goes into Event Queue

↓

Browser does its work

↓

Callback runs later
```

Even with `0`, the callback **does not run immediately**. It runs only after the current call stack is empty.

---

# Restaurant analogy

Imagine one chef.

Without yielding

```
Chef

Cook Order 1

Cook Order 2

Cook Order 3

Cook Order 4

Cook Order 5

Customers waiting...
```

Nobody gets food until everything finishes.

---

With yielding

```
Cook 3 dishes

↓

Waiter serves them

↓

Cook next 3

↓

Waiter serves them

↓

Repeat
```

Customers stay happy.

---

# First-principles definition

**Yielding control** means:

> **Temporarily stop executing JavaScript so the browser can do its own work (paint, animate, process input, and handle other events) before continuing your computation.**

It **does not make your algorithm faster**.

If processing 100,000 items takes 5 seconds, it still takes about 5 seconds.

The difference is:

- **Without yielding:** the user experiences **5 seconds of a frozen page**.
- **With yielding:** the user experiences **5 seconds of ongoing work while the page remains responsive**.

That's why modern browsers also provide APIs like `requestAnimationFrame`, `requestIdleCallback`, and the newer `scheduler.yield()`—they all exist to let long-running JavaScript cooperate with the browser instead of monopolizing the single JavaScript thread.

---
