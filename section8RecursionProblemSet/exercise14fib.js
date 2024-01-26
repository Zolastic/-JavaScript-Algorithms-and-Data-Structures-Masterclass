/* 
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... 
which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
 */

const fibInterative = (num) => {
  if (num == 1 || num == 2) return 1;
  let arr = [1, 1];
  for (let i = 0; i < num; i++) {
    arr.push(arr[i] + arr[i + 1]);
  }

  return arr[num];
};

console.log(fibInterative(4));
console.log(fibInterative(10));
console.log(fibInterative(28));
console.log(fibInterative(35));

const fib = (num) => {
  if (num <= 0) return 0;
};
