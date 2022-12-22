class Employee {
    constructor(name, surname, position) {
        this.name = name
        this.surname = surname
        this.position = position
    }

    getName() {
        return this.name
    }

    getSurname() {
        return this.surname
    }

    getPosition() {
        return this.position
    }
}

module.exports = Employee