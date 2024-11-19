let myPromise = new Promise((resolve, reject) => {
  let success = false; // Change this to false to test rejection

  if (success) {
    resolve("Operation was successful!");  // Resolve with a result
  } else {
    reject("Something went wrong!");  // Reject with an error
  }
});

myPromise.then((result) => {
    console.log(result);  // If the promise is fulfilled, this will be called
  }).then(()=>{
    let a =10;
    console.log(a)
  }).catch((error) => {
    console.log(error);  // If the promise is rejected, this will be called
  });
