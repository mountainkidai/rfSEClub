# Props: How Components Receive Data

> **Goal:** Understand what props are, why React uses them, how they flow through components, why they are read-only, and why `children` is just another prop.

---

## Big idea

A React component is just a **JavaScript function**.

That means it needs **input** the same way normal functions do.

- A function takes input.
- It processes that input.
- It returns output.

React components follow the same pattern.

---

## First principles

Imagine a normal function:

```javascript
function square(number) {
  return number * number;
}
```

Now call it with different inputs:

```javascript
square(2); // 4
square(5); // 25
```

The function stays the same.
Only the input changes.

### Mental model

```text
Function
+
Different input
↓
Different output
```

That is the basic idea behind props.

---

## React uses the same idea

Suppose we have this component:

```jsx
function Greeting(name) {
  return <h1>Hello {name}</h1>;
}
```

In React, components usually do **not** receive many separate arguments.
Instead, React passes **one object**.

That object is called **props**.

A more correct version is:

```jsx
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}
```

Here `props` is just a normal JavaScript object.

---

## What are props?

**Props** is short for **properties**.

A prop is simply a piece of data passed from one component to another.
Think of props as the **input** to a component.

```text
Props
↓
Component
↓
React Elements
```

The parent sends data.
The child receives it.
The child uses it to render UI.

---

## First example

```jsx
<Greeting name="Aariv" />
```

This looks like JSX magic, but internally React treats it like this:

```javascript
Greeting({
  name: "Aariv",
});
```

So the component receives one object with all the props inside it.

Inside the component, this works:

```jsx
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}
```

If the object is:

```javascript
{
  name: "Aariv";
}
```

then `props.name` is `"Aariv"`.

---

## Destructuring

JavaScript has a feature called **object destructuring**.

Instead of writing:

```javascript
props.name;
```

over and over, we can extract the value directly:

```jsx
function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}
```

This is not a React feature.
It is plain JavaScript.

React passes the object.
JavaScript lets us unpack it.

---

## One component, many outputs

Same component.
Different input.
Different output.

```jsx
<Greeting name="Aariv" />
```

Internally:

```javascript
Greeting({
  name: "Aariv",
});
```

Output:

```text
Hello Aariv
```

Later:

```jsx
<Greeting name="Phunsuk" />
```

Internally:

```javascript
Greeting({
  name: "Phunsuk",
});
```

Output:

```text
Hello Phunsuk
```

### Core idea

```text
Same component
+
Different props
↓
Different UI
```

---

## Why React uses one object

Imagine a component with many separate arguments:

```javascript
LessonCard(title, level, duration, teacher, language, completed, price, rating);
```

That becomes messy quickly.
Adding new data means changing the function signature again and again.

An object scales much better:

```javascript
LessonCard({
  title,
  level,
  duration,
  teacher,
  language,
  completed,
  price,
  rating,
});
```

Now you can add more fields without changing the basic way the component receives input.

---

## Components become templates

Think of a **cookie cutter**.

The cutter stays the same.
Only the dough changes.

```text
Cookie Cutter + Different Dough → Different Cookies
```

A React component is the cutter.
Props are the dough.

That is why the same component can create many different screens.

---

## Multiple props

Suppose your lesson card needs three pieces of data:

| Prop       | Type   | Example      |
| ---------- | ------ | ------------ |
| `title`    | string | `"HTTP"`     |
| `level`    | string | `"Beginner"` |
| `duration` | number | `45`         |

You pass them like this:

```jsx
<LessonCard title="HTTP" level="Beginner" duration={45} />
```

Internally, React calls the component like this:

```javascript
LessonCard({
  title: "HTTP",
  level: "Beginner",
  duration: 45,
});
```

> **Important:** Not three arguments. **One object.**

---

## Props are read-only

One of React’s most important rules is:

> **Never modify props.**

Props belong to the **parent** component.
The child may read them, but should never change them.

### Wrong

```javascript
props.name = "MountainKid";
```

### Right

```javascript
const displayName = props.name;
```

### Passport analogy

If a friend gives you their passport, you can look at it.
You cannot rewrite their name.

That is how props work.
They are passed in for reading, not editing.

---

Sure — here’s a simple explanation with example.

## Data flows down

In React, data usually moves from a **parent** component to a **child** component.

### Example

```jsx
function App() {
  const user = "Aariv";

  return <HomePage user={user} />;
}

function HomePage({ user }) {
  return <LessonCard user={user} />;
}

function LessonCard({ user }) {
  return <h1>Hello {user}</h1>;
}
```

### What happens here

- `App` has the data: `"Aariv"`.
- It sends that data to `HomePage`.
- `HomePage` sends it to `LessonCard`.
- `LessonCard` displays it.

### Easy way to remember

- Parent gives data.
- Child receives data.
- Child does not go and take data from parent by itself.

So this is **one-way data flow**.

---

## `children` is just another prop

When you put content inside a component, React stores that content in a prop called `children`.

### Example

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
```

### Using it

```jsx
<Card>
  <h1>Hello</h1>
  <p>Welcome</p>
</Card>
```

### What React sees

```jsx
Card({
  children: (
    <>
      <h1>Hello</h1>
      <p>Welcome</p>
    </>
  ),
});
```

### Meaning

- `children` is not magic.
- It is just a prop.
- The difference is that React fills it automatically from the content written between the tags.

---

## Simple comparison

### Normal prop

```jsx
<Card title="My Card" />
```

```jsx
function Card({ title }) {
  return <h2>{title}</h2>;
}
```

### Children prop

```jsx
<Card>
  <p>Hello</p>
</Card>
```

```jsx
function Card({ children }) {
  return <div>{children}</div>;
}
```

### Main idea

- `title` is data passed by name.
- `children` is data passed by nesting.

---

## Short version

- **Data flows down** = parent to child.
- **`children`** = nested content inside a component.
- `children` is just **one prop** inside `props`.

## Default values

Sometimes a prop is optional.
If the parent does not pass it, you can give it a default value.

```jsx
function Greeting({ name = "Guest" }) {
  return <h1>Hello {name}</h1>;
}
```

Now this works:

```jsx
<Greeting />
```

And it renders:

```text
Hello Guest
```

Default values make components more flexible and safer.

---

## Props can contain anything

A prop does not have to be a string.
It can hold any JavaScript value.

| Type          | Example                 |
| ------------- | ----------------------- |
| String        | `title="Save"`          |
| Number        | `count={5}`             |
| Boolean       | `disabled={true}`       |
| Array         | `items={[1, 2, 3]}`     |
| Object        | `user={currentUser}`    |
| Function      | `onClick={handleClick}` |
| React element | `icon={<StarIcon />}`   |

Example:

```jsx
<Button disabled={true} count={5} user={currentUser} onClick={handleClick} />
```

All of these values are still just properties inside one props object.

---

## Internal picture

When React sees this:

```jsx
<Button text="Save" disabled={false} />
```

It is conceptually similar to this:

```javascript
Button({
  text: "Save",
  disabled: false,
});
```

There is no mystery.
It is just a function call with an object.

---

## Mental model

Think of a component like a machine:

```text
         Props (input)
              │
              ▼
     ┌────────────────┐
     │   Component    │
     └───────┬────────┘
              │
              ▼
       React Elements (output)
```

The component does not invent its own input.
Someone else feeds it.
The component transforms the input props into UI.

---

## Summary

Props are one of the simplest ideas in React, but also one of the most important.
They are just a JavaScript object passed into a component.
That object lets the same component produce different UI without changing the component itself.

### Key ideas

- A component always receives **one props object**.
- Destructuring is a **JavaScript feature**, not a React feature.
- Props are **read-only**.
- Data flows from **parent to child**.
- `children` is just another prop.
- Props can hold **any JavaScript value**.

Once you understand props, the next question is natural:

> If props come from the parent, how does a component remember its own data?

That is where **state** comes in.
