/**
 * Sanitize string
 */
const sanitizeString = (str) => {
  return str
    .toLowerCase() // convert string to lowercase
    .replace(/[^a-z\d]/g, '') // replace every non alphabetical character
    .split('') // split the string into an array
    .sort() // sort the letters alphabetically
    .join(''); // join array of letters into a string
};

/**
 * Filter matches from list of words
 * @param words Array
 * @param input String
 *
 */
export const isAnagram = (words, input) => {
  // Filter list by length
  /*const filteredWords = words.filter((word) => {
    return word.length === input.length;
  });
*/
  // Return matches in list
  return words.filter((word) => {
    return sanitizeString(word) === sanitizeString(input)
  });
};
