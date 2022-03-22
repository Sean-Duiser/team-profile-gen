const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('init', () => {
        it('should require a name, an ID, and an email', () => {
            const employee = new Employee();
            expect('name' in employee).toBe(true);
            expect('id' in employee).toBe(true);
            expect('email' in employee).toBe(true);
        });
    });
    describe('getName', () => {
        it('should return the name', () => {
            const employee = new Employee('Bruce', 2, 'b@email.com')
            expect(employee.getName()).toBe('Bruce');
        });
    });
    describe('getID', () => {
        it('should return the ID', () => {
            const employee = new Employee('Bruce', 2, 'b@email.com')
            expect(employee.getID()).toBe(2);
        });
    });
    describe('getEmail', () => {
        it('should return the email', () => {
            const employee = new Employee('Bruce', 2, 'b@email.com')
            expect(employee.getEmail()).toBe('b@email.com');
        });
    });
});