/* Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities:
Time: O(N)
Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false */

// My Solution
const sameFrequency = (num1, num2) => {
  if (
    num1 === null ||
    num2 === null ||
    typeof num1 != "number" ||
    typeof num2 != "number" ||
    num1.length != num2.length
  ) {
    return false;
  }

  const stringNum1 = num1.toString();
  const stringNum2 = num2.toString();

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let num of stringNum1) {
    frequencyCounter1[num]
      ? ++frequencyCounter1[num]
      : (frequencyCounter1[num] = 1);
  }

  for (let num of stringNum2) {
    frequencyCounter2[num]
      ? ++frequencyCounter2[num]
      : (frequencyCounter2[num] = 1);
  }

  for (let key in frequencyCounter1) {
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
};

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));

// Colt's solution
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
