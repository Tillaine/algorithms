let a: number = 5;
let b: number = 5;
let c: number = a + b;

console.log(c);

class Car {
        model: String;
        doors: Number;
        isElectic: Boolean;

    constructor(model: String, doors: Number, isElectric: Boolean) {
        this.model = model;
        this.doors = doors;
        this.isElectic = isElectric;
    }

    displayMake(): void {
        console.log(`this car is a ${this.model}`)
    }
}

const Crosstrex = new Car('Crosstrex', 4, false);
Crosstrex.displayMake();

interface Idog {
    name: String, 
    power: String,
    display(): void
}

const Dog: Idog = {
    name: 'Dexter',
    power: 'totsAdorbsness',
    display() { console.log(`Hello World`); }
};

Dog.display();
