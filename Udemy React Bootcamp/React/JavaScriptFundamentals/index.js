//Topic --- Functions in Javascript

getDestination("Welcome"); //Works

//Regular Function
function getDestination(message) {
  //Let allows a variable to be deifined in block scopt while var allows to define var in function scope
  let destination = "New York";
  const daysNeeded = 10;

  const changeDestination = true;
  const destinationUpdated = changeDestination ? "Updated" : "Not Updated";

  if (changeDestination) {
    destination = "Los Angeles";
  }

  console.log(
    `${message}, Destination is set to : ${destination}(${destinationUpdated}), Days Needed : ${daysNeeded}`
  );
}

getDestination("Welcome"); //Works
//getDestination1("Welcome"); //Does NOT Work --> Uncaught ReferenceError ReferenceError: Cannot access 'getDestination1' before initialization

//Arrow Function
const getDestination1 = (message) => {
  //Let allows a variable to be deifined in block scopt while var allows to define var in function scope
  let destination = "New York";
  const daysNeeded = 10;

  const changeDestination = true;
  const destinationUpdated = changeDestination ? "Updated" : "Not Updated";

  if (changeDestination) {
    destination = "Los Angeles";
  }

  console.log(
    `${message}, Destination is set to : ${destination}(${destinationUpdated}), Days Needed : ${daysNeeded}`
  );
};

getDestination("Welcome"); //Works
getDestination1("Welcome"); //Works

//-------------------------------------------------------------------------------------------------------------------------//

//Topic ---  REST Operator --> Pack / Shrink

function sum(...numbers) {
  console.log("Performing Addition of ", numbers);
}

console.log("Sum of numbers: ", sum(1, 2, 3));
console.log("Sum of numbers: ", sum(1, 2, 3, 4, 5));

function createTeam(teamName, captain, ...members) {
  return {
    name: teamName,
    captain: captain,
    members: members,
  };
}

const team = createTeam("MyTeam", "ABC", "PQR", "XYZ", "LMN");

// Array Destructuring via REST Operator

const colors = ["red", "green", "blue", "yellow", "purple"];

const [color1, color2, ...otherColors] = colors;

console.log(team); //Displays everything even members in terminal

//Displays everything even otherColors in terminal
console.log("color 1 : ", color1);
console.log("color 2 : ", color2);
console.log("Other colors : ", otherColors);

// Object Destructuring via REST Operator

const person = {
  name: "ABC",
  age: 28,
  city: "Chicago",
  job: "Developer",
  hobbies: ["reading", "hiking"],
};

const { name, age, ...otherDetails } = person;

console.log("name : ", name);
console.log("age : ", age);
console.log("Other Details", otherDetails);

//-------------------------------------------------------------------------------------------------------------------------//

//Topic --- SPREAD Operator ---> Unpack / Expand

//Expanding arrays with Spread operator

const numbers = [1, 2, 3];
console.log(...numbers);

//Combine arrays using Spread Operator
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "spinach"];

const produce = [...fruits, ...vegetables];

console.log(produce);

//Copying arrays with Spread operator
const copyNumbers = [...numbers];

console.log(copyNumbers);

//Copy Objects with Spread Operator
const person1 = { name: "Alex", age: 30 };
const person1Copy = { ...person1 };

console.log(person1Copy);

// Adding parameters while copying Objects with Spread Operator

const person1CopyAndAdd = { ...person1, hobby: "reading", age: 31 };

console.log(person1CopyAndAdd);

// merge objects
const details = { job: "Developer", city: "Boston" };
const fullProfile = { ...person1, ...details };

console.log(fullProfile);

const fullProfile1 = { ...person1, ...details, hobby: "cricket", age: 26 };

console.log(fullProfile1);

//-------------------------------------------------------------------------------------------------------------------------//

//Topic --- Truthy and Falsy

//The && Operator returns the first Falsy operand or the Last Truthy Operand
console.log(true && "hello"); //&& Returns last Truthy Operand
console.log(true && "hi" && "Hello"); //&& Returns last Truthy Operand
console.log(false && "Hello"); //&& Returns first Falsy Operand
console.log(false && 0 && "Hello"); //&& Returns first Falsy Operand
console.log(0 && "Hi"); //&& Returns first Falsy Operand --- 0 is Falsy
console.log("" && "Hi"); //&& Returns first Falsy Operand --- "" is Falsy
console.log(" " && "Hi" && "Hello"); //&&Returns last Truthy Operand --- " " is Truthy

//Falsy Values in JS --- every thing else is Truthy
// false       // Boolean False
// 0           // Zero
// ''          // Empty String or even ""
// null        // Null value
// undefined   // Uninitialized variable
// Nan         // Not a Number

//The || Operator returns the first Truthy operand or last Falsy Operand if all operands are falsy
console.log(true || 0 || false); //Returns first truthy operand which is true
console.log(false || "hello"); //Returns the first Truthy operand which is "hello"
console.log(0 || false || "" || null || "null" || "undefined"); //Returns first Truthy operand which is "null"
console.log(0 || false || "" || null || undefined); // Returns the last Falsy operand which is undefined

//-------------------------------------------------------------------------------------------------------------------------//

//Topic --- Arrays and Indexing

const nums = [5, 9, 13, 24, 16, 4, 28];

const found = nums.find((x) => x == 13);

console.log(found); //prints 13 as it was found

const found1 = nums.find((e) => e != 13);

console.log(found1); //prints 5 --- first not equal to 13 value

const index = nums.findIndex((t) => t == 16); // prints 4

console.log(index);

const index1 = nums.findIndex((t) => t == 163); // prints -1 as the number is not present

console.log(index1);

//Array of objects

const students = [
  { id: 1, name: "Alice", grade: 85 },

  { id: 2, name: "Bob", grade: 92 },

  { id: 3, name: "Charlie", grade: 79 },

  { id: 4, name: "Diana", grade: 95 },
];

const highscorer = students.find((stud) => stud.grade > 80); //Returns first element that matches the criteria
console.log(highscorer);

//-------------------------------------------------------------------------------------------------------------------------//

//Topic --- Filtering  --- Returns array of elements matching the condition

const nums1 = [6, 9, 13, 22, 13, 7, 23];

const found2 = nums1.filter((e) => e != 13);

console.log(found2);

const found3 = nums1.filter((e) => e > 15);

console.log(found3);

const highscorers = students.filter((stud) => stud.grade > 80);
console.log(highscorers); //check n terminal

const topPerformer = students.filter((students) => {
  return students.grade > 85 && students.id > 1;
});

console.log(topPerformer); //returns empty array

//-------------------------------------------------------------------------------------------------------------------------//

// Topic --- Sorting

const nums2 = [12, 9, 15, 33, 13, 71, 23];

const fruits1 = ["Banana", "apple", "Orange", "Mango"];

fruits1.sort(); //apple is at end as its lower case

console.log(fruits1);

//apple is at first as we compare by converting everything into lower case
fruits1.sort((a, b) =>
  a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase())
);

console.log(fruits1);

//Sorts numbers as strings
nums2.sort();

console.log(nums2);

nums2.sort((a, b) => a - b);

console.log("Ascending Order :", nums2);

nums2.sort((a, b) => b - a);

console.log("Descending Order :", nums2);

//-------------------------------------------------------------------------------------------------------------------------//

//Topic --- Foreach and Map

const nums3 = [11, 19, 5, 31, 23, 7, 43];

nums3.forEach((n) => {
  console.log(n * 3);
});

const fruits2 = ["Banana", "apple", "Orange", "Mango", "bleuberry"];

fruits2.forEach((f, index) => {
  console.log(`Fruit : ${f.toUpperCase()}, Index : ${index + 1}`);
});

//Map transform data to a new array

nums3_mapResult = nums3.map((n) => n ** 2);

console.log(nums3_mapResult);

nums3_mapFilterResult = nums3.map((n) => n ** 2).filter((n) => n > 300);

console.log(nums3_mapFilterResult);

//-------------------------------------------------------------------------------------------------------------------------//

//Topic --- Map in Array of Objects

const upperCaseFruits = fruits2.map((f, index) => {
  return `${index + 1} : ${f.toUpperCase()}`;
});

console.log(upperCaseFruits);

const users = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 35 },
  { id: 4, name: "Alice", age: 28 },
];

const users_names = users.map((u) => u.name);

console.log(users_names);

const formatted_users = users.map((u) => {
  return {
    id: u.id,
    name: u.name,
    ageGroup: u.age < 30 ? "Young" : "Adult",
  };
});

console.log(formatted_users);

//-------------------------------------------------------------------------------------------------------------------------//

//Topic --- Mutable and Immutable

//Mutable is somthing that can be mnodified after its created.
//Immutable is something that cannot be modified once its created. A new copy is created if needed to modify.

//Arrays --- push, pop, sort etc --- we can modify them after they are created. => Arrays are Mutable.

//React we use some Immutable Propeties and Functions

//Rest and Spread operators create a new array and do not modify original

//Map creates a new array and does not modify original

const original = [1, 3, 8, 13, 22];

const sliced = original.slice(0, 3);

console.log(sliced);
