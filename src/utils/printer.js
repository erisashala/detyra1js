function printStudent(student) {
    console.log(`Hello ${student.getName()} ${student.getSurname()}! Your age is ${student.getAge()}`)
}

module.exports = {
    printStudent
}