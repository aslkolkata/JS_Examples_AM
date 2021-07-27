/*
this => the object that executing the current function

method: If a function is a part of an object called that function as method.
        In that case 'this' reference the object it self

function: If a function is a regular function (i.e not a part of an object)
          then 'this' reference to the global object which is the 'window object' for browser
          and 'global object' for the node
*/

/* Example_1: Method */
console.log(
  "============================================== this-method =============================================="
);
const student = {
  name: "Abhisek",
  showMarks() {
    console.log(this);
  },
};

student.showMarks(); // Point to the student object itself; since showMarks() is a method

/* Example_2: Function */
console.log(
  "============================================== this-function =============================================="
);
function playGame() {
  console.log(this);
}
playGame(); // Point to global/window object since it is a function

/* Example_3:  Constructor function */
console.log(
  "============================================== this-constructor function =============================================="
);
function Movie(movieName) {
  this.movieName = movieName; // set this to the empty object {}
  console.log(this);
}
const m = new Movie("ABCD");
// new operator create a new empty object {} first
// then set 'this' (in the constructor function) to this empty object

/* Example_4 */
console.log(
  "============================================== this =============================================="
);
const employee = {
  name: "Abhisek",
  phoneNumber: [1, 2, 3],

  showPhoneNumber() {
    this.phoneNumber.forEach(function (number) {
      console.log(this, number); // 'this' point to global object, since we are inside the callback function
    });

    this.phoneNumber.forEach(function (number) {
      console.log(this, number);
    }, this); // We pass the 'this' object
    // In this case we are not inside to the callback function; we are still in the execution context of the showPhoneNUmber()
  },
};
employee.showPhoneNumber();
