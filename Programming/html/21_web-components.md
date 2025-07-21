# Web Components in HTML

Web Components are a set of technologies that let you create reusable and encapsulated custom HTML elements. They work just like built-in HTML tags, but with custom functionality.

---

## What are Web Components?

Web Components are reusable custom elements that are built using standard web platform features. They make it possible to create encapsulated, maintainable UI components with their own behavior and style.

Web Components consist of 3 main technologies:

* **Custom Elements** – Define your own HTML tags.
* **Shadow DOM** – Encapsulate styles and markup so they don’t leak into the rest of the page.
* **HTML Templates** – Define reusable chunks of HTML.

---

## Custom Elements

Custom elements allow you to create your own HTML tags with custom functionality.

### Example

```html
<my-greeting></my-greeting>
```

To make this tag work, define it with JavaScript:

```javascript
class MyGreeting extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<p>Hello, Web Components!</p>";
  }
}
customElements.define("my-greeting", MyGreeting);
```

### How It Works

* `class MyGreeting extends HTMLElement` creates a class based on standard HTML elements.
* `super()` calls the constructor of `HTMLElement`.
* `this.innerHTML` sets the content of the custom element.
* `customElements.define("my-greeting", MyGreeting)` registers the element so it can be used as `<my-greeting>`.

**Why Use It?**
You can package your logic and markup into one element and reuse it across pages or projects.

---

## Shadow DOM

The Shadow DOM creates a "shadow tree" inside an element, which is isolated from the main DOM.
This helps avoid CSS clashes and protects internal structure.

### Example

```javascript
class MyCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
        p { color: red; }
      </style>
      <p>This is inside Shadow DOM!</p>
    `;
  }
}
customElements.define("my-card", MyCard);
```

### How It Works

* `this.attachShadow({ mode: "open" })` creates a shadow root.
* `shadow.innerHTML` sets content and styling for the shadow tree.
* Styles inside the shadow root are scoped and do not affect the rest of the page.

**Benefit:** Shadow DOM helps prevent style and script conflicts.

---

## HTML Templates

Templates define HTML chunks that are not rendered when the page loads but can be reused using JavaScript.

### Example

```html
<template id="msg-template">
  <style>
    p { font-weight: bold; color: green; }
  </style>
  <p>This is a reusable message!</p>
</template>
```

You can use JavaScript to insert this into a custom element:

```javascript
class MessageBox extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById("msg-template");
    const content = template.content.cloneNode(true);
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(content);
  }
}
customElements.define("message-box", MessageBox);
```

**Why Use It?**

* Keep markup separate and clean.
* Easy to reuse and insert into multiple custom elements.

---

## Summary

Web Components make it easier to build complex, reusable, and isolated components for modern web applications.

* **Custom Elements** let you define your own HTML tags with behavior.
* **Shadow DOM** keeps styles and structure encapsulated.
* **Templates** help define reusable HTML.

Together, they form a powerful pattern for organizing and scaling front-end codebases.
