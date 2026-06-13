# Classes and IDs

Classes and IDs are two of the most common ways to select and style elements in CSS. They act like labels that help you tell CSS, "Hey, I want to style this part of my webpage!"

---

## What is a Class?

A **class** is like giving a group of elements a shared label. You can use the same class name on multiple elements, and then define a style once in your CSS to apply to all of them.

* Think of a class like giving a uniform to multiple employees. Anyone wearing that uniform follows the same dress code.

```html
<div class="highlight">Item 1</div>
<p class="highlight">Item 2</p>
```

```css
.highlight {
    background-color: yellow;
    padding: 5px;
}
```

In the above example, both the `div` and `p` elements share the `highlight` class, so they both get the same styling.

---

## What is an ID?

An **ID** is like giving a unique name to an element. You can only use an ID once per page. It's meant for a single, specific element.

* Think of an ID like a roll number or serial number. No two people should have the same one.

```html
<header id="main-header">
  <h1>Welcome</h1>
</header>
```

```css
#main-header {
    background-color: #333;
    color: white;
    padding: 20px;
}
```

This styles **only** the element with the `id="main-header"`. Nothing else on the page will be affected.

---

## Syntax Summary

| Selector Type | Prefix | Usage Example | Used For          |
| ------------- | ------ | ------------- | ----------------- |
| Class         | `.`    | `.box`        | Multiple elements |
| ID            | `#`    | `#header`     | Unique element    |

---

## Example: Using Both Together

You can mix IDs and classes in HTML and CSS.

```html
<div id="hero" class="section highlight">
  Welcome to the website!
</div>
```

```css
#hero {
    font-size: 24px;
    font-weight: bold;
}

.section {
    margin: 20px 0;
}

.highlight {
    background-color: yellow;
}
```

This `div` will:

* Have bold, 24px text (because of `#hero`)
* Have margin spacing (from `.section`)
* Have a yellow background (from `.highlight`)

---

## Multiple Classes

You can add more than one class to an element, separated by spaces. Each class adds more style rules.

```html
<button class="btn primary large">Click Me</button>
```

```css
.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.primary {
    background-color: #007bff;
    color: white;
}

.large {
    font-size: 18px;
    padding: 15px 30px;
}
```

This lets you build styles like building blocks. You can reuse `.btn` for all buttons, and add extra classes to customize them further.

---

## Common Use Cases

### Styling Navigation Links

```html
<nav class="navbar">
  <a class="nav-link" href="#">Home</a>
  <a class="nav-link" href="#">About</a>
</nav>
```

```css
.navbar {
    background-color: #333;
    padding: 1rem;
}

.nav-link {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
}

.nav-link:hover {
    background-color: #555;
}
```

---

## Summary

* Use **classes** when you want to apply the same style to multiple elements.
* Use **IDs** when you need to style one specific element uniquely.
* IDs are more specific and should be used sparingly.
* Classes are more flexible and reusable.
