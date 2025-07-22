# Centering Content in CSS

Centering content is a common task in web design. There are several ways to do it depending on the situation and the type of content you're centering.

---

## Horizontal Centering with `margin: auto`

If you're centering a block-level element like a `<div>`, the most reliable method is to:

### Use a fixed width and `margin: auto`

```css
.center-box {
  width: 300px;
  margin: 0 auto;
}
```

This sets the left and right margins to `auto`, and if a width is specified, the browser splits the remaining space equally on both sides.

### HTML

```html
<div class="center-box">
  I am centered!
</div>
```

---

## Limitations

* This method only works for block-level elements.
* It does **not** center inline elements (like `<span>`).
* It requires a fixed or max-width on the element. Without a width, it will stretch 100% of the container.

---

## Centering Text Inside Elements

You can center text horizontally inside a block using:

```css
text-align: center;
```

```html
<div style="text-align: center;">
  <p>This text is centered!</p>
</div>
```

---

## Centering Images Horizontally

To center an image, you can also use `margin: auto` with `display: block`:

```css
img {
  display: block;
  margin: 0 auto;
}
```

This is necessary because images are inline by default and `margin: auto` only works with block-level elements.

---
