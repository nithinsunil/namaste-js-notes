// // creating a Promise

// const p1 = new Promise((resolve, reject) => {
//   resolve("p1 is resolved!");
// });

// async function handleFunction() {
//   const data = p1.then((res) => console.log(res));
//   console.log(data);
// }

// handleFunction();

// Promise APIs

let promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "First success");
  //   setTimeout(reject, 1000, "First error");
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Second success");
  //   setTimeout(reject, 2000, "Second error");
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1500, "Third success");
  //   setTimeout(reject, 1500, "Third error");
});

Promise.all([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

Promise.allSettled([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

Promise.race([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

Promise.any([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.error(err.errors); // taking 'errors' property from 'err' object
  });
