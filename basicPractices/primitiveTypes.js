//==========================================================================================================//
/*
    Variables
*/
// 'var' donot use to declare variable ==> has scoping issues
// ES6 introduce 'let', 'const' (ES6 new javascript version introduce in 2015)

// ES6 stands for ECMAScript 6.
// ECMAScript was created to standardize JavaScript,
// and ES6 is the 6th version of ECMAScript, it was published in 2015,
// and is also known as ECMAScript 2015.

// 'var' is accessible outside the block; its scope not limited to the block, its scope limited to the whole function
// 'let' has only the scope inside the block
// 'var' => function scope variable; if it declare outside anything then it is global and ATTACHED with with 'window' object
// 'let', 'const' => block scope variables

console.log(
  "============================================== Example of variables =============================================="
);
let a;
console.log(a); // by default value of varibales is undefined

let fisrtName = "Abhisek";
console.log(fisrtName);

fisrtName = "AbhisekMukherjee";
console.log(fisrtName);

const aadharNumber = 12345678;
console.log(aadharNumber);

//const aadharNumber; // Must be initialise at the time of declaration
// Use const when u do not have to reassign

//==========================================================================================================//

/*
    Primitive types/Value Types::
        String (Methods: indexOf, length, includes, startsWith, endsWith, replace, toUpperCase...)
        Number
        Boolean
        undefined
        null
*/

let name = "Abhisek";
let age = 31;
let isApproved = true;
let address;
let phoneNumber = null; //use null when we have to explicitly need to clear the value of the variable; clear the value

console.log(
  "============================================== Type of variables =============================================="
);
console.log(typeof name);
console.log(typeof age);
console.log(typeof isApproved);
console.log(typeof address);
console.log(typeof phoneNumber);
//==========================================================================================================//

/*
    Dynamic Typing::
        Static-typed (C) ==> Check types then Run
        Dynamic-typed (JS, Python) ==> Run then Check types
*/
console.log(
  "============================================== Dynamic typing =============================================="
);

let b;
console.log(typeof b);
b = "a";
console.log(typeof b);
b = 1;
console.log(typeof b);
b = true;
console.log(typeof b);
b = null;
console.log(typeof b);

//==========================================================================================================//
console.log(
  "============================================== Weak typing (Implicit conversion) =============================================="
);
// Weakly typed means the compiler, if applicable, doesn't enforce correct typing.
// Without implicit compiler interjection, the instruction will error during run-time.

// Implicit conversion

let x = "100";
let y = 2;
const z = x * y; // string * number => number
console.log(typeof z);
console.log(z);
console.log(4 + "7"); // string
console.log(4 * "7"); // number
console.log(4 + true); // number
console.log(4 + false); // number

let v1 = 10,
  v2 = 20,
  v3 = "Abhisek",
  v4 = "Mukherjee";
console.log(v1 + v2 + v3 + v4);

//==========================================================================================================//
// Explicit conversion
console.log(
  "============================================== Explicit conversion =============================================="
);
console.log(Number("6"));
console.log(Boolean(10));
console.log(Boolean(0));
console.log(String(true));

//==========================================================================================================//
//Scope
console.log(
  "============================================== Scope =============================================="
);
let a4 = "Global_A4";
// var a1 = "Global_A1";
//console.log(a1);
{
  var a1 = "Block_A1";
  let a2 = "A2";
  const a3 = "A3";
  let a4 = "Block_A4";
  console.log(a4); //Block_A4
}
console.log(a1); // overrride the global a1 value
// console.log(a2); // Cannot access it outside of the block
// console.log(a3); // Cannot access it outside of the block
console.log(a4); // Global_A4

//==========================================================================================================//
// Hoisting
// variables and function declaration are hoisted to the top of the scope
console.log(
  "============================================== Hoisting =============================================="
);
/* Example 1 */
// console.log(str1); // Error: str not found

/* Example 2 */
console.log(str2); // undefined: No error ==> Because JS internally declare 'str2' variables first
// Declaration always move to top; i.e declaration always hoisted to the top

var str2;
str2 = "Abhisek";
//console.log(str2); // Abhisek

/* Example 3 */
console.log(str3); // undefined ==> declaration are hoisted to the top; But defination is not hoisted to the top
var str3 = "Abhisek";
//console.log(str3); // Abhisek

/* Example 4 */
// function is also hoisted to the top
funcA();
function funcA() {
  console.log("In funcA");
}

/* Example 5 */
// Generate error bacause ==> 'funcVar' variable is declare (hoisted) at the top [Decalred but not defined]
// But the actual function assignment will do later
// So, function call error occured

// funcVar();    // Error generate: funcVar is not a function
var funcVar = function () {
  console.log("In funcVar");
};
funcVar(); // In funcVar

//==========================================================================================================//
/* String Properties */
console.log(
  "============================================== String properties =============================================="
);
let myName = "Abhisek Mukherjee";
console.log(`Length: ${myName.length}`);
console.log(`indexOf: ${myName.indexOf("e")}`); // Return the first one
console.log(`startWith ${myName.startsWith("Ab")}`);
console.log(`startWith ${myName.startsWith("ab")}`); // case sensitive
console.log(`toUpper  ${myName.toUpperCase()}`);
// string literals
//==========================================================================================================//
