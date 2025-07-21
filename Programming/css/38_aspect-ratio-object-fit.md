# Aspect Ratio and Object Fit

Understanding how images and videos behave inside their containers is essential for responsive and consistent layout design. Two important properties for this are `aspect-ratio` and `object-fit`.

---

## aspect-ratio

This property defines the width-to-height ratio of an element. It ensures that an element maintains its shape as it resizes.

```css
.box {
  aspect-ratio: 16 / 9;
}
```

* `16 / 9` means the width will always be 16 units for every 9 units of height.
* Common ratios: `1 / 1` (square), `4 / 3`, `3 / 2`, `21 / 9`

If no height or width is set, the browser uses the ratio to calculate the missing value.

### Example

```css
.image-container {
  width: 100%;
  aspect-ratio: 4 / 3;
  background-color: lightblue;
}
```

This container will maintain a 4:3 ratio no matter its width.

---

## object-fit

This property controls how content like images or videos are resized to fit their container.

```css
img {
  width: 300px;
  height: 200px;
  object-fit: cover;
}
```

### Common values

* `fill`: Stretches the content to fill the container, may distort the image.
* `contain`: Scales the content to fit inside the container, maintaining aspect ratio. May leave empty space.
* `cover`: Fills the container and maintains aspect ratio, but may crop the content.
* `none`: Keeps original size.
* `scale-down`: Chooses between `none` or `contain`, whichever results in smaller image.

---

## object-position

Used with `object-fit` to control the alignment of content inside the container.

```css
img {
  object-fit: cover;
  object-position: top right;
}
```

* You can use keywords like `top`, `bottom`, `left`, `right`, or coordinates like `50% 50%`.
* This is helpful when part of an image is being cropped and you want to control which part stays visible.

---

## Summary

* Use `aspect-ratio` to maintain consistent shapes.
* Use `object-fit` to control how media content fills its container.
* Use `object-position` to adjust the visible area when cropping occurs.

These properties are especially useful in responsive design and media galleries.
