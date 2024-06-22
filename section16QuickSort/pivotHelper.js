/**
 * Pivot Helper
 * - In order to implement quick sort, it's useful to first implement a function responsible for arranging elements in an array on either side of a pivot.
 * - Given an array, this helper function should designate an element as the pivot.
 * - It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot.
 * - The order of elements on either side of the pivot doesn't matter!
 * - The helper should do this in place, that is, it should not create a new array.
 * - When complete, the helper should return the index of the pivot.
 */

/* 
Picking a pivot
- The runtime of quick sort depends in part on how one selects the pivot.
- Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting.
- For simplicity of this learning, we'll choose the pivot to be the first element. 
*/

/* 
Pivot Helper Pseudocode
- It will help to accept three arguments: an array, a start index, and an end index.
- Grab the pivot from the start of the array.
- Store the current pivot index in a variable (this will keep track of where the pivot should end up).
- Loop through the array from the start until the end.
    - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
- Swap the starting element (i.e., the pivot) with the pivot index.
- Return the pivot index.
*/

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start]; // For simplicity, we'll choose the pivot to be the first element.
  let swapIndex = start; // Store the current pivot index in a variable (this will keep track of where the pivot should end up).

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++; // Increment the pivot index variable
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]]; // Swap the current element with the element at the swap index.
    }
  }

  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]]; // Swap the starting element (i.e., the pivot) with the swap index.
  console.log(arr);
  return swapIndex;
};

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3])); // 3

// Example of the loop
// [4, 8, 2, 1, 5, 7, 6, 3] // The pivot is 4
// [4, 8, 2, 1, 5, 7, 6, 3] // 8 is greater than 4, so we don't do anything
// [4, 2, 8, 1, 5, 7, 6, 3] // 2 is less than 4, so we swap 2 and 8
// [4, 2, 8, 1, 5, 7, 6, 3] // 1 is less than 4, so we swap 1 and 8
// [4, 2, 1, 8, 5, 7, 6, 3] // 5 is greater than 4, so we don't do anything
// [4, 2, 1, 8, 5, 7, 6, 3] // 7 is greater than 4, so we don't do anything
// [4, 2, 1, 8, 5, 7, 6, 3] // 6 is greater than 4, so we don't do anything
// [4, 2, 1, 3, 5, 7, 6, 8] // 3 is less than 4, so we swap 3 and 8
// [3, 2, 1, 4, 5, 7, 6, 8] // At the end, we swap the pivot with the swap index
// The pivot is now at index 3
