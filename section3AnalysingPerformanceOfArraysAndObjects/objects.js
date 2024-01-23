let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

// All of these are O(n). As the object grows, the time to access the property grows linearly.
// If we have 1000 properties, it will take 1000 operations to access the property.
console.log(Object.keys(instructor)); // ["firstName", "isInstructor", "favoriteNumbers"]
console.log(Object.values(instructor)); // ["Kelly", true, [1,2,3,4]]
console.log(Object.entries(instructor)); // [["firstName", "Kelly"], ["isInstructor", true], ["favoriteNumbers", [1,2,3,4]]]'

// O(1) - Constant time. No matter how big the object is, it will take the same amount of time to access the property.
console.log(instructor.hasOwnProperty("firstName")); // true

// In summary, objects are good when you don't need order. When you need order, use arrays.
// Inserting, removing and accessing keys are all O(1).
// Searching and accessing values are O(n).
