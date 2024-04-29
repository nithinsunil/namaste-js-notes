const API_URL = "https://fakestoreapi.com/products/1";

// Example of an async await function (with error handling)
async function handleFunction() {
  try {
    const data = await fetch(API_URL);
    const jsonData = await data.json();
    console.log(jsonData);
  } catch (err) {
    console.log(err);
  }
}
handleFunction();

// If there are multiple promises to be carried out (2 scenarios given below)

// first promise 5 sec, second promise 10 sec

const p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("p1 is resolved");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("p2 is resolved");
  }, 10000);
});

async function handleFunction() {
  const val1 = await p1;
  console.log(val1); // prints after 5 seconds

  const val2 = await p2;
  console.log(val2); // printed after 10 seconds
}

// first promise 10 sec, second promise 5 sec

const p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("p1 is resolved");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("p2 is resolved");
  }, 5000);
});

async function handleFunction() {
  const val1 = await p1;
  console.log(val1); // prints after 10 seconds

  const val2 = await p2;
  console.log(val2); // printed after 10 seconds
}

handleFunction();
