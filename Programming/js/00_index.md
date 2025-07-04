# JavaScript Complete Learning Guide

## Table of Contents

1. [Print Statement (console.log)](#1-print-statement-consolelog)
2. [Variables and Variable Mutation](#2-variables-and-variable-mutation)
3. [Primitive Types in Detail](#3-primitive-types-in-detail)
4. [Type Coercion](#4-type-coercion)
5. [Operators](#5-operators)
6. [Control Statements](#6-control-statements)
7. [Loops](#7-loops)
8. [Jumping Statements](#8-jumping-statements)
9. [Arrays](#9-arrays)
10. [Objects](#10-objects)
11. [Functions](#11-functions)
12. [Object-Oriented Programming](#12-object-oriented-programming)
13. [Function Constructors](#13-function-constructors)
14. [Prototypes](#14-prototypes)
15. [Copying Primitives vs Objects](#15-copying-primitives-vs-objects)
16. [Passing Variables to Functions](#16-passing-variables-to-functions)
17. [First Class Functions](#17-first-class-functions)
18. [IIFE (Immediately Invoked Function Expression)](#18-iife-immediately-invoked-function-expression)
19. [Closures](#19-closures)
20. [Method Borrowing: Call and Bind Methods](#20-method-borrowing-call-and-bind-methods)
21. [Behind the Scenes - JavaScript Execution](#21-behind-the-scenes---javascript-execution)

---

## 1. Print Statement (console.log)

The `console.log()` method is used to print output to the browser's console. It's the most basic way to display information in JavaScript.

```javascript
console.log("Hello world");
```

## 2. Variables and Variable Mutation

### Variables

A variable is a container where we store data. In JavaScript, you can declare variables using `var`, `let`, or `const`.

### Rules for Variables

- You can start a variable with underscore (_), dollar sign ($), or any letter
- Variable names are case-sensitive
- Cannot start with numbers

### Variable Mutation

Variables can change their values during program execution. This is called variable mutation.

```javascript
// Student marks calculation example
var name = 'Ramesh';
var maths = 95;
var science = 88;
var social = 87;
var grade = 'A';
var totalMarks = maths + science + social;
var percentage = (totalMarks / 300) * 100;

// Concatenation - using + to join string and variable
console.log('Hi, your son ' + name + ' got ' + totalMarks + ' marks. and his percentage is ' + percentage + ' grade is ' + grade);

// Calculator example
var firstNumber = 5;
var secondNumber = 6;
var total = firstNumber / secondNumber;
console.log('Addition of' + firstNumber + ' and ' + secondNumber + 'is ' + total);

// Variable mutation example
var name = 'bill';
var name = 'jobs';  // Variable value changed
var age = 30;
var age = 40;       // Variable value changed again
var age = 20;
console.log('hey I am ' + name + ' and my age is ' + age);
```

### Taking Input from User

```javascript
// Using prompt to take input from user
console.log('Welcome to Facebook');
var name = prompt('Enter your Name');
var number = prompt('Enter your Number');
var password = prompt('Enter your password');
console.log('Hi' + name + 'Welcome to Facebook. Your number is ' + number + 'remember your password is ' + password);
```

## 3. Primitive Types in Detail

JavaScript has several primitive data types:

### Numbers

```javascript
var age = 45;
console.log('The type of age is', typeof(age));
```

### Strings

```javascript
var age = "45";
console.log('The type of age is', typeof(age));
```

### Empty Strings

```javascript
var age = "";
console.log('The type of age is', typeof(age));
```

### Undefined

When you declare a variable but don't assign a value, it's undefined.

```javascript
var steveAge;
console.log('The type of Steve Age is', typeof(steveAge));
```

### Null

When you explicitly say that you know nothing, we use null. Note: null is actually of type Object in JavaScript.

```javascript
var billAge = null;
console.log('The type of bill Age is', typeof(billAge));  // Returns "object"
```

### Boolean

True or false values.

```javascript
var isRaining = false;
console.log(isRaining);
```

### typeof() Method

Special method used to find the data type or primitive type of a variable.

## 4. Type Coercion

Type coercion is the automatic conversion of values from one data type to another. JavaScript can change numbers and booleans to strings.

```javascript
var name = 'steve';
var age = 60;
age = '60';  // Converting number to string
console.log('The data type of age is ' + typeof(age));
```

## 5. Operators

### Symbol Names Reference

- () - parenthesis
- [] - square brackets  
- {} - curly brace
- ; - semi colon
- : - colon
- "" - quotations
- . - dot
- @ - at the rate
- $ - dollar
- & - ampersand
- && - logical and
- || - logical or
- ! - not
- / - forward slash
- \ - backward slash
- = - equal to
- % - mod
- `` - backticks

### Assignment Operators

```javascript
// =, +=, -=, *=, /=
var x = 2;
x = x + 2;  // Same as x += 2;
x = x - 2;  // Same as x -= 2;
x = x * 2;  // Same as x *= 2;
x = x / 2;  // Same as x /= 2;
```

### Comparison Operators

```javascript
// ==, ===, !=, >, <, >=, <=
// = assigning the value
// == verifying values irrespective of datatype
// === strict equal to 

var a = 2;
var b = '2';
if (a === b) {
    console.log('equal');
} else {
    console.log('not equal');
}
```

### Arithmetic Operators

```javascript
// +, -, *, /, %, ++, --, **(power)
var x = 2;
x = x + 1;  // Same as x++
x = x - 1;  // Same as x--
```

### Logical Operators

- && (logical and)
- || (logical or)
- ! (logical not)

## 6. Control Statements

Control statements help make decisions in your code using if, if-else, and else-if ladder.

### If-Else Statement

```javascript
var is_raining_today = true;

if (is_raining_today) {
    console.log('take an umbrella');
} else {
    console.log('Enjoy the party');
}
```

### Even/Odd Number Check

```javascript
var number = 5;
if (number % 2 === 0) {
    console.log('even no');
} else {
    console.log('odd no');
}
```

### Else-If Ladder

Finding the greatest number among four numbers:

```javascript
var fn = 4;
var sn = 8;
var tn = 20;
var frn = 30;

if (fn > sn && fn > tn && fn > frn) {
    console.log(fn + ' is greater than ' + sn + ' and ' + tn + ' and ' + frn);
} else if (sn > fn && sn > tn && sn > frn) {
    console.log(sn + ' is greater than ' + fn + ' and ' + tn + ' and ' + frn);
} else if (tn > fn && tn > sn && tn > frn) {
    console.log(tn + ' is greater than ' + fn + ' and ' + sn + ' and ' + frn);
} else {
    console.log(frn + ' is greater than ' + fn + ' and ' + sn + ' and ' + tn);
}
```

## 7. Loops

Loops are used for repeating the same task multiple times.

### While Loop

```javascript
var number = 1;
while (number < 6) {
    console.log(number);
    number++;
}
```

### For Loop

```javascript
for (var fn = 6; fn <= 10; fn++) {
    console.log(fn);
}
```

### Printing Even Numbers Less Than 100

```javascript
for (var i = 0; i < 101; i++) {
    if (i % 2 === 0) {
        console.log('even number', i);
    } else {
        console.log('odd number', i);
    }
}
```

### While Loop for Even/Odd

```javascript
var number = 0;
while (number <= 100) {
    if (number % 2 === 0) {
        console.log('even number' + number);
    } else {
        console.log('odd number', +number);
    }
    number++;
}
```

### Finding Odd Numbers Less Than 10

```javascript
for (var i = 1; i < 10; i++) {
    if (i % 2 === 1) {
        console.log('odd number : ', i);
    }
}
```

## 8. Jumping Statements

### Break Statement

Break is used to exit a loop when a certain condition is met.

```javascript
// Print 1 to 10 numbers, if you get 5 stop printing
for (var i = 1; i < 11; i++) {
    if (i === 5) {
        break;
    } else {
        console.log(i);
    }
}
```

### Continue Statement

Continue skips the current iteration and moves to the next one.

```javascript
for (var i = 1; i < 11; i++) {
    if (i === 5) {
        continue;
    } else {
        console.log(i);
    }
}
```

## 9. Arrays

Arrays are lists of elements that can store multiple values.

### Basic Array Usage

```javascript
// Instead of creating individual variables for each student
var name_of_student1 = 'Ramesh';
var name_of_student2 = 'Sandeep';
var name_of_student3 = 'Shrikanth';
var name_of_student4 = 'Rahul';

// We can use an array
var whatsapp_group = ['Ramesh', 'Sandeep', 'Shrikanth', 'Rahul'];
console.log('Students list : ' + whatsapp_group);
console.log(whatsapp_group[1]);  // Access second element
```

### Array Methods

```javascript
// Length method
console.log('no of people in this group are:' + whatsapp_group.length);

// Iterating through array
for (var index = 0; index < whatsapp_group.length; index++) {
    console.log(whatsapp_group[index]);
}

// Array methods: push and pop
var students_list = ['bill', 'steve', 'woz'];
students_list.push('jack');  // Add element
console.log(students_list);

students_list.pop();  // Remove last element
students_list.pop();  // Remove another element
console.log(students_list);
```

### Array vs Individual Variables

```javascript
// Array approach for student details
var student1_details = ['Ramesh', 101, 2];
console.log(student1_details[1]);
```

## 10. Objects

Objects are collections of key-value pairs that represent real-world entities.

### Object Syntax

```javascript
// Object syntax
var objectname = {
    key: value,
    key: value,
}
```

### Basic Object Usage

```javascript
var student1_details = {
    'name': 'Ramesh',
    'id': 101,
    'classroom': 2
};

var student2_details = {
    'username': 'Rahul',
    'age': 22,
    'phone': 546546546545
};

// Accessing object properties
console.log(student2_details.username);
console.log(student1_details.name);

// Modifying object properties
student1_details.name = "Shrikanth";
student1_details['id'] = 103;
console.log(student1_details.id);
```

### Objects with Arrays

```javascript
var party = {
    'softdrink': ['thumbsup', 'pepsi'],
    'starters': ['chicken thandoori', 'lollipop'],
    'biryani': ['veg biryani', 'chicken biryani', 'prawn biryani'],
    'curry': ['chicken 65', 'paneer butter masala']
};

console.log(typeof(party));  // object
console.log(typeof(party.softdrink)); // object (arrays are objects)
console.log(party.softdrink[1]); // pepsi
console.log(party.biryani[1]);   // chicken biryani
console.log(party.curry[1]);     // paneer butter masala
```

### Nested Objects

```javascript
var fbdatabase = {
    'ram': {
        'username': 'ramesh',
        'email': 'ramesh@gmail.com'
    },
    'rah': {
        'username': 'rahul',
        'email': 'rahul@gmail.com'
    },
    '103': {
        'username': 'shrikanth',
        'email': 'shri@gmail.com'
    },
    '104': {
        'username': 'sandeep',
        'email': 'sandeep@gmail.com'
    }
};

console.log(typeof(fbdatabase.ram));
console.log(fbdatabase['104'].email);
```

### Quiz Application Example

```javascript
console.log('welcome to the quiz app');

var score = 0;
var questionNumber = 1;

var questions = {
    '1': 'color of sky ?',
    '2': 'president of usa ?'
};

var choices = {
    '1': {
        '1': 'red',
        '2': 'blue',
        '3': 'green',
    },
    '2': {
        '1': 'donald',
        '2': 'barack obama',
        '3': 'george',
    }
};

var answers = {
    '1': 'blue',
    '2': 'donald',
};

console.log('no of questions are : ', Object.keys(questions).length);

while (true) {
    console.log(questions[questionNumber]);
    console.log(choices[questionNumber]);
    
    var selected_option = prompt('Enter your option ');
    
    if (choices[questionNumber][selected_option] === answers[questionNumber]) {
        score = score + 1;
        questionNumber = questionNumber + 1;
    } else {
        questionNumber = questionNumber + 1;
    }
    
    if (questionNumber > Object.keys(questions).length) {
        break;
    }
}

console.log('You got ', score);
```

## 11. Functions

Functions are pieces of code that can be used multiple times instead of repeating the same code.

### Basic Function Examples

```javascript
// Without functions (repetitive)
var a = 5;
var b = 6;
var c = a + b;
console.log('sum is : ', c);

var d = 8;
var e = 8;
console.log('sum is :', d + e);

// With functions (reusable)
function addition(firstNo, secondNo) {
    var sum = firstNo + secondNo;
    console.log('value of sum is :', sum);
}

function multiplication(fn, sn) {
    var multiply = fn * sn;
    console.log('value of multiplication is : ', multiply);
}

function subtraction(fn, sn) {
    var sub = fn - sn;
    console.log('value of subtraction is : ', sub);
}

// Using parseInt to convert string to integer
var a = parseInt(prompt('Enter first number :'));
var b = parseInt(prompt('Enter second number :'));
addition(a, b);
multiplication(a, b);
subtraction(a, b);
```

### Types of Functions

#### 1. Function with No Return Type

```javascript
function addition(fn, sn) {
    console.log('sum is : ', fn + sn);
}

addition(3, 5);
```

#### 2. Function with Return Type

```javascript
function multiplication(fn, sn) {
    return fn * sn;
}

console.log(multiplication(4, 5));
```

### Banking Example

```javascript
function balance_enquiry(name) {
    console.log('hi ' + name + ' welcome to SBI');
    return 20000;
}

var remain_balance = balance_enquiry('Ramesh');
console.log(remain_balance);
```

Note: Whenever you return something from a function, you need to write the function call with console.log to see the result.

## 12. Object-Oriented Programming

### Objects and Methods

```javascript
var student2_details = {
    'name': 'Ramesh',
    'id': 101,
    'classroom': 2,
    'dob': 1998,
    'calculateAge': function() {
        return 2020 - this.dob;
    }
};

var age = student2_details.calculateAge();
console.log(age);
```

### Traditional Object Creation (Without OOP)

```javascript
// Creating individual dog objects (not efficient)
var jimmy = {
    dob: 2010,
    color: 'black',
    breed: 'lab',
    age: function() {
        console.log(2020 - this.dob);
    }
};

var tomy = {
    dob: 2017,
    color: 'brown',
    breed: 'gs',
    age: function() {
        console.log(2020 - this.dob);
    }
};
```

## 13. Function Constructors

Object-Oriented Programming approach using function constructors:

1. Create a blueprint using Function Constructor
2. Initialize objects

```javascript
// Function Constructor for Dog
var Dog = function(dob, color, breed) {
    this.dateob = dob;
    this.dcolor = color;
    this.dbreed = breed;
};

// Creating instances
var jimmy = new Dog(2015, 'black', 'lab');
var tomy = new Dog(2017, 'white', 'german shepherd');
jimmy.dcolor = 'white';  // Modifying property
console.log(jimmy);

// Employee Function Constructor
var Employee = function(fullname, yearOfBirth, job) {
    this.fullname = fullname;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};
```

## 14. Prototypes

Prototypes allow you to add methods and properties to all instances of a constructor function.

```javascript
var Employee = function(fullname, yearOfBirth, job) {
    this.fullname = fullname;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

// Adding methods using prototype
Employee.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth);
};

Employee.prototype.company = 'Google';

// Creating employees
var sandeep = new Employee('Sandeep Bobba', 1995, 'teacher');
var ramesh = new Employee('Ramesh Bobba', 1995, 'Freelancer');
var shrikanth = new Employee('Shrikanth Bobba', 1995, 'Scientist');
var rahul = new Employee('Rahul Bobba', 1998, 'Software Engineer');

shrikanth.calculateAge();
console.log(rahul.company);
```

## 15. Copying Primitives vs Objects

### Copying Primitives

When you copy primitive values, you get independent copies.

```javascript
var a = 20;
var b = a;  // b gets value 20
a = 45;
b = a;      // b gets value 45  
a = 60;

console.log(a);  // 60
console.log(b);  // 45
```

### Copying Objects (Reference Copying)

When you copy objects, you copy the reference, not the actual object.

```javascript
var a = {
    name: 'steve',
    age: 25
};

var b = a;  // b references the same object as a
var c = b;  // c also references the same object
c.name = 'billgates';  // Changes the original object

console.log(a);  // name is now 'billgates'
console.log(b);  // name is now 'billgates'
console.log(c);  // name is now 'billgates'
```

## 16. Passing Variables to Functions

### Passing Primitives to Functions

```javascript
function addition(a, b) {
    console.log(a + b);
}

var c = 2;
var d = 3;
addition(c, d);
```

### Passing Objects to Functions

When you pass objects to functions, you pass the reference.

```javascript
var student1 = {
    name: 'steve',
    city: 'USA'
};

function change_Student_Details(student_object) {
    console.log('details before changing', student_object);
    student_object.name = 'Jack';
    console.log('details after change', student_object);
}

change_Student_Details(student1);
console.log(student1);  // Original object is modified
```

### Complex Object Example

```javascript
var ramesh = {
    name: 'ramesh',
    city: 'USA',
    age: 22,
    friends_list: ['rahul', 'shrikanth'],
    marital_status: 'yes',
};

function change_user_Details(user_object) {
    console.log('details before changing', user_object);
    user_object.name = 'ramesh boppan';
    user_object.marital_status = 'no';
    console.log('details after change', user_object);
}

change_user_Details(ramesh);
console.log(ramesh);
```

## 17. First Class Functions

In JavaScript, functions are first-class citizens, meaning they can be:

- Passed as arguments to other functions
- Returned from functions
- Assigned to variables

### Passing Functions as Arguments

```javascript
var years = [1998, 2005, 1997, 1960];

function calculate(yearsArray, myfun) {
    var result = [];
    for (var i = 0; i < yearsArray.length; i++) {
        result.push(myfun(yearsArray[i]));
    }
    return result;
}

function calculateAge(element) {
    return 2020 - element;
}

console.log(calculate(years, calculateAge));
```

### Functions Returning Functions

Interview question program that asks questions based on job type:

```javascript
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log('hey ' + name + ', Define Design');
        };
    } else if (job === 'teacher') {
        return function(name) {
            console.log('hey ' + name + ' , Why do you want to teach?');
        };
    } else if (job === 'software engineer') {
        return function(name) {
            console.log('hey ' + name + ' , How do you define primitives?');
        };
    } else {
        return function(name) {
            console.log('hey ' + name + ', what do you do for living?');
        };
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Rahul');
```

## 18. IIFE (Immediately Invoked Function Expression)

IIFE is a function that runs immediately after it's created. It's used for data privacy.

```javascript
(function() {
    var name = 'Shrikanth';
    console.log('inside', name);
})();

// This will cause an error because 'name' is not accessible outside
console.log('hi my name is outside', name);
```

### Function Scope Example

```javascript
function es5scope() {
    var a = 10;
    console.log('inside', a);
}

// console.log('outside', a);  // This would cause an error
es5scope();
```

## 19. Closures

Closure Definition: An inner function will always have access to variables and parameters of the outer function, even after the outer function has returned.

### Retirement Calculator Example

```javascript
function retirement(retirementAge) {
    var s = 'years remain to retire';
    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + s);
    };
}

var retirementIndian = retirement(60);
retirementIndian(1980);

var retirementAmerican = retirement(70);
retirementAmerican(1995);
```

## 20. Method Borrowing: Call and Bind Methods

### Call Method

Call method directly calls a method from another object.

### Bind Method

Bind method copies the method to a variable for later use.

```javascript
// School presentation example
var shrikanth = {
    name: 'Shrikanth Vattikutti',
    age: 22,
    job: 'Software Engineer',
    presentation: function(studenttype, timeOftheDay) {
        if (studenttype === 'kids') {
            console.log('Hi kids, Good' + timeOftheDay + ', My name is ' + this.name);
        } else {
            console.log('Hi Students, Good' + timeOftheDay + ', I am ' + this.name + ' and I am a ' + this.job);
        }
    }
};

var Ramesh = {
    name: 'Ramesh Singh',
    age: 25,
    job: 'Data Scientist',
};

var Rahul = {
    name: 'Rahul Panda',
    age: 22,
    job: 'Systems Engineer'
};

// Direct method call
shrikanth.presentation('kids', 'Morning');

// Using call method - Ramesh borrows presentation from shrikanth
shrikanth.presentation.call(Ramesh, 'students', 'Evening');
shrikanth.presentation.call(Rahul, 'kids', 'Afternoon');

// Using bind method
var Sandeep = {
    name: 'Sandeep Bobba',
    age: 24,
    job: 'Data Analyst'
};

var SandeepPresentation = shrikanth.presentation.bind(Sandeep);
SandeepPresentation('kids', 'Evening');
SandeepPresentation('Students', 'Morning');
```

## 21. Behind the Scenes - JavaScript Execution

### How JavaScript Works

#### Flow of Execution

1. **JavaScript Code**
2. **Google V8 Engine**
   - Parser
   - Abstract Syntax Tree
   - Machine Code
3. **CPU Executes the Machine Code**

#### Execution Context

- **Execution Context**: Place where we store variables
- **Default EC**: Global Execution Context
- **Global EC**: Stores global variables and global functions
- **EC is also called Global Object**: It stores variables and functions
- Example: `A === Window.A`

#### Execution Context Example

```javascript
var name = 'john';

function first() {
    var a = 'hello';
    second();
    var x = a + name;
}

function second() {
    var b = 'hi';
    third();
    var z = b + name;
}

function third() {
    var c = 'hey';
    var z = c + name;
}

first();
```

For visualizing execution context, you can use: [pythontutor.com/javascript.html](http://www.pythontutor.com/javascript.html)
