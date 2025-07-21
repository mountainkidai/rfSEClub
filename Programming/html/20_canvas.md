# Canvas in HTML

The `<canvas>` element in HTML is a powerful tool used to draw graphics, animations, and even games directly in the browser. It's like a blank sheet of paper where you can draw shapes, lines, images, and more using JavaScript.

---

## What is `<canvas>`?

**Definition:**

* The `<canvas>` tag creates a rectangular drawing area in your HTML page.
* It doesn’t draw anything by itself — you need to use JavaScript to draw on it.

**Syntax:**

```html
<canvas id="myCanvas" width="300" height="150"></canvas>
```

This creates a blank 300x150 pixel area.

If the browser does not support canvas, you can write fallback content inside it:

```html
<canvas>Your browser does not support canvas.</canvas>
```

---

## Accessing the 2D Drawing Context

To draw on the canvas, you need to get its drawing context in JavaScript:

```html
<canvas id="myCanvas" width="300" height="150"></canvas>

<script>
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
</script>
```

`ctx` is the 2D drawing context — a set of functions for drawing on the canvas.

---

## Drawing Basic Shapes

### 1. Drawing a Rectangle

```javascript
ctx.fillStyle = "blue";       // Set fill color
ctx.fillRect(50, 20, 100, 50); // Draw filled rectangle (x, y, width, height)
```

### 2. Drawing a Line

```javascript
ctx.beginPath();
ctx.moveTo(10, 10);     // Starting point
ctx.lineTo(200, 100);   // Ending point
ctx.stroke();           // Draw the line
```

### 3. Drawing a Circle

```javascript
ctx.beginPath();
ctx.arc(150, 75, 50, 0, 2 * Math.PI); // (x, y, radius, startAngle, endAngle)
ctx.stroke();
```

### 4. Drawing Text

```javascript
ctx.font = "20px Arial";
ctx.fillText("Hello Canvas!", 60, 130);
```

---

## Animation Basics

Canvas allows you to animate objects by continuously clearing and redrawing them.

### Simple Animation Example

```html
<canvas id="myCanvas" width="300" height="150"></canvas>

<script>
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  let x = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous frame
    ctx.fillStyle = "green";
    ctx.fillRect(x, 50, 50, 50); // Draw a moving square
    x += 2; // Move right
    if (x > canvas.width) x = -50; // Reset when out of bounds
    requestAnimationFrame(draw); // Keep animating
  }

  draw(); // Start animation
</script>
```

This will animate a green box moving left to right across the canvas.

---

## Summary

* The `<canvas>` tag is used for drawing graphics on the web.
* Use `getContext("2d")` to get drawing functions.
* You can draw rectangles, lines, circles, text, and more.
* Combine `clearRect` and `requestAnimationFrame` to create animations.

Canvas is a powerful foundation for creating games, charts, and custom graphics in the browser. It gives you full control over every pixel!
