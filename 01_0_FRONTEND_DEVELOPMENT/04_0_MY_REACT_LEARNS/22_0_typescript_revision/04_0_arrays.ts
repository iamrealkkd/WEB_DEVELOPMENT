const numbers: number[] = [1, 2, 3, 4];
const names: Array<string> = ["Alice", "Bob", "Charlie"];
const items: string[] = [];
items.push("Keyboard");
console.log(items);

const numList: number[] = [];
numList.push(20);
console.log(numList);

//multidimensional array
const matrix: number[][] = [
  [1, 2],
  [1, 6],
];

for (const row of matrix) {
  console.log(row);
}

const matx: number[][][] = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

for (let i = 0; i < matx.length; i++) {
  for (let j = 0; j < matx[i].length; j++) {
    console.log(matx[i][j].join(" "));
  }

  console.log("---");
}
