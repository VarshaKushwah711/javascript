function foo() {
    console.log(a); // Output?
    var a = 2;
    console.log(a); // Output?
  }
  
  foo();
  

//undefined
// 2

// Explanation:

//     The variable a is declared with var, which is hoisted. However, only the declaration (var a) is hoisted, not the assignment (a = 2).
//     The first console.log(a) logs undefined because a is declared but not yet assigned.
//     After the assignment, a becomes 2, so the second console.log(a) logs 2.