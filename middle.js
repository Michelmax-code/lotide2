const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let value = 0; value < array1.length; value += 1) {
    if (array1[value] !== array2[value]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  //1 or 2  elements = [];
  if (array.length <= 2) {
    return [];
  } if (array.length % 2 !== 0) {
    //odd numbers = single middle element
    return [array[Math.floor(array.length / 2)]];
  }
  //even numbers = two middle elements
  return [array[(array.length / 2) - 1 ], array[array.length / 2]];
};

assertArraysEqual(middle([4, 5]), []);
assertArraysEqual(middle([5, 6, 7]), [6]);
assertArraysEqual(middle([4, 5, 6, 7, 8, 9]), [6, 7]);
