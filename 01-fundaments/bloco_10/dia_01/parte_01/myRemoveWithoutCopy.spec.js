const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('Verify myRemove function', () => {
    it('If returns [1, 2, 4]', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
    });
    it('If do not returns [1, 2, 4]', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
    });
    it('If returns [1, 2, 3, 4]', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
    });
});