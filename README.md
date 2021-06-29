# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @miguelangel9/lotide`

**Require it:**

`const _ = require('@miguelangel9/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `map`: function map to call the index 0 from each element in an array.
* `head`: function head to call the head element from an  array.
* `tail`: function tail to call the tail from an array.
* `middle`: function to call the middle from an array.
* `findKey`: function to find the key in an object.
* `without`: function to return an Array without a specific element.
* `eqArrays`: function to compare two arrays.
* `eqObjects`: function to compare two objects.
* `countOnly`: function to count only specific elements from an object.
* `takeUntil`: function to take until an especific element from an array.
* `countLetters`: function to count the letters from a string.
* `assertEqual`: function to compare the actual and the expected solution.
* `findKeyByValue`: function to found the key in an object by the value.
* `letterPositions`: function to found the position of a letter in an element.
* `assertArraysEqual`: function to compare two arrays.
* `assertObjectsEqual`: function to compare two objects.