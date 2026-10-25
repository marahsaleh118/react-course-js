
const withStatus = (students) => {
    const newStudents = [];
for(const student of students) {
    const newStudent = { ...student, status: student.grade >= 56? "pass" : "fail"};
    newStudents.push(newStudent);
} 
return newStudents };

export default withStatus; 