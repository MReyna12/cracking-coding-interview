// Challenge Two - Cracking the Coding Interview

// Given two strings, write a function to determine if one is a permutation of the other (this means all the same letters at the same frequency, rearranged. So abcd is a permutation of cbda, but abc would not count as a permutation of abcd).
// Stretch: do it without built in methods like contains() or substring(). What's the best time complexity you can get?

// Pseudocode:
//    Add each character from the first string to an object as a key, setting its value as 1 if it does not exist in the object or adding 1 if it does
//    Check to see if each character from the second string exists in the object, if it does subtract 1 from its applicable value in the object, if it does not return false
//    If a value === 0, return false
//    If the two conditions never return false, then return true

function checkPermutation(str1, str2) {
  // Clarifying point: If both strings are empty, will this count a valid permutation? If so, then I'd handle this edge case, if not then I'd add to the first conditional below.
  // If the two strings do not have the same length, then the strings cannot be a permutation of each other
  if (str1.length !== str2.length) return false;

  const comparisonObject = {};

  // If we need to adjust for case, then lowercase all applicable characters
  const lowercaseStr1 = str1.slice().toLowerCase();
  const lowercaseStr2 = str2.slice().toLowerCase();

  for (let i = 0; i < lowercaseStr1.length; i++) {
    if (comparisonObject[lowercaseStr1[i]]) {
      comparisonObject[lowercaseStr1[i]] += 1;
    } else {
      comparisonObject[lowercaseStr1[i]] = 1;
    }
  }

  for (let i = 0; i < lowercaseStr2.length; i++) {
    if (
      !comparisonObject[lowercaseStr2[i]] ||
      comparisonObject[lowercaseStr2[i]] === 0
    ) {
      return false;
    } else {
      comparisonObject[lowercaseStr2[i]] -= 1;
    }
  }

  return true;
}
