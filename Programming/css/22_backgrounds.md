# CSS Backgrounds

The `background` properties in CSS allow you to control how the background of an element looks. You can apply colors, images, and control their size, position, and repetition.

---

## `background-color`

Sets the background color of an element.

```css
.element {
  background-color: lightblue;
}
```

* Accepts color names, hex codes, rgb, hsl, etc.

---

## `background-image`

Adds an image as the background of an element.

```css
.element {
  background-image: url('bg-pattern.png');
}
```

* You can use any valid image URL.
* Works together with other background properties.

---

## `background-size`

Controls the size of the background image.

```css
.element {
  background-image: url('bg.jpg');
  background-size: cover;
}
```

* `cover`: Fills the element while maintaining aspect ratio.
* `contain`: Fits the image completely inside the element.
* You can also use exact sizes (e.g., `100px 200px`).

---

## `background-repeat`

Determines if/how the background image is repeated.

```css
.element {
  background-image: url('pattern.png');
  background-repeat: no-repeat;
}
```

* `repeat` (default): Repeats both horizontally and vertically.
* `repeat-x`, `repeat-y`: Repeat in one direction.
* `no-repeat`: Shows the image only once.

---

## `background-position`

Sets where the background image starts inside the element.

```css
.element {
  background-image: url('bg.png');
  background-position: center center;
}
```

* Accepts keywords (`top`, `bottom`, `left`, `right`, `center`).
* Can also use exact values (e.g., `10px 20px`).

---

## Putting It All Together

You can combine all background properties:

```css
.element {
  background: url('img.jpg') no-repeat center center / cover;
}
```

* This shorthand sets image, repeat, position, and size in one line.
