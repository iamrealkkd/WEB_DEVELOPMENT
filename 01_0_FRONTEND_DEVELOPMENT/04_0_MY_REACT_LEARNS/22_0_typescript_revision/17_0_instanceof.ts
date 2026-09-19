class Car {
  drive() {
    console.log("Driving...");
  }
}

class Bike {
  ride() {
    console.log("Riding...");
  }
}

const vehicle = new Car();

console.log(vehicle instanceof Car); // true
console.log(vehicle instanceof Bike); // false
// instanceof JavaScript/TypeScript ka operator hai jo check karta hai ki koi object kisi particular class/constructor se bana hai ya nahi.

class Dog {
  bark(): void {
    console.log("Woff Woff");
  }
}

class Cat {
  meow(): void {
    console.log("Meow");
  }
}

function animalSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const myDog = new Dog();
const myCat = new Cat();
animalSound(myDog);
animalSound(myCat);
