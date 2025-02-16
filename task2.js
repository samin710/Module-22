// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

function found(array, value) {
  let count = 0;

  for (let i of array) {
    if (i === value) {
      count++;
    }
  }
  return count;
}

let array = [5, 6, 11, 12, 98, 5];

console.log(found(array, 25));
