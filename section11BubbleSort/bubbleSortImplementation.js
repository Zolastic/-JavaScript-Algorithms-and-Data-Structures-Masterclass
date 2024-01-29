// Bubble Sort Implementation

// unoptimised bubble sort
const bubbleSortUnoptimised = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++)
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
  }
  return arr;
};

// optimised bubble sort
// - if there are no swaps on a pass, then the array is sorted
// - this is useful if the array is almost sorted
// - the time complexity is O(n^2) in the worst case
// - but if the data is nearly sorted, it can be O(n) in the best case
const bubbleSort = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      // j < i - 1 because we don't need to compare the last element. This is because the last element is already sorted.
      // console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        // ES2015
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    // console.log("ONE PASS COMPLETE!");
    if (noSwaps) break;
  }
  return arr;
};
