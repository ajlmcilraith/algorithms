const findMedianSortedArrays = require("./findMedian");

test("Function returns the correct value for the input arrays.", () => {
  expect(findMedianSortedArrays([1,3],[2])).toEqual(2.00000)
})

test("Function returns the correct value for the input arrays.", () => {
  expect(findMedianSortedArrays([1,2],[3,4])).toEqual(2.50000)
})
