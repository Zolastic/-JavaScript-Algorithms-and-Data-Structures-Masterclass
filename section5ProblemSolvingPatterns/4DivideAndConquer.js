/* Given a sorted array of integers, write a function called search,
that accepts a value and returns the index where the value passed to the function is located.
If the value is not found, return -1
Search([1, 2, 3, 4, 5, 6], 4); // 3
Search([1, 2, 3, 4, 5, 6], 6); // 5
Search([1, 2, 3, 4, 5, 6], 11); // -1 */

// Naive solution - Time Complexity - O(N) - Linear Search
const naiveSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
};

console.log("naiveSearch", naiveSearch([1, 2, 3, 4, 5, 6], 4)); // 3

// Refactored solution - Time Complexity - O(log N) - Binary Search
// logarithmic time complexity is great for large dat sets
// O(log N) is the next best thing after O(1)

// This only works if the array is sorted
const refactoredSearch = (arr, val) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    console.log("middle: ", middle);

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
};

console.log("refactoredSearch: ", refactoredSearch([1, 2, 3, 4, 5, 6], 4)); // 3
