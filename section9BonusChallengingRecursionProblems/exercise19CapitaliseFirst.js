/* 
Write a recursive function called capitalizeFirst. 
Given an array of strings, capitalize the first letter of each string in the array.

Example:
capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
*/

// My Solution
const capitalizeFirst = (arr) => {
  if (arr.length === 0) return arr;

  let strOfElement = arr[0];
  const firstLetterOfStr = strOfElement[0].toUpperCase();
  const restOfString = strOfElement.slice(1);
  const newStr = firstLetterOfStr + restOfString;
  let newArr = [newStr];

  const slicedArr = arr.slice(1);
  return newArr.concat(capitalizeFirst(slicedArr));
};
console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']

// Colt's Solution
function capitalizeFirstColt(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirstColt(array.slice(0, -1));
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}
console.log(capitalizeFirstColt(["car", "taco", "banana"])); // ['Car','Taco','Banana']
