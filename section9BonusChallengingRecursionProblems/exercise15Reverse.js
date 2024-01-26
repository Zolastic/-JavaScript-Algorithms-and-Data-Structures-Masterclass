/* 
Write a recursive function called reverse which accepts a string 
and returns a new string in reverse.

Examples:
reverse('awesome') // 'emosewa'
reverse('rithmschool') // 'loohcsmhtir' 
*/

// My Solution
const reverse = (str) => {
  if (str.length === 0) return "";
  let reversedString = str[str.length - 1];
  let newStr = str.substring(0, str.length - 1);
  return reversedString + reverse(newStr);
};

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'

// Colt Steele's Solution
function reverseColt(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}
