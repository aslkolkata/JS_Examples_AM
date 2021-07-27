let numStudents = 5;

// Initial values
let roll = 0;
let name = "Name_";
let age = 0;
let address = "Address_";
let marks = 0;
let division = "Division_";
let student_array = [];

// example - create object using constructor function
function CreateStudent(roll, name, age, address, marks, division) {
  this.roll = roll;
  this.name = name;
  this.age = age;
  (this.address = address),
    (this.marks = marks),
    (this.division = division),
    //Function expression
    (this.remarks = function () {
      console.log("Good Student");
    });
}

// Create student information
for (let i = 1; i <= numStudents; i++) {
  roll++;
  age++;
  marks++;
  st = new CreateStudent(roll, name + i, age, address + i, marks, division + i);
  student_array.push(st); //arrya push
}

console.log(`${numStudents} created student information::`); //template literals ``
for (var j = 0; j < student_array.length; j++) {
  console.log(student_array[j]);
  console.log(student_array[j].remarks());

  //clone_obj = Object.assign({}, student_array[j]);    //clone object
  clone_obj = { ...student_array[j] }; //clone object by using spreading operator
  console.log(clone_obj);
}

// example - Filter and arrow function
const filteredStudent = student_array.filter((student) => student.roll >= 5);
console.log("Show student objects whoes roll greater than 5\n");
console.log(filteredStudent);
//console.log(`Show student objects whoes roll greater than 5: ${filteredStudent}`); //Not work properly

// example - Map. Markes multipled by 100 and aasigne to new objects and array
const mapStudent = student_array.map((student) => ({
  updatedMarks: student.marks * 100,
}));
console.log("Show only student marks by mutiple of 100");
console.log(mapStudent);

// example - Reduce. Sum all the marks
const sumMarks = mapStudent.reduce(
  (accumlator, currentValue) => accumlator + currentValue.updatedMarks,
  0
);
console.log(`Sum of marks ${sumMarks}`);

// example - and
let a;
console.log("\n&& examples::");
console.log("1 && a: " + (1 && a));
console.log("1 && null: " + (1 && null));
console.log("1 && true: " + (1 && true));
console.log("1 && false: " + (1 && false));
console.log("1 && 'Abhisek': " + (1 && "Abhisek"));
console.log("1 && true && 'Abhisek': " + (1 && true && "Abhisek"));

// Write into file
/*
const fs = require('fs');
fs.writeFile('Output.txt', student_array, (error) => {     
    // In case of a error throw err. 
    if (error) throw err; 
})
*/

// this and bind example
console.log("\nExample of this and bind");
const person = {
  name: "Abhisek Mukherjee",
  walk() {
    console.log(this);
  },
};
const walk1 = person.walk;
walk1();

const walk2 = person.walk.bind(person);
walk2();

//object destructuring
const { name: n, walk } = person;

//spread oprator
const first_list = [1, 2, 3];
const sencond_list = [4, 5, 6];
const combined_list = [...first_list, "a", "b", ...sencond_list];
console.log(combined_list);
