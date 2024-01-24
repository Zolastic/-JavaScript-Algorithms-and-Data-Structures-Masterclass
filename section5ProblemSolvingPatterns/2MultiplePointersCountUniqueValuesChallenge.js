/* countUniqueValues
Implement a function called countUniqueValues, which accepts a sorted array, 
and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted.
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4 */

// MY SOLUTION - frequency counter pattern - Time Complexity - O(N), Space Complexity - O(N)
// Not good for sorted arrays as it is not taking advantage of the fact that the array is sorted.
// Additionally, uniqueValues grows with the size of the array. Therefore, it is O(N) space complexity and not O(1).
const myCountUniqueValues = (arr) => {
  let uniqueValues = {};

  for (let element of arr) {
    if (!uniqueValues[element]) {
      uniqueValues[element] = 1;
    }
  }

  return Object.keys(uniqueValues).length;
};
console.log(
  "myCountUniqueValues([1,1,1,1,1,2])",
  myCountUniqueValues([1, 1, 1, 1, 1, 2])
); // 2
console.log(
  "myCountUniqueValues([1,2,3,4,4,4,7,7,12,12,13])",
  myCountUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
); // 7
console.log("myCountUniqueValues([])", myCountUniqueValues([])); // 0
console.log(
  "myCountUniqueValues([-2,-1,-1,0,1])",
  myCountUniqueValues([-2, -1, -1, 0, 1])
); // 4

// MY SOLUTION 2 - multiple pointers pattern - Time Complexity - O(N), Space Complexity - O(1)
// This solution is better than the frequency counter pattern as it is taking advantage of the fact that the array is sorted.
// Additionally, There are 3 fixed variable, numOfUniqueValues, i and j. This means the space it uses does not grow with the size of the array.
// The function also does not create any new data structures that grow with the size of the array.
// Therefore, it is O(1) space complexity.
const myCountUniqueValues2 = (arr) => {
  let numOfUniqueValues = 0;

  for (let i = 0, j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      ++i;
      arr[i] = arr[j];
    }

    if (j == arr.length - 1) {
      numOfUniqueValues = i + 1;
    }
  }

  return numOfUniqueValues;
};
console.log(
  "myCountUniqueValues2([1,1,1,1,1,2])",
  myCountUniqueValues2([1, 1, 1, 1, 1, 2])
); // 2
console.log(
  "myCountUniqueValues2([1,2,3,4,4,4,7,7,12,12,13])",
  myCountUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
); // 7
console.log("myCountUniqueValues2([])", myCountUniqueValues2([])); // 0
console.log(
  "myCountUniqueValues2([-2,-1,-1,0,1])",
  myCountUniqueValues2([-2, -1, -1, 0, 1])
); // 4

// Colt Steele's solution - multiple pointers pattern - Time Complexity - O(N), Space Complexity - O(1)
function coltCountUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}
console.log(
  "coltCountUniqueValues([1,1,1,1,1,2])",
  coltCountUniqueValues([1, 1, 1, 1, 1, 2])
); // 2
console.log(
  "coltCountUniqueValues([1,2,3,4,4,4,7,7,12,12,13])",
  coltCountUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
); // 7
console.log("coltCountUniqueValues([])", coltCountUniqueValues([])); // 0
console.log(
  "coltCountUniqueValues([-2,-1,-1,0,1])",
  coltCountUniqueValues([-2, -1, -1, 0, 1])
); // 4
