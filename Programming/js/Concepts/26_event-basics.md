# Event Basics in JavaScript

Events in JavaScript are actions that happen in the browser — like clicking a button, moving the mouse, typing on the keyboard, etc. You can write code that listens for these actions and responds to them.

Think of a doorbell. Pressing the bell is an event, and someone answering the door is the response. JavaScript allows you to create similar behavior on web pages.

## Key Concepts and Syntax

### 1. `addEventListener()` – Attach a function to run when an event happens

```html
<button id="myBtn">Click Me</button>
```

```js
const btn = document.getElementById("myBtn");

btn.addEventListener("click", function() {
  console.log("Button clicked!");
});
```

* `getElementById()` selects the button.
* `addEventListener("click", ...)` listens for a mouse click.
* When the button is clicked, the function runs and logs a message.

### 2. Event Object – Get details about the event

```js
btn.addEventListener("click", function(event) {
  console.log("Clicked at position:", event.clientX, event.clientY);
});
```

* The `event` object is automatically passed to your function.
* `event.clientX` and `clientY` give the mouse position.

### 3. `preventDefault()` – Stop default browser behavior

```html
<a href="https://example.com" id="myLink">Go to Example</a>
```

```js
const link = document.getElementById("myLink");

link.addEventListener("click", function(e) {
  e.preventDefault(); // Stops browser from going to the link
  console.log("Link was clicked but not followed.");
});
```

* This is useful for things like forms or links where you want to control behavior manually.

### 4. `stopPropagation()` – Stop event from bubbling up

```html
<div id="outer">
  <button id="inner">Click Me</button>
</div>
```

```js
document.getElementById("outer").addEventListener("click", function() {
  console.log("Outer DIV clicked");
});

document.getElementById("inner").addEventListener("click", function(e) {
  e.stopPropagation();
  console.log("Button clicked");
});
```

* Normally, clicking the button also triggers the parent `div`'s event.
* `stopPropagation()` prevents this.

### 5. Event Bubbling and Capturing (Event Flow)

* **Bubbling**: The event goes from the element up to its parents.
* **Capturing**: The event goes from the outermost element down to the target.

You can control the phase with a third argument in `addEventListener()`:

```js
element.addEventListener("click", handler, true); // true = capturing
```

Default is `false`, which means bubbling.
