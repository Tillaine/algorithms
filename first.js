var a = 5;
var b = 5;
var c = a + b;
console.log(c);
var Car = /** @class */ (function () {
    function Car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectic = isElectric;
    }
    Car.prototype.displayMake = function () {
        console.log("this car is a " + this.model);
    };
    return Car;
}());
var Crosstrex = new Car('Crosstrex', 4, false);
Crosstrex.displayMake();
var Dog = {
    name: 'Dexter',
    power: 'totsAdorbsness',
    display: function () { console.log("Hello World"); }
};
Dog.display();
