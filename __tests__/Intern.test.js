const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('init', () => {
        it('should require a name, ID, and email', () => {
            const intern = new Intern('Peter', 3, 'p@email.com', 'Queens University');
            
            expect('school' in intern).toBe(true);
        });
    });

    describe('fetchSchool', () => {
        it('should return the school', () => {
            const intern = new Intern('Peter', 3, 'p@email.com', 'Queens University')

            expect(intern.fetchSchool()).toBe('Queens University');
        });
    });
});