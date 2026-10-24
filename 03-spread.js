import { students } from "./data.js";

const Yossi = students[1];
const fixedYossi = { ...Yossi, grade:56 };

console.log(Yossi.grade, fixedYossi.grade);

const newStudent = { id:4, name:"Avi", grade: 70, city: "Akko" };
const allStudents = [...students, newStudent];
console.log(students.length, allStudents.length);
