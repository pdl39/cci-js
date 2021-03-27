// Check Permutation

// ec:
// ("abcde", "cdabe")
// ("abbdef", "badfeb")

function checkPerm(str1, str2) {  
  let str1Map = new Map();
  
  // map str1 chars to count.
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === " ") continue;
    if (!str1Map.has(str1[i])) {
      str1Map.set(str1[i], 1);
    }
    else {
      str1Map.set(str1[i], str1Map.get(str1[i]) + 1);
    }
  }
  
  // check if str2 chars are all in str1 with equal count.
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === " ") continue;
    if (!str1Map.has(str2[i])) return false;
    str1Map.set(str2[i], str1Map.get(str2[i]) - 1);
    if (str1Map.get(str2[i]) < 0) return false;
  }

  return true;
}

// TEST
console.log(checkPerm("abcde", "cbade")); //true
console.log(checkPerm("abbdef", "badfeb")); //true
console.log(checkPerm("acdfe", "djioe")); //false
console.log(checkPerm("dio", "ee")); //false
console.log(checkPerm("abcde", "cbade")); //true
console.log(checkPerm(" ffefj", "f  jf fe")); //true
console.log(checkPerm(" ffefj", "f e jf fe")); //false