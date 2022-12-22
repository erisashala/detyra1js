const Employee = require('../model/Employee')

class EmployeeService {
    getStudent(name, surname, position) {
        const employee = new Employee (name, surname, position)
        return employee
    }
}

module.exports = new EmployeeService()
