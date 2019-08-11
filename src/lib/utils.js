/**
 * Format string
 * @param str String
 * @return String
 */
const formatString = (str) => {
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
 * @return [*]
 */
export const isAnagram = (words, input) => {
  // Return matches in list
  return words.filter((word) => {
    return formatString(word) === formatString(input)
  });
};
