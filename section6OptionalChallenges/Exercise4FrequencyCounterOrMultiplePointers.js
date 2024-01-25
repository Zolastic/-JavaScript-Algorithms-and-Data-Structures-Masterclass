/* Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1) */

// My Solution
const areThereDuplicates1 = (...args) => {
  let frequencyCounter = {};

  for (let val of args) {
    if (frequencyCounter[val]) {
      return true;
    }

    frequencyCounter[val] = 1;
  }

  return false;
};
console.log(areThereDuplicates1(1, 2, 3));
console.log(areThereDuplicates1(1, 2, 2));
console.log(areThereDuplicates1("a", "b", "c", "a"));

// My Solution 2
const areThereDuplicates2 = (...args) => {
  args.sort(); // multiple pointers pattern is often associated with sorted arrays, it can be adapted for use with unsorted arrays based on the problem requirements and constraints.

  for (let i = 0, j = 1; j < args.length; i++, j++) {
    if (args[i] === args[j]) {
      return true;
    }
  }

  return false;
};
console.log(areThereDuplicates2(1, 2, 3));
console.log(areThereDuplicates2(1, 2, 2));
console.log(areThereDuplicates2("a", "b", "c", "a"));

// Colt's Solution Frequency Counter
/* It's worth noting that while using the arguments object is a valid approach, 
modern JavaScript often encourages using rest parameters (...args syntax) to achieve similar functionality 
in a more concise and readable way. The arguments object is considered somewhat outdated, and rest parameters 
provide a more array-like and flexible way to handle function arguments. */
function areThereDuplicatesFrequencyCounter() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

// Colt's Solution Multiple Pointers
function areThereDuplicatesMultiplePointers(...args) {
  args.sort((a, b) => {
    if (a < b) return -1; // a negative value if a should be sorted before b.
    if (a > b) return 1; // a positive value if a should be sorted after b.
    return 0; // 0 if a and b are considered equal and their order doesn't matter.
  });

  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
