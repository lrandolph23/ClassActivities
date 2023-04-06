// Named Parameters
// write a function that takes two named parameters:
function myFunction (x, ...y) {
  if (!x) x = 0;
  if (!y) y = 0;
  console.log(y[y.length - 1]);
  return (x + y[y.length - 1]);

// print each named parameter,
// then return the parameters added together
}
// invoke the function and pass in two numbers
myFunction(2, 3);
// invoke the function and pass in more than two numbers
myFunction(2, 3, 4);
// invoke the function and pass in only one number
myFunction(2);
// change the function to set default values for the parameters
if (!x) x = 0;
if (!y) y = 0;
// again, invoke the function and pass in only one number
myFunction(2);
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
console.log(y[y.length - 1]);
  return (x + y[y.length - 1]);
// again, invoke the function and pass in more than two numbers
function myFunction (x, ...y) {
  if (!x) x = 0;
  if (y.length == 0) y[0] = 0;
  console.log(y[y.length - 1]);
  return (x + y[y.length - 1]);
}
myFunction(2, 3, 4, 5, 6);
