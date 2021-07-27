/* Factory function */

// Factory function produce objects; used to generate objects
// Use: camel notation for factory function
console.log(
  "============================================== Factory Function =============================================="
);
function createStudent(roll) {
  const student = {
    roll, // this is equivalent to roll: roll (if key value name same then use it)

    // inside the object no need to use 'function' keyword; i.e do not need to use key-value pair
    // also do not need to use syntax like 'getRoll: function () '
    getRoll() {
      console.log(roll);
    },

    /* getRoll: function () {
      console.log(roll);
    }, */
  };

  return student;
}

const student1 = createStudent(1);
console.log(student1);
console.log(student1.getRoll());
const student2 = createStudent(2);
console.log(student2);
console.log(student2.getRoll);
