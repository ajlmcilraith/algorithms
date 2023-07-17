let reduceFunctionBeta = function (nums, fn, init) {
  let accumulator = init;
  for (let i = 0; i < nums.length; i++) {
    console.log(
      "numlength: " + nums.length,
      "accumulator: " + accumulator,
      "i: " + i,
      "fn: " + fn
    );
    accumulator = fn(accumulator, nums[i]);
  }
  return accumulator;
};

let reduceFunction = function (nums, fn, init) {
  let accumulator = init;
  for (const i in nums) {
    accumulator = fn(+accumulator, +nums[i]);
  }
  return accumulator;
};

console.log(
    reduceFunction(
      [1, 2, 3, 4],
      function sumFunction(accum, curr) {
        return accum + curr;
      },
      0
    )
);

module.exports = reduceFunction;