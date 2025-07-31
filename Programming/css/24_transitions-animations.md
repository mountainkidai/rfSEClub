# CSS Transitions and Animations

CSS helps us add smooth motion and effects to websites using **Transitions** and **Animations**. These effects make things like color or size changes feel smooth and natural.

---

## What are Transitions?

A **transition** means a change happens slowly and smoothly — not instantly.

### Real-world example

When a traffic light changes from red to green, it doesn’t blink — it changes gradually. That’s like a transition in CSS.

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

When you move your mouse over the button, its color changes from blue to green smoothly in 0.3 seconds.

---

### Transition Syntax

```css
transition: [property] [duration] [timing-function] [delay];
```

| Part               | What It Means                                  |
| ------------------ | ---------------------------------------------- |
| `property`         | What you want to animate (e.g. `color`, `all`) |
| `duration`         | How long the change takes (`0.5s`, `200ms`)    |
| `timing-function`  | Speed pattern of the change (`ease`, `linear`) |
| `delay` (optional) | How long to wait before starting the animation |

### Timing Functions

| Name          | Description                           |
| ------------- | ------------------------------------- |
| `linear`      | Same speed from start to end          |
| `ease`        | Starts slow, speeds up, then slows    |
| `ease-in`     | Starts slow, ends fast                |
| `ease-out`    | Starts fast, ends slow                |
| `ease-in-out` | Slow at start and end, fast in middle |

---

## Using `transform` with Transitions

The `transform` property changes **how an element looks** — like its size, angle, or position.

### Common `transform` values

* `translateX(50px)` – Move the element right by 50px
* `scale(1.5)` – Make it 1.5× bigger
* `rotate(45deg)` – Turn it 45° clockwise

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

When you hover over the box, it grows and turns a little — smoothly.

---

## What are Animations?

**Animations** can create more complex movement. They let you define **multiple steps** of change and can run automatically (not just on hover).

### Example

```css
@keyframes slideIn {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(0); }
}

.banner {
  animation: slideIn 1s ease-out;
}
```

This moves the banner from left to its place when the page loads.

---

### Animation Syntax

```css
animation: [name] [duration] [timing] [delay] [iteration-count] [direction];
```

| Part              | What It Means                                    |
| ----------------- | ------------------------------------------------ |
| `name`            | Name of the keyframes to use                     |
| `duration`        | How long the animation runs                      |
| `timing`          | Speed curve (`ease`, `linear`, etc.)             |
| `delay`           | Wait time before it starts (optional)            |
| `iteration-count` | Number of times it repeats (`infinite` is valid) |
| `direction`       | Direction of play (`normal`, `reverse`, etc.)    |

### Animation Directions

* `normal` – Play forward
* `reverse` – Play backward
* `alternate` – Forward then backward
* `alternate-reverse` – Backward then forward

---

## Summary Table

| Feature      | What It Does                                      |
| ------------ | ------------------------------------------------- |
| `transition` | Smoothly changes style during an event like hover |
| `transform`  | Visually changes size, position, or angle         |
| `@keyframes` | Defines animation steps for `animation` to follow |
| `animation`  | Runs a sequence of style changes (auto or looped) |

---

## Final Tip

Use **transitions** for simple changes like hover effects.
Use **animations** for longer, repeated, or auto-run effects like banners or loaders.
