// Write a function which takes in a string and returns counts of each character in the string.
function charCount(str) {
  str = str.toLowerCase();
  var f = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      f[str[i]] = f[str[i]] + 1 || 1; // if f[str[i]] is undefined, it will be 1. Otherwise, it will be f[str[i]] + 1. undefined + 1 = NaN. Nan is falsy value
    }
  }
  return f;
}
console.log("charCount: ", charCount("my name is Nhat Tien 24"));

// OR

function charCount2(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
console.log("charCount2: ", charCount2("my name is Nhat Tien 24"));
