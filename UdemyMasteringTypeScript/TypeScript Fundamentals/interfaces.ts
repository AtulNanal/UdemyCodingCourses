// Point as a TYPE ALIAS
// type Point = {
//     x: number,
//     y: number
// }

// const pt: Point = {x: 213, y:12}

// Point using an INTERFACE:
interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 123, y: 1234 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  // sayHi: () => string;
  sayHi(): string;
  assignNickName(): void;
}

const thomas: Person = {
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

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.4));

// Re-opening an interface:
interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Australian Shepherd",
  bark() {
    return "WOOF WOOF!";
  },
};

// Extending an interface:
interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4.5,
  breed: "Lab",
  bark() {
    return "Bark!";
  },
  job: "guide dog",
};

interface Human {
  name: string;
  getName(): string;
}

interface Employee {
  readonly id: number;
  email: string;
}

// Extending multiple interfaces
interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: "Pierre",
  id: 123897,
  email: "pierre@gmail.com",
  level: "senior",
  languages: ["JS", "Python"],
  getName(): string {
    return this.name;
  },
};

interface Student extends Human {
  readonly rollno: number;
  email: string;
  facebook_id: string;
  getRollNo(): number;
}

interface EngStudent extends Human, Student {
  specialization: string;
}

let EngStud1: EngStudent = {
  name: "Atul Nanal",
  rollno: 12345,
  email: "AtulNanal@gmail.com",
  facebook_id: "AtulNanal",
  specialization: "Computers",
  getName(): string {
    return this.name;
  },
  getRollNo(): number {
    return this.rollno;
  },
};

console.log(EngStud1);
console.log(EngStud1.getName());
console.log(EngStud1.getRollNo());
