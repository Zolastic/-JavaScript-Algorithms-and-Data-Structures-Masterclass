/* Write a function called isSubsequence which takes in two strings and checks whether the 
characters in the first string form a subsequence of the characters in the second string. 
In other words, the function should check whether the characters in the first string appear 
somewhere in the second string, without their order changing.

Examples:
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:
Time Complexity - O(N + M)
Space Complexity - O(1) */

// My Solution
const isSubsequence = (str1, str2) => {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return false;
  }

  // Check each letter in str1 whether they are in str2
  // two variables in loop, i and j. if i and j don't match, j will move on to the next character.

  for (let i = 0, j = 0; i < str1.length; ) {
    if (str1[i] === str2[j]) {
      i++;
    }

    j++;

    if (j === str2.length && str1[i] !== str2[j]) {
      return false;
    }
  }

  return true;
};
console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));

// Colt's Solution
function isSubsequenceColt(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
