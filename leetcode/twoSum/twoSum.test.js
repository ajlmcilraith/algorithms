const twoSumFunction = require("./twoSum");

test("Returns indices of integers in the nums array that would sum to the target integer given.", () => {
  expect(twoSumFunction([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("Returns indices of integers in the nums array that would sum to the target integer given.", () => {
  expect(twoSumFunction([3, 2, 4], 6)).toEqual([1, 2]);
});

test("Returns indices of integers in the nums array that would sum to the target integer given.", () => {
  expect(twoSumFunction([3, 3], 6)).toEqual([0, 1]);
});
