// String array
var activeUsers = [];
activeUsers.push("Tony");
// Array of numbers
var ageList = [45, 56, 13];
ageList[0] = 99;
// Alternate Syntax:
// const bools: Array<boolean> = []
var bools = [];
var coords = [];
coords.push({ x: 23, y: 8 });
// Multi-dimensional string array
var board = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"],
];
var coords3D = [];
coords3D.push({ x: 10, y: 10, z: 3 });
coords3D.push({ x: 5, y: 3, z: 2 });
coords3D.push({ x: 7, y: 12, z: 7 });
var coords3D_1 = [];
coords3D_1.push({ x: 5, y: 8, z: 3 });
coords3D_1.push({ x: 9, y: 13, z: 6 });
coords3D_1.push({ x: 19, y: 7, z: 12 });
console.log(coords3D);
var tr_A = {
    vertex1: coords3D[0],
    vertex2: coords3D[1],
    vertex3: coords3D[2],
};
var tr_B = {
    vertex1: coords3D_1[0],
    vertex2: coords3D_1[1],
    vertex3: coords3D_1[2],
};
console.log(tr_A);
console.log(tr_B);
var num_tensor = [
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
function getAveragePoint(pts_3d) {
    var avg_pt = { x: 0, y: 0, z: 0 };
    for (var _i = 0, pts_3d_1 = pts_3d; _i < pts_3d_1.length; _i++) {
        var pt_3d = pts_3d_1[_i];
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
