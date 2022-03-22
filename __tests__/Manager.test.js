const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('init', () => {
        it('should require a name, ID, and email', () => {
            const manager = new Manager();
            expect('name' in manager).toBe(true);
            expect('id' in manager).toBe(true);
            expect('email' in manager).toBe(true);
        });
    });
    describe('getName', () => {
        it('should return the name', () => {
            const manager = new Manager('Tony', 1, 't@email.com')
            expect(manager.getName()).toBe('Tony');
        });
    });
    describe('getId', () => {
        it('should return the ID', () => {
            const manager = new Manager('Tony', 1, 't@email.com')
            expect(manager.getId()).toBe(1);
        });
    });
    describe('getEmail', () => {
        it('should return the email', () => {
            const manager = new Manager('Tony', 1, 't@email.com')
            expect(manager.getEmail()).toBe('t@email.com');
        });
    });
    describe('getPosition', () => {
        it('should return the position', () => {
            const manager = new Manager('Tony', 1, 't@email.com')
            expect(manager.getPosition()).toBe('Manager');
        });
    });
});