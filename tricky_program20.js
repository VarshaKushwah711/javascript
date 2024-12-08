let a = [1, 2, 3];
let b = [...a];
b[0] = 4;

console.log(a[0]);
console.log(b[0]);


// 1
4

// Explanation: The spread operator (...) creates a shallow copy of the array. Changing b[0] does not affect a[0], because the arrays are different instances in memory, even though they contain the same values initially.