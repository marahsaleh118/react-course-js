import { students } from "./data.js";
import withStatus from "./report.js";

const newStudents = withStatus(students);

for(const student of newStudents) {
    console.log(`${student.name} : ${student.status}`);
}

console.log(students[0].status);