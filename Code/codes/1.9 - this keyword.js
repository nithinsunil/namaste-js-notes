//  arrow functions doesn't provide their own 'this' binding
// 'this' keyword in arrow functions refers to the 'this' value of code that contains the arrow function, not the arrow function itself. It works as if the arrow function is invisible.

// Example 1
const obj = {
  a: 10,
  x: () => {
    console.log(this);
  },
};

obj.x(); // logs the global object. No 'this' binding for arrow function, so it goes to obj, where is obj located? in global. So it logs global object.

//Example 2
const obj2 = {
  a: 20,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj2.x(); // logs the obj2 object. No 'this' binding for arrow function, so it goes to function x(), where is x() located? in obj2. So it logs obj2.
