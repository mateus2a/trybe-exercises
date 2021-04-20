const uppercase = (str, callback) => {
    callback(str.toUpperCase());
};


describe(() => {
    it('should be return a function', (done) => {
        uppercase('test', (str) => {
            expect(str).toBe('STR');
            done();
        });
    });
});