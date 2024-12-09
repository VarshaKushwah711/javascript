console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");



// Start
// End
// Promise
// Timeout

// Explanation:

//     The synchronous code (Start and End) is executed first.
//     The Promise.resolve().then(...) is placed in the microtask queue, so it is executed after the synchronous code, but before the setTimeout.
//     setTimeout is placed in the macrotask queue and executes last, after all microtasks are completed.