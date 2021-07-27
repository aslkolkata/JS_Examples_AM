/* Java script value vs Reference Types */

// Value

let x = 20;
let y = x;
x = 30;
console.log(x); // 30
console.log(y); // 20

// Object
// Object is not stored to the variable
// object is store in the memory
// address of the memory location is stored inside the variable
// obj2 = obj1 ==> means address/reference is copied; i.e obj1 and obj2 both point to the same element in the memory
// Primitive copied by their value
// object copied by their reference
console.log(
  "============================================== JS Value VS Reference Type =============================================="
);

let obj1 = { value: 20 };
let obj2 = obj1;
obj1.value = 30;
console.log(obj1); // 30
console.log(obj2); // 30
