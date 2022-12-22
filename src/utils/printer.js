function printEmployee(employee) {
    console.log(`Hello ${employee.getName()} ${employee.getSurname()}! Your position is ${employee.getPosition()}`)
}

module.exports = {
    printEmployee
}