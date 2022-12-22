const EmployeeService = require('./services/EmployeeService')
// firt way
const printer = require('../src/utils/printer')
// second way
const { printEmployee } = require('../src/utils/printer')

function main() {
    const employee = EmployeeService.getEmployee('Erisa', 'Spahiu', 'Manager')
    const employee2 = EmployeeService.getEmployee('Erisa', 'Shala', 'IT')
    const employee3= EmployeeService.getEmployee('Erisa', 'Shala')
    // first way
    printer.printEmployee(employee)
    // second way
    printEmployee(employee2)
    printEmployee(employee3)
}

main()