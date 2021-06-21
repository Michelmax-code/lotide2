const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return;
};

// test

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(3, 9);
assertEqual("Hi", "hi");
assertEqual("Hi", "Hi");
assertEqual(3, "3");
