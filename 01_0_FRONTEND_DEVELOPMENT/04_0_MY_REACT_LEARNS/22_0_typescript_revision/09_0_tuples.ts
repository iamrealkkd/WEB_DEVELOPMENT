// A tuple is an array with a FIXED number of elements
// and a FIXED type for each position.

// [name, age, isStudent]
//   ↓     ↓       ↓
// string number  boolean

let user: [string, number, boolean] = ["Krishna", 20, true];

// Accessing tuple elements
console.log(user[0]); // Krishna → string
console.log(user[1]); // 20      → number
console.log(user[2]); // true    → boolean

// ❌ Wrong order
// let user2: [string, number, boolean] = [20, "Krishna", true];

// ❌ Wrong number of elements
// let user3: [string, number, boolean] = ["Krishna", 20];

// ❌ Wrong type
// let user4: [string, number, boolean] = ["Krishna", "20", true];

// Tuple can be useful when a function returns multiple values

function getUser(): [string, number] {
  // First value must be string
  // Second value must be number

  return ["Krishna", 20];
}

const result = getUser();

console.log(result[0]); // Krishna
console.log(result[1]); // 20

// Destructuring a tuple
// Use userName instead of name to avoid the browser's global "name"

const [userName, age] = getUser();

console.log(userName); // Krishna
console.log(age); // 20
