// enum defines a fixed set of values

enum Role {
  ADMIN,
  USER,
  GUEST,
}

// Variable can only have a value from Role
let userRole: Role = Role.ADMIN;

console.log(userRole); // 0

enum Weather {
  Sunny, // 0
  Cloudy, // 1
  Rainy, // 2
  Snowy, // 3
}
let we: Weather = Weather.Rainy;
console.log(we);
console.log(Weather);

enum Weathe {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy",
}
console.log(Weathe);
