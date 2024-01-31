const insertionSort = (arr) => {
  // start by picking the second element in the array
  for (let i = 1; i < arr.length; i++) {
    // now compare the second element with the one before it and swap if necessary
    for (let j = i - 1; j >= 0; j--) {
      // console.log(arr[i], arr[j]);
      if (arr[i] < arr[j]) {
        // SWAP!
        // let temp = arr[i];
        // arr[i] = arr[j];
        // arr[j] = temp;
        // ES2015
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i--;
      }
    }
  }
  return arr;
};
