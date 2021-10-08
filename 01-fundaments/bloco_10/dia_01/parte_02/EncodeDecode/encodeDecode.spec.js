const { encode, decode } = require('./encodeDecode');

describe('Verify encode and decode functions', () => {
    it('If is a function', () => {
        expect(typeof(encode)).toEqual('function');
        expect(typeof(decode)).toEqual('function');
    });
    it('If returns the right numbers', () => {
        expect(encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5');
        expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u');
    });
    it('If it have the same length', () => {
        expect(encode('trybe').length).toEqual(5);
    });
});