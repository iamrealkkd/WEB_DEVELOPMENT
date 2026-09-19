type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type EmployeePerson = Person & Employee;
const user: EmployeePerson = {
  name: "Krishna",
  employeeId: 101,
};
console.log(user.name);
console.log(user.employeeId);