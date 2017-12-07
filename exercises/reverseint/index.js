// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let sign;
  n < 0 ? sign = -1 : sign = 1;
  n = '' + Math.abs(n);
  n = n.split('').reduce((rev, val) => val + rev, '');
  return  sign * n;
}

module.exports = reverseInt;
