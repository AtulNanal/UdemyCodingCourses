// String array
const activeUsers: string[] = [];
activeUsers.push("Tony");

// Array of numbers
const ageList: number[] = [45, 56, 13];
ageList[0] = 99;

// Alternate Syntax:
// const bools: Array<boolean> = []
const bools: boolean[] = [];

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 23, y: 8 });

// Multi-dimensional string array
const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

type Point3D = {
  x: number;
  y: number;
  z: number;
};

const coords3D: Point3D[] = [];
coords3D.push({ x: 10, y: 10, z: 3 });
coords3D.push({ x: 5, y: 3, z: 2 });
coords3D.push({ x: 7, y: 12, z: 7 });

const coords3D_1: Array<Point3D> = [];
coords3D_1.push({ x: 5, y: 8, z: 3 });
coords3D_1.push({ x: 9, y: 13, z: 6 });
coords3D_1.push({ x: 19, y: 7, z: 12 });

console.log(coords3D);

type Triangle = {
  vertex1: Point3D;
  vertex2: Point3D;
  vertex3: Point3D;
};

const tr_A: Triangle = {
  vertex1: coords3D[0],
  vertex2: coords3D[1],
  vertex3: coords3D[2],
};

const tr_B: Triangle = {
  vertex1: coords3D_1[0],
  vertex2: coords3D_1[1],
  vertex3: coords3D_1[2],
};

console.log(tr_A);
console.log(tr_B);

const num_tensor: Number[][][] = [
  [
    [1, 2, 5],
    [2, 5, 4],
  ],
  [
    [3, 4, 11],
    [2, 7, 6],
  ],
];

console.log(num_tensor);

function getAveragePoint(pts_3d: Point3D[]): Point3D {
  var avg_pt: Point3D = { x: 0, y: 0, z: 0 };

  for (const pt_3d of pts_3d) {
    avg_pt.x = avg_pt.x + pt_3d.x;
    avg_pt.y = avg_pt.y + pt_3d.y;
    avg_pt.z = avg_pt.z + pt_3d.z;
  }
  var length = pts_3d.length;
  if (length > 0)
    avg_pt = {
      x: avg_pt.x / length,
      y: avg_pt.y / length,
      z: avg_pt.z / length,
    };

  return avg_pt;
}

console.log(getAveragePoint(coords3D));
console.log(getAveragePoint(coords3D_1));
