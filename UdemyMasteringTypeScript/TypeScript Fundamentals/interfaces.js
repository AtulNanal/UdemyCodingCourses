"use strict";
// Point as a TYPE ALIAS
// type Point = {
//     x: number,
//     y: number
// }
const pt = { x: 123, y: 1234 };
const thomas = {
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    id: 21837,
    sayHi: () => {
        return "Hello!";
    },
    assignNickName() {
        this.nickname = "NA";
    },
};
thomas.first = "kasjdh";
// thomas.id = 238974;
thomas.sayHi();
thomas.assignNickName();
console.log(thomas.nickname);
const shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    },
};
console.log(shoes.applyDiscount(0.4));
const elton = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark() {
        return "WOOF WOOF!";
    },
};
const chewy = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark() {
        return "Bark!";
    },
    job: "guide dog",
};
const pierre = {
    name: "Pierre",
    id: 123897,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["JS", "Python"],
    getName() {
        return this.name;
    },
};
let EngStud1 = {
    name: "Atul Nanal",
    rollno: 12345,
    email: "AtulNanal@gmail.com",
    facebook_id: "AtulNanal",
    specialization: "Computers",
    getName() {
        return this.name;
    },
    getRollNo() {
        return this.rollno;
    },
};
console.log(EngStud1);
console.log(EngStud1.getName());
console.log(EngStud1.getRollNo());
