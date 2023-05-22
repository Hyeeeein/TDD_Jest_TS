import Calculator from "../calculator";

describe("Calculator", () => {
  let cal: Calculator;

  beforeEach(() => {
    cal = new Calculator();
  });

  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("adds", () => {
    cal.set(9);
    cal.add(1);
    expect(cal.value).toBe(10);
  });

  it("subtracts", () => {
    cal.subtract(1);
    expect(cal.value).toBe(-1);
  });

  it("multiplies", () => {
    cal.set(9);
    cal.multiply(5);
    expect(cal.value).toBe(45);
  });

  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it("4 / 2 === 2", () => {
      cal.set(4);
      cal.divide(2);
      expect(cal.value).toBe(2);
    });
  });
});
