const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    let temp = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }

    if (i !== minIndex) {
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
};
console.log(selectionSort([5, 3, 4, 1, 2])); // [1, 2, 3, 4, 5]
