import { add, sample } from "./utils.js";
// Typescript now supports ES6 module syntax that uses import and export keywords like Javascript
console.log("Hello world");
//as soon as you export a single function / var, TS will consider utils.ts as a module.
//So even when u export add(), it will not find add() inside index.ts and even not find sample().
//We need to include these at start for us to access these.
console.log(sample([12, 5, 6.0, -3.5]));
console.log(add(3.4, 4.6));
//const x = 2;  //if Utils.ts was a script (not export keyword), then cannot create new variable x here as variable with that name is present in utils.ts
