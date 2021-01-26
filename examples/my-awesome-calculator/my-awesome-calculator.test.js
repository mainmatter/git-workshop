import awesomeCalculator from "./my-awesome-calculator.js";

describe("awesomeCalculator", function () {
  test("it returns the addition of two numnbers", function () {
    let result = awesomeCalculator(4, 2);
    expect(result).toEqual(6);
  });
});
