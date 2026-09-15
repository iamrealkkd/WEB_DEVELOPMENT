const person: { firstName: string; lastName: string; age: number } = {
  firstName: "Krishna",
  lastName: "Dutta",
  age: 30,
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

//using objects as function return value
function printUser(): { name: string; age: number; location: string } {
  return {
    name: "Alex",
    age: 19,
    location: "USA",
  };
}
console.log(printUser());
const rx = printUser();
console.log(rx);

type User = {
  name: string;
  age: number;
  location: string;
};
const printInfo = (user: User) => {
  return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`;
};
const res = printInfo({ name: "Alex", age: 20, location: "USA" });
console.log(res);
