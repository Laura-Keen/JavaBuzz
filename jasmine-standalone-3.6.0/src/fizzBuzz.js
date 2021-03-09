class FizzBuzz {

  _isDivisibleBy(divisor, number) {
    return number % divisor === 0
  }

  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3)
  }

  isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5)
  }

  isDivisibleByFifteen(number) {
    return this._isDivisibleBy(number, 15);
  }
}