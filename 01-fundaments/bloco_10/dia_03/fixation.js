const { somar, subtrair, multiplicar, dividir } = require('./math');

describe('Verify Math', () => {
    it('subtract', () => {
        subtrair.mockImplementation((a, b) => a - b);
        subtrair(1, 2);

        expect(subtrair).toHaveBeenCalled();
        expect(subtrair).toHaveBeenCalledTimes(1);
        expect(subtrair).toHaveBeenCalledWith(1, 2);
        expect(subtrair(1, 2)).toBe(-1);
    });

    it('multiply', () => {
        multiplicar.mockImplementation((a, b) => a * b);
        multiplicar(2, 5);

        expect(multiplicar).toHaveBeenCalled();
        expect(multiplicar).toHaveBeenCalledTimes(1);
        expect(multiplicar).toHaveBeenCalledWith(1, 2);
        expect(multiplicar(2, 5)).toBe(10);
    });

    it('division', () => {
        dividir.mockImplementation((a, b) => a * b);
        dividir(2, 5);

        expect(dividir).toHaveBeenCalled();
        expect(dividir).toHaveBeenCalledTimes(1);
        expect(dividir).toHaveBeenCalledWith(1, 2);
        expect(dividir(2, 5)).toBe(15);
    });
});