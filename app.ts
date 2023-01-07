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

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const person = {
    name: "Femi",
    age: 30,
    hobbies: ["Sport", "Cooking"],
    role: ADMIN
  };

  if (person.role === ADMIN) {
    console.log('READ ONLY');
    
  }