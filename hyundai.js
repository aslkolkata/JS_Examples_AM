import { Car } from './car';


class Hyundai extends Car {
    constructor(car_name, model) {
        super(car_name);
        this.model = model;
    }
    car_model() {
        console.log("This is a Car model");
    }
}

const hyundai = new Hyundai("Hyndai", "Grand i10");
console.log(hyundai);
//console.log(teacher.name);
//console.log(teacher.car);
//console.log(teacher.degree);
//console.log(teacher.teach());
//console.log(teacher.teach.bind(teacher));

// TODO: setup ES6