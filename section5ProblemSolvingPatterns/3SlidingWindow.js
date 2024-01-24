/* Write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements in the array.
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubarraySum([], 4); // null */

// Naive solution - Time Complexity - O(N^2), Space Complexity - O(1)
const maxSubarraySum = (arr, num) => {
  if (num > arr.length) return null;

  let max = -Infinity; // If the array contains all negative numbers, then the max sum will be the smallest negative number.

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;

    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > max) {
      max = temp;
    }
  }

  return max;
};
console.log("naive solution", maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log("naive solution", maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log("naive solution", maxSubarraySum([], 4)); // null

// Refactored solution - Time Complexity - O(N), Space Complexity - O(1)
const maxSubarraySum2 = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  // Calculate the sum of the first window
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  // Calculate the sum of the next window by subtracting the first element of the previous window and adding the next element
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];

    // Compare the sum of the current window with the maxSum
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};
