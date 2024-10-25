// Get user input
let a = prompt("Enter the value for a:");
let b = prompt("Enter the value for b:");

// Convert input values to integers
a = parseInt(a);
b = parseInt(b);

console.log("Before Swapping: a =", a, ", b =", b);

let temp = a;
a = b;
b = temp;

console.log("After Swapping: a =", a, ", b =", b);
