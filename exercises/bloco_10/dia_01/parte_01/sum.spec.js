const sum = require('./sum');

describe('Verify sum', () => {
    it('If returns 9', () => {
        expect(sum(4, 5)).toEqual(9);
    });
    it('If returns 0', () => {
        expect(sum(0, 0)).toEqual(0);
    });
    it('If returns an error', () => {
        expect(() => { sum(4, '5') }).toThrow();
    });
    it('If message error is parameters must be numbers', () => {
        expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
    });
});