// Scope in JS

function a() {
  b();
  function b() {
    c();
    function c() {
      var num2 = 10;
      console.log(num); // will print 5 (checks scopes of c -> b -> a -> global)
    }
  }
}
var num = 5;
console.log(num2); // will not print 10 (can only access scope of global, cannot go to inner scopes)

a();
