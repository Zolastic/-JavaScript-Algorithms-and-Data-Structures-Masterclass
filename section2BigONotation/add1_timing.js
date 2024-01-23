const addUpTo = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// Run this snippet from section2-BigONotation/add1_timing.js a few times
// Different machines will record different times
// The same machine will record different times!
// For fast algorithms, speed measurements may not be precise enough!
// Time elapsed example: https://rithmschool.github.io/function-timer-demo/
