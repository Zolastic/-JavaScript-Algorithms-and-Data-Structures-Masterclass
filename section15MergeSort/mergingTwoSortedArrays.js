// My Solution
const merge = (arr1, arr2) => {
  let resultArr = [];
  let i = 0;
  let j = 0;
  let tempArr1 = arr1;
  let tempArr2 = arr2;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      resultArr.push(arr1[i]);
      tempArr1 = tempArr1.slice(1);
      i++;
    } else if (arr2[j] < arr1[i]) {
      resultArr.push(arr2[j]);
      tempArr2 = tempArr2.slice(1);
      j++;
    }
  }

  if (i < arr1.length) {
    resultArr.concat(tempArr1);
  } else if (j < arr2.length) {
    resultArr = resultArr.concat(tempArr2);
  }

  return resultArr;
};
console.log(merge([1, 10, 50], [2, 14, 99, 100]));

// Colt's Solution
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
console.log(mergeColt([1, 10, 50], [2, 14, 99, 100]));
