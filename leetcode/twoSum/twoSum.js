let twoSumFunction = function (numberArray, target) {
  
  // Declare result 
  let result = [];

  // Loop over the array twice
  for (i in numberArray) {

    // If the result is populated, end the loop
    // ! This could be a while loop
    if (result.length >= 2 ) {
      break;
    }
    // Loop again inside the initial loop
    for (j in numberArray) {

      // Check the sum against the target and rule out checking the same one twice
      // ? Could this be a for(let j = i + 1; etc) loop? 
      if (numberArray[i] + numberArray[j] === target && i !== j) {

        // Push indices to the result array
        result.push(+i, +j);

        // Break out of the inner loop
        break;
      }
    }
  }
  // Return result array
  return result;
};

module.exports = twoSumFunction;
