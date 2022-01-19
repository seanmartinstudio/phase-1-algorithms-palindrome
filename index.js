const { consoleLog } = require("mocha/lib/reporters/base")

function isPalindrome(word) {
  const wordArray = word.split('')
  const wordArrayReverse = wordArray.reverse()
  const wordArrayReverseString = wordArrayReverse.join('')
  if(word === wordArrayReverseString) {
    return true
  } else {
    return false
  } 
}
isPalindrome('mom')
/* 
  Add your pseudocode here
  1. Declare isPalindrome function
  2. isPalindrome needs to accept a string as an argument
  3. Take passed in string and store in variable
  4. Make a copy of the string and reverse the order of the letters
  5. Wite a conditional to evaluate whether the string and backwords string match (is statement?)
*/

/*
  Add written explanation of your solution here
  
*/

// // You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
