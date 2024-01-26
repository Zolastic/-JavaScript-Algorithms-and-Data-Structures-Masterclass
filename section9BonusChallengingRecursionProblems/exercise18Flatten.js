/* 
Write a recursive function called flatten which accepts an array of arrays 
and returns a new array with all values flattened.

Examples:
flatten([1, 2, 3, [4, 5] ]) [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) [1,2,3]
*/

// My Solution
const flatten = (arr) => {
  if (arr.length === 0) return [];

  let newArr = Array.isArray(arr[0]) ? flatten(arr[0]) : [arr[0]];
  const slicedArr = arr.slice(1);

  return newArr.concat(flatten(slicedArr));
};

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1, 2, 3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3]

// Colt Steele's Solution
function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}
