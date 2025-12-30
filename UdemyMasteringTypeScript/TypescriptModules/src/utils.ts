// If a Javascript / Typescript files do not have a top level export or await then it is considered as a script and not a module.
// But if it has, then it is considered as module !!!

//For a TS / JS script any variables / functions declared inside the script (except inside functions or blocks) are considered as in global scope..
//So one script can access other script variables in itself, if they belong to same project.

export function add(x: number, y: number): number {
  return x + y;
}

export function sample<T>(arr: T[]): T {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

const x = 5;
