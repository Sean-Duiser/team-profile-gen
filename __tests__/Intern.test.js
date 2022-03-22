const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('init', () => {
        it('should require a name, ID, and email', () => {
            const intern = new Intern('Peter', 3, 'p@email.com', 'Midtown School of Science and Technology');
            
            expect('school' in intern).toBe(true);
        });
    });

    describe('fetchSchool', () => {
        it('should return the school', () => {
            const intern = new Intern('Peter', 3, 'p@email.com', 'Midtown School of Science and Technology')

            expect(intern.fetchSchool()).toBe('Midtown School of Science and Technology');
        });
    });
});