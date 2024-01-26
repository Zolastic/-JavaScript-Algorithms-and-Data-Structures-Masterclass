/* 
Write a recursive function called someRecursive which accepts an array and a callback. 
The function returns true if a single value in the array returns true when passed to the callback.
 Otherwise it returns false.

 Examples:
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
*/

const isOdd = (val) => val % 2 !== 0;

// My Solution
const someRecursive = (arr, callbackFn) => {
  if (arr.length == 0) return false;
  const result = callbackFn(arr[0]);
  const newArr = arr.slice(1);
  return result ? result : someRecursive(newArr, callbackFn);
};

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false

// Colt Steele's Solution
function someRecursiveColt(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}
