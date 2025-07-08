# JavaScript Jumping Statements

Jumping statements let you change the flow of loops or switch statements.

## 1. `break`

Stops the current loop or `switch` case completely and moves on.

### Example in a loop

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
```

**Output:**

```txt
0
1
2
```

### Example in `switch`

```js
let color = 'green';
switch (color) {
  case 'red':
    console.log('Stop');
    break;
  case 'green':
    console.log('Go');
    break;
  default:
    console.log('Caution');
}
```

**Output:**

```txt
Go
```

## 2. `continue`

Skips the rest of the current loop iteration and moves to the next one.

```js
for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) {
    continue; // skip even numbers
  }
  console.log(i);
}
```

**Output:**

```txt
1
3
```
