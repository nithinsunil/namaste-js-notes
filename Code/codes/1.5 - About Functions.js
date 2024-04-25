// About Functions

// Function Statement or Function Declaration

function a() {
  console.log("hello");
}

// Function Expression (function stored inside a variable)

var b = function () {
  console.log("hello");
};

// Anonymous Function (function without a name. Same concept used in Function Expression)

var c = function () {
  console.log("hello");
};

// Named Function Expression (function expression but with a function name)

var d = function sample() {
  console.log("hello"); // 'sample' can be used anywhere inside this block only
};

d(); // prints 'hello'
sample(); // ReferrenceError: sample is not defined

// Parameters and Arguments

function e(param1, param2) {
  // this is parameters
  console.log(param1, param2);
}

e(1, 2); // These are arguments

// First Class Functions

var f = function () {
  // function used as a value in a variable
  console.log("hello");
};

function g(param) {
  console.log(param);
}

g(function () {
  console.log("hello");
}); // function used as a parameter

function h() {
  console.log("something");
  return function () {
    // function used in a return statement
    // some code
  };
}
