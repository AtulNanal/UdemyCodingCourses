// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

let movieTitle: string = "Amadeus";
let newMovieTitle: string = movieTitle.toUpperCase();
console.log(movieTitle);
console.log(newMovieTitle);
const myBoolean: boolean = true;
//myBoolean = false; //cannot do this as it was const
console.log(myBoolean);
let numCatLives: number = 9;
numCatLives += 2;
console.log(numCatLives);

let myAnyType: any = "ExampleAny";
console.log(myAnyType);
myAnyType = 40;
console.log(myAnyType);

function square(num: number): number {
  return num * num;
}

const squared = (num: number) => {
  return num * num;
};

const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(square(3.45));
console.log(square(3.14153));
console.log(add(3.14153, 2.71));

const subtract = (num1: number, num2: number) => {
  //no return value => void
  console.log(num1 - num2);
};

const multiply = (num1: number, num2: number): void => {
  //no return value => void
  console.log(num1 * num2);
};

subtract(3.45, 3.141543);
multiply(3.45, 3.141543);

//union type return
let multiply_new = (num1: number, num2: number) => {
  if (Math.random() < 0.5) return num1 * num2;
  else return (num1 * num2).toString();
};

console.log(multiply_new(3.45, 3.141543));

//void return type returns undefined value while never return type never returns a value.
function gameLoop(): never {
  while (true) {
    console.log("GAME LOOP RUNNING!");
  }
}

// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
