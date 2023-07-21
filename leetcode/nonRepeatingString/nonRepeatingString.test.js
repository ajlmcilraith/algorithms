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

test("Function returns the correct string length.", () => {
  expect(findStringfunction("abhdefbbadreitugh")).toEqual(10)
});

test("Function returns the correct string length, problem case.", () => {
  expect(findStringfunction("dvdf")).toEqual(3)
})

test("Function returns the correct string length, problem case.", () => {
  expect(findStringfunction("pwwkew")).toEqual(3)
})