const mergeColt = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
};

// My Solution
const mergeSortAlgorithm = (arr) => {
  if (arr.length <= 1) return arr;
  const middleIndex = Math.floor(arr.length / 2);
  const arr1 = mergeSortAlgorithm(arr.slice(0, middleIndex));
  const arr2 = mergeSortAlgorithm(arr.slice(middleIndex, arr.length));
  return mergeColt(arr1, arr2);
};
console.log(mergeSortAlgorithm([10, 24, 76, 73, 72, 1, 9]));

// Colt's Solution
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid, arr.length));
  return mergeColt(left, right);
};
console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
