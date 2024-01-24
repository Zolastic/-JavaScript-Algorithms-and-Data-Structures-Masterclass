/* ANAGRAMS 
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
Examples:
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
Note: You may assume the string contains only lowercase alphabets. */

// My Solution
const myValidAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // for arrays use for of loop
  for (let val of str1) {
    frequencyCounter1[val] = frequencyCounter1[val] + 1 || 1; // this is fine but it's better to use (frequencyCounter1[val] || 0) + 1; because it's more readable
  }

  for (let val of str2) {
    frequencyCounter2[val] = frequencyCounter2[val] + 1 || 1;
  }

  // for objects use for in loop
  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
};

console.log("myValidAnagram: ", myValidAnagram("", ""));
console.log("myValidAnagram: ", myValidAnagram("aaz", "zza"));
console.log("myValidAnagram: ", myValidAnagram("anagram", "nagaram"));
console.log("myValidAnagram: ", myValidAnagram("rat", "car"));
console.log("myValidAnagram: ", myValidAnagram("awesome", "awesom"));
console.log("myValidAnagram: ", myValidAnagram("qwerty", "qeywrt"));
console.log(
  "myValidAnagram: ",
  myValidAnagram("texttwisttime", "timetwisttext")
);

// Colt's Solution
const validAnagram = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; ++i) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? ++lookup[letter] : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; ++i) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram. Zero is the only number that evaluates to falsy
    if (!lookup[letter]) {
      return false;
    } else {
      --lookup[letter];
    }
  }

  return true;
};

console.log("validAnagram: ", validAnagram("", ""));
console.log("validAnagram: ", validAnagram("aaz", "zza"));
console.log("validAnagram: ", validAnagram("anagram", "nagaram"));
console.log("validAnagram: ", validAnagram("rat", "car"));
console.log("validAnagram: ", validAnagram("awesome", "awesom"));
console.log("validAnagram: ", validAnagram("qwerty", "qeywrt"));
console.log("validAnagram: ", validAnagram("texttwisttime", "timetwisttext"));
