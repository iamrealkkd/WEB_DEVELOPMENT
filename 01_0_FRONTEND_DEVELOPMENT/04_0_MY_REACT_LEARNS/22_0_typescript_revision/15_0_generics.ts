// normal function

const printString = (x: string) => console.log(x);

const printNumber = (x: number) => console.log(x);

const printBoolean = (x: boolean) => console.log(x);

printString("hello");

printNumber(2);

printBoolean(true);

// generic function

function printInfo<T>(x: T): void {
  if (typeof x === "string") {
    console.log("String:", x);
  } else if (typeof x === "number") {
    console.log("Number:", x);
  } else if (typeof x === "boolean") {
    console.log("Boolean:", x);
  } else {
    console.log("Other type:", x);
  }
}

const str = printInfo<string>("Hello");

const num = printInfo<number>(2);

const bool = printInfo<boolean>(true);

// console.log(str);

function getValue<T>(value: T): T {
  return value;
}

const message = getValue("Hello");

const score = getValue(95);

const isLoggedIn = getValue(true);

console.log(message);

console.log(score);

console.log(isLoggedIn);

// -----------------------------------------
function uniqueDataTypesFunc<Type>(
  item: Type,
  defaultValue: Type,
): [Type, Type] {
  return [item, defaultValue];
}

const um = uniqueDataTypesFunc<number>(10, 20);
const tr = uniqueDataTypesFunc<string>("hello", "world");
console.log(um);
console.log(tr);

function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);

console.log(evenNumbers);

const stringArr = ["apple", "banana", "cherry", "date"];

const shortWords = filterArray<string>(stringArr, (word) => word.length < 6);

console.log(shortWords);

interface Fruit {
  name: string;
  color: string;
}

const fruitArray: Fruit[] = [
  { name: "Apple", color: "Red" },
  { name: "Banana", color: "Yellow" },
  { name: "Cherry", color: "Red" },
];

const redFruits = filterArray<Fruit>(
  fruitArray,
  (fruit) => fruit.color === "Red",
);

console.log(redFruits);