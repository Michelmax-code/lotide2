const assert = require('chai').assert;
const tail = require('../tail');


// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// const number = tail([1, 2, 3]);
// assertEqual(number.length, 2);

// const numbers = tail([1, 2, 3]);
// assertEqual(numbers, [2, 3]);


// Mocha and Chai test code
describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
  });
  it(`returns .length 2 for [1, 2, 3]`, () => {
    assert.strictEqual(tail([1, 2, 3]).length, 2);
  });
  it(`returns [2, 3] for [1, 2, 3]`, () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});