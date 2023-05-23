class Calculator {
  value: number;
  constructor() {
    this.value = 0;
  }

  set(num: number) {
    this.value = num;
  }

  clear() {
    this.value = 0;
  }

  add(num: number) {
    const sum = this.value + num;

    this.value = sum;
  }

  subtract(num: number) {
    this.value = this.value - num;
  }

  multiply(num: number) {
    this.value = this.value * num;
  }

  divide(num: number) {
    this.value = this.value / num;
  }
}

export default Calculator;
