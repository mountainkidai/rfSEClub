# CSS Scroll Behavior

Scroll behavior in CSS allows you to control how the browser handles scrolling actions. You can make scrolling smooth and also control snapping behavior when users scroll through content.

---

## scroll-behavior

Controls how the page scrolls when navigating to anchors or when using JavaScript `scrollIntoView()`.

```css
html {
  scroll-behavior: smooth;
}
```

* `auto`: default browser behavior (instant jump)
* `smooth`: scrolls smoothly with animation

This is useful for improving user experience in single-page applications and long documents.

---

## scroll-snap-type

Defines a scroll snapping container that makes scrolling "stick" at certain positions.

```css
.scroll-container {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  display: flex;
}
```

* First value: direction (`x`, `y`, `block`, `inline`, `both`)
* Second value: behavior (`mandatory`, `proximity`)

  * `mandatory`: always snaps
  * `proximity`: snaps only if near

Children must also declare their snap positions:

```css
.scroll-item {
  scroll-snap-align: start;
}
```

---

## scroll-padding

Defines the padding area used when snapping or scrolling to an element.

```css
html {
  scroll-padding-top: 100px;
}
```

This is useful when you have sticky headers and don’t want them to cover the element being scrolled into view.

You can use it on the scroll container to create breathing space for target items:

```css
.scroll-container {
  scroll-padding: 20px;
}
```

---

## Summary

* `scroll-behavior` makes scrolling smooth.
* `scroll-snap-type` creates snap points for scroll containers.
* `scroll-padding` ensures space around elements scrolled into view.

These properties give better control over how content scrolls and aligns, improving both functionality and visual experience.
