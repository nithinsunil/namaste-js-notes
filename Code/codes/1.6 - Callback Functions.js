// Callback Functions

// Here function which prints 'Hello there!' is the callback function. It is an argument of the setTimout() function here.
setTimeout(function () {
  console.log("Hello there!");
}, 3000);

// Example for a Callback Hell

firstFunction(args, function () {
  secondFunction(args, function () {
    thirdFunction(args, function () {
      // And so on…
    });
  });
});
