let x = 1;
function foo() {
  console.log(x);
  let x = 2;
}

foo();


//ReferenceError: Cannot access 'x' before initialization

// Explanation: The variable x inside the function is declared with let, which is block-scoped and also has a "temporal dead zone" (TDZ). This means you cannot access x before its declaration. So, when the console.log(x) is called, it throws a ReferenceError.