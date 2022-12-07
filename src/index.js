const StudentService = require('./services/StudentService')
// firt way
const printer = require('../src/utils/printer')
// second way
const { printStudent } = require('../src/utils/printer')

function main() {
    const student = StudentService.getStudent('Erisa', 'Spahiu', 40)
    const student2 = StudentService.getStudent('Erisa', 'Shala', 60)
    const student3 = StudentService.getStudent('Erisa', 'Shala')
    // first way
    printer.printStudent(student)
    // second way
    printStudent(student2)
    printStudent(student3)
}

main()