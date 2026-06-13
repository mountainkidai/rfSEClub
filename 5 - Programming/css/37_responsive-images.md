# Responsive Images

Responsive images are important for ensuring your website loads efficiently and looks good on devices with different screen sizes and resolutions. HTML provides several tools to help serve the most appropriate image depending on the user's device.

---

## `srcset`

The `srcset` attribute allows the browser to choose between different versions of an image based on the screen width or resolution.

```html
<img
  src="image-480w.jpg"
  srcset="image-480w.jpg 480w, image-800w.jpg 800w"
  sizes="(max-width: 600px) 480px, 800px"
  alt="A scenic landscape">
```

### Explanation

* `src`: The default image.
* `srcset`: Lists available image versions and their widths.
* `sizes`: Tells the browser how much space the image will take based on viewport width.

The browser chooses the most appropriate image file from `srcset` based on the device's display size and resolution.

---

## `sizes`

The `sizes` attribute describes the width the image will be rendered on the page. This helps the browser decide which image to load from `srcset` before rendering.

```html
sizes="(max-width: 600px) 480px, 800px"
```

* If viewport is 600px wide or less, the image will be shown at 480px.
* Otherwise, it's shown at 800px.

---

## `<picture>` Element

Use the `<picture>` element to offer different image formats or completely different images depending on media queries.

```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="fallback.jpg" alt="A scenic view">
</picture>
```

* The browser will pick the first format it supports.
* `<img>` is a fallback.

You can also use `<source>` with media conditions:

```html
<picture>
  <source media="(max-width: 600px)" srcset="small.jpg">
  <source media="(min-width: 601px)" srcset="large.jpg">
  <img src="fallback.jpg" alt="A responsive image">
</picture>
```

This method is helpful when you want to deliver a totally different image based on the device screen size.

---

## Summary

Responsive images improve performance and user experience by loading the right image for each device. Using `srcset`, `sizes`, and the `<picture>` element gives you full control over how your images adapt to various screen sizes and formats.
