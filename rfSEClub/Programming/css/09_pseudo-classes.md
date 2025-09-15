# CSS Pseudo-Classes

Pseudo-classes help you style elements **based on their behavior or position**. Think of them as special keywords that respond to things like hovering, clicking, focusing, and element order.

---

## What is a Pseudo-Class?

It's like a special rule that adds styles **only when something specific happens**.

### Basic Syntax

```css
selector:pseudo-class {
  property: value;
}
```

---

## 1. `:hover` — When mouse is over an element

```css
button:hover {
  background-color: lightblue;
}
```

When you move your mouse over the button, it changes color.

---

## 2. `:active` — When an element is being clicked

```css
button:active {
  transform: scale(0.95);
}
```

When you click the button, it shrinks a bit to show it’s pressed.

---

## 3. `:focus` — When the element is selected

```css
input:focus {
  border-color: green;
}
```

When you click on the input box or use Tab key to select it, the border turns green.

---

## 4. `:visited` — Links you already clicked

```css
a:visited {
  color: purple;
}
```

If you've clicked the link before, it changes to purple.

---

## 5. `:link` — Links you haven’t clicked yet

```css
a:link {
  color: blue;
}
```

All links that you haven’t visited yet appear blue.

---

## Structure-Based Pseudo-Classes

These help you style elements **based on their position inside a container** (like lists or divs).

---

## 6. `:first-child` — The very first element inside a container

```css
li:first-child {
  color: red;
}
```

Only the first `<li>` item in a list will be red.

---

## 7. `:last-child` — The very last child

```css
div:last-child {
  background-color: yellow;
}
```

Only the last `<div>` inside a parent will be yellow.

---

## 8. `:nth-child(n)` — Pick by number

```css
li:nth-child(2n) {
  background-color: lightgray;
}
```

Every 2nd `<li>` item will get a light gray background.

Change `2n` to:

* `3n` for every 3rd item
* `n+1` for all items
* `odd` or `even` for odd/even items
