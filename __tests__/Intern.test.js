const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('init', () => {
        it('should require a name, ID, and email', () => {
            const intern = new Intern();
            expect('name' in intern).toBe(true);
            expect('id' in intern).toBe(true);
            expect('email' in intern).toBe(true);
        });
    });
    describe('getName', () => {
        it('should return the name', () => {
            const intern = new Intern('Peter', 3, 'p@email.com')
            expect(intern.getName()).toBe('Peter');
        });
    });
    describe('getId', () => {
        it('should return the ID', () => {
            const intern = new Intern('Peter', 3, 'p@email.com')
            expect(intern.getId()).toBe(3);
        });
    });
    describe('getEmail', () => {
        it('should return the email', () => {
            const intern = new Intern('Peter', 3, 'p@email.com')
            expect(intern.getEmail()).toBe('p@email.com');
        });
    });
    describe('getPosition', () => {
        it('should return the position', () => {
            const intern = new Intern('Peter', 3, 'p@email.com')
            expect(intern.getPosition()).toBe('Intern');
        });
    });
});