# Advanced CSS Animations

CSS provides more fine-tuned control over animations using several advanced properties. These include setting delays, repetitions, and behavior before or after the animation runs.

---

## animation-delay

This property defines how long to wait before the animation starts.

```css
.box {
  animation-name: fadeIn;
  animation-duration: 2s;
  animation-delay: 1s;
}
```

* `1s` means the animation will start after 1 second.

---

## animation-iteration-count

Controls how many times the animation should repeat.

```css
.box {
  animation-name: bounce;
  animation-duration: 1s;
  animation-iteration-count: 3;
}
```

* Use a number like `3` for specific repetitions.
* Use `infinite` to repeat the animation forever.

---

## animation-fill-mode

This determines the styles applied to an element before and after the animation runs.

```css
.box {
  animation-name: slideIn;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}
```

* `none`: default. No styles are retained before or after the animation.
* `forwards`: element keeps the final style after the animation ends.
* `backwards`: element applies the starting keyframe style during the delay.
* `both`: applies both `forwards` and `backwards` behaviors.

---

## Example with all three

```css
@keyframes slideIn {
  from { transform: translateX(-100px); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
}

.box {
  animation-name: slideIn;
  animation-duration: 2s;
  animation-delay: 0.5s;
  animation-iteration-count: 2;
  animation-fill-mode: both;
}
```

This animation starts after 0.5s, runs twice, and the element keeps both the starting and ending styles during and after animation.
