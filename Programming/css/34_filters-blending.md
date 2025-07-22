# CSS Filters and Blending

CSS provides powerful visual effects through **filters** and **blending modes**. These properties allow you to manipulate how elements look and interact visually with their background or other elements, all without needing image editing software.

---

## `filter`

The `filter` property applies visual effects like blurring, brightness adjustment, grayscale, and more.

```css
img {
  filter: blur(5px); /* Blurs the image by 5 pixels */
}
```

You can chain multiple filters together:

```css
img {
  filter: grayscale(100%) brightness(1.2);
}
```

### Common `filter` Functions

* **blur(px)**: Applies a Gaussian blur.
* **brightness(%) or (1.2)**: Adjusts brightness (1 is default, less than 1 is darker, more than 1 is brighter).
* **contrast(%)**: Adjusts contrast.
* **grayscale(%)**: Converts to grayscale (100% is full grayscale).
* **sepia(%)**: Applies a warm, brownish tone (vintage effect).
* **invert(%)**: Inverts the colors.
* **opacity(%)**: Controls transparency.
* **saturate(%)**: Adjusts color saturation.
* **hue-rotate(deg)**: Rotates the hue of all colors.

These are often used with images or background elements for stylistic effects or visual emphasis.

---

## `mix-blend-mode`

This property determines how an element’s content blends with the content behind it.

```css
.image {
  mix-blend-mode: multiply;
}
```

### Common `mix-blend-mode` values

* **normal**: Default; no blending.
* **multiply**: Darkens based on background.
* **screen**: Brightens the image.
* **overlay**: Mix of multiply and screen for high contrast.
* **difference**: Subtracts colors from each other.
* **lighten / darken**: Keeps the lightest or darkest pixels.

Used for image effects, layered designs, or when you want foreground content to interact with backgrounds.

---

## `background-blend-mode`

This works like `mix-blend-mode` but for background layers (like background image + background color).

```css
.box {
  background-color: blue;
  background-image: url("stars.png");
  background-blend-mode: overlay;
}
```

This can create dramatic effects when layering images with gradients or solid colors.

### Common use-cases

* Create image overlays with color without editing the image.
* Add artistic filters to enhance mood or branding.
* Combine multiple visual layers in creative layouts.

---

## Summary

Filters and blending modes are valuable tools to visually transform and combine elements. They give you precise control over how things look without needing image editing tools, making your designs more dynamic and engaging.
