const Student = require('../model/Student')

class StudentService {
    getStudent(name, surname, age) {
        const student = new Student(name, surname, age)
        return student
    }
}

module.exports = new StudentService()
