const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);

        this.gitHub = gitHub;
    };
    fetchGitHub() {
        return this.gitHub;
    };
    getPosition() {
        return "Engineer";
    };
}

module.exports = Engineer;