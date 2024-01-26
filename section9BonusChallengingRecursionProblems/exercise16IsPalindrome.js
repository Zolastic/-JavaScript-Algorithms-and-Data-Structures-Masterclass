/* 
Write a recursive function called isPalindrome which returns true 
if the string passed to it is a palindrome (reads the same forward and backward). 
Otherwise it returns false.

isPalindrome('awesome') false
isPalindrome('foobar') false
isPalindrome('tacocat') true
isPalindrome('amanaplanacanalpanama') true
isPalindrome('amanaplanacanalpandemonium') false
*/

// My Solution
const isPalindrome = (str) => {
  if (str.length <= 1) return true;
  let result = false;
  if (str[0] === str[str.length - 1]) {
    let newStr = str.substring(1, str.length - 1);
    result = isPalindrome(newStr);
  }

  return result;
};
console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false

// Colt Steele's Solution
function isPalindromeColt(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}
// console.log(isPalindromeColt("awesome")); // false
// console.log(isPalindromeColt("foobar")); // false
// console.log(isPalindromeColt("tacocat")); // true
// console.log(isPalindromeColt("amanaplanacanalpanama")); // true
// console.log(isPalindromeColt("amanaplanacanalpandemonium")); // false
