const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let a = nums.pop();
let b = nums.pop();
// remove each of the first two items with shift(), saving each item to a variable
let c = nums.shift();
let d = nums.shift();
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(a);
nums.unshift(b);
nums.push(d);
nums.push(c);
