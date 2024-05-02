const name = {
  firstName: "Walter",
  lastName: "White",
  age: 48,
  country: "USA",
  printFullName: function (age, country) {
    console.log(
      this.firstName +
        " " +
        this.lastName +
        " aged " +
        (this.age ? this.age : age) +
        " from " +
        (this.country ? this.country : country)
    );
  },
};

const name2 = {
  firstName: "Jesse",
  lastName: "Pinkman",
};

name.printFullName();

// Below, the first parameter defines where the value of 'this' keyword should go to, second and so on are the exrta parameters.

// CALL METHOD
name.printFullName.call(name2, 27, "USA"); // now value of 'this' keyword = name2

// APPLY METHOD
name.printFullName.apply(name2, [25, "USA"]); // in apply() method, arguments are passed as an array.

// BIND METHOD
const printMyName = name.printFullName.bind(name2, 10, "India"); // keep a copy of printFullName method with predefined arguments into a variable and use it later.
printMyName(); // prints "Jesse Pinkman aged 10 from India"

// bind() method gives you the copy which can be invoked later rather than directly invoking it wherever we are writing the code like call() method does.
