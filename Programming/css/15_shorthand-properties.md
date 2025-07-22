# CSS Shorthand Properties

CSS shorthand properties let you set multiple related CSS properties in a single line, making your code cleaner and more concise.

---

## Shorthand for `padding`

Instead of writing:

```css
padding-top: 10px;
padding-right: 20px;
padding-bottom: 10px;
padding-left: 20px;
```

You can use:

```css
padding: 10px 20px;
```

### How It Works

* **1 value**: Applies to all sides (top, right, bottom, left).

  ```css
  padding: 10px; /* all sides */
  ```

* **2 values**: First is top/bottom, second is left/right.

  ```css
  padding: 10px 20px; /* top & bottom = 10px, left & right = 20px */
  ```

* **3 values**: Top, horizontal (left/right), bottom.

  ```css
  padding: 10px 15px 20px;
  ```

* **4 values**: Top, right, bottom, left (clockwise).

  ```css
  padding: 10px 20px 30px 40px;
  ```

---

## Shorthand for `margin`

Works the same way as padding.

```css
margin: 5px 10px 15px 20px;
```

This sets:

* Top: 5px
* Right: 10px
* Bottom: 15px
* Left: 20px

Or just:

```css
margin: 10px;
```

This sets all four sides to 10px.

---

## Shorthand for `border`

Combines border width, style, and color into one line.

Instead of writing:

```css
border-width: 2px;
border-style: solid;
border-color: blue;
```

You can write:

```css
border: 2px solid blue;
```

### Examples

```css
border: 1px dashed red;
border: 3px dotted green;
border: 0;
```

---

## Example

```css
.box {
  margin: 20px 10px;
  padding: 15px 5px;
  border: 2px solid black;
}
```

This makes a box with:

* Top and bottom margin of 20px, left and right margin of 10px
* Top and bottom padding of 15px, left and right padding of 5px
* Solid black border of 2px on all sides
