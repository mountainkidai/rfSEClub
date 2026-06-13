# Images in HTML

Images help enrich web content visually and provide context to users.

## 1. Image Tag (`<img>`)

Used to embed images into a web page. It is a self-closing tag.

```html
<img src="image.jpg" alt="Description of image" />
```

## 2. Attributes

### `src` (Source)

Defines the path to the image file.

* Can be relative or absolute.

```html
<img src="/images/logo.png" />
<img src="https://example.com/banner.jpg" />
```

### `alt` (Alternative Text)

Provides text to display if the image cannot load. Also important for screen readers and accessibility.

```html
<img src="photo.jpg" alt="A photo of a sunset" />
```

### `width` and `height`

Used to specify image dimensions. You can use pixels or percentages.

```html
<img src="icon.png" width="100" height="100" />
<img src="icon.png" width="50%" />
```

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Images Example</title>
</head>
<body>
  <h1>My Photo Gallery</h1>

  <img src="dog.jpg" alt="A cute dog" width="300" />
  <img src="nature.jpg" alt="Scenic mountain view" height="200" />

  <p>Logo:</p>
  <img src="/assets/logo.png" alt="Company Logo" width="150" />
</body>
</html>
```
