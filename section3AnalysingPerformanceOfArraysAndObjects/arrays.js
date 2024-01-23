let names = ["Michael", "Melissa", "Andrea"];

// Accessing an element in an array is O(1). It doesn't matter how big the array is or what index of the array you're trying to access.
console.log("accessing an element in an array: ", names[2]);

// Inserting an element at the end of an array is O(1). It doesn't matter how big the array is.
names.push("Raj");

// Inserting an element at the beginning of an array is O(n). It matters how big the array is.
// This is because all the elements have to be re-indexed. Meaning that all the elements have to be shifted to the right.
names.unshift("John");
console.log("after inserting", names);

// Removing an element from the end of an array is O(1). It doesn't matter how big the array is.
names.pop();

// Removing an element from the beginning of an array is O(n). It matters how big the array is.
// This is because all the elements have to be re-indexed. Meaning that all the elements have to be shifted to the left.
names.shift();
console.log("after removing", names);
