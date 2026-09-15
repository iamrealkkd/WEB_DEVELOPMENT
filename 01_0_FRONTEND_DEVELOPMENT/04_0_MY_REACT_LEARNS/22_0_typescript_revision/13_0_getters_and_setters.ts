class Person {
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  // GETTER → age ki value read karega
  get age(): number {
    return this._age;
  }

  // SETTER → age ki value change karega
  set age(newAge: number) {
    this._age = newAge;
  }
}

let person = new Person(20);

// Getter automatically call hoga
console.log(person.age); // 20

// Setter automatically call hoga
person.age = 21;

console.log(person.age); // 21
