const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [4, 5]", () => {
    assert.deepEqual(middle([4, 5]), []);
  });
  it(`returns [6] for [5, 6, 7`, () => {
    assert.deepEqual(middle([5, 6, 7]), [6]);
  });
  it(`returns [6, 7] for [4, 5, 6, 7, 8, 9]`, () => {
    assert.deepEqual(middle([4, 5, 6, 7, 8, 9]), [6, 7]);
  });
});