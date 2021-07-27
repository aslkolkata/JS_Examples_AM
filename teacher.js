//import { Person } from './person';
const { Person } = require('./person');

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log("Teach");
    }
}

const teacher = new Teacher("Abhisek", "MCA");
console.log(teacher);
console.log(teacher.name);
console.log(teacher.car);
console.log(teacher.degree);
console.log(teacher.teach());
console.log(teacher.teach.bind(teacher));

// TODO: setup ES6