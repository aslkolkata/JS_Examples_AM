/* ================================================================================================= */
console.log(
  "============================================== try-catch-finally =============================================="
);

try {
  console.log("First in try block");
  abcd;
  console.log("End in try block");
} catch (err) {
  console.log("The Error is ==> " + err.stack);
} finally {
  console.log("In finally block");
}
console.log("Out of the block");

console.log(
  "============================================== throw =============================================="
);
let obj = { name: "Abhisek" };
try {
  if (!obj.age) {
    throw new SyntaxError("Incomplete object do not have age");
    // throw true;
    // throw "Age not found";
  }
} catch (e) {
  console.log("Error is ==> " + e);
}

console.log(
  "============================================== && =============================================="
);
let a; // undefined

console.log("1 && a: " + (1 && a));
console.log("a && 1: " + (a && 1));

console.log("1 && null: " + (1 && null));
console.log("null && 1: " + (null && 1));

console.log("1 && true: " + (1 && true));
console.log("true && 1: " + (true && 1));

console.log("1 && false: " + (1 && false));
console.log("false && 1: " + (false && 1));

console.log("1 && 'Abhisek': " + (1 && "Abhisek"));
console.log("'Abhisek' && 1: " + ("Abhisek" && 1));

console.log("1 && true && 'Abhisek': " + (1 && true && "Abhisek"));
console.log("true && 'Abhisek && 1': " + (true && "Abhisek" && 1));
console.log("true && 'Abhisek && '' && 1': " + (true && "Abhisek" && "" && 1));
