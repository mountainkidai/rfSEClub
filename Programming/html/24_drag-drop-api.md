# Drag and Drop API in HTML

The Drag and Drop API allows you to drag elements from one place and drop them somewhere else on the page. It's great for building interactive features like file uploads, sortable lists, and custom UI behavior.

---

## What is the Drag and Drop API?

**Definition:** It's a set of HTML and JavaScript events and attributes that let users drag elements and drop them into target locations.

You need 3 main things:

1. An element to **drag** (`draggable="true"`)
2. A place to **drop**
3. Event handlers like `ondragstart`, `ondragover`, and `ondrop`

---

## Basic Code Example

### HTML

```html
<div id="drag-me" draggable="true">Drag me!</div>
<div id="drop-here">Drop here</div>
```

### JavaScript

```javascript
// When dragging starts
const dragMe = document.getElementById("drag-me");
dragMe.ondragstart = function (event) {
  event.dataTransfer.setData("text", event.target.id);
};

// When dragging over the drop zone
const dropHere = document.getElementById("drop-here");
dropHere.ondragover = function (event) {
  event.preventDefault(); // Allows dropping
};

// When the element is dropped
 dropHere.ondrop = function (event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data);
  dropHere.appendChild(draggedElement);
};
```

### Explanation of the Code

* `draggable="true"`: Makes the first `<div>` element draggable by the user.
* `ondragstart`: This is triggered when you start dragging the element. We use `event.dataTransfer.setData` to store the ID of the dragged element.
* `ondragover`: This event fires when something is dragged over the drop area. We must use `event.preventDefault()` to allow dropping.
* `ondrop`: When the element is dropped, we again prevent the default browser behavior and retrieve the dragged element by ID. Then we move it into the drop zone using `appendChild()`.

---

## Summary Table

| Feature        | Purpose                                     |
| -------------- | ------------------------------------------- |
| `draggable`    | Makes an element draggable                  |
| `ondragstart`  | Triggered when drag starts                  |
| `ondragover`   | Allows drop zone to accept a dragged item   |
| `ondrop`       | Handles the logic when item is dropped      |
| `dataTransfer` | Holds dragged data to transfer across zones |

---

## Real-World Uses

* Dragging and dropping files for upload
* Custom UI layout editors
* Building Kanban boards or Trello-style apps
* Sorting lists visually
