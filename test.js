const students = [
  {
    name: "test",
    id: "test1",
  },
  {
    name: "test2",
    id: "test2",
  },
  {
    name: "test3",
    id: "test3",
  },
];
let test = students.find((x) => x.name === "test");
console.log(test);
let index = students.indexOf(test);
console.log(index);
students.splice(index, 1);
console.log(students);
// console.log(
//   students.splice(students.indexOf(students.find((x) => x.name === "test")), 1)
// );
