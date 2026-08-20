const student1 = {
  name: "Krishna",
  age: 20,
  course: "B.Tech CSE",

  show() {
    console.log(this.name + " studies " + this.course);
  },
};

console.log("Object Literal:");
console.log(student1.name);
console.log(student1.age);
console.log(student1["name"]);
console.log(student1["age"]);
student1.show();

class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }

  show() {
    console.log(this.name + " studies " + this.course);
  }
}

const student2 = new Student("Rahul", 21, "B.Tech IT");

console.log("\nClass Object:");
console.log(student2.name);
console.log(student2.age);
console.log(student2["name"]);
console.log(student2["age"]);
student2.show();
