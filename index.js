// Define a function called isPalindrome that takes a single argument, word.
function isPalindrome(word) {
  // Iterate from the beginning of the string to the middle of the string
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    // Calculate the index of the corresponding letter at the end of the string
    const endIndex = word.length - 1 - startIndex;

    // Compare the letter at the current index with its corresponding letter at the end
    if (word[startIndex] !== word[endIndex]) {
      // If the letters don't match, return false
      return false;
    }
  }

  // If we reach the middle and all the letters match, return true
  return true;
}

/*
  Pseudocode:
  1. Iterate from the beginning of the string to the middle of the string.
  2. Calculate the index of the corresponding letter at the end of the string.
  3. Compare the letter at the current index with its corresponding letter at the end.
  4. If the letters don't match, return false.
  5. If we reach the middle and all the letters match, return true.
*/

/*
  Explanation:
  This function iterates through the string from the beginning to the middle, comparing each letter with its corresponding letter at the end.
  If any pair of letters doesn't match, it returns false immediately.
  If all pairs of letters match until the middle, it returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
