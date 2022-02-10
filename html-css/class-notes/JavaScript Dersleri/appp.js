/* let student = 'Mustafa';

function sayHi(studentName){
    console.log(`Welcome ${studentName}`);
}

sayHi(student) */

let students = ['John', 'Jane', 'Joe'];
// sayHi(students)

function sayHi(studentName){
    console.log(`Welcome ${studentName}`);
}

for (let i = 0; i < students.length; i++) {
    sayHi(students[i])
    
}

function sayHi(student){
    for (let i = 0; i < student.length; i++) {
        console.log(`Welcome ${student[i]}`)
    }
}