/* 
Write a function called collectStrings which accepts an object 
and returns an array of all the values in the object that have a typeof string

Example:
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])
*/

// My Solution
const collectStrings = (obj) => {
  let arrOfStr = [];

  for (let key in obj) {
    const val = obj[key];
    if (typeof val === "string") {
      arrOfStr.push(val);
    } else if (typeof val === "object" && !Array.isArray(val)) {
      arrOfStr = arrOfStr.concat(collectStrings(val));
    }
  }

  return arrOfStr;
};

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"]

// Colt's Solution - Helper Method Recursion
function collectStringsColt(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
    for (var key in o) {
      if (typeof o[key] === "string") {
        stringsArr.push(o[key]);
      } else if (typeof o[key] === "object") {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;
}

// Colt's Solution - Pure Recursion
function collectStringsColt2(obj) {
  var stringsArr = [];
  for (var key in obj) {
    if (typeof obj[key] === "string") {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      stringsArr = stringsArr.concat(collectStringsColt2(obj[key]));
    }
  }

  return stringsArr;
}
