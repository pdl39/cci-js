// example cases(ec):
// "abcdef", "abcbf"

// 1. use hash table
function isUnique(str) {
  let seenMap = new Map();
  seenMap.set(str[0], 0);
  for (let i = 1; i < str.length; i++) {
    if (str[i] == " ") continue;
    if (seenMap.has(str[i])) {
      return false;
    }
    else {
      seenMap.set(str[i], i);
    }
  }
  return true;
}


// TEST
console.log(isUnique("abcdef"));
console.log(isUnique("abcbf"));
console.log(isUnique("adfjiopefjsio"));
console.log(isUnique("qwertyuiopasdfghjkl"));
console.log(isUnique(""));
console.log(isUnique("a"));
console.log(isUnique("bb"));
console.log(isUnique("ba"));
console.log(isUnique("abc"));
console.log(isUnique("d  g"));