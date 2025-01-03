// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    min = array[i] < min ? array[i] : min;
  }
  return min;
}

export function findMaxValueInArray(array) {
  let max = null
  for (let i = 1; i < array.length; i++) {
    max = array[i] > max ? array[i] : max;
  }
  return max
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
