const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('init', () => {
        it('should require a name, ID, and email', () => {
            const engineer = new Engineer();
            expect('name' in engineer).toBe(true);
            expect('id' in engineer).toBe(true);
            expect('email' in engineer).toBe(true);
        });
    });
    describe('getName', () => {
        it('should return the name', () => {
            const engineer = new Engineer('Bruce', 2, 'b@email.com')
            expect(engineer.getName()).toBe('Bruce');
        });
    });
    describe('getId', () => {
        it('should return the ID', () => {
            const engineer = new Engineer('Bruce', 2, 'b@email.com')
            expect(engineer.getId()).toBe(2);
        });
    });
    describe('getEmail', () => {
        it('should return the email', () => {
            const engineer = new Engineer('Bruce', 2, 'b@email.com')
            expect(engineer.getEmail()).toBe('b@email.com');
        });
    });
    describe('getPosition', () => {
        it('should return the position', () => {
            const engineer = new Engineer('Bruce', 2, 'b@email.com')
            expect(engineer.getPosition()).toBe('Engineer');
        });
    });
});