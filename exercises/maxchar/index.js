// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let result = '';
  let max = 0;
  str.split('').reduce((counts, char) => {
    counts[char] = counts[char] || 0;
    counts[char]++;
    result = counts[char] > max ? char : result;
    return counts;
  }, {});
  return result;
}

module.exports = maxChar;
