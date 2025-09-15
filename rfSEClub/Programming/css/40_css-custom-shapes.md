# CSS Custom Shapes

CSS Custom Shapes let you flow text around non-rectangular shapes, giving you more creative control over your layouts. This is done using the `shape-outside` and `shape-margin` properties, typically in combination with floated elements.

---

## shape-outside

The `shape-outside` property defines the shape around which text should wrap. It requires the element to be floated and have a defined height and width.

### Common values

* `circle()` – defines a circular shape.
* `ellipse()` – defines an elliptical shape.
* `inset()` – defines a rectangular inset with optional rounded corners.
* `polygon()` – defines a custom polygon by listing its points.

```css
img.shape {
  float: left;
  shape-outside: circle(50%);
  width: 200px;
  height: 200px;
  clip-path: circle(50%);
  margin: 20px;
}
```

### How it works

* `float` must be set to `left` or `right`.
* The shape area is calculated from the margin box of the element.
* The content (e.g., paragraph text) flows around the visible shape.

---

## shape-margin

Adds a buffer space between the shape and the wrapped content. This ensures the text doesn't sit right against the edge of the shape.

```css
img.shape {
  shape-margin: 10px;
}
```

### Why it matters

Helps maintain readability and adds breathing room between the shape and the surrounding text.

---

## Example Use Case

```html
<img src="circle-image.jpg" class="shape">
<p>
  This paragraph will wrap neatly around the circular image, creating a visually appealing layout using `shape-outside`. It enhances design flexibility and adds personality to the content structure.
</p>
```

---

## Summary

* Use `shape-outside` to define how text wraps around an element.
* Combine it with `float` and set a fixed size on the shape element.
* Use `shape-margin` to control the space between the shape and the text.

These properties help in creating modern, dynamic, and magazine-style layouts with flowing text around complex shapes.
