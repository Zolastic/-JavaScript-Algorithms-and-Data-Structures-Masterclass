/* 
Write a function called stringifyNumbers which takes in an object 
and finds all of the values which are numbers and converts them to strings. 
Recursion would be a great way to solve this!

Example:
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

stringifyNumbers(obj)
|
|
V

{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}

*/

// My Solution
const stringifyNumbers = (obj) => {
  for (let key in obj) {
    const val = obj[key];
    if (typeof val === "object" && !Array.isArray(obj[key])) {
      obj[key] = stringifyNumbers(val);
    } else if (typeof val === "number") {
      obj[key] = val.toString();
    }
  }
  return obj;
};

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

// Colt's Solution
function stringifyNumbersColt(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      //   console.log("if is object: ", JSON.stringify(obj[key]));
      newObj[key] = stringifyNumbersColt(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
console.log(stringifyNumbersColt(obj));

console.log(stringifyNumbers(obj) === stringifyNumbersColt(obj));
console.log(
  JSON.stringify(stringifyNumbers(obj)) ===
    JSON.stringify(stringifyNumbersColt(obj))
); // true
