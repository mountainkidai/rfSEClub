/*
 Loops: For, While, Do-While
 Jumping Statements: Break and Continue
loops: for, while, do-while
jumping statements: break and continue

why loops?
loops are used to execute a block of code multiple times.
for loop
the for loop has the following syntax:
for (initialization; condition; increment) {
    // code block to be executed
}
initialization: executed before the loop starts
condition: evaluated before each iteration. if it returns true, the loop continues. if it returns false, the loop ends.
increment: executed after the code block has been executed
example:
for (let i = 0; i < 5; i++) {
    console.log(i);
}
output:
0
1
2
3
4
while loop
the while loop has the following syntax:
while (condition) {
    // code block to be executed
}
condition: evaluated before each iteration. if it returns true, the loop continues. if it returns false, the loop ends.
example:
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
output:
0
1
2
3
4
do-while loop
the do-while loop is similar to the while loop, except that the code block is executed at least once, even if the condition is false.
the do-while loop has the following syntax:
do {
    // code block to be executed
} while (condition);
condition: evaluated before each iteration. if it returns true, the loop continues. if it returns false, the loop ends.
example:
let i = 0;
do {
    console.log(i);
    i++;
}
while (i < 5);
output:
0
1
2
3
4
jumping statements
jumping statements are used to jump out of a loop or skip an iteration.
break statement
the break statement is used to jump out of a loop.
example:
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}
output:
0
1
2
continue statement
the continue statement is used to skip an iteration.
example:
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
output:
0
1
2
4
*/
