const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('init', () => {
        it('should require an officeNumber', () => {
            const manager = new Manager('Tony', 1, 't@email.com', 3000);

            expect('officeNumber' in manager).toBe(true);
        });
    });
});