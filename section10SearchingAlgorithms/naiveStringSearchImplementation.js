// Naive Solution
const naiveSearch = (long, short) => {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      console.log(short[j], long[i + j]);
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
};
console.log(naiveSearch("lorie loled", "lol"));

// Better Solution
const naiveStringSearch = (long, short) => {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    let currentLong = long.slice(i, i + short.length);
    if (currentLong === short) {
      count++;
    }
  }
  return count;
};

console.log(naiveStringSearch("lorie loled", "lol"));
