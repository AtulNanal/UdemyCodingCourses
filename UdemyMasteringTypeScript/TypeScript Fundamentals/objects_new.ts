function printName(person: { fName: string; lName: string }): void {
  console.log(`${person.fName} : ${person.lName}`);
}

printName({ fName: "Atul", lName: "Nanal" });

let coordinate: { x: number; y: number } = { x: 34, y: 25 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

console.log(randomCoordinate());

//Throws error when we pass an object literal with extra param
//printName({ fName: "Atul", lName: "Nanal", Age: 37 });

let objAtul: { fName: string; lName: string; Age: number } = {
  fName: "Atul",
  lName: "Nanal",
  Age: 37,
};

// Object with extra param  passes so long as it has params for the function signature
printName(objAtul);

// -----  Type Aliases --------

type Point = { x: number; y: number };

let myPoint: Point = { x: 10.2, y: 8.6 };

function doubleCoordinate(pt: Point): Point {
  return { x: 2 * pt.x, y: 2 * pt.y };
}

console.log(doubleCoordinate(myPoint));

//Nested Objects
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0031;
}

function printSongInfo(song: Song): void {
  console.log(`${song.title} --- ${song.artist}`);
}

const mySong: Song = {
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

//--------------optional properties of object------------
type PointNew = { x: number; y: number; z?: number };

let myPointNew: PointNew = { x: 24.3, y: 31.5 };
console.log(myPointNew);

//------------readonly properties--------------

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 21583,
  username: "catgurl",
};

console.log(user.id);

//user.id = "1212121121";  //not allowed

//------------Intersection Types------------

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 10.0,
  color: "yellow",
};

console.log(happyFace);

type ColorfulCircleNew = Circle &
  ColorfulCircle & {
    borderColor: string;
  };

let happyFace2: ColorfulCircleNew = {
  radius: 10.0,
  color: "yellow",
  borderColor: "red",
};
