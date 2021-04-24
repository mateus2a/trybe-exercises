const service = require('./random');

it('Verify getRandomNumber Function', () => {
    service.getRandomNumber = jest.fn().mockReturnValue(10);
    
    expect(service.getRandomNumber()).toBe(10);
    expect(service.getRandomNumber).toHaveBeenCalled();
    expect(service.getRandomNumber).toHaveBeenCalledTimes(1);
});

it("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
    service.getRandomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
  
    expect(service.getRandomNumber(10, 2)).toBe(5);
    expect(service.getRandomNumber).toHaveBeenCalled();
    expect(service.getRandomNumber).toHaveBeenCalledTimes(1);
    expect(service.getRandomNumber).toHaveBeenCalledWith(10, 2);
});

describe("testando implementações", () => {
    test("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
      service.getRandomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
  
      expect(service.getRandomNumber(2, 3, 4)).toBe(24);
      expect(service.getRandomNumber).toHaveBeenCalled();
      expect(service.getRandomNumber).toHaveBeenCalledTimes(1);
      expect(service.getRandomNumber).toHaveBeenCalledWith(2, 3, 4);
    });
  
    test("mockando função que recebe um parâmetro e retorna seu dobro", () => {
      service.getRandomNumber.mockReset();
      expect(service.getRandomNumber).toHaveBeenCalledTimes(0);
  
      service.getRandomNumber.mockImplementation(a => a * 2);
  
      expect(service.getRandomNumber(5)).toBe(10);
      expect(service.getRandomNumber).toHaveBeenCalled();
      expect(service.getRandomNumber).toHaveBeenCalledTimes(1);
      expect(service.getRandomNumber).toHaveBeenCalledWith(5);
    });
  });