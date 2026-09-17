// ============================================================
// TYPESCRIPT INTERFACES
// ============================================================

// Interface ka use object ka structure define karne ke liye hota hai.
//
// Interface basically batata hai:
// "Is type ke object ke andar kaun-kaun si properties
// aur methods hone chahiye?"

// ============================================================
// 1. BASIC INTERFACE
// ============================================================

interface User {
  id: number;
  name: string;
  email: string;

  // ? ka matlab property OPTIONAL hai.
  // roll dena compulsory nahi hai.
  roll?: string;
}

// ------------------------------------------------------------
// Object using User interface
// ------------------------------------------------------------

// User interface ke according object banana hoga.
//
// Required properties:
// id
// name
// email
//
// Optional property:
// roll

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

// Har object ko same structure follow karna padega,
// warna TypeScript error dega.
//
// Example:
//
// let user3: User = {
//     id: 3,
//     name: "Aman"
// };
//
// ERROR ❌
// email required hai.

// ------------------------------------------------------------
// Objects print karna
// ------------------------------------------------------------

console.log(user1);
console.log(user2);

// ------------------------------------------------------------
// Individual properties print karna
// ------------------------------------------------------------

console.log(user1.name);
console.log(user2.email);

// ============================================================
// 2. INTERFACES FOR FUNCTIONS
// ============================================================

// Interface ka use function ka structure define
// karne ke liye bhi kar sakte hain.
//
// (x: number, y: number): number
//
// Meaning:
//
// Function:
// - 2 parameters lega
// - dono number hone chahiye
// - return value number honi chahiye

interface MathOperation {
  (x: number, y: number): number;
}

// add ko MathOperation follow karna padega.

const add: MathOperation = (a, b) => a + b;

// subtract bhi same structure follow karega.

const subtract: MathOperation = (a, b) => a - b;

console.log(add(5, 3)); // 8
console.log(subtract(8, 1)); // 7

// Agar galat arguments diye:
//
// add("5", 3);
//
// ERROR ❌
//
// Kyunki MathOperation ke according
// dono parameters number hone chahiye.

// ============================================================
// 3. INTERFACE FOR CLASSES
// ============================================================

// Interface class ke liye required structure define
// kar sakta hai.
//
// Jo class interface ko implements karegi,
// usko interface ke required methods/properties
// provide karne honge.

interface Vehicle {
  start(): void;
  stop(): void;
}

// Car implements Vehicle
//
// Meaning:
//
// Car promise karti hai ki woh Vehicle interface
// ke required methods provide karegi.

class Car implements Vehicle {
  start(): void {
    console.log("Car Started");
  }

  stop(): void {
    console.log("Car Stopped");
  }
}

const myCar = new Car();

myCar.start();
myCar.stop();

// Agar Car mein stop() method nahi hota:
//
// class Car implements Vehicle {
//
//     start() {
//         console.log("Car Started");
//     }
// }
//
// ERROR ❌
//
// Car ko Vehicle ke saare required members implement
// karne honge.

// ============================================================
// 4. READONLY PROPERTY
// ============================================================

// readonly ka matlab:
//
// Property ko object create karte waqt value di ja sakti hai,
// lekin baad mein us value ko change nahi kar sakte.

interface MovieDetails {
  readonly name: string;

  ratings: number;

  printMovieInfo(name: string, price: number, ratings: number): string | number;
}

// ------------------------------------------------------------
// Interface Extension
// ------------------------------------------------------------

// MovieGenra, MovieDetails ko extend kar raha hai.
//
// Meaning:
//
// MovieGenra ke andar MovieDetails ke saare members
// automatically available honge.
//
// Plus MovieGenra apni additional property
// "genre" add karega.

interface MovieGenre extends MovieDetails {
  genre: string;
}

// MovieGenre ke required members:
//
// name
// ratings
// printMovieInfo()
// genre

const movie1: MovieGenre = {
  name: "Star Wars",

  genre: "Action",

  ratings: 8.9,

  printMovieInfo(
    name: string,
    price: number,
    ratings: number,
  ): string | number {
    return `Movie name: ${name} Price: ${price} Ratings: ${ratings}`;
  },
};

console.log(movie1);

console.log(movie1.printMovieInfo(movie1.name, 500, movie1.ratings));

// readonly property ko change nahi kar sakte:
//
// movie1.name = "Avengers";
//
// ERROR ❌

// ============================================================
// 5. DECLARATION MERGING IN TYPESCRIPT
// ============================================================

// Declaration merging ka simple meaning:
//
// Same name ki multiple declarations ko TypeScript
// automatically ek single declaration mein combine
// kar deta hai.
//
// Most common example:
//
// interface User
// interface User
//        ↓
// TypeScript merges them
//        ↓
// ONE User interface

// IMPORTANT:
//
// Hum already upar "User" interface bana chuke hain.
// Agar yahan same User naam use karenge,
// toh TypeScript unhe merge kar dega.
//
// Isliye demonstration ke liye alag naam use kar rahe hain:
// MergedUser

// ============================================================
// 6. BASIC DECLARATION MERGING
// ============================================================

// First declaration

interface MergedUser {
  name: string;
}

// Second declaration with SAME NAME

interface MergedUser {
  age: number;
}

// TypeScript internally ise conceptually aisa samajhta hai:
//
// interface MergedUser {
//     name: string;
//     age: number;
// }

// Ab MergedUser mein dono properties available hain.

const mergedUser: MergedUser = {
  name: "Krishna",
  age: 21,
};

console.log(mergedUser.name);
console.log(mergedUser.age);

// ============================================================
// 7. THREE DECLARATIONS BHI MERGE HO SAKTI HAIN
// ============================================================

interface Student {
  name: string;
}

interface Student {
  age: number;
}

interface Student {
  college: string;
}

// Final Student conceptually:
//
// interface Student {
//     name: string;
//     age: number;
//     college: string;
// }

const student: Student = {
  name: "Rahul",
  age: 20,
  college: "NSU",
};

console.log(student);

// ============================================================
// 8. METHODS BHI MERGE HO SAKTE HAIN
// ============================================================

interface MergeCar {
  brand: string;
}

interface MergeCar {
  start(): void;
}

// Final conceptually:
//
// interface MergeCar {
//     brand: string;
//     start(): void;
// }

const mergeCar: MergeCar = {
  brand: "Toyota",

  start() {
    console.log("Car started");
  },
};

console.log(mergeCar.brand);

mergeCar.start();

// ============================================================
// 9. REAL-WORLD USE CASE
// ============================================================

// Imagine ek library ne User interface banaya:

interface AppUser {
  username: string;
}

// Baad mein hum apni application ke according
// additional properties add karna chahte hain.

interface AppUser {
  email: string;
}

interface AppUser {
  isAdmin: boolean;
}

// Final AppUser conceptually:
//
// interface AppUser {
//     username: string;
//     email: string;
//     isAdmin: boolean;
// }

const admin: AppUser = {
  username: "iamrealkkd",
  email: "user@example.com",
  isAdmin: true,
};

console.log(admin);

// ============================================================
// 10. DECLARATION MERGING ≠ EXTENDING
// ============================================================

// ------------------------------------------------------------
// Declaration Merging
// ------------------------------------------------------------

// Same name
//     ↓
// Automatically combine

interface Person {
  name: string;
}

interface Person {
  age: number;
}

// Final:
//
// interface Person {
//     name: string;
//     age: number;
// }

// ------------------------------------------------------------
// Interface Extending
// ------------------------------------------------------------

// Different names
//     ↓
// Explicitly tell TypeScript that one interface
// inherits another interface.

interface Employee {
  salary: number;
}

interface Developer extends Employee {
  language: string;
}

// Developer has:
//
// salary
// language

const developer: Developer = {
  salary: 50000,
  language: "TypeScript",
};

console.log(developer);

// ============================================================
// 11. DECLARATION MERGING WITH OPTIONAL PROPERTY
// ============================================================

interface Product {
  name: string;
}

interface Product {
  price: number;
}

interface Product {
  description?: string;
}

// Final:
//
// interface Product {
//     name: string;
//     price: number;
//     description?: string;
// }

// description optional hai,
// isliye dena compulsory nahi hai.

const product1: Product = {
  name: "Laptop",
  price: 50000,
};

// description provide nahi kiya.
// Still valid ✅

const product2: Product = {
  name: "Phone",
  price: 20000,
  description: "Android smartphone",
};

console.log(product1);
console.log(product2);

// ============================================================
// 12. IMPORTANT RULE — CONFLICTING TYPES
// ============================================================

// Same property ko different incompatible types ke saath
// declare nahi kar sakte.

interface Account {
  id: number;
}

// Ye code ERROR dega:
//
// interface Account {
//     id: string;
// }
//
// ERROR ❌
//
// Property 'id' must have the same type.
//
// Because TypeScript ko samajh nahi aayega:
//
// id = number
// OR
// id = string
//
// Isliye incompatible property declarations
// allowed nahi hain.

// ============================================================
// 13. TYPE ALIAS KE SAATH DECLARATION MERGING NAHI
// ============================================================

// Interface:

interface Animal {
  name: string;
}

// Same interface name → MERGE ✅

interface Animal {
  age: number;
}

// Final:
//
// interface Animal {
//     name: string;
//     age: number;
// }

const animal: Animal = {
  name: "Dog",
  age: 5,
};

console.log(animal);

// ------------------------------------------------------------
// Type Alias
// ------------------------------------------------------------

type AnimalType = {
  name: string;
};

// Same type alias ko dobara declare nahi kar sakte.
//
// type AnimalType = {
//     age: number;
// };
//
// ERROR ❌
//
// Duplicate identifier 'AnimalType'
//
// Type aliases declaration merging support nahi karte.

// ============================================================
// 14. INTERFACE vs TYPE — QUICK COMPARISON
// ============================================================

/*

INTERFACE

interface ExampleUser {
    name: string;
}

interface ExampleUser {
    age: number;
}

        ↓

MERGING ✅


TYPE

type ExampleUserType = {
    name: string;
};

type ExampleUserType = {
    age: number;
};

        ↓

MERGING ❌


Type aliases same name ke saath dobara declare
nahi kiye ja sakte.

*/

// ============================================================
// 15. CLASS + INTERFACE — IMPORTANT NOTE
// ============================================================

// Interface aur class ka same name ho sakta hai.
//
// TypeScript class aur interface declarations
// ko merge kar sakta hai in a specific way.
//
// Interface class ke instance side ke required
// members ko describe karta hai.

interface DeveloperClass {
  language: string;
}

class DeveloperClass {
  language: string;

  constructor(language: string) {
    this.language = language;
  }
}

// Yahan interface ka shape class ke saath merge hota hai.
//
// Isliye DeveloperClass ke instance ko
// interface ke required members provide karne honge.

const dev = new DeveloperClass("TypeScript");

console.log(dev.language);

// ============================================================
// 16. FINAL MEMORY TRICK
// ============================================================

/*

DECLARATION MERGING:

        interface User
               +
        interface User
               ↓
        TypeScript merges
               ↓
        ┌───────────────┐
        │   ONE User    │
        │               │
        │ name          │
        │ age           │
        │ email         │
        └───────────────┘


KEY POINTS:

1. Same name ki declarations → merge

2. Interfaces commonly support merging

3. Multiple interfaces can merge

4. Properties + methods merge ho sakte hain

5. Conflicting property types allowed nahi

6. type aliases declaration merging support nahi karte

7. Declaration merging useful hai existing
   library/framework types ko augment/extend karne ke liye


INTERVIEW DEFINITION:

"Declaration merging is a TypeScript feature where
multiple declarations with the same name are automatically
combined into a single declaration."

*/

// ============================================================
// 17. DECLARATION MERGING vs EXTENDS vs IMPLEMENTS
// ============================================================

/*

DECLARATION MERGING

interface A {
    x: number;
}

interface A {
    y: number;
}

        ↓

A has x + y


------------------------------------------------------------

EXTENDS

interface A {
    x: number;
}

interface B extends A {
    y: number;
}

        ↓

B gets x + y


------------------------------------------------------------

IMPLEMENTS

interface A {
    x: number;
}

class B implements A {
    x: number;

    constructor() {
        this.x = 10;
    }
}

        ↓

Class B promises to follow interface A.


MEMORY:

MERGING
Same interface name
        ↓
Automatic combination


EXTENDS
Different interface names
        ↓
Inheritance


IMPLEMENTS
Class + interface
        ↓
Class follows interface contract

*/
