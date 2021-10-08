const { obj1, obj2, obj3 } = require('./obj');


describe('Compare objects', () => {
    it('Compare Obj1 and Obj2', () => {
        expect(obj1).toEqual(obj2);
    });
    it('Compare Obj1 and Obj3', () => {
        expect(obj1).not.toEqual(obj3);
    });
    it('Compare Obj2 and Obj3', () => {
        expect(obj2).not.toEqual(obj3);
    });
});