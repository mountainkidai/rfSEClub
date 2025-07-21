# Viewport Units and `calc()`

CSS provides viewport units and the `calc()` function to create dynamic and responsive layouts.

---

## Viewport Units

Viewport units are relative to the size of the browser's visible area (viewport):

* `1vw` = 1% of the viewport width
* `1vh` = 1% of the viewport height
* `1vmin` = 1% of the smaller dimension (width or height)
* `1vmax` = 1% of the larger dimension

### Example

```css
.element {
  width: 50vw;  /* 50% of viewport width */
  height: 30vh; /* 30% of viewport height */
}
```

Viewport units are great for making elements scale based on the user's screen size, which is especially useful for mobile responsiveness and full-screen layouts.

---

## `calc()` Function

The `calc()` function allows combining different units (like `px`, `%`, `em`, `vw`, etc.) in a single value.

### Syntax

```css
property: calc(expression);
```

### Example

```css
.element {
  width: calc(100vw - 200px);
}
```

In the above, the element’s width is the full viewport width minus 200 pixels. This is useful for layouts with sidebars or margins.

Another example:

```css
.box {
  height: calc(100vh - 60px); /* minus header height */
}
```

---

## Combining Viewport Units with `calc()`

You can use them together for complex responsive designs:

```css
.main {
  padding: calc(2vw + 10px);
}
```

This lets you add fixed and responsive padding.

---

## Summary

* **Viewport units** scale with screen size (`vw`, `vh`, `vmin`, `vmax`).
* **`calc()`** lets you combine different unit types.
* Both are key tools for building responsive and adaptive layouts.
