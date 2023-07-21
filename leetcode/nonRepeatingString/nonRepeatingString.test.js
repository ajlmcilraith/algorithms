const findStringfunction = require("./nonRepeatingString");

test("Function returns the correct string length.", () => {
  expect(findStringfunction("abcabcbb")).toEqual(3)
});

test("Function returns the correct string length.", () => {
  expect(findStringfunction("bbbbb")).toEqual(1)
});

test("Function returns the correct string length.", () => {
  expect(findStringfunction("pwwkew")).toEqual(3)
});