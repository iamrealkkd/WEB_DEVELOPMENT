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
    for (let k = 0; k < matx[i][j].length; k++) {
      console.log(matx[i][j][k]);
    }
  }
}

const singleDi: number[] = [1, 2, 3, 4, 5];

const multiDi: number[][] = [[1, 2, 3, 4, 5]];

const triple: number[][][] = [[[1, 2, 3, 4, 5]]];

console.log(singleDi);
console.log(multiDi);
console.log(triple);
