/* Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has it's corresponding value squared in the second array. 
The frequency of values must be the same. */

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

// Naive solution - O(n^2) - nested loop - indexOf and splice are loops in themselves
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; ++i) {
    // The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.
    // O(n) - indexOf is a loop in itself - nested loop
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }

    arr2.splice(correctIndex, 1);
  }

  return true;
};
console.log("same: ", same([1, 2, 3], [4, 1, 9]));

// Refactored solution - O(n). RMB 2 loops are better than nested loops
const sameRefactored = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // O(n)
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  // O(n)
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // O(n)
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    // frequencyCounter2[key ** 2] returns the number of times the key ** 2 appears in the array
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
};
console.log("sameRefactored: ", sameRefactored([1, 2, 3, 2], [9, 1, 4, 4]));
