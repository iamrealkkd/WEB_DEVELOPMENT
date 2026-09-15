//can be used with variables, functions and interfaces
let password: string | number = 123;
type userInfo = {
  first: string;
  last: string;
  age: number;
};

type accDetails = {
  email: string;
  password: string;
};

let user: userInfo | accDetails = {
  // first: "John",
  // last: "Deo",
  // age: 20,
  email: "kkrishna.bga@gmail.com",
  password: "Krishna",
};
