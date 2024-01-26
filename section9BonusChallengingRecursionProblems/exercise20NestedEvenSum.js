/* 
Write a recursive function called nestedEvenSum. 
Return the sum of all even numbers in an object which may contain nested objects.

Examples:

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};


nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
*/

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

// My Solution
const nestedEvenSum = (obj) => {
  let sum = 0;

  for (let key in obj) {
    const val = obj[key];
    if (typeof val === "object") {
      sum += nestedEvenSum(val);
    } else if (val % 2 === 0) {
      sum += val;
    }
  }

  return sum;
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); //10

// Colt's Solution
function nestedEvenSumColt(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSumColt(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}
