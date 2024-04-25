// function a(b) {
//   console.log("a");
//   b();
// }

// // Below, a function is passed as an argument. The function 'y' here is a callback function
// a(function b() {
//   console.log("b");
// });

// // Below, the setTimeout uses callback function 'x', this helps us do async tasks
// setTimeout(function x() {
//   console.log("hey");
// }, 3000);

// document.getElementById("clickme").addEventListener("click", function x(){
//     console.log('button clicked');
// })

// const obj = {
//     one: function(){console.log('this is one');},
//     two: function(){console.log('this is two');}
// }

// console.log(typeof(obj.two));

const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];

const result = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(result);
