let numStudents = 5;

// Initial values
let roll = 0;
let name = "Name_";
let age = 0;
let address = "Address_";
let marks = 0;
let division = "Division_";
let student_array = [];


// example - create object using factory function
// object destructuring
function createStudent(roll, name, age, address, marks, division) {
    student = {
        roll,
        name,
        age,
        address,
        marks,
        division,
        remarks() {
            console.log("Good Student");
        },
        get get_marks() {
            return `${marks}`;
        },
        set set_marks(marks) {
            this.marks = marks;
        }
    }
    return student;
}

// Create student information
for (let i=1; i <=numStudents; i++){
    roll++;
    age++;
    marks++;
    st = createStudent(roll, name + i, age, address + i, marks, division + i);
    student_array.push(st);
}

console.log(`${numStudents} created student information::`)
for (var j = 0; j < student_array.length; j++) {
    console.log(student_array[j]);
    console.log(student_array[j].remarks());
    student_array[j].set_marks = 100;
    console.log(student_array[j].get_marks);
}