// Shortest JS program (An empty file)

var a = 5;

function test() {
  var b = 10; // cannot access in global space
}

console.log(a);
console.log(window.a);
console.log(this.a); // these 3 prints the same value

console.log(b); // ReferenceError: b is not defined
