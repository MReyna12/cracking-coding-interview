// Challenge Two - Cracking the Coding Interview

// Given two strings, write a function to determine if one is a permutation of the other (this means all the same letters at the same frequency, rearranged. So abcd is a permutation of cbda, but abc would not count as a permutation of abcd).
// Stretch: do it without built in methods like contains() or substring(). What's the best time complexity you can get?

// Pseudocode:
//    Add each character from the first string to an object as a key, setting its value as 1 if it does not exist in the object or adding 1 if it does
//    Check to see if each character from the second string exists in the object, if it does subtract 1 from its applicable value in the object, if it does not return false
//    If value in the object drops below zero, return false
//    If the two conditions never return false, then return true
