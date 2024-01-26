/* 
Write a function called recursiveRange which accepts a number 
and adds up all the numbers from 0 to the number passed to the function 
 */

// My Solution
const recursiveRange = (num) => {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
};
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55s

// Colt's Solution
function recursiveRangeColt(x) {
  if (x === 0) return 0;
  return x + recursiveRangeColt(x - 1);
}
