const middle = function(array) {
  if (array.length <= 2) {
    return []; //1 or 2  elements = [];
  } if (array.length % 2 !== 0) {
    return [array[Math.floor(array.length / 2)]]; //odd numbers = single middle element
  }
  return [array[(array.length / 2) - 1 ], array[array.length / 2]]; //even numbers=two middle elements
};

module.exports = middle;

