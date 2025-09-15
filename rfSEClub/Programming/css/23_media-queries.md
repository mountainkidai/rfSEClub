# CSS Media Queries

Media queries help you create **responsive designs**—layouts that adjust to different screen sizes, like phones, tablets, and desktops.

---

## What Are Media Queries?

Media queries allow you to apply CSS only if a specific condition is met, like screen width or device type.

### Basic Syntax

```css
@media (condition) {
  /* CSS rules here */
}
```

---

## Common Conditions

### 1. `min-width`

Applies styles when the screen is **at least** a certain width (i.e., wider than this).

```css
@media (min-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

> This will apply when the screen is 600px wide or more.

### 2. `max-width`

Applies styles when the screen is **at most** a certain width (i.e., smaller than this).

```css
@media (max-width: 599px) {
  body {
    background-color: lightgreen;
  }
}
```

> This will apply when the screen is 599px or less.

---

## Responsive Layout Example

```css
/* Base style for small devices */
body {
  font-size: 14px;
}

/* Medium screens */
@media (min-width: 768px) {
  body {
    font-size: 16px;
  }
}

/* Large screens */
@media (min-width: 1024px) {
  body {
    font-size: 18px;
  }
}
```

---

## Use Cases

* Adjusting font size
* Switching from single to multi-column layout
* Hiding or showing elements on mobile
* Changing navigation menus

---
