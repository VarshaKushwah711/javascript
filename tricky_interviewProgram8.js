var a = 10;
(function() {
  console.log(a);
  var a = 20;
})();

// Answer: undefined.

// Explanation: The a inside the function is hoisted to the top of the function scope, and its value is undefined when console.log(a) is executed. The assignment of 20 happens after the console.log.
