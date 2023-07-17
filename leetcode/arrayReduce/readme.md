# Array Reduce Transformation

- Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
- A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.
- If the length of the array is 0, it should return init.
- Please solve it without using the built-in Array.reduce method.

## Example 1:

> Input:
> nums = [1,2,3,4]<br>
> fn = function sum(accum, curr) { return accum + curr; }<br>
> init = 0<br>
> Output: 10<br>
> Explanation:<br>
> initially, the value is init=0.<br>
> (0) + nums[0] = 1<br>
> (1) + nums[1] = 3<br>
> (3) + nums[2] = 6<br>
> (6) + nums[3] = 10<br>
> The final answer is 10.<br>

## Example 2:

> Input:<br>
> nums = [1,2,3,4]<br>
> fn = function sum(accum, curr) { return <br>accum + curr \* curr; }
> init = 100<br>
> Output: 130<br>
> Explanation:<br>
> initially, the value is init=100.<br>
> (100) + nums[0]^2 = 101<br>
> (101) + nums[1]^2 = 105<br>
> (105) + nums[2]^2 = 114<br>
> (114) + nums[3]^2 = 130<br>
> The final answer is 130.<br>

## Example 3:

> Input:<br>
> nums = []<br>
> fn = function sum(accum, curr) { return 0; }<br>
> init = 25<br>
> Output: 25<br>
> Explanation: For empty arrays, the answer is <br>always init.<br>

## Constraints:

0 <= nums.length <= 1000<br>
0 <= nums[i] <= 1000<br>
0 <= init <= 1000<br>
