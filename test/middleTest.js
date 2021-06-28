const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([4, 5]), []);
assertArraysEqual(middle([5, 6, 7]), [6]);
assertArraysEqual(middle([4, 5, 6, 7, 8, 9]), [6, 7]);