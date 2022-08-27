function hasTargetSum(array, target) {
  // Write your algorithm here
  // iterate through the array
  for (let i = 0; i < array.length; i++) {
    //for athe curent number identify a complement
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      //check if number is our complement
      if (array[j] === complement) return true;
    }
  }
  return false;
}
/* 
  Write the Big O time complexity of your function here
  runtime = O(n^2)
  space complexity : O(n)
*/

/* 
  Add your pseudocode here
  iterate through the array
  for athe curent number identify a complement
  check if number is our complement
  return true if complement 
  else  return false 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;