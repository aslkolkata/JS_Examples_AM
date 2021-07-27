//==========================================================================================================//

/*
    Reference types::
        Object
        Array
        Function
*/

//==========================================================================================================//
/* Object */
console.log(
  "============================================== Objects =============================================="
);

let person = {
  name: "Abhisek",
  age: 31,
}; // Here 'key' are name,age; key-value pair

console.log(typeof person);
console.log(person);

//Change Value using Dot notation
person.name = "AbhisekMukherjee";
console.log(person);

//Change Value using Bracket notation
person["name"] = "ABHISEK";
console.log(person);

// Delete object property
delete person.age;
console.log(person);

// Add object property
person["address"] = "Andal";
console.log(person);

//==========================================================================================================//
/* Array */
console.log(
  "============================================== Array =============================================="
);
/* Methods:  filter, map, reduce, join, findIndex, length, forEach ... */
let selectedName = ["a", "b", "c", "d"];
console.log(typeof selectedName);
console.log(selectedName);

// Access using index
selectedName[0] = "A";
selectedName[3] = "D";
console.log(selectedName);

//Array legth is dynamic; Append
selectedName[4] = 4;
console.log(selectedName); // Array length is dynamic; Array is Heterogenous

selectedName[7] = 7;
console.log(selectedName); // append 2 empty items in the 5 and 6 th index

console.log(selectedName[5]); // undefined

// Technically Array is an Object in javascript

//example of array property like filter, map, reduce, length
console.log(selectedName.length);

//==========================================================================================================//
/* Function */
console.log(
  "============================================== Function =============================================="
);
function printSomething(name) {
  console.log(name);
}
printSomething("Abhisek");

function square(num) {
  return num * num;
}
console.log(square(2)); // Function argument can be a function call

console.log(typeof square);
