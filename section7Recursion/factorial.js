// Factorial Iterative Solution
const factorialIterative = (n) => {
  let total = 1;
  for (let i = n; i > 1; i--) {
    total *= i;
  }
  return total;
};
console.log(factorialIterative(5)); // 120

// Factorial Recursive Solution
const factorialRecursive = (n) => {
  if (n === 1) return 1; // base case
  return n * factorialRecursive(n - 1); // recursive call with different input
};

console.log(factorialRecursive(5)); // 120
