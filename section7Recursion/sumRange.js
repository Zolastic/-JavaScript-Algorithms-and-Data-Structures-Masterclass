// Recursion Example 2: Sum Range
/* Can you spot the base case? 
What is the input to the recursive function? 
What would happen if we didn't return the recursive call? */
const sumRange = (num) => {
  if (num === 1) return 1; // base case
  return num + sumRange(num - 1); // recursive call with different input
};

/* 
  sumRange(3)
      return 3 + sumRange(2)
                  return 3 + 2 + sumRange(1)
      return 3 + 2 + 1
      return 6 
  */

sumRange(3); // 6
