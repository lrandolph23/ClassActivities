// create an Array using an Array literal
const dadsDogs = ["Chewy", "Moxy", "Windy", "Sophia"]
// access the 1st item in the Array
console.log(dadsDogs[0]);
// access the last item in the Array
console.log(dadsDogs[dadsDogs.length - 1]);
// print the length of the Array
console.log(dadsDogs.length);
// use the length property to access the last item in the Array
let last = [dadsDogs.length - 1];
console.log(last);
// with for...of, loop over the Array, modify the value and add to a different Array
for (let dog of dadsDogs);
  console.log(dog);
