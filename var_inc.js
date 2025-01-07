//assigning pre or post increment to a variable
let x,
  i = 1;
i = i++;
// x  = i
// i = i + 1 -> i = 2
console.log(x); // 1
console.log(i); // 2
x = ++i;
// i = i + 1 -> x = i+ 1
// i = i
console.log(x); // 3
console.log(i); // 3

x = 5;
i = 1;

i++; // i = 2
console.log(i); // 2
console.log(++i); // 3
x = ++i; // x = 4
// i = 4
console.log(x); // 4
console.log(i); // 4
i = i + 1; // i = 5
console.log(x); // 4
console.log(i); // 5
x = i++; // x = 5
// i= i + 1 -> i = 6 // BEHIND THE SCENE
console.log(x); // 5
console.log(i); // 6
console.log(i++); // I=I - 6
// i = i+1 behind the scenes i becomes 7
console.log(++i); // i = 8
// i = i + 1 -> i = 8

// Practice problem - increment operators
let a = 10;
let b;

b = a++;
// b =a
// a= a+1 =11 behind the scenes
console.log(b); // 10
console.log(a); // 11

b = ++a;
// a = a+1 = 12
// b = a = 12 // behind the scenes
console.log(b); // 12
console.log(a); // 12

console.log(a++); // 12
// a = a
// a = a+1 = 13 behind the scenes
console.log(++a); // 14
// a = a+1 = 14
// a = a = 14 behind the scenes
b = 20;
console.log(b++);
// b = b = 20
// b = b+1 = 21 behind the scenes
console.log(++b); // 22
// b = b+1 = 22
// b = b = 22 behind the scenes

// Another practice problem - no output shown
let p = 5;
let q;

q = p++;
q = ++p;
console.log(p++);
console.log(++p);
p = 15;
console.log(p++);
console.log(++p);

// Practice problem 3 - try to predict the output
let m = 8;
let n;

n = m++;
n = ++m;
console.log(m++);
console.log(++m);
m = 25;
console.log(m++);
console.log(++m);
// Practice problem 4 - predict the output
let y = 12;
let z;

z = y++;
z = ++y;
console.log(y++);
console.log(++y);
y = 30;
console.log(y++);
console.log(++y);
