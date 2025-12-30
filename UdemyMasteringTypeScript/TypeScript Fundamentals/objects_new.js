"use strict";
function printName(person) {
    console.log(`${person.fName} : ${person.lName}`);
}
printName({ fName: "Atul", lName: "Nanal" });
let coordinate = { x: 34, y: 25 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
console.log(randomCoordinate());
//Throws error when we pass an object literal with extra param
//printName({ fName: "Atul", lName: "Nanal", Age: 37 });
let objAtul = {
    fName: "Atul",
    lName: "Nanal",
    Age: 37,
};
// Object with extra param  passes so long as it has params for the function signature
printName(objAtul);
let myPoint = { x: 10.2, y: 8.6 };
function doubleCoordinate(pt) {
    return { x: 2 * pt.x, y: 2 * pt.y };
}
console.log(doubleCoordinate(myPoint));
function calculatePayout(song) {
    return song.numStreams * 0.0031;
}
function printSongInfo(song) {
    console.log(`${song.title} --- ${song.artist}`);
}
const mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North",
    },
};
printSongInfo(mySong);
console.log(calculatePayout(mySong));
let myPointNew = { x: 24.3, y: 31.5 };
console.log(myPointNew);
const user = {
    id: 21583,
    username: "catgurl",
};
console.log(user.id);
const happyFace = {
    radius: 10.0,
    color: "yellow",
};
console.log(happyFace);
let happyFace2 = {
    radius: 10.0,
    color: "yellow",
    borderColor: "red",
};
