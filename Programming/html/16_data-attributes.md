# Data Attributes in HTML

Data attributes in HTML allow you to store extra information directly on elements without affecting their appearance or behavior. These are often used in combination with JavaScript.

---

## What are `data-*` Attributes?

**Definition:**

* Custom attributes that begin with `data-` and can be added to any HTML element.
* They store custom, private data that JavaScript can later read or manipulate.

**Syntax:**

```html
<div data-key="value"></div>
```

The attribute name must start with `data-` followed by a custom name (e.g., `data-user`, `data-id`, `data-role`).

You can define multiple data attributes on the same element:

```html
<div data-id="123" data-category="books" data-price="9.99"></div>
```

---

## Why Use Data Attributes?

* To attach extra info to elements without cluttering classes or IDs.
* Makes it easier to manipulate DOM content through JavaScript without altering HTML structure.
* Very helpful in interactive web apps, filtering systems, tab panels, and modal dialogs.
* Better alternative to using global JS variables or hidden form fields for temporary data storage.
* Keeps HTML and JavaScript loosely coupled.

---

## Code Example

```html
<button data-user-id="42" data-role="admin">Edit User</button>
```

This button carries two data attributes: one for user ID and another for role. These won’t visually change the button but are accessible via JavaScript.

You can also use them in lists:

```html
<li data-index="1" data-active="true">Item 1</li>
<li data-index="2" data-active="false">Item 2</li>
```

---

## Accessing Data Attributes with JavaScript

You can retrieve these attributes using the `dataset` property:

```html
<script>
  const btn = document.querySelector('button');
  const userId = btn.dataset.userId; // "42"
  const role = btn.dataset.role;     // "admin"
  console.log(userId, role);
</script>
```

**Note:**

* The `data-user-id` becomes `userId` in JavaScript.
* Hyphens in `data-*` keys become camelCase in JS (e.g., `data-user-name` → `userName`).
* If the attribute name contains reserved characters (like `:` or `.`), they won’t work directly with `dataset`.

---

## Updating Data Attributes via JavaScript

You can also modify or add data attributes dynamically:

```javascript
btn.dataset.role = "editor";
btn.dataset.newInfo = "Hello";
```

This will result in:

```html
<button data-user-id="42" data-role="editor" data-new-info="Hello">Edit User</button>
```

You can also remove a data attribute:

```javascript
delete btn.dataset.newInfo;
```

---

## Real-World Use Cases

* **Tabs and Accordions**: Store active state or panel index.
* **Shopping Carts**: Store product ID, price, or inventory status.
* **Interactive Charts**: Embed values or categories into chart elements.
* **Custom Tooltips**: Define text or metadata directly on elements.

```html
<span data-tooltip="This is a tooltip!">Hover me</span>
```

In JS, you can use this for custom tooltip behavior:

```javascript
const tooltipText = element.dataset.tooltip;
```

---

## Summary

`data-*` attributes are powerful for adding non-visible data to elements, especially useful in dynamic web apps. They offer a clean, HTML-native way to store and retrieve data that works seamlessly with JavaScript. With proper usage, they keep your HTML well-structured and your JS logic flexible.
