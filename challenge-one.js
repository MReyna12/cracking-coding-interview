// Challenge One - Cracking the Coding Interview

// Develop an algorithm to determine if a string contains all unique characters.
function uniqueCharacters(str) {
  // Clarification point: Does an empty string count as a sting containing "all unique characters"?
  // If there is only one character or an empty string (assuming empty string === unique), then the string contains all unique characters.
  if (str.length < 2) return true;

  // Clarification point: If a letter exists in the string in both lowercase and uppercase form, is that considered unique?
  // Assumed that lowercase and uppercase form of a letter does not make a character unique, so turned all letters lowercase.
  const stringCopy = str.slice().toLowerCase();

  const comparisonObject = {};

  for (let i = 0; i < stringCopy.length; i++) {
    if (comparisonObject[stringCopy[i]]) {
      return false;
    } else {
      comparisonObject[stringCopy[i]] = 1;
    }
  }

  return true;
}

// Without using additional data structures
function uniqueCharacters2(str) {
  if (str.length < 2) return true;

  const stringCopy = str.slice().toLowerCase();

  let comparisonString = "";

  for (let i = 0; i < stringCopy.length; i++) {
    if (comparisonString.includes(stringCopy[i])) {
      return false;
    } else {
      comparisonString += stringCopy[i];
    }
  }

  return true;
}
