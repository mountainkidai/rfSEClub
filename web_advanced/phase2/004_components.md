# React Components — Functions That Describe UI

## Goal

Understand what a React component really is, why it is just a JavaScript function, how React executes components, why components run again, what rendering actually means, and why components are meant to describe UI rather than directly modify the browser.

---

## The Big Misconception

One of the most common misunderstandings in React is this idea:

> A component is some special React object.

That is not true.

A React component is simply a **JavaScript function**.

That is the whole foundation.

If this idea becomes clear, then props, rendering, re-rendering, composition, and React's whole architecture start making much more sense.

---

## Start With Plain JavaScript

Before talking about React, begin with ordinary JavaScript functions.

```javascript
function add(a, b) {
  return a + b;
}
```

Now call it:

```javascript
add(2, 3);
```

The output is:

```javascript
5;
```

Nothing magical happened.

- JavaScript saw a function.
- JavaScript executed that function.
- The function returned a value.

That is all.

A function is just:

- Some input.
- Some logic.
- Some output.

This is the first principle you need for React.

---

## A React Component Follows the Same Rule

Now look at a React component:

```jsx
function Greeting() {
  return <h1>Hello</h1>;
}
```

This may look special because of the JSX, but structurally it is still just a function.

- It has a name.
- It can be executed.
- It returns something.

The only important difference is this:

- A normal JavaScript function might return a number, string, or object.
- A React component returns a **description of UI**.

So this is the right mental model:

```text
Normal Function
→ returns data

React Component
→ returns UI description
```

---

## Why JSX Feels Misleading

Many beginners think this:

```jsx
function Greeting() {
  return <h1>Hello</h1>;
}
```

means the component is returning HTML.

It is not.

JSX only looks like HTML because that syntax is easier for humans to read and write.

The JavaScript engine does not understand JSX directly. Before the code runs, a compiler such as SWC or Babel transforms that JSX into normal JavaScript.

So this:

```jsx
function Greeting() {
  return <h1>Hello</h1>;
}
```

becomes something conceptually like this:

```javascript
function Greeting() {
  return React.createElement("h1", null, "Hello");
}
```

That means the component is still just returning normal JavaScript values.

---

## What Does `React.createElement()` Return?

Another major misunderstanding is that `React.createElement()` creates real DOM nodes.

It does not.

It creates a plain JavaScript object that describes what should exist.

Conceptually, this:

```javascript
React.createElement("h1", null, "Hello");
```

produces something like this:

```javascript
{
  type: "h1",
  props: {
    children: "Hello"
  }
}
```

This object is often called a **React element**.

Notice what this object is not:

- It is not HTML.
- It is not a DOM node.
- It is not visible on the screen.
- It is not inside the browser's document yet.

It is just data.

That data says:

- The element type should be `h1`.
- Its children should be the text `Hello`.

So the component returns an object tree that describes the interface.

---

## A Better Mental Model: Blueprint, Not Building

A React element is like a blueprint.

```text
Blueprint
├── Living Room
├── Kitchen
├── Bedroom
└── Bathroom
```

A blueprint is not the real house.

- You cannot live inside it.
- You cannot open its door.
- You cannot sit in its kitchen.

It is only a description of what the house should become.

A React element works in exactly the same way.

- It is not the UI on the screen.
- It is a description of the UI that should appear.

This single distinction explains a lot of React.

---

## Components Return React Elements

Now combine the previous ideas.

A component is a function.
A function returns a value.
In React, that value is usually a React element or a tree of React elements.

Example:

```jsx
function Greeting() {
  return (
    <div>
      <h1>Hello Aariv</h1>
      <button>Click Me</button>
    </div>
  );
}
```

After compilation, this becomes conceptually similar to:

```javascript
function Greeting() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello Aariv"),
    React.createElement("button", null, "Click Me"),
  );
}
```

And that leads to objects that conceptually look like this:

```javascript
{
  type: "div",
  props: {
    children: [
      {
        type: "h1",
        props: {
          children: "Hello Aariv"
        }
      },
      {
        type: "button",
        props: {
          children: "Click Me"
        }
      }
    ]
  }
}
```

So when a component returns JSX, it is really returning a nested object structure that describes the UI.

---

## Who Executes the Component?

This is another place where confusion happens.

Many beginners assume one of these is true:

- The browser calls the component.
- HTML calls the component.
- The DOM creates the component.

None of those are correct.

**React calls the component.**

When you write:

```jsx
<Greeting />
```

React treats that as a component to execute.
Conceptually, it is similar to:

```javascript
Greeting();
```

Of course, internally React does more than this, but this is the right first-principles mental model.

So the flow is:

```text
You define component
→ React calls component
→ component returns React elements
→ React uses that result to understand the UI
```

---

## Components Are Like Recipes

A helpful analogy is a recipe.

A recipe is not the food itself.
It is a set of instructions for producing food.

```text
Recipe
   ↓
Cook follows instructions
   ↓
Dish is produced
```

A React component is like that recipe.

```text
Component
   ↓
React executes function
   ↓
React elements are produced
```

The component is not the final screen.
It is the instruction set that tells React what the UI should look like at that moment.

And just like a recipe can be used again and again, a component can be executed again and again.

---

## Components Can Receive Input

Normal functions can accept arguments.

```javascript
function multiply(a, b) {
  return a * b;
}
```

Called like this:

```javascript
multiply(5, 10);
```

React components also receive input.
In React, that input is called **props**.

Example:

```jsx
<Greeting name="Aariv" />
```

Conceptually, React is doing something similar to:

```javascript
Greeting({
  name: "Aariv",
});
```

This is important.

Props are not mysterious.
Props are just a normal JavaScript object passed into a function.

That means this component:

```jsx
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}
```

is simply reading data from the input object.

---

## Destructuring Props Is Just JavaScript

React beginners often think this syntax is some special React feature:

```jsx
function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}
```

It is not.

This is ordinary JavaScript object destructuring.

These two versions mean the same thing:

```jsx
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}
```

and

```jsx
function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}
```

The second version is just shorter and cleaner.

---

## What Does “Pure UI” Mean?

This is one of the most important ideas in React.

Suppose you have this function:

```javascript
function add(a, b) {
  return a + b;
}
```

If you call:

```javascript
add(2, 3);
```

you expect the answer to be `5` every time.

You do not expect:

- Sometimes `5`
- Sometimes `42`
- Sometimes `-8`

A good function behaves predictably.

React wants components to behave in the same general way.
Given the same inputs, the component should return the same UI description.

Example:

```jsx
function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}
```

If `name` is `"Aariv"`, then the returned UI should always describe:

```text
Hello Aariv
```

That is what people mean when they say components should be **pure**.

A pure component is one that simply looks at its inputs and describes the UI based on them.

---

## Components Are Not Created Once

This surprises almost everyone at first.

Many people imagine a component like a physical object that gets created once and then permanently sits there.

That is not how React works.

A component function can run many times.

For example:

- The page loads.
- React executes the component.
- State changes.
- React executes the component again.
- Props change.
- React executes the component again.

So this is a better mental model:

```text
Component
≠ permanent object on screen

Component
= function React can call whenever it needs a fresh UI description
```

This is why re-rendering is normal.
It does not mean React is rebuilding everything from scratch in the browser every single time. It means React is asking the function again: what should the UI look like now?

---

## Why Components Re-render

Consider this component:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

When the page first appears:

- `count` is `0`
- React executes `Counter()`
- React gets a UI description for a button showing `0`

Now suppose the user clicks the button.

That calls:

```javascript
setCount(count + 1);
```

Now React knows something changed.
So it asks the key question again:

> Given the latest state, what should the UI look like now?

How does React find the answer?

It calls the component again.

```javascript
Counter();
```

Now `count` is `1`, so the new returned React elements describe:

```text
<button>1</button>
```

That is why components re-render.

A re-render simply means React executes the component again to get an updated UI description.

---

## Rendering Does Not Mean DOM Update

This is one of the most important distinctions in React.

Many developers think this:

```text
Render
↓
Browser DOM changes
```

That is not accurate.

A more correct version is this:

```text
Render
↓
React calls components
↓
React gets new element tree
↓
React compares old and new
↓
React DOM updates browser if needed
```

So rendering does **not** mean:

- creating real DOM immediately
- updating the browser immediately
- painting pixels immediately

Rendering means React is calculating what the UI should look like.

The browser is touched later.

This distinction matters because it explains why React can plan, compare, optimize, and update only the parts that changed.

---

## From One Component to a Tree of Components

Real apps do not contain only one component.
They contain many components connected together.

Example:

```jsx
function App() {
  return (
    <Layout>
      <Navbar />
      <HomePage />
    </Layout>
  );
}
```

When React renders this, it starts from the top and keeps going deeper.
A simple mental model is:

```text
App()
  ↓
Layout()
  ↓
Navbar()
  ↓
HomePage()
```

Each component returns more React elements.
Some of those elements are built-in elements like `div`, `button`, and `h1`.
Some of them are custom components like `Layout` and `Navbar`.

Eventually, React expands everything into a complete tree describing the whole UI.

---

## Composition: Building Big UIs From Small Pieces

This is one of React's best ideas.

Instead of writing one huge component for an entire page, you split the UI into smaller focused components.

Example:

```text
LessonPage
├── Navbar
├── Sidebar
├── LessonContent
└── Footer
```

Each component has one job.

- `Navbar` handles navigation.
- `Sidebar` handles side links.
- `LessonContent` handles the article body.
- `Footer` handles the bottom area.

This pattern is called **composition**.

Composition makes your code:

- easier to read
- easier to reuse
- easier to test
- easier to maintain

So a React application is really a large tree of small reusable functions.

---

## The Full Mental Model

Here is the cleanest way to think about a React component:

```text
Component
→ JavaScript function
→ React calls it
→ it returns React elements
→ React compares results over time
→ React DOM updates the browser only where needed
```

Or even more simply:

```text
Inputs in
↓
Component runs
↓
UI description out
```

That is the heart of React.

---

## Mental Model Table

| Concept       | Meaning                                                             |
| ------------- | ------------------------------------------------------------------- |
| Component     | A JavaScript function that returns React elements.                  |
| Props         | Input data passed into that function.                               |
| Rendering     | React executing the component to figure out what to display.        |
| Re-render     | React executing the component again because state or props changed. |
| React element | A plain JavaScript object describing part of the UI.                |
| Composition   | Building large UIs by combining small components.                   |
| Pure UI       | Same inputs should produce the same UI description.                 |

---

## Complete Pipeline

```text
User Action
   ↓
State Changes
   ↓
React Calls Component Again
   ↓
Component Returns React Elements
   ↓
React Compares Old and New Output
   ↓
React DOM Updates Browser DOM
   ↓
Browser Calculates Layout
   ↓
Browser Paints
   ↓
Pixels on Screen
```

Notice something important:

The component itself never directly updates the browser.

Its job is only this:

> Given the current props and state, what should the UI look like right now?

Everything after that is handled by React and React DOM.

---

## Final Thought

A React component is not a widget, not a DOM node, and not some magical React-only object.

It is a JavaScript function.

That function accepts input, runs, and returns a description of UI.
React can execute it once, execute it again, compare the results, and update the browser efficiently.

Once this idea becomes clear, React becomes much easier to reason about.

Because then every advanced topic starts resting on the same simple foundation:

- components are functions
- props are inputs
- rendering is function execution
- re-rendering is running the function again
- React elements are UI descriptions
- React DOM updates the real browser later

That is the first-principles model.
