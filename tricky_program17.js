function add(a, b = 2) {
    return a + b;
  }
  
  console.log(add(1, 3));
  console.log(add(1));
  


//4
// 3

// Explanation: In the first call, both parameters a and b are provided, so the function uses a = 1 and b = 3, returning 1 + 3 = 4. In the second call, only a is provided, and the default value 2 is used for b, returning 1 + 2 = 3.