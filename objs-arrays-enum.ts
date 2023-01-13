// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number,string];
// } = {
//   name: "Femi",
//   age: 30,
//   hobbies: ["Sport", "Cooking"],
//   role: [2, "author"],
// };
// person.role.push('admin')


// console.log(person);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toLocaleUpperCase());
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN, READ_ONLY, AUTHOR}

const person = {
    name: "Femi",
    age: 30,
    hobbies: ["Sport", "Cooking"],
    role: Role.ADMIN
  };

  if (person.role === Role.AUTHOR) {
    console.log('READ ONLY');
  }