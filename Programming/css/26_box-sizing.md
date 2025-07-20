# CSS Box Sizing

The `box-sizing` property in CSS controls how the browser calculates the size of an element, including its content, padding, and border.

---

## Why Box Sizing Matters

By default, when you set a width or height for an element, the padding and border are added **outside** of that width. This can cause elements to be larger than you expect, especially in complex layouts.

---

## Default Behavior: `content-box`

This is the default value for `box-sizing`.

```css
.element {
  box-sizing: content-box;
}
```

In this mode, the specified `width` and `height` apply only to the **content**. The total actual size becomes:

```txt
Total width = content width + padding + border
Total height = content height + padding + border
```

So if you write:

```css
width: 300px;
padding: 20px;
border: 5px solid;
```

The total width of the box will be:

```txt
300 + 20*2 + 5*2 = 350px
```

---

## Better Approach: `border-box`

This mode tells the browser to include **padding and border inside the width and height**.

```css
.element {
  box-sizing: border-box;
}
```

Now:

```txt
Total width = exactly the width you set
```

So for:

```css
width: 300px;
padding: 20px;
border: 5px solid;
```

The **actual content** area shrinks to make room for the padding and border, but the total box stays at 300px wide.

This makes layout much more predictable.

---

## Global Reset

To avoid layout inconsistencies, many developers apply `border-box` to all elements:

```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

This ensures that all elements behave consistently across the page.

---

## Summary

* `content-box` (default): width is for content only
* `border-box`: width includes padding and border
* Use `border-box` for easier layout control
* Apply a global reset to make all elements consistent
