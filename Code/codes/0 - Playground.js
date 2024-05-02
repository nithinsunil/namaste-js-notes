// Test codes here
const student = {
  name: "Walter",
  x: function () {
    console.log(this);
  },
};

const student2 = {
  name: "deepika",
};

student.x.call(student2);
