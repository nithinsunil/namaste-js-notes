// Test codes here

let promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "First");
  // setTimeout(reject, 1000, "First");
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Second");
  //   setTimeout(reject, 2000, "Second");
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1500, "Third");
  //   setTimeout(reject, 1500, "Third");
});

Promise.any([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error); // This will print 'Third'
  });
