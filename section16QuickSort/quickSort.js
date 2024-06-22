/**
 * Quicksort Pseudocode
 * - Call the pivot helper on the array.
 * - When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index.
 */

// From pivotHelper.js
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
  return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  // Base case: when left is equal to right, we've hit the end of the array.
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); // Call the pivot helper on the array. Returns the updated pivot index. In our case, it returns 3.

    // left
    quickSort(arr, left, pivotIndex - 1); // Recursively call the pivot helper on the subarray to the left of that index. In our case, it's [3, 2, 1].

    // right
    quickSort(arr, pivotIndex + 1, right); // Recursively call the pivot helper on the subarray to the right of that index. In our case, it's [5, 7, 6, 8].
  }

  return arr; // Return the sorted array.
};

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3])); // [1, 2, 3, 4, 5, 6, 7, 8]
