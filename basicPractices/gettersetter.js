/* Getters and Setters
   getters => access property of object (use get keyword)
   setters => change/mutate of the property of the object (use set keyword)
 */
console.log(
  "============================================== Getter and Setter =============================================="
);
const person = {
  firstName: "Abhisek",
  lastName: "Mukherjee",

  get fullName() {
    return `${person.firstName} ${person.lastName}`; // example of ==> literals ``
  },

  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(person.fullName);
person.fullName = "ABHISEK MUKHERJEE";
console.log(person.fullName);
