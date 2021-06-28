
const countLetters = function(string) {
  let letters = string.split(' ').join('');
  let result = {};
  for (let letter of letters) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

//console.log(countLetters("hello world"));

module.exports = countLetters;
