const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    };
    fetchSchool() {
        return this.school;
    };
    getPosition() {
        return "Intern";
    };
}

module.exports = Intern;