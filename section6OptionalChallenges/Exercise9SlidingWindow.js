/* Write a function called findLongestSubstring, 
which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n) */

// My Solution - WRONG
/* solution is not O(N) because of the inner loop where you reset the 
frequencyCounter and j when encountering a repeated character. 
The worst-case time complexity of your solution is closer to O(N^2). */
const findLongestSubstring = (str) => {
  if (!str || str.length === 0) {
    return 0;
  }

  let i = 0;
  let j = 0;
  let longestLength = 0;
  let frequencyCounter = {};

  while (i < str.length) {
    if (!frequencyCounter[str[j]] && j < str.length) {
      frequencyCounter[str[j]] = 1;
      j++;
    } else {
      longestLength = Math.max(longestLength, j - i);
      frequencyCounter = {};
      j = ++i;
    }
  }

  return longestLength;
};

console.log(findLongestSubstring("")); // Expected output: 0
console.log(findLongestSubstring("rithmschool")); // Expected output: 7
console.log(findLongestSubstring("thisisawesome")); // Expected output: 6
console.log(findLongestSubstring("thecatinthehat")); // Expected output: 7
console.log(findLongestSubstring("bbbbbb")); // Expected output: 1
console.log(findLongestSubstring("longestsubstring")); // Expected output: 8
console.log(findLongestSubstring("thisishowwedoit")); // Expected output: 6

// ChatGPT's Solution
const findLongestSubstringGPT = (str) => {
  if (!str || str.length === 0) {
    return 0;
  }

  let i = 0;
  let j = 0;
  let longestLength = 0;
  let frequencyCounter = {};

  while (j < str.length) {
    if (!frequencyCounter[str[j]]) {
      frequencyCounter[str[j]] = 1;
      j++;
      longestLength = Math.max(longestLength, j - i); // Update longestLength inside the loop
    } else {
      delete frequencyCounter[str[i]]; // Remove the character at position i from the frequencyCounter
      i++;
    }
  }

  return longestLength;
};

// Colt's Solution
function findLongestSubstringColt(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
// console.log(findLongestSubstringColt("rithmschool")); // Expected output: 7
console.log(findLongestSubstringColt("thisisawesome"));
