// Write a function to replace all instances of character c1 with character c2 and vice versa.

function doubleSwap(string, letter1, letter2) {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter1) {
      newString += letter2;
    } else if (string[i] === letter2) {
      newString += letter1;
    } else {
      newString += string[i];
    }
  }
  return newString;
}

console.log(doubleSwap("aabbccc", "a", "b"));
console.log(doubleSwap("asd#ghj%sdnsjd##ncsdj %adjn", "#", "%"));
