class player {
  public readonly first: string;
  public readonly last: string;
  private _score: number = 0; //This is TS way of defining private but it also allows JS syntax
  //#score = 0; //JS way of declaring a priavte property
  protected _lives: number = 3;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
    this.secretMethod();
  }

  //This construct is also allowed and when u do that you do not also need  to declare the variables on top of class
  //constructor(public first: string, public last: string) {};

  private secretMethod() {
    console.log("Secret Method");
  }

  //public get property
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  //public get property
  get score(): number {
    return this._score;
  }

  //public set property
  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    }
    this._score = newScore;
  }
}

class superplayer extends player {
  public readonly powers: string[];
  constructor(first: string, last: string, powers: string[]) {
    super(first, last);
    this.powers = powers;
    this.maxLives();
  }

  isAdmin: boolean = true;
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

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

const bike1 = new Bike("Red");

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}
  print(): void {
    console.log(`${this.color} ${this.brand} jacket !!`);
  }
}

const jacket1 = new Jacket("Prada", "Black");

console.log(bike1);
console.log(jacket1);

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log("HELLO !!!");
  }
}

class FullTimeEmployee extends Employee {
  constructor(
    public first: string,
    public last: string,
    private salary: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    public first: string,
    public last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());

const bill = new PartTimeEmployee("Bill", "Carlson", 24, 1100);
console.log(bill.getPay());
