// Palindrome Permutation

// ec: 
// "Tact Coa" --> "taco cat"
// "aacac" --> "aaacc"
// "cddcbb" --> "cdbbdc"

function palperm(str) {
  let strLower = str.toLowerCase();
  let strlength = str.length;

  // map each char to its count
  let strMap = new Map();
  for (let i = 0; i < str.length; i++) {
    if (strLower[i] === " ") strlength--;
    else if (!strMap.has(strLower[i])) strMap.set(strLower[i], 1);
    else strMap.set(strLower[i], strMap.get(strLower[i]) + 1);
  }

  // check if the char's count is odd.
  // if str length is even, one odd count returns false.
  if (strlength % 2 === 0) {
    for (let [key, value] of strMap.entries()) {
      if (value % 2 !== 0) return false;
    }
  }
  // if str length is odd, more than one odd count returns false.
  else {
    let oddCount = 0;

    for (let [key, value] of strMap.entries()) {
      if (value % 2 !== 0) {
        if (oddCount === 0) oddCount++;
        else return false;
      }
    }
  }

  return true;
}

// TEST
console.log(palperm("Tact Coa")); //true
console.log(palperm("Tact Ca")); //true
console.log(palperm("Tact Co")); //false
console.log(palperm("aacac")); //true
console.log(palperm("cddcbb")); //true
console.log(palperm(" dd   gji i j")); //true
console.log(palperm(" dd   gji i j e")); //false
