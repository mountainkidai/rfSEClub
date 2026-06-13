# CSS Transforms: 2D and 3D

CSS transforms allow elements to be visually manipulated in 2D and 3D space. This includes moving, rotating, scaling, and skewing elements without changing the actual document layout.

---

## 2D Transforms

### `translate(x, y)`

Moves the element from its current position.

```css
transform: translate(50px, 20px);
```

* Moves 50px to the right and 20px down.

### `rotate(angle)`

Rotates the element clockwise or counter-clockwise.

```css
transform: rotate(45deg);
```

* Rotates the element 45 degrees clockwise.

### `scale(x, y)`

Resizes the element.

```css
transform: scale(1.5, 2);
```

* 1.5 times wider and 2 times taller.

### `skew(x-angle, y-angle)`

Skews the element along the x and/or y axis.

```css
transform: skew(30deg, 10deg);
```

---

## 3D Transforms

To use 3D transforms, the element needs perspective, which determines how far the viewer is from the z-plane.

### `perspective(value)`

Defines how far the object is from the viewer. Smaller values create a more dramatic 3D effect.

```css
.container {
  perspective: 800px;
}
```

### `translate3d(x, y, z)`

Moves the element in 3D space.

```css
transform: translate3d(50px, 20px, 100px);
```

* x and y are similar to `translate`, z controls depth.

### `rotate3d(x, y, z, angle)`

Rotates the element in 3D space.

```css
transform: rotate3d(1, 1, 0, 45deg);
```

* Rotates around the vector (1,1,0) by 45 degrees.

### `scale3d(x, y, z)`

Scales the element in all three directions.

```css
transform: scale3d(1.2, 1.2, 1);
```

---

## Combining Transforms

You can chain multiple transforms in one declaration:

```css
transform: rotate(30deg) translateX(100px) scale(1.2);
```

---

## Summary

CSS transforms give you powerful control over the appearance of elements in both 2D and 3D space, enabling dynamic visual effects and interactions without requiring JavaScript.
