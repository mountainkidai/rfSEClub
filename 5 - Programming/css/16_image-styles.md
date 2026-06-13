# Image Styles in CSS

Styling images using CSS allows you to control their size and behavior within your layout. You can set fixed dimensions, let the image resize automatically, or use percentage-based sizes.

---

## `width` and `height`

You can set the width and height of an image directly in CSS:

```css
img {
  width: 200px;
  height: 150px;
}
```

This makes the image exactly 200 pixels wide and 150 pixels tall. However, this can distort the image if the aspect ratio doesn't match the original.

---

## `auto`

Using `auto` preserves the aspect ratio:

```css
img {
  width: 300px;
  height: auto;
}
```

In this case, the width is fixed at 300px, and the browser automatically calculates the height to keep the image from looking stretched or squished.

You can also do the reverse:

```css
img {
  height: 300px;
  width: auto;
}
```

---

## Percentage Units

You can set image sizes relative to their container using percentages:

```css
img {
  width: 50%;
  height: auto;
}
```

This makes the image always take up 50% of the width of its parent container. It is useful for responsive designs.

---

## Example: Full-Width Banner

```css
.banner {
  width: 100%;
  height: auto;
}
```

This style ensures the banner stretches the full width of its container while keeping its height proportional.

---

```css
img {
  max-width: 100%;
  height: auto;
}
```

This ensures the image never overflows its container.
