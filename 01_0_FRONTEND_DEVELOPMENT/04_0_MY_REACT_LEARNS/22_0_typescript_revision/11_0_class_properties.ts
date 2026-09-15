class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// Object create kar rahe hain
let person1 = new Person("Krishna", 20);

// Values print karna
console.log(person1.name);
console.log(person1.age);

console.log(person1);
