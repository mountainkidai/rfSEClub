# CSS Units Explained

CSS units determine how sizes and dimensions are measured and applied to elements on a webpage. There are two main categories: absolute units and relative units.

---

## Absolute Units

These units always represent the same size regardless of screen size or resolution.

### `px` (Pixels)

* Represents a single dot on the screen.
* Fixed size: `10px` will always be 10 pixels.
* Commonly used for precise spacing and borders.

---

## Relative Units

These units change depending on the context, such as the font size of the parent or the dimensions of the viewport.

### `em`

* Relative to the **font-size of the element itself or its parent**.
* Example:

  ```css
  body { font-size: 16px; }
  h1 { font-size: 2em; } /* 2 * 16px = 32px */
  ```
  
* Useful for scalable typography and spacing.

### `rem`

* Relative to the **root element’s font size** (usually `html` tag).
* Example:

  ```css
  html { font-size: 16px; }
  p { font-size: 1.5rem; } /* 1.5 * 16px = 24px */
  ```

* More predictable than `em` since it doesn’t compound in nested elements.

### `%` (Percent)

* Relative to the parent element’s size.
* Common in layout widths, heights, padding, etc.
* Example:

  ```css
  .child {
    width: 50%; /* Half of parent width */
  }
  ```

---

## Viewport Units

These are relative to the size of the browser window (viewport).

### `vw` (Viewport Width)

* 1vw = 1% of the viewport width.
* `50vw` means half the screen width.

### `vh` (Viewport Height)

* 1vh = 1% of the viewport height.
* `100vh` fills the entire height of the browser window.

### `vmin`

* 1vmin = 1% of the **smaller** of viewport width or height.

### `vmax`

* 1vmax = 1% of the **larger** of viewport width or height.

---

## Choosing the Right Unit

* Use `px` for precise control.
* Use `em` or `rem` for scalable design and typography.
* Use `%` for flexible layout sizing relative to containers.
* Use `vw`, `vh`, `vmin`, `vmax` for full-screen layouts or responsive scaling.

Combining these units effectively makes your layout more adaptable and easier to manage across different screen sizes.
