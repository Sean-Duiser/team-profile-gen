const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('init', () => {
        it('should require a valid GitHub username', () => {
            const engineer = new Engineer('Bruce', 2, 'b@mail.com', 'h4x04_Hulk');

            expect('github' in engineer).toBe(true);
        });
    });
    describe('fetchGitHub', () => {
        it('should return the GitHub username', () => {
            const engineer = new Engineer('Bruce', 2, 'b@email.com', 'h4x04_Hulk')

            expect(engineer.fetchGitHub()).toBe('h4x04_Hulk');
        });
    });
});