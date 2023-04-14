const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
const firstA = arr.indexof('a');
const firstB = arr.indexof('b');
const firstB = arr.indexof('c');
// find the last index of "a", "b", and "c"
const lastA = arr.lastindexof('a');
const lastB = arr.lastindexof('b');
const lastB = arr.lastindexof('c');
// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
function removeDuplicate(array, duplicateValue) {
  let firstIndex = array.indexOf(duplicatevalue);
  let lastIndex = array.lastIndexOf(duplicateValue);
  while (firstIndex !== lastIndex) {
    array.splice(lastIndex, 1);
    lastIndex = array.lastIndexOf(duplicateValue);
  }
}
