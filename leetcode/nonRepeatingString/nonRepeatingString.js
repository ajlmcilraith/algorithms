let findStringfunction = function (string) {
  const stringMap = new Map();
  let workingString = string;
  let count = 0;
  let finalCount = 0;
  let done = false;
  if (!workingString.length == 0) {
    do {
      for (let i = 0; i < workingString.length; i++) {
        let char = workingString.charAt(i);
        workingString.length == i +1 ? (done = true) : null;
        if (stringMap.has(char)) {
          stringMap.clear();
          count = 0;
          workingString = workingString.slice(workingString.indexOf(char) + 1);
          break;
        }
        count += 1;
        stringMap.set(workingString.charAt(i), i);
        finalCount <= count ? (finalCount = count) : null;
      }
    } while (!done);
  }
  return finalCount;
};

module.exports = findStringfunction;
