/* Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. 
Return an array that includes both values that sum to zero or undefined if a pair does not exist.
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined */

// Naive solution - Time Complexity - O(N^2), Space Complexity - O(1)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined

// Refactored solution - Time Complexity - O(N), Space Complexity - O(1) - Multiple Pointers Pattern
// This solution works because the array is sorted from least to greatest
function sumZero2(arr) {
  let left = 0; // first index
  let right = arr.length - 1; // last index
  while (left < right) {
    // while loop
    let sum = arr[left] + arr[right]; // sum of first and last index
    if (sum === 0) {
      // if sum is 0
      return [arr[left], arr[right]]; // return the pair
    } else if (sum > 0) {
      // if sum is greater than 0
      right--; // decrement right
    } else {
      // if sum is less than 0
      left++; // increment left
    }
  }
}

console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero2([-2, 0, 1, 3])); // undefined
console.log(sumZero2([1, 2, 3])); // undefined
