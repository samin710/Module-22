// Task-3:
// Write a function to count the number of vowels in a string.

function checkVowel(string) {
  let count = 0;
  for (let i of string) {
    i = i.toLowerCase();
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      count++;
    }
  }
  return count;
}

console.log(checkVowel("aeioussaxxeAU"));
