// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function checkLongest(string) {
  let stringArrary = string.split(" ");
  let longest = stringArrary[0];
  

//   for (let i = 0; i < stringArrary.length; i++) {
//     if (longest.length < stringArrary[i].length) {
//       longest = stringArrary[i];
//     }
//   }
for(let i of stringArrary){
    if(i.length > longest.length){
        longest = i;
    }
}
  return longest;
}

let string = "I am learning Programming to become a programmer";
// checkLongest(string);

console.log(checkLongest(string));
