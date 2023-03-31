// create five variables and assign them values
let a = "what";
let b = 3;
let c = false;
let d;
let e = null;
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);


// create a variable that references a template literal
// inside the template literal, use two of the above variables
let f = `The number ${b} is ${c}`;
// reassign the value of the variable that references "null"
e = "true";
// print the value and its type
console.log(typeof e);
// print a variable that causes a ReferenceError
console.log(d);
// alter the previous line to no longer cause a ReferenceError
console.log(typeof d);
