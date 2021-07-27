/* Constructor Function */

// Constructor function produce objects; used to generate objects
// Use: Pascal Notation
// this => 'this' is the reference to the object  that is executing the code
// this always return the reference of the current object

console.log(
  "============================================== Constructor Function =============================================="
);
function CreateStudent(roll) {
  this.roll = roll;
  this.getRoll = function () {
    console.log(roll);
  };
  // return this; // Do not have to do explicitly; it is done internally
}

const student1 = new CreateStudent(1);
// new operator create an empty object -> then set 'this' to point to the object -> then return the object
console.log(student1);
console.log(student1.getRoll());

/*
Factory function => you have to return the new object explictly
Constructor function => use 'new' and 'this'
*/
