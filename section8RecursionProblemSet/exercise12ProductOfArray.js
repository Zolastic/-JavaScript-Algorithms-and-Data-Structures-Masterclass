/* 
Write a function called productOfArray which takes in an array of numbers 
and returns the product of them all.
 */

// My Solution
const productOfArray = (arr) => {
  if (arr.length <= 0) return 1;
  const num = arr[0];
  return num * productOfArray(arr.slice(1));
};
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

// Colt's Solution
function productOfArrayColt(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
