// Block and Block Scope

{
  var a = 10;
  let b = 20;
  const c = 30;

  console.log(a); // can access
  console.log(b); // can access
  console.log(c); // can access
}

console.log(a); // can access
console.log(b); // cannot access
console.log(c); // cannot access

function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

x();

function a() {
  for (var i = 1; i <= 5; i++) {
    function b(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    b(i);
  }
}

a();

function outer() {
  var a = "hello";
  function inner() {
    console.log(a);
  }
  return inner;
}
outer()(); // this double paranthesis works because outer() is returning inner(), otherwise error occurs.
