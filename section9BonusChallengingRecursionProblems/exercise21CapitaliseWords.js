/* 
Write a recursive function called capitalizeWords.
 Given an array of words, return a new array containing each word capitalized.

Example:
let words = ['i', 'am', 'learning', 'recursion'];
capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
*/

// My Solution
const capitalizeWords = (arr) => {
  if (arr.length === 0) return [];

  const originalStr = arr[0];
  const capitalizedStr = originalStr.toUpperCase();
  let newArr = [capitalizedStr];
  return newArr.concat(capitalizeWords(arr.slice(1)));
};

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

// Colt's Solution
function capitalizeWordsColt(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWordsColt(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}
console.log(capitalizeWordsColt(words));
