# CSS Transitions and Animations

CSS lets you create smooth, engaging visual effects through **transitions** and **animations**. These features allow changes in properties like position, size, color, and rotation to happen gradually, rather than instantly.

---

## Transitions

A **transition** lets you animate changes in CSS property values.

```css
.box {
  transition: all 0.5s ease;
}
```

### Syntax

```css
transition: [property] [duration] [timing-function] [delay];
```

* **property** – what to animate (e.g., `width`, `background-color`, or `all` for everything).
* **duration** – how long the change takes (`s` for seconds, `ms` for milliseconds).
* **timing-function** – controls speed curve: `ease`, `linear`, `ease-in`, `ease-out`, etc.
* **delay** (optional) – wait before starting the transition.

### Example

```css
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}
.button:hover {
  background-color: green;
}
```

When you hover, the background color fades from blue to green over 0.3 seconds.

---

## Transform

The `transform` property allows you to visually manipulate an element by moving, scaling, or rotating it.

### Common functions

* `translateX(50px)` – moves right by 50px
* `scale(1.5)` – makes element 1.5x bigger
* `rotate(45deg)` – rotates 45 degrees clockwise

### Example

```css
.box {
  transform: scale(1.2);
  transition: transform 0.4s ease-in-out;
}
.box:hover {
  transform: scale(1.5) rotate(10deg);
}
```

On hover, the box grows and slightly rotates smoothly.

---

## Keyframes and `animation`

Use `@keyframes` to define a sequence of steps for more complex animations.

### Example

```css
@keyframes slideIn {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
}

.banner {
  animation: slideIn 1s ease-out;
}
```

### Animation shorthand

```css
animation: [name] [duration] [timing] [delay] [iteration-count] [direction];
```

* **name** – name of your `@keyframes`
* **duration** – how long the animation lasts
* **timing** – speed curve (`ease`, `linear`, etc.)
* **delay** – optional wait before starting
* **iteration-count** – `infinite` or a number of loops
* **direction** – normal, reverse, alternate, etc.

---

## Summary Table

| Feature      | What It Does                                 |
| ------------ | -------------------------------------------- |
| `transition` | Animates change in property (on hover, etc.) |
| `transform`  | Moves, rotates, scales elements              |
| `@keyframes` | Defines step-by-step animation sequences     |
| `animation`  | Runs keyframe-based animation                |

---
