# SVG Basics in HTML

SVG (Scalable Vector Graphics) is a way to draw shapes, paths, and graphics directly in HTML. It allows you to create images that stay sharp at any size, perfect for web graphics, icons, and illustrations.

---

## What is SVG?

**Definition:**

* SVG stands for *Scalable Vector Graphics*.
* It is an XML-based markup language for describing 2D graphics.
* SVG images are **resolution-independent**—they look crisp on all screen sizes.
* SVG elements can be styled with CSS and manipulated with JavaScript.

**Why Use SVG?**

* Smaller file size compared to images.
* Animatable and interactive.
* Can be inline in your HTML code or linked externally.

---

## Inline SVG Example

Inline SVG means you write the `<svg>` element directly inside your HTML document.

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
</svg>
```

**Explanation:**

* `width="100" height="100"`: The overall size of the SVG canvas.
* `<circle>`: A shape element. It draws a circle.

  * `cx`, `cy`: The center coordinates.
  * `r`: Radius.
  * `stroke`: Outline color.
  * `fill`: Inside color.

---

## Common SVG Elements

### `<svg>`

* The container that holds your SVG graphics.
* You can specify the width, height, and viewBox.

### `<rect>`

* Draws rectangles.

```html
<rect x="10" y="10" width="80" height="50" fill="blue" />
```

### `<circle>`

* Draws circles.

```html
<circle cx="60" cy="60" r="40" fill="green" />
```

### `<line>`

* Draws straight lines.

```html
<line x1="0" y1="0" x2="100" y2="100" stroke="black" stroke-width="2" />
```

### `<ellipse>`

* Similar to `<circle>` but with two radii (rx, ry).

```html
<ellipse cx="60" cy="60" rx="50" ry="30" fill="orange" />
```

### `<polygon>`

* Draws a shape with three or more points.

```html
<polygon points="50,0 0,100 100,100" fill="purple" />
```

---

## The `<path>` Element

The most powerful and flexible shape in SVG.

```html
<path d="M10 10 H 90 V 90 H 10 Z" fill="none" stroke="black" />
```

**Explanation:**

* `d`: A series of commands to draw shapes.

  * `M`: Move to (x, y).
  * `H`: Horizontal line.
  * `V`: Vertical line.
  * `Z`: Close path.
* `stroke`: Border color.
* `fill`: Inside color.

Paths are great for icons, logos, or custom shapes.

---

## Styling SVG

You can style SVG using:

* **Attributes:** Like `fill`, `stroke`, `stroke-width`.
* **CSS:** Target inline SVG elements just like HTML.

```html
<style>
  svg:hover circle {
    fill: yellow;
  }
</style>
```

---

## Summary

SVG allows you to create high-quality, scalable graphics right in your HTML. By understanding basic shapes like `<circle>`, `<rect>`, and `<path>`, you can draw almost anything!

**Benefits of SVG:**

* Sharp at any resolution
* Small file size
* Easy to animate
* Can be styled and scripted

Use SVG for icons, charts, logos, and even full illustrations—perfectly integrated into your web pages!
