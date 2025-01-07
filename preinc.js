i = 1;
// console.log(++i); // 2
// console.log(i); // 2
// console.log(i++); // 2

i++;
console.log(i); // 2
++i;
console.log(i); // 3

/*
i++ =
i = i
i = i + 1

++i
i = i + 1
i = i
*/

x = i;
i = i + 1;
//case 1
i = 1;
i++; // i = 2
++i; // i = 3

// case 2:
// console.log or assigning to a variable
console.log(i++); // 3 i=i
// i = i + 1 BEHIND THE SCENES

console.log(i); // 4
