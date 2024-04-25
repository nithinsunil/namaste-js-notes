// Functions in JS

var x = 1;

function a() {
  var x = 2;
  function c() {
    // var x = 4;
    console.log(x); // logs 2
  }
  c();
}

function b() {
  var x = 3;
  console.log(x); // logs 3
}

a();
b();

console.log(x); // logs 1
