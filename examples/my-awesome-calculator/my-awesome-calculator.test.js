import awesomeCalculator from "./my-awesome-calculator.js";

describe("awesomeCalculator", function () {
  test("it returns the addition of two numnbers", function () {
    let { addition } = awesomeCalculator(4, 2);
    expect(addition).toEqual(6);
  });

  test("it returns the division of two numnbers", function () {
    let { division } = awesomeCalculator(4, 2);
    expect(division).toEqual(2);
  });
});
