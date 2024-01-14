// Create a promise
const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      const success = true; // Set to false to simulate a failure
  
      if (success) {
        // If the operation is successful, resolve the promise
        resolve('Data has been fetched successfully!');
      } else {
        // If the operation fails, reject the promise
        reject('Error fetching data');
      }
    }, 2000); // Simulating a 2-second delay
  });
  
  // Using the promise
  myPromise
    .then((result) => {
      // This block executes if the promise is resolved
      console.log(result);
    })
    .catch((error) => {
      // This block executes if the promise is rejected
      console.error(error);
    });
// Create a promise
const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation (e.g., fetching data)
  setTimeout(() => {
    const success = true; // Set to false to simulate a failure

    if (success) {
      // If the operation is successful, resolve the promise
      resolve('Data has been fetched successfully!');
    } else {
      // If the operation fails, reject the promise
      reject('Error fetching data');
    }
  }, 2000); // Simulating a 2-second delay
});

// Using the promise
myPromise
  .then((result) => {
    // This block executes if the promise is resolved
    console.log(result);
  })
  .catch((error) => {
    // This block executes if the promise is rejected
    console.error(error);
  });
  