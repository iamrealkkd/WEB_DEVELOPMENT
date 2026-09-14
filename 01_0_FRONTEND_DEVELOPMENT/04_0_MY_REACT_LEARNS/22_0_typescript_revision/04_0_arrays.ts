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
        [1,2],
        [1,6],
];

for(const row of matrix){
    console.log(row);
}