interface User {
  id: number;
  name: string;
  email: string;
  roll?: string;
}

let user1: User = {
  id: 1,
  name: "Krishna",
  email: "krishna@gmail.com",
};

let user2: User = {
  id: 2,
  name: "Rahul",
  email: "rahul@gmail.com",
};
//har object ko same structure follow krna pdega nahi to error dega
// Objects print karna
console.log(user1);
console.log(user2);

// Individual properties print karna
console.log(user1.name);
console.log(user2.email);
//interfaces for functions
interface MathOperation{
  (x: number, y: number):number;
}

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
console.log(add(5,3));
console.log(subtract(8, 1));