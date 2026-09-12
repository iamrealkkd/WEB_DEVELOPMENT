function addOne(num: number) {
  return num + 1;
}
const mul = (x: number, y: number) => x * y;
console.log(addOne(3));
console.log(mul(5, 9));

//default values
function greet(person: string = "Krishna") {
  return `Hello ${person}`;
}
console.log(greet());

//function returning type
function dou(num: number): number {
  return num * num;
}
console.log(dou(5));

const d = (num: number): number => {
  return num * num;
};
console.log(d(8));

const ou = (num: number): number => num * num; //returning annotations   
console.log(ou(7));

const u = (num: number): number => {
  //need braces because multiple lines inside the fncn
  const result = num * num;
  console.log(result);
  return result;
};

function m(text: string): void{//void type used where a function does not have any type of return type
    console.log(`mmmmmmmmmm ${text}`)
}
console.log(m("Krish"));

// ============================================================
// void vs never — TypeScript
// ============================================================

// 1. VOID
// ------------------------------------------------------------
// void ka matlab:
// Function normally execute hokar END ho jayega,
// lekin koi useful value return nahi karega.
//
// Real-life use:
// - console.log()
// - UI update
// - form submit
// - notification show karna
// - koi action perform karna

// function greet(): void {
//   console.log("Hello");
// }

// // Function yahan normally finish ho gaya.
// // Iske baad code execute hoga.

// greet();
// console.log("Done"); // ✅ Ye execute hoga


// ------------------------------------------------------------
// 2. NEVER
// ------------------------------------------------------------
// never ka matlab:
// Function NORMAL way mein kabhi return/finish nahi karega.
//
// Common cases:
// 1. Infinite loop
// 2. Function always throws an error

// function infinite(): never {
//   while (true) {
//     // Ye loop kabhi end nahi hoga
//   }
// }

// function throwError(): never {
//   throw new Error("Something went wrong");
// }


// ------------------------------------------------------------
// MAIN DIFFERENCE
// ------------------------------------------------------------

// void:
// "Main koi value return nahi karunga,
//  but function khatam ho jayega."
//
// never:
// "Main normally return hi nahi karunga."


// Example:

// function A(): void {
//   console.log("A");
// }

// function B(): never {
//   throw new Error("B crashed");
// }

// A();
// console.log("Next"); // ✅ Execute hoga

// B();
// console.log("Next"); // ❌ Ye execute nahi hoga


// ============================================================
// QUICK MEMORY TRICK
// ============================================================

// void  → Function FINISH hota hai, value nahi deta.
// never → Function NORMAL FINISH nahi hota.
//
// void  = "No return value"
// never = "No normal return"