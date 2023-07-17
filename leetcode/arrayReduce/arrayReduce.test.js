const reduceFunction = require("./arrayReduce");
test("Returns reduced array", () => {
  expect(
    reduceFunction(
      [1, 2, 3, 4],
      function sum(accum, curr) {
        return accum + curr;
      },
      0
    )
  ).toBe(10);
});
test("Returns reduced array", () => {
  expect(
    reduceFunction(
      [1, 2, 3, 4],
      function sum(accum, curr) {
        return accum + curr * curr;
      },
      100
    )
  ).toBe(130);
});
test("Returns initial value if initial array is empty", () => {
  expect(
    reduceFunction(
      [],
      function sum(accum, curr) {
        return 0;
      },
      25
    )
  ).toBe(25);
});
