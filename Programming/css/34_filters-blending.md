# CSS Filters and Blending

CSS provides powerful visual effects through **filters** and **blending modes**. These help you change how elements look or how they interact visually with the content behind them — all without using Photoshop or image editing tools.

---

## `filter`

The `filter` property adds effects like blur, grayscale, brightness, and more.

```css
img {
  filter: blur(5px); /* Makes the image look soft */
}
```

You can also apply more than one filter:

```css
img {
  filter: grayscale(100%) brightness(1.2);
}
```

### Common `filter` Functions (with simple examples)

| Filter            | Description                   | Example                                                   |
| ----------------- | ----------------------------- | --------------------------------------------------------- |
| `blur(px)`        | Softens the image             | `blur(3px)` = gentle soft look                            |
| `brightness(%)`   | Changes lightness             | `brightness(50%)` = darker, `brightness(150%)` = brighter |
| `contrast(%)`     | More/less difference in tones | `contrast(200%)` = bold, `contrast(50%)` = faded          |
| `grayscale(%)`    | Turns image black & white     | `grayscale(100%)` = full B\&W                             |
| `sepia(%)`        | Gives a warm vintage effect   | `sepia(100%)` = old photo feel                            |
| `invert(%)`       | Reverses colors               | `invert(100%)` = photo negative                           |
| `opacity(%)`      | Controls transparency         | `opacity(50%)` = 50% see-through                          |
| `saturate(%)`     | More color                    | `saturate(200%)` = very colorful                          |
| `hue-rotate(deg)` | Shifts colors                 | `hue-rotate(180deg)` = red becomes cyan, etc.             |

### Real-World Examples

**1. Make a profile image grayscale:**

```css
.profile-pic {
  filter: grayscale(100%);
}
```

**2. Brighten a dark image:**

```css
.dark-photo {
  filter: brightness(1.5);
}
```

**3. Instagram-style filter effect:**

```css
.fancy {
  filter: sepia(40%) saturate(120%) contrast(110%);
}
```

---

## `mix-blend-mode`

This property controls how a foreground element blends with its background.

```css
.image {
  mix-blend-mode: multiply;
}
```

### Common blend modes

| Mode         | Effect                                   |
| ------------ | ---------------------------------------- |
| `normal`     | No blend, default                        |
| `multiply`   | Darkens image based on background        |
| `screen`     | Lightens image based on background       |
| `overlay`    | High contrast combo of multiply + screen |
| `difference` | Subtracts colors for funky effects       |
| `lighten`    | Shows lighter parts only                 |
| `darken`     | Shows darker parts only                  |

### Example Use Case

**Color overlay on image using blend mode:**

```css
.card {
  background: url("forest.jpg");
}
.card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 0, 0, 0.5); /* red tint */
  mix-blend-mode: overlay;
}
```

---

## `background-blend-mode`

Blends background color and background image **within the same element**.

```css
.box {
  background-color: blue;
  background-image: url("stars.jpg");
  background-blend-mode: overlay;
}
```

### Example

**Create a dramatic header with blend:**

```css
.header {
  background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)),
              url("mountains.jpg");
  background-blend-mode: darken;
}
```

---

## Summary

* Use `filter` to add effects like blur, grayscale, brightness.
* Use `mix-blend-mode` to control how elements blend with content behind them.
* Use `background-blend-mode` to blend background layers inside the same element.

These are great tools to give your designs a modern, stylish look without editing images manually.
