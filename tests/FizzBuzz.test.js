import { fizzBuzz } from "../src/scripts/FizzBuzz";

describe("FizzBuzz", () => {
  test("should return Fizz if divisible by three", () => {
    let numb = 3;
    const result = fizzBuzz(numb);
    expect(result).toBe("Fizz");
  });

  test("should return Buzz if divisible by five", () => {
    let numb = 5;
    const result = fizzBuzz(numb);
    expect(result).toBe("Buzz");
  });

  test("should return FizzBuzz if divisible by five and three", () => {
    let numb = 15;
    const result = fizzBuzz(numb);
    expect(result).toBe("FizzBuzz");
  });
});
test("should return FizzBuzz if divisible by five and three", () => {
  for (let index = 0; index <= 100; index++) {
    const result = fizzBuzz(index);
    console.log(result);
  }
});
