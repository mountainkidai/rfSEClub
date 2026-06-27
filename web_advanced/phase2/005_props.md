Props: How Components Receive Data

> **Goal:** Understand what props are, why React needs them, how React passes them internally, why they are immutable, and why `children` is just another prop.

In the previous chapter, we learned that a React component is just a JavaScript function.

Now a new question appears.

Suppose we have this component.

```jsx
function Greeting() {
  return <h1>Hello</h1>;
}
```

No matter how many times React executes this function,

it always returns

```text
Hello
```

What if we want

```text
Hello Aariv
```

or

```text
Hello Sarika
```

or

```text
Hello MountainKid
```

Should we create

three different components?

Of course not.

Let's solve this problem from first principles.

---

# First Principles

Imagine a normal JavaScript function.

```javascript
function square(number) {
  return number * number;
}
```

Now call it.

```javascript
square(2);
```

Output

```text
4
```

Call it again.

```javascript
square(5);
```

Output

```text
25
```

Notice something.

The function itself

didn't change.

Only

its input changed.

```text
Function

+

Different Inputs

↓

Different Outputs
```

This is one of the most fundamental ideas

in programming.

---

# React Uses The Same Idea

Suppose

we have

```jsx
function Greeting(name) {
  return <h1>Hello {name}</h1>;
}
```

React components

also need inputs.

But instead of

passing many separate arguments,

React always passes

**one object**.

This object

is called

> **Props**

---

# What Are Props?

The word

**Props**

is short for

> **Properties**

A prop

is simply

a piece of data

passed

from one component

to another.

Think of props as

the **input**

to a component.

```text
Props

↓

Component

↓

React Elements
```

---

# First Example

Suppose

you write

```jsx
<Greeting name="Aariv" />
```

Most beginners think

React somehow

magically understands

this syntax.

It doesn't.

Internally,

React eventually performs

something similar to

```javascript
Greeting({
  name: "Aariv",
});
```

Notice

React always passes

one object.

That object

contains

every prop.

---

# The Component Receives The Object

You can write

```jsx
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}
```

Here

`props`

is simply

a JavaScript object.

```javascript
{
  name: "Aariv";
}
```

Nothing special.

---

# Destructuring

JavaScript has

a feature called

**Object Destructuring**.

Instead of writing

```javascript
props.name;
```

everywhere,

we can extract

the property.

```jsx
function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}
```

This is **not**

a React feature.

It is

ordinary JavaScript.

React simply passes

the object.

JavaScript

destructures it.

---

# One Component, Many Outputs

Suppose

React executes

```jsx
<Greeting name="Aariv" />
```

Internally

```javascript
Greeting({
  name: "Aariv",
});
```

Output

```text
Hello Aariv
```

Later

React executes

```jsx
<Greeting name="Sarika" />
```

Internally

```javascript
Greeting({
  name: "Sarika",
});
```

Output

```text
Hello Sarika
```

Same function.

Different input.

Different UI.

Exactly like

normal programming.

---

# Components Become Templates

Imagine

a cookie cutter.

The cutter

never changes.

Only

the dough changes.

```text
Cookie Cutter

+

Different Dough

↓

Different Cookies
```

A component

is the cutter.

Props

are the dough.

---

# Multiple Props

Suppose

your lesson card

needs

```text
Title

Level

Duration
```

React simply puts

everything

inside

one object.

```jsx
<LessonCard title="HTTP" level="Beginner" duration={45} />
```

Internally

React passes

```javascript
LessonCard({
  title: "HTTP",

  level: "Beginner",

  duration: 45,
});
```

Notice

there aren't

three arguments.

Only one.

---

# Why One Object?

Imagine

React allowed

this.

```javascript
LessonCard(

    title,

    level,

    duration,

    teacher,

    language,

    completed,

    price,

    rating,

    ...
);
```

Eventually

the argument list

becomes enormous.

Objects scale

much better.

```javascript
{
  (title, level, duration, teacher, language, completed, price, rating);
}
```

Now

adding new data

doesn't change

the function signature.

---

# Props Are Read-Only

One of React's

most important rules

is

> **Never modify props.**

Suppose

the parent passes

```javascript
{
  name: "Aariv";
}
```

This is wrong.

```javascript
props.name = "MountainKid";
```

Why?

Imagine

your friend

hands you

their passport.

Can you

change

their name?

No.

It isn't yours.

Props belong

to

the parent component.

Children

may read them.

They should never

change them.

---

# Data Flows Down

Imagine

this tree.

```text
App

│

├── Navbar

│

├── HomePage

│

│   └── LessonCard

│

└── Footer
```

Suppose

App knows

the current user.

```javascript
{
  user: "Aariv";
}
```

It passes

that information

downward.

```text
App

↓

HomePage

↓

LessonCard
```

This is called

**One-Way Data Flow**.

Data flows

from parent

to child.

Not the opposite.

---

# Children Is Just Another Prop

This surprises

almost everyone.

Suppose

you write

```jsx
<Card>
  <h1>Hello</h1>

  <p>Welcome</p>
</Card>
```

Where do

these elements go?

React automatically

creates

```javascript
Card({
  children: [<h1>Hello</h1>, <p>Welcome</p>],
});
```

Notice

`children`

isn't magical.

It's simply

another property

inside

the props object.

---

# Using Children

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
```

Now

whatever appears

between

```jsx
<Card>...</Card>
```

gets rendered

inside

the card.

This makes

components

far more reusable.

---

# Default Values

Sometimes

a prop

is optional.

Suppose

we don't provide

a greeting.

```jsx
<Greeting />
```

We can

choose

a default.

```jsx
function Greeting({ name = "Guest" }) {
  return <h1>Hello {name}</h1>;
}
```

Now

the component

still works.

---

# Props Can Contain Anything

A prop

doesn't have

to be

a string.

React can pass

```text
Numbers

Strings

Booleans

Arrays

Objects

Functions

React Elements
```

Example

```jsx
<Button disabled={true} count={5} user={currentUser} onClick={handleClick} />
```

Everything

is simply

another property

inside

the props object.

---

# Internal Picture

When React sees

```jsx
<Button text="Save" disabled={false} />
```

Internally,

it is conceptually similar to

```javascript
Button({
  text: "Save",

  disabled: false,
});
```

There is

no magic.

Just

a function call

with

an object.

---

# Mental Model

Think of

a component

as

a machine.

```text
          Props

            │

            ▼

     ┌──────────────┐

     │  Component   │

     └──────┬───────┘

            │

            ▼

     React Elements
```

The machine

doesn't create

its own input.

Someone else

feeds it.

---

# Summary

Props are one of the simplest ideas in React.

They are **just a JavaScript object** passed into a component.

Just as normal functions receive arguments, React components receive props.

Those props allow the same component to produce different user interfaces without changing the component itself.

The key ideas from this chapter are:

- A component always receives **one props object**.
- Destructuring is a JavaScript feature, not a React feature.
- Props are **read-only**.
- Data flows from **parent to child**.
- `children` is simply another property inside the props object.

Once you understand props, the next question naturally follows:

> **If props come from the parent, how does a component remember its own data?**

That's where **State** comes in.
