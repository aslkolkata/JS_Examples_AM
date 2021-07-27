/* ================================================================================================= */
/*console.log(
  "============================================== Arrow Function =============================================="
);*/
/* Arrow function */
/*
const square = function (number) {
  return number * number;
};

console.log(square(10));
*/

//ECMAScript 6 (ES6)
// remove 'function' keyword; for single parameter no need paranthesis ();
// if you have empty parameter use empty paranthesis ()
// for single line no need {} curly brases; no need to use 'return' keyword
/*
const square2 = (number) => number * number;

console.log(square2(100));
*/
/* ================================================================================================= */
/*console.log(
  "============================================== Filter =============================================="
);*/
/* Filter */
/*
const series = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = series.filter((n) => n % 2 == 0);
console.log(evenNumbers);
*/
/*console.log(
  "============================================== Map =============================================="
);*/
/* Map */
/*
const squareNumbers = series.map((n) => n * n);
console.log(squareNumbers);
*/
/* Reduce */
/*
console.log(
  "============================================== Reduce =============================================="
);*/
/*
const sum = series.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
*/

// reduce method has two argument:
// First: is a callback function
// second: initial value of accumulator set to 0 (Do not need to provide 2nd argument if initial value is 0)

//console.log(sum);
/* ================================================================================================= */
/* Object destructing */
console.log(
  "============================================== Object Destructing =============================================="
);
const address = {
  name: "Abhisek",
  city: "Andal",
  state: "West Bengal",
};

const { n, c, s } = address;
console.log(n); // undefined

const { name, city, state } = address;
console.log(city); //Andal

//const { state } = address; // Also do for a single value
//const { name } = address;

const { state: st } = address;
console.log(st);

/* ================================================================================================= */
console.log(
  "============================================== Spread Operators =============================================="
);
/* Spread operator */
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, ...second]; // combined = first.concat(sencond);
console.log(combined);
const combined2 = ["A", ...first, "a", "b", "c", ...second, "Z"];
console.log(combined2);

const clone = [...first]; // Cloning object
/* ================================================================================================= */

/* Object literals */
console.log(
  "============================================== Object literals =============================================="
);
//TODO
/* ================================================================================================= */
