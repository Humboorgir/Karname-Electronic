const students = [
  {
    name: "ilia",
    username: "test",
  },
];
const editStudent = {
  name: "ilia",
};

let newStudents = students.slice();
console.table(newStudents);
let theStudent = newStudents.find((x) => x.name == editStudent.name);
console.log(theStudent);
let index = newStudents.indexOf(theStudent);
console.log(newStudents[0].name);
newStudents[index].name = "melika";
console.log(newStudents);
