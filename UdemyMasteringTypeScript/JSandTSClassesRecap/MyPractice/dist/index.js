"use strict";
class player {
    constructor(first, last) {
        this._score = 0; //This is TS way of defining private but it also allows JS syntax
        //#score = 0; //JS way of declaring a priavte property
        this._lives = 3;
        this.first = first;
        this.last = last;
        this.secretMethod();
    }
    //This construct is also allowed and when u do that you do not also need  to declare the variables on top of class
    //constructor(public first: string, public last: string) {};
    secretMethod() {
        console.log("Secret Method");
    }
    //public get property
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    //public get property
    get score() {
        return this._score;
    }
    //public set property
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        this._score = newScore;
    }
}
class superplayer extends player {
    constructor(first, last, powers) {
        super(first, last);
        this.isAdmin = true;
        this.powers = powers;
        this.maxLives();
    }
    maxLives() {
        this._lives = 100;
    }
}
const elton = new player("Elton", "Steele");
//elton.first = 'elton';  //cannot modify readonly variable
console.log(elton.first);
console.log(elton.fullName);
console.log(elton.score);
elton.score = 99;
console.log(elton.score);
const admin = new superplayer("admin", "McAdmin", ["delete", "restore"]);
console.log(admin);
console.log(admin.score);
console.log(admin.isAdmin);
class Bike {
    constructor(color) {
        this.color = color;
    }
}
const bike1 = new Bike("Red");
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket !!`);
    }
}
const jacket1 = new Jacket("Prada", "Black");
console.log(bike1);
console.log(jacket1);
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("HELLO !!!");
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());
const bill = new PartTimeEmployee("Bill", "Carlson", 24, 1100);
console.log(bill.getPay());
