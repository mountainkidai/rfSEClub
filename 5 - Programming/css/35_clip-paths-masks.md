# Clip Paths and Masks

CSS provides advanced techniques to control the visibility of parts of elements using `clip-path` and `mask-image`. These properties help create interesting shapes and visual effects beyond standard rectangular boxes.

---

## clip-path

The `clip-path` property lets you define a visible region of an element. Anything outside this shape becomes invisible.

### Basic Syntax

```css
.element {
  clip-path: circle(50% at center);
}
```

This makes the element appear circular by clipping it with a circle shape.

### Common Shapes

* **circle()**: Circular shape
* **ellipse()**: Oval shape
* **inset()**: Rectangle with optional rounded corners
* **polygon()**: Custom polygon shape

### Example

```css
.element {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 80%, 0% 100%);
}
```

This cuts the element into a custom polygonal shape.

### Using SVG clipPath

```html
<svg width="0" height="0">
  <clipPath id="myClip" clipPathUnits="objectBoundingBox">
    <circle cx="0.5" cy="0.5" r="0.5" />
  </clipPath>
</svg>
<div style="clip-path: url(#myClip);">Clipped Content</div>
```

---

## mask-image

The `mask-image` property allows you to control the transparency of different parts of an element using an image.

### Basic Syntax

```css
.element {
  mask-image: url('mask.png');
  mask-repeat: no-repeat;
  mask-size: cover;
}
```

In this case, the white areas of the mask image remain visible, while black areas become transparent.

### mask vs clip-path

* `clip-path` removes the area completely (not rendered)
* `mask-image` can have partial transparency (e.g., fading)

---

## Summary

* `clip-path` is ideal for cutting elements into basic or complex shapes.
* `mask-image` is better for fine-grained transparency effects.
* These properties can be combined with transitions and animations for creative visual effects.
