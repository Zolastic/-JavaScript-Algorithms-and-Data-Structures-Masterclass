/* 
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... 
which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
 */

// My Iterative Solution - Not actual answer for this question (trying to understand the problem and how to solve it)
const fibIterative = (num) => {
  if (num <= 2) return 1;
  let arr = [1, 1];
  for (let i = 0; i < num - 2; i++) {
    arr.push(arr[i] + arr[i + 1]);
  }

  return arr[num - 1];
};

console.log(fibIterative(4)); // 3
console.log(fibIterative(10)); // 55
console.log(fibIterative(28)); // 317811
console.log(fibIterative(35)); // 9227465

// My Recursive Solution - Actual answer for this question
const fib = (num) => {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2); //
};
/* 
fib(4)
    fib(3) + fib(2)
        (fib(2) + fib(1)) + 1
            (1 + 1) + 1
                3
*/
/* 
With the context of fib function.
1, 1, 2, 3, 5, 8,
- 1 + 1 = 2
- 1 + 1 + 2 = 1 + 1 + fib(2) = 1 + 1 + 1 = 3
- 1 + 1 + 2 + 3 = 1 + 1 + 1 + 1 + fib(2) + fib(1) = 1 + 1 + 1 + 1 + 1 = 5 
- 1 + 1 + 2 + 3 + 5 = 1 + 1 + 1 + 1 + 1 + 1 + fib(2) + fib(3) = 1 + 1 + 1 + 1 + 1 + 1 + 1 + fib(2) + fib(1) = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 = 8
*/
console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465

// Colt's Solution
function fibColt(n) {
  if (n <= 2) return 1;
  return fibColt(n - 1) + fibColt(n - 2);
}
